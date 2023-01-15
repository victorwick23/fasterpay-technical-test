<template>
  <p class="font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextMenu",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
