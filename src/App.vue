<template>
  <Container class="mobile-center">
    <AppNavbar />
  </Container>
  <AppStats></AppStats>
</template>

<script>
export default {
  name: "App",
};
</script>

<style type="postcss">
.mobile-center {
  @apply flex justify-center my-8;
}
@screen lg {
  .mobile-center {
    @apply block;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
    width: 100%;
  }
}
</style>
