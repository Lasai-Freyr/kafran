<template>
    <div class=" col-10 mx-auto my-3 form-add">
        <h2> Formulaire d'ajout de bien </h2>
        <div>
            <form class="form-addition" @submit="addGood()">
                <div>
                    <label for="style"> type de bien : </label>
                    <input name="style" id="style" type="texte" v-model="style"/> <br>
                </div>
                <div>
                    <label for="address"> Adresse : </label>
                    <input name="address" id="address" type="texte" v-model="address"/> <br>
                </div>
                <div>
                    <label for="city"> Ville : </label>
                    <input name="city" id="city" type="texte" v-model="city"/> <br>
                </div>
                <div>
                    <label for="postalCode"> code postal : </label>
                    <input name="postalCode" id="postalCode" type="number" v-model="postalCode"/> <br>
                </div>
                <div>                    
                    <label for="squarreMeters"> superficie : </label>
                    <input name="squarreMeters" id="squarreMeters" type="number" v-model="squarreMeters"/>  m²  <br>
                </div>
                <div>
                    <label for="price"> prix du bien : </label>
                    <input name="price" id="price" type="number" v-model="price"/> € <br>
                </div>
                <div>
                    <label for="nbrBedrooms"> Nombre de chambres : </label>
                    <input name="nbrBedrooms" id="nbrBedrooms" type="number" v-model="nbrBedrooms"/> <br>
                </div>
                <div>
                    <label for="nbrSDB"> Nombre de salle de bains : </label>
                    <input name="nbrSDB" id="nbrSDB" type="number" v-model="nbrSDB"/> <br>
                </div>
                <div>
                    <label for="description"> Description du bien : </label> <br>
                    <TextareaAutosize name="description" id="description" v-model="description" placeholder=" Description du bien"> </TextareaAutosize>
                </div>
                <div id="appImg">
                    <input class="button-post" type="file" accept="image/*" @change="onFileSelected($event)" name="pic1" id ="pic1" multiple="oui"/>
                    <div id="preview">
                        <img v-if="url" :src="url" />
                    </div>
                </div>
                  
               <input class="button-post" type="submit" value="Poster" />

            </form>
        </div>
    </div>
</template>

<style>
    .form-add{
        border: 1px solid grey;
        border-radius: 20px;
        box-shadow: gray 4px 4px;
        max-width: 500px;
        padding: 50px;
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        font-weight: bold;
    }

    #description{
        width: 75%;
        min-height: 100px;
        outline: none;
        resize: none;
    }

    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #preview img {
        max-width: 100%;
        width: 200px;
        max-height: 200px;
    }
    .button-post {
        margin: 10px;
        border-radius: 12px;
        background-color: #288dcf;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import http from '../../http';
//import Posts from '@/components/Posts-component.vue'

export default {
  name: "Form-Add",
  
  data() {
    return {
      style: null,
      address: null,
      city: null,
      postalCode: null,
      squarreMeters: null,
      price: null,
      nbrBedrooms: null,
      nbrSDB: null,
      description: null,
      selectedFile: null,
      url: null
    }
  },
  methods: {
    
    onFileSelected(event) {
      this.selectedFile  = event.target.files[0];
      const file =  event.target.files[0];
      this.url = URL.createObjectURL(file);  
    },
    addGood() {
      var path = `${pic1.value}`;
      var filename = path.replace(/^.*\\/, "");       
      const form = new FormData();
      form.append("style", style.value);
      form.append("address", address.value);
      form.append("city", city.value);
      form.append("postalCode", postalCode.value);
      form.append("squarreMeters", squarreMeters.value);
      form.append("price", price.value);
      form.append("nbrBedrooms", nbrBedrooms.value);
      form.append("nbrSDB", nbrSDB.value);
      form.append("description", description.value);
      form.append("imageFile", this.selectedFile );
      form.append("pic1", filename );
      http.post(`/goods`, form, {'Content-Type': 'multipart/form-data' })
      .then(response => {
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }, created() {
    const userId = localStorage.getItem("user");
    //this.$router.go();
    console.log("**********",userId);
  }
}
</script>