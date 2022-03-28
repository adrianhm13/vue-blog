import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id) => {
    try {
      const response = await projectFirestore.collection("posts").doc(id).get();

      if(!response.exists){
        throw new Error('Post does not exist')
      }
      post.value = { ...response.data(), id: response.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { load, error, post };
};

export default getPost;
