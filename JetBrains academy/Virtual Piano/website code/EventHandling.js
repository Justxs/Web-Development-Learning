//Event handler for all piano button presses
document.addEventListener("keydown", function (event) {
    let audio;
    let play = false;
    if (event.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        audio = new Audio("keys/A.mp3");
        play = true;
    } else if (event.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        audio = new Audio("keys/S.mp3");
        play = true;
    } else if (event.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        audio = new Audio("keys/D.mp3");
        play = true;
    } else if (event.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        audio = new Audio("keys/F.mp3");
        play = true;
    } else if (event.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        audio = new Audio("keys/G.mp3");
        play = true;
    } else if (event.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        audio = new Audio("keys/H.mp3");
        play = true;
    } else if (event.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        audio = new Audio("keys/J.mp3");
        play = true;
    } else if (event.code === "KeyW") {
        console.log("The 'W' key is pressed.");
        audio = new Audio("keys/W.mp3");
        play = true;
    } else if (event.code === "KeyE") {
        console.log("The 'E' key is pressed.");
        audio = new Audio("keys/E.mp3");
        play = true;
    } else if (event.code === "KeyT") {
        console.log("The 'T' key is pressed.");
        audio = new Audio("keys/T.mp3");
        play = true;
    } else if (event.code === "KeyY") {
        console.log("The 'Y' key is pressed.");
        audio = new Audio("keys/Y.mp3");
        play = true;
    } else if (event.code === "KeyU") {
        console.log("The 'U' key is pressed.");
        audio = new Audio("keys/U.mp3");
        play = true;
    } else {
        console.warn("Warning wrong key pressed");
        play = false;
    }
    if (play == true) {
        audio.play();
    }
});
