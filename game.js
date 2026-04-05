alreadyT = [];
lined = [];
a = [];
for (var c = 0; c <= 9; c++) { lined[c] = 0; }
for (var b = 0; b <= 81; b++) {
  alreadyT[b] = 0;
  a[b] = 0;
}
var undoo = 0;
var nowplay = 1;
var lastT = 0;
var prevLastT = 0;


function touch(event) {
  var i = parseInt(event.target.dataset.index);
  if (isNaN(i)) return;

  var currentTable = Math.floor((i - 1) / 9) + 1;
  var cellInTable = ((i - 1) % 9) + 1;
  var nextTable = cellInTable;

  if (lastT == 0) {
    alreadyT[i] = nowplay;
    a[i].setAttribute("src", nowplay + ".jpg");
    a[i].setAttribute("alt", nowplay + " spot(s)");
    line();
    bigline();
    nowplay = 2 - (nowplay + 1) % 2;
    prevLastT = lastT;
    lastT = i;
    undoo = 1;
    document.getElementById("hint").innerHTML =
      "🎯 You just played in <b>Table #" + currentTable + "</b>, Cell #" + cellInTable +
      "<br>🎯 Now opponent must play in <b>Table #" + nextTable + "</b> (↘ top-left to bottom-right)";
  }
  else if (lined[(lastT - 1) % 9 + 1] == 0) {
    if (Math.floor((i - 1) / 9) + 1 == (lastT - 1) % 9 + 1 && alreadyT[i] == 0) {
      alreadyT[i] = nowplay;
      a[i].setAttribute("src", nowplay + ".jpg");
      a[i].setAttribute("alt", nowplay + " spot(s)");
      line();
      bigline();
      nowplay = 2 - (nowplay + 1) % 2;
      prevLastT = lastT;
      lastT = i;
      undoo = 1;
      document.getElementById("hint").innerHTML =
        "🎯 You just played in <b>Table #" + currentTable + "</b>, Cell #" + cellInTable +
        "<br>🎯 Now opponent must play in <b>Table #" + nextTable + "</b> (↘ top-left to bottom-right)";
    } else {
      var lastTable = Math.floor((lastT - 1) / 9) + 1;
      var lastCell = ((lastT - 1) % 9) + 1;
      var nextTableAlert = lastCell;
      window.alert(
        "🎯 You just played in Table #" + lastTable + ", Cell #" + lastCell +
        "\n🎯 Now opponent must play in Table #" + nextTableAlert + " (↘ top-left to bottom-right)"
      );
    }
  }
  else if (alreadyT[i] == 0 && lined[(lastT - 1) % 9 + 1] != 0) {
    alreadyT[i] = nowplay;
    a[i].setAttribute("src", nowplay + ".jpg");
    a[i].setAttribute("alt", nowplay + " spot(s)");
    line();
    bigline();
    nowplay = 2 - (nowplay + 1) % 2;
    prevLastT = lastT;
    lastT = i;
    undoo = 1;
    document.getElementById("hint").innerHTML =
      "🎯 You just played in <b>Table #" + currentTable + "</b>, Cell #" + cellInTable +
      "<br>🎯 Now opponent must play in <b>Table #" + nextTable + "</b> (↘ top-left to bottom-right)";
  }
}


function line() {
  for (var i = 1; i <= 81; i++) {
    if (i % 3 == 1) {
      if (alreadyT[i] == nowplay && alreadyT[i + 1] == nowplay && alreadyT[i + 2] == nowplay) {
        lined[(i - i % 9) / 9 + 1] = nowplay;
        for (var j = (((i - i % 9) / 9 + 1) - 1) * 9 + 1; j <= (((i - i % 9) / 9 + 1) - 1) * 9 + 9; j++) {
          a[i].setAttribute("src", nowplay + ".jpg");
          a[j].setAttribute("alt", nowplay);
        }
      }
    }
    if (i % 9 == 1 || i % 9 == 2 || i % 9 == 3) {
      if (alreadyT[i] == nowplay && alreadyT[i + 3] == nowplay && alreadyT[i + 6] == nowplay) {
        lined[(i - i % 9) / 9 + 1] = nowplay;
        for (var j = (((i - i % 9) / 9 + 1) - 1) * 9 + 1; j <= (((i - i % 9) / 9 + 1) - 1) * 9 + 9; j++) {
          a[i].setAttribute("src", nowplay + ".jpg");
          a[j].setAttribute("alt", nowplay);
        }
      }
    }
    if (i % 9 == 1 || i % 9 == 3) {
      if (alreadyT[i] == nowplay && alreadyT[(5 - i % 9) + i] == nowplay && alreadyT[(10 - i % 9 - i % 9) + i] == nowplay) {
        lined[(i - i % 9) / 9 + 1] = nowplay;
        for (var j = (((i - i % 9) / 9 + 1) - 1) * 9 + 1; j <= (((i - i % 9) / 9 + 1) - 1) * 9 + 9; j++) {
          a[i].setAttribute("src", nowplay + ".jpg");
          a[j].setAttribute("alt", nowplay);
        }
      }
    }
  }
}


