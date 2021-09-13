<template>
  <q-page class="PagePlayTab">
    <div>
      <q-tabs
        class="playTab"
        dense
        align="justify"
        indicator-color="transparent"
        active-color="white"
        inline-label
        :breakpoint="0"
      >
        <q-tab id="play_tab1" label="1stsection">
          <q-menu
            color="primary"
            transition-show="scale"
            transition-hide="scale"
            :offset="[-30, 0]"
          >
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>1</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>3</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>4</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-tab>
        <q-tab id="play_tab2" label="2ndsection">
          <q-menu
            color="primary"
            transition-show="scale"
            transition-hide="scale"
            :offset="[-30, 0]"
          >
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>1</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>3</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>4</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-tab>
        <q-tab id="play_tab3" label="3rdsection">
          <q-menu
            color="primary"
            transition-show="scale"
            transition-hide="scale"
            :offset="[-30, 0]"
          >
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>1</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>3</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>4</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-tab>
        <q-tab id="play_tab4" label="4thsection">
          <q-menu
            color="primary"
            transition-show="scale"
            transition-hide="scale"
            :offset="[-30, 0]"
          >
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>1</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>2</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>4</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>5</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-tab>
      </q-tabs>
    </div>
    <div class="q-pa-md">
      <q-carousel
        id="main-banner"
        v-model="slide"
        class="bannerPlay"
        animated
        transition-prev="slide-right"
        transition-next="slide-left"
        :autoplay="5000"
        infinite

        arrows
        swipeable
        hide-delimiter-background
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{  }}</div>
            <div class="text-subtitle1">{{  }}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{  }}</div>
            <div class="text-subtitle1">{{  }}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4">
          <div class="b-video">
            <video
              id="video-banner"
              class="videoPart"
              autoplay
              width="100%"
              src="../assets/videoplayback.mp4"
            ></video>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5">
          <div class="b-video">
            <video
              id="video-banner"
              class="videoPart"
              autoplay
              width="100%"
              src="../assets/trailer.mp4"
            ></video>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div
      class="playTopListSection"
    >
      <q-toolbar-title class="q-pa-sm">
        Top List/Latest Update
      </q-toolbar-title>
      <q-carousel
        class="topListSlide"
        v-model="slider"
        animated
        ref="carousel"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <template v-slot:control>
          <q-carousel-control
            position="left"
            :offset="[0.1, 25]"
          >
            <!--<q-btn flat dense padding="lg xs" icon="navigate_before" @click="$refs.carousel.previous()" />-->
          </q-carousel-control>
          <q-carousel-control
            position="right"
            :offset="[0.1, 25]"
          >
            <!--<q-btn flat dense padding="lg xs" icon="navigate_next" @click="$refs.carousel.next()" />-->
          </q-carousel-control>
        </template>
        <q-carousel-slide :name="1">
          <div class="topList row q-gutter-sm">
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img  class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img  class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <div class="topList row q-gutter-sm">
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img  class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img  class="playTopListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="recomendedSection q-pa-sm">
      <div>
        <q-toolbar-title>
          Recomended
        </q-toolbar-title>
      </div>
      <q-carousel
        class="recomListSlide q-pa-sm"
        v-model="recomSlider"
        animated
        swipeable
        ref="recomSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <template v-slot:control>
          <q-carousel-control
            position="left"
            :offset="[0.1, 55]"
          >
            <!--<q-btn flat dense padding="lg xs" icon="navigate_before" :width="10px" @click="$refs.recomSlide.previous()" />-->
          </q-carousel-control>
          <q-carousel-control
            position="right"
            :offset="[0.1, 55]"
          >
            <!--<q-btn flat dense padding="lg xs" icon="navigate_next" @click="$refs.recomSlide.next()" />-->
          </q-carousel-control>
        </template>
        <q-carousel-slide :name="1">
          <div class="recomList row q-gutter-sm">
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <div class="topList row q-gutter-sm">
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" />
            </div>
            <div class="col">
              <q-img class="recomListVideo" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <q-banner class="addBanner">
        <q-img src="../assets/addBanner.jpg" />
      </q-banner>
    </div>
  </q-page>
</template>

<script>
// import * as $ from 'jquery'

export default {
  name: 'PageIndex',
  data () {
    return {
      info: null,
      slide: 1,
      image: true,
      slider: 1,
      recomSlider: 1
    }
  }
  // mounted () {
  //   this.slide(function () {
  //     const car = document.getElementById('main-banner')
  //     const video = document.getElementById('video-banner')
  //     if (video.autoplay === true) {
  //       car.autoplay.pause()
  //     }
  //   })
  // }
  //   console.log('hello working')
  //   $('#video-banner').on('play', function (e) {
  //     $('#main-banner').carousel('pause')
  //   }).then((res) => {
  //     console.log('stopped')
  //   })
  //   $('#video-banner').on('stop pause ended', function (e) {
  //     $('#main-banner').carousel()
  //   })
}
</script>

<style>
.PagePlayTab {
  overflow-y: hidden;
  position: relative;
  overflow-x: hidden
}
.bannerPlay {
  width: 100%;
  background-color: transparent;
  overflow-x: hidden;
}
@media screen and (max-width: 800px) {
  .bannerPlay {
    height: 30vh;
  }
}
.playTopListSection {
  overflow-y: hidden;
  overflow-x: hidden;
}
.topListSlide {
  height: auto;
  background-color: transparent;
  position: relative;
}
.recomListSlide {
  height: auto;
  background-color: transparent;
  position: relative;
}
.addBanner {
  height: auto;
  background-color: transparent;
  position: relative;
}
.videoPart {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)
}
.playTab::after {
  display: none;
}
.playTab {
  background-color: rgba(128, 128, 128, 0.801);
}
#play_tab1:hover {
  background-color: tomato;
}
#play_tab2:hover {
  background-color: tomato;
}
#play_tab3:hover {
  background-color: tomato;
}
#play_tab4:hover {
  background-color: tomato;
}
.topList {
  -webkit-overflow-scrolling: auto;
}
/* .playTopListSection {
  display: grid;
  grid-gap: 20px;
 grid-template-columns: repeat(6, minmax(100px, 1fr))
} */
.playTopListVideo, .recomListVideo {
  position: relative;
  overflow-x: hidden;
  transition: all .3s ease;
  border-radius: 2px;
  width: 100%;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
}
.playTopListVideo:hover, .playTopListVideo:active {
  overflow-x: hidden;
  overflow-y: hidden;
  transform: scale(1.2);
  z-index: 9;
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
.recomListVideo:hover, .recomListVideo:active {
  overflow-x: hidden;
  overflow-y: hidden;
  transform: scale(1.1);
  z-index: 9;
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
/* .recommend-play {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.recommend-play img {
  widows: 30%;
  height: auto;
  margin-left: -50px;
} */
</style>
