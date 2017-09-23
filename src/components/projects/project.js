import React from 'react';
import PropTypes from 'prop-types';
import './project.css';
import { Image } from 'react-bootstrap';

const Project = props => {
    return (
        <div className="projects-info" style={{ fontFamily: 'Tinos, serif' }}>
            <h2>{props.info.title}</h2>
            <Image style={{ height: '200px' }} src={props.image} />
            <h3>Url</h3>
            <span style={{ overflowWrap: 'break-word' }}>
                <a target="_blank" href={props.info.url}>
                    {props.info.url}
                </a>
            </span>
            <h3>Technology Used: </h3>
            <ul>
                {props.technology.map((tech, i) => {
                    return <li key={tech + i}>{tech}</li>;
                })}
            </ul>
        </div>
    );
};
export default Project;
