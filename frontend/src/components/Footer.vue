<template>
    <footer>
        <div class="footer bg-primary">
            <nav>
                <ul>
                    <li>  Mentions légales  </li>
                    <li> Politique de confidentialité </li>
                    <li>  <router-link :to="{name: 'About'}"> Kafran Immobilier </router-link> </li>
                    <li>  <router-link :to="{name: 'Contact'}"> Contact </router-link> </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
//    setup() {
//        
//    },
}
</script>

<style lang="scss">
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        bottom: 0;
    }
    #logo {
        width: 200px;
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
        ul {
            display: flex;
            flex-direction: row;
        }
        li {
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