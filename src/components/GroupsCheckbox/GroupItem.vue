<script setup lang="ts">
import { computed, PropType, ref, watch } from "vue";
import { AppCheckbox } from "..";
import { GroupType } from "./types";

const props = defineProps({
  group: {
    type: Object as PropType<GroupType>,
    required: true,
  },
  values: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const emits = defineEmits(["update:values"]);

const isOpen = ref(false);

const groupsKeys = computed(() => props.group.values.map((item) => item.key));

const isSelectedAll = computed(() =>
  groupsKeys.value.every((key) => props.values.includes(key))
);

const toggleHandle = () => {
  isOpen.value = !isOpen.value;
}

const updateValues = (newValues: string[]) => {
  emits("update:values", newValues);
};

const checkHandle = (key: string, checked: boolean) => {
  let newValues = [...props.values];
  if (checked) {
    newValues.push(key);
  } else {
    newValues = newValues.filter((item) => item !== key);
  }
  updateValues(newValues);
};

const groupCheckHandle = () => {
  let newValues = [...props.values];
  if (isSelectedAll.value) {
    newValues = newValues.filter((key) => !groupsKeys.value.includes(key));
  } else {
    newValues = [...newValues, ...groupsKeys.value];
  }
  updateValues(newValues);
};

watch(isSelectedAll, (newVal) => {
  if (newVal && !isOpen.value) {
    isOpen.value = true;
  }
})
</script>
<template>
  <div :class="['group', { 'is-open': isOpen }]">
    <div class="item">
      <app-checkbox :name="group.label" :checked="isSelectedAll" @update:checked="groupCheckHandle" />
      <div class="label" @click="toggleHandle">
        <font-awesome-icon icon="fa-solid fa-chevron-right" size="xs" />
        <div>{{ group.label }}</div>
      </div>
    </div>
    <ul v-show="isOpen">
      <li v-for="item in group.values" :key="item.label" class="group-item">
        <app-checkbox :name="item.label" :checked="values.includes(item.key)" :label="item.label"
          @update:checked="checkHandle(item.key, $event)" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.group {
  .item {
    display: flex;
    align-items: center;
    column-gap: 15px;
    padding: 7px 12px;
    border-bottom: 1px solid #aaaaaa;

    .label {
      display: flex;
      cursor: pointer;
      align-items: center;
      column-gap: 10px;
    }
  }

  &.is-open svg {
    transform: rotate(-90deg);
  }

  svg {
    transition: all .1s linear;
    color: #c97d72;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .group-item {
    padding: 7px 42px;
    border-bottom: 1px solid #aaaaaa;
  }
}
</style>
