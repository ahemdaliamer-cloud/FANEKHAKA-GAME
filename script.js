// ===============================
// BLOCK BUSTER PUZZLE
// PHASE 1
// ===============================

// Loading
const loadingScreen = document.getElementById("loadingScreen");
const loadingBar = document.getElementById("loadingBar");
const loadingText = document.getElementById("loadingText");


// Pages
const mainMenu = document.getElementById("mainMenu");
const settingsPage = document.getElementById("settingsPage");
const gameScreen = document.getElementById("gameScreen");

const missionPage =
document.getElementById("missionPage");

const missionBtn =
document.getElementById("missionBtn");

const missionBackBtn =
document.getElementById("missionBackBtn");
const achievementPage =
document.getElementById("achievementPage");

const achievementBtn =
document.getElementById("achievementBtn");

const achievementBackBtn =
document.getElementById("achievementBackBtn");

const aboutPage = document.getElementById("aboutPage");
const aboutBtn = document.getElementById("aboutBtn");
const aboutBackBtn = document.getElementById("aboutBackBtn");


aboutBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    aboutPage.classList.remove("hidden");

};

const privacyPage = document.getElementById("privacyPage");
const privacyBtn = document.getElementById("privacyBtn");
const privacyBackBtn = document.getElementById("privacyBackBtn");


privacyBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    privacyPage.classList.remove("hidden");

};


privacyBackBtn.onclick = ()=>{

    privacyPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};



aboutBackBtn.onclick = ()=>{

    aboutPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};

const howPage = document.getElementById("howPage");
const howBtn = document.getElementById("howBtn");
const howBackBtn = document.getElementById("howBackBtn");

const contactPage = document.getElementById("contactPage");
const contactBtn = document.getElementById("contactBtn");
const contactBackBtn = document.getElementById("contactBackBtn");

const termsPage = document.getElementById("termsPage");
const termsBtn = document.getElementById("termsBtn");
const termsBackBtn = document.getElementById("termsBackBtn");


const footerAbout = document.getElementById("footerAbout");
const footerPrivacy = document.getElementById("footerPrivacy");
const footerTerms = document.getElementById("footerTerms");
const footerContact = document.getElementById("footerContact");
const gameSettingBtn =
document.getElementById("gameSettingBtn");

const gameMenu =
document.getElementById("gameMenu");


gameSettingBtn.onclick=()=>{

gameMenu.classList.remove("hidden");

};


document.getElementById("restartGameBtn").onclick=()=>{

restartGame();

gameMenu.classList.add("hidden");

};


document.getElementById("quitBtn").onclick=()=>{

gameScreen.classList.add("hidden");

mainMenu.classList.remove("hidden");

gameMenu.classList.add("hidden");

};

// Buttons
const playBtn = document.getElementById("playBtn");
const settingBtn = document.getElementById("settingBtn");
const backBtn = document.getElementById("backBtn");

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const music = document.getElementById("music");
const sound = document.getElementById("sound");

howBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    howPage.classList.remove("hidden");

};


howBackBtn.onclick = ()=>{

    howPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};

contactBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    contactPage.classList.remove("hidden");

};


contactBackBtn.onclick = ()=>{

    contactPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};



termsBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    termsPage.classList.remove("hidden");

};


termsBackBtn.onclick = ()=>{

    termsPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};

// Score
const scoreText = document.getElementById("score");
const bestText = document.getElementById("best");


// Board
const board = document.getElementById("board");

// --------------------
// Loading Animation
// --------------------

let percent = 0;

const loading = setInterval(() => {

    percent++;

    loadingBar.style.width = percent + "%";
    loadingText.innerText = "Loading... " + percent + "%";

    if(percent >= 100){

        clearInterval(loading);

        loadingScreen.classList.add("hidden");
        mainMenu.classList.remove("hidden");

    }

},20);

// --------------------
// Score
// --------------------

let score = 0;
let blocksPlaced = Number(localStorage.getItem("blocksPlaced")) || 0;

scoreText.innerText = score;

let best = localStorage.getItem("bestScore");

if(best == null){

    best = 0;
    localStorage.setItem("bestScore",0);

}

bestText.innerText = best;

let combo = Number(localStorage.getItem("combo")) || 0;

// --------------------
// Create Board
// --------------------

let boardCells = [];

