import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ExampleComponent } from './pages/example/example.component';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
