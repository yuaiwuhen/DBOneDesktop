<template>
  <div class="list-item"
    :class="{ disabled, divider, state: !disabled && !noState, compact, active, 'has-checkmark': checked !== undefined }"
    @click="_handleClick">
    <Icon icon="fluent:dismiss-24-regular" />
    <div class="list-item-content" key="content">
      <div v-if="title" class="list-item-title" :class="titleClass">
        {{ title }}
      </div>
      <div v-if="subtitle" class="list-item-subtitle" :class="subtitleClass">
        {{ subtitle }}
      </div>
    </div>
    <div v-if="trailingText" class="list-item-trailing-text" :class="trailingTextClass">{{ trailingText }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, useAttrs } from 'vue';
import { Icon } from '@iconify/vue';
import { useI18n } from "vue-i18n";

export interface ListItemProps {
  disabled?: boolean,
  noState?: boolean,
  active?: boolean,
  checked?: boolean,
  divider?: boolean,
  compact?: boolean,
  icon?: string,
  iconColor?: string,
  iconSize?: string | number,
  iconClass?: string,
  trailingIcon?: string,
  trailingIconColor?: string,
  trailingIconClass?: string,
  trailingIconSize?: string | number,
  title?: string,
  titleClass?: string,
  subtitle?: string,
  subtitleClass?: string,
  trailingText?: string,
  trailingTextClass?: string,
  trailingAngle?: boolean,
  url?: string,
  click?: (event: { originalEvent: Event, key: ListItemKey }) => void
}

export type ListItemKey = string | number | symbol | null;

const { t } = useI18n();

const props = withDefaults(defineProps<ListItemProps>(), { checked: undefined });

const emit = defineEmits<{ (type: 'click', event: { originalEvent: Event, key: ListItemKey }): void }>();
const attrs = useAttrs();

function _handleClick(originalEvent) {
  if (props.disabled) {
    return;
  }

  if (typeof props.url === 'string' && props.url.length) {
    window.open(props.url);
  }
  const event = { originalEvent, key: attrs['data-key'] as ListItemKey };
  if (typeof props.click === 'function') {
    props.click(event);
  }

  emit('click', event);
}
</script>

<style scoped>
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--space-sm) var(--space-base);
  gap: var(--space-base);
}

.compact>.list-item,
.list-item.compact {
  gap: var(--space-sm);
}

.divider>.list-item+.list-item,
.list-item-subtitle,
.compact>.list-item .list-item-title,
.list-item.compact .list-item-title {
  font-size: 0.9230769231em;
}

.list-item.active {
  background-color: var(--color-primary-pale);
}

.list-item.active .list-item-title {
  color: var(--color-primary);
}

.list-item-content {
  flex: auto;
  min-width: 0;
}
</style>
