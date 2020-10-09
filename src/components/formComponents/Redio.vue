
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Redio</h5>
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
      <q-breadcrumbs-el label="Redio" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QRadio component is another basic element for user input. You can use this to supply a way for the user to pick an option from multiple choices.
        </q-item-label>
      </q-item-section>
    </div>
    <!----------------------- Standard code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="line" label="Line" />
      <q-radio v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio v-model="shape" val="polygon" label="Polygon" />
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
      <!----------------------- Standard code End------------ -->
 
 <!----------------------- Dense code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Dense</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md q-gutter-sm">
    <div class="q-gutter-sm">
      <q-radio dense v-model="shape" val="line" label="Line" />
      <q-radio dense v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio dense v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio dense v-model="shape" val="polygon" label="Polygon" />
    </div>

    <div class="q-px-sm q-pt-sm">
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
      <!----------------------- Dense code End------------ -->
 
<!----------------------- Coloring code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Coloring</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio v-model="color" val="red" label="Red" color="red" />
      <q-radio v-model="color" val="cyan" label="Cyan" color="cyan" />
    </div>
    <div class="q-gutter-sm">
      <q-radio keep-color v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio keep-color v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio keep-color v-model="color" val="red" label="Red" color="red" />
      <q-radio keep-color v-model="color" val="cyan" label="Cyan" color="cyan" />
    </div>
    <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ color }}</strong>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Coloring code End------------ -->
 
<!----------------------- Disable code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Disable</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio disable v-model="shape" val="line" label="Line" />
      <q-radio disable v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio disable v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio disable v-model="shape" val="polygon" label="Polygon" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Disable code End------------ -->
 
 <!----------------------- Label on Left side code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Label on Left side</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio left-label v-model="shape" val="line" label="Line" />
      <q-radio left-label v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio left-label v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio left-label v-model="shape" val="polygon" label="Polygon" />
    </div>
    <div class="q-gutter-sm">
      <q-radio left-label v-model="shape" dense val="line" label="Line" />
      <q-radio left-label v-model="shape" dense val="rectangle" label="Rectangle" />
      <q-radio left-label v-model="shape" dense val="ellipse" label="Ellipse" />
      <q-radio left-label v-model="shape" dense val="polygon" label="Polygon" />
    </div>
    <div class="q-mt-md">
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
      <!----------------------- Label on Left side code End------------ -->
 
 <!----------------------- Standard Size code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard Size </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
<div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio size="xs" v-model="shape" val="xs" label="Size 'xs'" />
      <q-radio size="sm" v-model="shape" val="sm" label="Size 'sm'" />
      <q-radio size="md" v-model="shape" val="md" label="Size 'md'" />
      <q-radio size="lg" v-model="shape" val="lg" label="Size 'lg'" />
      <q-radio size="xl" v-model="shape" val="xl" label="Size 'xl'" />

      <!-- custom size -->
      <q-radio size="150px" v-model="shape" val="150px" label="Size '150px'" />
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
      <!----------------------- Standard Size  code End------------ -->
 
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
      type="radio"
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
      <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Teal</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="orange" color="orange" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Orange</q-item-label>
          <q-item-label caption>With description </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-radio v-model="color" val="cyan" color="cyan" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cyan</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ color }}</strong>
    </div>
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
      <q-radio name="shape" v-model="shape" val="line" label="Line" />
      <q-radio name="shape" v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio name="shape" v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio name="shape" v-model="shape" val="polygon" label="Polygon" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
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
      shape: 'line',
       color: 'cyan',
       group: null,
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ],
       shape: 'line',
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