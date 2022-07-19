// var changeVideo = (video) => ({
//   //TODO:  Return some action object to change the currently playing video.
//   type: 'CHANGE_VIDEO',
//   video: video
// });

var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CHANGE_VIDEO',
    video: video
  };
};

export default changeVideo;
