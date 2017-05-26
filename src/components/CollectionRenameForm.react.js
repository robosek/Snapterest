import React, { Component } from 'react';
import Header from './Header.react';
import Button from './Button.react';

var inputStyle = {
    marginRight: '5px'
}

class CollectionRenameForm extends Component {

    constructor(props) {
        super(props);

        this.state = { inputValue: this.props.name };
        this.setInputValue = this.setInputValue.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormCancel = this.handleFormCancel.bind(this);
    }

    setInputValue(newInputValue) {
        this.setState({ inputValue: newInputValue });

    }

    handleInputValueChange(event) {
        var inputValue = event.target.value;
        this.setInputValue(inputValue);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        var collectionName = this.state.inputValue;
        this.props.onChangeCollectionName(collectionName);
    }

    handleFormCancel(event) {
        event.preventDefault();

        var collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    }

    componentDidMount() {
        this.refs.collectionName.focus();
    }



    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>

                <Header text="Collection name:" />

                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={this.handleInputValueChange}
                        value={this.state.inputValue}
                        ref="collectionName" />
                </div>

                <Button label="Change" handleClick={this.handleFormSubmit} />
                <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
    }
}

export default CollectionRenameForm;