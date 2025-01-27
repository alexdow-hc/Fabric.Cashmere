import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {ComponentApiComponent} from './component-viewer/component-api/component-api.component';
import {ComponentExamplesComponent} from './component-viewer/component-examples/component-examples.component';
import {ComponentUsageComponent} from './component-viewer/component-usage/component-usage.component';
import {DocItemType} from '../core/document-items.service';

const componentsDocType: DocItemType = 'components';

const routes: Route[] = [
    {
        path: 'web/' + componentsDocType,
        component: ComponentsComponent,
        data: {docType: componentsDocType}
    },
    {
        path: `web/${componentsDocType}/:id`,
        component: ComponentsComponent,
        data: {docType: componentsDocType},
        children: [
            {path: 'api', component: ComponentApiComponent, pathMatch: 'full', data: {docType: componentsDocType}},
            {path: 'examples', component: ComponentExamplesComponent, pathMatch: 'full', data: {docType: componentsDocType}},
            {path: 'usage', component: ComponentUsageComponent, pathMatch: 'full', data: {docType: componentsDocType}},
            {path: '**', redirectTo: 'examples'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class ComponentsRouterModule {}
