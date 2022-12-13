import { player, computer } from "./game.js";
import {
  roundResult,
  splitRoundResultPlayer,
  splitRoundResultComputer,
  finalComparedScore,
  finalResult,
} from "./elements.js";

export function showsResultsForAllScreenWidths(string1, string2, string3) {
  roundResult.innerText = string1;
  splitRoundResultPlayer.innerText = string2;
  splitRoundResultComputer.innerText = string3;
}

export function showsFinalScoresAndResults(string) {
  finalComparedScore.innerText = player.score + " : " + computer.score;
  finalResult.innerText = string;
}

export function switchesToNextContainerAfterThisTime(
  thisContainer,
  nextContainer,
  timeInMs
) {
  setTimeout(function () {
    thisContainer.style.display = "none";
    nextContainer.style.display = "grid";
  }, timeInMs);
}
