const input = Deno.readTextFileSync('./3.txt');

type Coords = {
  x: number,
  y: number
};

let santaCoords: Coords = {x:0, y:0};
let robosantaCoords: Coords = {x:0, y:0};
let coordsString = (coords: Coords) => {return `${coords.x},${coords.y}`};
let map = new Map<string, number>();

map.set(coordsString(santaCoords), 2);

Array.from(input).forEach((char, index) => {
  const currentCords = index % 2 === 0 ? santaCoords : robosantaCoords;
  switch(char) {
    case "<":
      currentCords.x--;
      break;
    case ">":
      currentCords.x++;
      break;
    case "^":
      currentCords.y++;
      break;
    case "v":
      currentCords.y--;
      break;
  }
  const value = map.get(coordsString(currentCords));
  map.set(coordsString(currentCords), value === undefined ? 1 : value + 1);
})

console.log("Santa visited " + map.size + " houses.");


