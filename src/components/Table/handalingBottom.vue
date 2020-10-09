<template>
    <div>

<div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Hiding Bottom layer</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="row items-center q-gutter-sm q-mb-md">
      <q-toggle label="Fill with data" v-model="hasData" />
      <q-toggle label="Hide no data" v-model="hideNoData" />
      <q-toggle label="Hide bottom layer" v-model="hideBottom" />
      <q-toggle label="Hide pagination" v-model="hidePagination" />
      <q-toggle label="Hide selected rows banner" v-model="hideSelectedBanner" />
    </div>

    <q-table
      title="Treats"
      :data="records"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :hide-bottom="hideBottom"
      :hide-selected-banner="hideSelectedBanner"
      :hide-no-data="hideNoData"
      :hide-pagination="hidePagination"
    />
  </div>

                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    
    
    </div>


 </div> 
</template>
<script>
const records = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65
  }
]

export default {
  data () {
    return {
      hasData: true,
      hideBottom: false,
      hideSelectedBanner: false,
      hideNoData: false,
      hidePagination: false,

      selected: [ records[1] ],

      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ]
    }
  },

  computed: {
    records () {
      return this.hasData === true
        ? records
        : []
    }
  }
}
</script>
<style>


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