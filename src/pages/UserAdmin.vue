<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center q-pa-sm">
        <q-card class="roleCategory">
          <q-card-container class="flex flex-center text-h6 q-pt-sm">
              <div v-if="!showTitle">
                  Add User
              </div>
          </q-card-container>
          <q-card-container class="flex q-pa-sm" v-if="!showbtn">
              <div>
                  <q-btn
                      class="roleAddUser"
                      @click="addUserReg = !addUserReg;userAccounts = !userAccounts;showTitle = !showTitle;showThisbtn = !showThisbtn;showbtn = !showbtn"
                      icon="add"
                      label="Add User"
                      square
                      color="blue"
                  />
              </div>
          </q-card-container>
          <q-card-container class="flex q-pa-sm" v-if="!showThisbtn">
              <div>
                  <q-btn
                      class="backToUser"
                      @click="addUserReg = !addUserReg;userAccounts = !userAccounts;showTitle = !showTitle;showbtn = !showbtn;showThisbtn = !showThisbtn"
                      icon="arrow_back_ios"
                      label="Back"
                      square
                      color="blue"
                  />
              </div>
          </q-card-container>
          <q-card-container v-if="!userAccounts">
            <div class="q-pa-sm">
              <q-table
                :grid="$q.screen.xs"
                :data="data"
                :columns="columns"
                row-key="name"
                :filter="search"
              >
                <template v-slot:top>
                    <div class="col-2 q-table_title">User Details</div>
                    <q-space />
                    <div class="row q-gutter-sm">
                        <q-input outlined dense debounce="300" color="white" v-model="search" placeholder="Search">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                        <q-btn-dropdown label="Filter" color="pink" dropdown-icon="change_history" >
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Type1</q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Type2</q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Type3</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
                </template>
                <template v-slot:body="props">
                    <q-tr align="center" :props="props">
                        <q-td key="name" :props="props.name">
                            {{ props.row.name }}
                        </q-td>
                        <q-td key="userid" :props="props.userid">
                            {{ props.row.userid }}
                        </q-td>
                        <q-td key="email" :props="props.email">
                            {{ props.row.email }}
                        </q-td>
                        <q-td key="phone" :props="props.phone">
                            {{ props.row.phone }}
                        </q-td>
                        <q-td key="ipaddress" :props="props.ipaddress">
                            {{ props.row.ipaddress }}
                        </q-td>
                        <q-td key="location" :props="props.location">
                            {{ props.row.location }}
                        </q-td>
                        <q-td class="q-gutter-sm" key="action" :props="props.action">
                            <q-btn label="Edit" color="blue" size="sm" no-caps />
                            <q-btn label="Activity" color="red" size="sm" no-caps />
                            <q-btn label="Roles" color="green" size="sm" no-caps />
                        </q-td>
                    </q-tr>
                </template>
              </q-table>
            </div>
          </q-card-container>
          <q-card-container class="q-gutter-sm q-pa-sm" v-if="!addUserReg">
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                Name
              </div>
              <div class="col-4 self-center">
                <q-input outlined v-model="userName" />
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                Email
              </div>
              <div class="col-4 self-center">
                <q-input outlined v-model="userMail" />
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                Phone Number
              </div>
              <div class="col-4 self-center">
                <q-input outlined v-model="userPhone" />
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                User Id
              </div>
              <div class="col-4 self-center">
                <q-input
                  outlined
                  id="enterUserId"
                  v-model="userid"
                  value="text"
                  :rules="[val => !!val || 'Enter User ID']"
                />
                <div v-if="userid === 'error'">Enter valid ID</div>
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                User type
              </div>
              <div class="col-4 self-center">
                <q-select v-model="roleType" outlined :options="roleTypeOptions"  />
              </div>
              <div class="col-4 self-center">
                <q-btn icon="add" flat round @click="isHidden = !isHidden" />
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm" v-if="!isHidden">
              <div class="col-3 self-center text-subtitle1">
                Permissions
              </div>
              <div class="col-4">
                <q-card v-model="userPermission">
                  <div>
                    Permissions
                  </div>
                  <div>
                    Permissions1
                  </div>
                </q-card>
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                Password
              </div>
              <div class="col-4 self-center">
                <q-input outlined @click="userID()" v-model="userPassword" />
              </div>
            </div>
            <div class="row justify-start q-gutter-sm q-pa-sm">
              <div class="col-3 self-center text-subtitle1">
                Confirm Password
              </div>
              <div class="col-4 self-center">
                <q-input outlined v-model="userConfirm" />
              </div>
            </div>
            <div class="q-gutter-sm q-pa-md">
              <div class="flex flex-center text-subtitle1">
                <q-btn label="Submit" id="validateForm" v-model="submit" @click="addUserDetails" color="primary" />
              </div>
            </div>
          </q-card-container>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
