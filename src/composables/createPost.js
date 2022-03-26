import { ref } from "vue";

const createPost = () => {
  const error = ref(null);
  const response = ref(null);
  const create = async (post) => {
    try {
        response.value = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
    } catch (error) {
      console.log(error);
      error.value = error.message;
    }
  };
  return { error, create, response };
};

export default createPost;
