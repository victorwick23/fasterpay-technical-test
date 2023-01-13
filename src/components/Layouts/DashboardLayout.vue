<template>
  <div class="min-h-screen">
    <div class="">
      <left-menu class="flex-none fixed left-0 top-0" />
      <main class="ml-28 md:ml-40">
        <section class="px-5 py-5">
          <router-view />
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
export default {
  name: "DashboardHome",
  components: { LeftMenu },
  computed: {},
};
</script>
