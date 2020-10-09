
<template>
  <div>
    <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Knob</h5>
      </div>
      <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
      <div style="padding: 10px; font-size: 29px; color: darkgrey">|</div>
      <q-breadcrumbs class="text-brown hiddensection">
        <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Knob" />
      </q-breadcrumbs>
    </div>
    <!------------------- Tital and Path(breadcrumbs) code End ----------->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
         The QKnob component is used to take a number input from the user through mouse/touch panning. 
         It is based on QCircularProgress and inherits all its properties and behavior.
        </q-item-label>
      </q-item-section>
    </div>
            <!-- ------------------- basic knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                   <div class="q-pa-md flex flex-center">
    <q-knob
      v-model="value"
      size="50px"
      color="orange"
      class="q-ma-md"
    />

    <q-knob
      v-model="value"
      size="90px"
      :thickness="0.2"
      color="purple-3"
      center-color="purple"
      track-color="purple-1"
      class="q-ma-md"
    />

    <q-knob
      v-model="value"
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="light-blue"
      class="q-ma-md"
    />

    <q-knob
      v-model="value"
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      v-model="value"
      size="75px"
      :thickness="0.6"
      color="orange"
      center-color="orange-10"
      class="q-ma-md"
    />

    <q-knob
      v-model="value"
      size="40px"
      :thickness="0.4"
      color="orange"
      track-color="orange-3"
      class="q-ma-md"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- basic knob code start--------------- -->


             <!-- ------------------- show value knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">show value</div>
              <div class="text-subtitle2">
                   <div class="q-pa-md flex flex-center">
    <q-knob
      show-value
      class="text-light-blue q-ma-md"
      v-model="value"
      size="50px"
      color="light-blue"
    />

    <q-knob
      show-value
      class="text-white q-ma-md"
      v-model="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
    >
      <q-icon name="volume_up" />
    </q-knob>

    <q-knob
      show-value
      font-size="12px"
      v-model="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-knob>

    <q-knob
      show-value
      font-size="16px"
      class="text-red q-ma-md"
      v-model="value"
      size="60px"
      :thickness="0.05"
      color="red"
      track-color="grey-3"
    >
      <q-icon name="volume_up" class="q-mr-xs" />
      {{ value }}
    </q-knob>

    <q-knob
      show-value
      font-size="10px"
      class="q-ma-md"
      v-model="value"
      size="80px"
      :thickness="0.25"
      color="primary"
      track-color="grey-3"
    >
      <q-avatar size="60px">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>
    </q-knob>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- show value knob code start--------------- -->


             <!-- ------------------- min-max knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Min-Max</div>
              <div class="text-subtitle2">
                  <div class="q-pa-md flex flex-center">
    <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :min="55"
      :max="90"
      v-model="value2"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :min="40"
      :max="110"
      v-model="value3"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :min="20"
      :max="70"
      v-model="value4"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      v-model="value5"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- min-max knob code start--------------- -->



             <!-- ------------------- custom step knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">custom step</div>
              <div class="text-subtitle2">
                  <div class="q-pa-md flex flex-center">
    <q-knob
      :step="10"
      v-model="value"
      show-value
      size="90px"
      :thickness="0.22"
      color="lime"
      track-color="lime-3"
      class="text-lime q-ma-md"
    />

    <q-knob
      :step="25"
      v-model="value"
      show-value
      size="90px"
      :thickness="0.22"
      color="orange"
      track-color="orange-3"
      class="text-orange q-ma-md"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- custom step knob code start--------------- -->

 <!-- ------------------- offset angle knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Offset Angle</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md flex flex-center">
    <q-knob
      v-model="value"
      size="70px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :angle="90"
      v-model="value"
      size="70px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :angle="180"
      v-model="value"
      size="70px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :angle="270"
      v-model="value"
      size="70px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-knob
      :angle="52"
      v-model="value"
      size="70px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- offset angle knob code start--------------- -->



             <!-- ------------------- Disable and Readonly knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Disable and Readonly</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md flex flex-center">
    <q-knob
      disable
      v-model="value"
      show-value
      size="90px"
      :thickness="0.22"
      color="primary"
      track-color="grey-3"
      class="text-primary q-ma-md"
    />

    <q-knob
      readonly
      v-model="value"
      show-value
      size="90px"
      :thickness="0.22"
      color="orange"
      track-color="orange-3"
      class="text-orange q-ma-md"
    />
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- Disable and Readonly knob code start--------------- -->

            <!-- -------------------Native form Submit knob code start--------------- -->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Native form Submit</div>
              <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-knob
        name="volume"
        class="text-white q-ma-md"
        v-model="volume"
        size="90px"
        :thickness="0.2"
        color="orange"
        center-color="grey-8"
        track-color="transparent"
        show-value
      >
        <q-icon name="volume_up" />
      </q-knob>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card flat bordered class="q-mt-md bg-grey-2" v-if="submitResult.length > 0">
      <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-sm items-center">
        <div
          v-for="(item, index) in submitResult"
          :key="index"
          class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
        >{{ item.name }} = {{ item.value }}</div>
      </q-card-section>
    </q-card>
  </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
            
            <!-- ------------------- Native form Submitknob code start--------------- -->



  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 71,
      //max-min
      value1: 6,
      value2: 70,
      value3: 102,
      value4: 35,
      value5: 95, 

      //form submit
       volume: 60,
      submitResult: []
    }
  },
  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []

      for (const [ name, value ] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }

      this.submitResult = submitResult
    }
  }
}
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  /* color: dimgray; */
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
  padding-left: 30px;
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