import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CaptionPipe } from './pipes/caption.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    RootComponent,
    ListComponent,
    CaptionPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
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
