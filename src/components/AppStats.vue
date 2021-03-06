<template>
  <div class="h-full lg:h-96 bg-blue-900">
    <Container class="mx-auto flex flex-col lg:flex-row h-full">
      <div
        v-for="math in maths"
        :key="math"
        class="my-4 lg:my-0 block lg:flex items-center w-1/4"
      >
        <StatsResult :math-title="math" :result="result"></StatsResult>
      </div>
    </Container>
  </div>

  <Container class="mx-auto flex h-full">
    <div class="grid-lg">
      <div>
        <label for="upload" class="btn mt-10 block mx-auto rounded-lg">
          <upload-icon />
          UPLOAD
          <input
            id="upload"
            name="upload"
            type="file"
            class="hidden"
            accept="application/JSON"
            @change="submitFile"
          />
        </label>
      </div>
      <div class="mt-10 flex">
        <input
          type="text"
          v-model="url"
          class="input z-20 lg:ml-14"
          placeholder="URL"
        />
        <button class="btn z-0 rounded-r-lg" @click="submitUrl">SUBMIT</button>
        {{ files }}
      </div>
    </div>
  </Container>
</template>

<script>
import StatsResult from "./StatsResult.vue";
import UploadIcon from "vue-material-design-icons/Upload.vue";
import useUpload from "../composables/upload";
import useMath from "../composables/maths";
import Container from "./layout/Container.vue";
import { ref } from "vue";

export default {
  components: { StatsResult, UploadIcon, Container },
  data() {
    return {
      maths: ["mean", "median", "std deviation", "mode"],
    };
  },
  setup() {
    let files = ref("");
    let result = ref(0);
    const url = ref("");

    const submitFile = async (evt) => {
      const { data } = await useUpload(evt.target.files[0]).readFileAsJSON();
      result.value = useMath(data).results.value;
    };

    const submitUrl = async () => {
      const { data } = await useUpload(url).fetchUrl();
      result.value = useMath(data).results.value;
    };

    return {
      url,
      files,
      result,
      submitFile,
      submitUrl,
    };
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply flex items-center h-16  cursor-pointer bg-blue-900 px-10 py-4 text-white  transition hover:bg-indigo-600;
  max-width: 175px;
}
.input {
  @apply appearance-none w-full h-16 bg-gray-200 text-gray-700 border border-indigo-500 rounded-r-none py-1 px-4 mb-0 leading-tight focus:outline-none focus:bg-white;
}

.grid-lg {
  @apply flex flex-col;
}
@screen lg {
  .grid-lg {
    @apply grid grid-cols-2 divide-x divide-solid w-full h-52;
  }
}
</style>
