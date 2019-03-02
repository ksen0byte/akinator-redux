import React, {Component} from 'react';

class Header extends Component {
    render() {
        return <div className="fixedHeaderContainer">
            <header>
                <a href="/">
                    <div className="headerTitle">Akinator</div>
                </a>
            </header>
        </div>;
    }
}

export default Header;