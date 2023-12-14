<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    submitData() {
      this.$emit(
        "update-info",
        this.enteredName,
        this.enteredAge
      );
    },
  },
};
</script>

<template>
  <div class="container bg-info my-1">
    <form @submit.prevent="submitData">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Votre Nom</label
        >
        <input
          v-model="enteredName"
          class="form-control form-control-sm"
          type="text"
          placeholder="Nom"
          aria-label=".form-control-sm example"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Votre Age</label
        >
        <input
          v-model="enteredAge"
          class="form-control form-control-sm"
          type="text"
          placeholder="Tel"
          aria-label=".form-control-sm example"
        />
      </div>
      <button class="btn btn-primary btn-sm col-12 my-1">Ajouter Ami</button>
    </form>
  </div>
</template>
