<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6">more Involved Exampal</div>
            <div class="text-subtitle2">
              <div class="row">
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card" flat bordered>
                      <q-card-section horizontal>
                        <q-card-section class="q-pt-xs">
                          <div class="text-overline">Overline</div>
                          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                          <div class="text-caption text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </q-card-section>

                        <q-card-section class="col-5 flex flex-center">
                          <q-img
                            class="rounded-borders"
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                          />
                        </q-card-section>
                      </q-card-section>

                      <q-separator />

                      <q-card-actions>
                        <q-btn flat round icon="event" />
                        <q-btn flat> 7:30PM </q-btn>
                        <q-btn flat color="primary"> Reserve </q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card" flat bordered>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                          </q-avatar>
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Title</q-item-label>
                          <q-item-label caption> Subhead </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-separator />

                      <q-card-section horizontal>
                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section class="col-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-card-section horizontal>
                        <q-img
                          class="col-5"
                          src="https://cdn.quasar.dev/img/parallax1.jpg"
                        />

                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>
                      </q-card-section>

                      <q-separator />

                      <q-card-actions>
                        <q-btn flat round icon="event" />
                        <q-btn flat> 5:30PM </q-btn>
                        <q-btn flat> 7:00PM </q-btn>
                        <q-btn flat color="primary"> Reserve </q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-card-section horizontal>
                        <q-img
                          class="col"
                          src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />

                        <q-card-actions vertical class="justify-around">
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