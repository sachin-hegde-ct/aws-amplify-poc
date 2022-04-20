<script setup lang="ts">
useNuxt2Meta({
  title: "CARAMEL | Component Library - Alerts",
});
</script>
<!-- TODO: Functionality and styling -->
<template>
  <div class="container">
    <h1>Alerts</h1>

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
          <code>BaseAlert</code> responsible for content and form alert messages
          to inform the user of errors, success or validation issues.
        </p>

        <p class="fs-5">
          <a
            href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-S1---8?node-id=2483%3A47626"
            >Figma Link</a
          >
        </p>

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
              <td>alertType</td>
              <td>Will vary the prop alert based in its usage situation</td>
            </tr>
            <tr>
              <td>message</td>
              <td>Main content inside the component</td>
            </tr>
            <tr>
              <td>test-id</td>
              <td>Component test id</td>
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
        <BaseAlert test-id="DemoTest-1" />

        <p class="mt-5 fs-5">Success alert type (alert-type="success"):</p>
        <BaseAlert
          alert-type="success"
          message="This is an example of an alert"
          test-id="DemoTest-2"
        />

        <p class="mt-5 fs-5">Danger alert type (alert-type="danger"):</p>
        <BaseAlert
          alert-type="danger"
          message="This is an example of an alert"
          test-id="DemoTest-3"
        />

        <p class="mt-5 fs-5">Info alert type (alert-type="info"):</p>
        <BaseAlert
          alert-type="info"
          message="This is an example of an alert"
          test-id="DemoTest-4"
        />

        <p class="mt-5 fs-5">Warning alert type (alert-type="warning"):</p>
        <BaseAlert
          alert-type="warning"
          message="This is an example of an alert"
          test-id="DemoTest-5"
        />
      </div>
    </div>
  </div>
</template>
