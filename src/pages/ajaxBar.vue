
<template>

<div >
    <!------------------- Tital and Path(breadcrumbs) code Start ----------->

 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Ajax Bar</h5>
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
      <q-breadcrumbs-el label="Ajax Bar" />
    </q-breadcrumbs>

   </div>
  <!------------------- Tital and Path(breadcrumbs) code End ----------->

  

   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
           <code>QAjaxBar</code> is a component which displays a loading bar whenever an Ajax call  is in progress. It can be manually triggered as well.
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- Basic ajaxbar  code Start ----------->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Basic</div>
        <div class="text-subtitle2">

    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn  color="primary" label="Trigger" @click="trigger" />
        </div>
        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

    <!------------------- Basic ajaxbar  code End ----------->
  </div>
  
</template>

<script>
export default {
   methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;     */
}

#rcorners3{
  padding-left: 30px;
  padding-right: 30px;
    font-size: 20px;
    color: rgb(148, 146, 146);
}
code{
  background: #eee;
    padding: .1rem .3rem;
    border-radius: 3px;
}

.text-h6{
  color: rgb(94 92 92);
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>