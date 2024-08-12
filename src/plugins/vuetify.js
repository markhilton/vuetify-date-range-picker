// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// make sure to also import the corresponding css
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// Vuetify
import { createVuetify } from 'vuetify'
// import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'
import { mdi } from 'vuetify/lib/iconsets/mdi'
import { VDateInput } from 'vuetify/labs/VDateInput'
// import { fa } from 'vuetify/iconsets/fa'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  title: 'Vuetify Date Picker',
  components: {
    ...components,
    VDateInput
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  },
  theme: {
    dark: false,
    themes: {
      light: {
        colors: {
          background: '#FFFFFF'
        }
      },
      dark: {
        colors: {
          background: '#212121'
        }
      }
    }
  }
})