function bigline() {
  var nowplayy = nowplay;
  for (var i = 1; i <= 9; i++) {
    if (i % 3 == 1) {
      if (lined[i] == nowplayy && lined[i + 1] == nowplayy && lined[i + 2] == nowplayy) {
        window.alert(nowplayy + " player You win");
      }
    }
    if (i == 1 || i == 2 || i == 3) {
      if (lined[i] == nowplayy && lined[i + 3] == nowplayy && lined[i + 6] == nowplayy) {
        window.alert(nowplayy + " player You win");
      }
    }
    if (i == 1 || i == 3) {
      if (lined[i] == nowplayy && lined[5] == nowplayy && lined[10 - i] == nowplayy) {
        window.alert(nowplayy + " player You win");
      }
    }
  }
}


function undo() {
  if (undoo == 1) {
    alreadyT[lastT] = 0;
    a[lastT].setAttribute("src", "blank.png");
    a[lastT].setAttribute("alt", "blank");
    lastT = prevLastT;
    undoo = 0;
    nowplay = 2 - (nowplay + 1) % 2;
  } else {
    window.alert(" you can only undo once");
  }
}


function AItry() {
  var nowAI = ((lastT - 1) % 9) * 9 + Math.floor(1 + Math.random() * 8);
  if (lined[(lastT - 1) % 9 + 1] != 0) {
    nowAI = Math.floor(Math.random() * 8) * 9 + Math.floor(1 + Math.random() * 8);
    if (lined[(nowAI - 1) % 9 + 1] != 0) { AItry(); }
    else if (alreadyT[nowAI] == 0) {
      alreadyT[nowAI] = nowplay;
      a[nowAI].setAttribute("src", nowplay + ".jpg");
      a[nowAI].setAttribute("alt", nowplay + " spot(s)");
      line();
      bigline();
      nowplay = 2 - (nowplay + 1) % 2;
      prevLastT = lastT;
      lastT = nowAI;
      undoo = 1;
      var currentTable = Math.floor((lastT - 1) / 9) + 1;
      var cellInTable = ((lastT - 1) % 9) + 1;
      var nextTable = cellInTable;
      document.getElementById("hint").innerHTML =
        "🎯 You just played in <b>Table #" + currentTable + "</b>, Cell #" + cellInTable +
        "<br>🎯 Now opponent must play in <b>Table #" + nextTable + "</b> (↘ top-left to bottom-right)";
    }
  }
  else if (alreadyT[nowAI] == 0) {
    alreadyT[nowAI] = nowplay;
    a[nowAI].setAttribute("src", nowplay + ".jpg");
    a[nowAI].setAttribute("alt", nowplay + " spot(s)");
    line();
    bigline();
    nowplay = 2 - (nowplay + 1) % 2;
    prevLastT = lastT;
    lastT = nowAI;
    undoo = 1;
    var currentTable = Math.floor((lastT - 1) / 9) + 1;
    var cellInTable = ((lastT - 1) % 9) + 1;
    var nextTable = cellInTable;
    document.getElementById("hint").innerHTML =
      "🎯 You just played in <b>Table #" + currentTable + "</b>, Cell #" + cellInTable +
      "<br>🎯 Now opponent must play in <b>Table #" + nextTable + "</b> (↘ top-left to bottom-right)";
  }
  else { AItry(); }
}


function start() {
  document.querySelectorAll('img[data-index]').forEach(function(img) {
    var i = parseInt(img.dataset.index);
    a[i] = img;
    img.addEventListener('click', touch, false);
  });
  document.getElementById('AI').addEventListener('click', AItry, false);
  document.getElementById('undo1').addEventListener('click', undo, false);
}

window.addEventListener('load', start, false);
