import { charactersArr } from "../../../features/mocks/chraractersData";
import { DtoCharacter } from "../../../features/models/card";
import { Card } from "../card/card";

export function Cards() {
  const cards: DtoCharacter[] = [];
  console.log(cards);
  return (
    <ul className="characters-list row list-unstyled">
      {charactersArr.map((item) => (
        <>
          <Card card={item}></Card>
        </>
      ))}
    </ul>
  );
}
