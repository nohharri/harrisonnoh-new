import React, { Fragment } from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MEDIA_QUERIES } from '../../constants';
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';

export default class NavigationLink extends React.PureComponent {
    render() {
        const { icon, children, className, link } = this.props;
        
        return (
            <NavLink to={link} activeClassName={styles.active}>
                <Media queries={MEDIA_QUERIES}>
                {matches => (
                    <Fragment>
                        {matches.small && <FontAwesomeIcon className={className} icon={icon} />}
                        {matches.large && <span className={className}>{children}</span>}
                    </Fragment>
                )}
                </Media>
            </NavLink>
        )
    }
}


