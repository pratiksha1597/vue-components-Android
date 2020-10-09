
<template>

<div >
    <!-- ------------------------heding section for button page start-------------- -->
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Button</h5>
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
      <q-breadcrumbs-el label="Button" />
    </q-breadcrumbs>

   </div>

    <!-- ------------------------heding section for button End-------------- -->

    <!------Explanation about button start--------------------------------------->

 <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
          Quasar has a component called <code>QBtn</code> which is a button with a few extra useful features. For instance, it comes in <code>two shapes</code> : <code>rectangle </code>(default) and <code> round </code>.
      </q-item-label>
      </q-item-section>
   </div>
<!------Explanation about button start--------------------------------------->


 
<!--------------------------- Standard Button Types Start------------------- -->
<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
       <q-card-section>
                <div class="text-h6">Standard Button</div>
                <div class="text-subtitle2">
                  <div class="q-gutter-sm">
                   <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
                  </div>
                </div>
              </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

     
  <!--------------------------- Standard Button Types End------------------- -->

<!--------------------------- custom Button Types Start------------------- -->
<div class="q-pa-md row1 row2">
    <div class="column" >
    <div class="column" >
      <div class="col">
       <q-card class="my-card">
             <q-card-section>
              <div class="text-h6">Custom Color</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
    <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
    <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
    <q-btn outline style="color: goldenrod;" label="Goldenrod" />
    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" />
  </div>
              </div>
            </q-card-section>
    </q-card>
      </div>
    </div>
  </div>

  </div>

  

    <!--------------------------- custom Button Types End------------------- -->

<!--------------------------- with icon Button Types Start------------------- -->



 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">With icon</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
    <br>
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!--------------------------- with icon Standard Button Types End------------------- -->
    <!--------------------------- Round Button Types Start------------------- -->


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Round Button</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-sm">
    <q-btn round color="primary" icon="shopping_cart" />
    <q-btn round color="secondary" icon="navigation" />
    <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
    <q-btn round color="brown-5" icon="directions" />
    <q-btn round color="deep-orange" icon="edit_location" />
    <q-btn round color="purple" glossy icon="local_grocery_store" />
    <q-btn round color="black" icon="my_location" />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

<!--------------------------- Round Button Types End------------------- -->


 
<!--------------------------- Custom content Button Types Start------------------- -->

  
  <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Custom Contentr</div>
              <div class="text-subtitle2">
              <div class=" q-gutter-md">
    <q-btn color="teal">
      <q-icon left size="3em" name="map" />
      <div>Label</div>
    </q-btn>

    <q-btn round>
      <q-avatar size="42px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
      </q-avatar>
    </q-btn>

    <q-btn color="indigo" no-caps>
      Multiline<br>Button
    </q-btn>

    <q-btn color="deep-orange" push>
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">
          Custom<br>Content
        </div>
      </div>
    </q-btn>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

<!--------------------------- Custom Cuntent Button Types end------------------- -->
<!--------------------------- Truncated Label Types Start------------------- -->

   <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Truncated Label</div>
              <div class="text-subtitle2">
                <div class=" q-gutter-sm">
    <q-btn color="primary" style="width: 200px">
      <div class="ellipsis">
        This is some very long text that is expected to be truncated
      </div>
    </q-btn>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!--------------------------- Truncated Label Button Types End------------------- -->

<!--------------------------- Button Types End------------------- -->

<!---------------------------child component---------------------->
     <buttonDesign/>
     <padding/>
    <formSubmition/>  
  
<!------------------------------------------------------------------>

  </div>
</template>

<script>
import buttonDesign from 'components/buttonsType/buttonDesign.vue';
import padding from 'components/buttonsType/padding.vue';
import formSubmition from 'components/buttonsType/formSubmition.vue'


export default {
   components:{
      buttonDesign,
      padding,
      formSubmition
    
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