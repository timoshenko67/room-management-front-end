import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'rooms', pathMatch: 'full'
  },
  {
    path: 'rooms', component: RoomListComponent
  },
  {
    path: 'add', component: CreateRoomComponent
  },
  {
    path: 'update/:id', component: RoomUpdateComponent
  },
  {
    path: 'details/:id', component: RoomDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
