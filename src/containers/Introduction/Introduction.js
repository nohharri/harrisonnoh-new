import React from 'react';
import BigButton from '../../components/Buttons/BigButton';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import { colors } from '../../constants';
import './Introduction.scss';

/**
 * Introduction of the screen featuring the buttons and 
 * social media navigation links.
 */
export default class Introduction extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="introduction-title">Hi, I'm Harrison!</div>
                <div className="introduction-caption">I'm a software engineer, designer, and currently learning chess. I ❤️ creating intuitive user experiences. My current favorite technologies are React Native and Netlify. I am trying my best.</div>
                <BigButton className="resume-button button" style={{ color: 'white', marginBottom: 20 }}>Resume</BigButton>
                <BigButton className="contact-me-button button" style={{ color: colors.black, marginLeft: 10 }}>Contact me</BigButton>
                <ExternalLinks />
            </div>
        )
    }
}
