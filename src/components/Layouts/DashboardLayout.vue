<template>
  <div class="">
    <div class="">
      <top-menu class="fixed z-[999] sm:hidden" />
      <left-menu class="flex-none fixed left-0 top-0 hidden sm:block text" />
      <main class="bg-[#E5E5E5] h-full sm:ml-[15%]">
        <section class="py-3">
          <router-view />
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
import TopMenu from "./TopMenu.vue";
export default {
  name: "DashboardHome",
  components: { LeftMenu, TopMenu },
  computed: {},
};
</script>
