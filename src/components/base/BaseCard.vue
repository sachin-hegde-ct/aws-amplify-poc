<script setup lang="ts">
interface Props {
  baseCard?: boolean;
  testId: string;
}

withDefaults(defineProps<Props>(), {
  baseCard: false,
  testId: 'card-default-test',
});
</script>

<template>
  <div class="card" :test-id="`pnl${testId}`">
    <div v-if="!baseCard" class="card-header" :test-id="`${testId}-header`">
      <slot name="header">Default header</slot>
    </div>
    <div class="card-body">
      <div v-if="!baseCard" class="card-title">
        <slot name="title" :test-id="`${testId}-title`">
          <h1>Default body title</h1>
        </slot>
      </div>

      <div v-if="!baseCard" class="card-text" :test-id="`${testId}-text`">
        <slot name="text">Default body text</slot>
      </div>

      <slot name="default">
        <!-- NOTE: no default content in the default body slot as it may need to be empty in some instances -->
      </slot>
    </div>
    <div v-if="!baseCard" class="card-footer" :test-id="`${testId}-footer`">
      <slot name="footer">Default footer</slot>
    </div>
  </div>
</template>
