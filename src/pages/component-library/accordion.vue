<script setup lang="ts">
useNuxt2Meta({
  title: "CARAMEL | Component Library - Accordion",
});

const Accordion1mockData = {
  id: "accordionExample1",
  testId: "DemoTest-1",
  items: [
    {
      heading: "Accordion 1",
      id: "example1-id1",
      content: "3 Deleniti minima officiis provident ex recusandae.",
    },
    {
      heading: "Accordion 2",
      id: "example1-id2",
      content: "3 Deleniti minima officiis provident ex recusandae.",
      isOpen: null,
    },
    {
      heading: "Accordion 3",
      id: "example1-id3",
      content: "3 Deleniti minima officiis provident ex recusandae.",
      istOpen: false,
    },
  ],
};

const Accordion2mockData = {
  id: "accordionExample2",
  testId: "DemoTest-2",
  items: [
    {
      heading: "Accordion 1",
      id: "example2-id1",
      content: "3 Deleniti minima officiis provident ex recusandae.",
      isOpen: true,
    },
    {
      heading: "Accordion 2",
      id: "example2-id2",
      content: "3 Deleniti minima officiis provident ex recusandae.",
      isOpen: null,
    },
    {
      heading: "Accordion 3",
      id: "example2-id3",
      content: "3 Deleniti minima officiis provident ex recusandae.",
      isOpen: false,
    },
  ],
};

const Accordion3mockData = {
  id: "accordionExample3",
  testId: "DemoTest-3",
  items: [
    {
      heading: "Accordion 1",
      id: "example3-id3",
      content: "3 Deleniti minima officiis provident ex recusandae.",
    },
  ],
};
</script>

<template>
  <div class="container">
    <h1>Accordion</h1>

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
        <p>
          Component
          <code>BaseAccordion</code> responsible for holding multiple accordion
          tabs that can receive only strings as its main content and header.
          They will open and close upon click using a smooth animation.
        </p>

        <p class="fs-5">Figma Link</p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Main id of the component</td>
            </tr>
            <tr>
              <td>test-id</td>
              <td>Component test id</td>
            </tr>
            <tr>
              <td>items</td>
              <td>
                Array of objects containing tab items that will feed the
                component. It uses the interface <code>AccordionItem[]</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="fs-5">Type Interface(<code>AccordionItem[]</code>):</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>Content string coming from the items prop</td>
            </tr>
            <tr>
              <td>heading</td>
              <td>Heading string coming from the items prop</td>
            </tr>
            <tr>
              <td>id</td>
              <td>ID for each item</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>Set the current tab should be open by default</td>
            </tr>
          </tbody>
        </table>
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
        <p class="fs-5">Default component (no props):</p>
        No component display. It need at least 1 object to work.
        <!-- <BaseAccordion id="1" /> -->

        <p class="mt-5 fs-5">
          Accordion with just 1 item using mock data
          (v-bind="Accordion1mockData"):
        </p>
        <BaseAccordion id="2" v-bind="Accordion3mockData" />

        <p class="mt-5 fs-5">
          Accordion with multiple items using mock data
          (v-bind="Accordion1mockData"):
        </p>

        <BaseAccordion id="3" v-bind="Accordion1mockData" />

        <p class="mt-5 fs-5">
          Accordion with multiple items with a default tab open
          (v-bind="Accordion2mockData"):
        </p>

        <BaseAccordion
          id="4"
          test-id="demoAccordionTest3"
          v-bind="Accordion2mockData"
        />
      </div>
    </div>
  </div>
</template>
