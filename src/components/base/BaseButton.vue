<script setup lang="ts">
// TODO: Include icons support. icon, iconSize props?

interface Props {
  disabled?: boolean;
  label: string;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  variation?: 'primary' | 'secondary' | 'outline-primary' | 'link';
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: '',
  variation: 'primary',
  type: 'button',
  testId: 'button-default-test',
});

const emit = defineEmits(['click']);

// const hasDisabledClass = computed(
//   () => props.disabled && props.variation !== 'outline-tertiary'
// );

// const hasOutlineDisabledClass = computed(
//   () => props.disabled && props.variation === 'outline-tertiary'
// );

const cxBtn = computed(() => [
  'theme-btn',
  'btn',
  `btn-${props.size}`,
  `btn-${props.variation}`,
  {
    // ['theme-btn']: !props.disabled,
    // [`btn-${props.variation}`]: !props.disabled,
    // [`theme-btn-disabled`]: props.disabled,
    [`disabled`]: props.disabled,
  },
]);

function handleClick() {
  // if (props.disabled) return;

  emit('click');
}
</script>

<template>
  <button
    :type="type"
    :aria-disabled="disabled"
    :class="cxBtn"
    :test-id="`btn${testId}`"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>
