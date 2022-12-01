let imgjson = { images: [] };
let fs = require("fs");

for (var i = 0; i < 900; i++) {
  imgjson.images.push(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  );
}

fs.writeFileSync("./images.json", JSON.stringify(imgjson));
