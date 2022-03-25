<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const showPosts = ref(true);
    const posts = ref([
      { title: "welcome to the blog", body: "Lorem Ipsum", id: 1 },
      {
        title: "A new post in this wonderful blog",
        body: "Lorem Ipsdum",
        id: 2,
      },
    ]);
    return { posts, showPosts };
  },
};
</script>
