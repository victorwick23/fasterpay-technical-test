<template>
  <p class="text-xs font-base">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextExtraSmall",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
