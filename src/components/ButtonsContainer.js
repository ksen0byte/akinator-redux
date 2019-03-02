import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './css/ButtonsContainer.scss'

class ButtonsContainer extends PureComponent {
    render() {
        const {onClick} = this.props;
        return (
            <div className="buttonsContainer">
                <button onClick={() => onClick(true)}>Yes</button>
                <button onClick={() => onClick(false)}>No</button>
            </div>
        );
    }
}

ButtonsContainer.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ButtonsContainer;