import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PinchZoomComponent} from './pinch-zoom.component';

@NgModule({
  declarations: [
    PinchZoomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PinchZoomComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    PinchZoomComponent
  ]
})
export class PinchZoomModule {
}
