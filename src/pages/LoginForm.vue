<template>
    <q-layout>
        <div class="row">
            <div id="LoginAddSec" class="col-8 q-pa-md">
                <q-img
                    width="100%"
                    height="100%"
                    src="../assets/bg-img.jpg"
                >
                </q-img>
            </div>
            <q-separator vertical dark />
            <div class="col">
                <div class="flex flex-center">
                    <q-card
                        class="loginCard q-pa-sm q-gutter-md q-mt-lg"
                        id="icard"
                    >
                        <div class="cardFront">
                            <q-card-section class="row text-h6 justify-center">
                                Login
                            </q-card-section>
                            <q-card-section class="logInput q-pa-sm">
                                <q-input
                                    class="loginEmail"
                                    square
                                    color="purple"
                                    outlined v-model="email"
                                    :rules="[val => !!val || 'Field is required']"
                                    type="email"
                                    label="Email/Phone"
                                />
                                <q-input
                                    class="loginPassword"
                                    v-model="password"
                                    square
                                    color="purple"
                                    outlined :type="isPwd ?
                                    'password' : 'text'"
                                    :rules="[val => !!val || 'Field is required']"
                                    label="Password"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            @click="isPwd = !isPwd"
                                        />
                                    </template>
                                </q-input>
                            </q-card-section>
                            <q-card-section>
                                <a href="" target="" >Forget Password</a>
                            </q-card-section>
                            <q-card-section class="row justify-center">
                                <q-btn
                                    class="login-btn"
                                    glossy
                                    @click="getCredintials()"
                                    ref="previousPage"
                                    color="deep-orange"
                                    label="LogIN"
                                />
                            </q-card-section>
                            <q-card-section class="row justify-center">
                                <q-btn
                                    class="btnDisplayRegister"
                                    @click="flipCard('cardBack')"
                                    label="Create New Account"
                                    color="purple-13"
                                    value="Yes"
                                />
                            </q-card-section>
                        </div>
                        <div class="cardBack">
                            <q-card-section>
                                <label
                                    class="row text-h6"
                                >Create Account</label>
                            </q-card-section>
                            <q-card-section class="q-gutter-sm">
                                <q-input
                                    square
                                    color="purple"
                                    outlined
                                    v-model="nameReg"
                                    :rules="[val => !!val || 'Field is required']"
                                    type="name"
                                    label="Name*"
                                />
                                <q-input
                                    square
                                    color="purple"
                                    outlined
                                    v-model="phone"
                                    :rules="[val => !!val || 'Field is required']"
                                    type="Phone"
                                    label="Phone*"
                                />
                                <q-input
                                    square
                                    class="q-md-md"
                                    color="purple"
                                    outlined v-model="emailReg"
                                    type="Email"
                                    label="Email(Optional)"
                                />
                                <q-input
                                    square
                                    color="purple"
                                    outlined v-model="passwordReg"
                                    :rules="[val => !!val || 'Field is required']"
                                    type="password"
                                    label="Password*"
                                />
                            </q-card-section>
                            <q-card-section class="row justify-center">
                                <q-btn
                                    color="green"
                                    label="Sign Up"
                                    @click="getCredReg()"
                                />
                            </q-card-section>
                            <q-card-section class="row justify-center">
                                <label>(or)</label>
                            </q-card-section>
                            <q-card-section class="row justify-center">
                                <q-btn
                                    class="col"
                                    size="30px"
                                    flat
                                    icon="facebook"
                                />
                                <q-btn
                                    class="col"
                                    size="30px"
                                    flat
                                    icon="mail"
                                />
                            </q-card-section>
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      msg: [],
      emailReg: '',
      password: '',
      passwordReg: '',
      isPwd: true,
      phone: '',
      nameReg: '',
      splitterModel: 550
    }
  },
  mounted () {
    this.$ref.previousPage.previous()
  //  this.fun()
  },
  //   watch: {
  //     email (value) {
  //       this.email = value
  //       this.ValidateEmail(value)
  //     }
  //   },
  methods: {
    // ValidateEmail () {
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    //     this.msg[this.email] = ''
    //   } else {
    //     this.msg[this.email] = 'Invalid Email'
    //   }
    // },
    getCredintials () {
      this.$axios.post('http://174.138.35.211:8081/enter', {
        email: this.email,
        password: this.password
      }).then((response) => {
        alert(response.data)
      },
      (error) => {
        console.log(error)
      })
    },
    getCredReg () {
      this.$axios.post('http://174.138.35.211:8081/details', {
        nameReg: this.nameReg,
        emailReg: this.emailReg,
        phone: this.phone,
        passwordReg: this.passwordReg
      }).then((response) => {
        console.log(response.data)
      },
      (error) => {
        console.log(error)
      })
    },
    // async fun () {
    //  const response = await fetch('https://traineesapi.firebaseio.com/saji.json')
    //  const checkArr = await response.json()
    //  console.log(checkArr)
    // },
    // getCredintials () {
    //  axios.post ('', form)
    // },
    flipCard (show) {
    // document.getElementsByClassId(hide).style.display = 'none'
      document.getElementsByClassId(show).style.display = 'block'
    }
  }
  //    flipCard () {
  //      var cardBack = document.getElementsByClassName('cardBack')
  //    if (cardBack.style.display === 'none') {
  //        cardBack.style.display = 'block'
  //      } else {
  //        cardBack.style.display = 'none'
  //      }
  //    }
  //  }
} // var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()))
// if (mobile) {
//  document.getElementsByClassName('logInput').style.display = 'dense'
// }
// function flipToCreateAcc () {
//  window.location = '/src/Index.vue'
// }
//    getCredintials () {
//      console.log(this.logEmailPhone)
//      console.log(this.password)

</script>

<style>
.loginCard {
    align-content: center;
    width: 90%;
    background-color: dodgerblue;
}

@media screen and (min-width: 0px) and (max-width: 1101px) {
    #LoginAddSec {
        display: none;
    }
}
@media screen and (min-width: 511px) and (max-width: 1101px) {
    .loginCard {
        width: 70%;
    }
}
</style>
