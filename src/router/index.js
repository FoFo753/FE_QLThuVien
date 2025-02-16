import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginAdmin from "./checkLogin";
import checkLoginClient from "./checkLoginClient";
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
  {
    path: "/admin/client",
    component: () => import("../components/Client/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin",
    component: () => import("../components/Admin/index.vue"),
    // beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin/cuoc-thi",
    component: () => import("../components/CuocThi/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin/tao-cau-hoi/:id",
    component: () => import("../components/CauHoi/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin/bai-thi",
    component: () => import("../components/BaiThi/index.vue"),
    beforeEnter: checkLoginAdmin
  },

  {
    path: "/admin/mon-hoc",
    component: () => import("../components/MonHoc/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin/lop-hoc",
    component: () => import("../components/LopHoc/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
    path: "/admin/chi-tiet-lop",
    component: () => import("../components/ChiTietLop/index.vue"),
    beforeEnter: checkLoginAdmin
  },
  {
  path: "/",
    component: () => import("../components/Client_SV/Client/index.vue"),
    meta: { layout: "client" },
  },
  {
  path: "/client/lop-dang-ki/:id",
    component: () => import("../components/Client_SV/Dang_ki_lop_hoc/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/client/lam-bai/:id",
    component: () => import("../components/Client_SV/LamBai/index.vue"),
    meta: { layout: "client" },
    beforeEnter: checkLoginClient
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
