import React, { Component } from 'react';

var formStyle = {
    display: 'inline-block'
}

class CollectionExportForm extends Component {

    render() {
         return (
         <form action="http://codepen.io/pen/define" method="POST" target="_blank" style={formStyle}>
            <input type="hidden" name="data" value={this.props.htmlMarkup} />
            <button type="submit" className="btn btn-default">Export as HTML</button>
         </form>);
    }
}

export default CollectionExportForm;