<template>
    <div>
        <!----------------------- Presistent code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Presistent</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <q-btn color="primary" label="Persistent Menu">
      <q-menu persistent auto-close>
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>History</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Downloads</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Help &amp; Feedback</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- Presistent code End------------------- -->
 
     <!----------------------- Transition code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Transition</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-btn color="primary" label="Flip Menu">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Crazy for transitions</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Mind blown</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Scale Menu">
        <q-menu
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Crazy for transitions</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Mind blown</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Jump Menu">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Crazy for transitions</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Mind blown</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Rotate Menu">
        <q-menu
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Crazy for transitions</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Mind blown</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- Transition code End------------------- -->
 
    <!----------------------- Position code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Position</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                        <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu
          anchor="top right"
          self="top left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="top right"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="top left"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu
          anchor="center middle"
          self="center middle"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="center middle"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="center middle"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Anchor/Self Menu">
        <q-menu
          anchor="bottom right"
          self="bottom left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>anchor="bottom right"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>self="bottom left"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu
          :offset="[0, 20]"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[0, 20]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[0, 20]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu
          :offset="[50, 10]"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[50, 10]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[50, 10]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Offset Menu">
        <q-menu
          :offset="[-50, 10]"
        >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-50, 10]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-50, 10]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- Position code End------------------- -->
 

    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    color:dimgray; 
    
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
  padding-left:30px;
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