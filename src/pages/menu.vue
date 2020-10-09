
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Markup Table</h5>
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
      <q-breadcrumbs-el label="Markup Table" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The QMarkupTable is a way for you to simply wrap a native <code>table tag</code> in order to make it look like a Material Design table
        </q-item-label>
      </q-item-section>
    </div>

    <!----------------------- basic  code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="secondary" label="Auto-Close Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            
            <q-separator />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <div
        class="inline bg-amber rounded-borders cursor-pointer"
        style="max-width: 300px"
      >
        <div class="fit flex flex-center text-center non-selectable q-pa-md">
          I am groot!<br>(Click me! Using touch-position)
        </div>

        <q-menu touch-position>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Branches</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Leaves</q-item-section>
            </q-item>
            
          </q-list>
        </q-menu>
      </div>

    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- basic  code End------------------- -->


     <!----------------------- idea for content code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Idea for Content</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-btn color="purple" label="Account Settings">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- idea for content code End------------------- -->
 
        <!----------------------- Toggel  Through v-model code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Toggel Through v-model</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" @click="showing = true" label="Show"/>
      <q-btn color="primary" @click="showing = false" label="Hide"/>
    </div>

    <div
      style="width: 200px; height: 70px;"
      class="bg-purple text-white rounded-borders row flex-center q-mt-md"
    >
      Click me

      <q-menu v-model="showing">
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>History</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- Toggel  Through v-model code End------------------- -->
 
 
  <subMenu/>
  <sizeAndStyling/>
  <presistentAndTransition/>


  </div>
</template>

<script>
import subMenu from 'components/menu/subMenu.vue';
import sizeAndStyling from 'components/menu/sizeAndStyling.vue';
import presistentAndTransition from 'components/menu/presistentAndTransition.vue';

export default {
    components:{
        subMenu,
        sizeAndStyling,
        presistentAndTransition
    },
  data () {
    return {
      mobileData: true,
      bluetooth: false,

      //toggel

      showing: false
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