function createBoard(){

    board.innerHTML = "";

    boardCells = [];

    for(let i=0;i<64;i++){

        const cell = document.createElement("div");

        cell.className = "cell";

        board.appendChild(cell);

        boardCells.push(cell);

    }

}

createBoard();

// --------------------
// Buttons
// --------------------

playBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");
    gameScreen.classList.remove("hidden");

};

settingBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");
    settingsPage.classList.remove("hidden");

};

backBtn.onclick = ()=>{

    settingsPage.classList.add("hidden");
    mainMenu.classList.remove("hidden");

};



playBtn.onclick = ()=>{

    playClick();

    mainMenu.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    if(music.checked){
        bgMusic.play();
    }

};

console.log("Phase 1 Loaded Successfully");

const restartBtn = document.getElementById("restartBtn");

const gameOverScreen = document.getElementById("gameOverScreen");
const playAgainBtn = document.getElementById("playAgainBtn");

const finalScore = document.getElementById("finalScore");
const finalBest = document.getElementById("finalBest");

let gameOver = false;

achievementBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    achievementPage.classList.remove("hidden");

};

achievementBackBtn.onclick = ()=>{

    achievementPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};

missionBtn.onclick = ()=>{

    mainMenu.classList.add("hidden");

    missionPage.classList.remove("hidden");

};

missionBackBtn.onclick = ()=>{

    missionPage.classList.add("hidden");

    mainMenu.classList.remove("hidden");

};

// ==========================
// PHASE 12 - PART 1
// SCORE POPUP
// ==========================

const scorePopup = document.getElementById("scorePopup");

const achievementPopup = document.getElementById("achievementPopup");

// ==========================
// PHASE 13 - PART 4
// ACHIEVEMENTS SYSTEM
// ==========================

let achievements = JSON.parse(localStorage.getItem("achievements")) || {

    firstLine:false,
    blocks100:false,
    score1000:false,
    comboMaster:false

};

// Check Achievements

function checkAchievements(){


    // First Line Clear

    if(score >= 100 && !achievements.firstLine){

        achievements.firstLine = true;

        showAchievement("First Line Clear!");
        
        localStorage.setItem("achievements", JSON.stringify(achievements));

    }



    // Score 1000

    if(score >= 1000 && !achievements.score1000){

        achievements.score1000 = true;

        showAchievement("Score Master!");

    }
    
    function showAchievement(text){

    achievementPopup.innerText = "🏆 " + text;

    achievementPopup.classList.remove("show");

    void achievementPopup.offsetWidth;

    achievementPopup.classList.add("show");


    if(text=="First Line Clear!")
        document.getElementById("a1").innerText="✅";


    if(text=="Score Master!")
        document.getElementById("a2").innerText="✅";


    if(text=="Combo Master!")
        document.getElementById("a3").innerText="✅";

}



    // Combo

    if(combo >= 5 && !achievements.comboMaster){

        achievements.comboMaster = true;

        showAchievement("Combo Master!");
        
    

    }

localStorage.setItem("achievements", JSON.stringify(achievements));

}

function showAchievement(text){

    achievementPopup.innerText = "🏆 " + text;

    achievementPopup.classList.remove("show");

    void achievementPopup.offsetWidth;

    achievementPopup.classList.add("show");

}


function showScorePopup(amount){

    scorePopup.innerText = "+" + amount;

    scorePopup.classList.remove("show");

    void scorePopup.offsetWidth;

    scorePopup.classList.add("show");

}

function loadAchievements(){

    if(achievements.firstLine){
        document.getElementById("a1").innerText="✅";
    }

    if(achievements.score1000){
        document.getElementById("a2").innerText="✅";
    }

    if(achievements.comboMaster){
        document.getElementById("a3").innerText="✅";
    }

}

// ==========================
// PHASE 11
// SOUND + MUSIC SYSTEM
// ==========================

const placeSound = document.getElementById("placeSound");

const musicBtn = document.getElementById("music");
const soundBtn = document.getElementById("sound");

let savedMusic = localStorage.getItem("music");
let savedSound = localStorage.getItem("sound");


if(savedMusic !== null){
    musicBtn.checked = savedMusic === "true";
}


if(savedSound !== null){
    soundBtn.checked = savedSound === "true";
}


// Music Control

