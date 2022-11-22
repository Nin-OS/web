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
    path: "/packageinfo",
    name: "Package List",
    component: () => import("../views/PackageListView.vue"),
  },
  {
    path: "/packageinfo/:repo/:pkg",
    name: "Package Info",
    component: () => import("../views/PackageDetailView.vue"),
  },
  {
    path: "/packagesearch/:pkg",
    name: "Searching Package",
    component: () => import("../views/PackageSearchView.vue"),
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
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
