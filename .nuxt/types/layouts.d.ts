import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/caroline/Bureau/Mon-Kit-Apero/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}