musicBtn.onchange = ()=>{

    localStorage.setItem("music", musicBtn.checked);

    if(musicBtn.checked){
        bgMusic.play();
    }else{
        bgMusic.pause();
    }

};


soundBtn.onchange = ()=>{

    localStorage.setItem("sound", soundBtn.checked);

};


// Sound Function

function playClick(){

    if(soundBtn.checked){

        clickSound.play();

    }

}


// Block Place Sound

function playPlace(){

    if(soundBtn.checked){

        placeSound.play();

    }

}

// ===============================
// PHASE 2 - RANDOM BLOCKS
// ===============================

// Slots
const slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3")
];

// Colours
const colours = [
    "#4DA8FF",
    "#FFC857",
    "#5ECF8D",
    "#FF8A65",
    "#BA68C8",
    "#64B5F6"
];

// Shapes
const shapes = [

[[1]],

[[1,1]],

[[1],[1]],

[[1,1,1]],

[[1],[1],[1]],

[[1,1],[1,1]],

[[1],[1],[1],[1]],

[[1,1,1,1]]

];

// Draw Shape

function drawShape(slot, shape, colour){

    slot.innerHTML = "";
    
   slot.setAttribute("data-shape", JSON.stringify(shape));
slot.dataset.colour = colour;

    shape.forEach(row=>{

        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        
        rowDiv.style.flexDirection = "row";

        row.forEach(box=>{

            const cube = document.createElement("div");

            cube.style.width = "20px";
            cube.style.height = "20px";
            cube.style.margin = "2px";
            cube.style.borderRadius = "5px";

            if(box){

                cube.style.background = colour;

            }else{

                cube.style.visibility = "hidden";

            }

            rowDiv.appendChild(cube);

        });

        slot.appendChild(rowDiv);

    });

}

// Generate Random Blocks

function generateBlocks(){

    slots.forEach(slot=>{

        const shape =
        shapes[Math.floor(Math.random()*shapes.length)];

        const colour =
        colours[Math.floor(Math.random()*colours.length)];

        drawShape(slot,shape,colour);

    });

}

generateBlocks();

// ==========================
// PHASE 3 - PART 1
// BLOCK SELECT
// ==========================

let selectedSlot = null;

let dragging = false;
let dragClone = null;

clearPreview();

function clearPreview(){

    boardCells.forEach(cell=>{

        cell.classList.remove("preview-valid");
        cell.classList.remove("preview-invalid");

    });

}

function showPreview(index){

    clearPreview();

    if(selectedSlot == null) return;

    const shape = JSON.parse(selectedSlot.dataset.shape);

    let row = Math.floor(index / 8);
    let col = index % 8;

    let valid = true;

    // Check placement
    for(let r=0;r<shape.length;r++){

        for(let c=0;c<shape[r].length;c++){

            if(shape[r][c]){

                let newRow = row + r;
                let newCol = col + c;

                if(newRow >= 8 || newCol >= 8){
                    valid = false;
                }else{

                    let cellIndex = newRow * 8 + newCol;

                    if(boardCells[cellIndex].classList.contains("filled")){
                        valid = false;
                    }

                }

            }

        }

    }

    // Draw preview
    for(let r=0;r<shape.length;r++){

        for(let c=0;c<shape[r].length;c++){

            if(shape[r][c]){

                let newRow = row + r;
                let newCol = col + c;

                if(newRow < 8 && newCol < 8){

                    let cellIndex = newRow * 8 + newCol;

                    boardCells[cellIndex].classList.add(
                        valid ? "preview-valid" : "preview-invalid"
                    );

                }

            }

        }

    }

}

slots.forEach(slot => {

    slot.addEventListener("click", () => {

        // Empty slot ho to kuch na karo
        if (slot.innerHTML.trim() === "") return;

        // Pehle sab slots normal karo
        slots.forEach(s => {
            s.style.border = "none";
            s.style.transform = "scale(1)";
            s.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
        });
        


        // Current slot select karo
        selectedSlot = slot;
        
        slot.style.cursor = "grab";
        
        playClick();

slot.style.animation="pop 0.2s";

        // Highlight
        slot.style.border = "3px solid #4DA8FF";
        slot.style.transform = "scale(1.08)";
        slot.style.boxShadow = "0 0 20px rgba(77,168,255,.5)";

    });

});

function getRandomShape(){

    return shapes[
        Math.floor(Math.random() * shapes.length)
    ];

}

