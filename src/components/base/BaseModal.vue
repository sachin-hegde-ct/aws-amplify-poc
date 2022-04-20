<script setup lang="ts">
// TODO Only to support Teleport in Vue2
import Teleport from 'vue2-teleport';

// TODO: Add relevant colors and positions
interface Props {
  background?: 'blue' | 'transparent' | 'white';
  id: string;
  position?: 'center' | 'bottom';
  testId: string;
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  position: 'center',
});

const { $bsModal } = useNuxtApp();
const slots = useSlots();
const modalRef = ref(null);
const isCentered = props.position === 'center';

onMounted(() => {
  // TODO Commeneted since there is an error which is breaking the component
  // new $bsModal(modalRef.value);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isCentered"
      :id="id"
      ref="modalRef"
      :test-id="`dlg${testId}`"
      class="modal fade theme-modal"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div :class="['modal-content', props.background]">
          <div class="modal-header">
            <!-- TODO: Add the close icon -->
            <button
              v-if="props.background !== 'transparent'"
              data-bs-dismiss="modal"
              type="button"
              class="btn-close text-reset"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <slot />
          </div>

          <div v-if="slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      :id="id"
      :class="['offcanvas offcanvas-bottom theme-modal', props.background]"
      :test-id="`dlg${testId}`"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="offcanvas-header">
        <!-- TODO: Add the close icon -->
        <button
          data-bs-dismiss="offcanvas"
          type="button"
          class="btn-close text-reset"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <slot />
      </div>

      <div v-if="slots.footer" class="offcanvas-footer">
        <slot name="footer" />
      </div>
    </div>
  </Teleport>
</template>
