<template>
  <p class="text-lg font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextLarge",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
