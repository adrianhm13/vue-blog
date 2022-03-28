<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <SpinnerLoader v-else />
  </div>
</template>

<script>
import SpinnerLoader from "../components/SpinnerLoader.vue";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

import getPosts from "../composables/getPosts";

export default {
  components: { SpinnerLoader, PostList, TagCloud },
  setup() {
    const { error, load, posts } = getPosts();

    //Fetching posts
    load();

    const route = useRoute();

    const filteredPosts = computed(() => {
      console.log("FIRED");
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { error, filteredPosts, posts };
  },
};
</script>

<style scoped></style>
