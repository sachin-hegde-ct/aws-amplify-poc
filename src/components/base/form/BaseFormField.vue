<script setup lang="ts">
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

interface Props {
  name: string;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <ValidationProvider :name="name" rules="required" v-slot="{ errors }">
    <slot :error="errors[0]"></slot>
  </ValidationProvider>
</template>
