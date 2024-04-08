import { es } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

export default defaultConfig({
  locales: {
    es: {
      ...es,
      validation: {
        required: () => 'Campo Requerido.'
      }
    }
  },
  locale: 'es'
})
