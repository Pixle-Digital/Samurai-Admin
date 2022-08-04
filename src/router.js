import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/haha",
  //   component: () =>
  //     import(/* webpackChunkName: "home" */ "./views/complai_dashboard")
  // },
  // {
  //   path: "/dashboard",
  //   component: () => import(/* webpackChunkName: "home" */ "./views/dashboard")
  // },
  // {
  //   path: "/api",
  //   component: () => import(/* webpackChunkName: "home" */ "./views/api")
  // },
  
  {
    path: adminRoot,
    component: () =>
      import(/* webpackChunkName: "app" */ "./views/complai_dashboard"),
    redirect: `${adminRoot}/dashboard`,
    meta: {loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/complai_dashboard/file.vue"
          ),
        meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "orders",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/complai_dashboard/statistics.vue"
          )
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "products",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/complai_dashboard/source.vue"
          )
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "promo",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/complai_dashboard/initialisation.vue"
          )
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: "delivery",
        component: () =>
          import(
            /* webpackChunkName: "pages" */ "./views/complai_dashboard/floweditor.vue"
          )
      },
      {
        path: "searchquickadd",
        component: () =>
          import(
            /* webpackChunkName: "pages" */ "./views/complai_dashboard/searchQuickAdd.vue"
          )
      },
      {
        path: "apieditor",
        component: () =>
          import(
            /* webpackChunkName: "applications" */ "./views/complai_dashboard/apieditor.vue"
          )
      },
      {
        path: "testing",
        component: () =>
          import(
            /* webpackChunkName: "ui" */ "./views/complai_dashboard/testing.vue"
          )
      },

      {
        path: "userinput",
        component: () =>
          import(
            /* webpackChunkName: "blank-page" */ "./views/complai_dashboard/userinput.vue"
          )
      },
      {
        path: "help",
        component: () =>
          import(
            /* webpackChunkName: "blank-page" */ "./views/complai_dashboard/help.vue"
          )
      }
    ]
  },

  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/unauthorized",
    component: () =>
      import(/* webpackChunkName: "error" */ "./views/Unauthorized")
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
