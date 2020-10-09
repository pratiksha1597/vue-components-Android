
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Option Group </h5>
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
      <q-breadcrumbs-el label="Option Group" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
    The QOptionGroup component is a helper component that allows you better control for grouping binary (on or off, true or false, 1 or 0) form input components like checkboxes, radios or toggles.
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
                     <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
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
      <!----------------------- Standard code End------------ -->
 
 <!----------------------- With Checkboxes code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">With Checkboxes</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="green"
      type="checkbox"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- With Checkboxes  code End------------ -->
 
<!----------------------- with toggles code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">with Toggles</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                 <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="yellow"
      type="toggle"
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
   
    </div>
      <!----------------------- with toggles code End------------ -->
 

 <!----------------------- inline code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Inline</div>
                
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                   <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="primary"
      inline
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- inline code End------------ -->
 
 <!----------------------- Dense and inline code Start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Disable and Readonly </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                    <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="primary"
      inline
      dense
    />
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!----------------------- Dense and inline   code End------------ -->

     
 

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
        Preferred genre:
        <q-option-group
          name="preferred_genre"
          v-model="preferred"
          :options="options"
          color="primary"
          inline
        />
      </div>

      <div class="bg-grey-2 q-pa-sm rounded-borders">
        Accepted genres:
        <q-option-group
          name="accepted_genres"
          v-model="accepted"
          :options="options"
          type="checkbox"
          color="primary"
          inline
        />
      </div>

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
      group: 'op1',

      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],

      //native form
      preferred: 'rock',
      accepted: [],
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