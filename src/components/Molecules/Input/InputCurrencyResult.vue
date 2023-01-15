<template>
  <div class="w-full relative">
    <p
      :class="
        focused || (modelValue !== null && modelValue !== '')
          ? 'text-xs absolute bg-white left-2 -top-2 px-1'
          : 'hidden'
      "
    >
      {{ label }}
    </p>
    <input
      :disabled="disableinput == true"
      @focus="focused = true"
      @blur="focused = false"
      class="w-full px-4 py-5 text-lg border placeholder:text-black border-black rounded-md outline-none"
      :placeholder="focused ? '' : label"
      type="text"
      :value="modelValue"
      @input="updateValue"
      ref="inputRef"
    />
  </div>
</template>

<script>
import { watch } from "vue";
import { useCurrencyInput } from "vue-currency-input";
export default {
  name: "InputCurrencyResult",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: Number,
    options: Object,
    disableinput: Boolean,
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
  setup(props) {
    const { inputRef, setOptions, setValue } = useCurrencyInput(props.options);
    watch(
      () => props.modelValue, // Vue 2: props.value
      (value) => {
        setValue(value);
      }
    );

    watch(
      () => props.options,
      (options) => {
        setOptions(options);
      }
    );

    return { inputRef };
  },
};
</script>
