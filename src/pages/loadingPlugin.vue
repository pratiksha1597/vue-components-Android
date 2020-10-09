
<template>

<div >
  

 <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Loading Plugin</h5>
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
      <q-breadcrumbs-el label="Quasar Plugin"  />
      <q-breadcrumbs-el label="Loading Plugin" />
    </q-breadcrumbs>

   </div>


   <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
         Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to
          inform the user that a background operation is taking place. 
      </q-item-label>
      </q-item-section>
   </div>
 
    <!------------------- Defult code start----------- -->

  <div class="q-pa-md row1">
    <div class="column" style="height: 150px">
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" >Defult</div>
        <div class="text-subtitle2">

     <div class="q-pa-md">
    <q-btn color="purple" @click="showLoading" label="Show Loading" />
  </div>
        </div>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
  </div>

   <!------------------- Defult code End----------- -->


   
<withMessage/>
<withMessageSenitize/>
<customize/>
<showAndChange/>

  
  </div>
  
</template>

<script>
import { Dialog } from 'quasar'
import withMessage from 'components/loadingPlugin/withMessage.vue';
import withMessageSenitize from 'components/loadingPlugin/withMessageSenitize.vue';
import customize from 'components/loadingPlugin/customize.vue';
import showAndChange from 'components/loadingPlugin/showAndChange.vue';

 
export default {
components:{
withMessage,
withMessageSenitize,
customize,
showAndChange,

},
 methods: {
    showLoading () {
      this.$q.loading.show()

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
    }
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
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
  /* color: rgb(94 92 92); */
  padding-bottom:10px;
}

.row1{
  padding-left: 30px;
  padding-right: 30px;
}


</style>