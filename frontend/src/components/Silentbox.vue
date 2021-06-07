<template>
    <div>
        <silent-box :gallery="images"><!-- your additional content --></silent-box>    
    </div>        
</template>

<script>
//import VueSilentbox from 'vue-silentbox'
import http from '../../http';

export default {
    data() {
        return {
            images: [
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                {
                    src: '',
                    srcSet: '',
                    description: '',
                },
                    
            ]
        }
    },
     beforeCreate() {       
            const id = this.$route.params.id; 
            
            http.get(`/goods/${id}`)
            .then(response => {
                console.log("datapost",response.data);
                this.good = response.data[0];
                let items = [ this.good.pic1 , this.good.pic2, this.good.pic3,
                 this.good.pic4, this.good.pic5, this.good.pic6, this.good.pic7,
                  this.good.pic8, this.good.pic8, this.good.pic9, this.good.pic10]

                for (let i = 0 ; i < 10 ; i++) {
                    if ( items[i] != undefined ) {
                        
                        this.images[i].src =  "/images/" + items[i];
                        this.images[i].srcSet =  "/images/" + items[i];
                        console.log("items silentbox", this.images);
                    }
                    else {
                        this.images.pop([i-1]);
                        console.log(" silentbox", this.images);
                    }
                }
            });
    },
    methods: {
    // the index parameter is optional, however it should be set if you're opening
    // the overlay on different position than the beginning of the gallery
    openOverlayProgramaticallyWithContext (item, index = 0) {
        this.$refs.silentbox.openOverlay(item, index)
    }
}
}
</script>