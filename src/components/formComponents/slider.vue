
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Slider </h5>
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
      <q-breadcrumbs-el label="Slider" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QSlider is a great way for the user to specify a number value between a minimum and maximum value, with optional steps between valid values.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Standard code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Standard</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ standard }} (0 to 50)
    </q-badge>

    <q-slider v-model="standard" :min="0" :max="50"/>
    <q-slider v-model="standard" :min="0" :max="50" color="green"/>
  </div>    
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Standard code End------------ -->
 
 <!----------------------- Vertical Orientation code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Vertical Orientation</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ standard }} (0 to 50)
    </q-badge>

    <div class="row justify-around">
      <q-slider
        v-model="standard"
        :min="0"
        :max="50"
        vertical
        label
      />

      <q-slider
        v-model="standard"
        :min="0"
        :max="50"
        color="green"
        vertical
        reverse
        label-always
      />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Vertical Orientation  code End------------ -->
 
<!----------------------- with step code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">with Step</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ basicModel }} (0 to 100, step 50)
    </q-badge>
    <q-slider
      v-model="basicModel"
      :step="50"
    />
    <q-badge color="secondary">
      Model: {{ redModel }} (0 to 100, step 25)
    </q-badge>
    <q-slider
      v-model="redModel"
      color="red"
      :step="25"
    />
    <q-badge color="secondary">
      Model: {{ greenModel }} (0 to 5, step 1)
    </q-badge>
    <q-slider
      v-model="greenModel"
      color="green"
      :min="0"
      :step="1"
      :max="5"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
   
    </div>
      <!----------------------- with step code End------------ -->
 

 <!----------------------- Floationg point code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Floating Point</div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ smallStep }} (0.1 to 1.5, step 0.1)
    </q-badge>

    <q-slider
      v-model="smallStep"
      :min="0.1"
      :max="1.5"
      :step="0.1"
    />

    <q-badge color="secondary">
      Model: {{ xsmallStep }} (0.1 to 1, step 0.05)
    </q-badge>

    <q-slider
      v-model="xsmallStep"
      :min="0.1"
      :max="1"
      :step="0.05"
    />

    <q-badge color="secondary">
      Model: {{ zeroStep }} (0.0 to 10.5, step 0)
    </q-badge>

    <q-slider
      v-model="zeroStep"
      :min="0.0"
      :max="10.5"
      :step="0"
      color="red"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Floating Point code End------------ -->
 
 <!----------------------- with label code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With label </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      color="light-green"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- with label   code End------------ -->

      <!----------------------- Always display label code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Always display label </div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      label-always
      color="light-green"
    />

    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      label-always
      color="red"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Always display label  code End------------ -->
 

     
 

  <!----------------------- Long Label  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Long Label </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      :label-value="'Value: ' + value + 'px'"
      label-always
      color="purple"
    />
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Long Label code End------------ -->
 
   
   
  <!----------------------- Markers  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Markers</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                  <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ basicModel }} (0 to 10)
    </q-badge>
    <q-slider
      v-model="basicModel"
      markers
      :min="0"
      :max="10"
    />

    <q-badge color="secondary">
      Model: {{ greenModel }} (0 to 10)
    </q-badge>
    <q-slider
      v-model="greenModel"
      color="green"
      markers
      snap
      :min="0"
      :max="10"
    />
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Markers code End------------ -->
 
   <!----------------------- Null value  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Null Value</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-md">
    <q-badge color="primary" class="q-mb-lg">
      Model: {{ getNullLabel(basicModel) }} (step 1)
    </q-badge>

    <q-slider
      v-model="basicModel"
    />

    <q-badge color="secondary" class="q-mb-lg">
      Model: {{ getNullLabel(limitModel) }} (20 to 50, step 1)
    </q-badge>

    <q-slider
      v-model="limitModel"
      color="secondary"
      :min="20"
      :max="50"
    />
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Null value code End------------ -->
 
    <!----------------------- Reverse value  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Reverse</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
               <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ standard }} (0 to 50)
    </q-badge>

    <q-slider reverse v-model="standard" :min="0" :max="50"/>
    <q-slider reverse v-model="standard" :min="0" :max="50" color="green"/>
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Reverse value code End------------ -->
 
  <!----------------------- with item code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With QItem</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
               <div class="q-pa-md">
    <q-list dense>
      <q-item>
        <q-item-section avatar>
          <q-icon color="teal" name="volume_up" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="10"
            label
            color="teal"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="deep-orange" name="brightness_medium" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="brightness"
            :min="0"
            :max="10"
            label
            color="deep-orange"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="mic" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="mic"
            :min="0"
            :max="50"
            label
          />
        </q-item-section>
      </q-item>

      <q-separator inset spaced />

      <q-item>
        <q-item-section side>
          <q-icon name="volume_down" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="10"
            label
          />
        </q-item-section>
        <q-item-section side>
          <q-icon name="volume_up" />
        </q-item-section>
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
      <!----------------------- Null value code End------------ -->
 
   
   

  </div>
</template>

<script>


export default {
    data () {
    return {
      standard: 2,
      standard1: 10,
      //with step
      basicModel: 50,
      redModel: 25,
      greenModel: 2,
      //floating point
      smallStep: 0.3,
      xsmallStep: 0.530,
      zeroStep: 0.5,

      //with label
      value: 0,

      //null value
      basicModel: null,
      limitModel: null,
      //qitem
      volume: 6,
      brightness: 3,
      mic: 8
    }
  },
  methods: {
    getNullLabel (val) {
      return val === null ? 'null' : val
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