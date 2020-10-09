<template>
  <div>
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Table</div>
              <div class="text-subtitle2">
                <div class="row">
                  <div class="q-pa-md">
                    <q-card class="my-card">
                      <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-markup-table>
                        <thead>
                          <tr>
                            <th class="text-left">Dessert (100g serving)</th>
                            <th class="text-right">Calories</th>
                            <th class="text-right">Fat (g)</th>
                            <th class="text-right">Carbs (g)</th>
                            <th class="text-right">Protein (g)</th>
                            <th class="text-right">Sodium (mg)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">Frozen Yogurt</td>
                            <td class="text-right">159</td>
                            <td class="text-right">6</td>
                            <td class="text-right">24</td>
                            <td class="text-right">4</td>
                            <td class="text-right">87</td>
                          </tr>
                          <tr>
                            <td class="text-left">Ice cream sandwich</td>
                            <td class="text-right">237</td>
                            <td class="text-right">9</td>
                            <td class="text-right">37</td>
                            <td class="text-right">4.3</td>
                            <td class="text-right">129</td>
                          </tr>
                          <tr>
                            <td class="text-left">Eclair</td>
                            <td class="text-right">262</td>
                            <td class="text-right">16</td>
                            <td class="text-right">23</td>
                            <td class="text-right">6</td>
                            <td class="text-right">337</td>
                          </tr>
                          <tr>
                            <td class="text-left">Cupcake</td>
                            <td class="text-right">305</td>
                            <td class="text-right">3.7</td>
                            <td class="text-right">67</td>
                            <td class="text-right">4.3</td>
                            <td class="text-right">413</td>
                          </tr>
                          <tr>
                            <td class="text-left">Gingerbread</td>
                            <td class="text-right">356</td>
                            <td class="text-right">16</td>
                            <td class="text-right">49</td>
                            <td class="text-right">3.9</td>
                            <td class="text-right">327</td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card flat class="my-card">
            <q-card-section>
              <div class="text-h6">Tabs</div>
              <div class="text-subtitle2">
                <div class="row">
                  <div class="q-pa-md">
                    <q-card class="my-card">
                      <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-tabs v-model="tab" class="text-teal">
                        <q-tab label="Tab one" name="one" />
                        <q-tab label="Tab two" name="two" />
                      </q-tabs>

                      <q-separator />

                      <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="one">
                          The QCard component is a great way to display
                          important pieces of grouped content.
                        </q-tab-panel>

                        <q-tab-panel name="two">
                          With so much content to display at once, and often so
                          little screen real-estate, Cards have fast become the
                          design pattern of choice for many companies, including
                          the likes of Google and Twitter.
                        </q-tab-panel>
                      </q-tab-panels>
                    </q-card>
                  </div>
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
export default {
  data() {
    return {
      tab: "one",
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