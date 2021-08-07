import { Component, OnInit } from "@angular/core";
import { Heroe } from "../../interfaces/heroes.interface";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styles: [`
  .example-card {
  max-width: 400px;
}

.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}

  `],
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
