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
    path: "/admin/client",
    component: () => import("../components/Client/index.vue"),
  },
  {
    path: "/admin",
    component: () => import("../components/Admin/index.vue"),
  },
  {
    path: "/admin/cuoc-thi",
    component: () => import("../components/CuocThi/index.vue"),
  },

  {
    path: "/admin/mon-hoc",
    component: () => import("../components/MonHoc/index.vue"),
  },
  {
    path: "/admin/lop-dang-ki",
    component: () => import("../components/LopDangKi/index.vue"),
  },
  {    
  path: "/client",
    component: () => import("../components/Client_SV/Client/index.vue"),
    meta: { layout: "client" },
  },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
