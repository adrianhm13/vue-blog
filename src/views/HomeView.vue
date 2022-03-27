<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <SpinnerLoader v-else></SpinnerLoader>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import SpinnerLoader from "../components/SpinnerLoader.vue";

import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList, SpinnerLoader, TagCloud },
  setup() {
    const { load, error, posts } = getPosts();

    //Fetch posts
    load();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
