<script setup lang="ts">
import { AnyObject } from 'yup/lib/types';
// import { Form } from 'vee-validate';
interface Props {
  schema: AnyObject;
  submit: (values: AnyObject) => void;
  testId: string;
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <!-- TODO: Add props for button customization -->
  <!-- <Form :validation-schema="schema" :test-id="`frm${testId}`" @submit="submit">
    <slot></slot>
    <BaseButton variation="primary" size="lg" label="Submit" type="submit" />
  </Form> -->
  <form :test-id="`frm${testId}`" @submit.prevent="submit">
    <slot></slot>
    <BaseButton variation="primary" size="lg" label="Submit" type="submit" />
  </form>
</template>
