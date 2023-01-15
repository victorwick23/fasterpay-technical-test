<template>
  <p class="text-2xl font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Text2Xl",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
