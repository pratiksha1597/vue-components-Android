
<template>
  <div>
    <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Intersection</h5>
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
        <q-breadcrumbs-el label="Intersection" />
      </q-breadcrumbs>
    </div>
    <!------------------- Tital and Path(breadcrumbs) code End ----------->

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The QIntersection component is essentially a wrapper over the Intersection directive with the added benefit that it handles the
           state by itself (does not require you to add it and handle it manually) and can optionally have a show/hide transition as well.
        </q-item-label>
      </q-item-section>
    </div>

    <!------------------------- Basic Intersections code start -------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                <q-scroll-area style="height: 400px; max-width: 1200px;">
                     <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
                </q-scroll-area>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

     <!------------------------- Basic Intersections code End -------------->


      <!------------------------- With Transition Intersections code start -------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">With Transition</div>
              <div class="text-subtitle2">
                <q-scroll-area style="height: 400px; max-width: 1200px;">
                   <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
                </q-scroll-area>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

     <!------------------------- With Transition Intersections code End -------------->


     <!------------------------- A list with Transition Intersections code start -------------->

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6"> A list With Transition</div>
              <div class="text-subtitle2">
                <q-scroll-area style="height: 400px; max-width: 1200px;">
                   <div class="q-pa-md flex justify-center">
    <div style="max-width: 90%; width: 300px;">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="flip-right"
        class="example-item1"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              Q
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Contact #{{ index }}</q-item-label>
            <q-item-label caption lines="1">some@email.com</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </div>
                </q-scroll-area>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

     <!-------------------------A list With Transition Intersections code End -------------->
  </div>
</template>

<script>
export default {
  
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

.example-item{
  height: 290px;
  width: 290px;
  }

  .example-item1{
  height: 56px;
  }
</style>