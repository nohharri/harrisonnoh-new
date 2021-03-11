
import React from 'react';
import Header from '../Header/Header';
import styles from './Travel.module.scss';
import getGraphQL from '../../helpers/graphql';
import moment from 'moment';
import Map from '../../components/Map/Map';

export default class Travel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: {},
            itinerary: [],
        };
    }
    componentDidMount() {
        this.getTrip();
        this.getItinerary();
    }

    /**
     * Gets the latest trip.
     */
    async getTrip() {
        const { latestTrip } = await getGraphQL(`
        {
          latestTrip {
            id,
            location,
            dateStart,
            dateEnd,
          }
        }
        `);

        this.setState({ trip: latestTrip });
    }

    /**
     * Gets the itineraries for a specific trip.
     */
    async getItinerary() {
        const { itinerary } = await getGraphQL(`
        {
            itinerary {
                description,
                map,
            }
        }
        `)
        this.setState({ itinerary });
    }


    render() {
        const { trip: { 
            location = '', 
            dateStart,
            dateEnd,
        }, itinerary } = this.state;

        let src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1511572.505984863!2d-86.45915196334781!3d42.272331443496945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8824c1264437bded%3A0x225564173939d6b5!2s2800%20Homewood%20Drive%2C%20Troy%2C%20MI!3m2!1d42.5955504!2d-83.2043719!4m5!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!3m2!1d41.8781136!2d-87.6297982!5e0!3m2!1sen!2sus!4v1615417144842!5m2!1sen!2sus';

        let start = moment(dateStart).format('MMMM Do YYYY');
        let end = moment(dateEnd).format('MMMM Do YYYY');

        return (
            <div className={styles.container}>
                <Header />
                <h1 className={styles.location}>🌆 {location} 🌉</h1>
                <h2>{start} - {end}</h2>
                <h1>Itinerary</h1>
                
                {
                    itinerary.map((val, idx) => {
                        const { description, map = null } = val;
                        return (<div key={idx}>
                            <p className={styles.description}>{description}</p>
                            {map && <Map src={map} />}
                        </div>);
                    })
                }
                <h1>Photos</h1>
                <p className={styles.comingSoon}>Coming Soon!</p>
            </div>
        )
    }
}