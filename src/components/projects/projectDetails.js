import React from 'react';
import PropTypes from 'prop-types';
import './project.css';

const ProjectDetailsPage = props => {
    return (
        <div style={{ height: '100%', overflow: 'scroll' }}>
            <div style={{ overflow: 'scroll' }}>
                <h4>Description:</h4>
                <p>{props.content.description}</p>
                <h4>Technical Details:</h4>
                <p>{props.content.techDetails}</p>
                <h4>Why?: </h4>
                <p>{props.content.why}</p>
                {props.example !== null ? (
                    <div>
                        <h4>Example: </h4>
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
