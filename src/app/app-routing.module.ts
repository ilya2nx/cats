import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";

const routes: Routes = [
  {path: '', component: TileComponent},
  {path: 'table', component: TableComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}