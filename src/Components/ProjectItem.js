import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {

        return (
            <li className="Project">
                {this.props.projects.title} - {this.props.projects.category}
            </li>
        );
    }
}

export default ProjectItem;
