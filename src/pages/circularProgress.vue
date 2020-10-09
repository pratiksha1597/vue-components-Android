
<template>
  <div>
    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Circular Progress</h5>
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
        <q-breadcrumbs-el label="Circular Progress" />
      </q-breadcrumbs>
    </div>

    <div id="rcorners3">
      <q-item-section>
        <q-item-label>
          The <code>QCircularProgress</code> component displays a colored circular progress.
          The bar can either have a determinate progress, or an indeterminate
          animation. It should be used to <code>inform the user that an action is
          occurring in the background </code>.
        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------- Determined state code start---------------------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Determined state</div>
               <div id="rcorners3">
      <q-item-section>
        <q-item-label>
         For customization, you can use the size and color related props.
        </q-item-label>
      </q-item-section>
    </div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                    <div class="q-pa-md ">
    <q-circular-progress
      :value="value"
      size="50px"
      color="orange"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="orange"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="75px"
      :thickness="0.6"
      color="orange"
      center-color="grey-8"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="40px"
      :thickness="0.4"
      color="orange"
      track-color="grey-3"
      center-color="grey-8"
      class="q-ma-md"
    />
  </div>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-------------------------- Determined state code End---------------------------->

    <!-------------------------- Determined And reverse code start---------------------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Determined And reverse</div>
             
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                   <div class="q-pa-md ">
    <q-circular-progress
      reverse
      :value="value"
      size="50px"
      color="light-blue"
      class="q-ma-md"
    />

    <q-circular-progress
      reverse
      :value="value"
      size="90px"
      :thickness="0.2"
      color="light-blue"
      center-color="grey-9"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      reverse
      :value="value"
      size="45px"
      :thickness="1"
      color="grey-9"
      track-color="light-blue"
      class="q-ma-md"
    />

    <q-circular-progress
      reverse
      :value="value"
      size="50px"
      :thickness="0.22"
      color="light-blue"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      reverse
      :value="value"
      size="75px"
      :thickness="0.6"
      font-size="50px"
      color="light-blue"
      center-color="grey-9"
      class="q-ma-md"
    />

    <q-circular-progress
      reverse
      :value="value"
      size="40px"
      :thickness="0.4"
      color="light-blue"
      track-color="grey-3"
      center-color="grey-9"
      class="q-ma-md"
    />
  </div>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-------------------------- Determined And reverse code End---------------------------->

    <!--------------------------  Custom min/max(same-model) code start---------------------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6"> Custom min/max(same-model)</div>
             
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                  <div class="q-pa-md ">
    <q-circular-progress
      :min="40"
      :max="70"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :min="55"
      :max="90"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :min="40"
      :max="110"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :min="20"
      :max="70"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />
  </div>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-------------------------- Custom min/max(same-model) code End---------------------------->

    <!--------------------------  Offset Angle code start---------------------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6"> Offset Angle</div>
             
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
               <div class="q-pa-md">
    <q-circular-progress
      :value="value"
      size="50px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :angle="90"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :angle="180"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :angle="270"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :angle="52"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="purple"
      track-color="grey-3"
      class="q-ma-md"
    />
  </div>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-------------------------- Offset Angle code End---------------------------->

  <showValueAndAvatar/>

  </div>
</template>

<script>

import showValueAndAvatar from 'components/circularProgress/showValueAndAvatar.vue';
export default {
  
  components:{
    showValueAndAvatar
  },
 data () {
    return {
      value: 71
    }
  }
};
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