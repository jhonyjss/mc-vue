<template>
  <div class="relative w-fit">
    <div
      class="bg-white rounded-full w-72 h-72 text-4xl flex items-center justify-center"
    >
      <span>{{ result[mathTitle] || 0 }}</span>
    </div>
    <span class="math-title uppercase">
      {{ mathTitle }}
    </span>
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
  @apply text-white text-center w-full  lg:text-lg my-4 block;
}

@screen lg {
  .math-title {
    @apply absolute text-white text-center w-full h-10 lg:text-lg my-0;
    left: 0rem;
    bottom: -3rem !important;
  }
}
</style>
