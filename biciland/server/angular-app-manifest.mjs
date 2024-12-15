
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 726, hash: '2e435b4f11fba59f94aea6cc120f7d78ebe93207653bf0588c1311a30fae87cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'f078568caf5c4cbcb73b97747d8dc58bd852a7391e4c5c9c23fe55143cc94888', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MD57DGJK.css': {size: 540, hash: 'yuU0yJ4gXgE', text: () => import('./assets-chunks/styles-MD57DGJK_css.mjs').then(m => m.default)}
  },
};
