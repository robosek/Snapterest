import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client'
import StreamTweet from './StreamTweet.react'
import Header from './Header.react'

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = { tweet: null };

        this.handleNewTweet = this.handleNewTweet.bind(this);
    }

    componentDidMount() {
        SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    }

    componentWillUnmount() {
        SnapkiteStreamClient.destroyStream();
    }

    handleNewTweet(tweet) {
        this.state = {tweet: tweet };
    }

    render() {
        var tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (<Header text="Waiting for public photos from Twitter..." />);
    }
}

export default Stream;