<script lang="ts" setup>
export interface ITogglerItem {
  name: string
  value: string
}
defineProps<{ items: ITogglerItem[]; modelValue: string }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <div class="app-toggler">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      href="javascript:void(0)"
      class="app-toggler__item"
      :class="{ active: item.value === modelValue }"
      @click.prevent="$emit('update:modelValue', item.value)"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<style lang="postcss">
.app-toggler {
  @apply flex h-10 border border-blue rounded;
  &__item {
    @apply h-full flex-1 flex-center text-white text-base hover:bg-blue;
    &.active {
      @apply bg-blue;
    }
  }
}
</style>
