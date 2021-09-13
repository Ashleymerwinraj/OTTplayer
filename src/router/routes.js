
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/FlixxTab', component: () => import('pages/FlixxTab.vue') },
      { path: '/UserPage', component: () => import('pages/UserPage.vue') },
      { path: '/PlayerWindow', component: () => import('pages/PlayerWindow.vue') }
    ]
  },
  { path: '/Subscription', component: () => import('pages/Subscription.vue') },
  { path: '/LoginForm', component: () => import('pages/LoginForm.vue') },
  { path: '/admin', component: () => import('pages/AdminLogin.vue') },
  { path: '/flixxadmin_video', component: () => import('pages/FlixxAdminVideo.vue') },
  { path: '/flixxadmin_upload', component: () => import('pages/FlixxAdminUpload.vue') },
  { path: '/useradmin', component: () => import('pages/UserAdmin.vue') },
  // { path: '/exe', component: () => import('pages/exe.vue') },
  {
    path: '/adminpanel',
    component: () => import('layouts/AdminPanel.vue'),
    children: [
      // { path: '/user_role_category', component: () => import('pages/admin/UserRoleCategory.vue') },
      // { path: '/flixxadmin_upload', component: () => import('pages/FlixxAdminUpload.vue') },
      // { path: '/flixxadmin_video', component: () => import('pages/FlixxAdminVideo.vue') }
    ]
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/AdminPanel.vue'),
  //   children: [
  //     { path: '/', component: () => import('pages/AdminLogin.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
