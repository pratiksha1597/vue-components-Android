
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Observer</h5>
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
      <q-breadcrumbs-el label="Observer" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         QResizeObserver is a Quasar component that emits a resize event whenever the wrapping DOM element / component (defined as direct parent of QResizeObserver) changes its size (width and/or height).
        </q-item-label>
      </q-item-section>
    </div>
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Resize Observer</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md q-gutter-md">
    <q-btn color="primary" push @click="setRandomSize" label="Set Random Size" />

    <div :style="style" class="container bg-amber rounded-borders glossy">
      <!--
        we listen for size changes on this next
        <div>, so we place the observer as direct child:
      -->
      <q-resize-observer @resize="onResize" />
    </div>

    <div class="q-gutter-sm">
      Reported:
      <q-badge>width: {{ report.width }}</q-badge>
      <q-badge>height: {{ report.height }}</q-badge>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 
  

  </div>
</template>

<script>


export default {
   data () {
    return {
      style: { width: '200px', height: '200px' },
      report: ''
    }
  },

  methods: {
    onResize (size) {
      this.report = size
      // {
      //   width: 20 // width of container (in px)
      //   height: 50 // height of container (in px)
      // }
    },

    setRandomSize () {
      this.style = {
        width: Math.floor(100 + Math.random() * 200) + 'px',
        height: Math.floor(100 + Math.random() * 200) + 'px'
      }
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