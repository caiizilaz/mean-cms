import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { CatService } from './services/cat.service';
import { ValidateService } from './services/validate.service';

import { ToastOptions } from 'ng2-toastr';
import { CustomOption } from './custom-option';
import { Config } from './class/config';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { AddEditPostComponent } from './components/add-edit-post/add-edit-post.component';
import { ManageCatComponent } from './components/manage-cat/manage-cat.component';
import { CatFilterPipe } from './pipes/cat-filter.pipe';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewPostComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostCardComponent,
    HeaderBarComponent,
    AddEditPostComponent,
    ManageCatComponent,
    CatFilterPipe,
    ViewPostComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    PostService,
    CatService,
    AuthGuard,
    Config,
    { provide: ToastOptions, useClass: CustomOption }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
