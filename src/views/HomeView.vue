<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <SpinnerLoader v-else></SpinnerLoader>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import SpinnerLoader from "../components/SpinnerLoader.vue";

export default {
  name: "HomeView",
  components: { PostList, SpinnerLoader },
  setup() {
    const { load, error, posts } = getPosts();

    //Fetch posts
    load();

    return { posts, error };
  },
};
</script>
<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
