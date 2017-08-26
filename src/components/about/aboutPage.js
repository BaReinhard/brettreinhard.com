import React from 'react';
import PropTypes from 'prop-types';
import home from '../../img/homberg.jpg';
import TypedJS from 'typed-react-component';
import { Image, Col, Grid } from 'react-bootstrap';
import './about.css';
let props = {
    typings: ['About Me...'],
    loop: false,
    typeSpeed: 15,
    delay: 1200,
    startDelay: 0,
    style: {
        fontFamily: 'Lobster,cursive',
        color: 'black',
        fontSize: '3em',
        lineHeight: '1em',
    },
};
let content = {
    typings: [],
    style: {
        fontFamily: 'Tinos, serif',
        fontSize: '2em',
    },
};
let next = {
    typings: ['Whats next?'],
    style: {
        fontFamily: 'Tinos,serif',
        color: 'black',
        fontSize: '2em',
        lineHeight: '1em',
    },
};
let nextTitle = {
    typings: [''],
    style: {
        fontFamily: 'Lobster,cursive',
        color: 'black',
        fontSize: '3em',
        lineHeight: '1em',
    },
};
export default class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
            displayContent: false,
            aboutBlinker: {},
            contentBlinker: {},
            nextBlinker: {},
            nextTitleBlinker: {},
            next: false,
            nextTitle: false,
        };
    }
    aboutComplete = () => {
        this.setState({
            displayContent: true,
            aboutBlinker: { opacity: 0 },
        });
    };
    render() {
        return (
            <div className="about-container" style={{ background: `url(${home})` }}>
                <div className="about-content">
                    <div className="about-top">
                        <div xs={12} md={6}>
                            <Image
                                className="about-image"
                                src={'https://avatars0.githubusercontent.com/u/13072194?v=4&s=460'}
                            />
                        </div>
                        <div xs={12} md={6}>
                            <div className="about-info-container">
                                <p align="left">
                                    <span className="bold">Email:</span>Brett@Reinhards.us
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="about-content-text">
                        <h3 className="about-content-title">About me</h3>
                        <div>
                            Hi, my name is Brett Reinhard. I am a passionate Programmer/Coder/Developer. I have been
                            programming for a little over 2 years. My programming career stemmed from a mandatory class
                            while pursuing a second Bachelors in Mechanical Engineering. Since then I have changed
                            career paths and have been spending as much time as possible learning new technologies and
                            languages.I recently completed a Coding Bootcamp at West Los Angeles Community College,
                            where I fell in love with Web Development, more specifically developing web applications.
                            Since, being introduced to Web Development I have spent a majority of my time learning more
                            and programming applications.
                        </div>
                        <h3 className="about-content-title">What's Next?</h3>
                        <div>
                            Hi, my name is Brett Reinhard. I am a passionate Programmer/Coder/Developer. I have been
                            programming for a little over 2 years. My programming career stemmed from a mandatory class
                            while pursuing a second Bachelors in Mechanical Engineering. Since then I have changed
                            career paths and have been spending as much time as possible learning new technologies and
                            languages.I recently completed a Coding Bootcamp at West Los Angeles Community College,
                            where I fell in love with Web Development, more specifically developing web applications.
                            Since, being introduced to Web Development I have spent a majority of my time learning more
                            and programming applications.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
