import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import logo from '../../static/kolor.png';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img alt="profile" className={styles.logoImg} src={logo} />Harrison
                    </Link>
                </div>
                <div className={styles.navigation}>
                    <NavigationLink link="/code" icon={faCode} className={styles.navigationLink}>code</NavigationLink>
                    {/* <NavigationLink icon={faPaintBrush} className={styles.navigationLink + ' ' + styles.disabled}>design</NavigationLink>
                    <NavigationLink icon={faCameraRetro} className={styles.navigationLink + ' ' + styles.disabled}>photography</NavigationLink> */}
                </div>
            </div>
        );
    }    
}
