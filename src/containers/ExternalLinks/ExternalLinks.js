import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './ExternalLinks.styles';

/**
 * Links to external websites. Currently has:
 * - LinkedIn
 * - Github
 * - Twitter
 */
export default class ExternalLinks extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></div>
                <div style={styles.icon}><FontAwesomeIcon icon={faGithub} /></div>
                <div style={styles.icon}><FontAwesomeIcon icon={faTwitterSquare} /></div>
            </div>
        )
    }
}