import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id) => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);

      if (!data.ok) {
        throw Error("No post have been found");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { load, error, post };
};

export default getPost;
