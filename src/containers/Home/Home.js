import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';
import Introduction from '../Introduction/Introduction';
import BlogList from '../BlogList/BlogList';
import background from '../../static/mountain.jpg';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.scss';
import NavigationLink from '../../components/NavigationLink/NavigationLink';

export default class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Parallax bgImage={background} strength={300} className="background">
                    <div className="fakeBackground">
                        <Header />
                        <Introduction />
                    </div>
                </Parallax>
                <div className={styles.container}>
                    <NavigationLink link="/travel">
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>
                                <span className={styles.plane}>
                                    <FontAwesomeIcon icon={faPlane} />
                                </span>
                            </div>
                        </div>
                        <div className={styles.iconDescription}>Travel</div>
                    </NavigationLink>
                </div>
                <BlogList />
            </Fragment>
        )
    }
}