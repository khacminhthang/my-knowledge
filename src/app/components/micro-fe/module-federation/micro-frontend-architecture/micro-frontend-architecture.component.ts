import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-frontend-architecture',
  templateUrl: './micro-frontend-architecture.component.html',
  styleUrls: ['./micro-frontend-architecture.component.css']
})
export class MicroFrontendArchitectureComponent implements OnInit {

  text1 = `
  nx g @nx/angular:host shell --remotes=shop,cart
  nx g @nx/angular:remote about --host=shell
  `
  text2 = `
  import { ModuleFederationConfig } from '@nx/webpack';
  // Core libraries such as react, angular, redux, ngrx, etc. must be
  // singletons. Otherwise the applications will not work together.
  const coreLibraries = new Set([
    'react',
    'react-dom',
    'react-router-dom',
    // A workspace library for a publish/subscribe
    // system of communication.
    '@acme/pub-sub',
  ]);

  export const config: ModuleFederationConfig = {
    // Share core libraries, and avoid everything else
    shared: (libraryName, defaultConfig) => {
      if (coreLibraries.has(libraryName)) {
        return defaultConfig;
      }

      // Returning false means the library is not shared.
      return false;
    },
  };

  export default config;
  `
  text3 = `
  import { ModuleFederationConfig } from '@nx/webpack';
  import baseConfig from '../../module-federation.config';

  export const config: ModuleFederationConfig = {
    ...baseConfig,
    name: 'shell',
    remotes: ['shop', 'cart', 'about'],
  };

  export default config;
  `
  constructor() { }

  ngOnInit(): void {
  }

}
