
<template>
  <div>
    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Dialog</h5>
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
        <q-breadcrumbs-el label="Dialog   " />
      </q-breadcrumbs>
    </div>

    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
          The <code>QDialog</code> component is a great way to offer the user
          the ability to choose a specific action or list of actions.
        </q-item-label>
      </q-item-section>
    </div>
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic</div>
              <div class="text-subtitle2">
                <div class="q-pa-md q-gutter-sm">
                  <q-btn label="Alert" color="primary" @click="alert = true" />
                  <q-btn
                    label="Confirm"
                    color="primary"
                    @click="confirm = true"
                  />
                  <q-btn
                    label="Prompt"
                    color="primary"
                    @click="prompt = true"
                  />

                  <q-dialog v-model="alert">
                    <q-card>
                      <q-card-section>
                        <div class="text-h6">Alert</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum repellendus sit voluptate voluptas eveniet porro.
                        Rerum blanditiis perferendis totam, ea at omnis vel
                        numquam exercitationem aut, natus minima, porro labore.
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn flat label="OK" color="primary" v-close-popup />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                  <q-dialog v-model="confirm" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          icon="signal_wifi_off"
                          color="primary"
                          text-color="white"
                        />
                        <span class="q-ml-sm"
                          >You are currently not connected to any network.</span
                        >
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup
                        />
                        <q-btn
                          flat
                          label="Turn on Wifi"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                  <q-dialog v-model="prompt" persistent>
                    <q-card style="min-width: 350px">
                      <q-card-section>
                        <div class="text-h6">Your address</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        <q-input
                          dense
                          v-model="address"
                          autofocus
                          @keyup.enter="prompt = false"
                        />
                      </q-card-section>

                      <q-card-actions align="right" class="text-primary">
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn flat label="Add address" v-close-popup />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <styling/>
    <Positions/>
    <maximized/>
    <veriousContent/>
    <handalingScroll/>
    <differentMode/>
    <dialogInDialog/>
    <sizing/>

  </div>
</template>

<script>
import styling from 'components/dialog/styling.vue';
import Positions from 'components/dialog/Positions.vue';
import maximized from 'components/dialog/maximized.vue';
import veriousContent from 'components/dialog/veriousContent.vue';
import handalingScroll from 'components/dialog/handalingScroll.vue';
import differentMode from 'components/dialog/differentMode.vue';
import dialogInDialog from 'components/dialog/dialogInDialog.vue';
import sizing from 'components/dialog/sizing.vue'
export default {
    components:{
        styling,
        Positions,
        maximized,
        veriousContent,
        differentMode,
        handalingScroll,
        dialogInDialog,
        sizing
    },
  data() {
    return {
      alert: false,
      confirm: false,
      prompt: false,

      address: "",
    };
  },
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
  padding-left: 10px;
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