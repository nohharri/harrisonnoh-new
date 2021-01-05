import React from 'react';
import { faPaintBrush, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import logo from '../../static/kolor.png';
import NavigationLink from '../../components/NavigationLink/NavigationLink';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img alt="profile" className={styles.logoImg} src={logo} />
                    Harrison</div>
                <div className={styles.navigation}>
                    <NavigationLink icon={faPaintBrush} className={styles.navigationLink}>design</NavigationLink>
                    <NavigationLink icon={faCameraRetro} className={styles.navigationLink}>photography</NavigationLink>
                </div>
            </div>
        );
    }    
}
