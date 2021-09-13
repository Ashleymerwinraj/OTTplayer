<template>
    <q-layout class="player-window row">
        <q-page-container class="player-playList-ic">
            <q-tabs
                v-model="tab"
                vertical
            >
                <q-tab icon="image" />
                <q-tab icon="image" />
                <q-tab icon="image" />
            </q-tabs>
        </q-page-container>

        <q-page-container class="playerWindow-playList col-2 q-gutter-sm">
            <div class=" text-center">
                Play List
            </div>
            <div>
                <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </div>
            <div>
                <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </div>
            <div>
                <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </div>
            <div>
                <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </div>
        </q-page-container>

        <q-page-container class="player col q-pa-sm">
            <div class="column">
                <div class="col q-pa-sm">
                    <div
                        id="c-video"
                        class="c-video"
                        @mouseover="playbtn = true;controls = true"
                        @mouseleave="playbtn = false;controls = false"
                    >
                        <video
                            id="videoElement"
                            class="video"
                            ref="video1"
                            :autoplay="videoAuto"
                            @click="playVid()"
                            playsinline
                            loop
                            object-fit
                            controlsList="nodownload"
                            preload="auto"
                        >
                            <source src="../assets/trailer.mp4" type="video/webm" />
                            <source src="../assets/squareview.mp4" type="video/webm" />
                            <source src="../assets/reels.mp4" type="video/webm" />
                            <source src="../assets/videoplayback.mp4" type="video/webm" />
                            <!--<track
                                label="English subtitles"
                                kind="subtitles"
                                srclang="en"
                                src="/static/the-web-is-always-changing.vtt"
                                default
                            />
                            <track
                                label="French subtitles"
                                kind="subtitles"
                                srclang="fr"
                                src="/static/always-changing.vtt"
                            />-->
                        </video>
                        <div class="buttons">
                            <div v-show="playbtn" class="playpause">
                                <div
                                    class="pause"
                                    value="none"
                                    @click="playVid()"
                                    id="playpause"
                                >
                                </div>
                                <!--<q-btn
                                    size="20px"
                                    flat
                                    round
                                    color="black"
                                    @click="playVid()"
                                    value="none"
                                    id="playpause"
                                    icon="pause_arrow"
                                >
                                </q-btn>-->
                            </div>
                        </div>
                        <div v-show="controls" class="controls">
                            <div class="row justify-end">
                                <div class="col-1">
                                    <q-btn id="pipBtn" @click="pipbtn()" round flat icon="picture_in_picture_alt" />
                                </div>
                                <div class="col-1">
                                    <q-btn round flat @click="fullScreen()" icon="fullscreen" />
                                </div>
                                <div class="videoOptions col-1">
                                    <q-btn color="white" round flat icon="more_vert">
                                        <q-menu
                                        anchor="top left"
                                        self="bottom right"
                                        >
                                        <q-list>
                                            <q-item clickable v-close-popup>
                                                <q-item-section avatar>
                                                    <q-icon name="closed_caption"/>
                                                </q-item-section>
                                                <q-item-label class="self-center">Captions</q-item-label>
                                            </q-item>
                                            <q-item clickable v-close-popup>
                                                <q-item-section avatar>
                                                    <q-icon name="settings"/>
                                                </q-item-section>
                                                <q-item-label class="self-center">Settings</q-item-label>
                                            </q-item>
                                        </q-list>
                                        </q-menu>
                                    </q-btn>
                                </div>
                            </div>
                            <div>
                                <span id="timer"
                                >00:00
                                </span>
                            </div>
                            <div class="progress">
                                <input
                                    type="range"
                                    id="progress"
                                    :max="100"
                                    min="0"
                                    :value="currentTime"
                                />
                                <q-btn class="toggle" id="underPlay" dense round no-wrap flat size="10px">►</q-btn>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row q-mt-sm justify-between">
                            <div class="col-3">
                                <label class="text-h6">Video Details</label>
                            </div>
                            <div class="col-5">
                                <q-btn
                                    color="purple"
                                    dense
                                    padding
                                    label="Bubbly"
                                />
                                <q-btn
                                    color="white"
                                    push
                                    size="md"
                                    icon="thumb_up_alt"
                                    dens
                                    round
                                    flat
                                />
                                <q-btn
                                    color="white"
                                    push
                                    size="md"
                                    icon="thumb_down_alt"
                                    dens
                                    round
                                    flat
                                />
                                <q-btn
                                    color="white"
                                    push
                                    size="md"
                                    icon="share"
                                    dens
                                    round
                                    flat
                                />
                                <q-btn
                                    color="white"
                                    push
                                    size="md"
                                    icon="playlist_add"
                                    dens
                                    round
                                    flat
                                />
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <label class="text-h7">Description</label>
                    </div>
                    <q-separator />
                    <div class="row q-mt-sm justify-between">
                        <div class="text-h6">
                            Channel Name
                        </div>
                        <div>
                            <q-btn color="red" dense label="Subscribe"  />
                        </div>
                    </div>
                    <div class="">
                        <p>The main part of the video and the session of the video is displayed here</p>
                    </div>
                    <q-separator />
                    <div class="row justify-between q-gutter-sm q-pa-sm">
                        <div class="col-8" style="max-width: 300px">
                            <q-input
                                name="comment"
                                color="white"
                                rounded
                                placeholder="Comment"
                                dense
                                clearable
                                outlined
                            />
                        </div>
                        <div class="col">
                            <q-btn label="Submit" rounded type="submit" color="orange"/>
                        </div>
                    </div>
                </div>
            </div>
        </q-page-container>

        <q-page-container class="player-RecommendedAdd col-3 q-gutter-sm">
            <div class="q-pa-sm">
                <q-toggle v-model="videoAuto" color="blue" />
                <q-carousel
                    v-model="slide"
                    animated
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    infinite
                    swipeable
                    autoplay
                    hide-delimiter-background
                    height="170px"
                    class="addBanner bg-primary text-white shadow-1 rounded-borders"
                >
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                </q-carousel>
            </div>
            <q-separator />
            <div class="text-center">
                Recommended
            </div>
            <div id="recomVideo" class="row q-gutter-sm">
                <div class="col-5">
                    <q-img
                        :ratio="19/10"
                        src="https://cdn.quasar.dev/img/parallax1.jpg"
                        data-src="../assets/videoplayback.mp4"
                    />
                </div>
                <div class="col-5">
                    <label>Description may be sdj sfvsdjfn sdokvsdmokf</label>
                </div>
                <div class="col-5">
                    <q-img
                        :ratio="19/10"
                        src="https://cdn.quasar.dev/img/parallax1.jpg"
                        data-src="../assets/videoplayback.mp4"
                    />
                </div>
                <div class="col-5">
                    <label>Description</label>
                </div>
                <div class="col-5">
                    <q-img
                        :ratio="19/10"
                        src="https://cdn.quasar.dev/img/parallax1.jpg"
                        data-src="../assets/videoplayback.mp4"
                    />
                </div>
                <div class="col-2">
                    <label>Description</label>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
