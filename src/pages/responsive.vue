
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Responsive</h5>
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
      <q-breadcrumbs-el label="Responsive" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        QResponsive is a component which forces the content to maintain an aspect ratio based on its width.


        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- basic Responsive code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-responsive :ratio="16/9">
        <div class="rounded-borders bg-primary text-white flex flex-center">
          Ratio 16:9
        </div>
      </q-responsive>

      <q-responsive :ratio="1">
        <div class="rounded-borders bg-primary text-white flex flex-center">
          Ratio 1:1
        </div>
      </q-responsive>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- basic Responsive code End --------- --> 
  
  

   

  <!-------------------------------- QCard code start --------- -->
    <!-- <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">QCard</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="16/9" class="col">
        <q-card class="column">
          <q-img class="col" src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div>Ratio 16:9</div>
          </q-card-section>
        </q-card>
      </q-responsive>

      <q-responsive :ratio="1" class="col">
        <q-card class="column">
          <q-img class="col" src="https://cdn.quasar.dev/img/parallax1.jpg" />

          <q-card-section>
            <div>Ratio 1:1</div>
          </q-card-section>
        </q-card>
      </q-responsive>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div> -->
     
 <!-------------------------------- QCard code End --------- --> 
  

   <!-------------------------------- QTable code start --------- -->
    <!-- <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">QTable</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-responsive :ratio="16/9">
      <q-table
        class="my-sticky-table"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="48"
        row-key="index"
        title="Table aspect ratio: 4/3"
        :data="data"
        :columns="columns"
      />
    </q-responsive>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div> -->
     
 <!-------------------------------- QTable code End --------- --> 
  

  </div>
</template>
<script>
export default {
  // components:{
  //   flexRow
  // }
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