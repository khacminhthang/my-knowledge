import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-library-versions-with-module-federation',
  templateUrl: './manage-library-versions-with-module-federation.component.html',
  styleUrls: ['./manage-library-versions-with-module-federation.component.css']
})
export class ManageLibraryVersionsWithModuleFederationComponent implements OnInit {

  text1 = `
  import { ModuleFederationConfig } from '@nx/webpack';

  const config: ModuleFederationConfig = {
    name: 'remote',
    exposes: {
      './Module': './src/remote-entry.ts',
    },
    // Determine which libraries to share
    shared: (packageName: string) {
      // I do not want to share this package and I will load my own version
      if(packageName === '@acme/utils') return false;
    }
  };
  export default config;
  `
  text2 = `
  module.exports = {
    plugins: [
      new ModuleFederationPlugin({
        // additional config
        name: 'remote',
        shared: {
          react: { singleton: true, eager: true },
          // acme/utils will not be shared
        },
      }),
    ],
  };
  `
  text3 = `
  import { ModuleFederationConfig } from '@nx/webpack';

  const config: ModuleFederationConfig = {
    name: 'remote',
    exposes: {
      './Module': './src/remote-entry.ts',
    },
    // By not declaring a shared function, all dependencies will be shared
  };
  export default config;
  `
  text4 = `
    module.exports = {
    // Additional config ignored for brevity
    plugins: [
      new ModuleFederationPlugin({
        // ...
        name: 'remote',
        shared: {
          react: { singleton: true, eager: true, version: '18.2.0' },
          'acme/utils': { singleton: true, eager: true, version: '1.0.0' }, // <--- This version is determined by the logic discussed earlier
        },
      }),
    ],
  };
  `

  constructor() { }

  ngOnInit(): void {
  }

}
