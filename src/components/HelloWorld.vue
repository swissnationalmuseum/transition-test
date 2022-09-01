<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const visible = ref(false);

function onClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <button type="button" @click="onClick()">Toggle Visibility</button>
    <Transition name="slide-fade">
      <p v-if="visible" class="content">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.card {
  color: #888;
}

.content {
  color: #155724;
  background-color: #d4edda;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
