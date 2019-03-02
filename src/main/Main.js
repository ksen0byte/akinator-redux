import React, {Component} from 'react';
import './Main.scss'
import Question from "../containers/Question";
import {optionList} from "../datasource";
import {getFilteredOptionList} from "../global/OptionUtil";
import {connect} from "react-redux";
import List from "../components/List";
import Filters from "../components/Filters";

const mapStateToProps = state => {
    return {
        optionList: state.filters.length === 0 ? optionList : getFilteredOptionList(state.filters),
        filters: state.filters
    };
};

class Main extends Component {
    render() {
        const {optionList, filters} = this.props;
        const isEnd = optionList.length <= 1;
        const victory = optionList.length === 1;
        return (
            <main>
                <Question showResult={isEnd} victory={victory}/>
                {isEnd ? "" : <Filters filters={filters}/>}
                <List optionList={optionList}/>
            </main>
        );
    }
}

export default connect(
    mapStateToProps
)(Main);