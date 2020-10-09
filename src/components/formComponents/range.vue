
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Range </h5>
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
      <q-breadcrumbs-el label="Range" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QRange component is a great way to offer the user the selection of a sub-range of values between a minimum and maximum value, with optional steps to select those values. 
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
      Model: {{ standard.min }} to {{ standard.max }} (0 to 50)
    </q-badge>

    <q-range
      v-model="standard"
      :min="0"
      :max="50"
    />
    <q-range
      v-model="standard"
      :min="0"
      :max="50"
      color="green"
    />
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
      Model: {{ standard.min }} to {{ standard.max }} (0 to 50)
    </q-badge>

    <div class="row justify-around">
      <q-range
        v-model="standard"
        :min="0"
        :max="50"
        vertical
        label
      />
      <q-range
        v-model="standard"
        :min="0"
        :max="50"
        color="green"
        vertical
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
      Model: {{ step.min }} to {{ step.max }} (0 to 45, step 5)
    </q-badge>

    <q-range
      v-model="step"
      :min="0"
      :max="45"
      :step="5"
      label
      color="deep-orange"
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
      Model: {{ precision.min }} to {{ precision.max }} (0.1 to 1.5)
    </q-badge>

    <q-range
      v-model="precision"
      :min="0.1"
      :max="1.5"
      :step="0.1"
      color="green"
    />

    <q-badge color="secondary">
      Model: {{ zeroPrecision.min }} to {{ zeroPrecision.max }} (0.1 to 1.5)
    </q-badge>

    <q-range
      v-model="zeroPrecision"
      :min="0.1"
      :max="1.5"
      :step="0"
      color="amber"
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
    <q-badge color="secondary" class="q-mb-lg">
      Model: {{ label.min }} to {{ label.max }} (-20 to 20, step 4)
    </q-badge>

    <q-range
      v-model="label"
      :min="-20"
      :max="20"
      :step="4"
      label
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
    <q-badge color="secondary" class="q-mb-lg">
      Model: {{ label.min }} to {{ label.max }} (-20 to 20, step 4)
    </q-badge>

    <q-range
      v-model="label"
      :min="-20"
      :max="20"
      :step="4"
      label-always
      color="brown"
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
    <q-range
      v-model="model"
      :min="-20"
      :max="20"
      :step="4"
      :left-label-value="'Value: ' + model.min + 'px'"
      :right-label-value="'Value: ' + model.max + 'px'"
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
    <q-badge color="secondary" class="q-mb-lg">
      Model: {{ marker.min }} to {{ marker.max }} (-6 to 10, step 2)
    </q-badge>

    <q-range
      v-model="marker"
      :min="-6"
      :max="10"
      :step="2"
      label
      markers
      color="orange"
    />

    <q-range
      v-model="marker"
      :min="-6"
      :max="10"
      :step="2"
      label
      snap
      markers
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
      Model: {{ getNullLabel(bothNull.min) }} to {{ getNullLabel(bothNull.max) }} (0 to 50, step 1)
    </q-badge>

    <q-range
      v-model="bothNull"
      color="primary"
      :min="0"
      :max="50"
    />

    <q-badge color="secondary" class="q-mb-lg">
      Model: {{ getNullLabel(minNull.min) }} to {{ getNullLabel(minNull.max) }} (0 to 50, step 1)
    </q-badge>

    <q-range
      v-model="minNull"
      color="secondary"
      :min="0"
      :max="50"
    />

    <q-badge color="accent" class="q-mb-lg">
      Model: {{ getNullLabel(maxNull.min) }} to {{ getNullLabel(maxNull.max) }} (0 to 50, step 1)
    </q-badge>

    <q-range
      v-model="maxNull"
      color="accent"
      :min="0"
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
      Model: {{ standard.min }} to {{ standard.max }} (0 to 50)
    </q-badge>

    <q-range
      reverse
      v-model="standard"
      :min="0"
      :max="50"
    />
    <q-range
      reverse
      v-model="standard"
      :min="0"
      :max="50"
      color="green"
    />
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
          <q-icon name="local_atm" />
        </q-item-section>
        <q-item-section>
          <q-range
            v-model="model1"
            :min="0"
            :max="50"
            label
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon name="euro_symbol" />
        </q-item-section>
        <q-item-section>
          <q-range
            v-model="model1"
            :min="0"
            :max="50"
            label
          />
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
      standard: {
        min: 10,
        max: 35,
      },
      //with step
      step: {
        min: 10,
        max: 20
      },
      //floting point
       precision: {
        min: 0.2,
        max: 0.7
      },

      zeroPrecision: {
        min: 0.2,
        max: 0.7
      },
      //with label
       label: {
        min: -12,
        max: 8
      },
      //markers
       marker: {
        min: 6,
        max: 8
      },
      //model
       model: {
        min: -16,
        max: 12
      },
      //null
       bothNull: {
        min: null,
        max: null
      },

      minNull: {
        min: null,
        max: 40
      },

      maxNull: {
        min: 20,
        max: null
      },

      //qitem
       model1: {
        min: 10,
        max: 35
      }
    }
  },

   methods: {
       //null
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