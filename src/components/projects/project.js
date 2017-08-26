import React from 'react';
import PropTypes from 'prop-types';
import './project.css';
import { Image } from 'react-bootstrap';

const Project = props => {
    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <Image src={props.image} />
        </div>
    );
};
export default Project;
