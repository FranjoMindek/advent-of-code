const input = await Deno.readTextFile('./2.txt');
const inputs = input.split(/\r?\n/);
const dimensions = inputs.map((input) => input.split("x")
  .map(string => parseInt(string))
  .sort((a, b) => a-b));

function calculatePapaer(dimensions: number[][]): number {
  let area = 0;
  dimensions.forEach( dimension => {
    area += 2*(dimension[0]*dimension[1] + dimension[0]*dimension[2] + dimension[1]*dimension[2]) + dimension[0]*dimension[1];
  });
  return area;
}

function calculateRibbon(dimensions: number[][]): number {
  let area = 0;
  dimensions.forEach( dimension => {
    area += 2*(dimension[0] + dimension[1]) + dimension[0]*dimension[1]*dimension[2];
  });
  return area;
}

console.log("Needed paper area: " + calculatePapaer(dimensions));
console.log("Needed ribbon area: " + calculateRibbon(dimensions));