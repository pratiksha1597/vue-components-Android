
<template>

<div >
       
       <!------------------- Tital and Path(breadcrumbs) code Start ----------->

    <div class="router-header flex flex-wrap items-center">
     <div>
       <h5>Icon</h5>
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
      <q-breadcrumbs-el label="Icon" />
    </q-breadcrumbs>

   </div>
 <!------------------- Tital and Path(breadcrumbs) code End ----------->


  


    <div>
      <q-item-section id="rcorners3">
        <q-item-label>
        The QIcon component allows you to easily insert icons within other components or any other area of your pages.  Quasar supports out of the box: Material Icons, Font Awesome, Ionicons, MDI, Eva Icons, Themify Icons and Line Awesome.  

        </q-item-label>
      </q-item-section>
    </div>

        <!-- ------------------- basic Icon Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Size and Color</div>
                <div class="text-subtitle2">
                  <q-item-section id="rcorners3">
        <q-item-label>
        The sizing of a <code>QIcon</code> is manipulated by the <code>font-size </code>CSS property. Also, <code>QIcon</code> inherits the current CSS text color used. For ease of use there are the QIcon <code>size </code> and <code>color</code> props.
        </q-item-label>
      </q-item-section>
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="text-purple q-gutter-md" style="font-size: 2em">
      <q-icon name="font_download" />
      <q-icon name="warning" />
      <q-icon name="format_size" />
      <q-icon name="print" />
      <q-icon name="today" />
      <q-icon name="style" />
    </div>

    <div class="q-mt-md q-gutter-md">
      <q-icon name="font_download" class="text-primary" style="font-size: 32px;" />
      <q-icon name="warning" class="text-red" style="font-size: 4rem;" />
      <q-icon name="format_size" style="color: #ccc; font-size: 1.4em;" />
      <q-icon name="print" class="text-teal" style="font-size: 4.4em;" />
      <q-icon name="today" class="text-orange" style="font-size: 2em;" />
      <q-icon name="style" style="font-size: 3em;" />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- basic Icon Code End ---------- -->
 
         <!-- ------------------- Standard Sizes Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Standard Sizes</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                   <div class="q-pa-md">
    <div class="text-purple q-gutter-md">
      <q-icon
        v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
        :key="size"
        :size="size"
        name="font_download"
      />
    </div>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Standard Sizes Code End ---------- -->
 
         <!-- ------------------- Dynamic SVG Code Start ---------- -->
    <div class="q-pa-md row1">
        <div class="column">
          <div class="col">
            <q-card  class="my-card">
              <q-card-section>
                <div class="text-h6">Dynamic SVG</div>
                <div class="text-subtitle2">
                  
                  <div class="q-gutter-sm">
                    <div class="q-pa-md row no-wrap items-center justify-around">
    <q-icon size="100px" :name="girlSvg" />

    <q-btn :dense="$q.screen.xs" no-caps label="Face" icon-right="colorize" color="primary">
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-color v-model="colorFace" />
      </q-popup-proxy>
    </q-btn>

    <q-btn :dense="$q.screen.xs" no-caps label="Hair" icon-right="colorize" color="secondary">
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-color v-model="colorHair" />
      </q-popup-proxy>
    </q-btn>
  </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </div>
      <!-- ------------------- Dynamic SVG Code End ---------- -->
 
    
  


  </div>
</template>

<script>


export default {
  data () {
    return {
      colorFace: '#B33636',
      colorHair: '#FFD700'
    }
  },

  computed: {
    girlSvg () {
      const colorFace = this.colorFace.replace('#', '%23')
      const colorHair = this.colorHair.replace('#', '%23')
      return `img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="${colorFace}"><path fill="none" d="M0 0h24v24H0V0z"/><path stroke="${colorHair}" fill="${colorHair}" stroke-linecap="round" opacity=".5" d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z"/><path stroke="none" fill="${colorFace}" stroke-linecap="round"  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/></svg>`
    }
  }
    
}
</script>
<style scoped>

h5{
    margin-left: 30px;
    font-family:'Times New Roman', Times, serif;
    /* color:dimgray;  */
    
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

</style>