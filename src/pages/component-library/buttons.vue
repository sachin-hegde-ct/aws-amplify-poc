<script setup lang="ts">
useNuxt2Meta({
  title: "CARAMEL | Component Library - Buttons",
});
</script>

<template>
  <div class="container">
    <h2>Buttons</h2>
    <!-- NOTE: outside of the component library, we would never use an <hr /> -->
    <hr />
    <h3>Primary</h3>
    <div class="btns-group">
      <BaseButton label="Small" size="sm" test-id="DemoTest-1" />
      <BaseButton label="Large" size="lg" test-id="DemoTest-3" />
      <BaseButton label="Disabled" size="lg" disabled test-id="DemoTest-4" />
    </div>
    <h3>Secondary</h3>
    <div class="btns-group">
      <BaseButton
        label="Small"
        size="sm"
        variation="secondary"
        test-id="DemoTest-5"
      />
      <BaseButton
        label="Large"
        size="lg"
        variation="secondary"
        test-id="DemoTest-7"
      />
      <BaseButton
        label="Disabled"
        size="lg"
        variation="secondary"
        disabled
        test-id="DemoTest-8"
      />
    </div>
    <h3>Outline</h3>
    <div class="btns-group">
      <BaseButton
        label="Outline Btn"
        variation="outline-primary"
        test-id="DemoTest-9"
      />
      <BaseButton
        label="Disabled"
        variation="outline-primary"
        disabled
        test-id="DemoTest-12"
      />
    </div>
    <h3>Button Link</h3>
    <div class="btns-group">
      <BaseButton label="Button Link" variation="link" test-id="DemoTest-13" />
    </div>
  </div>
</template>

<!-- NOTE: Scoped styles are being used given that this component-library could be disposed in the future. -->
<style scoped lang="scss">
.btns-group {
  display: flex;
  flex-flow: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}
</style>
