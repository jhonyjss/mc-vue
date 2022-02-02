import { computed } from "vue";
import { mean, median, std, mode } from "mathjs";
export default function useMath(_data) {
  const results = computed(() => ({
    mean: mean(_data).toString(),
    median: median(_data).toString(),
    "std deviation": std(_data).toFixed(5).toString(),
    mode: mode(_data).toString(),
  }));

  return {
    results,
  };
}
