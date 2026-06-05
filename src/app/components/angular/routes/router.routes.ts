import { Routes } from '@angular/router';
import { GuardsAndResolversPart1Component } from '../guards-and-resolvers-part1/guards-and-resolvers-part1.component';
import { GuardsAndResolversPart2Component } from '../guards-and-resolvers-part2/guards-and-resolvers-part2.component';
import { GuardsAndResolversPart3Component } from '../guards-and-resolvers-part3/guards-and-resolvers-part3.component';
import { LazyLoadComponent } from '../lazy-load/lazy-load.component';
import { RouterPart2Component } from '../router-part2/router-part2.component';
import { RouterComponent } from '../router/router.component';

export const ROUTER_CONCEPT_ROUTES: Routes = [
  { path: 'router', component: RouterComponent },
  { path: 'router-part2', component: RouterPart2Component },
  { path: 'lazy-load', component: LazyLoadComponent },
  { path: 'guards-and-resolvers-part1', component: GuardsAndResolversPart1Component },
  { path: 'guards-and-resolvers-part2', component: GuardsAndResolversPart2Component },
  { path: 'guards-and-resolvers-part3', component: GuardsAndResolversPart3Component },
];
