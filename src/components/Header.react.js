import React, { Component } from 'react';

var headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
}

class Header extends Component {

    render() {
        return (<h2 style={headerStyle}>{this.props.text}</h2>);
    }
}

Header.defaultProps = {
    text: 'Default header value'
}

export default Header;