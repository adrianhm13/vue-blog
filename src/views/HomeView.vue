<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <hr />
    <div v-for="name in names" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const names = ref(["adrian", "ana", "mario", "jose", "fabio", "tristan"]);
    const search = ref("");

    const stopWatch = watch(search, () => {
      console.log("Search has changed", search.value);
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect fired", search.value);
    });
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };
    return { names, search, matchingNames, handleClick };
  },
};
</script>
