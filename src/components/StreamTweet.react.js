import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react'
import Tweet from './Tweet.react'


class StreamTweet extends Component {

    constructor(props) {
        super(props);
        this.state = { numberOfCharactersIsIncreasing: null, headerText: null };
    }

    componentWillMount() {
        this.state = { numberOfCharactersIsIncreasing: true, headerText: 'Latest public photo from Twitter' };

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        }
    }

    componentDidMount() {
        var componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    }

    componentWillReceiveProps(nextProps) {
        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    }

    componentDidUpdate(prevProps, nextProps) {
        window.snapterest.numberOfDisplayedTweets++;
    }

    render() {
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
                <Header text={this.props.tweet.text} />
            </section>);
    }
}

export default StreamTweet;