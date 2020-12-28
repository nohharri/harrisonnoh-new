import React from 'react';

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.styles';

export default class Footer extends React.Component {
    render() {
        return <div style={styles.footer}>made with react &nbsp; <FontAwesomeIcon icon={faReact} />, netlify, & 💜 </div>
    }
}