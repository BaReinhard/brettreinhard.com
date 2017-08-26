import React from 'react';
import PropTypes from 'prop-types';
import Booklet from 'booklet-react-component';
import ProjectDetails from './projectDetails';
import Project from './project';
import home from '../../img/homberg.jpg';
import GitMatch from '../../img/gitmatch.png';
import IG from '../../img/igconnect.png';
import './projects.css';

export default class ProjectsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            index: 0,
            flipPageIndex: 0,
        };
    }
    updateDimensions = () => {
        if (window.innerWidth < 800) {
            this.setState({
                mobile: true,
            });
        } else {
            this.setState({
                mobile: false,
            });
        }
    };
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    genNextPages = () => {
        this.setState({
            index: this.state.index + 2,
        });
    };
    genPrevPages = () => {
        this.setState({
            index: this.state.index - 2,
        });
    };
    flipPageIndexForward = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex + 1,
        });
    };
    flipPageIndexBack = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex - 1,
        });
    };

    render() {
        return (
            <div className="projects-container" style={{ background: `url(${home})` }}>
                {this.state.mobile
                    ? <div>Mobile</div>
                    : <div className="projects-content">
                          <h2>Projects</h2>
                          <button onClick={this.flipPageIndexBack}>Previous Page</button>

                          <button onClick={this.flipPageIndexForward}>Next Page</button>
                          <Booklet
                              flipPageIndex={this.state.flipPageIndex}
                              index={this.state.index}
                              nextPage={this.genNextPages}
                              prevPage={this.genPrevPages}
                              pages={[
                                  <Project title={'GitMatch'} image={GitMatch} />,
                                  <ProjectDetails
                                      info={{ title: 'GitMatch', url: 'http://gitmatch.me' }}
                                      content={{
                                          description:
                                              'The Web Application has two main functions. The first of which is GitMatch, where a user inputs their username and gets matched with a similar developer in their general location. The second of which is a search based on programming language and location, where you see the 10 matches for the specified language and location, as well as the top languages for the location with the Top User for each of the top languages. This project was a collaborated effort for the West Los Angeles Community Colleges first ever hack-a-thon as apart of a 16 Week Coding Bootcamp. The project was awarded first place.',
                                          techDetails:
                                              'This application was written as a Front End Only application, and is written in AngularJS. Originally, the application was pieced together by 4 relatively new developers and during the process a lot of new techniques were learned. As such the code base was originally pretty poor, since the team has been working to better the code base and apply best practices to rewrite the application.',
                                          why:
                                              'The project aimed to bridge a gap between GitHub users. The team saw an issue with the difficulty using the new GitHub search parameters, the team set out to create an application that made matching with other developers in your area easier and also made an effort to create the ability for users to find other developers based on location and programming language',
                                      }}
                                      technology={[
                                          'Google Map API',
                                          'Google Geocoding API',
                                          'GitHub API',
                                          'Azure Logic App',
                                          'GitHub Colors',
                                          'Git-Awards API',
                                      ]}
                                  />,
                                  <Project title={'Instagram Connect'} image={IG} />,
                                  <ProjectDetails
                                      info={{
                                          title: 'Instagram Connect',
                                          url: 'http://instagramconnect.azurewebsites.net/',
                                      }}
                                      content={{
                                          description:
                                              'This application has a similar feel to Instagram and allows for users to see recent media posts in surrounding areas, posting the top 9 posts in the closest 9 areas based on the Google Geocode API.',
                                          techDetails:
                                              'The application uses the Instram API along side the Google Geocode API to get the current location. Using the Longitude and Latitude received from the Google API, it then finds the location ID from instagram, then finds surrounding instagram locations taking the first 9. Then on each of the 9 locations it displays the first 9 images (soon to implement videos as well) and calculates cummulative likes, tags that are used in the posts. Each image is tagged with the url so that users can navigate to the users page who posted the image.',
                                          why:
                                              'This application was created as a proof of concept for a possible idea for a past hack-a-thon (The same one, in which GitMatch.Me was created). The idea was placed on the back burner due to the large excitement around the proof of concept of GitMatch.ME. This application is used to find other recent media posted in surrounding areas.',
                                      }}
                                      technology={[
                                          'Google Map API',
                                          'Google Geocoding API',
                                          'GitHub API',
                                          'Azure Logic App',
                                          'GitHub Colors',
                                          'Git-Awards API',
                                      ]}
                                  />,
                                  <div> Ele 4</div>,
                                  <div> Ele 5</div>,
                                  <div> Ele 6</div>,
                              ]}
                          />
                      </div>}
                {/*<Booklet />*/}
            </div>
        );
    }
}
