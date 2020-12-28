import React from 'react';
import BigButton from '../../components/Buttons/BigButton';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import { colors, RESUME_LINK } from '../../constants';
import styles from './Introduction.module.scss';

/**
 * Introduction of the screen featuring the buttons and 
 * social media navigation links.
 */
export default class Introduction extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.introductionTitle}>Hi, I'm Harrison!</div>
                <div className={styles.introductionCaption}>I'm a software engineer, designer, and currently learning chess. I ❤️ creating intuitive user experiences. My current favorite technologies are React Native and Netlify. I am trying my best.</div>
                <BigButton className={styles.resumeButton} style={{ color: 'white', marginBottom: 20 }}><a className={styles.link} target="_blank" href={RESUME_LINK}>Resume</a></BigButton>
                <BigButton className={styles.contactMeButton} style={{ color: colors.black, marginLeft: 10 }}>Contact me</BigButton>
                <ExternalLinks />
            </div>
        )
    }
}
