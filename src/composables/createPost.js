import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const createPost = () => {
  const error = ref(null);
  let response;
  const create = async (post) => {
    try {
      response = await projectFirestore.collection("posts").add(post);
    } catch (error) {
      console.log(error);
      error.value = error.message;
    }
  };
  return { error, create, response };
};

export default createPost;
