import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLogin from "./checkLogin";
const routes = [
  {
    path: "/auth",
    component: () => import("../components/Auth/index.vue"),
  },

  //Login
  {
    path: "/login",
    component: () => import("../components/LoginClient/index.vue"),
    meta: { layout: "account" },
  },
  {
    path: "/register",
    component: () => import("../components/RegisterClient/index.vue"),
    meta: { layout: "account" },
  },

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
    path: "/admin/tao-cau-hoi/:id",
    component: () => import("../components/CauTraLoi/index.vue"),
  },
  {
    path: "/admin/bai-thi",
    component: () => import("../components/BaiThi/index.vue"),
  },

  {
    path: "/admin/mon-hoc",
    component: () => import("../components/MonHoc/index.vue"),
  },
  {
    path: "/admin/lop-hoc",
    component: () => import("../components/LopHoc/index.vue"),
  },
  {
    path: "/admin/chi-tiet-lop",
    component: () => import("../components/ChiTietLop/index.vue"),
  },
  {
  path: "/client",
    component: () => import("../components/Client_SV/Client/index.vue"),
    meta: { layout: "client" },
  },
  {
  path: "/client/lop-dang-ki/:id",
    component: () => import("../components/Client_SV/Dang_ki_lop_hoc/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/client/lam-bai",
    component: () => import("../components/Client_SV/LamBai/index.vue"),
    meta: { layout: "client" },
    // beforeEnter: checkLogin
  },

  {
    path: "/client/lop-da-dang-ki",
    component: () => import("../components/Client_SV/Dang_ki_lop_hoc/index_dang_ki.vue"),
    meta: { layout: "client" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
