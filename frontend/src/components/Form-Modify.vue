<template>
    <div class="row col-10 mx-auto my-3 form-modd">
        <h2> Formulaire de modification de bien </h2>
        <div>
            <form class="form-modif" @submit.prevent="ModdGood()" v-if="good">
                <div>
                    <label for="style"> type de bien : </label>
                    <input name="style" id="style" type="texte" v-model="style" v-bind:placeholder="good.style" /> <br>
                </div>
                <div>
                    <label for="address"> Adresse : </label>
                    <input name="address" id="address" type="texte" v-model="address"  v-bind:placeholder="good.address" /> <br>
                </div>
                <div>
                    <label for="city"> Ville : </label>
                    <input name="city" id="city" type="texte" v-model="city"  v-bind:placeholder="good.city" /> <br>
                </div>
                <div>
                    <label for="postalCode"> code postal : </label>
                    <input name="postalCode" id="postalCode" type="number" v-model="postalCode"  v-bind:placeholder="good.postalCode" /> <br>
                </div>
                <div>                    
                    <label for="squarreMeters"> superficie : </label>
                    <input name="squarreMeters" id="squarreMeters" type="number" v-model="squarreMeters"  v-bind:placeholder="good.squarreMeters" />  m²  <br>
                </div>
                <div>
                    <label for="price"> prix du bien : </label>
                    <input name="price" id="price" type="number" v-model="price" v-bind:placeholder="good.price" /> € <br>
                </div>
                <div>
                    <label for="nbrBedrooms"> Nombre de chambres : </label>
                    <input name="nbrBedrooms" id="nbrBedrooms" type="number" v-model="nbrBedrooms" v-bind:placeholder="good.nbrBedrooms" /> <br>
                </div>
                <div>
                    <label for="nbrSDB"> Nombre de salle de bains : </label>
                    <input name="nbrSDB" id="nbrSDB" type="number" v-model="nbrSDB" v-bind:placeholder="good.nbrSDB" /> <br>
                </div>
                <div>
                    <label for="description"> Description du bien : </label> <br>
                    <TextareaAutosize name="description" id="description" v-model="description" v-bind:placeholder="good.description"> </TextareaAutosize>
                </div>            
                  
               <input class="button-post" type="submit" value="Enregistrer" />

            </form>
        </div>
    </div>
    
</template>

<style>
    .form-modd{
        display: flex;
        justify-content: center;
    }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import http from '../../http';

export default {
    name: "Form-Modd",

    data() {
        return {
            good: null,
            address: null,
            style: null,
            city: null,
            postalCode: null,
            squarreMeters: null,
            price: null,
            nbrBedrooms: null,
            nbrSDB: null,
            description: null,
        }
    },
    beforeCreate() {       
        const id = this.$route.params.id; 
           
        http.get(`/goods/${id}`)
        .then(response => {
            console.log("datapost",response.data);
            this.good = response.data[0];    
        });        
    },
    methods: {
        
        ModdGood() {
            
            const id = this.$route.params.id; 
            http.get(`/goods/${id}`)
        .then(response => {
            console.log("datapost",response.data);
            var good = response.data[0];    
        

            const formModd = new FormData();
            
            if (style.value == "") {
                 formModd.append("style", good.style);
            } else {
                formModd.append("style", style.value);
            }
            if (address.value == "") {
                 formModd.append("address", good.address);
            } else {
                formModd.append("address", address.value);
            }

            if (city.value == "") {
                 formModd.append("city", good.city);
            } else {
                formModd.append("city", city.value);
            }

            if (postalCode.value == "") {
                 formModd.append("postalCode", good.postalCode);
            } else {
                formModd.append("postalCode", postalCode.value);
            }

            if (squarreMeters.value == "") {
                 formModd.append("squarreMeters", good.squarreMeters);
            } else {
                formModd.append("squarreMeters", squarreMeters.value);
            }
            if (nbrBedrooms.value == "") {
                 formModd.append("nbrBedrooms", good.nbrBedrooms);
            } else {
                formModd.append("nbrBedrooms", nbrBedrooms.value);
            }
            if (price.value == "") {
                 formModd.append("price", good.price);
            } else {
                formModd.append("price", price.value);
            }
            if (nbrSDB.value == "") {
                 formModd.append("nbrSDB", good.nbrSDB);
            } else {
                formModd.append("nbrSDB", nbrSDB.value);
            }
            if (description.value == "") {
                 formModd.append("description", good.description);
            } else {
                formModd.append("description", description.value);
            }
            formModd.append("id", id)
            console.log("form : ",formModd);
            http.put(`/goods/${id}`, formModd, {'Content-Type': 'multipart/form-data' })
            .then(response => {
                   this.$router.go();
            })
            .catch(e => {
            this.errors.push(e)
            })
        }); 
        },
    }
    
}
</script>