<template>
  <q-page class="PageFlixxTab">
    <div>
      <q-tabs
        class="FlixxTab"
        dense
        align="justify"
        indicator-color="transparent"
        active-color="white"
        inline-label
        :breakpoint="0"
      >
        <q-tab id="flixx_tab1" label="1stsection">
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
        <q-tab id="flixx_tab2" label="2ndsection">
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
        <q-tab id="flixx_tab3" label="3rdsection">
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
        <q-tab id="flixx_tab4" label="4thsection">
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
        v-model="slide"
        class="bannerFlixx"
        animated
        transition-prev="slide-right"
        transition-next="slide-left"
        :autoplay="autoplay"
        infinite
        swipeable
        arrows
        navigation
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
              class="videoPart"
              autoplay
              width="100%"
              src="../assets/videoplayback.mp4"
            ></video>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div>
      <q-separator color="orange" inset />
    </div>
    <div class="newReleaseSection q-pa-md q-gutter-md">
      <q-toolbar-title>
        New Release
      </q-toolbar-title>
      <q-avatar
        size="150px"
      >
      <q-img v-model="image" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
        <q-img v-model="image" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
      <q-img v-model="image" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
        <q-img v-model="image" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
    <div class="playListSection q-pa-md q-gutter-md">
      <q-toolbar-title>
        Playlist
      </q-toolbar-title>
      <q-avatar
        size="150px"
      >
      <q-img v-model="image" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
        <q-img v-model="image" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
      <q-img v-model="image" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-avatar>
      <q-avatar
        size="150px"
      >
        <q-img v-model="image" src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'pageFlixx',
  data () {
    return {
      info: null,
      slide: 1,
      autoplay: true,
      image: true
    }
  }
}
</script>

<style>
.bannerFlixx {
  height: 340px
}
@media screen and (max-width: 500px) {
  .bannerFlixx {
    height: 200px;
  }
}
.videoPart {
  height: auto;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)
}
.FlixxTab {
  background-color: rgba(128, 128, 128, 0.801);
}
#flixx_tab1:hover {
  background-color: tomato;
}
#flixx_tab2:hover {
  background-color: tomato;
}
#flixx_tab3:hover {
  background-color: tomato;
}
#flixx_tab4:hover {
  background-color: tomato;
}
</style>
