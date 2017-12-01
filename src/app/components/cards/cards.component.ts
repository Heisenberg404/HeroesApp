import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../domain/heroe';
import {HeroesService} from '../../services/heroes.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data: any;
  dataUsers: any;
  dataUsersFilter: any;
  heroes: Array<Heroe> = [];
  heroesFilter: Array<Heroe> = [];
  filter: string;
  constructor(private heroesService: HeroesService, private userService: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllData() {
    this.heroesService.getAllCharacters().subscribe(result => {
      this.data = result.data;
      this.getAllCharacters();
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(result => {
      this.dataUsers = result;
      this.dataUsersFilter = this.dataUsers;
      console.log(this.dataUsers);
    });
  }

  getAllCharacters() {
    for (let index = 0; index < this.data.results.length; ++index) {
      console.log(this.data.results[index]);
      const hero = new Heroe(this.data.results[index].name, this.data.results[index].description,
        this.data.results[index].urls[0].url, this.data.results[index].thumbnail.path);
      this.heroes.push(hero);
    }
    this.heroesFilter = this.heroes;
  }

  filterList(newValue) {
    console.log(newValue);
    this.filter = newValue.target.value;
    if (this.filter) {
      this.dataUsersFilter = this.dataUsers.filter(x => x.name.toLowerCase().includes(this.filter.toLowerCase()) );
    }else {
      this.getAllUsers();
    }
  }


}
