<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="er-button"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :autofocus="autofocus"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
defineOptions({
  name: "ErButton"
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
})
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

</script>

<style scoped>
@import './style.css'
</style>