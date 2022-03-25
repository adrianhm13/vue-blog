<template>
  <div class="home"></div>
  <h2>Refs</h2>
  <p>My name is {{ userOne.name }}, my age is {{ userOne.age }}</p>
  <button @click="updateUserOne">Click me</button>
  <h2>Reactive</h2>
  <p>{{ userTwo.name }} - {{ userTwo.age }}</p>
  <button @click="updateUserTwo">Update User 2</button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";

export default {
  name: "HomeView",
  setup() {
    const userOne = ref({ name: "Adrian", age: 25 });
    const userTwo = reactive({ name: "Joseee", age: 55 });

    // Ref
    const updateUserOne = () => {
      userOne.value.age = 30;
    };

    //Reactive
    const updateUserTwo = () => {
      userTwo.name = 'Adrian'
      userTwo.age = 30;
    };

    return { userOne, updateUserOne, updateUserTwo, userTwo };
  },
};
</script>
