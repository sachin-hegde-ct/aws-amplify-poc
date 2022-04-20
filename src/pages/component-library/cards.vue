<script setup lang="ts">
useNuxt2Meta({
  title: "CARAMEL | Component Library - Cards",
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Cards</h2>
        <p>
          Any custom styling for a card in a particular view or layout should be
          scoped the view that contains it via a related
          <code>_[some-page].scss</code> or
          <code>_[some-component].scss</code> file, and a css class to provide
          the scope.
        </p>
        <p>
          Any element(s) needed can be passed into the named slots. Headings,
          Images, etc.
        </p>
        <hr />
        <h3>Default Card</h3>
        <BaseCard />
        <hr />
        <h3>Card with all Props passed</h3>
        <BaseCard test-id="DemoTest-1">
          <template #header>Custom Header</template>
          <template #title>Custom Title</template>
          <template #text>Custom text</template>
          <p>Additional custom body content - Implicit default</p>
          <template #footer>Custom Footer</template>
        </BaseCard>
        <hr />
        <h3>Base Card</h3>
        <p>
          Empty card container with only
          <code>.card</code> and <code>.card-body</code> elements and a default
          slot.
        </p>
        <BaseCard base-card test-id="DemoTest-2">
          <h1>Content 1</h1>
          <p>Any type of content can be added in this default slot.</p>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
