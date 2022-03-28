<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="content" required></textarea>
      <label>Tags (press enter to add tag):</label>
      <input @keydown.enter.prevent="handleKeydown" v-model="tag" type="text" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
    <div v-if="error">AA{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import createPost from "../composables/createPost";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const tag = ref("");
    const tags = ref([]);

    const { error, create } = createPost();
    const router = useRouter();

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const newPost = {
        title: title.value,
        body: content.value,
        tags: tags.value,
        createdAt: timestamp(),
      };
      await create(newPost);
      router.push("/");
    };

    return { title, content, tag, tags, handleKeydown, handleSubmit, error };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
