<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6">Card With Media content</div>
            <div class="text-subtitle2">
              <div class="row">
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

                      <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        {{ lorem }}
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                        basic
                      >
                        <div class="absolute-bottom text-h6">Title</div>
                      </q-img>

                      <q-card-section>
                        {{ lorem }}
                      </q-card-section>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                          </q-avatar>
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Title</q-item-label>
                          <q-item-label caption>Subhead</q-item-label>
                        </q-item-section>
                      </q-item>

                      <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                        basic
                      >
                        <div class="absolute-bottom text-subtitle2 text-center">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-subtitle2 absolute-top text-center">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-h5 absolute-bottom text-right">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>

                
<div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                        basic
                      >
                        <div class="absolute-bottom text-subtitle2 text-center">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom">
                          <div class="text-h6">Our Changing Planet</div>
                          <div class="text-subtitle2">by John Doe</div>
                        </div>
                      </q-img>

                      <q-card-actions>
                        <q-btn flat>Action 1</q-btn>
                        <q-btn flat>Action 2</q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style scoped>
.text-h6 {
  color: rgb(94 92 92);
  padding-bottom: 10px;
  padding-left: 10px;
}

.row1 {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
}

/* for card with Action */
/* .my-card{
  width: 100%;
  max-width: 250px;
} */

.my-content {
  padding-left: 10px;
  padding-top: 10px;
  /* background: rgba(86,61,124,.15); */
  /* border: 1px solid rgba(86,61,124,.2); */
}
</style>