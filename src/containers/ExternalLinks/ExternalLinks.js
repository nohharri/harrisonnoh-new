import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitterSquare, faMedium } from '@fortawesome/free-brands-svg-icons';
import styles from './ExternalLinks.module.scss';

// All social media links with associated icon.
const links = [
    { link: 'https://www.linkedin.com/in/nohharri', icon: faLinkedin },
    { link: 'https://github.com/nohharri', icon: faGithub },
    { link: 'https://twitter.com/uwurrison', icon: faTwitterSquare },
    { link: 'https://medium.com/@harrisonnoh', icon: faMedium },
];

/**
 * Links to external websites. Currently has:
 * - LinkedIn
 * - Github
 * - Twitter
 */
export default class ExternalLinks extends React.PureComponent {
    render() {
        const { className: parentClassName } = this.props;
        return (
            <div className={styles.container + ' ' + parentClassName}>
                {
                    links.map((val, idx) => {
                        return <div key={idx} className={styles.icon}>
                                <a className={styles.link} 
                                   target="_blank" 
                                   rel="noreferrer" 
                                   href={val.link}
                                ><FontAwesomeIcon icon={val.icon} /></a>
                            </div>
                    })
                }
            </div>
        )
    }
}
