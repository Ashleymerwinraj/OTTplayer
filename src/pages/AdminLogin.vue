<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card class="bg-card" v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Admin Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn class="text-white" label="Forgotten Account?" size="12px" flat />
              </div>

              <div class="flex flex-center">
                <q-btn label="Login" to="/adminpanel" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, rgba(4, 0, 255, 0.171) 0%, #010211d2 100%);
}
.bg-card {
  background-image: linear-gradient(135deg, rgba(16, 12, 221, 0.945) 0%, #030746e1 100%);
}
</style>
