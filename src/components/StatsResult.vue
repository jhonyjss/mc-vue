<template>
  <div class="relative">
    <div
      class="bg-white rounded-full w-72 h-72 text-4xl flex items-center justify-center"
    >
      <span>{{ result[mathTitle] || 0 }}</span>
    </div>
    <div class="math-title uppercase">
      {{ mathTitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: [Number, Object],
      default: 0,
    },
    mathTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="postcss" scoped>
.math-title {
  @apply absolute text-white text-center w-full h-10 lg:text-lg;
  bottom: -3rem;
}
</style>
