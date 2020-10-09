
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Skeleton</h5>
     </div>
     <!-- <q-separator vertical insert class="q-ml-sm mt-4 "></q-separator> -->
   <div style="padding: 10px; font-size: 29px; color: darkgrey;">|
   </div>
     <q-breadcrumbs class="text-brown hiddensection" >
       <!-- <template v-solt:separator>
         <q-icon size="1.5em" name="double_arrow" color="#626262"/>
       </template>
         -->
 <q-breadcrumbs-el  icon="home" />
      <q-breadcrumbs-el label="Components"  />
      <q-breadcrumbs-el label="Skeleton" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
      The QSkeleton is a component for displaying a placeholder preview of your content before you load the actual page data. 
      It’s a nice way of informing the user of what to expect from the page before it is fully loaded and increases the perceived performance. 
      It can be used to incrementally display information on screen as data is being fetched.

        </q-item-label>
      </q-item-section>
    </div>

    <!-------------------------------- On a QCard code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">On a QCard</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <q-card style="max-width: 300px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square />

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- On a QCard code End --------- --> 
  

   <!-------------------------------- QSkeleton Types code start --------- -->
    <div class="q-pd-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">QSkeleton Types</div>
                <div class="text-subtitle2">
                    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card flat bordered v-for="type in skeletonTypes" :key="type" style="width: 250px">
        <q-card-section>
          <div class="text-caption">"{{ type }}"</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-skeleton :type="type" />
        </q-card-section>
      </q-card>
    </div>
  </div>
                   
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- QSkeleton Types code End --------- --> 
  

  <!-------------------------------- Animations code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Animations</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card flat bordered v-for="animation in skeletonAnimations" :key="animation" style="width: 250px">
        <q-card-section>
          <div class="text-caption">"{{ animation }}"</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-skeleton :animation="animation" />
        </q-card-section>
      </q-card>
    </div>
  </div>
              
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- vartical code End --------- --> 
  

   <!-------------------------------- sizing code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Sizing</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-skeleton type="circle" size="100px" />
      <q-skeleton width="150px" />
      <q-skeleton height="150px" />
      <q-skeleton size="50px" />
      <q-skeleton width="200px" height="100px" />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- sizing code End --------- --> 

  <!-------------------------------- Bordered  code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Bordered</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-skeleton bordered type="circle" />
      <q-skeleton bordered />
      <q-skeleton bordered square />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Bordered code End --------- -->  
  <!-------------------------------- custom colored code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom colored</div>
                <div class="text-subtitle2">
                  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-skeleton class="bg-accent" type="circle" />
      <q-skeleton class="bg-teal" />
      <q-skeleton class="bg-orange" animation="pulse-y" />
      <q-skeleton class="bg-indigo" />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom colored  End --------- --> 
  
    <!-------------------------------- custom border code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">custom border</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-skeleton
        width="100px"
        height="50px"
        class="custom-skeleton-border"
      />
    </div>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom border  End --------- --> 
  
   <!-------------------------------- Youtube code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-h6">Youtube</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-card flat style="max-width: 300px">
      <q-skeleton height="150px" square />

      <q-card-section>
        <q-skeleton type="text" class="text-subtitle1" />
        <q-skeleton type="text" width="50%" class="text-subtitle1" />
        <q-skeleton type="text" class="text-caption" />
      </q-card-section>
    </q-card>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Youtube  End --------- --> 
  

   <!-------------------------------- FaceBook code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">FaceBook</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-card flat bordered style="max-width: 300px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" animation="fade" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" animation="fade" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" animation="fade" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square animation="fade" />

      <q-card-section>
        <q-skeleton type="text" class="text-subtitle2" animation="fade" />
        <q-skeleton type="text" width="50%" class="text-subtitle2" animation="fade" />
      </q-card-section>
    </q-card>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- custom border  End --------- --> 
  
   <!-------------------------------- Twitter code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Twitter</div>
                <div class="text-subtitle2">
               <div class="q-pa-md">
    <q-card flat bordered style="max-width: 500px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" width="80%" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar />

        <q-item-section class="q-pl-sm">
          <q-skeleton height="150px" class="q-mb-sm" />

          <div class="row items-center justify-between no-wrap">
            <div class="row items-center">
              <q-icon name="chat_bubble_outline" color="grey-4" class="q-mr-sm" size="18px" />
              <q-skeleton type="text" width="30px" />
            </div>

            <div class="row items-center">
              <q-icon name="repeat" color="grey-4" class="q-mr-sm" size="18px" />
              <q-skeleton type="text" width="30px" />
            </div>

            <div class="row items-center">
              <q-icon name="favorite_border" color="grey-4" class="q-mr-sm" size="18px" />
              <q-skeleton type="text" width="30px" />
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Twitter  End --------- --> 
  
  <!-------------------------------- Table code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Table</div>
                <div class="text-subtitle2">
                 <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="width: 150px">
            <q-skeleton animation="blink" type="text" />
          </th>
          <th class="text-right">
            <q-skeleton animation="blink" type="text" />
          </th>
          <th class="text-right">
            <q-skeleton animation="blink" type="text" />
          </th>
          <th class="text-right">
            <q-skeleton animation="blink" type="text" />
          </th>
          <th class="text-right">
            <q-skeleton animation="blink" type="text" />
          </th>
          <th class="text-right">
            <q-skeleton animation="blink" type="text" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="n in 5" :key="n">
          <td class="text-left">
            <q-skeleton animation="blink" type="text" width="85px" />
          </td>
          <td class="text-right">
            <q-skeleton animation="blink" type="text" width="50px" />
          </td>
          <td class="text-right">
            <q-skeleton animation="blink" type="text" width="35px" />
          </td>
          <td class="text-right">
            <q-skeleton animation="blink" type="text" width="65px" />
          </td>
          <td class="text-right">
            <q-skeleton animation="blink" type="text" width="25px" />
          </td>
          <td class="text-right">
            <q-skeleton animation="blink" type="text" width="85px" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
                  
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- Table  End --------- --> 
  
    <!-------------------------------- List code start --------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">List</div>
                <div class="text-subtitle2">
              <div class="q-pa-md">
    <q-item style="max-width: 300px">
      <q-item-section avatar>
        <q-skeleton type="QAvatar" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" width="65%" />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item style="max-width: 300px">
      <q-item-section avatar>
        <q-skeleton type="QAvatar" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" width="90%" />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item style="max-width: 300px">
      <q-item-section avatar>
        <q-skeleton type="QAvatar" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" width="35%" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" />
        </q-item-label>
      </q-item-section>
    </q-item>
  </div> 
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
     
 <!-------------------------------- List  End --------- --> 
  
  



  </div>
</template>

<script>
export default {
  
data () {
    return {
      skeletonTypes: [
        'text', 'rect', 'circle',
        'QBtn', 'QBadge', 'QChip', 'QToolbar',
        'QCheckbox', 'QRadio', 'QToggle',
        'QSlider', 'QRange', 'QInput',
        'QAvatar'
      ],
      //animations
      skeletonAnimations: [
        'wave', 'pulse', 'pulse-x', 'pulse-y', 'fade', 'blink', 'none'
      ]
    }
  }
  
}
  
 
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray; 
     */
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

.custom-skeleton-border{
  border-radius: 10px 0 24px 4p;
  border: 1px solid #aaa;
}
</style>