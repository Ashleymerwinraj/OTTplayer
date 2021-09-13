<template>
    <q-layout>
        <q-card
            class="cardProfile"
        >
            <q-card-section class="" style="position: relative; left:0; right:0">
                <q-img
                    class="coverPic"
                    src="../assets/images.jpg"
                    width="100%"
                />
                <q-img
                    class="profilePic"
                    color="white"
                    width="100px"
                    src="../assets/propic.png"
                />
            </q-card-section>
            <q-card-section class="row justify-center">
                <label class="accountName text-h6">
                    Name of the Participant
                </label>
                <q-btn class="accountEditIcon" icon="edit" flat dense round />
            </q-card-section>
            <q-card-section class="row justify-end q-gutter-sm">
                <q-btn
                    label="Create channel"
                    color="blue"
                    glossy
                />
            </q-card-section>
            <q-card-section>
                <q-tabs
                    v-model="tab"
                    dense
                    :breakpoint="0"
                    align="justify"
                    no-caps
                    inline-label
                    class="bg-purple text-white shadow-2"
                >
                    <q-tab name="home" icon="home" label="Home" />
                    <q-tab name="videos" icon="slideshow" label="Videos" />
                    <q-tab name="playList" icon="list" label="Play Lists" />
                    <q-tab name="channels" icon="tv" label="Channels" />
                    <q-tab name="about" icon="info" label="About" />
                    <q-input dark dense standout v-model="text" input-class="text-right" class="q-pa-sm">
                        <template v-slot:append>
                            <q-icon v-if="text === ''" name="search" />
                            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                        </template>
                    </q-input>
                </q-tabs>
                <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                >
                    <q-tab-panel
                        name="home"
                        class="row justify-center"
                    >
                      <div>
                        <q-uploader
                          url="http://localhost:3000/posts"
                          label="Upload files"
                          color="purple"
                          square
                          flat
                          style="max-width: 300px"
                        ></q-uploader>
                      </div>
                    </q-tab-panel>
                    <q-tab-panel
                        name="videos"
                    >
                        <div class="row justify-around q-pa-sm q-gutter-sm">
                            <div class="col-3 q-gutter-sm">
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 q-gutter-sm">
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 q-gutter-sm">
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row q-gutter-sm">
                                    <div class="col">
                                        <q-img :ratio="19/10" src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    </div>
                                    <div class="col">
                                        <div class="col">
                                            <label>Hello</label>
                                        </div>
                                        <div class="col">
                                            <label>Be too good</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="channels">
                        <q-tabs
                            class="bg-green"
                            dense
                            :breakpoint="0"
                            align="justify"
                            no-caps
                            inline-label
                        >
                            <q-tab label="Private Channel"/>
                            <q-tab label="Subscribed Channel" />
                        </q-tabs>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card-section>
        </q-card>
    </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: 'home',
      text: ''
    }
  }
}
</script>

<style>
.cardProfile{
    align-self: center;
    height: auto;
}
.coverPic{
    position: relative;
    height: 30%;
    left: 0;
    right: 0;
}
.profilePic{
    position: absolute;
    height: auto;
    max-width: 200px;
    width: 100%;
    left: 40%;
    top: 50%;
}
@media screen and (min-width: 400px) {
    .coverPic {
        height: 150px;
    }
}
.accountName {
    position: relative;
}
.accountEditIcon {
    display: none;
    position: sticky;
}
.accountName:hover ~ .accountEditIcon {
    display: block;
}
</style>
