<script setup lang="ts">
// TODO POC : useField equivalent in vee-validate v3
// import { useField } from "vee-validate";

interface Props {
  id: string;
  isDisabled?: boolean;
  label: string;
  name: string;
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
});

// const { errorMessage, handleChange } = useField(props.name);
const errorMessage = ref("");
function handleChange(value) {
  console.log(value);
}

const reactiveValue = reactive({ value: false });

function toggleValue() {
  reactiveValue.value = !reactiveValue.value;
  handleChange(reactiveValue.value);
}
</script>

<template>
  <div>
    <div class="form-check">
      <input
        :id="id"
        class="form-check-input"
        type="checkbox"
        :value="reactiveValue.value"
        :name="name"
        :disabled="isDisabled"
        :aria-describedby="id"
        :test-id="`chk${testId}`"
        @click="toggleValue"
      />
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="form-check-label" :for="id">{{ label }}</label>
    </div>
    <div v-if="errorMessage" class="theme-validation">
      <p class="help-message invalid-feedback">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
