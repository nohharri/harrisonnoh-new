import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './ExternalLinks.styles';
import './ExternalLinks.css';

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
                <div style={styles.icon}><a target="_blank" href="https://www.linkedin.com/in/nohharri"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                <div style={styles.icon}><a target="_blank" href="https://github.com/nohharri"><FontAwesomeIcon icon={faGithub} /></a></div>
                <div style={styles.icon}><a target="_blank" href="https://twitter.com/uwurrison"><FontAwesomeIcon icon={faTwitterSquare} /></a></div>
            </div>
        )
    }
}
