import React from 'react';
import styles from './Header.module.scss';
import logo from '../../static/kolor.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img alt="profile" className={styles.logoImg} src={logo} />
Harrison</div>
                <div className={styles.navigation}>
                    <span className={styles.navigationLink}>design</span>
                    <span className={styles.navigationLink}>photography</span>
                </div>
            </div>
        );
    }    
}
