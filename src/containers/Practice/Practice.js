import React from 'react';
import BigButton from '../../components/Buttons/BigButton';
import styles from './Practice.module.scss';

// Start with an initial value of 20 seconds
const TIME_LIMIT_DEFAULT = 30;
const TIME_LIMIT_20 = 20 * 60;
const TIME_LIMIT_40 = 40 * 60;

const TIMER_WARNING = {
    THREE_THIRDS: "Think of different test cases. You should be thinking of a solution with your interviewer. Come up with a primitive solution.",
    TWO_THIRDS: "You should have a solution. Start writing pseudocode and think about how you want to implement your solution.",
    ONE_THIRDS: "You should be testing and compiling your code. Look for any errors. Discuss your time and space complexity.",

}

const TIMER_STATE = {
    RUNNING: 'RUNNING',
    IDLE: 'IDLE',
    FINISHED: 'FINISHED',
}

const PATH_COLOR = {
    GREEN: '#c3ff1f',
    YELLOW: '#ffd91c',
    RED: '#ff5d2b',
}

// Value represents at how many increments we want to go down by.
// Making this value larger will make a smoother animation but more calls.
const FULL_DASH_ARRAY = 283;

function formatTime(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

export default class Practice extends React.Component {

    constructor(props) {
        super(props);
        // Initially, no time has passed, but this will count up
        // and subtract from the TIME_LIMIT
        this.state = {
            timePassed: 0, 
            timeLimit: TIME_LIMIT_DEFAULT,
            timeLeft: TIME_LIMIT_DEFAULT,
            timerButtonVal: 'Start!',
            timerState: TIMER_STATE.IDLE,
            strokeDashArray: FULL_DASH_ARRAY,
        };

        this.timerInterval = null;

    }

    onTimerClicked = () => {
        const { timerState } = this.state;
        
        switch(timerState) {
            case TIMER_STATE.IDLE:
                this.setState({ timerState: TIMER_STATE.RUNNING });
                this.startTimer();
                break;
            case TIMER_STATE.RUNNING:
                this.setState({ timerState: TIMER_STATE.IDLE });
                this.resetTimer();
                break;
            case TIMER_STATE.FINISHED:
                this.setState({ timerState: TIMER_STATE.IDLE });
                this.resetTimer();
                break;
            default:
                return;
        }
    }

    setCircleDasharray = () => {
        const { timeLeft, timeLimit } = this.state;
        const circleDasharray = `${(
          (timeLeft / timeLimit) * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        this.setState({ strokeDashArray: circleDasharray });
    } 

    resetTimer = (time = TIME_LIMIT_DEFAULT) => {
        this.setState({ strokeDashArray: FULL_DASH_ARRAY });
        this.setState({ timeLimit: time, timeLeft: time, timerButtonVal: 'Start!' });
        clearInterval(this.timerInterval);
    }

    startTimer = () => {
        this.setState({ timerButtonVal: 'Reset timer' });

        this.timerInterval = setInterval(() => {
            const { timeLeft } = this.state;
            
            // The amount of time passed increments by one
            let newTimeLeft = timeLeft - 1;

            // The time left label is updated
            this.setState({ timeLeft: newTimeLeft });

            if (newTimeLeft <= 0) {
                this.setState({ timerState: TIMER_STATE.FINISHED });
                clearInterval(this.timerInterval);
            }

            this.setCircleDasharray();
            
        }, 1000);
    }

    onTimePressed = (time) => {
        this.setState({ timerState: TIMER_STATE.IDLE });
        this.resetTimer(time);
    }

    render() {
        const { timeLeft, timerButtonVal, strokeDashArray, timeLimit } = this.state;
        let color = "";
        let warning = "";

        const TIMER_VALUE = {
            ONE_THIRDS: 0,
            TWO_THIRDS: timeLimit - (timeLimit / 3 * 2),
            THREE_THIRDS: timeLimit - (timeLimit / 3),
        }

        if (timeLeft === timeLimit) {
            color = PATH_COLOR.GREEN;
            warning = "";
        } else if (timeLeft > TIMER_VALUE.THREE_THIRDS) {
            color = PATH_COLOR.GREEN;
            warning = TIMER_WARNING.THREE_THIRDS;
        } else if (timeLeft > TIMER_VALUE.TWO_THIRDS) {
            color = PATH_COLOR.YELLOW;
            warning = TIMER_WARNING.TWO_THIRDS;
        } else {
            color = PATH_COLOR.RED;
            warning = TIMER_WARNING.ONE_THIRDS;
        }

        return (
            <div>
                <h1>🏀 Practice</h1>
                <p>Timer for practicing coding interviews.</p>
                <BigButton className={styles.timerButton + ' ' + styles.button} onClick={this.onTimerClicked}>{timerButtonVal}</BigButton>
                <BigButton className={styles.button} onClick={() => this.onTimePressed(TIME_LIMIT_20)}>20m</BigButton>
                <BigButton className={styles.button} onClick={() => this.onTimePressed(TIME_LIMIT_DEFAULT)}>30m</BigButton>
                <BigButton className={styles.button} onClick={() => this.onTimePressed(TIME_LIMIT_40)}>40m</BigButton>
                <div className={styles.container}>
                    <div className={styles.timerContainer}>
                        <svg className={styles.timerCircle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <circle className={styles.path} cx="50" cy="50" r="45" />
                            <path
                                style={{color}}
                                className={styles.pathRemaining}
                                strokeDasharray={strokeDashArray}
                                d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                                "
                            ></path>
                            </g>
                        </svg>
                        <span className={styles.label}>{formatTime(timeLeft)}</span>
                    </div>
                    <p className={styles.warning}>{warning}</p>
                </div>
            </div>
        )
    }
}