import React from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import ExternalLinks from '../ExternalLinks/ExternalLinks';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.caption}>made with react&nbsp; <FontAwesomeIcon icon={faReact} />, netlify, & 💜 </div>
                <ExternalLinks className={styles.links} />
            </div>
        );
    }
}
