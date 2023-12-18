/*
Colby Mei
Dec 2023
GUI1
*/

// This array is copied from the handout. Added image member.
var sTiles = [] ;
sTiles["A"] = { "value" : 1,  "total-start" : 9,  "num-left" : 9,  "image" : "images/Scrabble_Tile_A.jpg"  } ;
sTiles["B"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_B.jpg"  } ;
sTiles["C"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_C.jpg"  } ;
sTiles["D"] = { "value" : 2,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_D.jpg"  } ;
sTiles["E"] = { "value" : 1,  "total-start" : 12, "num-left" : 12, "image" : "images/Scrabble_Tile_E.jpg"  } ;
sTiles["F"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_F.jpg"  } ;
sTiles["G"] = { "value" : 2,  "total-start" : 3,  "num-left" : 3,  "image" : "images/Scrabble_Tile_G.jpg"  } ;
sTiles["H"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_H.jpg"  } ;
sTiles["I"] = { "value" : 1,  "total-start" : 9,  "num-left" : 9,  "image" : "images/Scrabble_Tile_I.jpg"  } ;
sTiles["J"] = { "value" : 8,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_J.jpg"  } ;
sTiles["K"] = { "value" : 5,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_K.jpg"  } ;
sTiles["L"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_L.jpg"  } ;
sTiles["M"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_M.jpg"  } ;
sTiles["N"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_N.jpg"  } ;
sTiles["O"] = { "value" : 1,  "total-start" : 8,  "num-left" : 8,  "image" : "images/Scrabble_Tile_O.jpg"  } ;
sTiles["P"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_P.jpg"  } ;
sTiles["Q"] = { "value" : 10, "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_Q.jpg"  } ;
sTiles["R"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_R.jpg"  } ;
sTiles["S"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_S.jpg"  } ;
sTiles["T"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_T.jpg"  } ;
sTiles["U"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_U.jpg"  } ;
sTiles["V"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_V.jpg"  } ;
sTiles["W"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_W.jpg"  } ;
sTiles["X"] = { "value" : 8,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_X.jpg"  } ;
sTiles["Y"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_Y.jpg"  } ;
sTiles["Z"] = { "value" : 10, "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_Z.jpg"  } ;
sTiles["_"] = { "value" : 0,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_Blank.jpg"  } ;

// Single row of scrabble from the example
// Board images manually cropped
var sBoard = {};

sBoard.slots = [];
sBoard.slots[0] = [];
sBoard.slots[0][0] = { "letterMult": 1, "wordMult": 2, "image": "images/BoardDWord.png"};
sBoard.slots[0][1] = { "letterMult": 1, "wordMult": 1, "image": "images/BoardBlank.png"};
sBoard.slots[0][2] = { "letterMult": 1, "wordMult": 1, "image": "images/BoardBlank.png"};
sBoard.slots[0][3] = { "letterMult": 2, "wordMult": 1, "image": "images/BoardDLetter.png"};
sBoard.slots[0][4] = { "letterMult": 1, "wordMult": 1, "image": "images/BoardBlank.png"};
sBoard.slots[0][5] = { "letterMult": 1, "wordMult": 1, "image": "images/BoardBlank.png"};
sBoard.slots[0][6] = { "letterMult": 1, "wordMult": 2, "image": "images/BoardDWord.png"};

// counts rows and columns from sBoard
sBoard.rows = Object.keys(sBoard.slots).length;
sBoard.cols = Object.keys(sBoard.slots[0]).length;

// Score tracker
var sScore = { "totalScore": 0, "highScore": 0 };

// Calculates and returns the score for the tiles currently on the board.
sScore.calcBoardScore = function() {
    var letter, value, wordMult = 1, boardScore = 0, row = 0, iCol = 0;

    if (!validateWord()) {
        return 0;
    }
    
    // Count all values with multipliers
    for (iCol = 0; iCol < sBoard.cols; ++iCol) {
        letter = sBoard.slots[row][iCol].letter;
        if (letter) {
            value = sTiles[letter].value;
            boardScore += value * sBoard.slots[row][iCol].letterMult;

            // Adding wordMults
            wordMult *= sBoard.slots[row][iCol].wordMult;
        }
    }

    // Apply wordMult
    boardScore *= wordMult;

    return boardScore;
}

// Creates html board
sBoard.createBoard = function() {
  var row, col, imgPath, newSlot;
  var IMG_WIDTH = 100, IMG_HEIGHT = 110;

  // Set the fixed height for the board appropriate for the number of rows.
  $("#board").css("height", (IMG_HEIGHT + 4) * sBoard.rows);
  // Set the fixed width for the board to accomodate one full row.
  $("#board").css("width", (IMG_WIDTH + 4) * sBoard.cols);

    // Set images
    row = 0;
    for (col = 0; col < sBoard.cols; ++col) {
        imgPath = sBoard.slots[row][col].image;
        newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + imgPath + ")\" />");
        $("#board").append(newSlot);
        newSlot.css({"width": IMG_WIDTH, "height": IMG_HEIGHT, "margin": 1, "border-width": 1});
    }
}

// Clears board
sBoard.clearBoard = function() {
    var row = 0, iCol = 0;

    $("#board img").remove();

    // Reset the slot data structure.
    for (iCol = 0; iCol < sBoard.cols; ++iCol) {
      delete sBoard.slots[row][iCol].tileId;
      delete sBoard.slots[row][iCol].letter;
    }
}

// Adds tile to board slot
sBoard.addToSlot = function(tileId, letter, row, col) {
    var iRow, iCol;

    // If from another slot, clear slot
    iRow = 0
    for (iCol = 0; iCol < sBoard.cols; ++iCol) {
        if (sBoard.slots[iRow][iCol].tileId === tileId) {
            delete sBoard.slots[iRow][iCol].tileId;
            delete sBoard.slots[iRow][iCol].letter;
        }
    }

    // Update slot
    sBoard.slots[row][col].letter = letter;
    sBoard.slots[row][col].tileId = tileId;
}

// Delete slot
sBoard.deleteFromSlot = function(row, col) {
    delete sBoard.slots[row][col].tileId;
    delete sBoard.slots[row][col].letter;
}

// Find slot
sBoard.slotFromID = function(tileId) {
    var row = 0, iCol = 0;
  
        for (iCol = 0; iCol < sBoard.cols; ++iCol) {
            if (sBoard.slots[row][iCol].tileId === tileId) {
                return [row, iCol];
            }
      
        }
  
    return false;
}

// Return Tile ID
sBoard.slotGetID = function(row, col) {
    return sBoard.slots[row][col].tileId;
}

// Return tile letter
sBoard.slotGetLetter = function(row, col) {
    return sBoard.slots[row][col].letter;
}

// Return if slot is empty
sBoard.isSlotEmpty = function(row, col) {
    return typeof(sBoard.slots[row][col].tileId) === "undefined";
}

// Update the scoreboard and page
sScore.refresh = function() {
    var boardScore = sScore.calcBoardScore();

    $("#score").html(sScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");

    $("#highScore").html(sScore.highScore);
}

// Updates the total score and the highest score
sScore.commit = function() {
    var boardScore = sScore.calcBoardScore();

    sScore.totalScore += boardScore;
    $("#score").html(sScore.totalScore);
    
    if (sScore.totalScore > sScore.highScore) {
        sScore.highScore = sScore.totalScore;
        $("#highScore").html(sScore.totalScore);
    }
}

// Resets the score to 0 and the page
sScore.restart = function() {
    sScore.totalScore = 0;
    $("#score").html(0);
}

// Gets n tiles for hand
function getTiles(n) {
    var hand = [];
    var remTiles = [];

    // Make array of remaining tiles
    for (var key in sTiles) {
        if (sTiles.hasOwnProperty(key)) {
            var remaining = sTiles[key]["num-left"];
            for (var i = 0; i < remaining; ++i) {
                remTiles.push(key);
            }
        }
    }

    // Try to pick out up to n tiles
    for (var i = 0; i < n; ++i) {
        if (remTiles.length) {
            var randi = getRandomInt(0, Object.keys(remTiles).length - 1);
            var newLet = remTiles[randi];
            hand.push(newLet);
            --sTiles[newLet]["num-left"];
            remTiles.splice(randi, 1);  // Removes one element from the array.
        }
    }

    // Update remaining tiles
    $("#remainingTiles").html(remTiles.length);

    return hand;
}

// Resets the board and tiles and score
function restart() {
    // Empty rack
    $("#letterRack img").remove();

    // Clear board tiles
    sBoard.clearBoard();

    // Reset deck data
    for (var key in sTiles) {
        if (sTiles.hasOwnProperty(key)) {
            sTiles[key]["num-left"] = sTiles[key]["total-start"];
        }
    }

    sScore.restart();

    // Start the first word.
    submit();
}

// Adds score, Clears board and fills rack
function submit() {
    var i, let, hand, imgID, newTile;

    // Commit Score
    sScore.commit();

    // Clear board.
    sBoard.clearBoard();

    // Draw tiles till 7
    hand = getTiles(7 - $("#letterRack img").length);
    for (i = 0; i < hand.length; ++i) {
        let = hand[i];
        imgID = genID();
        newTile = $("<img id=\"" + imgID + "\" src=\"" + sTiles[let]["image"] + "\" class=\"letterTile\" letter=\"" + let + "\" />");
        if (let == "_") {
            newTile.addClass("blankTile");
        }
        // Add tile image.
        $("#letterRack").append(newTile);

        // Apply CSS for rack tile
        newTile.addClass("onRack");

        // Make the tile draggable.
        newTile.draggable({
            revertDuration: 300,
            start: function(event, ui) {
                // Tile on top z layer
                $(this).css("z-index", 99);

                // Revert option reset
                $(this).draggable("option", "revert", "invalid");
            },
            stop: function() {
                // Revert z index
                $(this).css("z-index", "");
            }
        });
    }

    // Clear word
    $("#word").html("");
}

// Generate tile ID
// https://stackoverflow.com/questions/61723993/generating-incremental-id-using-javascript
function genID() {
    var ret;
    genID.ret = ++genID.ret || 1;
    ret = "tile" + genID.ret.toString();
    return ret;
}

// Returns a random integer from min to max inclusive
// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reads the letters on the board and checks if it is a valid Scrabble word.
// Returns the word for valid, false otherwise
// From pdf
function validateWord() {
    var letter, word = "", row = 0, iCol = 0;

    // Put board letters into string.
    for (iCol = 0; iCol < sBoard.cols; ++iCol) {
        letter = sBoard.slotGetLetter(row, iCol);
        if (typeof(letter) === "undefined") {
            // - to represent missing char
            word += "\xB7";
        } else {
            word += letter;
        }
    }

    // Remove - before and after word
    word = word.replace(/^\xB7+/, "");
    word = word.replace(/\xB7+$/, "");

    $("#word").html(word);

    var regexGap = new RegExp("[A-Z_]\xB7+[A-Z_]");

    // If there are gaps, or less than 2 letters, cannot submit
    if ((regexGap.test(word)) || (word.length < 2)) {
        document.getElementById("submitButton").disabled = true;
        return false;
    }

    document.getElementById("submitButton").disabled = false;
    return word;
}

// Elements load when document is ready, including board and rack
// https://stackoverflow.com/questions/2424191/how-do-i-make-an-element-draggable-in-jquery
// https://stackoverflow.com/questions/22176172/jquery-how-to-enable-droppable-again
// https://stackoverflow.com/questions/885144/how-to-get-current-position-of-an-image-in-jquery
// https://stackoverflow.com/questions/9704087/jquery-add-image-at-specific-co-ordinates
$(document).ready(function() {

    //Create board
    sBoard.createBoard();

    // Make the board slots droppable.
    $(".boardSlot").droppable({
        // Checks for open drop area
        accept: function(draggable) {
            var row, col;

            row = $(this).attr("row");
            col = $(this).attr("col");

            if (sBoard.slotGetID(row, col) === draggable.attr("id")) {
                // Tile gets put back where it started
                return true;
            } else if (sBoard.isSlotEmpty(row, col)) {
                // Tile can be put into empty slot
                return true;
            } else {
                // Slot not empty, move back to start
                return false;
            }
        },
        drop: function(event, ui) {
            var row, col, letter, tileId;

            ui.draggable.removeClass("onRack");
            ui.draggable.addClass("onBoard");

            row = $(this).attr("row");
            col = $(this).attr("col");

            letter = ui.draggable.attr("letter");
            tileId = ui.draggable.attr("id");

            // Tile snap to board
            $(ui.draggable).css("top", "");
            $(ui.draggable).css("left", "");
            $(this).append(ui.draggable);

            sBoard.addToSlot(tileId, letter, row, col);
            // Validate and display the word
            validateWord();

            // Refresh page with score
            sScore.refresh();
        }
    });

    // Make rack droppable
    $("#letterRack").droppable({
        tolerance: "pointer",
        drop: function(event, ui) {
            var tileId, index;

            ui.draggable.removeClass("onBoard");
            ui.draggable.addClass("onRack");

            tileId = ui.draggable.attr("id");
            index = sBoard.slotFromID(tileId);

            if (index) {
                // Tile from board, take off board
                sBoard.deleteFromSlot(index[0], index[1]);

                // Snap tile to rack back
                $("#letterRack").append(ui.draggable);
                ui.draggable.css({"position": "relative", "top": "", "left": ""});

                // Validate and show word
                word = validateWord();

                // Refresh page and score
                sScore.refresh();
            } else {
                // Put tile back into rack
                ui.draggable.draggable("option", "revert", true);
            }
        }
    });

    // Restart and start first batch
    restart();
});

// Last two functions were inspired by the pdf
// Sent pngs of board images to ariana brown
