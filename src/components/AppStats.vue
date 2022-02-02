<template>
  <div class="h-96 bg-blue-900">
    <Container class="mx-auto flex h-full">
      <div v-for="math in maths" :key="math" class="flex items-center w-1/4">
        <stats-result :math-title="math"></stats-result>
      </div>
    </Container>
  </div>
</template>

<script>
import StatsResult from "./StatsResult.vue";
export default {
  components: { StatsResult },
  data() {
    return {
      maths: ["MEAN", "MEDIAN", "STD DEVIATION", "MODE"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