// import $ from 'jquery'
// get video element id
export default {
  data () {
    return {
      tab: '',
      slide: 1,
      play: null,
      pause: null,
      playbtn: false,
      controls: false,
      currentTime: 0,
      videoAuto: true
    }
  },
  mounted () {
    const pause = document.querySelector('.pause')
    pause.addEventListener('click', (e) => {
      e.target.classList.toggle('box')
    })
    var mediaPlayer = document.getElementById('videoElement')
    const progressBar = document.getElementById('progress')
    const timer = document.getElementById('timer')
    setInterval(function () {
    //   for (;progressBar.value < 1;) {
    //   progressBar.value = progressBar.value + progressBar.value
      //   }
      progressBar.value = (mediaPlayer.currentTime / mediaPlayer.duration) * 100
      let minutes = Math.floor(mediaPlayer.currentTime / 60)
      if (minutes < 10) {
        minutes = '0' + String(minutes)
      }
      let seconds = Math.floor(mediaPlayer.currentTime % 60)
      // progressBar.value = seconds
      if (seconds < 10) {
        seconds = '0' + String(seconds)
      }
      let minute = Math.floor(mediaPlayer.duration / 60)
      if (minute < 10) {
        minute = '0' + String(minute)
      }
      let second = Math.floor(mediaPlayer.duration % 60)
      if (second < 10) {
        second = '0' + String(second)
      }
      timer.innerHTML = `${minutes}:${seconds}/${minute}:${second}`
    })
  },
  // computed () {
  //   const progressBar = document.getElementById('progress')
  //   var mediaPlayer = document.getElementById('videoElement')
  //   progressBar.handleMouseMove(function handleMouseMove (event) {
  //     let newTime = this.calculateDistance(event) * this.mediaPlayer.duration()
  //     if (newTime === this.mediaPlayer.duration()) {
  //       newTime = newTime - 0.1
  //     }
  //     this.player_.currentTime(newTime)
  //     this.update()
  //     const currentTime = mediaPlayer.currentTime()
  //     const minutes = Math.floor(currentTime / 60)
  //     const seconds = Math.floor(currentTime - minutes * 60)
  //     const x = minutes < 10 ? '0' + minutes : minutes
  //     const y = seconds < 10 ? '0' + seconds : seconds
  //     const format = x + ':' + y
  //     mediaPlayer.controlBar.currentTimeDisplay.el_.innerHTML = format
  //   })
  // },
  beforeDestroy () {
    this.$refs.video1.removeEventListener('timeUpate', this.updateCurrentTime)
  },
  methods: {
    // updateCurrentTime (ev) {
    //   const v = ev.target
    //   document.documentElement.style.setProperty('--videoProgress', `${(v.currentTime / v.duration) * 100}%`)
    // },
    seek (ev) {
      this.video1.currentTime = ev.target.value
    },
    scrub (e) {
      const progressBar = document.getElementById('progress')
      var mediaPlayer = document.getElementById('videoElement')
      const scrubTime = (e.offsetX / progressBar.offsetWidth) * mediaPlayer.duration
      mediaPlayer.currentTime = scrubTime
      const mouseleave = false
      progressBar.addEventListener('click', this.scrub)
      progressBar.addEventListener('mousemove', (e) => mouseleave && this.scrub(e))
    },
    // progressRun: function (value) {
    //   var mediaPlayer = document.getElementById('videoElement')
    //   const progressBar = document.getElementById('progress')
    //   mediaPlayer.currentTime = (+progressBar.value * mediaPlayer.duration) / 100
    // },
    playVid () {
      var mediaPlayer = document.getElementById('videoElement')
      if (mediaPlayer.paused && !mediaPlayer.ended) {
        mediaPlayer.play()
      } else {
        mediaPlayer.pause()
      }
    },
    // togglePlay () {
    //   const mediaPlayer = document.getElementById('videoElement')
    //   const method = mediaPlayer.paused ? 'play' : 'pause'
    //   mediaPlayer[method]()
    // },
    // updateButton () {
    //   const underPlaying = document.getElementById('underPlay')
    //   const icon = this.paused ? '►' : '❚ ❚'
    //   underPlaying.textContent = icon
    // },
    // hoverPlay () {
    //   var playcom = document.getElementById('recom')
    //   if (this.hoverPlay === false) {
    //     playcom.play()
    //   }
    // },
    pipbtn () {
      var mediaPlayer = document.getElementById('videoElement')
      var pipButton = document.getElementById('pipBtn')
      if ('pictureInPictureEnabled' in document) {
        pipButton.classList.remove('hidden')
        pipButton.disabled = false
        pipButton.addEventListener('click', () => {
          if (document.pictureInPictureElement) {
            document
              .exitPictureInPicture()
          } else {
            mediaPlayer
              .requestPictureInPicture()
          }
        })
      }
    },
    fullScreen () {
      var mediaPlayer = document.getElementById('videoElement')
      if (mediaPlayer.requestFullscreen) {
        mediaPlayer.requestFullscreen()
      } else if (mediaPlayer.webkitRequestFullscreen) {
        mediaPlayer.webkitRequestFullscreen()
      } else if (mediaPlayer.msRequestFullscreen) {
        mediaPlayer.msRequestFullscreen()
      }
    }
    // Scroll () {
    //   var progressBar = document.getElementById('progress')
    //   var mediaPlayer = document.getElementById('videoElement')
    //   const pos = Math.ceil(document.body.scrollHeight * (this.mediaPlayer.currentTime / (this.mediaPlayer.duration()))
    //   .to(window, {duration: 2, Scroll: pos, ease: 'linear'})
    // }
    // progressLoop () {
    //   const progress = document.getElementById('progress')
    //   const timer = document.getElementById('timer')
    //   const video = document.getElementById('videoElement')
    //   setInterval(function () {
    //     progress.value = Math.round((video.currentTime / video.duration) * 100)
    //     timer.innerHTML = Math.round(video.currentTime) + 'seconds'
    //   })
    //   return this.progressLoop
    // }
  }
//   methods: {
//     // play video event
//     playVid () {
//       vidClip.play()
//     }
//     // pause video event
//   }
//   created: {
//       // toggle button class on click
//         $('playVid').on('click', function () {
//             $('.first, .second').toggle()
//         })
//       // toggle button class when finished
//         vidClip.onended = function (e) {
//             $('.first, .second').toggle()
//     }
//   }
}
</script>

