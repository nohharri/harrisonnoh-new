import React from 'react';
import Popup from 'reactjs-popup';
import styles from './BigButton.module.scss';

/**
 * Big button that exists on the front page. Can be customized
 * to change colors based off its parent prop. Defaulted at gray.
 */
export default class BigButton extends React.PureComponent {
    render() {
        const { className, children, style: propsStyle, onClick } = this.props;

        const rendered = this.props.popup ? 
            <Popup overlayStyle={{background: 'rgba(0,0,0,0.5)'}} trigger={<button className={styles.container + ' ' + className}>Contact me</button>} modal>
                {close => this.props.popup(close)}
            </Popup> :
            <button onClick={onClick} className={styles.container + ' ' + className} style={propsStyle}>{children}</button>

         return rendered;
    }
}
