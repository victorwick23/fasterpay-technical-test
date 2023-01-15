<template>
  <div class="w-full relative">
    <p
      :class="
        focused || modelValue !== ''
          ? 'text-xs absolute bg-white left-2 -top-2 px-1'
          : 'hidden'
      "
    >
      {{ label }}
    </p>
    <input
      @focus="focused = true"
      @blur="focused = false"
      class="w-full px-4 py-5 text-lg border placeholder:text-black border-black rounded-md outline-none"
      :placeholder="focused ? '' : label"
      type="text"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "InputBasicText",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
