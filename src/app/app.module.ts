import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { RouterModule, Routes } from '@angular/router'; // <-- Import RouteurModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';


const routes: Routes = [
  { path: '', redirectTo: '/list-kitten', pathMatch: 'full' },
  { path: 'create-kitten', component: CreateKittenComponent },
  { path: 'list-kitten', component: ListKittenComponent },
  { path: 'user-kitten', component: UserKittenComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    RouterModule.forRoot(routes) // <-- Include module in our AppModules
  ],
  exports: [RouterModule], // <-- Include module in our AppModules
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
