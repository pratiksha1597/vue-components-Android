<template>
    <!-------------------------------- basic Responsive code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <div class="text-subtitle2">
                   <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-responsive :ratio="16/9">
        <div class="rounded-borders bg-primary text-white flex flex-center">
          Ratio 16:9
        </div>
      </q-responsive>

      <q-responsive :ratio="1">
        <div class="rounded-borders bg-primary text-white flex flex-center">
          Ratio 1:1
        </div>
      </q-responsive>
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- basic Responsive code End --------- --> 
</template>