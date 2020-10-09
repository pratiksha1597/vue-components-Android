
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Timeline</h5>
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
      <q-breadcrumbs-el label="Timeline" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
      The QTimeline component displays a list of events in chronological order. 
      It is typically a graphic design showing a long bar labelled with dates alongside itself and usually events. 
      Timelines can use any time scale, depending on the subject and data.

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
                    <q-scroll-area style="height: 500px; ">
                  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        Timeline heading
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
         {{Lorem}}   </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
      >
        <div>
         {{Lorem}}   </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        November, 2017
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      >
        <div>
          {{Lorem}}   </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
         {{Lorem}}
                 </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
      >
        <div>
         {{Lorem}}        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
         {{Lorem}}       </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
           {{Lorem}}          </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
                    </q-scroll-area>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Basic code End --------- --> 
  

   <!-------------------------------- Using Props only code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Using Props only</div>
                <div class="text-subtitle2">
                    <q-scroll-area style="height: 500px; ">
                <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading body="Timeline heading" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
        :body="body"
      />

      <q-timeline-entry heading body="November, 2017" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />
    </q-timeline>
  </div>
                    </q-scroll-area>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Using Props only  code End --------- --> 
  

  <!-------------------------------- Using Slots Only start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Using Slots only</div>
                <div class="text-subtitle2">
                     <q-scroll-area style="height: 500px; ">
                    <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        Timeline heading
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
         {{Lorem}}
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete">
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 21, 1986
        </template>

        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        November, 2017
      </q-timeline-entry>

      <q-timeline-entry avatar="https://cdn.quasar.dev/img/avatar5.jpg">
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          {{Lorem}}
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        color="orange"
        icon="done_all"
      >
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
                     </q-scroll-area>    
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- coloring code End --------- --> 
  

   <!-------------------------------- layouts and side selection code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">layouts and side selection</div>
                <div class="text-subtitle2">
                     <q-scroll-area style="height: 500px; ">
                  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-sm">
      <q-option-group
        type="radio"
        dense
        v-model="layout"
        :options="[
          { label: 'Dense layout', value: 'dense' },
          { label: 'Comfortable layout', value: 'comfortable' },
          { label: 'Loose layout', value: 'loose' }
        ]"
      />
      <q-option-group
        type="radio"
        dense
        v-model="side"
        :disable="layout === 'loose'"
        :options="[
          { label: 'Content on right', value: 'right' },
          { label: 'Content on left', value: 'left' }
        ]"
      />
    </div>

    <q-timeline :layout="layout" :side="side" color="secondary">
      <q-timeline-entry heading>Timeline heading</q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        side="right"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>November, 2017</q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
                     </q-scroll-area>  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- layouts and side selection code End --------- --> 

 <!-------------------------------- Responsive code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Responsive</div>
                <div class="text-subtitle2">
                    <q-scroll-area style="height: 500px; ">
                  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Timeline heading
        <br>
        ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        side="right"
        icon="delete"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>November, 2017</q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          {{Lorem}} 
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
                    </q-scroll-area>
                                 
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom transition examples code End --------- --> 
  
  
  
  
  
    
  



  </div>
</template>

<script>

export default {
  data () {
    return {
     Lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     layout: 'dense',
      side: 'right'
       
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
  
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