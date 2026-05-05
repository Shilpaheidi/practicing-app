import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { ParentDataComponent } from './parent-data/parent-data.component';

// const routes: Routes = [{ path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent }, {
//   path: 'about', component: AboutComponent
// }, { path: 'contact', component: ContactComponent }];

// const routes: Routes = [
//   {
//     path: '', 
//     component: ParentComponent, // Parent component
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       { path: 'contact', component: ContactComponent },
//       { path: '', redirectTo: 'home', pathMatch: 'full' }  // Default to home
//     ]
//   },
//   { path: '**', redirectTo: '' } // Redirect any unknown routes
// ];

const routes: Routes = [
  // {
  //   path: 'parent',  // Parent route
  //   component: ParentComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'about', component: AboutComponent },
  //     { path: 'contact', component: ContactComponent },
  //     { path: '', redirectTo: 'home', pathMatch: 'full' } // Default to home
  //   ]
  // },
  // { path: '**', redirectTo: 'parent' } // Redirect any unknown routes

  { path: '', component: HomeComponent },
  { path: 'data-child', component: ChildDataComponent }, {
    path: 'about', component: ParentDataComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
