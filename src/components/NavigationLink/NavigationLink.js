import React, { Fragment } from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MEDIA_QUERIES } from '../../constants';

export default class NavigationLink extends React.PureComponent {
    render() {
        const { icon, children, className } = this.props;
        
        return (
            <Media queries={MEDIA_QUERIES}>
            {matches => (
                <Fragment>
                    {matches.small && <FontAwesomeIcon className={className} icon={icon} />}
                    {matches.large && <span className={className}>{children}</span>}
                </Fragment>
            )}
            </Media>
        )
    }
}


