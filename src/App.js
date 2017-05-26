import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Collection from './components/Collection.react'
import Stream from './components/Stream.react'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { collectionTweets: {} }

    this.addTweetToCollection = this.addTweetToCollection.bind(this);
    this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
    this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
    this.changeCollectionTweetsCollection = this.changeCollectionTweetsCollection.bind(this);
  }

  addTweetToCollection(tweet) {
    var collectionTweets = this.state.collectionTweets;
    collectionTweets[tweet.id] = tweet;
    this.changeCollectionTweetsCollection(collectionTweets);
  }

  removeTweetFromCollection(tweet) {
    var collectionTweets = this.state.collectionTweets;
    delete collectionTweets[tweet.id];
    this.changeCollectionTweetsCollection(collectionTweets);
  }

  removeAllTweetsFromCollection() {
    this.changeCollectionTweetsCollection({});
  }

  changeCollectionTweetsCollection(newCollectionTweets) {
    this.setState({ collectionTweets: newCollectionTweets });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Snapterest</h2>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <Stream onAddTweetToCollection={this.addTweetToCollection} />
            </div>
            <div className="col-md-8">
              <Collection
                tweets={this.state.collectionTweets}
                onRemoveTweetFromCollection={this.removeTweetFromCollection}
                onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
