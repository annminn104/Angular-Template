import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@shared/pipes/pipes.module';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [IconsComponent],
  imports: [CommonModule, PipesModule],
  exports: [IconsComponent],
})
export class SharedModule {}
