
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Spinners</h5>
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
      <q-breadcrumbs-el label="spinners " />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    A Spinner is used to show the user a timely process is currently taking place. It is an important UX feature, which gives the user the feeling the system is continuing to work for longer term activities, like grabbing data from the server or some heavy calculations.
    Installat
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- QSpinner code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">QSpinner</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-spinner
        color="primary"
        size="3em"
      />

      <q-spinner
        color="primary"
        size="3em"
        :thickness="2"
      />

      <q-spinner
        color="primary"
        size="3em"
        :thickness="10"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- QSpinner code End --------- --> 
  

  <!-------------------------------- Other spinners code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Other spinners</div>
                <div class="text-subtitle2">
                        <div class="q-pa-md q-gutter-xs">
    <div class="q-gutter-md row justify-center">
      <div>
        <q-spinner-audio
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerAudio</q-tooltip>
      </div>
      <div>
        <q-spinner-ball
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerBall</q-tooltip>
      </div>
      <div>
        <q-spinner-bars
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerBars</q-tooltip>
      </div>
      <div>
        <q-spinner-comment
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerComment</q-tooltip>
      </div>
      <div>
        <q-spinner-cube
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerCube</q-tooltip>
      </div>
      <div>
        <q-spinner-dots
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerDots</q-tooltip>
      </div>
      <div>
        <q-spinner-facebook
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerFacebook</q-tooltip>
      </div>
      <div>
        <q-spinner-gears
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerGears</q-tooltip>
      </div>
      <div>
        <q-spinner-grid
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerGrid</q-tooltip>
      </div>
      <div>
        <q-spinner-hearts
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerHearts</q-tooltip>
      </div>
      <div>
        <q-spinner-hourglass
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerHourglass</q-tooltip>
      </div>
      <div>
        <q-spinner-infinity
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerInfinity</q-tooltip>
      </div>
      <div>
        <q-spinner-ios
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
      </div>
      <div>
        <q-spinner-oval
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerOval</q-tooltip>
      </div>
      <div>
        <q-spinner-pie
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
      </div>
      <div>
        <q-spinner-puff
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerPuff</q-tooltip>
      </div>
      <div>
        <q-spinner-radio
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerRadio</q-tooltip>
      </div>
      <div>
        <q-spinner-rings
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerRings</q-tooltip>
      </div>
      <div>
        <q-spinner-tail
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerTail</q-tooltip>
      </div>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Other-spinners code End --------- --> 
  
  <!-------------------------------- Coloring code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Coloring</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md q-gutter-xs">
    <div class="q-gutter-md row justify-center" style="font-size: 2em">
      <q-spinner-audio color="secondary" />
      <q-spinner-ball color="red" />
      <q-spinner-bars color="purple" />
      <q-spinner-comment color="deep-purple" />
      <q-spinner-cube color="indigo" />
      <q-spinner-dots color="blue" />
      <q-spinner-facebook color="light-blue" />
      <q-spinner-gears color="cyan" />
      <q-spinner-grid color="teal" />
      <q-spinner-hearts color="green" />
      <q-spinner-hourglass color="light-green" />
      <q-spinner-infinity color="lime" />
      <q-spinner-ios color="yellow" />
      <q-spinner-oval color="amber" />
      <q-spinner-pie color="orange" />
      <q-spinner-puff color="deep-orange" />
      <q-spinner-radio color="brown" />
      <q-spinner-rings color="grey" />
      <q-spinner-tail color="blue-grey" />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Coloring code End --------- --> 

 <!-------------------------------- Size code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Size</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md q-gutter-xs">
    <div class="q-gutter-md row items-center">
      <q-spinner-comment
        color="secondary"
        size="2em"
      />

      <q-spinner-radio
        color="red"
        size="3em"
      />

      <q-spinner-hourglass
        color="purple"
        size="4em"
      />

      <q-spinner-cube
        color="orange"
        size="5.5em"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Size code End --------- --> 
  
  <!-------------------------------- Standard size code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard size</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-md row items-center">
      <q-spinner-cube
        v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
        :key="size"
        :size="size"
        color="primary"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Standard size code End --------- --> 
  
  

  

   



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