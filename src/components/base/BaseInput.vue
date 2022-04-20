<script setup lang="ts">
// TODO: Input masking for tel
// TODO: Input styling for all states
// TODO: Validation error styling
// TODO: Add data-id
// import { useField } from 'vee-validate';

interface Props {
  hasIcon?: boolean;
  hint?: string;
  id: string;
  isActive?: boolean;
  isReadOnly?: boolean;
  isValid?: boolean;
  label: string;
  name: string;
  optionalText?: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  validationError?: string;
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  hint: '',
  optionalText: '',
  type: 'text',
  validationError: '',
});

function togglePasswordVisibility() {
  isPassword.value = !isPassword.value;
}

// const { value, errorMessage, handleBlur, handleChange } = useField(props.name);
const errorMessage = ref('');
function handleBlur() {}

function handleChange() {}

const isPassword = ref(true);
</script>
<template>
  <!-- TODO: styling for input group and input border -->
  <!-- TODO: Use icon depending on InputType -->
  <!-- This will be the image component size 24x24  -->
  <BaseFormField :name="name" v-slot="slotProps">
    <div class="input-container">
      <label :for="id" class="visually-hidden">{{ label }}</label>
      <input
        :id="id"
        ref="input"
        :type="isPassword ? type : 'text'"
        :name="name"
        :class="[
          {
            'is-active': isActive,
            // 'input-valid': !errorMessage && value,
            'not-valid': errorMessage,
          },
          isReadOnly ? 'form-control-plaintext' : 'form-control',
          type === 'search' ? 'theme-search' : '',
        ]"
        :readonly="isReadOnly"
        :placeholder="label"
        :aria-describedby="id"
        :test-id="`txt${testId}`"
        required
        @input="handleChange"
        @blur="handleBlur"
      />
      <!-- TODO: Icon will be replaced with icon component -->
      <button
        v-if="type === 'password'"
        id="button-addon2"
        class="btn visibility-icon"
        type="button"
        @click="togglePasswordVisibility"
      >
        <!-- TODO: Replace with eye icon from icon component -->
        <div v-if="isPassword">show</div>
        <div v-else>hide</div>
        <!-- <img
        v-if="isPassword"
        src="~@/assets/images/icons/icon-close.svg"
        alt="my-logo"
      />
      <img
        v-if="!isPassword"
        src="~@/assets/images/icons/icon-hamburger.svg"
        alt="my-logo"
      /> -->
      </button>
      <p v-if="hint" class="form-text">
        {{ hint }}
      </p>
      <div v-if="errorMessage || slotProps" class="theme-validation">
        <!-- TODO: validationError is hard coded example and will be removed -->
        <p class="help-message invalid-feedback">
          {{ errorMessage }}{{ validationError }}{{ slotProps.error }}
        </p>
      </div>
    </div>
  </BaseFormField>
</template>
