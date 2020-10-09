<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6">Basic Horizontal</div>
            <div class="text-subtitle2">
              <div class="row">
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card" flat bordered>
                      <q-card-section horizontal>
                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>

                        <q-img
                          class="col-5"
                          src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card" flat bordered>
                      <q-card-section horizontal>
                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card" flat bordered>
                      <q-card-section horizontal>
                        <q-img
                          class="col"
                          src="https://cdn.quasar.dev/img/mountains.jpg"
                        />

                        <q-card-actions vertical class="justify-around q-px-md">
                          <q-btn flat round color="red" icon="favorite" />
                          <q-btn flat round color="accent" icon="bookmark" />
                          <q-btn flat round color="primary" icon="share" />
                        </q-card-actions>
                      </q-card-section>
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