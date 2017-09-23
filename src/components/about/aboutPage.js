import React from 'react';
import PropTypes from 'prop-types';
import home from '../../img/homberg.jpg';
import TypedJS from 'typed-react-component';
import { Link } from 'react-router-dom';
import { Image, Col, Grid } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './about.css';
import '../../index.css';
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
    componentDidMount() {
        window.scrollTo(0, 0);
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
                <ReactCSSTransitionGroup
                    transitionName="bottom-up"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className="about-content">
                        <div className="about-top">
                            <div>
                                <Image
                                    className="about-image"
                                    src={'https://avatars0.githubusercontent.com/u/13072194?v=4&s=460'}
                                />
                            </div>
                        </div>

                        <br />

                        <div className="about-content-text">
                            <div>
                                <h3 className="about-content-title" style={{ fontFamily: 'Lobster,cursive' }}>
                                    Email:
                                </h3>
                                <div>
                                    <span
                                        style={{
                                            overflowWrap: 'break-word',
                                            fontFamily: 'Tinos,serif',
                                            fontSize: '1.4em',
                                        }}
                                    >
                                        <a target="_blank" href="mailto:brett@reinhards.us?Subject=Interview">
                                            Brett@Reinhards.us
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <h3 className="about-content-title">About me</h3>
                            <div>
                                Hi, my name is Brett Reinhard. I am a passionate Programmer/Coder/Developer. I have been
                                programming for a little over 2 years. My programming career stemmed from a mandatory
                                class while pursuing a second Bachelors in Mechanical Engineering. Since then I have
                                changed career paths and have been spending as much time as possible learning new
                                technologies and languages.I recently completed a Coding Bootcamp at West Los Angeles
                                Community College, where I fell in love with Web Development, more specifically
                                developing web applications. Since being introduced to Web Development, I have spent a
                                majority of my time learning more and more on the topic including; Data Structures,
                                understanding the complexity of functions (Big O Notation), new frameworks (React, Vue,
                                Angular4,etc...), C++ to understand lower level languages and what abstractions are
                                happening in higher level languages such as JavaScript, and on the days I need a break I
                                typically revisit old projects to see how I could better implement them now or listen to
                                some new courses on PluralSight.
                            </div>
                            <h3 className="about-content-title">What's Next?</h3>
                            <div>
                                Currently, I am actively learning more and looking for a development job with a team of
                                developers. While I already work in a Development position, I am the sole developer with
                                no supervisors with any technological background leading me to make a lot of decisions
                                that I may not fully understand. This has helped me to spread my wings to learn more and
                                research what I should be doing in specific situations, but at times places me in wild
                                goose chases in which I end up pursuing avenues that simply don't yield the results I am
                                looking for. I feel as though I am a quick learner and having a team to work alongside
                                with will yield better results than what I can accomplish alone. At the end of the day I
                                am interested in bettering myself and whatever company I work with.
                            </div>
                            <h3 className="about-content-title">
                                <Link to={'/projects'}>Click here to see more...</Link>
                            </h3>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
