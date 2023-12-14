<template>
  <ul class="list-group ">
    <li class="list-group-item">{{ name }}</li>
    <li class="list-group-item">{{ age }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    age: { type: String, required: true },
    id: { type: String, required: true },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
