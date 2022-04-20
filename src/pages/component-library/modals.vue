<script setup lang="ts">
useNuxt2Meta({
  title: "CARAMEL | Component Library - Modals",
});

function handleClick() {
  console.log("CLICKED");
}
</script>
<!-- TODO: Modal styling -->
<template>
  <div class="container">
    <h2>Modals</h2>
    <!-- NOTE: outside of the component library, we would never use an <hr /> -->
    <hr />
    <h3>Slots</h3>
    <p>Two available slots in the modal:</p>
    <ul>
      <li>
        <code>#default</code> which will be the default slot where you place all
        the contents of the body.
      </li>
      <li>
        <code>#footer</code> which will be where you place the contents of the
        footer.
      </li>
    </ul>
    <!-- TODO: Replace button with BaseButton component -->
    <button
      aria-controls="centeredModal"
      data-bs-target="#centeredModal"
      data-bs-toggle="modal"
    >
      Centered Modal
    </button>
    <button
      aria-controls="bottomModal"
      data-bs-target="#bottomModal"
      data-bs-toggle="offcanvas"
    >
      Bottom Modal
    </button>

    <!-- NOTE: The `ClientOnly` component is needed in order to fix some Hydration issues related with the use of client libraries like Bootstrap inside Nuxt. -->
    <ClientOnly>
      <BaseModal id="centeredModal" test-id="DemoTest-1">
        <template #default>Modal Body Centered</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
      <BaseModal id="bottomModal" test-id="DemoTest-2" position="bottom">
        <template #default>Modal Body Bottom</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="offcanvas"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
      <BaseModal
        id="bottomModalBlue"
        test-id="DemoTest-3"
        position="bottom"
        background="blue"
      >
        <template #header>Modal Body Bottom Blue</template>
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          eligendi magni id quia obcaecati necessitatibus incidunt, asperiores
          sunt eveniet atque tempore est ut. Inventore architecto itaque id
          quibusdam repellendus recusandae? Lorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus ea autem tempora accusamus voluptatibus, tempore, obcaecati
          beatae labore ab doloribus laudantium molestias enim delectus debitis
          qui at reiciendis. Hic, facere. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto eligendi magni id quia obcaecati
          necessitatibus incidunt, asperiores sunt eveniet atque tempore est ut.
          Inventore architecto itaque id quibusdam repellendus recusandae? Lorem
          ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus ea autem tempora accusamus
          voluptatibus, tempore, obcaecati beatae labore ab doloribus laudantium
          molestias enim delectus debitis qui at reiciendis. Hic, facere. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi
          magni id quia obcaecati necessitatibus incidunt, asperiores sunt
          eveniet atque tempore est ut. Inventore architecto itaque id quibusdam
          repellendus recusandae? Lorem ipsum dolor sit amet consectetur Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Natus ea autem
          tempora accusamus voluptatibus, tempore, obcaecati beatae labore ab
          doloribus laudantium molestias enim delectus debitis qui at
          reiciendis. Hic, facere. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto eligendi magni id quia obcaecati
          necessitatibus incidunt, asperiores sunt eveniet atque tempore est ut.
          Inventore architecto itaque id quibusdam repellendus recusandae? Lorem
          ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus ea autem tempora accusamus
          voluptatibus, tempore, obcaecati beatae labore ab doloribus laudantium
          molestias enim delectus debitis qui at reiciendis. Hic, facere.
        </template>
      </BaseModal>

      <BaseModal id="blueModal" test-id="DemoTest-4" background="blue">
        <template #default>Blue modal</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>

      <BaseModal
        id="transparentModal"
        test-id="DemoTest-5"
        background="transparent"
      >
        <template #default>transparent modal</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
    </ClientOnly>
  </div>
</template>
