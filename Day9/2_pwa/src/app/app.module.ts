import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        };
      }
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
