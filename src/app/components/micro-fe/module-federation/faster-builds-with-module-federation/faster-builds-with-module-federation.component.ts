import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faster-builds-with-module-federation',
  templateUrl: './faster-builds-with-module-federation.component.html',
  styleUrls: ['./faster-builds-with-module-federation.component.css']
})
export class FasterBuildsWithModuleFederationComponent implements OnInit {

  text1 = `
  # Replace acme with desired scope
  npx create-nx-workspace acme --preset=apps
  cd acme
  `
  text2 = `
  # If you use React
  nx add @nx/react

  # If you use Angular
  nx add @nx/angular
  `
  text3 = `nx g @nx/angular:host host --remotes=shop,cart,about`
  text4 = `nx serve host --open`
  text5 = `nx serve host --open --devRemotes="shop,cart"`
  text6 = `
  // apps/host/project.json
  {
    //...
    "implicitDependencies": ["about", "shop", "cart"]
  }
  `
  text7 = `
  // For Angular, you'll see @nx/angular/module-federation
  import { withModuleFederation } from '@nx/react/module-federation';
  import moduleFederationConfig from './module-federation.config';

  export default withModuleFederation({
    ...moduleFederationConfig,
  });
  `
  text8 =  `
  import { withModuleFederation } from '@nx/angular/module-federation';
  import config from './module-federation.config';
  import { LicenseWebpackPlugin } from 'license-webpack-plugin';
  import { resolve } from 'path';

  export default async function (wco) {
    const wmf = await withModuleFederation(config);
    return wmf({
      ...wco,
      plugins: [
        ...(wco.plugins ?? []),
        new LicenseWebpackPlugin({
          stats: {
            warnings: false,
            errors: false,
          },
          perChunkOutput: false,
          outputFilename: '3rdpartylicenses.txt',
          skipChildCompilers: true,
          modulesDirectories: [resolve(__dirname, '../../node_modules')],
        }),
      ],
    });
  }
  `
  text9 = `
  import { ModuleFederationConfig } from '@nx/webpack';

  export const config: ModuleFederationConfig = {
    name: 'host',
    remotes: ['shop', 'cart', 'about'],
  };

  export default config;
  `
  text10 = `
  // module-federation.config.ts
  import { ModuleFederationConfig } from '@nx/webpack';

  export const config: ModuleFederationConfig = {
    name: 'host',
    remotes: ['shop', 'cart', 'about'],
    shared: (name, config) => {
      // We want lodash to be tree shaken, and bundled into each host/remote separately.
      if (name === 'lodash') {
        return false;
      }
    },
  };
  `
  text11 = `
  nx serve host

  # (kill server)

  nx serve host
  `
  text12 = `
  > nx run about:build:development  [existing outputs match the cache, left as is]

  (snip)

  NX   Successfully ran target build for project about

  Nx read the output from the cache instead of running the command for 1 out of 1 tasks.
  `
  text13 = `
    {
    //...
    "implicitDependencies": ["about", "shop", "cart"]
  }
  `
  text14 = `
  import { withModuleFederation } from '@nx/react/module-federation';
  import moduleFederationConfig from './module-federation.config';

  export default withModuleFederation({
    ...moduleFederationConfig,
    remotes: [
      ['shop', 'http://localhost:3000/shop'],
      ['cart', 'http://localhost:3000/cart'],
      ['about', 'http://localhost:3000/about'],
    ],
  });
  `
  text15 = `
    dist/apps
  ├── about
  ├── cart
  ├── host
  └── shop
  `
  text16 = `
  nx g @nx/workspace:run-commands \
  deploy \
  --project=host \
  --command="rm -rf production && mkdir production && cp -r dist/apps/host/* production && cp -r dist/apps/{shop,cart,about} production && http-server -p 3000 -a localhost production"
  `
  text17 = `
  production/
  ├── about
  │   ├── remoteEntry.js
  │   └── (snip)
  ├── cart
  │   ├── remoteEntry.js
  │   └── (snip)
  ├── shop
  │   ├── remoteEntry.js
  │   └── (snip)
  ├── index.html
  └── (snip)
  `
  constructor() { }

  ngOnInit(): void {
  }

}
