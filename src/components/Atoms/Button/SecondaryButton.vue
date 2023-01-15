<template>
  <button
    class="w-full bg-transparent border-2 border-primary-cyan text-center text-lg py-3 rounded-sm text-[#111A27]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SecondaryButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
