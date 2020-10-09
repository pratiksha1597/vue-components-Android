<template>
    <div>
        <!----------------------- sizing code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Sizing</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-btn color="accent" label="Fit Menu" style="width: 280px;">

        <q-menu fit>
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

      <q-btn color="brown" label="Max Height Menu">
        <q-menu max-height="130px">
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

      <q-btn color="indigo" label="Max Width Menu">
        <q-menu max-width="80px">
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">New tab</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">New incognito tab</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Recent tabs</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">History</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Downloads</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Settings</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Help & Feedback</q-item-label>
              </q-item-section>
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
     <!----------------------- sizing code End------------------- -->
 
     <!----------------------- Styling code start------------------- -->

    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Styling</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                      <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-btn color="primary" label="Content Class Menu">
        <q-menu content-class="bg-purple text-white" auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="primary" label="Content Style Menu">
        <q-menu :content-style="{ backgroundColor: '#eee', color: 'blue'}">
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
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     <!----------------------- Styling code End------------------- -->
 

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