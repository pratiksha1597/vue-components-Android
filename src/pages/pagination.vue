
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Pagination</h5>
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
      <q-breadcrumbs-el label="pagination" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         The QPagination component is available for whenever a pagination system is required. It offers the user a simple UI for moving between items or pages.
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------- standared code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standared</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- standared code End------------ -->
 

  <!-------------------------- With-icon-replacement code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With icon replacement</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
      :direction-links="true"
      :boundary-links="true"
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-icon-replacement code End------------ -->
 
 <!-------------------------- With-input-color code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With input color</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
      input
      input-class="text-orange-10"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-input-color code End------------ -->
 

 <!-------------------------- Maximum-pages-shown code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Maximum pages shown</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="black"
      :max="10"
      :max-pages="6"
      :boundary-numbers="false"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Maximum-pages-shown code End------------ -->
 

<!-------------------------- Removing-ellipses code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Removing  ellipsesr</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="teal"
      :max="10"
      :max-pages="5"
      :ellipses="false"
      :boundary-numbers="false"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Removing-ellipses code End------------ -->
 

<!-------------------------- With-boundary-numbers code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Boundary Numbers</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="purple"
      :max="10"
      :max-pages="6"
      :boundary-numbers="true"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-boundary-numbers code End------------ -->
 

<!-------------------------- With-boundary-links code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With-boundary-links</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="deep-orange"
      :max="5"
      :boundary-links="true"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-boundary-links code End------------ -->
 

<!-------------------------- With-direction-links code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With direction links</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
      :direction-links="true"
    >
    </q-pagination>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- With-direction-links code End------------ -->
 



  

  </div>
</template>

<script>


export default {
   data () {
    return {
      current: 3
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