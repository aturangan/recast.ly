class App extends React.Component {
  constructor(props) { //giving us one specific title/video object 
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
    };
      // this.video = {this.props.video}
      //need to add states here
      //need to keep track of current video to pass to the video player object
  }
  render() {
      return (
        <div>
          <Nav />
          <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList clickHandler={this.handleClick.bind(this)} item = {this.state.videos} videos={this.state.videos}/>
        </div>
      </div>
      );
    }

  handleClick(currentVideo) {
  //change state so that the video that's played in app refers to the new video at the index 
      console.log('Current Video: ', currentVideo);
      this.setState({
        video: currentVideo
      });
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
