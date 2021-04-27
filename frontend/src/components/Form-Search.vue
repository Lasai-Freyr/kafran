<template>
    <div>
        <form class="form-search" @submit="FindGood()">
                <div>
                    <div class="deroulante">
                        <label for="style"> Type de bien : </label>
                        <ul  class="sous">
                                <li> <input type="checkbox" name="appartement" value="appartement"> appartement </li>
                                <li> <input type="checkbox" name="maison" value="maison"> maison </li>
                                <li> <input type="checkbox" name="terrain" value="terrain"> terrain </li>
                            </ul>
                    </div>        
                     <br>
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
               <input class="button-post" type="submit" value="Chercher" />

            </form>
    </div>
</template>

<style>
    .sous {
        display: none;
    }

    .deroulante:hover .sous {
        display: block;
    }
</style>