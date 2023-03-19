<script setup lang="ts">
import { computed, PropType } from 'vue';
import { GroupType } from './types';
import GroupItem from './GroupItem.vue'
import { AppCheckbox } from '..';

const props = defineProps({
  data: {
    type: Array as PropType<GroupType[]>,
    required: true
  },
  selectedValues: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const emits = defineEmits(['update:values'])

const allValues = computed(() => {
  const res = props.data.reduce((acc: string[], item: GroupType) => {
    return [...acc, ...item.values.map(val => val.key)]
  }, [])
  return res
})

const isSelectedAll = computed(() => allValues.value.length === props.selectedValues.length)

const checkAll = () => {
  if (isSelectedAll.value) {
    changeHandle([]);
  } else {
    changeHandle(allValues.value)
  }
}

const changeHandle = (values: string[]) => {
  emits('update:values', values)
}

</script>
<template>
  <div class="groups-checkbox">
    <div class="all-label">
      <app-checkbox :checked="isSelectedAll" @update:checked="checkAll" name="all" />
      <div>All attributes</div>
    </div>
    <group-item v-for="group in data" :key="group.label" :group="group" :values="selectedValues"
      @update:values="changeHandle" />
  </div>
</template>

<style lang="scss" scoped>
.groups-checkbox {
  width: 600px;
  border: 1px solid #aaaaaa;

  & > div:last-child :deep(ul li:last-of-type) {
    border-bottom: none;
  }
}



.all-label {
  display: flex;
  justify-items: center;
  column-gap: 10px;
  background-color: #e9e9e9;
  padding: 7px 12px;
  border-bottom: 1px solid #aaaaaa;

}
</style>