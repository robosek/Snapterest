import React, { Component } from 'react';
import Header from './Header.react'
import Button from './Button.react'
import CollectionExportForm from './CollectionExportForm.react'
import CollectionRenameForm from './CollectionRenameForm.react'


class CollectionControls extends Component {

    constructor(props) {
        super(props);

        this.state = { name: 'new', isEditingName: false }
        this.getHeaderText = this.getHeaderText.bind(this);
        this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this);
        this.setCollectionName = this.setCollectionName.bind(this);
    }

    getHeaderText() {
        var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
        var text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection === 1) {
            text = text + ' tweet in your ';
        }
        else {
            text = text + ' tweets in your ';
        }

        return (<span>{text}<strong>{this.state.name}</strong> collection</span>);
    }

    toggleEditCollectionName() {
        this.setState({ isEditingName: !this.state.isEditingName });
    }

    setCollectionName(newName) {
        this.setState({ name: newName, isEditingName:false });
    }

    render() {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName} />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />

                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName} />

                <Button
                    label="Empty collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection} />

                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
            </div>
        );
    }
}

export default CollectionControls;