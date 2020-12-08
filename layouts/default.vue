<template>
  <div class="w-screen h-screen bg-gray-100 flex">
    <Sidebar />
    <div class="flex-1">
      <Header />
      <div class="container mx-auto pt-10 space-y-5">
        <h2 class="font-semibold text-xl">Home</h2>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
