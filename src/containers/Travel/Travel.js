
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