import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
// import checkLogin from "./checkLogin";
const routes = [
//   {
//     path: "/auth",
//     component: () => import("../components/Auth/index.vue"),
//   },

//   //Login
//   {
//     path: "/login",
//     component: () => import("../components/Login/index.vue"),
//     meta: { layout: "new" },
//   },
//   {
//     path: "/register",
//     component: () => import("../components/Register/index.vue"),
//     meta: { layout: "new" },
//   },

//   {
//     path: "/lost-password",
//     component: () => import("../components/QuenMatKhau/index.vue"),
//     meta: { layout: "new" },
//   },
//  //admin
  {
    path: "/admin/mon-hoc",
    component: () => import("../components/Admin/MonHoc/index.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
