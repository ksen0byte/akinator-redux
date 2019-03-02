import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './css/Result.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Result extends PureComponent {
    render() {
        const {victory, counter, handleStartOver} = this.props;
        return (
            <div className="resultContainer">
                <div>{victory ? `He-he, it took me only ${counter} guesses!` : "Ooops, can't really find anything.."}</div>
                <div className="startOverContainer">
                    <div className="pointer" onClick={handleStartOver}><FontAwesomeIcon size={"3x"} icon="redo"/></div>
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    victory : PropTypes.bool.isRequired,
    counter: PropTypes.number.isRequired,
    handleStartOver: PropTypes.func.isRequired
};

export default Result;