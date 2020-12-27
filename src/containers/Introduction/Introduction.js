import React from 'react';
import BigButton from '../../components/Buttons/BigButton';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import styles from './Introduction.styles';
import { color, colors } from '../../constants';

/**
 * Introduction of the screen featuring the buttons and 
 * social media navigation links.
 */
export default class Introduction extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.introductionTitle}>Hi, I'm Harrison!</div>
                <div style={styles.introductionCaption}>I'm a software engineer, designer, and currently learning chess. I ❤️ creating intuitive user experiences. My current favorite technologies are React Native and Netlify. I am trying my best.</div>
                <BigButton style={{ color: 'white', backgroundColor: colors.pink, marginBottom: 20 }}>Resume</BigButton>
                <BigButton style={{ color: colors.black, marginLeft: 10 }}>Contact me</BigButton>
                <ExternalLinks />
            </div>
        )
    }
}
