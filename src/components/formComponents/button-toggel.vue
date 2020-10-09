
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5> Button Toggel</h5>
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
      <q-breadcrumbs-el label="Button Toggel" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QBtnToggle component is another basic element for user input, similar to QRadio but with buttons. You can use this to supply a way for the user to pick an option from multiple choices.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Basic code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                     <div class="q-pa-md">
    <q-btn-toggle
      v-model="model"
      toggle-color="primary"
      :options="[
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'}
      ]"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Basic code End------------ -->
 
 <!----------------------- Some Design Example code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Some Design Example</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md q-gutter-md">
    <div>
      <q-btn-toggle
        v-model="model1"
        push
        glossy
        toggle-color="primary"
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />
    </div>

    <div>
      <q-btn-toggle
        v-model="model1"
        toggle-color="primary"
        flat
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />
    </div>

    <div>
      <q-btn-toggle
        v-model="model1"
        color="brown"
        text-color="white"
        toggle-color="orange"
        toggle-text-color="black"
        rounded
        unelevated
        glossy
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'},
          {label: 'Four', value: 'four'}
        ]"
      />
    </div>

    <div>
      <q-btn-toggle
        v-model="model1"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Option 1', value: 'one'},
          {label: 'Option 2', value: 'two'}
        ]"
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
      <!----------------------- Some Design Example  code End------------ -->
 
<!----------------------- Spread horizontally code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Spread horizontally</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-btn-toggle
        v-model="model3"
        spread
        no-caps
        toggle-color="purple"
        color="white"
        text-color="black"
        :options="[
          {label: 'Option 1', value: 'one'},
          {label: 'Option 2', value: 'two'}
        ]"
      />

      <q-btn-toggle
        v-model="secondModel"
        spread
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Option 1', value: 'one'},
          {label: 'Option 2', value: 'two'}
        ]"
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
      <!----------------------- Spread horizontally code End------------ -->
 

 <!----------------------- Custom button contents code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom button contents</div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-btn-toggle
        v-model="model4"
        push
        glossy
        toggle-color="teal"
        :options="[
          {label: 'One', value: 'one', slot: 'one'},
          {label: 'Two', value: 'two', slot: 'two'},
          {label: 'Three', value: 'three', slot: 'three'}
        ]"
      >
        <template v-slot:one>
          <q-tooltip>One!</q-tooltip>
        </template>

        <template v-slot:two>
          <q-tooltip>Two!</q-tooltip>
        </template>

        <template v-slot:three>
          <q-tooltip>Three!</q-tooltip>
        </template>
      </q-btn-toggle>

      <q-btn-toggle
        v-model="model4"
        push
        rounded
        glossy
        toggle-color="purple"
        :options="[
          {value: 'one', slot: 'one'},
          {value: 'two', slot: 'two'},
          {value: 'three', slot: 'three'}
        ]"
      >
        <template v-slot:one>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Pick<br>boat
            </div>
            <q-icon right name="directions_boat" />
          </div>
        </template>

        <template v-slot:two>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Pick<br>car
            </div>
            <q-icon right name="directions_car" />
          </div>
        </template>

        <template v-slot:three>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Pick<br>railway
            </div>
            <q-icon right name="directions_railway" />
          </div>
        </template>
      </q-btn-toggle>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Custom button contentscode End------------ -->
 
 <!----------------------- Disable and Readonly code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Disable and Readonly </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <q-btn-toggle
      disable
      v-model="model"
      toggle-color="primary"
      push
      glossy
      :options="[
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'}
      ]"
    />

    <q-btn-toggle
      readonly
      v-model="model"
      toggle-color="primary"
      push
      glossy
      class="q-ml-md"
      :options="[
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'}
      ]"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Disable and Readonly code End------------ -->

     
 

  <!----------------------- Native Form  code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Native Form </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-btn-toggle
        name="genre"
        v-model="genre"
        push
        glossy
        toggle-color="teal"
        :options="[
          {label: 'Rock', value: 'rock'},
          {label: 'Funk', value: 'funk'},
          {label: 'Pop', value: 'pop'}
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card v-if="submitEmpty" flat bordered class="q-mt-md bg-grey-2">
      <q-card-section>
        Submitted form contains empty formData.
      </q-card-section>
    </q-card>
    <q-card v-else-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
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
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Native Form code End------------ -->
 
   
   

  </div>
</template>

<script>


export default {
    data () {
    return {
      model: null,
      model1: 'one',
      model3: 'one',
      secondModel: 'one',
      model4: 'three',
      //native form
      genre: null,

      submitEmpty: false,
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
      this.submitEmpty = submitResult.length === 0
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