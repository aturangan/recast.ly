var VideoList = (props) => {
  console.log('Video List', props);
  return (
    <div className="video-list media">
      {props.videos.map((item, idx) =>
        <VideoListEntry clickHandler={props.clickHandler} key={idx} video={item}/>
      )}
    </div>
  );
};


//get props from the app 
  //app is the big component 
//use the exampleVideoData 
//look at grocery list file to see how props were passed down 
//pass video object into video list entry 









// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
