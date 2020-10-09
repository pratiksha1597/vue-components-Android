
<template>
  <div>
    <!-- ------------------------heding section for button page start-------------- -->
    <div class="router-header flex flex-wrap items-center">
      <div>
        <h5>Card</h5>
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
        <q-breadcrumbs-el label="Card" />
      </q-breadcrumbs>
    </div>

    <!-- ------------------------heding section for button End-------------- -->

    <!------Explanation about button start--------------------------------------->

    <div id="rcorners3">
      <q-item-section>
        <q-item-label>
          The <code> QCard </code> component is intentionally lightweight and
          essentially a containing element that is capable of “hosting” any
          other component that is appropriate.
        </q-item-label>
      </q-item-section>
    </div>
    <!------Explanation about button start--------------------------------------->
        
    <div class="q-pa-md row1">
      <div class="column">
        <div class="col">
          <q-card  class="my-card">
            <q-card-section>
              <div class="text-h6">Basic Card</div>
              <div class="text-subtitle2">
                <div class="row">
                  <div class="col-md-3">
                    <div class="my-content">
                      <q-card class="my-card">
                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="my-content">
                     <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" >
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
                      <q-card dark bordered class="bg-grey-9 my-card">
                        <q-card-section>
                          <div class="text-h6">Our Changing Planet</div>
                          <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-separator dark inset />

                        <q-card-section>
                          {{ lorem }}
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>

                  <div class="col-4 size">
                    <div class="my-content">
                      <q-card flat bordered class="my-card">
                        <q-card-section>
                          <div class="text-h6">Our Changing Planet</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </q-card-section>

                        <q-separator inset />

                        <q-card-section>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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


<cardWithActions/> 
<aligningActions/>
<basicHorizontal/>
<cardWithMedia/>
<cardWithVedio/>

<moreInvolvedExampal/>
<!-- <tableAndTabs/> -->
<veriousContent/>
<Expandable/>

  </div>
</template>

<script>
import cardWithActions from 'components/card/cardWithActions.vue';
import aligningActions from 'components/card/aligningAction.vue';
import basicHorizontal from 'components/card/basicHorizontal.vue';
import cardWithMedia from 'components/card/cardWithMedia.vue';
import cardWithVedio from 'components/card/cardWithVedio.vue';
import Expandable from 'components/card/Expandable.vue';
 import moreInvolvedExampal from 'components/card/moreInvolvedExampal.vue';
 import tableAndTabs from 'components/card/tableAndTabs.vue';
 import veriousContent from 'components/card/veriousContent.vue';

export default {
 components:{
cardWithActions,
aligningActions,
basicHorizontal,
cardWithMedia,
cardWithVedio,
Expandable,
moreInvolvedExampal,
tableAndTabs,
veriousContent
 },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

.my-content {
  padding-left: 10px;
  /* background: rgba(86,61,124,.15); */
  /* border: 1px solid rgba(86,61,124,.2); */
}
</style>