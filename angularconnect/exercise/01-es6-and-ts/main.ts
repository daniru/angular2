import {VideoGame} from "./VideoGame";
import {BoardGame} from "./BoardGame";

let gtav = new VideoGame("GTAV", "PS4");
let monopoly = new BoardGame("Monopoly");

document.body.innerHTML = `
	<div>${gtav.play()}</div>
	<div>${monopoly.play()}</div>`;
