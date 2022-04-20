<script setup lang="ts">
// import { useField } from 'vee-validate';

interface Props {
  hint?: string;
  id: string;
  isActive?: boolean;
  isReadOnly?: boolean;
  label: string;
  name: string;
  max?: string;
  min?: string;
  optionalText?: string;
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  hint: "",
  max: "",
  min: "",
  optionalText: "",
});

// const { errorMessage, handleBlur, handleChange } = useField(props.name);
const errorMessage = ref("");
function handleBlur() {}

function handleChange() {}
</script>
<template>
  <!-- TODO: styling for input group and input border -->
  <!-- TODO: May need to make hidden label depending on the designs? -->
  <div class="theme-input-wrapper">
    <div v-if="optionalText" class="theme-input-label-wrapper">
      <label :for="id" class="form-label">{{ label }}</label>
      <p v-if="optionalText" :id="id" class="form-text">
        {{ optionalText }}
      </p>
    </div>
    <label v-else :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      type="date"
      :name="name"
      :class="[
        { 'not-valid': errorMessage, 'is-active': isActive },
        isReadOnly ? 'form-control-plaintext' : 'form-control',
      ]"
      :readonly="isReadOnly"
      :aria-describedby="id"
      :min="min"
      :max="max"
      required
      :test-id="`dtp${testId}`"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p v-if="hint" :id="id" class="form-text">
      {{ hint }}
    </p>
    <div v-if="errorMessage" class="theme-validation">
      <p class="help-message invalid-feedback">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
