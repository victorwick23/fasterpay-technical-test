<template>
  <div
    class="flex space-x-3 hover:bg-third-blue py-3 hover:rounded-md px-2 justify-center lg:justify-start items-center"
    :class="highlighted ? ' bg-third-blue rounded-md ' : ''"
  >
    <img class="h-min" :src="icon" alt="" />
    <p class="text-secondary-blue hidden lg:block">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    highlighted: {
      type: Boolean,
    },
  },
};
</script>
