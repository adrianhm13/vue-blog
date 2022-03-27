<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <SpinnerLoader v-else />
</template>

<script>
import { useRoute } from "vue-router";
import getPost from "../composables/getPost";
import SpinnerLoader from "../components/SpinnerLoader.vue";

export default {
  components: { SpinnerLoader },
  setup() {
    const { error, post, load } = getPost();
    const route = useRoute();

    load(route.params.id);

    return { error, post };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
