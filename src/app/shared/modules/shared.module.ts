import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@shared/pipes/pipes.module';
import { IconsComponent } from './icons/icons.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [IconsComponent, ButtonComponent],
  imports: [CommonModule, PipesModule],
  exports: [IconsComponent, ButtonComponent],
})
export class SharedModule {}
