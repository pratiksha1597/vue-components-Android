
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Popup Edit</h5>
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
      <q-breadcrumbs-el label="Popup Edit" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The QPopupEdit component can be used to edit a value “in place”, like for example a cell in QTable.
         By default, a cell is displayed as a String, then if you are using QPopupEdit and a user clicks/taps on the table cell, 
        a popup will open where the user will be able to edit the value using a textfield.
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------- Simple edit, with title prop and slot code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Simple edit, with title prop and slot</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      title="QDataTable with QPopupEdit"
      :rows-per-page-options="[]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="desc" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Edit the Name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories">
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            {{ props.row.fat }}
            <q-popup-edit v-model.number="props.row.fat">
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model.number="props.row.carbs" disable>
              <q-input type="number" v-model.number="props.row.carbs" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">
            {{ props.row.protein }}
            <q-popup-edit v-model.number="props.row.protein">
              <q-input type="number" v-model.number="props.row.protein" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="sodium" :props="props">
            {{ props.row.sodium }}
            <q-popup-edit v-model.number="props.row.sodium">
              <q-input type="number" v-model.number="props.row.sodium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="calcium" :props="props">
            {{ props.row.calcium }}
            <q-popup-edit v-model="props.row.calcium">
              <template v-slot:title>
                <div class="text-italic text-primary">
                  My Custom Title
                </div>
              </template>
              <q-input v-model="props.row.calcium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
            <q-popup-edit v-model="props.row.iron">
              <q-input v-model="props.row.iron" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Simple edit, with title prop and slot code End------------ -->
 

  <!-------------------------- Custom-style code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom-style</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <div class="q-gutter-md">
      <div class="cursor-pointer" style="width: 100px">
        {{ label }}
        <q-popup-edit v-model="label" content-class="bg-accent text-white">
          <q-input dark color="white" v-model="label" dense autofocus counter>
            <template v-slot:append>
              <q-icon name="edit" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>

      <div class="cursor-pointer" style="width: 100px">
        {{ label2 }}
        <q-popup-edit v-model="label2" :cover="false" :offset="[0, 10]">
          <q-input color="accent" v-model="label2" dense autofocus counter>
            <template v-slot:prepend>
              <q-icon name="record_voice_over" color="accent" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Custom-style code End------------ -->
 
 <!-------------------------- persistent and with button code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Persistent and with button </div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                         <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      title="QDataTable with QPopupEdit"
      :rows-per-page-options="[]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="desc" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons>
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories" buttons>
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            <div class="text-pre-wrap">{{ props.row.fat }}</div>
            <q-popup-edit v-model.number="props.row.fat" buttons>
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model.number="props.row.carbs" buttons persistent>
              <q-input type="number" v-model.number="props.row.carbs"  dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">
            {{ props.row.protein }}
            <q-popup-edit v-model.number="props.row.protein" buttons label-set="Save" label-cancel="Close">
              <q-input type="number" v-model.number="props.row.protein" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="sodium" :props="props">
            {{ props.row.sodium }}
            <q-popup-edit v-model.number="props.row.sodium" buttons>
              <q-input type="number" v-model.number="props.row.sodium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="calcium" :props="props">
            {{ props.row.calcium }}
            <q-popup-edit v-model="props.row.calcium" buttons>
              <q-input v-model="props.row.calcium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
            <q-popup-edit v-model="props.row.iron" buttons>
              <q-input v-model="props.row.iron" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- persistent and with button  code End------------ -->
 

 <!-------------------------- Default-scoped-slot-parameters code start------------ -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Defaul scoped slot  parameters</div>
                <div class="text-subtitle2">
                 
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="cursor-pointer">
      {{ nickname }}
      <q-popup-edit v-model="nickname" :validate="val => val.length > 5">
        <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
          <q-input
            autofocus
            dense
            :value="nickname"
            hint="Your nickname"
            :rules="[
              val => validate(value) || 'More than 5 chars required'
            ]"
            @input="emitValue"
          >
            <template v-slot:after>
              <q-btn flat dense color="negative" icon="cancel" @click.stop="cancel" />
              <q-btn flat dense color="positive" icon="check_circle" @click.stop="set" :disable="validate(value) === false || initialValue === value" />
            </template>
          </q-input>
        </template>
      </q-popup-edit>
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-------------------------- Default-scoped-slot-parameters code End------------ -->
 




<QEditTextArea/>
<editAndValidation/>


  

  </div>
</template>

<script>

import QEditTextArea from 'components/popupedit/QEditTextArea.vue';
import editAndValidation from 'components/popupedit/editAndValidation.vue';

const columns = [
  { name: 'desc', align: 'left', label: 'Dessert (100g serving)', field: 'name' },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories' },
  { name: 'fat', label: 'Fat (g)', field: 'fat' },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium' },
  { name: 'iron', label: 'Iron (%)', field: 'iron' }
]

const data = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  
  
]


export default {
    components:{
        QEditTextArea,
        editAndValidation
    },
   data () {
    return {
      data,
      columns,
      //custom style
       label: 'Click me',
      label2: 'Also click me',
      //Defult scoped slot parameter
       nickname: 'Click me'
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