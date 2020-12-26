import React from 'react';

import styles from './Header.styles';

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.logo}>Harrison</div>
                <div style={styles.navigation}>
                    <span style={styles.navigationLink}>design</span>
                    <span style={styles.navigationLink}>photography</span>
                </div>
            </div>
        );
    }    
}
