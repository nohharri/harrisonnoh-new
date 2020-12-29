import React from 'react';
import Popup from 'reactjs-popup';
import { fonts } from '../../constants';

const style = {
    fontSize: 20,
    borderRadius: '2em',
    border: 'none',
    outline: 0,
    padding: '.8em 1em .8em 1em',
    cursor: 'pointer',
    fontFamily: fonts.rubik,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
}

/**
 * Big button that exists on the front page. Can be customized
 * to change colors based off its parent prop. Defaulted at gray.
 */
export default class BigButton extends React.PureComponent {
    render() {
        const { className, children, style: propsStyle } = this.props;

        const rendered = this.props.popup ? 
            <Popup overlayStyle={{background: 'rgba(0,0,0,0.5)'}} trigger={<button style={{...style, ...propsStyle}}>Contact me</button>} modal>
                {close => this.props.popup(close)}
            </Popup> :
            <button className={className} style={{...style, ...propsStyle}}>{children}</button>

         return rendered;
    }
}
