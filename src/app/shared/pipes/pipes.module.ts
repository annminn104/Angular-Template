import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModifiersPipe } from './map-modifiers.pipe';

@NgModule({
  declarations: [MapModifiersPipe],
  imports: [CommonModule],
  exports: [MapModifiersPipe],
})
export class PipesModule {}
