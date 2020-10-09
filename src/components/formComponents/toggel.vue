
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Toggel</h5>
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
      <q-breadcrumbs-el label="Toggel" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QToggle component is another basic element for user input. You can use this for turning settings, features or true/false inputs on and off.
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
    <q-toggle v-model="value" />

    <q-toggle
      v-model="value"
      color="green"
    />

    <q-toggle
      v-model="value"
      color="yellow"
    />

    <q-toggle
      v-model="value"
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
      <!----------------------- Basic code End------------ -->
 
 <!----------------------- With Label code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Label</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md q-gutter-lg">
    <div>
      <q-toggle
        v-model="value1"
        label="On Right"
      />

      <q-toggle
        v-model="value1"
        color="green"
        label="On Right"
      />

      
    </div>

    <div>
      <q-toggle
        v-model="value1"
        label="On Left"
        left-label
      />

      <q-toggle
        v-model="value1"
        color="green"
        label="On Left"
        left-label
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
      <!----------------------- With Label  code End------------ -->
 
<!----------------------- Coloring code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Keep color</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                       <div class="q-pa-md">
    <q-toggle
      v-model="value2"
      color="primary"
      keep-color
    />

    <q-toggle
      v-model="value2"
      color="green"
      keep-color
    />

    <q-toggle
      v-model="value2"
      color="orange"
      keep-color
    />

    <q-toggle
      v-model="value2"
      color="red"
      keep-color
      readonly
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Coloring code End------------ -->
 
<!----------------------- With icon code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Icon</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md q-gutter-sm">
    <div>
      <q-toggle
        v-model="first"
        icon="alarm"
      />
      <q-toggle
        v-model="second"
        color="pink"
        icon="mail"
        label="Same Icon for each state"
      />
    </div>

    <div>
      <q-toggle
        v-model="third"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
      />
      <q-toggle
        v-model="fourth"
        checked-icon="check"
        color="red"
        label="Different icon for each state"
        unchecked-icon="clear"
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
      <!----------------------- With icon code End------------ -->
 
 <!----------------------- Custom model values code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom model values</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md q-gutter-y-sm column">
    <q-toggle
      :label="`Model is ${blueModel} (default behaviour)`"
      v-model="blueModel"
    />

    <q-toggle
      :label="pinkModel"
      color="pink"
      false-value="Disagreed"
      true-value="Agreed"
      v-model="pinkModel"
    />

    <q-toggle
      :false-value="13"
      :label="`Model is number ${greenModel}`"
      :true-value="42"
      color="green"
      v-model="greenModel"
    />

    <q-toggle
      :false-value="true"
      :label="`Model is ${redModel} (flipped boolean)`"
      :true-value="false"
      color="red"
      v-model="redModel"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Custom model values code End------------ -->
 
 <!----------------------- Indeterminate state code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Indeterminate state </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-toggle indeterminate-value="maybe" v-model="theModel2" label="Did you eat lunch today?" />
    </div>

    <div class="q-px-sm">
      The model data: <strong>{{ JSON.stringify(theModel2) }}</strong>
    </div>

    <div class="q-gutter-sm">
      <q-toggle toggle-indeterminate v-model="theModel" label="Did you eat lunch today?" />
    </div>

    <div class="q-px-sm row no-wrap items-center">
      <div class="col">
        The model data: <strong>{{ JSON.stringify(theModel) }}</strong>
      </div>
      <q-btn color="primary" label="Reset" @click="reset" class="q-ml-md" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Indeterminate state code End------------ -->

      <!----------------------- Array Model code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Array Model</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md q-gutter-sm">
    <q-toggle color="blue" label="Blue" v-model="selection" val="blue" />
    <q-toggle color="yellow" label="Yellow" v-model="selection" val="yellow" />
    <q-toggle color="green" label="Green" v-model="selection" val="green" />
    <q-toggle color="red" label="Red" v-model="selection" val="red" />
    <div>
      Model: {{selection}}
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Array Model code End------------ -->

      <!----------------------- Standared Size code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standared Size  </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-toggle size="xs" v-model="shape" val="xs" label="Size 'xs'" />
      <q-toggle size="sm" v-model="shape" val="sm" label="Size 'sm'" />
      <q-toggle size="md" v-model="shape" val="md" label="Size 'md'" />
      <q-toggle size="lg" v-model="shape" val="lg" label="Size 'lg'" />
      <q-toggle size="xl" v-model="shape" val="xl" label="Size 'xl'" />

      <!-- custom size -->
      <q-toggle size="150px" v-model="shape" val="150px" label="Size '150px'" />
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
  </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Standared Size  code End------------ -->
 
 
 
 <!----------------------- Usage-with-QOptionGroup code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Usage with QOptionGroup </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-option-group
      :options="options"
      label="Notifications"
      type="toggle"
      v-model="group"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Usage-with-QOptionGroup  code End------------ -->
 
   <!----------------------- with-QItem code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">with QItem </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-list>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="blue" v-model="notifications" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Friend request</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="green" v-model="notifications" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Picture uploaded</q-item-label>
          <q-item-label caption>Allow notification when uploading images</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="red" v-model="notifications" val="picture" />
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
      <!----------------------- with-QItem code End------------ -->
 

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
      <div class="bg-grey-2 q-pa-sm rounded-borders">
        <q-toggle
          name="music_active"
          v-model="activateMusic"
          label="Activate music"
        />

        <q-toggle
          name="light_active"
          v-model="activateLights"
          label="Activate lights"
          true-value="YES"
        />
      </div>

      <div class="bg-grey-2 q-pa-sm rounded-borders">
        <q-toggle
          name="music_genre"
          v-model="genreRock"
          true-value="rock"
          label="Rock"
        />

        <q-toggle
          name="music_genre"
          v-model="genreFunk"
          true-value="funk"
          label="Funk"
        />

        <q-toggle
          name="music_genre"
          v-model="genrePop"
          true-value="pop"
          label="Pop"
        />
      </div>

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
      value: true,
      value1: true,
      value2: true,

      first: true,
      second: true,
      third: false,
      fourth: true,
      //custom model values
       blueModel: true,
      pinkModel: 'Agreed',
      greenModel: 42,
      redModel: true,

      //Indeterminate state
      theModel: null,
      theModel2: 'maybe',    
      //Array Model
        selection: [ 'yellow', 'red' ],
      //Standared size
       shape: [ 'line' ],
       //Qoperation Group
       group: [],
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ],

      //with qitem
       notifications: [ 'friend' ],

    //Native Form
     activateMusic: false,
      activateLights: null,

      genreRock: 'rock',
      genreFunk: false,
      genrePop: 'pop',

      submitEmpty: false,
      submitResult: []
    
    }
  },
   methods: {
    reset () {
        //Indeterminate state
      this.theModel = null
      this.theModel2 = 'maybe'
    },
    onSubmit (evt) {
        //Native Form
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