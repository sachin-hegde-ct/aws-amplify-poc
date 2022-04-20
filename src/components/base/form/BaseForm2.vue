<script setup lang="ts">
import { ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';
import { AnyObject } from 'yup/lib/types';

interface Props {
  submit: (values: AnyObject) => void;
  // testId: string;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form novalidate @submit.prevent="handleSubmit(submit)">
      <slot></slot>
      <BaseButton variation="primary" size="lg" label="Submit" type="submit" />
    </form>
  </ValidationObserver>
</template>
