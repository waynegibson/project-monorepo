import type { MetaObject } from 'nuxt/schema'

export const meta: MetaObject = {
  titleTemplate: (title?: string) => !title ? 'Demo Example' : `${title} | 'Demo Example`,
  htmlAttrs: {
    class: 'font-sans font-normal antialiased h-full',
  },
  bodyAttrs: {
    class: 'bg-white text-gray-500',
  },
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }, // TEMPORARY DURING DEVELOPMENT
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
    { name: 'charset', content: 'utf-8' },
    { hid: 'keywords', property: 'keywords', content: '' },
    { hid: 'author', property: 'author', content: 'Spacecomx' },
    { hid: 'og-url', property: 'og:url', content: 'https://example.com' },
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-image', property: 'og:image', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
  ],
  noscript: [
    { children: 'Javascript is required to view the website' },
  ],
}
