<script setup lang="ts">
interface Props {
  isDisabled?: boolean;
  testId: string;
}
withDefaults(defineProps<Props>(), {});
</script>
<!-- The fieldset is used to group form elements and is placed inside of the BaseForm -->
<template>
  <fieldset v-if="isDisabled" disabled :test-id="`pnl${testId}`">
    <slot></slot>
  </fieldset>
  <fieldset v-else :test-id="`pnl${testId}`">
    <slot></slot>
  </fieldset>
</template>
