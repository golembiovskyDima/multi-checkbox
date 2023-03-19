<script setup lang="ts">

const props = defineProps({
  checked: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:checked']);


const changeHandle = (e: any) => {
  const target = e.target as HTMLInputElement
  emits('update:checked', target.checked)
}

</script>
<template>
  <div class="app-checkbox">
    <input :id="name" type="checkbox" :checked="checked" @change="changeHandle">
    <label :for="name">
      <span class="checkmark"></span>
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss">
.app-checkbox {
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;

    &:checked~label .checkmark {
      background: #f9e7cf;

      &:after {
        visibility: visible;
      }
    }
  }

  label {
    position: relative;
    display: flex;
    width: fit-content;
    column-gap: 10px;
    cursor: pointer;
  }

  .checkmark {
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 1px solid #757575;
    border-radius: 2px;
    transition: all linear 0.2s;

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 6px;
      border-bottom: 3px solid #c97d72;
      border-right: 3px solid #c97d72;
      height: 9px;
      width: 5px;
      transform: rotate(45deg);
      visibility: hidden;
    }

  }
}
</style>