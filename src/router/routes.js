
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '/', component: () => import('pages/ajaxBar.vue') },
      { path: '/avatar', component: () => import('pages/avatar.vue') },
      { path: '/badge', component: () => import('pages/badge.vue') },
      { path: '/banner', component: () => import('pages/banner.vue') },
      { path: '/bar', component: () => import('pages/bar.vue') },
      { path: '/breadCrumbs', component: () => import('pages/breadCrumbs.vue') },
      { path: '/buttons', component: () => import('pages/buttons.vue') },
      { path: '/card', component: () => import('pages/card.vue') },
      { path: '/chat', component: () => import('pages/chatMessage.vue') },
      { path: '/chip', component: () => import('pages/chip.vue') },
      { path: '/circular', component: () => import('pages/circularProgress.vue') },
      { path: '/carousel', component: () => import('pages/crousal.vue') },
       { path: '/buttonGroup', component: () => import('components/buttonsType/buttonGroup.vue') },
      { path: '/buttonDropdown', component: () => import('components/buttonsType/buttonDropdown.vue') },
      { path: '/colorPicker', component: () => import('pages/colorPicker.vue') },
      { path: '/dialog', component: () => import('pages/dialog.vue') },
      { path: '/Editor', component: () => import('pages/editor.vue') },
      { path: '/expansion', component: () => import('pages/expansionItem.vue') },
      { path: '/floatingActionButton', component: () => import('pages/floatingActionButton.vue') },
      
      { path: '/input', component: () => import('pages/formComponents.vue') },
      { path: '/select', component: () => import('components/formComponents/select.vue') },
      { path: '/file-picker', component: () => import('components/formComponents/file-picker.vue') },
      { path: '/form', component: () => import('components/formComponents/form.vue') },
      { path: '/Redio', component: () => import('components/formComponents/Redio.vue') },
      { path: '/checkbox', component: () => import('components/formComponents/checkbox.vue') },
      { path: '/toggel', component: () => import('components/formComponents/toggel.vue') },
      { path: '/button-toggel', component: () => import('components/formComponents/button-toggel.vue') },
      { path: '/optionGroup', component: () => import('components/formComponents/optionGroup.vue') },
      { path: '/Slider', component: () => import('components/formComponents/slider.vue') },
      { path: '/range', component: () => import('components/formComponents/range.vue') },
      { path: '/time-picker', component: () => import('components/formComponents/timePicker.vue') },
      { path: '/date-picker', component: () => import('components/formComponents/datePicker.vue') },
      
      { path: '/icon', component: () => import('pages/icon.vue') },
      { path: '/img', component: () => import('pages/img.vue') },
      { path: '/infiniteScroll', component: () => import('pages/infiniteScroll.vue') },
      { path: '/innerLoading', component: () => import('pages/innerLoading.vue') },

      { path: '/intersection', component: () => import('pages/intersection.vue') },
      { path: '/Knob', component: () => import('pages/Knob.vue') },
      { path: '/linearProgress', component: () => import('pages/linearProgress.vue') },
      { path: '/list', component: () => import('pages/list.vue') },
      { path: '/markupTable', component: () => import('pages/markupTable.vue') },
      { path: '/menu', component: () => import('pages/menu.vue') },
      { path: '/nossr', component: () => import('pages/nossr.vue') },
      { path: '/observer', component: () => import('pages/observer.vue') },
      { path: '/pagination', component: () => import('pages/pagination.vue') },
      { path: '/parallax', component: () => import('pages/parallax.vue') },
      { path: '/popupedit', component: () => import('pages/popupedit.vue') },
      { path: '/popupproxy', component: () => import('pages/popupproxy.vue') },
      { path: '/pulltorefresh', component: () => import('pages/pulltorefresh.vue') },

      { path: '/rating', component: () => import('pages/rating.vue') },
      { path: '/responsive', component: () => import('pages/responsive.vue') },
      { path: '/scrollArea', component: () => import('pages/scrollArea.vue') },
      { path: '/separator', component: () => import('pages/separator.vue') },
      { path: '/skeleton', component: () => import('pages/skeleton.vue') },
      { path: '/slideItem', component: () => import('pages/slideItem.vue') },
      { path: '/slideTransition', component: () => import('pages/slideTransition.vue') },
      { path: '/space', component: () => import('pages/space.vue') },
      { path: '/spinners', component: () => import('pages/spinners.vue') },
      { path: '/splitter', component: () => import('pages/splitter.vue') },


      { path: '/stepper', component: () => import('pages/stepper.vue') },
      { path: '/table', component: () => import('pages/table.vue') },
      { path: '/tabs', component: () => import('pages/tabs.vue') },
      { path: '/tabPanels', component: () => import('pages/tabPanels.vue') },
      { path: '/timeline', component: () => import('pages/timeline.vue') },
      { path: '/toolbar', component: () => import('pages/toolbar.vue') },
      { path: '/tooltip', component: () => import('pages/tooltip.vue') },
      { path: '/tree', component: () => import('pages/tree.vue') },
      { path: '/uploader', component: () => import('pages/uploader.vue') },
      { path: '/vedio', component: () => import('pages/vedio.vue') },
      { path: '/virtualScroll', component: () => import('pages/virtualScroll.vue') },
      
      { path: '/app-fullscreen', component: () => import('pages/app-fullscreen.vue') },
      { path: '/bottom-sheet', component: () => import('pages/bottom-sheet.vue') },
      { path: '/dialogPlugin', component: () => import('pages/dialogPlugin.vue') },
      { path: '/loadingPlugin', component: () => import('pages/loadingPlugin.vue') },
      { path: '/notify', component: () => import('pages/notify.vue') },
      
      
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
