import React from 'react';
import PropTypes from 'prop-types';
import './project.css';

const ProjectDetailsPage = props => {
    return (
        <div className="project-details-render" style={{ fontFamily: 'Tinos, serif' }}>
            <div>
                <h3>Description:</h3>
                <p>{props.content.description}</p>
                <h3>Technical Details:</h3>
                <p>{props.content.techDetails}</p>
                <h3>Why?: </h3>
                <p>{props.content.why}</p>
                {props.example !== null ? (
                    <div>
                        <h3>Example: </h3>
                        {props.example}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};
ProjectDetailsPage.propTypes = {
    example: PropTypes.element,
};
export default ProjectDetailsPage;