function getRandomColour(){

    return colours[
        Math.floor(Math.random() * colours.length)
    ];

}

let lastX = 0;
let lastY = 0;

function startDrag(slot){

    dragging = true;

    selectedSlot = slot;

    dragClone = slot.cloneNode(true);

// slot ka box effect remove
dragClone.style.background = "transparent";
dragClone.style.border = "none";
dragClone.style.boxShadow = "none";
dragClone.style.transform = "scale(1.2)";

    dragClone.style.position = "fixed";
    dragClone.style.pointerEvents = "none";
    dragClone.style.zIndex = "9999";
    dragClone.style.opacity = "0.85";

    document.body.appendChild(dragClone);

}

function moveDrag(x,y){

    if(!dragging || !dragClone) return;

    dragClone.style.left = (x - dragClone.offsetWidth/2) + "px";
    dragClone.style.top  = (y - dragClone.offsetHeight/2) + "px";

}

function endDrag(){

    if(!dragging) return;


    const element = document.elementFromPoint(
        lastX,
        lastY
    );


    if(element && element.classList.contains("cell")){

        const index = boardCells.indexOf(element);

        placeDraggedBlock(index);

    }


    dragging = false;


    if(dragClone){

        dragClone.remove();
        dragClone=null;

    }


    clearPreview();

}

document.addEventListener("touchmove",(e)=>{

    if(selectedSlot == null) return;

    const touch = e.touches[0];

lastX = touch.clientX;
lastY = touch.clientY;


const element = document.elementFromPoint(
    lastX,
    lastY
);
    if(element && element.classList.contains("cell")){

        const index = boardCells.indexOf(element);

        showPreview(index);

    }

});


document.addEventListener("mousemove", (e) => {

    if (!dragging) return;

    lastX = e.clientX;
    lastY = e.clientY;

    moveDrag(lastX, lastY);

    const element = document.elementFromPoint(lastX, lastY);

    if (element && element.classList.contains("cell")) {
        showPreview(boardCells.indexOf(element));
    }

});
// ==========================
// PHASE 3 - PART 3
// MULTIPLE BLOCK PLACEMENT
// ==========================

boardCells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{
      
      if(gameOver) return;

        if(selectedSlot == null) return;

      const shape = JSON.parse(selectedSlot.getAttribute("data-shape"));
        const colour = selectedSlot.dataset.colour;


        let row = Math.floor(index / 8);
        let col = index % 8;


        // Check space available
        let canPlace = true;


        for(let r=0;r<shape.length;r++){

            for(let c=0;c<shape[r].length;c++){

                if(shape[r][c]){

                    let newRow = row + r;
                    let newCol = col + c;


                    // Board ke bahar
                    if(newRow >= 8 || newCol >= 8){

                        canPlace = false;

                    }


                    if(canPlace){

                        let checkIndex = newRow * 8 + newCol;

                        if(boardCells[checkIndex].classList.contains("filled")){

                            canPlace = false;

                        }

                    }

                }

            }

        }


        if(!canPlace){

            alert("Yahan block place nahi ho sakta");
            return;

        }


        // Place block

        for(let r=0;r<shape.length;r++){

            for(let c=0;c<shape[r].length;c++){

                if(shape[r][c]){

                    let placeIndex = (row + r) * 8 + (col + c);
                  boardCells[placeIndex].style.background = colour;

                    boardCells[placeIndex].classList.add("filled");
                    
                    boardCells[placeIndex].classList.add("pop")
                    
                    setTimeout(()=>{

boardCells[placeIndex].classList.remove("pop");

},200);
                    
                    playPlace();
                    addCoins(1);
                    
                    if(score == 0){

    showAchievement("First Block Placed!");
    
    blocksPlaced++;
    localStorage.setItem("blocksPlaced", blocksPlaced);

updateMissions();

}

                }

            }

        }


        // Remove used block

        selectedSlot.innerHTML = "";

        selectedSlot.style.border = "none";

        selectedSlot.style.transform = "scale(1)";

        selectedSlot.style.boxShadow =
        "0 8px 20px rgba(0,0,0,0.12)";


selectedSlot = null;

checkLines();

checkNewBlocks();

checkGameOver();

    });

});


// ==========================
// PHASE 3 - PART 8
// GAME OVER CHECK
// ==========================

