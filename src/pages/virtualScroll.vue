
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Virtual Scroll</h5>
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
      <q-breadcrumbs-el label="Virtual Scroll" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
     The QVirtualScroll component allows you to display only 
     a part of a long list of items and update the visible items as the user scrolls in the container.
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- Basic code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                    <q-virtual-scroll
    style="max-height: 300px;"
    :items="heavyList"
    separator
  >
    <template v-slot="{ item, index }">
      <q-item
        :key="index"
        dense
      >
        <q-item-section>
          <q-item-label>
            #{{ index }} - {{ item.label }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-virtual-scroll>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic code End --------- --> 
  

   <!-------------------------------- Horizontal code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Horizontal</div>
                <div class="text-subtitle2">
                    <q-virtual-scroll
                    style="max-width: 1200px;"
    :items="heavyList"
    virtual-scroll-horizontal
  >
    <template v-slot="{ item, index }">
      <div
        :key="index"
        :class="item.class"
      >
        #{{ index }} - {{ item.label }}
      </div>
    </template>
  </q-virtual-scroll>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Horizontal  code End --------- --> 




 

  
 
  
  
   
  
   
  <differntTemplate/>
  <stickyHeader/>
  <scrollTarget/>
  <scrollToPositions/>
  <!-- <gendralItemforfly/> -->
  
    
  



  </div>
</template>

<script>
import differntTemplate from 'components/virtualScroll/differantTemplate.vue'
 import stickyHeader from 'components/virtualScroll/stickyHeader.vue'
 import scrollTarget from 'components/virtualScroll/scrollTarget.vue'
 import scrollToPositions from 'components/virtualScroll/scrollToPositions.vue'
 import gendralItemforfly from 'components/virtualScroll/gendralItemforfly.vue'
// import selection from 'components/tree/selection.vue'
// import tickedStartagy from 'components/tree/tickedStartagy.vue'

const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
      class: i % 2 === 0 ? 'q-pa-md self-center bg-grey-2 text-black' : 'q-pa-lg bg-black text-white'
  })
}

Object.freeze(heavyList)

export default {
    components:{
        differntTemplate,
        stickyHeader,
        scrollTarget,
        scrollToPositions,
        gendralItemforfly
    },
  data () {
    return {
      heavyList
    }
  }
}
  

  
 
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray; 
     */
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
<style lang="sass">
.thead-custom-sticky tr > *,
.tfoot-custom-sticky tr > *
  position: sticky
  opacity: 1
  z-index: 1
  background-color: black
  color: white

.thead-custom-sticky tr:last-child > *
  top: 0

.tfoot-custom-sticky tr:first-child > *
  bottom: 0
</style>