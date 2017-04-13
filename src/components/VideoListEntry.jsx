var VideoListEntry = (props) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={function() { props.clickHandler(props.video)} }>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// function clickEvents() {
//   //change state so that the video that's played in app refers to the new video at the index 




//   console.log('HELLOOO');
// }

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     console.log('props VideoListEntry')
//     super(props);
//     this.state = {
//       isClicked: true
//     };

//     this.clickEvents = this.clickEvents.bind(this);
//   }

//   clickEvents() {
//     this.setState(prevState => ({
//       clickEvent: !prevState.isClicked
//     }));
//   }

//   render() {
//     return (
//       <div className="video-list-entry">
//         <div className="media-left media-middle">
//           <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
//         </div>
//         <div className="media-body">
//           <div className="video-list-entry-title" onclick={clickEvent()}>{props.video.snippet.title}</div>
//           <div className="video-list-entry-detail">{props.video.snippet.description}</div>
//         </div>
//       </div>
//       );    
//   }
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }












// <button onclick="myFunction()">Click me</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }
// </script>





// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
