import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Option from "./Option";
import './css/List.scss'

class List extends PureComponent {
    render() {
        const {optionList} = this.props;
        return (
            <div className="listContainer">
                <ul>
                    {optionList.map((option, counter) =>
                        <Option
                            key={counter}
                            name={option.name}
                            tags={option.tags}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    optionList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        }).isRequired
    )
};

export default List;