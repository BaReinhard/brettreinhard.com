import React from 'react';
import PropTypes from 'prop-types';
import TypedJS from 'typed-react-component';
import { Link } from 'react-router-dom';
import home from '../../img/homberg.jpg';
import './styles.css';
let props = {
    typings: ['Brett Reinhard'],
    loop: false,
    typeSpeed: 30,
    delay: 1200,
    startDelay: 1200,
    style: {
        fontFamily: 'Dancing Script,cursive',
        color: 'white',
        fontSize: '2em',
        lineHeight: '1em',
    },
};
export default class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            displayInfo: false,
            blinkerStyle: {},
            stillThere: false,
        };
        props.onComplete = this.onComplete;
    }
    onComplete = () => {
        this.setState({
            displayInfo: true,
            blinkerStyle: { opacity: 0 },
        });
    };
    waiting = () => {
        setTimeout(() => {
            this.setState({
                displayInfo: false,
                stillThere: true,
            });
        }, 10000);
    };
    render() {
        return (
            <div
                className="home-container"
                style={{
                    backgroundSize: 'contain',
                    minHeight: '100vh',
                    width: '100vw',
                    background: `url(${home})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="home-content" style={{ display: 'block', position: 'absolute' }}>
                    <Link to="/about">
                        <TypedJS {...Object.assign({}, props, { blinkerStyle: this.state.blinkerStyle })} />
                        {this.state.displayInfo ? (
                            <TypedJS
                                {...Object.assign({}, props, {
                                    style: { display: 'block', fontFamily: 'Dancing Script,cursive', color: 'white' },
                                    typeSpeed: 50,
                                    typings: [
                                        'I am a passionate software developer',
                                        'I am a passionate React developer',
                                        'I am a JavaScript enthusiast',
                                        'Click here to continue...',
                                    ],
                                    delay: [1750, 1750, 1750],
                                    onComplete: this.waiting,
                                })}
                            />
                        ) : (
                            <div />
                        )}
                        {this.state.stillThere ? (
                            <TypedJS
                                {...Object.assign({}, props, {
                                    startDelay: 0,
                                    style: { display: 'block', fontFamily: 'Dancing Script,cursive', color: 'white' },
                                    typeSpeed: 30,
                                    typings: ['Still there...?', 'Click here to continue...'],
                                    delay: [5000, 1000],
                                    onComplete: undefined,
                                })}
                            />
                        ) : (
                            <div />
                        )}
                    </Link>
                </div>
            </div>
        );
    }
}
