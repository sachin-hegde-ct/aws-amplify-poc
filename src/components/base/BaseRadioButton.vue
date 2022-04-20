<script setup lang="ts">
// import { useField } from "vee-validate";

interface Props {
  checkedValue?: string;
  id: string;
  isDisabled?: boolean;
  isValidateDisabled?: boolean;
  label: string;
  name: string;
  value: string;
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  checkedValue: "",
  isDisabled: false,
  isValidateDisabled: true,
});

const emit = defineEmits(["click"]);

const isChecked = reactive({ value: false });

watch(
  () => props.checkedValue,
  (selection) => {
    if (selection === props.value) {
      isChecked.value = true;
    } else {
      isChecked.value = false;
    }
  }
);

// const { errorMessage, handleChange } = useField(props.name);
const errorMessage = ref("");

function handleChange(value) {}

function clickHandler() {
  emit("click", props.value);
  handleChange(props.value);
}
</script>
<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <div class="form-check" @click="clickHandler">
    <input
      :id="id"
      class="form-check-input"
      type="radio"
      :name="name"
      :value="value"
      :disabled="isDisabled"
      :checked="isChecked.value"
      :test-id="`rdo${testId}`"
    />
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label class="form-check-label" :for="id">
      {{ label }}
    </label>
  </div>
  <!-- <div v-if="errorMessage && isValidateDisabled" class="theme-validation">
    <p class="help-message invalid-feedback">
      {{ errorMessage }}
    </p>
  </div> -->
</template>
