import { ref } from "vue";

export default function useUpload(urlorFile) {
  const param = ref(urlorFile);
  const typeOfData = typeof param.value;

  if (typeOfData === "string" && !param.value.endsWith(".json")) {
    alert("Insert a URL that ends with .json");
    return;
  }

  const fetchUrl = () => {
    return fetch(param.value, {
      // Your POST endpoint
      method: "POST",
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
        "Content-Type": "application/json",
      },
      body: param.value, // This is your file object
    })
      .then(
        (response) => response.json() // if the response is a JSON object
      )
      .then(
        (success) => success // Handle the success response object
      )
      .catch(
        (error) => console.log(error) // Handle the error response object
      );
  };

  const readFileAsJSON = () => {
    return fetch(param.value.name, {
      // Your POST endpoint
      method: "POST",
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
        "Content-Type": "application/json",
      },
      body: param.value, // This is your file object
    })
      .then(
        (response) => response.json() // if the response is a JSON object
      )
      .then(
        (success) => success // Handle the success response object
      )
      .catch(
        (error) => console.log(error) // Handle the error response object
      );
  };

  /* const lbs = computed(() =>
    weightType.value === "LBS" ? weight.value : weight.value * 2.20462262185
  );
  const kg = computed(() =>
    weightType.value === "KG" ? weight.value : lbs.value * 0.45359237
  );
  const mt = computed(() => kg.value * 0.001);
  const st = computed(() => lbs.value / 2000); */

  return {
    readFileAsJSON,
    fetchUrl,
  };
}
