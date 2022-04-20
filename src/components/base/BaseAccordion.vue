<script setup lang="ts">
interface AccordionItem {
  content: string;
  heading: string;
  id: string;
  isOpen: boolean;
}

interface Props {
  id: string;
  items: AccordionItem[];
  testId?: string; // TODO Confirm TestId prefix for Accordion (Not available on Notion)
}

const cxButton = computed(() => (isOpen) => [
  'accordion-button',
  !isOpen && 'collapsed',
]);

const cxBody = computed(() => (isOpen) => [
  'accordion-collapse collapse',
  isOpen && 'show',
]);

const props = withDefaults(defineProps<Props>(), {
  testId: 'abc',
});
</script>

<template>
  <!-- TODO Get the clarification about whether we need test-id on whole accordion -->
  <div :id="props.id" class="accordion">
    <div v-for="item in props.items" :key="item.id" class="accordion-item">
      <p :id="`heading-${item.id}`" class="accordion-header">
        <button
          :class="cxButton(item.isOpen)"
          data-bs-toggle="collapse"
          :data-bs-target="`#body-${item.id}`"
          :aria-expanded="item.isOpen ? 'true' : 'false'"
          :aria-controls="`body-${item.id}`"
          :test-id="`btn${props.testId}`"
        >
          {{ item.heading }}
        </button>
      </p>
      <div
        :id="`body-${item.id}`"
        :class="cxBody(item.isOpen)"
        :aria-labelledby="`heading-${item.id}`"
        :data-bs-parent="props.id"
      >
        <div class="accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>
