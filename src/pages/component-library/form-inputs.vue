<script setup lang="ts">
// TODO: Change to useHead composable
useNuxt2Meta({
  title: "CARAMEL | Component Library - Form Inputs",
});

const radioCheckedValue = reactive({
  value: "",
});

function clickEventRadio(value: string) {
  radioCheckedValue.value = value;
  console.log(radioCheckedValue.value);
}
</script>

<template>
  <div class="container">
    <h2>Form Inputs</h2>
    <div class="row">
      <div class="col">
        <h3>Input component</h3>
        <p>Below is an example of the basic input component.</p>
        <p>BaseFieldSet is used to wrap related groups of form elements.</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Basic input field</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-1"
          name="Example input"
          label="Example label"
          is-valid
          validation-error="This is a validation error"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Input field with every option</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-2"
          name="Example input"
          label="Example label"
          hint="This is a hint"
          optional-text="Optional text"
          is-valid
          validation-error="This is a validation error"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Disabled input field</h4>
        <BaseFieldSet is-disabled test-id="DemoTest-1">
          <BaseInput
            id="ex4m9l3-1d"
            test-id="DemoTest-3"
            name="Example input"
            label="Example label"
            is-valid
            validation-error="This is a validation error"
          />
        </BaseFieldSet>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Invalid state input field</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-4"
          name="Example input"
          label="Example label"
          validation-error="This is a validation error"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Active state input field</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-5"
          is-active
          name="Example input"
          label="Example label"
          is-valid
          validation-error="This is a validation error"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Readonly input field</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-6"
          is-read-only
          name="Example input"
          label="Example label"
          is-valid
          validation-error="This is a validation error"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Phone number input field</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-7"
          type="tel"
          name="phoneNumber"
          label="Mobile Number"
          is-valid
          validation-error="Please enter a valid phone number"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Email input field</h4>
        <BaseInput
          id="ex4edr-1d"
          test-id="DemoTest-8"
          type="email"
          name="email"
          label="Email"
          is-valid
          validation-error="Please enter a valid email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h4>Password input</h4>
        <BaseInput
          id="ex4m9l3-1d"
          test-id="DemoTest-9"
          type="password"
          name="Example input"
          label="Password"
          is-valid
          validation-error="Please enter a valid password"
        />
      </div>
    </div>
    <p class="mt-5 fs-5">Checkbox</p>
    <hr />
    <BaseCheckbox
      id="optionCheck1"
      test-id="DemoTest-1"
      name="optionCheck1"
      label="Label Text 1"
    />
    <BaseCheckbox
      id="optionCheck2"
      test-id="DemoTest-2"
      name="optionCheck2"
      label="Label Text 2"
    />
    <p class="mt-5 fs-5">Radio</p>
    <hr />
    <BaseRadioButton
      id="ex4m9l3-1d1"
      test-id="DemoTest-1"
      :checked-value="radioCheckedValue.value"
      value="This is the radio input data 1"
      name="radioSet1"
      label="Example label 1"
      :is-validate-disabled="false"
      @click="clickEventRadio"
    />
    <BaseRadioButton
      id="ex4m9l3-1d2"
      test-id="DemoTest-2"
      :checked-value="radioCheckedValue.value"
      value="This is the radio input data 2"
      name="radioSet1"
      label="Example label 2"
      :is-validate-disabled="false"
      @click="clickEventRadio"
    />
    <BaseRadioButton
      id="ex4m9l3-1d3"
      test-id="DemoTest-3"
      :checked-value="radioCheckedValue.value"
      value="This is the radio input data 3"
      name="radioSet1"
      label="Example label 3"
      @click="clickEventRadio"
    />
    <p class="mt-5 fs-5">
      Date Input with Min and Max Values(2008-03-26 to 2022-03-26)
    </p>
    <hr />
    <BaseDateInput
      id="inputDate2"
      test-id="DemoTest-1"
      name="inputDate2"
      label="Date Input Label 2"
    />
  </div>
</template>
<style scoped>
.container {
  background: #f2f2f2;
}
</style>
