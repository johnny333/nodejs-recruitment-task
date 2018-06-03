import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { DetailsModule } from './pages/details/details.module';
import { HomeModule } from './pages/home/home.module';
/**
 * Created by jakubkolecki on 03.06.2018.
 */
const routes: Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'details', loadChildren: () => DetailsModule},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [HomeGuard]
})
export class AppRoutingModule {
}