var userIdStatus = true

export default {
  data () {
    return {
      search: '',
      loading: false,
      roleTypeOptions: [
        'Super Admin', 'Admin', 'Manager', 'Employee', 'Production House', 'Channel Partner', 'Content Creator'
      ],
      showTitle: true,
      showbtn: false,
      showThisbtn: true,
      isHidden: true,
      userAccounts: false,
      addUserReg: true,
      userName: '',
      userMail: '',
      userid: '',
      roleType: null,
      userPhone: '',
      userPermission: '',
      userPassword: '',
      userConfirm: '',
      submit: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          headerClasses: 'bg-orange text-white',
          sortable: true
        },
        { name: 'userid', align: 'center', label: 'User ID', field: 'userid' },
        { name: 'email', align: 'center', label: 'Email', field: 'email' },
        { name: 'phone', align: 'center', label: 'Phone Number', field: 'phone' },
        { name: 'ipaddress', align: 'center', label: 'Ip Address', field: 'ipaddress' },
        { name: 'location', align: 'center', label: 'Location', field: 'location' },
        { name: 'action', align: 'center', label: 'Option', field: 'action' }
      ],
      data: [
        {
          name: 'User1',
          userid: 'bbb111',
          email: 'as@gg',
          phone: 987654,
          ipaddress: '198.338.2323',
          location: 'Madurai'
        },
        {
          name: 'Aser1',
          userid: 'ber55e',
          email: 'as@gg',
          phone: 987654,
          ipaddress: '198.338.2323',
          location: 'Madurai'
        },
        {
          name: 'Oser1',
          userid: '343df11',
          email: 'as@gg',
          phone: 987654,
          ipaddress: '198.338.2323',
          location: 'Madurai'
        },
        {
          name: 'Oser1',
          userid: 'ss66b1',
          email: 'as@gg',
          phone: 987654,
          ipaddress: '198.338.2323',
          location: 'Madurai'
        }
      ]
    }
  },
  watch: {
    //     userid: async function userid (userID) {
    //       this.$axios({
    //         method: 'POST',
    //         url: 'http://174.138.35.211:8081/userid/',
    //         data: userID,
    //         headers: { 'Content-Type': 'userid/json' }
    //       })
    //         .then(() => {
    //           setModalOpen(true)
    //           setUsername(this.userid.current.userID)
    //           setRedirect(true)
    //           setCount(4)
    //         })
    //         .catch(e => {
    //           this.errors.push(e)
    //         })
    //     }
  },
  methods: {
    // isValid (val) {
    //   this.$axios.post('http://174.138.35.211:8081/userid')
    //     .then((res) => {
    //       console.log(res.data)
    //     })
    // },
    addUserDetails () {
      // if (!userIdStatus && document.getElementById('enterUserId').textContent !== '') {
      if (!userIdStatus) {
        this.$axios.post('http://174.138.35.211:8081/details', {
          userName: this.userName,
          userMail: this.userMail,
          enterId: this.userid,
          userPhone: this.userPhone,
          userPermission: this.userPermission,
          roleType: this.roleType,
          userPassword: this.userPassword,
          userConfirm: this.userConfirm
        }).then((res) => {
          console.log(res.data)
        },
        (error) => {
          console.log(error)
        })
      }
    },
    userID () {
      this.$axios.post('http://174.138.35.211:8081/userid', {
        enterId: this.userid
      }).then((response) => {
        console.log(response.data)
        userIdStatus = response.data
        if (userIdStatus) {
          document.getElementById('validateForm').disabled = true
          this.userid = 'error'
        } else {
          document.getElementById('validateForm').disabled = false
        }
      })
    }
  }
}
</script>

<style>
.roleCategory {
    width: 80%;
    background-image: linear-gradient(135deg, rgba(63, 3, 104, 0.945) 0%, #ba0de6ec 100%);
}
</style>
