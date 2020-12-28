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
export default function BigButton(props) {
    return <button className={props.className} style={{...style, ...props.style}}>{props.children}</button>
}
