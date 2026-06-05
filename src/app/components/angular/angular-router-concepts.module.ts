import { NgModule } from '@angular/core';
import { AngularSharedFeatureModule } from './angular-shared-feature.module';
import { RouterComponent } from './router/router.component';
import { RouterPart2Component } from './router-part2/router-part2.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { GuardsAndResolversPart1Component } from './guards-and-resolvers-part1/guards-and-resolvers-part1.component';
import { GuardsAndResolversPart2Component } from './guards-and-resolvers-part2/guards-and-resolvers-part2.component';
import { GuardsAndResolversPart3Component } from './guards-and-resolvers-part3/guards-and-resolvers-part3.component';

@NgModule({
  declarations: [
    RouterComponent,
    RouterPart2Component,
    LazyLoadComponent,
    GuardsAndResolversPart1Component,
    GuardsAndResolversPart2Component,
    GuardsAndResolversPart3Component,
  ],
  imports: [AngularSharedFeatureModule],
})
export class AngularRouterConceptsModule {}
