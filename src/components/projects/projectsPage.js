import React from 'react';
import PropTypes from 'prop-types';
import Booklet from 'booklet-react-component';
import ProjectDetails from './projectDetails';
import Project from './project';
import home from '../../img/homberg.jpg';
import GitMatch from '../../img/gitmatch.png';
import IG from '../../img/igconnect.png';
import LADOT from '../../img/ladot.jpg';
import MRAIOS from '../../img/multiroomaudio.png';
import BookletPNG from '../../img/booklet-react-gif.gif';
import AutoCompletePNG from '../../img/autocomplete-gif.gif';
import ClubReadyCheckin from '../../img/clubready-checkin-react-component.gif';
import TypedPNG from '../../img/typed.js.gif';
import AutoComplete from 'autocomplete-react-component';
import './projects.css';

let projects = [
    {
        title: 'GitMatch',
        url: 'http://gitmatch.me',
        image: GitMatch,
        description:
            'The Web Application has two main functions. The first of which is GitMatch, where a user inputs their username and gets matched with a similar developer in their general location. The second of which is a search based on programming language and location, where you see the 10 matches for the specified language and location, as well as the top languages for the location with the Top User for each of the top languages. This project was a collaborated effort for the West Los Angeles Community Colleges first ever hack-a-thon as apart of a 16 Week Coding Bootcamp. The project was awarded first place.',
        techDetails:
            'This application was written as a Front End Only application, and is written in AngularJS. Originally, the application was pieced together by 4 relatively new developers and during the process a lot of new techniques were learned. As such the code base was originally pretty poor, since the team has been working to better the code base and apply best practices to rewrite the application.',
        why:
            'The project aimed to bridge a gap between GitHub users. The team saw an issue with the difficulty using the new GitHub search parameters, the team set out to create an application that made matching with other developers in your area easier and also made an effort to create the ability for users to find other developers based on location and programming language',
        technology: [
            'Google Map API',
            'Google Geocoding API',
            'GitHub API',
            'Azure Logic App',
            'GitHub Colors',
            'Git-Awards API',
        ],
        example: null,
    },
    {
        title: 'Instagram Connect',
        url: 'http://instagramconnect.azurewebsites.net',
        image: IG,
        technology: [
            'Google Map API',
            'Google Geocoding API',
            'GitHub API',
            'Azure Logic App',
            'GitHub Colors',
            'Git-Awards API',
        ],
        description:
            'This application has a similar feel to Instagram and allows for users to see recent media posts in surrounding areas, posting the top 9 posts in the closest 9 areas based on the Google Geocode API.',
        techDetails:
            'The application uses the Instram API along side the Google Geocode API to get the current location. Using the Longitude and Latitude received from the Google API, it then finds the location ID from instagram, then finds surrounding instagram locations taking the first 9. Then on each of the 9 locations it displays the first 9 images (soon to implement videos as well) and calculates cummulative likes, tags that are used in the posts. Each image is tagged with the url so that users can navigate to the users page who posted the image.',
        why:
            'This application was created as a proof of concept for a possible idea for a past hack-a-thon (The same one, in which GitMatch.Me was created). The idea was placed on the back burner due to the large excitement around the proof of concept of GitMatch.ME. This application is used to find other recent media posted in surrounding areas.',
        example: null,
    },
    {
        title: 'Los Angeles DOT',
        url: 'http://bareinhard.net/ladot',
        image: LADOT,
        technology: ['Microsoft Logic App', 'ASP.NET Web API', 'AngularJS'],
        description:
            'The application allows for users to check the LADOT internal website to see how many vehicles are remaining. Given there are vehicles available they can then proceed to the Kiosk in the Lobby, input information and receive a key number to go pickup. The application also allows for an administator to view comments, mileage, fuel level, last driven date, who checked it out last, etc...',
        techDetails:
            'A few features of the app include; email notification on past due status, algorithms to level out mileage among all cars in the poole without letting any one vehicle to sit for too long and subsequently have the battery die, custom workflows by using a logic app to send emails to appropriate employees in the event a car needs maintenance, car wash, etc...',
        why:
            "This Web Application was created to fit a need for the Los Angeles Department of Transportation. This workflow application helps to solve an inefficiency in reserving a DOT loaner vehicle. The application was built to address the workflow of checking out a vehicle and how to make employee's lives easier in this respect.",
        example: null,
    },
    {
        title: 'Multiroom Audio iOS',
        url: 'http://bareinhard.net/multiroomwebui/#/',
        image: MRAIOS,
        technology: [
            'GNU/LINUX Ubuntu MATE',
            'Pulseaudio/Pulseaudio-DLNA',
            'AngularJS',
            'NodeJS',
            'BASH',
            'ChromeCast Audio/Raspberry Pi',
        ],
        description:
            'The project uses many different technologies that work well together. The raspberry pi handles many of the needs that were required to get the information to the Front End. A large amount of the information that is required by the front end needed custom BASH scripts to parse information received from Pulseaudio and format it as a JSON object. The backend NODE server has multiple endpoints in which the frontend leverages.',
        techDetails:
            "This project utilizes a Raspberry Pi running Ubuntu MATE which runs a Node Server that serves an AngularJS frontend. The ability to synchronize multiroom audio and play the music is based around using ChromeCast Audios ($30 ea compared to Sonos). The Raspberry Pi is able to see Chromecast Audio's as Pulseaudio Output Sinks due to the pulseaudio-dlna opensource project. Upon the server starting the Raspberry Pi runs several BASH Scripts that create a JSON file that displays what PulseAudio sinks are available, what volume they are currently at, the name of the device and whether it is currently active. Upon clicking a sink on the Frontend, an AJAX request is fired to the server which runs a BASH script to change the sink to the requested sink. The volume control at the top fires an AJAX request once the slider has stopped moving, this request runs another BASH script which changes the volume of the current sink",
        why:
            'This project was created to fill a personal need for cheap multiroom audio. Mainly, to allow for playing music in my daughters room but to be able to control the music and volume from anywhere in my house.',
        example: null,
    },
    {
        title: 'Booklet React Component',
        url: 'https://github.com/BaReinhard/Booklet-React-Component',
        image: BookletPNG,
        technology: ['React', 'NPM', 'Mocha', 'Enzyme', 'TravisCI'],
        description: 'A simple booklet styled react component, loosely based on the jQuery booklet plugin',
        techDetails:
            'This booklet react component is composed of CSS and JavaScript. It utilizes CSS transitions to create the flipping of pages, uses JS manages state to determine what page should appear where, and when the page should re-render. The booklet requires an array of pages, currentIndex for the proper page to be displayed, flipPageIndex to manage when page should be flipped, and a callback to change the currentIndex once the animation has completed',
        why:
            "The project was inspired out of necessity to help a friend rewrite an existing project from jQuery to React. After much research I hadn't found a usable component that this project required. As such I took the time to create a component that I would use and tried to keep it as simple as possible, but also allow for customization without creating something overly obfuscated",
        example: null,
    },
    {
        title: 'AutoComplete React Component',
        url: 'https://github.com/BaReinhard/AutoComplete-React-Component',
        image: AutoCompletePNG,
        technology: ['React', 'NPM', 'Mocha', 'Enzyme', 'TravisCI'],
        description:
            'A simple input that allows for quick and useful searching of large lists with the ability to select the first',
        techDetails:
            'Built as an extended React Component. This component takes an array of values on which to be matched with some input. The component waits for key input and filters the values returning a list of values that have a partial match.',
        why: 'Needed for project',
        example: (
            <div>
                <p style={{ fontStyle: 'italic', color: 'black' }}>Open the Console to See Output when clicking item</p>
                <AutoComplete
                    style={{ color: 'black' }}
                    dropdownStyle={{ backgroundColor: 'grey' }}
                    valuesStyle={{ color: 'black' }}
                    values={[
                        'Alabama',
                        'Alaska',
                        'American Samoa',
                        'Arizona',
                        'Arkansas',
                        'California',
                        'Colorado',
                        'Connecticut',
                        'Delaware',
                        'District of Columbia',
                        'Federated States of Micronesia',
                        'Florida',
                        'Georgia',
                        'Guam',
                        'Hawaii',
                        'Idaho',
                        'Illinois',
                        'Indiana',
                        'Iowa',
                        'Kansas',
                        'Kentucky',
                        'Louisiana',
                        'Maine',
                        'Marshall Islands',
                        'Maryland',
                        'Massachusetts',
                        'Michigan',
                        'Minnesota',
                        'Mississippi',
                        'Missouri',
                        'Montana',
                        'Nebraska',
                        'Nevada',
                        'New Hampshire',
                        'New Jersey',
                        'New Mexico',
                        'New York',
                        'North Carolina',
                        'North Dakota',
                        'Northern Mariana Islands',
                        'Ohio',
                        'Oklahoma',
                        'Oregon',
                        'Palau',
                        'Pennsylvania',
                        'Puerto Rico',
                        'Rhode Island',
                        'South Carolina',
                        'South Dakota',
                        'Tennessee',
                        'Texas',
                        'Utah',
                        'Vermont',
                        'Virgin Island',
                        'Virginia',
                        'Washington',
                        'West Virginia',
                        'Wisconsin',
                        'Wyoming',
                    ]}
                    onClick={clickedValue => {
                        console.log(clickedValue);
                        // JavaScript
                        // Example Output, if clicked Language: JavaScript
                    }}
                />
            </div>
        ),
    },
    {
        title: 'Typed React Component',
        url: 'https://github.com/BaReinhard/Typed-React-Component',
        image: TypedPNG,
        technology: ['React', 'NPM', 'Mocha', 'Enzyme', 'TravisCI'],
        description: 'Some place holder text',
        techDetails: 'Also Here',
        why: 'Needed for project',
        example: null,
    },

    {
        title: 'ClubReady Checkin React Component',
        url: 'https://github.com/BaReinhard/ClubReady-Checkin-React-Component',
        image: ClubReadyCheckin,
        technology: ['React', 'NPM', 'Mocha', 'Enzyme', 'TravisCI'],
        description: 'Some place holder text',
        techDetails: 'Also Here',
        why: 'Needed for project',
        example: null,
    },
];
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
                {/* Begin Mobile View*/}
                {this.state.mobile ? (
                    <div>
                        <ul>{projects.map(proj => <li>{proj.description}</li>)}</ul>
                    </div>
                ) : (
                    /* End Mobile View */
                    /* Begin Desktop View */
                    <div className="projects-content">
                        <h2>Projects</h2>
                        <button onClick={this.flipPageIndexBack}>Previous Page</button>

                        <button onClick={this.flipPageIndexForward}>Next Page</button>
                        <Booklet
                            flipPageIndex={this.state.flipPageIndex}
                            index={this.state.index}
                            nextPage={this.genNextPages}
                            prevPage={this.genPrevPages}
                            pages={projects
                                .map(project => {
                                    let pages = [
                                        <Project
                                            title={project.title}
                                            image={project.image}
                                            technology={project.technology}
                                            info={{ title: project.title, url: project.url }}
                                        />,
                                        <ProjectDetails
                                            info={{ title: project.title, url: project.url }}
                                            content={{
                                                description: project.description,
                                                techDetails: project.techDetails,
                                                why: project.why,
                                            }}
                                            technology={project.technology}
                                            example={project.example}
                                        />,
                                    ];
                                    return pages;
                                })
                                .reduce((a, b) => a.concat(b), [])}
                        />
                    </div>
                )}
                {/*<Booklet />*/}
            </div>
        );
    }
}
