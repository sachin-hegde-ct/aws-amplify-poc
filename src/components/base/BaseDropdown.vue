<script setup lang="ts">
type dropdownItem = {
  name: string;
  value: string;
};

interface Props {
  class?: string;
  id: string;
  items: dropdownItem[];
  label?: string;
  placeholder: string;
  testId: string;
}

const activeIndex = ref(null);

const props = withDefaults(defineProps<Props>(), {
  label: '',
  class: '',
});

const emit = defineEmits(['click']);

const placeholder = computed(() => {
  const selectedItem = props.items[activeIndex.value];
  return selectedItem?.name || props.placeholder;
});

const cxDropdown = computed(() => ['btn', 'dropdown-toggle', props.class]);

const cxItem = (index) => [
  'dropdown-item',
  { active: index == activeIndex.value },
];

const clickHandler = (e) => {
  activeIndex.value = e.target.getAttribute('data-index');
  emit('click', props.items[activeIndex.value]);
};
</script>
<template>
  <!-- TODO Get the clarification from QA if the test-id goes on the btn or dropdown -->
  <div class="dropdown">
    <label v-if="label" :for="id" class="form-label d-block">{{ label }}</label>
    <button
      :id="id"
      :class="cxDropdown"
      :test-id="`ddl${testId}`"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ placeholder }}
    </button>
    <ul class="dropdown-menu theme-dropdown-menu" :aria-labelledby="id">
      <li v-for="(item, index) in items" :key="item.name">
        <a
          :class="cxItem(index)"
          :data-index="index"
          href="#"
          @click="clickHandler"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
