<script>
export default {
  props: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    premium: { type: Boolean, required: false, default: false },
    id: { type: String, required: true },
  },

//   emits: {
//     "mon-event-premium": (id) => {
//       if (id) {
//         return true;
//       } else {
//         console.warn("id n'est pas defini");
//         return false;
//       }
//     },
//   },

emits: ['mon-event-premium', 'delete'],

  data() {
    return {
      detailsVisibles: false,
      unPote: {
        id: "jojo",
        name: "jojoLeBarjo",
        phone: "123 12346 24",
        email: "jojo@barjo.com",
      },
      // premiumData: this.premium
    };
  },

  methods: {
    afficherDetails() {
      this.detailsVisibles = !this.detailsVisibles;
    },

    afficherPremium() {
      this.$emit("mon-event-premium", this.id);
      // this.premiumData = !this.premiumData;
    },
  },
};
</script>

<template>
  <div class="container my-1">
    <ul class="list-group">
      <h2 class="list-group-item">{{ name }}</h2>
      <h2 class="list-group-item">{{ premium ? "Ami Premium" : "Ami nul" }}</h2>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="afficherDetails" type="button" class="m-1 btn btn-outline-secondary">
          👁 Détails
        </button>
        <button @click="afficherPremium" type="button" class="m-1 btn btn-outline-success">
          ⭐️ Premium
        </button>
        <button @click="$emit('delete', id)"  type="button" class="m-1 btn btn-outline-danger">
          🗑 Suppr.
        </button>
      </div>
      <ul v-if="detailsVisibles" class="list-group">
        <li class="list-group-item">{{ phone }}</li>
        <li class="list-group-item">{{ email }}</li>
      </ul>
    </ul>
  </div>
  <!-- <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{name}}</h2> 
            <h2 class="list-group-item">{{premium? "Ami Premium" : "Ami nul"}}</h2> 
            <button @click="afficherPremium" class="btn btn-danger" >Premium</button>
            <button @click="afficherDetails" class="btn btn-primary">Voir Détails</button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{phone}}</li>
                <li class="list-group-item">{{email}}</li>
            </ul>
        </ul>
    </div> -->
</template>