function checkGameOver(){

    let canMove = false;


    slots.forEach(slot=>{

        if(slot.innerHTML.trim() !== ""){

            const shape = JSON.parse(slot.dataset.shape);


            for(let i=0;i<64;i++){

                let row = Math.floor(i / 8);
                let col = i % 8;

                let possible = true;


                for(let r=0;r<shape.length;r++){

                    for(let c=0;c<shape[r].length;c++){

                        if(shape[r][c]){

                            let newRow = row + r;
                            let newCol = col + c;


                            if(newRow >= 8 || newCol >= 8){

                                possible = false;

                            }


                            if(possible){

                                let index = newRow * 8 + newCol;


                                if(boardCells[index].classList.contains("filled")){

                                    possible = false;

                                }

                            }

                        }

                    }

                }


                if(possible){

                    canMove = true;

                }

            }

        }

    });


    if(!canMove){

    gameOver = true;

    finalScore.innerText = score;

    finalBest.innerText = best;

    gameOverScreen.classList.remove("hidden");

}
}

// ==========================
// PHASE 3 - PART 9
// RESTART SYSTEM
// ==========================

// ==========================
// PHASE 3 - PART 9
// RESTART SYSTEM
// ==========================

function restartGame(){

    // Board clear
    boardCells.forEach(cell=>{

    cell.style.background = "";
    cell.classList.remove("filled");

});

combo = 0;
localStorage.setItem("combo", 0);

updateMissions();


    // Score reset
    score = 0;

    scoreText.innerText = score;
    localStorage.setItem("missionScore", score);


    // Selected block remove
    selectedSlot = null;


    // Game over reset
    gameOver = false;


    // Game over screen hide
    gameOverScreen.classList.add("hidden");


    // New blocks
    generateBlocks();

}


// Restart button
restartBtn.onclick = ()=>{

    restartGame();

};


// Play Again button (Game Over screen)
playAgainBtn.onclick = ()=>{

    restartGame();

};

// ==========================
// PHASE 3 - PART 6
// TOUCH FEEDBACK
// ==========================

boardCells.forEach(cell=>{

    cell.addEventListener("touchstart",()=>{

        if(selectedSlot == null) return;

        cell.style.transform = "scale(1.05)";

    });


    cell.addEventListener("touchend",()=>{

        cell.style.transform = "scale(1)";

    });

});

function addScore(amount){

    score += amount;
    scoreText.innerText = score;

    localStorage.setItem("missionScore", score);

    if(score > best){
        best = score;
        bestText.innerText = best;
        localStorage.setItem("bestScore", best);
    }
}
function addCombo(){

    combo++;

    let bonus = combo * 50;

    addScore(100 + bonus);

    showScorePopup(100 + bonus);
  
localStorage.setItem("combo", combo);

    checkAchievements();

}

// ==========================
// PHASE 3 - PART 4
// LINE CLEAR SYSTEM
// ==========================

function checkLines(){
  
  let lineCleared = false;

    // ROW CHECK
    for(let r = 0; r < 8; r++){

        let full = true;

        for(let c = 0; c < 8; c++){

            let index = r * 8 + c;

            if(!boardCells[index].classList.contains("filled")){
                full = false;
            }

        }

if(full){

    clearRow(r);
    addCombo();
    lineCleared = true;
    addCoins(10);

}

 }


    // COLUMN CHECK
    for(let c = 0; c < 8; c++){

        let full = true;

        for(let r = 0; r < 8; r++){

            let index = r * 8 + c;

            if(!boardCells[index].classList.contains("filled")){
                full = false;
            }

        }

if(full){

    clearColumn(c);
    addCombo();
    lineCleared = true;
    addCoins(10);

}

    }


scoreText.innerText = score;

if(!lineCleared){

    combo = 0;
    localStorage.setItem("combo", 0);

}


}

// ==========================
// CLEAR ROW
// ==========================

function clearRow(row){

    for(let c = 0; c < 8; c++){

        let index = row * 8 + c;

        boardCells[index].classList.add("clear");

        setTimeout(()=>{

            boardCells[index].style.background = "";

            boardCells[index].classList.remove("filled");

            boardCells[index].classList.remove("clear");

        },300);

    }

}


// ==========================
// PHASE 3 - PART 5
// COLUMN CLEAR + NEW BLOCKS
// ==========================


