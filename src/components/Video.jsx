import React from 'react';
import Styled from 'styled-components';

const Vid = Styled.div`
position: absolute;
top: -1%;
width: 100% !important;
height: 101% !important;
`;

let loadYT

const isFunction = (fn) => typeof fn === 'function';

class Video extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      play: true,
    }

    this.youtubePlayerAnchor = React.createRef();
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const videoId = 'NLYsFPr1CSA';

    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }

    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor.current, {
        height: window.innerHeight,
        width: window.innerWidth,
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          autohide: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          disablekb: 1,
          enablejsapi: 1,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
        },
        events: {
          onStateChange: this.onPlayerStateChange,
          onReady: this.onPlayerReady,
        }
      })
    });

    document.addEventListener('scroll', this.onScroll);
  }

  onPlayerReady() {
    this.player.mute();
  }

  pause() {
    if (this.playing()) this.player.pauseVideo();
  }

  play() {
    if (!this.player || !isFunction(this.player.playVideo)) return;

     this.player.playVideo();
  }

  playing() {

    if (!this.player || !isFunction(this.player.getPlayerState)) {
      return false;
    }

    return this.player.getPlayerState() === 1;
  }

  onPlayerStateChange(e) {
    console.log('onPlayerStateChange')
  }

  onScroll(e) {
    const { current } = this.props.sectionRef;

    if (!current) return;

    const scrollTop = document.documentElement.scrollTop;
    const req = current.getBoundingClientRect()

    if (scrollTop > req.height) {
      this.pause();
    } else if (!this.playing()) {
      this.play();
    }
  }

  render() {
    return (
          <Vid ref={this.youtubePlayerAnchor} />
        )
  }
}

export default Video;
