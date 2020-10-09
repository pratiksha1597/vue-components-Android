
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Rating</h5>
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
      <q-breadcrumbs-el label="Rating" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        Quasar Rating is a Component which allows users to rate items, usually known as “Star Rating”.
        </q-item-label>
      </q-item-section>
    </div>

    <!-- -------------------- basic Rating code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="1.5em"
        icon="thumb_up"
      />
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="red-7"
        icon="favorite_border"
      />
      <q-rating
        v-model="ratingModel"
        size="2.5em"
        color="purple-4"
        icon="create"
      />
      <q-rating
        v-model="ratingModel"
        size="3em"
        color="brown-5"
        icon="pets"
      />
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="green-5"
        icon="star_border"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- basic Rating code start---------------- -->
 
    <!-- -------------------- Custom number of icon code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Custom number of icon</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-rating
      v-model="ratingModel"
      size="2em"
      :max="10"
      color="primary"
    />
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Custom number of icon code start---------------- -->
 
      <!-- -------------------- Image icon code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Image icon</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-rating
      v-model="ratingModel"
      size="3.5em"
      icon="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
    />
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Image icon code start---------------- -->
 
      <!-- -------------------- Different-icon-when-selected code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Different icon when selected</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="green-5"
        icon="star_border"
        icon-selected="star"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Different-icon-when-selected code start---------------- -->

        <!-- -------------------- Different-icon-for-each-rating code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Different icon for each rating</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        :max="4"
        size="3.5em"
        color="green-5"
        :icon="icons"
      />
    </div>
  </div>
  </div>
                  
               
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Different-icon-for-each-rating code start---------------- -->
 

 <!-- -------------------- Different-color-for-each-rating code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Different color for each rating </div>
                <div class="text-subtitle2">
                       <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="grey"
        :color-selected="ratingColors"
      />
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Different-color-for-each-rating code start---------------- -->
 

 <!-- -------------------- Different-icon-and-color-when-half-selected code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Different icon and color when half selected</div>
                <div class="text-subtitle2">
                        <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="model1"
        max="7"
        size="3em"
        color="green-5"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
      />

      <q-rating
        v-model="model2"
        max="7"
        size="3em"
        color="yellow"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        no-dimming
      />

      <q-rating
        v-model="model3"
        max="7"
        size="3em"
        color="red"
        color-selected="red-9"
        icon="favorite_border"
        icon-selected="favorite"
        icon-half="favorite"
        no-dimming
      />

      <div>
        <q-btn
          color="grey"
          no-caps
          label="Reset"
          @click="resetModels"
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
     <!-- -------------------- Different-icon-and-color-when-half-selected code start---------------- -->
 

 <!-- -------------------- with QTooltip code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">with QTooltip </div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <q-rating
      v-model="ratingModel"
      size="2em"
      :max="3"
      color="primary"
    >
      <template v-slot:tip-1>
        <q-tooltip>Not bad</q-tooltip>
      </template>
      <template v-slot:tip-2>
        <q-tooltip>Good</q-tooltip>
      </template>
      <template v-slot:tip-3>
        <q-tooltip>Very good!</q-tooltip>
      </template>
    </q-rating>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- with QTooltip  code start---------------- -->
 
 <!-- -------------------- Standard Size code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard Size </div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
        :key="size"
        :size="size"
        v-model="ratingModel"
        icon="stars"
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
     <!-- -------------------- Standard Size  code start---------------- -->
 

 <!-- -------------------- Readonly And Disable code start---------------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Readonly And Disable </div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />

      <q-rating
        v-model="ratingModel"
        size="2em"
        color="purple"
        disable
      />
    </div>
  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!-- -------------------- Readonly And Disable  code start---------------- -->
 
  
  

  </div>
</template>

<script>


export default {
   data () {
    return {
      ratingModel: 3,
      //different icon
       icons: [
        'sentiment_very_dissatisfied',
        'sentiment_dissatisfied',
        'sentiment_satisfied',
        'sentiment_very_satisfied'
      ],
      //differnt icon color
      ratingColors: [ 'light-green-3', 'light-green-6', 'green', 'green-9', 'green-10' ],
      //different icon and color for half rating
       model1: 3.5,
      model2: 2.3,
      model3: 4.5
    }
  },
  methods: {
    resetModels () {
      this.model1 = 3.5
      this.model2 = 2.3
      this.model3 = 4.5
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