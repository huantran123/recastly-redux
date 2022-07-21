import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

//TODO: Import the Provider component from 'react-redux' here!
import { Provider, connect } from 'react-redux';
import store from './store/store.js';
import handleVideoSearch from './actions/search.js';
import changeVideo from './actions/currentVideo.js';
import changeVideoList from './actions/videoList.js';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

const mapStateToProps = (state) => ({
  videoList: state.videoList,
  currentVideo: state.currentVideo
});

const mapDispatchToProps = (dispatch) => ({
  handleVideoSearch: (q) => {
    dispatch(handleVideoSearch(q));
  },
  changeVideo: (video) => {
    dispatch(changeVideo(video));
  },
  changeVideoList: (videos) => {
    dispatch(changeVideoList(videos));
  }
});

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    {/* <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} handleVideoSearch={handleVideoSearch}/> */}
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube}/>,
//   document.getElementById('app')
// );
