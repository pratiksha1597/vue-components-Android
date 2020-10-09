<template>
    <div>
        <!-------------------------- Show Value code start---------------------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Show Value</div>
               <div id="rcorners3">
      <q-item-section>
        <q-item-label>
        <code>show-value</code> property also enables the default slot, so you can fill it with custom content, like even a QAvatar or a QTooltip. The <code>font-size</code> prop refers to the inner label font size.
        </q-item-label>
      </q-item-section>
    </div>
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                <div class="q-pa-md">
    <q-circular-progress
      show-value
      class="text-light-blue q-ma-md"
      :value="value"
      size="50px"
      color="light-blue"
    />

    <q-circular-progress
      show-value
      class="text-white q-ma-md"
      :value="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
    >
      <q-icon name="volume_up" />
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="12px"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="16px"
      class="text-red q-ma-md"
      :value="value"
      size="60px"
      :thickness="0.05"
      color="red"
      track-color="grey-3"
    >
      <q-icon name="volume_up" class="q-mr-xs" />
      {{ value }}
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="10px"
      class="q-ma-md"
      :value="value"
      size="80px"
      :thickness="0.25"
      color="primary"
      track-color="grey-3"
    >
      <q-avatar size="60px">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>
    </q-circular-progress>
  </div>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-------------------------- show Value code End---------------------------->

    <!-------------------------- Indeterminate state code start---------------------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Indeterminate state</div>
              
              <div class="text-subtitle2">
                <div class="q-gutter-sm">
                <div class="q-pa-md flex flex-center">
    <q-circular-progress
      indeterminate
      size="50px"
      color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="90px"
      :thickness="0.2"
      color="lime"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="50px"
      :thickness="0.22"
      color="lime"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="75px"
      :thickness="0.6"
      color="lime"
      center-color="grey-8"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="40px"
      :thickness="0.4"
      font-size="50px"
      color="lime"
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
    <!-------------------------- Indeterminate state code End---------------------------->

    <!-------------------------- Standared Size code start---------------------------->
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Standared Size</div>
                             <div class="text-subtitle2">
                <div class="q-gutter-sm">
               <div class="q-pa-md ">
    <q-circular-progress
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :key="size"
      :size="size"
      :value="value"
      color="orange"
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
    <!-------------------------- Standared Size code End---------------------------->


    </div>
</template>

<script>
export default {
  data () {
    return {
      value: 81
    }
  }
}
</script>
<style scoped>
h5 {
  margin-left: 30px;
  font-family: "Times New Roman", Times, serif;
  color: dimgray;
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