import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './css/Filters.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind'
import {connect} from "react-redux";
import {removeFilter, revertFilter} from "../actions";

const mapStateToProps = state => ({state});

const mapDispatchToProps = {
    removeFilter, revertFilter
};

class Filters extends PureComponent {
    render() {
        const {filters, removeFilter, revertFilter} = this.props;
        return (
            filters.length > 0 ?
                <div className="filtersContainer lightBackground">
                    <div className="filtersWrapper">
                        {filters.map(filter =>
                            <div
                                className={classNames({not: !filter.positive}, "filter pointer")}
                                key={filter.id}
                                onClick={() => revertFilter(filter)}>
                                <div className="value">{filter.text}</div>
                                <div className="removeContainer" onClick={() => removeFilter(filter)}>
                                    <FontAwesomeIcon icon="times"/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                : ""
        );
    }
}

Filters.propTypes = {
    filters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            positive: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);