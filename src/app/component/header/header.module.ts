import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
