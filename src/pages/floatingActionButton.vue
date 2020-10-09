
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Floating Action Button</h5>
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
      <q-breadcrumbs-el label="Floating Action Button" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        A Floating Action Button (FAB) represents the primary action in a Page. But, it’s not limited to only a single action. 
        It can contain any number of sub-actions too. And more importantly, it can also be used inline in your Pages or Layouts.


        </q-item-label>
      </q-item-section>
    </div>

               <!-- --------------- Action button  Non-Expandable code Start-------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Non Expandable</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="height: 300px" class="shadow-2 rounded-borders">
      <q-header class="bg-black">
        <q-toolbar>
          <q-btn flat round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit,
             quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="accent" />
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
                   <!-- --------------- Action button  Non-Expandable code End-------------------- -->

 <!-- --------------- Action button  Expandable code Start-------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6"> Expandable</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                   <div class="q-px-sm q-py-lg">
    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" @click="onClick" icon="mail" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="mail" />
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
        <q-fab-action color="primary" @click="onClick" icon="mail" />
        <q-fab-action color="accent" @click="onClick" icon="alarm" />
      </q-fab>

      <br>

      <q-fab color="accent" glossy icon="keyboard_arrow_down" direction="down">
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="mail" />
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="alarm" />
      </q-fab>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
                   <!-- --------------- Action button  Non-Expandable code End-------------------- -->



 
  <internalLabel/>
  <externalLabel/>
  <hidingIconAndPadding/>
  <withQpageSticky/>


  </div>
</template>

<script>
import internalLabel from 'components/floatingActionButton/internalLabel.vue';
import externalLabel from 'components/floatingActionButton/externalLabel.vue';
import hidingIconAndPadding from 'components/floatingActionButton/hidingIconAndPadding.vue';
import withQpageSticky from 'components/floatingActionButton/withQpageSticky.vue';


export default {
   components:{
     internalLabel,
     externalLabel,
     hidingIconAndPadding,
     withQpageSticky
   },
    methods: {
    onClick () {
      // console.log('Clicked on a fab action')
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