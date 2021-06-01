<template>
    <div>
        <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="8000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="500"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"                   
                >
                <div v-if="imgs">            
                    
                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[0]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src='`/images/${images[0]}`'
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[1]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[1]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[2]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[2]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[3]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[3]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[4]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[4]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[5]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[5]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[6]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[6]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>
                    <b-carousel-slide
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-if="images[7]"
                    >
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            :src="`/images/${images[7]}`"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>              
                    
                </div>
                </b-carousel>
               
    </div>
</template>

<script>

import http from '../../http';
export default {
  name: 'Carrousel',
   data() {
        return {
            goods: [],
            errors: [],
            images : [],
            slide: 0,
            sliding: null,
            loaded: false,
            imgs: false
        
        } 
    },
   created(){
    http.get(`/goods`)
    .then(response => {
        this.goods = response.data;
        console.log("goods : ", this.goods);
        console.log("pic : ", this.goods[1].pic1);
        for (let i = 0; i < this.goods.length ; i++)
        {
            this.images[i] = this.goods[i].pic1;
        }
        console.log("pics : ",  this.images[0] );
        this.imgs = true;      
    })
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },  
}
</script>