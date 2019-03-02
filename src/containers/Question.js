import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ButtonsContainer from "../components/ButtonsContainer";
import './css/Question.scss';
import {addFilter, removeAllFilters} from "../actions";
import Result from "../components/Result";
import {nextFilter} from "../global/OptionUtil";

const mapStateToProps = state => {
    return {filters: state.filters, counter: state.result.counter};
};

const mapDispatchToProps = {
    addFilter, removeAllFilters
};


class Question extends Component {
    handleResponse = questionedFilterText => positive => {
        const filter = {text: questionedFilterText, positive};
        this.props.addFilter(filter);
    };

    handleStartOver = () => {
        this.props.removeAllFilters();
    };

    render() {
        const {filters, showResult, victory, counter} = this.props;
        let questionedFilterText = nextFilter(filters);
        const question = <Fragment>
            <div className="staticTextContainer">Would you say it's ...</div>
            <div className="tagContainer">{questionedFilterText}</div>
            <ButtonsContainer
                onClick={this.handleResponse(questionedFilterText)}
            />
        </Fragment>;
        const result = <Result victory={victory} counter={counter} handleStartOver={this.handleStartOver}/>;
        return (
            <div className="questionContainer lightBackground">
                {showResult ? result : question}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);