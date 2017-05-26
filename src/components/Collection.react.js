import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import Header from './Header.react'
import TweetList from './TweetList.react'
import CollectionControls from './CollectionControls.react'

class Collection extends Component {

    constructor(props){
        super(props)

        this.createHtmlMarkupStringOfTweetList = this.createHtmlMarkupStringOfTweetList.bind(this);
        this.getListOfTweetIds = this.getListOfTweetIds.bind(this);
        this.getNumberOfTweetsInCollection = this.getNumberOfTweetsInCollection.bind(this);

    }

    createHtmlMarkupStringOfTweetList() {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );

        var htmlMarkup = {
            title:"Title",
            html: htmlString
        };
        console.log(JSON.stringify(htmlMarkup));
        return JSON.stringify(htmlMarkup);
    }

    getListOfTweetIds () {
        return Object.keys(this.props.tweets);
    }

    getNumberOfTweetsInCollection () {
        return this.getListOfTweetIds().length;
    }

    render () {
        var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if (numberOfTweetsInCollection > 0) {

            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return (
                <div>

                    <CollectionControls
                        numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />

                </div>
            );
        }

        return <Header text="Your collection is empty" />;
    }
}

export default Collection;