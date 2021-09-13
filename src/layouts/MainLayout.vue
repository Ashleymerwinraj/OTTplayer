<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="primary text-white" elevated>
      <q-toolbar
        class="q-gutter-sm"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          PlayFlixx
        </q-toolbar-title>
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        <q-btn
          class="btnLive bg-red"
          push
          size="md"
          label="Live"
          glossy
          icon="live_tv"
          dens
          flat
        >
        </q-btn>
        <q-btn
          class="q-mt-md"
          title="notificationIcon"
          icon="notifications"
          color="white"
          round
          dens
          flat
        >
          <q-badge color="red" floating>{{ 3 }}</q-badge>
        </q-btn>
        <q-btn class="btnSignInToolBar" to="/LoginForm" color="yellow" label="Sign IN">
          <q-menu>
            <div>
              <div class="no-wrap q-pa-md">
                <q-avatar size="72px">
                  <img src="">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>

                <q-btn
                  color="red"
                  label=""
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <q-tabs
        title="dividingtab"
        v-model="tab"
        dense
        align="justify"
        indicator-color="transparent"
        active-color="white"
        inline-label
        class="tabPlayFlixx text-white shadow-2"
        :breakpoint="0"
      >
        <q-route-tab class="mainPlayTab" name="Play" icon="play_circle_filled" label="Play" to="/"/>
        <q-separator vertical color="black" />
        <q-route-tab class="mainFlixxTab" name="Flixx" icon="verified" label="Flixx" to="/FlixxTab"/>
      </q-tabs>
    </q-header>

    <q-drawer
      class="appDrawer"
      v-model="drawer"
      :width="240"
      :breakpoint="500"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      show-if-above
      bordered
      elevated
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <div class="row q-pa-sm">
            <q-item-label
              class="col"
              header
            >
            Menu
            </q-item-label>
            <q-btn
              class="btnSignInMenu col"
              dense
              color="yellow"
              label="Sign In"
              to="/LoginForm"
            >
            </q-btn>
          </div>
          <Menu
            v-for="link in topMenu"
            :key="link.title"
            v-bind="link"
          />
          <q-separator />
          <q-item-label
            header
          >
            Best of PlayFlixx
          </q-item-label>
          <Menu
            v-for="link in bestOfPlayflixx"
            :key="link.title"
            v-bind="link"
          />
          <q-separator />
          <Menu
            v-for="link in bottomMenu"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from 'components/Menu.vue'

const menu1sthalf = [
  {
    title: 'Subscribers',
    icon: 'subscriptions'
  },
  {
    title: 'Premium',
    icon: 'payments'
  },
  {
    title: 'Live Streaming',
    icon: 'live_tv'
  },
  {
    title: 'Channel',
    icon: 'tv'
  }
]
const menu2ndhalf = [
  {
    title: 'Music',
    icon: 'queue_music'
  },
  {
    title: 'Sports',
    icon: 'sports'
  }
]
const menu3rdhalf = [
  {
    title: 'Trending',
    icon: 'whatshot'
  },
  {
    title: 'Library',
    icon: 'video_library'
  }
]

export default {
  name: 'MainLayout',
  components: { Menu },
  watch: {
    '$q.dark.isActive' (val) {
      console.log(val ? 'On dark mode' : 'On light mode')
    }
  },
  data () {
    return {
      drawer: false,
      miniState: true,
      text: '',
      tab: 'Play',
      topMenu: menu1sthalf,
      bestOfPlayflixx: menu2ndhalf,
      bottomMenu: menu3rdhalf
    }
  }
//  methods: {
//    drawerClick (e) {
// if in "mini" state and user
// click on drawer, we switch it to "normal" mode
//      if (this.miniState) {
//        this.miniState = false
// we need to stop further propagation as this click is
// intended for switching drawer to "normal" mode only
//        e.stopPropagation()
//      }
//    }
//  }
}
</script>

<style>
.tabPlayFlixx {
  background-color: rgba(50, 66, 50, 0.219);
}
.mainPlayTab:hover {
  background-color: darkgreen;
}
.mainFlixxTab:hover {
  background-color: darkgreen;
}
@media screen and (min-width: 0px) and (max-width: 601px) {
    .btnSignInToolBar {
        display: none;
    }
}
@media screen and (min-width: 601px) {
    .btnSignInMenu {
        display: none;
    }
}
@media screen and (min-width: 0px) and (max-width: 601px) {
    .btnLive {
        display: none;
    }
}
</style>
