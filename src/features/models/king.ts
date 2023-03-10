import { DtoCharacter } from "./card";
import { Character } from "../models/character";

export class King extends Character {
  public reign: number;

  constructor(dtoK: DtoCharacter, reign: number) {
    const dtoCharacter: DtoCharacter = {
      series: dtoK.series,
      name: dtoK.name,
      family: dtoK.family,
      age: dtoK.age,
      isAlive: dtoK.isAlive,
    };
    super(dtoCharacter, "Vais a morir todos");
    this.reign = reign;
  }
}
