import { Brawler } from "../models/brawler.js";
import { King } from "../models/king.js";
import { RightHand } from "../models/rightHand.js";
import { Squire } from "../models/squire.js";

const joffrey = new King(
  {
    series: "Juego de Tronos",
    name: "Joffrey Baratheon",
    family: "Baratheon",
    age: 19,
    isAlive: true,
  },
  1
);

const jaime = new Brawler(
  {
    series: "Juego de Tronos",
    name: "Jamie Lannister",
    family: "Lannister",
    age: 34,
    isAlive: true,
  },
  "Sword"
);

const daenerys = new Brawler(
  {
    series: "Juego de Tronos",
    name: "Daenerys Targaryen",
    family: "Targaryen",
    age: 22,
    isAlive: true,
  },
  "Dragon"
);

const tyrion = new RightHand(
  {
    series: "Juego de Tronos",
    name: "Tyrion Lannister",
    family: "Lannister",
    age: 27,
    isAlive: true,
  },
  "Daenerys Targaryen"
);

const bronn = new Squire({
  series: "Juego de Tronos",
  name: "Bronn",
  family: "Bronn",
  age: 35,
  isAlive: true,
});

export const charactersArr = [joffrey, jaime, daenerys, tyrion, bronn];
