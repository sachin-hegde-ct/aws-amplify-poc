<script setup lang="ts">
useNuxt2Meta({
  title: 'CARAMEL | Component Library - Fonts',
});
</script>

<template>
  <div class="container">
    <h1>Typography</h1>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="fs-5">Description:</p>
        <p>Basic font demonstration for the title and paragraphs.</p>
        <p>For responsive heading sizes use the theme-fs-* classes</p>
        <p class="fs-5">Figma Link</p>
        <a
          href="https://www.figma.com/file/IT0N3vw8ltrSXSpxAXTYbp/Caramel-Wireframe?node-id=4135%3A45932"
          target="_blank"
          >Caramel design system</a
        >
        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        <p>N/A</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h1 class="theme-fs-1">H1 font sample</h1>
        <h2 class="theme-fs-2">H2 font sample</h2>
        <h3 class="theme-fs-3">H3 font sample</h3>
        <h4 class="theme-fs-4">H4 font sample</h4>
        <p>
          Body font. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aut dolor minus ea eligendi saepe quis voluptatum expedita, assumenda
          similique libero minima, illo excepturi hic quae maxime, alias in
          consequuntur voluptas.
        </p>
        <button class="btn btn-primary">Button Text</button>
      </div>
    </div>
  </div>
</template>
