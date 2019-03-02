import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind'

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false}
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    };

    getFormattedTags = tags => {
        let str = tags.map(tag => ` '${tag}'`).toString().replace(/,/g, '');
        return `${str} `;
    };

    render() {
        const {name, tags} = this.props;
        let clicked = this.state.clicked;
        return (
            <li onClick={this.handleClick} className={classNames({lowerCase: clicked})}>
                {clicked ? this.getFormattedTags(tags) : name}
            </li>);
    }
}

Option.propTypes = {
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Option;