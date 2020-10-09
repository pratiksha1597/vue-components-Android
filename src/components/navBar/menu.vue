<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-scroll-area   :thumb-style="thumbStyle"
      :bar-style="barStyle" style="height: 730px; width: 230px ">
      <q-list>
        <q-item to="/" exact clickable>
          <q-item-section avatar>
            <q-icon name="font_download" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ajax Bar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/avatar" exact clickable>
          <q-item-section avatar>
            <q-icon name="directions" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Avatar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/badge" exact clickable>
          <q-item-section avatar>
            <q-icon name="notifications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Badge</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/banner" exact clickable>
          <q-item-section avatar>
            <q-icon name="view_agenda" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Banner</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/bar" exact clickable>
          <q-item-section avatar>
            <q-icon name="wifi" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Bar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/breadCrumbs" exact clickable>
          <q-item-section avatar>
            <q-icon name="widgets" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Breadcrumbs</q-item-label>
          </q-item-section>
        </q-item>

        <!-------------------------------- Submenu Coding start ------------------------------------------------>

        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="layers"
          label="Button"
        >
          <q-item to="/buttons" exact clickable>
            <q-item-section>
              <q-item-label>Button</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/buttonGroup" exact clickable>
            <q-item-section>
              <q-item-label>Button Group</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/buttonDropdown" exact clickable>
            <q-item-section>
              <q-item-label>Button Dropdown</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <!-------------------------------- Submenu Coding End ------------------------------------------------>

        <q-item to="/card" exact clickable>
          <q-item-section avatar>
            <q-icon name="card_membership" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Card</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/carousel" exact clickable>
          <q-item-section avatar>
            <q-icon name="terrain" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Carousel</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/chat" exact clickable>
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Chat Message</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/chip" exact clickable>
          <q-item-section avatar>
            <q-icon name="bookmark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>chip</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/circular" exact clickable>
          <q-item-section avatar>
            <q-icon name="rotate_90_degrees_ccw" />
          </q-item-section>
          <q-item-section>
            <q-item-label>circular progress</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/colorPicker" exact clickable>
          <q-item-section avatar>
            <q-icon name="invert_colors" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Color Picker</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dialog" exact clickable>
          <q-item-section avatar>
            <q-icon name="how_to_vote" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dialog</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Editor" exact clickable>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Editor WYSIWYG</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/expansion" exact clickable>
          <q-item-section avatar>
            <q-icon name="control_point" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ExpansionItem</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/floatingActionButton" exact clickable>
          <q-item-section avatar>
            <q-icon name="all_inclusive" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Floating Action Button</q-item-label>
          </q-item-section>
        </q-item>


        <!-------------------------------- Submenu Coding start ------------------------------------------------>

        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="filter_none"
          label="Form Components"
        >
          <q-item to="/input" exact clickable>
            <q-item-section>
              <q-item-label>Input Textfield</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/select" exact clickable>
            <q-item-section>
              <q-item-label>Select</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/file-picker" exact clickable>
            <q-item-section>
              <q-item-label>File Picker</q-item-label>
            </q-item-section>
          </q-item>

           <q-item to="/form" exact clickable>
            <q-item-section>
              <q-item-label>Form</q-item-label>
            </q-item-section>
          </q-item>

          <!-- <q-item to="/field" exact clickable>
            <q-item-section>
              <q-item-label>Field(Wrapper)</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item to="/Redio" exact clickable>
            <q-item-section>
              <q-item-label>Redio</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/checkbox" exact clickable>
            <q-item-section>
              <q-item-label>Checkbox</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/toggel" exact clickable>
            <q-item-section>
              <q-item-label>toggel</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/button-toggel" exact clickable>
            <q-item-section>
              <q-item-label>Button Toggel</q-item-label>
            </q-item-section>
          </q-item>

           <q-item to="/optionGroup" exact clickable>
            <q-item-section>
              <q-item-label>Option Group</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/slider" exact clickable>
            <q-item-section>
              <q-item-label>Slider</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/range" exact clickable>
            <q-item-section>
              <q-item-label>Range</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/time-picker" exact clickable>
            <q-item-section>
              <q-item-label>Time Picker</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/date-picker" exact clickable>
            <q-item-section>
              <q-item-label>Date Picker</q-item-label>
            </q-item-section>
          </q-item>



        </q-expansion-item>
        <!-------------------------------- Submenu Coding End ------------------------------------------------>

      <q-item to="/icon" exact clickable>
          <q-item-section avatar>
            <q-icon name="report_problem" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Icon</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/img" exact clickable>
          <q-item-section avatar>
            <q-icon name="collections" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Img</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/infiniteScroll" exact clickable>
          <q-item-section avatar>
            <q-icon name="eject " />
          </q-item-section>
          <q-item-section>
            <q-item-label>Infinite Scroll</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/innerLoading" exact clickable>
          <q-item-section avatar>
            <q-icon name="loop" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inner Loading</q-item-label>
          </q-item-section>
        </q-item>

         <q-item to="/intersection" exact clickable>
          <q-item-section avatar>
            <q-icon name="bubble_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Intersection</q-item-label>
          </q-item-section>
        </q-item>



         <q-item to="/Knob" exact clickable>
          <q-item-section avatar>
            <q-icon name="replay" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Knob</q-item-label>
          </q-item-section>
        </q-item>


        <q-item to="/linearProgress" exact clickable>
          <q-item-section avatar>
            <q-icon name="format_align_justify " />
          </q-item-section>
          <q-item-section>
            <q-item-label>Linear Progress</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/list" exact clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>List & List Items</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/markupTable" exact clickable>
          <q-item-section avatar>
            <q-icon name="table_view" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Markup Table</q-item-label>
          </q-item-section>
        </q-item>

         <q-item to="/menu" exact clickable>
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Menu</q-item-label>
          </q-item-section>
        </q-item>

         <!-- <q-item to="/nossr" exact clickable>
          <q-item-section avatar>
            <q-icon name="loop" />
          </q-item-section>
          <q-item-section>
            <q-item-label>No SSR</q-item-label>
          </q-item-section>
        </q-item> -->

         <q-item to="/observer" exact clickable>
          <q-item-section avatar>
            <q-icon name="policy" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Observer</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/pagination" exact clickable>
          <q-item-section avatar>
            <q-icon name="dynamic_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pagination</q-item-label>
          </q-item-section>
        </q-item>

         <q-item to="/parallax" exact clickable>
          <q-item-section avatar>
            <q-icon name="all_inbox" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Parallax</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/popupedit" exact clickable>
          <q-item-section avatar>
            <q-icon name="bookmarks" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Popup Edit</q-item-label>
          </q-item-section>
        </q-item>


        <q-item to="/popupproxy" exact clickable>
          <q-item-section avatar>
            <q-icon name="signal_wifi_off" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Popup Proxy</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/pulltorefresh" exact clickable>
          <q-item-section avatar>
            <q-icon name="restore_page" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pull To Refresh</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/rating" exact clickable>
          <q-item-section avatar>
            <q-icon name="grade" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Rating</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/responsive" exact clickable>
          <q-item-section avatar>
            <q-icon name="queue" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Responsive</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/scrollArea" exact clickable>
          <q-item-section avatar>
            <q-icon name="keyboard_capslock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Scroll Area</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/separator" exact clickable>
          <q-item-section avatar>
            <q-icon name="drag_handle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Separator</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/skeleton" exact clickable>
          <q-item-section avatar>
            <q-icon name="filter_frames" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Skeleton</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/slideItem" exact clickable>
          <q-item-section avatar>
            <q-icon name="portrait" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Slide Item</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/slideTransition" exact clickable>
          <q-item-section avatar>
            <q-icon name="movie_creation" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Slide Transition</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/space" exact clickable>
          <q-item-section avatar>
            <q-icon name="payments" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Space</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/spinners" exact clickable>
          <q-item-section avatar>
            <q-icon name="miscellaneous_services" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Spinners</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/splitter" exact clickable>
          <q-item-section avatar>
            <q-icon name="align_vertical_bottom" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Splitter</q-item-label>
          </q-item-section>
        </q-item>


        <!-- --------------------- start working on 01102020 -->


          <q-item to="/stepper" exact clickable>
          <q-item-section avatar>
            <q-icon name="linear_scale" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Stepper</q-item-label>
          </q-item-section>
        </q-item>

            <q-item to="/table" exact clickable>
          <q-item-section avatar>
            <q-icon name="table_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Table</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/tabs" exact clickable>
          <q-item-section avatar>
            <q-icon name="calendar_view_day" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tab</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/tabPanels" exact clickable>
          <q-item-section avatar>
            <q-icon name="view_week" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tab Panels</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/timeline" exact clickable>
          <q-item-section avatar>
            <q-icon name="av_timer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Timeline</q-item-label>
          </q-item-section>
        </q-item>


          <q-item to="/toolbar" exact clickable>
          <q-item-section avatar>
            <q-icon name="error_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Toolbar</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/tooltip" exact clickable>
          <q-item-section avatar>
            <q-icon name="toll" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tooltip</q-item-label>
          </q-item-section>
        </q-item>


          <q-item to="/tree" exact clickable>
          <q-item-section avatar>
            <q-icon name="device_hub" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tree</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/uploader" exact clickable>
          <q-item-section avatar>
            <q-icon name="control_point_duplicate" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Uploader</q-item-label>
          </q-item-section>
        </q-item>


          <q-item to="/vedio" exact clickable>
          <q-item-section avatar>
            <q-icon name="video_library" />
          </q-item-section>
          <q-item-section>
            <q-item-label>video</q-item-label>
          </q-item-section>
        </q-item>

          <q-item to="/virtualScroll" exact clickable>
          <q-item-section avatar>
            <q-icon name="play_for_work" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Virtual Scroll</q-item-label>
          </q-item-section>
        </q-item>

           <!-------------------------------- Submenu Coding start ------------------------------------------------>

        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="extension"
          label="Quasar Plugins"
        >
          <q-item to="/app-fullscreen" exact clickable>
            <q-item-section>
              <q-item-label>App Fullscreen</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/bottom-sheet" exact clickable>
            <q-item-section>
              <q-item-label>Bottom Sheet</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/dialogPlugin" exact clickable>
            <q-item-section>
              <q-item-label>Dialog Plugin</q-item-label>
            </q-item-section>
          </q-item>

           <q-item to="/loadingPlugin" exact clickable>
            <q-item-section>
              <q-item-label>Loading Plugin</q-item-label>
            </q-item-section>
          </q-item>

           <q-item to="/notify" exact clickable>
            <q-item-section>
              <q-item-label>Notify</q-item-label>
            </q-item-section>
          </q-item>

        </q-expansion-item>
        <!-------------------------------- Submenu Coding End ------------------------------------------------>




      </q-list>
    </q-scroll-area>
  </div>
</template>
<script>
export default {
   data(){
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'gray',
        width: '5px',
        opacity: 0.75,
         show:true
      },
       barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'gray',
        width: '9px',
        opacity: 0.2
      }
      
    }
  }
};
</script>
<style scoped>
/* .q-item {
  color: dimgray;
} */

/* .q-expansion-item {
  color: dimgray;
} */
</style>