<style>
.c-video {
  position: relative;
  max-width:64rem;
  width:100%;
  max-height:33.875rem;
  height:100%;
  background-color: black
}
.video {
  width: 100%;
  height: auto;
}
.player-window {
  margin: 0;
}
.buttons {
  display: flex;
  position: absolute;
  left: 42.5%;
  top: 40%;
  width: 100%;
  flex-wrap: wrap;
  background-color: transparent
}
.controls {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: transparent
}
.buttons q-btn {
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer
}
@media screen and (max-width: 1100px) {
    .playerWindow-playList {
        display: none;
    }
}
@media screen and (max-width: 1000px) {
    .player-playList-ic {
        display: none;
    }
}
@media screen and (max-width: 700px) {
    .player-RecommendedAdd {
        display: none;
    }
}
</style>

<style lang="scss">
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #10db32;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #10db32;
  height: 18px;
  width: 18px;
  border-radius: 20px;
  background: #3009dd;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #10db32;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #10db32;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #10db32;
  height: 18px;
  width: 18px;
  border-radius: 20px;
  background: #3009dd;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #10db32;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #10db32;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #10db32;
  height: 18px;
  width: 18px;
  border-radius: 20px;
  background: #3009dd;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #10db32;
}
input[type=range]:focus::-ms-fill-upper {
  background: #10db32;
}
.pause{
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-style: double;
  border-color: transparent transparent transparent steelblue;
  border-width:0px 0px 0px 40px;
  transition: all 100ms ease-in-out;
}
.box{
  border-style: solid;
  border-width: 25px 0px 25px 40px;
}
</style>
<!--<style lang="scss">
.playpause {
  label {
    display: block;
    width: 0;
    height: 74px;

    border-color: transparent #ebe2e2e7;
    transition: 100ms all ease;
    cursor: pointer;
    border-style: double;
    border-width: 0px 0 0px 60px;
  }
  input[type="checkbox"] {
    position: absolute;
    left: -9999px;
    &:checked + label {
      border-style: solid;
      border-width: 37px 0 37px 60px;
    }
    &:focus + label {
      box-shadow: 0;
    }
  }
}
</style>-->
