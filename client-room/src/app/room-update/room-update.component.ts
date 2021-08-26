import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  id: number;
  room: Room;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
               private router: Router,
               private roomService: RoomService) { }

  ngOnInit() {

    this.room = new Room();

    this.id = this.activatedRoute.params['id'];

    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data);
        this.room = data;
      },
      error => console.log(error)
      )

  }

  updateRoom(){
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data),
        error => console.log(error)
      );
    this.room = new Room();
    this.goToList();
  }

  onSubmit(){
    this.updateRoom();
  }

  goToList(){
    this.router.navigate(['/rooms']);
  }

}
