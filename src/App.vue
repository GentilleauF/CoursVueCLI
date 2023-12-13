<template>
  <!-- <div class="container"> -->
  <h1 class="text-center">Les Amis</h1>
  <ul class="list-group">

    <ajouter-un-ami @add-ami="ajouterAmi" ></ajouter-un-ami>

    <un-ami
      v-for="unAmi in lesAmis"
      :key="unAmi.id"
      :name="unAmi.name"
      :phone="unAmi.phone"
      :email="unAmi.email"
      :premium="unAmi.premium"
      :id="unAmi.id"
      @mon-event-premium="afficherStatusPremium"
    ></un-ami>
    <!--  <un-ami name='tom' phone="056255" email="noezdonfe" premium="0"></un-ami> -->
  </ul>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      lesAmis: [
        {
          id: "lasticot",
          name: "COCO L ASTICOT",
          phone: "01234 5678 991",
          email: "coco@lasticot.com",
          premium: true,
        },
        {
          id: "janine",
          name: "Janine DeLavega",
          phone: "09876 543 221",
          email: "janine@delavega.com",
          premium: false,
        },
        {
          id: "janineBis",
          name: "Janine DeLavega Bis",
          phone: "09876 543 221",
          email: "janineBis@delavega.com",
          premium: true,
        },
      ],
    };
  },

  methods: {
    afficherStatusPremium(leIdDunAmi) {
      console.log("voila " + leIdDunAmi);
      let unAmiIdentified = this.lesAmis.find(
        (element) => element.id == leIdDunAmi
      );
      unAmiIdentified.premium = !unAmiIdentified.premium;

      console.log(unAmiIdentified);
    },

    ajouterAmi (enteredName, enteredPhone,enteredMail) {
    let newAmiContact = {
      id: new Date().toISOString(),
      name: enteredName,
      phone: enteredPhone,
      email: enteredMail,
      premium: false
    }
    console.log(newAmiContact);
    this.lesAmis.push(newAmiContact)

  }
  },

};
</script>
