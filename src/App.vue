<script setup lang="ts">
import { reactive, ref } from 'vue';
import { GroupsCheckbox } from './components';
import { GroupType } from './components/GroupsCheckbox/types';

const data = reactive<GroupType[]>([
  { label: 'Gorup', values: [{ key: 'first', label: 'first' }, { key: 'second', label: 'second' }] },
  { label: 'Address', values: [{ key: 'city', label: 'city' }, { key: 'address', label: 'address' }] },
  { label: 'Numbers', values: [{ key: 'one', label: 'one' }, { key: 'two', label: 'two' }, { key: 'three', label: 'three' }] }
]);
const selectedValues = ref<string[]>([]);


const setVlaues = (newValues: string[]) => {
  selectedValues.value = [...newValues];
}

</script>

<template>
  <div>
    <groups-checkbox :data="data" :selected-values="selectedValues" @update:values="setVlaues" />

    <div class="seelcted-list">
      <div class="row">
        Values:
      </div>
      <ul>
        <li class="row" v-for="value in selectedValues" :key="value">{{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.seelcted-list {
  margin-top: 40px;
  width: 600px;
  border: 1px solid #ccc;


  ul {
    padding: 0;
    margin: 0;

    & :last-child {
      border-bottom: none;
    }
  }

  .row {
    padding: 7px 12px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
