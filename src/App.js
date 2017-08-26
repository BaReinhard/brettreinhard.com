import React from 'react';
import './fonts.css';
import HomePage from './components/home/homePage';
import ProjectsPage from './components/projects/projectsPage';
import { Modal } from 'react-bootstrap';
import AboutPageComponent from './components/about/aboutPage';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayNav: false,
        };
    }
    displayNav = () => {
        this.setState({ displayNav: !this.state.displayNav });
    };
    onHide = () => {
        this.setState({
            displayNav: false,
        });
    };
    render() {
        return (
            <BrowserRouter>
                <div style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                    <button
                        className="nav-button"
                        onClick={this.displayNav}
                        style={{
                            all: 'none',
                            fontFamily: 'Dancing Script, cursive',
                            position: 'fixed',
                            fontSize: '2em',
                            backgroundColor: 'rgba(0,0,0,0)',
                            border: 'none',
                        }}
                    >
                        <i className="fa fa-bars" aria-hidden="true" /> Brett Reinhard
                    </button>

                    <Modal
                        className="Sidebar left"
                        show={this.state.displayNav}
                        onHide={this.onHide}
                        autoFocus
                        keyboard
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Where do you want to go?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Nav>
                                <IndexLinkContainer to="/" activeClassName="active">
                                    <NavItem onClick={this.onHide}>Home</NavItem>
                                </IndexLinkContainer>

                                <LinkContainer to="/projects" activeClassName="active">
                                    <NavItem onClick={this.onHide}>Projects </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/about" activeClassName="active">
                                    <NavItem onClick={this.onHide}>About </NavItem>
                                </LinkContainer>
                            </Nav>
                        </Modal.Body>
                    </Modal>

                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/about" component={AboutPageComponent} />
                </div>
            </BrowserRouter>
        );
    }
}