function clearColumn(col){

    for(let r = 0; r < 8; r++){

        let index = r * 8 + col;

        boardCells[index].classList.add("clear");

        setTimeout(()=>{

            boardCells[index].style.background = "";

            boardCells[index].classList.remove("filled");

            boardCells[index].classList.remove("clear");

        },300);

    }

}


function checkNewBlocks(){

    let empty = true;


    slots.forEach(slot=>{

        if(slot.innerHTML.trim() !== ""){

            empty = false;

        }

    });


    if(empty){

        generateBlocks();

    }

}



function updateMissions(){

    document.getElementById("m1").innerText =
    blocksPlaced + "/50";


    document.getElementById("m2").innerText =
    score + "/1000";


    document.getElementById("m3").innerText =
    combo + "/5";


}

loadAchievements();

score = Number(localStorage.getItem("missionScore")) || 0;
scoreText.innerText = score;
updateMissions();

document.addEventListener("touchmove",(e)=>{

    if(!dragging) return;

    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;

  moveDrag(lastX, lastY);

    const element = document.elementFromPoint(lastX, lastY);

    if(element && element.classList.contains("cell")){
        showPreview(boardCells.indexOf(element));
    }

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    lastX = e.clientX;
lastY = e.clientY;

moveDrag(lastX, lastY);

}

);



document.addEventListener("touchend",()=>{

    if(!dragging) return;

    endDrag();

});

document.addEventListener("mouseup",()=>{

    if(!dragging) return;

    endDrag();

});

board.addEventListener("mouseleave",()=>{

    clearPreview();

});

document.addEventListener("touchend",()=>{

    clearPreview();

});

document.addEventListener("mouseup",()=>{

    clearPreview();

});

function placeDraggedBlock(index){

    if(selectedSlot == null) return;


    const shape =
    JSON.parse(selectedSlot.dataset.shape);


    const colour =
    selectedSlot.dataset.colour;


    let row=Math.floor(index/8);
    let col=index%8;


    let valid=true;


    shape.forEach((r,y)=>{

        r.forEach((box,x)=>{

            if(box){

                let nr=row+y;
                let nc=col+x;


                if(nr>=8 || nc>=8){

                    valid=false;

                }
                else if(
                boardCells[nr*8+nc]
                .classList.contains("filled")
                ){

                    valid=false;

                }

            }

        });

    });


    if(!valid){

        alert("Invalid Move");
        return;

    }


    shape.forEach((r,y)=>{

        r.forEach((box,x)=>{

            if(box){

                let i=(row+y)*8+(col+x);

                boardCells[i].style.background=colour;

                boardCells[i]
                .classList.add("filled");

            }

        });

    });


    playPlace();


    selectedSlot.innerHTML="";


    selectedSlot=null;


    checkLines();

    checkNewBlocks();

    checkGameOver();

}



slots.forEach(slot=>{

    slot.addEventListener("mousedown",()=>{
        startDrag(slot);
    });

    slot.addEventListener("touchstart",(e)=>{
        e.preventDefault();
        startDrag(slot);
    });

});


// ==========================
// COIN SYSTEM
// ==========================

const coinText = document.getElementById("coins");

let coins = Number(localStorage.getItem("coins")) || 0;

coinText.innerText = "🪙 " + coins;


function addCoins(amount){

    coins += amount;

    coinText.innerText = "🪙 " + coins;

    localStorage.setItem("coins", coins);

}

function openAbout(){

    mainMenu.classList.add("hidden");
    aboutPage.classList.remove("hidden");

}

function openPrivacy(){

    mainMenu.classList.add("hidden");
    privacyPage.classList.remove("hidden");

}

function openTerms(){

    mainMenu.classList.add("hidden");
    termsPage.classList.remove("hidden");

}

function openContact(){

    mainMenu.classList.add("hidden");
    contactPage.classList.remove("hidden");

}

footerAbout.onclick = ()=>{

    mainMenu.classList.add("hidden");
    aboutPage.classList.remove("hidden");

};


footerPrivacy.onclick = ()=>{

    mainMenu.classList.add("hidden");
    privacyPage.classList.remove("hidden");

};


footerTerms.onclick = ()=>{

    mainMenu.classList.add("hidden");
    termsPage.classList.remove("hidden");

};


footerContact.onclick = ()=>{

    mainMenu.classList.add("hidden");
    contactPage.classList.remove("hidden");

};




