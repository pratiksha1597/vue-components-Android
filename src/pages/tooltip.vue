
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Tooltip</h5>
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
      <q-breadcrumbs-el label="Tooltip" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
      The QTooltip component is to be used when you want to offer the user more information about a certain area in your App.
       When hovering the mouse over the target element (or quickly tapping on mobile platforms), the tooltip will appear.
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
    <div class="q-gutter-md">

      <q-btn label="Hover me" color="primary">
        <q-tooltip>
          Some text as content of Tooltip
        </q-tooltip>
      </q-btn>

      <div
        class="inline bg-amber rounded-borders cursor-pointer"
        style="max-width: 300px"
      >
        <div class="fit flex flex-center text-center non-selectable q-pa-md">
          I am groot!<br>(Hover me!)
        </div>

        <q-tooltip>
          I am groot!
        </q-tooltip>
      </div>

    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic code End --------- --> 
  

   <!-------------------------------- Toggle through  v-model code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Toggle through  v-model</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" @click="showing = true" label="Show"/>
      <q-btn color="primary" @click="showing = false" label="Hide"/>
    </div>

    <div
      style="width: 200px; height: 70px;"
      class="bg-purple text-white rounded-borders row flex-center q-mt-md"
    >
      Hover here or click buttons
      <q-tooltip v-model="showing">Tooltip text</q-tooltip>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Toggle through  v-model code End --------- --> 
  

  <!-------------------------------- customize code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">customize</div>
                <div class="text-subtitle2">
                 
                <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary">
        Hover
        <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary">
        Over
        <q-tooltip content-class="bg-red" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary">
        These
        <q-tooltip content-class="bg-purple" content-style="font-size: 16px" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary">
        Buttons
        <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
      </q-btn>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- customize code End --------- --> 
  

   <!-------------------------------- custom delay(1 second) code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom delay(1 second)</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div
      style="width: 200px; height: 70px;"
      class="bg-secondary text-white rounded-borders non-selectable row flex-center"
    >
      One second delay
      <q-tooltip :delay="1000" :offset="[0, 10]">Quasar Rulz!</q-tooltip>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom delay(1 second) code End --------- --> 

 <!-------------------------------- With offset code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With offset</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="indigo">
        Hover
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>top</em>
          (<q-icon name="keyboard_arrow_up"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="red">
        Over
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>right</em>
          (<q-icon name="keyboard_arrow_right"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="purple">
        These
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>left</em>
          (<q-icon name="keyboard_arrow_left"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="amber">
        Buttons
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>bottom</em>
          (<q-icon name="keyboard_arrow_down"/>)
        </q-tooltip>
      </q-btn>
    </div>
  </div>
                 
                                 
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- With offset code End --------- --> 
  
  <!-------------------------------- custom Transition code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom Transition</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-btn color="primary" label="Flip">
        <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary" label="Scale Menu">
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary" label="Rotate">
        <q-tooltip
          transition-show="rotate"
          transition-hide="rotate"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom Transition code End --------- --> 


 <!-------------------------------- Reusable code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Reusable(target)</div>
                <div class="text-subtitle2">
                     <div class="q-pa-md q-gutter-md">
    <div class="row justify-center">
      <div class="row items-center q-gutter-x-sm">
        <q-radio v-model="targetEl" :val="false" label="false (no target whatsoever)" />
        <q-radio v-model="targetEl" :val="true" label="true (original parent)" />
        <q-radio v-model="targetEl" val="#target-img-1" label="#target-img-1" />
        <q-radio v-model="targetEl" val="#target-img-2" label="#target-img-2" />
        <q-radio v-model="targetEl" val="#bogus" label="#bogus" />
      </div>
    </div>
    <div class="row justify-center">
      <q-img src="https://cdn.quasar.dev/img/material.png" id="target-img-1" style="height: 100px">
        <div class="absolute-bottom-right" style="border-top-left-radius: 5px">
          #target-img-1
        </div>
      </q-img>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" id="target-img-2" style="height: 100px">
        <div class="absolute-bottom-right" style="border-top-left-radius: 5px">
          #target-img-2
        </div>
      </q-img>
      <q-img src="https://cdn.quasar.dev/img/blueish.jpg" style="height: 100px">
        <div class="absolute-bottom-right" style="border-top-left-radius: 5px">
          Original parent
        </div>
        <q-tooltip
          :target="targetEl"
          anchor="center middle"
          self="center middle"
          content-class="bg-black"
        >Quasar Rulz!</q-tooltip>
      </q-img>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Reusable code End --------- --> 
  
  
  
  
  
    
  



  </div>
</template>

<script>

export default {
  data () {
    return {
      showing: false,
      targetEl: '#target-img-1'
    }
  }
  
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