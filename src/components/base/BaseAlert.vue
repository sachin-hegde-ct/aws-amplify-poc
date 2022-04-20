<script setup lang="ts">
interface Props {
  alertType?: 'success' | 'danger' | 'info' | 'warning';
  // TODO: Configure icons
  // iconName?: IconNames;
  // iconColor?: IconColors;
  message?: string;
  testId: string; // TODO Confirm TestId prefix for Alert (Not available on Notion)
}

withDefaults(defineProps<Props>(), {
  alertType: 'danger',
  // TODO: Configure icons
  // iconName: IconNames.AlertCircle,
  // iconColor: IconColors.Black,
  message: 'default message',
  testId: 'alert-default-test',
});
</script>

<template>
  <div
    :class="[`alert theme-alert alert-${alertType} alert-dismissible`]"
    :test-id="`${testId}`"
    role="alert"
  >
    <!-- TODO: Configure icon -->
    <!-- <div class="theme-alert-icon">
      <BaseIcon :icon="iconName" :color="iconColor" :size="IconSizes.Large" />
    </div> -->
    <p>{{ message }}</p>
    <!-- TODO: Refactor to allow for button with icon component and open / close functionality -->
  </div>
</template>
