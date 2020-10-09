
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Separator</h5>
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
      <q-breadcrumbs-el label="Separator" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
       The QSeparator component is used to separate sections of text, other components, etc… It creates a colored line across the width of the parent. It can be horizontal or vertical.


        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- Horizontal code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Horizontal</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn label="Share" color="primary" flat />
          <q-btn label="Comment" color="secondary" flat />
        </q-card-actions>
      </q-card>

      <q-list class="bg-grey-10 text-white shadow-2 rounded-borders" >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar6.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Jane</q-item-section>
        </q-item>

        <q-separator dark />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Lily</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Mary</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Horizontal code End --------- --> 
  

   <!-------------------------------- Horizontal With insert code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Horizontal With insert</div>
                <div class="text-subtitle2">
                
                    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </q-card-section>
      </q-card>

      <q-list class="shadow-2 rounded-borders" >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar6.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Jane</q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Lily</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Mary</q-item-section>
        </q-item>
      </q-list>

      <q-list class="shadow-2 rounded-borders" >
        <q-item>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
          <q-item-section>Mountains</q-item-section>
        </q-item>

        <q-separator inset="item-thumbnail" />

        <q-item>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/parallax1.jpg">
          </q-item-section>
          <q-item-section>Venice</q-item-section>
        </q-item>

        <q-item>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">
          </q-item-section>
          <q-item-section>The Bridge</q-item-section>
        </q-item>
      </q-list>

      <q-list class="bg-grey-10 text-white shadow-2 rounded-borders" >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar6.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Jane</q-item-section>
        </q-item>

        <q-separator inset dark />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Lily</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Mary</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Horizontal With insert code End --------- --> 
  

  <!-------------------------------- vartical code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">vartical</div>
                <div class="text-subtitle2">
                 
                 <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-toolbar class="bg-grey-3 shadow-2 rounded-borders">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />

        <q-separator vertical inset />

        <q-btn stretch flat label="Link" />

        <q-space />

        <q-btn stretch flat label="Link" />

        <q-separator vertical />

        <q-btn stretch flat label="Link" />

        <q-separator vertical />

        <q-btn stretch flat label="Link" />
      </q-toolbar>

      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />

        <q-separator dark vertical inset />

        <q-btn stretch flat label="Link" />

        <q-space />

        <q-btn stretch flat label="Link" />

        <q-separator dark vertical />

        <q-btn stretch flat label="Link" />

        <q-separator dark vertical />

        <q-btn stretch flat label="Link" />
      </q-toolbar>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- vartical code End --------- --> 
  

   <!-------------------------------- custom colored code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom colored</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-list class="bg-grey-10 text-white shadow-2 rounded-borders" style="max-width: 250px; width: 100%;">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>

      <q-separator color="orange" inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Lily</q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Mary</q-item-section>
      </q-item>
    </q-list>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom colored End --------- --> 
  
    
  



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