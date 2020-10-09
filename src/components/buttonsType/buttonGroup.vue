
<template>

<div >
  
 
<!-- ------------------------heding section for Button group page start-------------- -->
    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Button Group</h5>
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
      <q-breadcrumbs-el label="Button Group" />
    </q-breadcrumbs>

   </div>

    <!-- ------------------------heding section for button End-------------- -->

 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Button Group</div>
              <div class="text-subtitle2">
                <div class=" q-gutter-md ">
    <q-btn-group push>
      <q-btn push label="First" icon="timeline" />
      <q-btn push label="Second" icon="visibility" />
      <q-btn push label="Third" icon="update" />
    </q-btn-group>

    <q-btn-group push>
      <q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
      <q-btn color="amber" glossy text-color="black" push label="Second" />
      <q-btn color="orange" glossy text-color="black" push label="Third" />
    </q-btn-group>

    <q-btn-group outline>
      <q-btn outline color="brown" label="First" />
      <q-btn outline color="brown" label="Second" icon-right="watch_later" />
      <q-btn outline color="brown" label="Third" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="secondary" glossy label="First" />
      <q-btn color="secondary" glossy label="Second" />
      <q-btn color="secondary" glossy label="Third" />
      <q-btn color="secondary" glossy label="Fourth" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="accent" icon="timeline" />
      <q-btn color="accent" icon="visibility" />
      <q-btn color="accent" icon="update" />
    </q-btn-group>

    <q-btn-group rounded>
      <q-btn color="amber" rounded glossy icon="timeline" />
      <q-btn color="amber" rounded glossy icon="visibility" />
      <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
    </q-btn-group>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>


 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Spread Horizontally</div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
    <q-btn-group spread>
      <q-btn color="purple" label="First" icon="timeline" />
      <q-btn color="purple" label="Second" icon="visibility" />
    </q-btn-group>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>



 <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">With QBtnDropdown</div>
              <div class="text-subtitle2">
              <div class="q-gutter-sm">
    <q-btn-group rounded>
      <q-btn rounded color="primary" label="One" />

      <q-btn rounded color="primary" label="Two" />

      <q-btn-dropdown auto-close rounded color="primary" label="Three" split>
        <!-- dropdown content goes here -->
        <q-list padding style="width: 250px">
          <q-item clickable>
            <q-item-section avatar>
              <q-avatar icon="folder" color="purple" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-avatar icon="folder" color="purple" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Videos</q-item-label>
              <q-item-label caption>London</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-separator inset />
          <q-item-label header>Files</q-item-label>

          <q-item clickable>
            <q-item-section avatar>
              <q-avatar icon="assignment" color="teal" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>London</q-item-label>
              <q-item-label caption>March 1st, 2018</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-avatar icon="assignment" color="teal" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Paris</q-item-label>
              <q-item-label caption>January 22nd, 2017</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-btn-group>
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
 
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    color:dimgray; 
    
}
#rcorners3 {
  
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.text-h6 {
  color: rgb(94 92 92);
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