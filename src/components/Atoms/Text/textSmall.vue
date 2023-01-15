<template>
  <p class="text-sm font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextSmall",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
