<template>
  <p class="text-2xl font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextExtraLarge",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
