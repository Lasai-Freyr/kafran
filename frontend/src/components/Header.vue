<template>
    <header>
        <div class="header bg-primary">
            <div class="LogoHeader">
                <img src="../assets/images/logoOld.jpg" alt="Logo Kafran immobilier" id="Logo">
            </div>
            <nav>
                <ul class="ul-header">
                    <li class="li-header"> <router-link :to="{name: 'Home'}"> Accueil </router-link> </li>
                    <li class="li-header"> <router-link :to="{name: 'List'}"> Liste des biens </router-link> </li>
                    <li class="li-header">  <router-link :to="{name: 'Acheter'}"> Acheter </router-link> </li>
                    <li class="li-header">  <router-link :to="{name: 'Vendre'}"> Vendre </router-link> </li>
                    <li class="li-header">  <router-link :to="{name: 'About'}"> Kafran Immobilier </router-link> </li>
                    <li class="li-header">  <router-link :to="{name: 'Contact'}"> Contact </router-link> </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
//    setup() {
//        
//    },
}
</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #Logo {
        width: 150px;
        display: flex;
        justify-content: flex-start;
    } 
    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        a {
            text-decoration: none;
            color:  rgb(255, 255, 255);
        }
        .ul-header {
            display: flex;
            flex-direction: row;
            margin: 0;
        }
        .li-header {
            list-style: none;
            margin-right: 20px;
            margin-bottom: 5px;
            text-decoration: none;
            font-weight: bold;
            color: white;
            text-shadow: 2px 0 0 rgb(0, 0, 0), 2px 2px 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0);
        }
        li:hover{
            cursor: pointer;
        }
    }
    .imgNav {
        max-width: 250px;
    }
    
</style>