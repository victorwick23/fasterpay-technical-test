<template>
  <div class="w-full relative flex items-center">
    <input
      disabled
      class="w-full px-4 py-5 text-lg border placeholder:text-black border-black rounded-md outline-none placeholder:animate-bounce"
      placeholder="Calculating"
      type="text"
    />
    <icon-loading class="w-8 h-min absolute right-2" />
  </div>
</template>

<script>
import IconLoading from "@/components/Atoms/Icons/IconLoading.vue";
export default {
  components: { IconLoading },
  name: "InputCurrency",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
