import React from 'react';
import PropTypes from 'prop-types';
import Booklet from 'booklet-react-component';
import ProjectDetails from './projectDetails';
import './project.css';
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
import Typed from 'typed-react-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './projects.css';

let projects = [
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
            "Built as an extended React Component. This component takes an array of values on which to be matched with some input. The component waits for key input and filters the values returning a list of values that have a partial match. The input allows for quick access to the first value, by press enter it will mimic a click event and return the first element in the array. In similar respects it uses state to manage other click events so that when you click on the input box, it will open the array of matching values, when clicking the displayed matching values it will return the clicked item, additionally it will ensure that the displayed box doesn't close unless clicking outside the displayed values container.",
        why:
            'The need for this component arose when rewriting GitMatch (which was originally written in AngularJS), in the original project I had used Angular Material to manage the autocomplete feature, being a life long learning who enjoys learning through new experiences I chose to rise to the task and create this component myself.',
        example: (
            <div>
                <p style={{ fontStyle: 'italic', color: 'black' }}>Open the Console to See Output when clicking item</p>
                <AutoComplete
                    style={{ color: 'black', position: 'relative', width: '350px' }}
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
        description:
            'Typed React Component, is as the title describes, a react component. It is used to give a more dynamic feel to an application or web page, allowing the user to have predefined strings "typed" out to the page. The user is able to change type speed, individual or constant delays between strings, have the strings loop (continuously type and delete), the ability to have a pipe character as seen in CLI\'s, and style this children components as needed',
        techDetails:
            'The project was inspired by typed.js, it was also a great candidate to practice react with, as the component lends itself well to the built-in rendering which react has. It uses a few of the lifecycle methods inherent to react. It uses the constructor to setup an interval, the componentWillUnmmount to remove the interval, componentWillReceiveProps to set state to the passed props so that any change to props will be handled in a controlled manner, and finally uses the componentDidMount to allow for a starting delay if desired.',
        why:
            "Ironically, the project was created to be used inside this portfolio page. This portfolio page was originally written in AngularJS, as popular technologies have changed it was time to rewrite the project. After some searching I kept finding projects very similar to the original Typed.JS, while it did work it wasn't as simple or customizable as I wanted, so began the project. I looked at it as a good way to practice using React and to learn what it takes to actually create reusable components.",
        example: null,
    },

    {
        title: 'ClubReady Checkin React Component',
        url: 'https://github.com/BaReinhard/ClubReady-Checkin-React-Component',
        image: ClubReadyCheckin,
        technology: ['React', 'NPM', 'Mocha', 'Enzyme', 'TravisCI'],
        description:
            'ClubReady Checkin React Component, is a react component that works with the ClubReady API and creates an easy to use wrapper around the check-in process of the API, returning all data available on a user checking into a specific "store" or facility.',
        techDetails:
            "This project, is a textbox class specifically designed for checking into a ClubReady facility. It uses some of the latest ES features, ASYNC/AWAIT, which help to clean up the code and making changes easy for those who want to fork and extend business logic. The component allows for validation to be passed to the initial input value, for example to make sure that the input number is at least 4 characters long, only numbers, etc. It allows users to checkin via a barcode number or phone number extending the functionality of CR's default checkin kiosk, once a member is found it will make a series of synchronous asynchronous calls to ensure the member is able to be checked into the facility. Whether the member is able to checkin or not the component will return the members full details allowing developers to create some customized logic to do what they choose with the accepted or declined check-in status.",
        why:
            "This component was originally created after the need was already filled. Unfortunately, due to expedited timelines by supervisors this component wasn't high enough priority to get created before another solution was used. However, knowing that project will eventually be revisited for new functionality I spent some time creating this component so that when the time comes I will be able to easily remove old logic and include new functionality without having to pick apart the old code. ",
        example: null,
    },
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
];
export default class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
            index: 0,
            flipPageIndex: 0,
            leftButtonDisabled: true,
            rightButtonDisabled: false,
        };
        this.genNextPages = this.genNextPages.bind(this);
        this.genPrevPages = this.genPrevPages.bind(this);
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
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    genNextPages() {
        // Scroll the page back to the top when the next page gets rendered to the current page
        document.getElementsByClassName('booklet-current-right')[0].scrollTop = 0;

        let leftButtonDisabled = false,
            rightButtonDisabled = false;
        // Handle Left Button Being Disabled
        if (this.state.index + 2 <= 0) {
            leftButtonDisabled = true;
        }
        // Handle Right Button Being Disabled
        if (this.state.index + 2 > projects.length + 4) {
            rightButtonDisabled = true;
        }
        this.setState({
            index: this.state.index + 2,
            rightButtonDisabled: rightButtonDisabled,
            leftButtonDisabled: leftButtonDisabled,
        });
    }
    genPrevPages() {
        let leftButtonDisabled = false,
            rightButtonDisabled = false;
        // Handle Left Button Being Disabled
        if (this.state.index - 2 <= 0) {
            leftButtonDisabled = true;
        }
        // Handle Right Button Being Disabled
        if (this.state.index - 2 >= projects.length) {
            rightButtonDisabled = true;
        }
        this.setState({
            index: this.state.index - 2,
            rightButtonDisabled: rightButtonDisabled,
            leftButtonDisabled: leftButtonDisabled,
        });
    }
    flipPageIndexForward = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex + 1,
            leftButtonDisabled: true,
            rightButtonDisabled: true,
        });
    };
    flipPageIndexBack = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex - 1,
            leftButtonDisabled: true,
            rightButtonDisabled: true,
        });
    };

    render() {
        return (
            <div className="projects-container" style={{ background: `url(${home})`, fontFamily: 'Tinos, serif' }}>
                <ReactCSSTransitionGroup
                    transitionName="top-down"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    {/* Begin Mobile View*/}
                    {this.state.mobile ? (
                        projects.map(project => {
                            return (
                                <div
                                    className="projects-container"
                                    style={{
                                        borderStyle: 'box-border',
                                        padding: '5px',
                                        backgroundColor: 'rgba(255,255,255,0.8)',
                                    }}
                                    key={project.title}
                                >
                                    <Project
                                        title={project.title}
                                        image={project.image}
                                        technology={project.technology}
                                        info={{ title: project.title, url: project.url }}
                                    />
                                    <ProjectDetails
                                        info={{ title: project.title, url: project.url }}
                                        content={{
                                            description: project.description,
                                            techDetails: project.techDetails,
                                            why: project.why,
                                        }}
                                        technology={project.technology}
                                        example={null}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        /* End Mobile View */
                        /* Begin Desktop View */
                        <div style={{ fontFamily: 'Tinos, serif' }} className="projects-content projects-container">
                            <h2>Projects</h2>
                            <button
                                className="prev-button"
                                style={{
                                    zIndex: 10000,
                                    margin: '20px',
                                    fontSize: '30px',
                                    position: 'fixed',
                                    left: '5%',
                                    top: '50%',
                                }}
                                disabled={this.state.leftButtonDisabled}
                                onClick={this.flipPageIndexBack}
                            >
                                <i className="fa fa-chevron-left" aria-hidden="true" />
                            </button>
                            <button
                                className="next-button"
                                style={{
                                    zIndex: 10000,
                                    margin: '20px',
                                    fontSize: '30px',
                                    position: 'fixed',
                                    right: '5%',
                                    top: '50%',
                                }}
                                disabled={this.state.rightButtonDisabled}
                                onClick={this.flipPageIndexForward}
                            >
                                <i className="fa fa-chevron-right" aria-hidden="true" />
                            </button>
                            <Booklet
                                flipPageIndex={this.state.flipPageIndex}
                                index={this.state.index}
                                nextPage={this.genNextPages}
                                prevPage={this.genPrevPages}
                                pages={projects
                                    .map(project => {
                                        let pages = [
                                            <div key={project.title + 'info'}>
                                                <Project
                                                    title={project.title}
                                                    image={project.image}
                                                    technology={project.technology}
                                                    info={{ title: project.title, url: project.url }}
                                                />
                                            </div>,
                                            <div key={project.title + 'details'}>
                                                <ProjectDetails
                                                    info={{ title: project.title, url: project.url }}
                                                    content={{
                                                        description: project.description,
                                                        techDetails: project.techDetails,
                                                        why: project.why,
                                                    }}
                                                    technology={project.technology}
                                                    example={project.example}
                                                />
                                            </div>,
                                        ];
                                        return pages;
                                    })
                                    .reduce((a, b) => a.concat(b), [])}
                            />
                        </div>
                    )}
                    {/*<Booklet />*/}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
