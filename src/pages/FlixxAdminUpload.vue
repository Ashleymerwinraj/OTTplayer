<template>
  <q-layout>
      <q-page-container>
          <q-page class="flex flex-center q-pa-sm">
              <q-card class="uploadVideo">
                  <q-card-container class="flex flex-center text-h6 q-pt-sm">
                      <div>
                          Upload Video
                      </div>
                  </q-card-container>
                  <q-card-container class="flex flex-center q-pa-sm">
                      <div>
                          <q-uploader
                              class="flixxVideoUploader"
                              label="Place The Video"
                              field-name="file"
                              url="http://174.138.35.211:8081/uploadImage"
                              square
                              v-model="uploadVideo"
                              color="blue"
                              flat
                          />
                      </div>
                  </q-card-container>
                  <q-card-container class="q-gutter-sm q-pa-sm">
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Title
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoTitle" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Description
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoDes" type="textarea" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Banner
                          </div>
                          <div class="col-4 self-center">
                              <q-file outlined label="Upload Banner" v-model="uploadBanner">
                                  <template v-slot:prepend>
                                      <q-icon name="collections" />
                                  </template>
                                  <template v-slot:append>
                                      <q-icon name="close" @click.stop="uploadBanner = null" class="cursor-pointer" />
                                  </template>
                              </q-file>
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add" flat round size="15px" title="Add More Image" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Actor
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoActor" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add" flat round size="15px" title="Add More Actor" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add_a_photo" flat round size="15px" title="Add Actor Image" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Director
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoDirector" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add" flat round size="15px" title="Add More Actor" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add_a_photo" flat round size="15px" title="Add Actor Image" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Producer
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoProducer" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add" flat round size="15px" title="Add More Actor" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add_a_photo" flat round size="15px" title="Add Actor Image" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Production House
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoProductionHouse" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add" flat round size="15px" title="Add More Actor" />
                          </div>
                          <div class="col-1 self-center">
                              <q-btn icon="add_a_photo" flat round size="15px" title="Add Actor Image" />
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Trailer
                          </div>
                          <div class="col-4 self-center">
                              <q-file outlined label="Upload Trailor" v-model="uploadTrailor">
                                  <template v-slot:prepend>
                                  <q-icon name="cloud_upload" />
                                  </template>
                                  <template v-slot:append>
                                      <q-icon name="close" @click.stop="uploadTrailor = null" class="cursor-pointer" />
                                  </template>
                              </q-file>
                          </div>
                      </div>
                      <div class="row justify-start q-gutter-sm q-pa-sm">
                          <div class="col-3 self-center text-subtitle1">
                              Slug
                          </div>
                          <div class="col-4 self-center">
                              <q-input outlined v-model="videoSlug" prefix="WWW.Playflixx.com/flixx/" />
                          </div>
                      </div>
                      <div class="q-gutter-sm q-pa-md">
                          <div class="flex flex-center text-subtitle1">
                              <q-btn label="Upload" v-model="flixxVideoBtn" @click="flixxVideoUpload()" color="primary" />
                          </div>
                      </div>
                  </q-card-container>
              </q-card>
          </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      uploadVideo: '',
      videoTitle: '',
      videoDes: '',
      uploadBanner: 'null',
      videoActor: '',
      videoDirector: '',
      videoProducer: '',
      videoProductionHouse: '',
      videoSlug: '',
      uploadTrailor: 'null',
      flixxVideoBtn: ''
    }
  },
  methods: {
    flixxVideoUpload () {
      this.$axios.post('http://174.138.35.211:8081/flixxVideo', {
        videoTitle: this.videoTitle,
        videoDes: this.videoDes,
        uploadBanner: this.uploadBanner,
        videoActor: this.videoActor,
        videoDirector: this.videoDirector,
        videoProducer: this.videoProducer,
        uploadTrailor: this.uploadTrailor,
        videoSlug: this.videoSlug
      }).then(res => {
        console.log(res.data)
      },
      (error) => {
        console.log(error)
      }
      )
    }
  }
}
</script>

<style>
.uploadVideo {
    width: 70%;
    background-image: linear-gradient(135deg, rgba(16, 12, 221, 0.945) 0%, #030746e1 100%);
}
</style>
