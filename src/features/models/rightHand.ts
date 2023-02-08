import { DtoCharacter } from "./card";
import { Character } from "../models/character";

export class RightHand extends Character {
  public assess: string;
  constructor(dtoRH: DtoCharacter, assess: string) {
    const dtoRHand: DtoCharacter = {
      series: dtoRH.series,
      name: dtoRH.name,
      family: dtoRH.family,
      age: dtoRH.age,
      isAlive: dtoRH.isAlive,
    };
    super(dtoRHand, "No se por que, pero creo que voy a morir pronto");
    this.assess = assess;
  }

  hand() {
    return this.assess;
  }
}
