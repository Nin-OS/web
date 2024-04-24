import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("../views/DownloadView.vue"),
  },
  {
    path: "/packages",
    name: "Packages",
    component: () => import("../views/PackagesView.vue"),
  },
  {
    path: "/pkginfo/:repo/:pkg/:arch?",
    name: "Package Info",
    component: () => import("../views/PackageInfoView.vue"),
  },
  {
    path: "/pkglist",
    name: "Package List",
    component: () => import("../views/PackageListView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog/:article",
    name: "Blog Post",
    component: () => import("../views/BlogArticle.vue"),
  },
  {
    path: "/error/:code",
    name: "Error Page",
    component: () => import("../views/ErrorPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: '/error/404'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
