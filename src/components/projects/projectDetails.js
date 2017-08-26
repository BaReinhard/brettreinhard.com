import React from 'react';
import PropTypes from 'prop-types';
import './project.css';

const ProjectDetailsPage = props => {
    debugger;
    return (
        <div>
            <div>
                <h4>Description:</h4>
                <p>
                    {props.content.description}
                </p>
                <h4>Technical Details:</h4>
                <p>
                    {props.content.techDetails}
                </p>
                <h4>Why? :</h4>
                <p>
                    {props.content.why}
                </p>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
