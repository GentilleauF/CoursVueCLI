<script>

export default {
    props : ["name", "phone", "email", "premium"],
    data(){
        return{
            detailsVisibles:false,
            unPote:{
                id:'jojo',
                name:"jojoLeBarjo",
                phone:'123 12346 24',
                email:'jojo@barjo.com',
            },
            premiumData: this.premium
        }
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },

        afficherPremium() {
            if (this.premiumData == 1) {
                this.premiumData =0
            } else {
                this.premiumData = 1
            }
        }
    },
}
</script>


<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{name}}</h2> 
            <h2 class="list-group-item">{{premiumData==1 ? "Ami Premium" : "Ami nul"}}</h2> 
            <button @click="afficherPremium" class="btn btn-danger" >Premium</button>
            <button @click="afficherDetails" class="btn btn-primary">Voir Détails</button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{phone}}</li>
                <li class="list-group-item">{{email}}</li>
            </ul>
        </ul>
    </div> 
</template>
