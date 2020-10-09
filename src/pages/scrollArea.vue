
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Scroll Area</h5>
     </div>
     <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
   <div style="padding: 10px; font-size: 29px; color: darkgrey;">|
   </div>
     <q-breadcrumbs class="text-brown hiddensection" >
       <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
 <q-breadcrumbs-el  icon="home" />
      <q-breadcrumbs-el label="Components"  />
      <q-breadcrumbs-el label="Scroll Area" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
       The QScrollArea component offers a neat way of customizing the scrollbars by encapsulating your content. 
       Think of it as a DOM element which has overflow: auto,
        but with your own custom styled scrollbar instead of browser’s default one and a few nice features on top.

        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- basic code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                  <div class="q-ma-md">
    <q-scroll-area style="height: 200px; max-width: 300px;">
      <div v-for="n in 100" :key="n" class="q-py-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- basic code End --------- --> 
  

   <!-------------------------------- Styled thumb and bar code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Styled thumb and bar</div>
                <div class="text-subtitle2">
                <div class="q-ma-md">
    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 200px; max-width: 300px;"
    >
      <div v-for="n in 100" :key="n" class="q-pa-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Styled thumb and bar code End --------- --> 
  

  <!-------------------------------- Controlling-scrollbar-visibility start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Controlling scrollbar visibility</div>
                <div class="text-subtitle2">
                   <div class="q-ma-md">
    <div>
      <q-toggle v-model="visible" label="Show scrollbar" />
    </div>

    <q-scroll-area
      :visible="visible"
      style="height: 200px; max-width: 300px;"
    >
      <div v-for="n in 100" :key="n" class="q-py-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Controlling-scrollbar-visibility code End --------- --> 
  

   <!-------------------------------- Delay code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Delay</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-btn-group class="q-mb-md">
      <q-btn color="primary" @click="less">Less</q-btn>
      <q-btn color="secondary" @click="more">More</q-btn>
    </q-btn-group>

    <q-scroll-area
      :delay="1200"
      style="height: 200px; max-width: 300px;"
    >
      <div v-for="n in number" :key="n">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Delay code End --------- --> 
  
    <!-------------------------------- Scroll position code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Scroll position</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="row q-gutter-md q-mb-md">
      <q-btn :label="`Scroll to ${position}px`" color="primary" @click="scroll" />
      <q-btn :label="`Animate to ${position}px`" color="primary" @click="animateScroll" />
    </div>

    <q-scroll-area ref="scrollArea" style="height: 150px; max-width: 300px;">
      <ol>
        <li v-for="n in 1000" :key="n">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </li>
      </ol>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Scroll position code End --------- --> 
  

<!-------------------------------- Horizontal Mode code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Horizontal Mode</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <q-scroll-area
      horizontal
      style="height: 210px; width: 230px;"
      class="bg-grey-1 rounded-borders"
    >
      <div class="row no-wrap">
        <div v-for="n in 10" :key="n" style="width: 150px" class="q-pa-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quae veritatis blanditiis sequi id expedita amet esse aspernatur! Iure, doloribus!
        </div>
      </div>
    </q-scroll-area>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Horizontal Mode code End --------- --> 
  



  </div>
</template>

<script>
export default {
  data () {
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      //controlling scrollbar visibility
      visible: true,

      //Delay
      number: 4,
      //scroll position
      position: 300

    }
  },

  methods: {
      //delay
    less () {
      if (this.number > 1) {
        this.number--
      }
    },

    more () {
        //delay
      this.number++
    },
     scroll () {
         //scroll position
      this.$refs.scrollArea.setScrollPosition(this.position)
      this.position = Math.floor(Math.random() * 1001) * 20
    },

    animateScroll () {
         //scroll position
      this.$refs.scrollArea.setScrollPosition(this.position, 300)
      this.position = Math.floor(Math.random() * 1001) * 20
    }
  }
}
  
 
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
}
#rcorners3 {
  
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.text-h6 {
  /* color: rgb(94 92 92); */
  padding-bottom: 10px;
  padding-left:30px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

</style>