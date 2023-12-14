<template>
  <active-user 
   :name="monUtilisateur.name" 
   :age="monUtilisateur.age" 
   :id="monUtilisateur.id"
  ></active-user>
  <user-data @update-info="updateUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      monUtilisateur: {
        name: 'Bob',
        age: '200ans',
        id: '1'
      }
    };
  },

  methods: {
    updateUser(enteredName, enteredAge) {
      this.monUtilisateur.id = new Date().toISOString(),
      this.monUtilisateur.name = enteredName;
      this.monUtilisateur.age = enteredAge;

      console.log('ok');
    }
  },
};
</script>
