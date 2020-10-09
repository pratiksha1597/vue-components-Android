
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>video</h5>
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
      <q-breadcrumbs-el label="video" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    Using the QVideo component makes embedding a video like Youtube easy. It also resizes to fit the container by default.
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
                    <div class="q-pa-md">
    <q-video
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic code End --------- --> 
  

  
  
 <!-------------------------------- HTML Markup code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">HTML Markup </div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <div class="q-video">
      <iframe
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- HTML Markup   code End --------- --> 
 

  <!-------------------------------- With Aspect ratio  code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Aspect ratio</div>
                <div class="text-subtitle2">
                    
                   <div class="q-pa-md col ">
    <q-video
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
       :ratio="16/9"
      
    />
  </div>
  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- With Aspect ratio  code End --------- --> 
  

 
 
 

  
 
  
  


  </div>
</template>

<script>

export default {

  
}
  
 
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    
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