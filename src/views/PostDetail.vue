<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">delete post</button>
  </div>
  <SpinnerLoader v-else />
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import getPost from "../composables/getPost";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import { projectFirestore } from "@/firebase/config";

export default {
  components: { SpinnerLoader },
  setup() {
    const { error, post, load } = getPost();
    const route = useRoute();
    const router = useRouter();
    load(route.params.id);

    // Delete post
    const handleDelete = async () => {
      await projectFirestore.collection("posts").doc(route.params.id).delete();

      router.push("/");
    };
    return { error, post, handleDelete };
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
.delete {
  margin: 10px auto;
}
</style>
