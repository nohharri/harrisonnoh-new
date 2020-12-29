import React from 'react';
import BigButton from '../../components/Buttons/BigButton';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { colors, RESUME_LINK } from '../../constants';
import styles from './Introduction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EMAIL } from '../../constants';

/**
 * Introduction of the screen featuring the buttons and 
 * social media navigation links.
 * Using workaround for button in popup because of this: https://stackoverflow.com/questions/61862978/ref-current-contains-is-not-a-function-in-react
 */
export default class Introduction extends React.Component {

    // Gets the popup for contact me.
    // Doing a join here to avoid website scrapers.
    getContactPopup() {
        return (
            <div className={styles.popupContent}>
                <h1>Contact me</h1>
                <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;{EMAIL.join('')}</p>
            </div>
        );
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.introductionTitle}>Hi, I'm Harrison!</div>
                <div className={styles.introductionCaption}>I'm a software engineer, designer, and currently learning chess. I ❤️ creating intuitive user experiences. My current favorite technologies are React Native and Netlify. I am trying my best.</div>
                
                <a className={styles.link} rel="noreferrer" target="_blank" href={RESUME_LINK}>
                    <BigButton className={styles.resumeButton} style={{ color: 'white', marginBottom: 20 }}>
                        Resume &nbsp;<FontAwesomeIcon icon={faGoogleDrive} />
                    </BigButton>
                </a>

                <BigButton popup={this.getContactPopup} className={styles.contactMeButton} style={{ color: colors.black, marginBottom: 20 }}>
                    Contact Me!
                </BigButton>
                <ExternalLinks />
            </div>
        )
    }
}
