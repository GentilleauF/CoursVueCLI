<template>
  <active-user 
   :name="displayedName" 
   :age="displayedAge" 
   :id="'1'"
  ></active-user>
  <user-data @update-info="updateUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      displayedName:'',
      displayedAge:'',
      id:''
    };
  },

  methods: {
    updateUser(enteredName, enteredAge) {
      this.id = new Date().toISOString(),
      this.displayedName = enteredName;
      this.displayedAge = enteredAge;

      console.log('ok');
    }
  },
};
</script>
