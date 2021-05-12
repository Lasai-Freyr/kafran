<template>
    <div class=" col-10 mx-auto my-3 form-add">
        <h2> Formulaire d'ajout de bien </h2>
        <div>
            <form class="form-addition" id="file-catcher" @submit="addGood() ">
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
                    <input class="button-post" type="file" accept="image/*" @change="onFileSelected($event)" name="pic1" id ="file-input" multiple/>
                    <div id="PicsList">
                        <ul>
                            <li>
                                <img   :src="url[0]" />
                            </li>
                            <li v-if="url[1]" >
                                <img  :src="url[1]" />
                            </li>
                            <li v-if="url[2]" >
                                <img  :src="url[2]" />
                            </li>
                            <li v-if="url[3]" >
                                <img  :src="url[3]" />
                            </li>
                            <li v-if="url[4]" >
                                <img  :src="url[4]" />
                            </li>
                            <li v-if="url[5]" >
                                <img  :src="url[5]" />
                            </li>
                            <li v-if="url[6]" >
                                <img  :src="url[6]" />
                            </li>
                            <li v-if="url[7]" >
                                <img  :src="url[7]" />
                            </li>
                            <li v-if="url[8]" >
                                <img  :src="url[8]" />
                            </li>
                            <li v-if="url[9]" >
                                <img  :src="url[9]" />
                            </li>
                            
                        </ul>
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

    #PicsList {
        display: none;
    }

</style>


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import http from '../../http';
//import {AddFiles} from '../../fileAdd.js';

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
      url: [],
      index: null,
      displayPics: false,
    }
  },
  methods: {
    

    onFileSelected(event) {
        var url = [];
        
       
        for (let i = 0; i < event.target.files.length; i++) {
            this.selectedFile  = event.target.files[i];
            
            const file =  event.target.files[i];
            url.push(file);
            this.url[i] = URL.createObjectURL(file);
            console.log('file : ', file);
            console.log('url : ', url);
            document.querySelector("#PicsList").style.display =' block'; 
        }
    },
    
    addGood() {
        var fileCatcher = document.getElementById('file-catcher');
        var fileInput = document.getElementById('file-input');
          var fileList = [];
        //var renderFileList;
        //var sendFile;
          fileCatcher.addEventListener('submit', function (evnt) {
            evnt.preventDefault();
            fileList.forEach(function (file) {
               
            });
        }); 
        var AllFiles = [];
         console.log("length : ",fileInput.files.length);
        for ( let i = 0; i< fileInput.files.length; i++) {
            AllFiles[i] = fileInput.files[i];
            fileList[i] = fileInput.files[i].name;            
            console.log("AllFiles1 : ", AllFiles);
            console.log("fileList2 : ", fileList);
        //    renderFileListe();
        };

        //renderFileList = function() {
        //    fileList.forEach( function (file, index) {
        //        var fileDisplayE1 = document.createElement('p');
        //        fileDisplayE1.innerHTML = (index + 1) + ' : ' + file.name;
        //        fileDisplayE1.appendChild(fileDisplayE1);
        //    });
        //};
         

        var files = fileInput.files;
        console.log("files : ", files);
        console.log("fileInput : ", fileInput.files);
        console.log("fileList : ", fileList);
        //var path = `${pic1.value}`;
        //var filename = path.replace(/^.*\\/, ""); 
        //console.log("pic.value", pic1.value)
        //let images=filename;
        //let image = new Array();
        //for (let i=0;i<images.length;i++)
        //{image[i] =filename;}
    //   AddFiles(); 
    
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
      for (let i = 0 ; i < AllFiles.length; i++) {
          if ( AllFiles[i]) {
              form.append(`imageFile`, AllFiles[i] );
          }
      }
      console.log("allfiles : ", AllFiles );
      for (let i = 0 ; i < fileList.length; i++) {
          if ( fileList[i]) {
              form.append(`pic${i+1}`, fileList[i] );
          }
      }
      //form.append("pic1", fileList[0] );
      //form.append("pic2", fileList[1] );
      //form.append("pic1", image );
     //   form.append("pic1", file );
     // console.log("filename", filename );
     // console.log("images", images );
    //  console.log("image", image );
      //console.log("pics : ", pics);
      //console.log("images : ", images);
      http.post(`/goods`, form, {'Content-Type': 'multipart/form-data' })
      .then(response => {
      })
      .catch(e => {
        this.errors.push(e)
      })
    },

    
  }, 

  created() {
    const userId = localStorage.getItem("user");
    //this.$router.go();
    console.log("**********",userId);
  },
}
</script>