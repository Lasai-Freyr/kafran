<template>
  <div class="home">
    <article class="col-12">
      <div>
        <h2> Agence immobilière région parisienne </h2>
        <h3> un slogan accrocheur ici</h3>
        <button> Acheter </button>
        <button> Vendre </button>
      </div>
    </article>
    <article class="col-10 my-3 mx-auto">
      <h2> Présentation Camille </h2>
      <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante quis lobortis gravida.
        Maecenas sodales vehicula tellus sit amet cursus. Nam aliquam, ex eu condimentum dapibus, turpis nulla commodo leo,
        eget blandit odio nibh quis ligula. Suspendisse in mauris dapibus, scelerisque magna id, eleifend nulla.
        In sagittis arcu ut scelerisque ultricies. Cras ultricies venenatis sem a dapibus. Maecenas in risus lobortis est porta placerat sit amet vel nibh.
        Phasellus condimentum ullamcorper nisi, in fermentum ex tincidunt quis. Fusce a hendrerit eros, ac convallis dolor.
        Suspendisse gravida, eros nec feugiat tincidunt, diam nisi faucibus lectus, varius commodo ligula augue et ante.
        Ut volutpat justo eu turpis varius cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas blandit elit velit, quis facilisis diam venenatis eget. Aliquam tempus risus dui.
      </p>
    </article>
    <article class="col-8 my-3 mx-auto">
      <h2> Prestations </h2>
      <div class="card-deck" >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante quis lobortis gravida.
              Maecenas sodales vehicula tellus sit amet cursus. Nam aliquam, ex eu condimentum dapibus, turpis nulla commodo leo,
              eget blandit odio nibh quis ligula. Suspendisse in mauris dapibus, scelerisque magna id, eleifend nulla.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante quis lobortis gravida.
              Maecenas sodales vehicula tellus sit amet cursus. Nam aliquam, ex eu condimentum dapibus, turpis nulla commodo leo,
              eget blandit odio nibh quis ligula. Suspendisse in mauris dapibus, scelerisque magna id, eleifend nulla.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante quis lobortis gravida.
              Maecenas sodales vehicula tellus sit amet cursus. Nam aliquam, ex eu condimentum dapibus, turpis nulla commodo leo,
              eget blandit odio nibh quis ligula. Suspendisse in mauris dapibus, scelerisque magna id, eleifend nulla.
            </p>
          </div>
        </div>      
      </div>
    </article>
    <article class="col-8 mx-auto my-3" >
      <h2> Nos biens à vendre </h2>
      <div id="" class=" col-8 mx-auto">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="500"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <div>
            
            
              <b-carousel-slide
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              >
              <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="`/images/${good.pic1}`"
                alt="image slot"
              >
              </template>
              </b-carousel-slide>
           
              
          </div>
        </b-carousel>
         <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p>
      </div>
    </article>
   
  </div>
</template>

<script>

import http from '../../http';
export default {
  name: 'Home',
  components: {
    
  },
   data() {
        return {
           goods: [],
            errors: [],
            slide: 0,
            sliding: null
        
        } 
    },
   mounted(){   
    http.get(`/goods`)
    .then(response => {
        this.goods = response.data;
    })
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
}
</script>
