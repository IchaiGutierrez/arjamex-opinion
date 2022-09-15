//modulos angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//modulos material
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelect, MatSelectModule} from '@angular/material/select';

//modulos app
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { UsersComponent } from './users/users.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProvidersComponent } from './providers/providers.component';
import { CreateProviderComponent } from './providers/create-provider/create-provider.component';
import { EditProviderComponent } from './providers/edit-provider/edit-provider.component';
import { ViewProviderComponent } from './providers/view-provider/view-provider.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './invoices/create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './invoices/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './invoices/view-invoice/view-invoice.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    TopBarComponent,
    UsersComponent,
    ProvidersComponent,
    CreateProviderComponent,
    EditProviderComponent,
    ViewProviderComponent,
    InvoicesComponent,
    CreateInvoiceComponent,
    EditInvoiceComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


