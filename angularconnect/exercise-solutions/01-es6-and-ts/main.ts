import {BoardGame} from "./boardGame";
import {VideoGame} from "./videoGame";

let sonic = new VideoGame("Sonic the Hedgehog");
let monopoly = new BoardGame("Monopoly");

document.body.innerHTML = `
    <div>${sonic.play()}</div>
    <div>${monopoly.play()}</div>
`;