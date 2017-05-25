import React, { Component } from 'react';
import PropTypes from 'prop-types'

var tweetStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
}

var imageStyle = {
    maxHeight: '400px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
}

class Tweet extends Component {

    handleImageClick(){
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;

        if(onImageClick){
            onImageClick(tweet);
        }
    }

    render() {
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;

        return (
        <div style={tweetStyle}>
            <img alt="Tweet" src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
        </div>);
    }
}

Tweet.propTypes = {
    tweet: function(properties,propertyName,componentName){
        var tweet = properties[propertyName];
        
        if(!tweet){
            return new Error('Tweet must be set');
        }

        if(!tweet.media){
            return new Error('Tweet must have an image');
        }
    },
    onImageClick: PropTypes.func
}

export default Tweet;