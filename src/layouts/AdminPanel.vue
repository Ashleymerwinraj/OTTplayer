<template>
  <q-layout view="lHh Lpr fFf">
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
      </q-toolbar>
    </q-header>
    <q-drawer
      class="appDrawer"
      v-model="drawer"
      :breakpoint="500"
      show-if-above
      bordered
      elevated
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item>
            <q-item-section>
              <q-icon/>
            </q-item-section>
            <q-item-section>
              <q-item-label></q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item
            icon="verified"
            label="Flixx"
          >
            <q-list class="q-pl-lg">
              <q-item to="/flixxadmin_video" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="video_library"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/flixxadmin_upload" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="cloud_upload"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Upload</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item to="" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="play_circle_filled"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Play</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/useradmin" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="person_pin"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>User</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page class="q-gutter-sm q-pa-sm">
        <q-card class="adminMessages">
          <q-card-container class="flex flex-center text-h6 q-pt-sm">
            <div>
              Messages
            </div>
          </q-card-container>
          <q-separator inset />
          <q-card-container>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="text-subtitle2">
                Message Sender / Title:
              </div>
              <div class="text-weight-light text-caption">
                Messages Recieved by the sender or about the title
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="text-subtitle2">
                Message Sender / Title:
              </div>
              <div class=" text-weight-light text-caption">
                Messages Recieved by the sender or about the title
              </div>
            </div>
          </q-card-container>
        </q-card>
        <q-card class="adminNotify float-right">
          <q-card-container class="flex flex-center text-h7 q-pt-sm">
            <div>
              Notifications
            </div>
          </q-card-container>
          <q-separator inset />
          <q-card-container>
            <div class="justify-start q-pa-sm">
              <div class="text-subtitle2">
                Notification from / Title:
              </div>
              <div class="text-weight-light text-caption">
                Notification Recieved from or about the title
              </div>
            </div>
            <div class="justify-start q-pa-sm">
              <div class="text-subtitle2">
                Notification from / Title:
              </div>
              <div class="text-weight-light text-caption">
                Notification Recieved from or about the title
              </div>
            </div>
            <div class="justify-start q-pa-sm">
              <div class="text-subtitle2">
                Notification from / Title:
              </div>
              <div class="text-weight-light text-caption">
                Notification Recieved from or about the title
              </div>
            </div>
          </q-card-container>
        </q-card>
      </q-page>
    </q-page-container>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminPanel',
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>

<style>
.appDrawer {
  width: 30%;
}
.adminNotify {
  width: 23%;
}
</style>
