<template>
  <div class="q-pa-md row1">
    <div class="column">
      <div class="col">
        <q-card  class="my-card">
          <q-card-section>
            <div class="text-h6">Aligning actions</div>
            <div id="rcorners3">
      <q-item-section >
          <q-item-label>      
          Below are some of the custom alignments that you can use for the actions through the <code>align</code> property:
      </q-item-label>
      </q-item-section>
   </div>
            <div class="text-subtitle2">
              <div class="row">
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-separator />

                      <q-card-actions align="right">
                        <q-btn flat>Action 1</q-btn>
                        <q-btn flat>Action 2</q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-card-section class="bg-teal text-white">
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-card-actions vertical align="right">
                        <q-btn flat>Action 1</q-btn>
                        <q-btn flat>Action 2</q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card bg-purple text-white">
                      <q-card-section>
                        <div class="text-h6 text-white">
                          Our Changing Planet
                        </div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-card-actions>
                        <q-btn flat class="text-white"> Action 1</q-btn>
                        <q-btn flat class="text-white">Action 2</q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <div class="my-content">
                    <q-card class="my-card">
                      <q-card-section class="bg-grey-8 text-white">
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                      </q-card-section>

                      <q-card-actions vertical align="center">
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

#rcorners3 {
  
  font-size: 20px;
  color: rgb(148, 146, 146);
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

code {
  background: rgb(192, 189, 189);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}
</style>