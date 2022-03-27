import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetail from "../views/PostDetail.vue";
import CreatePost from "../views/CreatePost.vue";
import TagView from "../views/TagView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: PostDetail,
  },
  {
    path: "/create",
    name: "create-post",
    component: CreatePost,
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: TagView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
