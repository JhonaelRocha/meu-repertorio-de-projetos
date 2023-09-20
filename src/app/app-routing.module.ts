import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { UnityPageComponent } from './pages/unity-page/unity-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'content',
        component: ContentComponent
    },
    {
        path: 'unity-projects',
        component: UnityPageComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
