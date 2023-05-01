const body = document.querySelector("body");
// body.style.backgroundColor = "black";

const mainDiv = document.createElement("main");
body.appendChild(mainDiv);
mainDiv.className = "keyboard-wrapper";

const text = document.createElement("textarea");
mainDiv.appendChild(text);
text.className = "text-container";
text.type = "text";
text.autofocus = true;

const keysContainer = document.createElement("div");
mainDiv.appendChild(keysContainer);
keysContainer.className = "keys-container";

const info = document.createElement("div");
const infoWindows = document.createElement("div");

const infoLanguage = document.createElement("div");
infoLanguage.className = "info-text";
infoWindows.className = "info-text";
mainDiv.appendChild(info);
info.appendChild(infoWindows);
info.appendChild(infoLanguage);
info.className = "info";

infoWindows.innerHTML = "Виртуальная клавиатура для Windows";
infoLanguage.innerHTML = "Для переключения языка: Left Ctrl + Left Alt";

function fillKeys() {
  // ROWS
  keysContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const keyRow = document.createElement("div");
    if (i === 0) {
      keyRow.className = "key-row first-row";
    } else if (i === 1) {
      keyRow.className = "key-row second-row";
    } else if (i === 2) {
      keyRow.className = "key-row third-row";
    } else if (i === 3) {
      keyRow.className = "key-row fourth-row";
    } else if (i === 4) {
      keyRow.className = "key-row fifth-row";
    }
    keysContainer.append(keyRow);
  }

  const firstRow = document.querySelector(".first-row");
  for (let i = 0; i < 14; i++) {
    const keysFirstRow = document.createElement("div");

    keysFirstRow.className = "keys-first-row key";
    if (i == 0) {
      keysFirstRow.className = "keys-first-row key special-symbols Backquote";
    } else if (i === 13) {
      keysFirstRow.className = "keys-first-row key backspace";
    } else {
      keysFirstRow.className = "keys-first-row key key-symbols";
    }
    firstRow.append(keysFirstRow);

    // FIRST ROW SYMBOLS
    const firstRowKeysSymbols = document.createElement("span");
    firstRowKeysSymbols.className = "first-row-symbols";
    keysFirstRow.appendChild(firstRowKeysSymbols);
    if (lang === "en") {
      if (i === 0) {
        firstRowKeysSymbols.innerHTML = "~";
      } else if (i === 1) {
        firstRowKeysSymbols.innerHTML = "!";
      } else if (i === 2) {
        firstRowKeysSymbols.innerHTML = "@";
      } else if (i === 3) {
        firstRowKeysSymbols.innerHTML = "#";
      } else if (i === 4) {
        firstRowKeysSymbols.innerHTML = "$";
      } else if (i === 5) {
        firstRowKeysSymbols.innerHTML = "%";
      } else if (i === 6) {
        firstRowKeysSymbols.innerHTML = "^";
      } else if (i === 7) {
        firstRowKeysSymbols.innerHTML = "&";
      } else if (i === 8) {
        firstRowKeysSymbols.innerHTML = "*";
      } else if (i === 9) {
        firstRowKeysSymbols.innerHTML = "(";
      } else if (i === 10) {
        firstRowKeysSymbols.innerHTML = ")";
      } else if (i === 11) {
        firstRowKeysSymbols.innerHTML = "_";
      } else if (i === 12) {
        firstRowKeysSymbols.innerHTML = "+";
      }
    } else if (lang === "ru") {
      if (i === 0) {
        firstRowKeysSymbols.innerHTML = "";
      } else if (i === 1) {
        firstRowKeysSymbols.innerHTML = "!";
      } else if (i === 2) {
        firstRowKeysSymbols.innerHTML = '"';
      } else if (i === 3) {
        firstRowKeysSymbols.innerHTML = "№";
      } else if (i === 4) {
        firstRowKeysSymbols.innerHTML = ";";
      } else if (i === 5) {
        firstRowKeysSymbols.innerHTML = "%";
      } else if (i === 6) {
        firstRowKeysSymbols.innerHTML = ":";
      } else if (i === 7) {
        firstRowKeysSymbols.innerHTML = "?";
      } else if (i === 8) {
        firstRowKeysSymbols.innerHTML = "*";
      } else if (i === 9) {
        firstRowKeysSymbols.innerHTML = "(";
      } else if (i === 10) {
        firstRowKeysSymbols.innerHTML = ")";
      } else if (i === 11) {
        firstRowKeysSymbols.innerHTML = "_";
      } else if (i === 12) {
        firstRowKeysSymbols.innerHTML = "+";
      }
    }

    // FIRST ROW NUMBERS
    const firstRowKeysNumbers = document.createElement("span");
    firstRowKeysNumbers.className = "first-row-numbers";
    keysFirstRow.appendChild(firstRowKeysNumbers);
    if (lang == "en" && i === 0) {
      firstRowKeysNumbers.innerHTML = "`";
    } else if (lang == "ru" && i === 0) {
      firstRowKeysNumbers.innerHTML = "ё";
    }
    if (i === 1) {
      firstRowKeysNumbers.innerHTML = "1";
    } else if (i === 2) {
      firstRowKeysNumbers.innerHTML = "2";
    } else if (i === 3) {
      firstRowKeysNumbers.innerHTML = "3";
    } else if (i === 4) {
      firstRowKeysNumbers.innerHTML = "4";
    } else if (i === 5) {
      firstRowKeysNumbers.innerHTML = "5";
    } else if (i === 6) {
      firstRowKeysNumbers.innerHTML = "6";
    } else if (i === 7) {
      firstRowKeysNumbers.innerHTML = "7";
    } else if (i === 8) {
      firstRowKeysNumbers.innerHTML = "8";
    } else if (i === 9) {
      firstRowKeysNumbers.innerHTML = "9";
    } else if (i === 10) {
      firstRowKeysNumbers.innerHTML = "0";
    } else if (i === 11) {
      firstRowKeysNumbers.innerHTML = "-";
    } else if (i === 12) {
      firstRowKeysNumbers.innerHTML = "=";
    } else if (i === 13) {
      firstRowKeysNumbers.innerHTML = "Backspace";
    }
  }

  // SECOND ROW
  const secondRow = document.querySelector(".second-row");
  for (let i = 0; i < 15; i++) {
    const keysSecondRow = document.createElement("div");
    if (i === 0) {
      keysSecondRow.className = "keys-second-row key tab";
    } else if (i === 13) {
      keysSecondRow.className = "keys-second-row key key-symbols Backslash";
    } else if (i === 14) {
      keysSecondRow.className = "keys-second-row key delete";
    } else if (i == 1) {
      keysSecondRow.className = "keys-second-row key key-letters KeyQ";
    } else if (i == 2) {
      keysSecondRow.className = "keys-second-row key key-letters KeyW";
    } else if (i == 3) {
      keysSecondRow.className = "keys-second-row key key-letters KeyE";
    } else if (i == 4) {
      keysSecondRow.className = "keys-second-row key key-letters KeyR";
    } else if (i == 5) {
      keysSecondRow.className = "keys-second-row key key-letters KeyT";
    } else if (i == 6) {
      keysSecondRow.className = "keys-second-row key key-letters KeyY";
    } else if (i == 7) {
      keysSecondRow.className = "keys-second-row key key-letters KeyU";
    } else if (i == 8) {
      keysSecondRow.className = "keys-second-row key key-letters KeyI";
    } else if (i == 9) {
      keysSecondRow.className = "keys-second-row key key-letters KeyO";
    } else if (i == 10) {
      keysSecondRow.className = "keys-second-row key key-letters KeyP";
    } else if (i == 11) {
      keysSecondRow.className =
        "keys-second-row key special-symbols BracketLeft";
    } else if (i == 12) {
      keysSecondRow.className =
        "keys-second-row key special-symbols BracketRight";
    }
    secondRow.append(keysSecondRow);

    const secondRowKeysSymbols = document.createElement("span");

    keysSecondRow.appendChild(secondRowKeysSymbols);
    if (lang == "en") {
      if (i === 11) {
        secondRowKeysSymbols.innerHTML = "{";
        secondRowKeysSymbols.className = "second-row-symbols";
      } else if (i === 12) {
        secondRowKeysSymbols.innerHTML = "}";
        secondRowKeysSymbols.className = "second-row-symbols";
      } else if (i === 13) {
        secondRowKeysSymbols.innerHTML = "|";
        secondRowKeysSymbols.className = "second-row-symbols";
      }
    } else if (lang == "ru") {
      if (i === 11) {
        secondRowKeysSymbols.innerHTML = "";
        secondRowKeysSymbols.className = "second-row-symbols";
      } else if (i === 12) {
        secondRowKeysSymbols.innerHTML = "";
        secondRowKeysSymbols.className = "second-row-symbols";
      } else if (i === 13) {
        secondRowKeysSymbols.innerHTML = "/";
        secondRowKeysSymbols.className = "second-row-symbols";
      }
    }
    const secondRowKeysNames = document.createElement("span");
    keysSecondRow.appendChild(secondRowKeysNames);

    if (lang == "en") {
      if (i === 0) {
        secondRowKeysNames.innerHTML = "tab";
      } else if (i === 1) {
        secondRowKeysNames.innerHTML = "q";
      } else if (i === 2) {
        secondRowKeysNames.innerHTML = "w";
      } else if (i === 3) {
        secondRowKeysNames.innerHTML = "e";
      } else if (i === 4) {
        secondRowKeysNames.innerHTML = "r";
      } else if (i === 5) {
        secondRowKeysNames.innerHTML = "t";
      } else if (i === 6) {
        secondRowKeysNames.innerHTML = "y";
      } else if (i === 7) {
        secondRowKeysNames.innerHTML = "u";
      } else if (i === 8) {
        secondRowKeysNames.innerHTML = "i";
      } else if (i === 9) {
        secondRowKeysNames.innerHTML = "o";
      } else if (i === 10) {
        secondRowKeysNames.innerHTML = "p";
      } else if (i === 11) {
        secondRowKeysNames.innerHTML = "[";
        secondRowKeysNames.className = "second-row-center";
      } else if (i === 12) {
        secondRowKeysNames.innerHTML = "]";
        secondRowKeysNames.className = "second-row-center";
      } else if (i === 13) {
        secondRowKeysNames.innerHTML = "\\";
        secondRowKeysNames.className = "second-row-center";
      } else if (i === 14) {
        secondRowKeysNames.innerHTML = "Del";
      }
    } else if (lang == "ru") {
      if (i === 0) {
        secondRowKeysNames.innerHTML = "tab";
      } else if (i === 1) {
        secondRowKeysNames.innerHTML = "й";
      } else if (i === 2) {
        secondRowKeysNames.innerHTML = "ц";
      } else if (i === 3) {
        secondRowKeysNames.innerHTML = "у";
      } else if (i === 4) {
        secondRowKeysNames.innerHTML = "к";
      } else if (i === 5) {
        secondRowKeysNames.innerHTML = "е";
      } else if (i === 6) {
        secondRowKeysNames.innerHTML = "н";
      } else if (i === 7) {
        secondRowKeysNames.innerHTML = "г";
      } else if (i === 8) {
        secondRowKeysNames.innerHTML = "ш";
      } else if (i === 9) {
        secondRowKeysNames.innerHTML = "щ";
      } else if (i === 10) {
        secondRowKeysNames.innerHTML = "з";
      } else if (i === 11) {
        secondRowKeysNames.innerHTML = "х";
      } else if (i === 12) {
        secondRowKeysNames.innerHTML = "ъ";
      } else if (i === 13) {
        secondRowKeysNames.innerHTML = "\\";
      } else if (i === 14) {
        secondRowKeysNames.innerHTML = "Del";
      }
    }
  }
  // THIRD ROW
  const thirdRow = document.querySelector(".third-row");
  for (let i = 0; i < 13; i++) {
    const keysThirdRow = document.createElement("div");
    if (i === 0) {
      keysThirdRow.className = "keys-third-row key capslock";
    } else if (i === 12) {
      keysThirdRow.className = "keys-third-row key enter";
    } else if (i == 1) {
      keysThirdRow.className = "keys-third-row key key-letters KeyA";
    } else if (i == 2) {
      keysThirdRow.className = "keys-third-row key key-letters KeyS";
    } else if (i == 3) {
      keysThirdRow.className = "keys-third-row key key-letters KeyD";
    } else if (i == 4) {
      keysThirdRow.className = "keys-third-row key key-letters KeyF";
    } else if (i == 5) {
      keysThirdRow.className = "keys-third-row key key-letters KeyG";
    } else if (i == 6) {
      keysThirdRow.className = "keys-third-row key key-letters KeyH";
    } else if (i == 7) {
      keysThirdRow.className = "keys-third-row key key-letters KeyJ";
    } else if (i == 8) {
      keysThirdRow.className = "keys-third-row key key-letters KeyK";
    } else if (i == 9) {
      keysThirdRow.className = "keys-third-row key key-letters KeyL";
    } else if (i == 10) {
      keysThirdRow.className = "keys-third-row key special-symbols Semicolon";
    } else if (i == 11) {
      keysThirdRow.className = "keys-third-row key special-symbols Quote";
    }

    thirdRow.append(keysThirdRow);

    const thirdRowKeysSymbols = document.createElement("span");
    keysThirdRow.appendChild(thirdRowKeysSymbols);
    if (lang == "en") {
      if (i === 10) {
        thirdRowKeysSymbols.innerHTML = ":";
        thirdRowKeysSymbols.className = "third-row-symbols";
      } else if (i === 11) {
        thirdRowKeysSymbols.innerHTML = '"';
        thirdRowKeysSymbols.className = "third-row-symbols";
      }
    } else if (lang == "ru") {
      if (i === 10) {
        thirdRowKeysSymbols.innerHTML = "";
        thirdRowKeysSymbols.className = "third-row-symbols";
      } else if (i === 11) {
        thirdRowKeysSymbols.innerHTML = "";
        thirdRowKeysSymbols.className = "third-row-symbols";
      }
    }

    const thirdRowKeysNames = document.createElement("span");
    keysThirdRow.appendChild(thirdRowKeysNames);
    if (lang == "en") {
      if (i === 0) {
        thirdRowKeysNames.innerHTML = "Caps Lock";
      } else if (i === 1) {
        thirdRowKeysNames.innerHTML = "a";
      } else if (i === 2) {
        thirdRowKeysNames.innerHTML = "s";
      } else if (i === 3) {
        thirdRowKeysNames.innerHTML = "d";
      } else if (i === 4) {
        thirdRowKeysNames.innerHTML = "f";
      } else if (i === 5) {
        thirdRowKeysNames.innerHTML = "g";
      } else if (i === 6) {
        thirdRowKeysNames.innerHTML = "h";
      } else if (i === 7) {
        thirdRowKeysNames.innerHTML = "j";
      } else if (i === 8) {
        thirdRowKeysNames.innerHTML = "k";
      } else if (i === 9) {
        thirdRowKeysNames.innerHTML = "l";
      } else if (i === 10) {
        thirdRowKeysNames.innerHTML = ";";
        thirdRowKeysNames.className = "third-row-center";
      } else if (i === 11) {
        thirdRowKeysNames.innerHTML = "'";
        thirdRowKeysNames.className = "third-row-center";
      } else if (i === 12) {
        thirdRowKeysNames.innerHTML = "Enter";
      }
    } else if (lang == "ru") {
      if (i === 0) {
        thirdRowKeysNames.innerHTML = "Caps Lock";
      } else if (i === 1) {
        thirdRowKeysNames.innerHTML = "ф";
      } else if (i === 2) {
        thirdRowKeysNames.innerHTML = "ы";
      } else if (i === 3) {
        thirdRowKeysNames.innerHTML = "в";
      } else if (i === 4) {
        thirdRowKeysNames.innerHTML = "а";
      } else if (i === 5) {
        thirdRowKeysNames.innerHTML = "п";
      } else if (i === 6) {
        thirdRowKeysNames.innerHTML = "р";
      } else if (i === 7) {
        thirdRowKeysNames.innerHTML = "о";
      } else if (i === 8) {
        thirdRowKeysNames.innerHTML = "л";
      } else if (i === 9) {
        thirdRowKeysNames.innerHTML = "д";
      } else if (i === 10) {
        thirdRowKeysNames.innerHTML = "ж";
      } else if (i === 11) {
        thirdRowKeysNames.innerHTML = "э";
      } else if (i === 12) {
        thirdRowKeysNames.innerHTML = "Enter";
      }
    }
  }
  // FOURTH ROW
  const fourthRow = document.querySelector(".fourth-row");
  for (let i = 0; i < 13; i++) {
    const keysFourthRow = document.createElement("div");
    if (i === 0) {
      keysFourthRow.className = "keys-fourth-row key left-shift";
    } else if (i == 1) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyZ";
    } else if (i == 2) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyX";
    } else if (i == 3) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyC";
    } else if (i == 4) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyV";
    } else if (i == 5) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyB";
    } else if (i == 6) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyN";
    } else if (i == 7) {
      keysFourthRow.className = "keys-fourth-row key key-letters KeyM";
    } else if (i == 8) {
      keysFourthRow.className = "keys-fourth-row key special-symbols Comma";
    } else if (i == 9) {
      keysFourthRow.className = "keys-fourth-row key special-symbols Period";
    } else if (i == 10) {
      keysFourthRow.className = "keys-fourth-row key key-symbols Slash";
    } else if (i == 11) {
      keysFourthRow.className = "keys-fourth-row key arrow-up arrow";
    } else if (i == 12) {
      keysFourthRow.className = "keys-fourth-row key right-shift";
    }

    fourthRow.append(keysFourthRow);

    const fourthRowKeysSymbols = document.createElement("span");
    keysFourthRow.appendChild(fourthRowKeysSymbols);
    if (lang == "en") {
      if (i === 8) {
        fourthRowKeysSymbols.innerHTML = "<";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      } else if (i === 9) {
        fourthRowKeysSymbols.innerHTML = ">";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      } else if (i === 10) {
        fourthRowKeysSymbols.innerHTML = "?";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      }
    } else if (lang == "ru") {
      if (i === 8) {
        fourthRowKeysSymbols.innerHTML = "";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      } else if (i === 9) {
        fourthRowKeysSymbols.innerHTML = "";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      } else if (i === 10) {
        fourthRowKeysSymbols.innerHTML = ",";
        fourthRowKeysSymbols.className = "fourth-row-symbols";
      }
    }
    const fourthRowKeysNames = document.createElement("span");
    keysFourthRow.appendChild(fourthRowKeysNames);
    if (lang == "en") {
      if (i === 0) {
        fourthRowKeysNames.innerHTML = "Shift";
      } else if (i === 1) {
        fourthRowKeysNames.innerHTML = "z";
      } else if (i === 2) {
        fourthRowKeysNames.innerHTML = "x";
      } else if (i === 3) {
        fourthRowKeysNames.innerHTML = "c";
      } else if (i === 4) {
        fourthRowKeysNames.innerHTML = "v";
      } else if (i === 5) {
        fourthRowKeysNames.innerHTML = "b";
      } else if (i === 6) {
        fourthRowKeysNames.innerHTML = "n";
      } else if (i === 7) {
        fourthRowKeysNames.innerHTML = "m";
      } else if (i === 8) {
        fourthRowKeysNames.innerHTML = ",";
        fourthRowKeysNames.className = "fourth-row-center";
      } else if (i === 9) {
        fourthRowKeysNames.innerHTML = ".";
        fourthRowKeysNames.className = "fourth-row-center";
      } else if (i === 10) {
        fourthRowKeysNames.innerHTML = "/";
        fourthRowKeysNames.className = "fourth-row-center";
      } else if (i === 11) {
        fourthRowKeysNames.innerHTML = "&#9650;";
      } else if (i === 12) {
        fourthRowKeysNames.innerHTML = "Shift";
      }
    } else if (lang == "ru") {
      if (i === 0) {
        fourthRowKeysNames.innerHTML = "Shift";
      } else if (i === 1) {
        fourthRowKeysNames.innerHTML = "я";
      } else if (i === 2) {
        fourthRowKeysNames.innerHTML = "ч";
      } else if (i === 3) {
        fourthRowKeysNames.innerHTML = "с";
      } else if (i === 4) {
        fourthRowKeysNames.innerHTML = "м";
      } else if (i === 5) {
        fourthRowKeysNames.innerHTML = "и";
      } else if (i === 6) {
        fourthRowKeysNames.innerHTML = "т";
      } else if (i === 7) {
        fourthRowKeysNames.innerHTML = "ь";
      } else if (i === 8) {
        fourthRowKeysNames.innerHTML = "б";
      } else if (i === 9) {
        fourthRowKeysNames.innerHTML = "ю";
      } else if (i === 10) {
        fourthRowKeysNames.innerHTML = ".";
      } else if (i === 11) {
        fourthRowKeysNames.innerHTML = "&#9650;";
      } else if (i === 12) {
        fourthRowKeysNames.innerHTML = "Shift";
      }
    }
  }
  // FIFTH ROW
  const fifthRow = document.querySelector(".fifth-row");

  for (let i = 0; i < 9; i++) {
    const keysFifthRow = document.createElement("div");
    if (i === 0) {
      keysFifthRow.className = "keys-fifth-row key left-ctrl";
    } else if (i === 5) {
      keysFifthRow.className = "keys-fifth-row key right-ctrl";
    } else if (i === 2) {
      keysFifthRow.className = "keys-fifth-row key left-alt";
    } else if (i === 4) {
      keysFifthRow.className = "keys-fifth-row key right-alt";
    } else if (i === 1) {
      keysFifthRow.className = "keys-fifth-row key windows";
    } else if (i === 3) {
      keysFifthRow.className = "keys-fifth-row key space";
      keysFifthRow.id = "space-key";
    } else if (i === 6) {
      keysFifthRow.className = "keys-fifth-row key arrow-left arrow";
    } else if (i === 7) {
      keysFifthRow.className = "keys-fifth-row key arrow-down arrow";
    } else if (i === 8) {
      keysFifthRow.className = "keys-fifth-row key arrow-right arrow";
    } else keysFifthRow.className = "keys-fifth-row key key-symbols";

    fifthRow.append(keysFifthRow);
    const fifthRowKeysNames = document.createElement("span");
    keysFifthRow.appendChild(fifthRowKeysNames);
    if (i === 0 || i === 5) {
      fifthRowKeysNames.innerHTML = "Ctrl";
    } else if (i === 1) {
      fifthRowKeysNames.innerHTML = "Win";
    } else if (i === 2 || i === 4) {
      fifthRowKeysNames.innerHTML = "Alt";
    } else if (i === 6) {
      fifthRowKeysNames.innerHTML = "◄";
    } else if (i === 7) {
      fifthRowKeysNames.innerHTML = "▼";
    } else if (i === 8) {
      fifthRowKeysNames.innerHTML = "►";
    }
  }
}

//CHANGE THE LANGUAGE
let lang = "en";
function changeLang(...codes) {
  let pressed = new Set();
  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    if (lang == "en") {
      lang = "ru";
    } else {
      lang = "en";
    }
    console.log(lang);
    fillKeys();
    selectKeys();
    typeLetters();
    clickKeyAnimation();
    clickKeyAnimationUp();
  });
  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}

// fillKeys();
changeLang("ControlLeft", "AltLeft");

let space;
let leftShift;
let rightShift;
let leftAlt;
let rightAlt;
let leftCtrl;
let rightCtrl;
let tab;
let backspace;
let win;
let enter;
let capslock;
let del;
let arrowUp;
let arrowDown;
let arrowLeft;
let arrowRight;
let arrows;
let allKeys;

function selectKeys() {
  space = document.querySelector(".space");
  leftShift = document.querySelector(".left-shift");
  rightShift = document.querySelector(".right-shift");
  leftAlt = document.querySelector(".left-alt");
  rightAlt = document.querySelector(".right-alt");
  leftCtrl = document.querySelector(".left-ctrl");
  rightCtrl = document.querySelector(".right-ctrl");
  tab = document.querySelector(".tab");
  backspace = document.querySelector(".backspace");
  win = document.querySelector(".windows");
  enter = document.querySelector(".enter");
  capslock = document.querySelector(".capslock");
  del = document.querySelector(".delete");
  arrowUp = document.querySelector(".arrow-up");
  arrowDown = document.querySelector(".arrow-down");
  arrowLeft = document.querySelector(".arrow-left");
  arrowRight = document.querySelector(".arrow-right");
  arrows = document.querySelectorAll(".arrow");
  allKeys = document.querySelectorAll(".key");
}
selectKeys();

// window.addEventListener("keydown", pressKeyAnimation);
// window.addEventListener("keyup", releaseKeyAnimation);
// window.addEventListener("keydown", (el) => console.log(el.key));
// window.addEventListener("keydown", (el) => console.log(el.code));

function pressKeyAnimation(el) {
  selectKeys();

  for (let item of allKeys) {
    const pressK = (code) => {
      if (el.code == code && item.classList.contains(code)) {
        item.classList.add("active");
      }
    };
    pressK(el.code);

    if (
      item.classList.contains("keys-first-row") &&
      item.classList.contains("key-symbols") &&
      el.key == item.innerText[2]
    ) {
      item.classList.add("active");
    }

    if (el.code === "Space") {
      space.classList.add("active");
    }
    if (el.code === "Enter") {
      enter.classList.add("active");
    }
    if (el.code === "ShiftLeft") {
      leftShift.classList.add("active");
    }
    if (el.code === "ShiftRight") {
      rightShift.classList.add("active");
    }
    if (el.code === "AltLeft") {
      leftAlt.classList.add("active");
    }
    if (el.code === "AltRight") {
      rightAlt.classList.add("active");
    }
    if (el.code === "ControlLeft") {
      leftCtrl.classList.add("active");
    }
    if (el.code === "ControlRight") {
      rightCtrl.classList.add("active");
    }
    if (el.code === "MetaLeft") {
      win.classList.add("active");
    }
    if (el.code === "Tab") {
      tab.classList.add("active");
    }
    if (el.code === "CapsLock") {
      capslock.classList.add("active");
    }
    if (el.code === "Backspace") {
      backspace.classList.add("active");
    }
    if (el.code === "Delete") {
      del.classList.add("active");
    }
    if (el.code === "ArrowUp") {
      arrowUp.classList.add("active");
    }
    if (el.code === "ArrowLeft") {
      arrowLeft.classList.add("active");
    }
    if (el.code === "ArrowRight") {
      arrowRight.classList.add("active");
    }
    if (el.code === "ArrowDown") {
      arrowDown.classList.add("active");
    }
  }
}

function releaseKeyAnimation(el) {
  selectKeys();

  for (let item of allKeys) {
    const pressK = (code) => {
      if (el.code == code && item.classList.contains(code)) {
        item.classList.remove("active");
      }
    };
    pressK(el.code);

    if (
      item.classList.contains("keys-first-row") &&
      item.classList.contains("key-symbols") &&
      el.key == item.innerText[2]
    ) {
      item.classList.remove("active");
    }

    if (el.code === "Space") {
      space.classList.remove("active");
    }
    if (el.code === "Enter") {
      enter.classList.remove("active");
    }
    if (el.code === "ShiftLeft") {
      leftShift.classList.remove("active");
    }
    if (el.code === "ShiftRight") {
      rightShift.classList.remove("active");
    }
    if (el.code === "AltLeft") {
      leftAlt.classList.remove("active");
    }
    if (el.code === "AltRight") {
      rightAlt.classList.remove("active");
    }
    if (el.code === "ControlLeft") {
      leftCtrl.classList.remove("active");
    }
    if (el.code === "ControlRight") {
      rightCtrl.classList.remove("active");
    }
    if (el.code === "MetaLeft") {
      win.classList.remove("active");
    }
    if (el.code === "Tab") {
      tab.classList.remove("active");
    }
    if (el.code === "CapsLock") {
      capslock.classList.remove("active");
    }
    if (el.code === "Backspace") {
      backspace.classList.remove("active");
    }
    if (el.code === "Delete") {
      del.classList.remove("active");
    }
    if (el.code === "ArrowUp") {
      arrowUp.classList.remove("active");
    }
    if (el.code === "ArrowLeft") {
      arrowLeft.classList.remove("active");
    }
    if (el.code === "ArrowRight") {
      arrowRight.classList.remove("active");
    }
    if (el.code === "ArrowDown") {
      arrowDown.classList.remove("active");
    }
  }
}

let shiftState = false;

function specialKeys(el) {
  function shiftPress(shiftBtn) {
    if (el.code == shiftBtn) {
      shiftState = true;
      if (letterCase == "lower") {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toUpperCase();
            letterCase = "upper";
          }
        }
      } else {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toLowerCase();
            letterCase = "lower";
          }
        }
      }
    }
  }
  shiftPress("ShiftLeft");
  shiftPress("ShiftRight");

  // if (el.code === "AltLeft") {
  //   leftAlt.classList.remove("active");
  // }
  // if (el.code === "AltRight") {
  //   rightAlt.classList.remove("active");
  // }
  // if (el.code === "ControlLeft") {
  //   leftCtrl.classList.remove("active");
  // }
  // if (el.code === "ControlRight") {
  //   rightCtrl.classList.remove("active");
  // }
  // if (el.code === "MetaLeft") {
  //   win.classList.remove("active");
  // }
  if (el.code == "Tab") {
    el.preventDefault();
    const cursorPosition = text.selectionStart;
    const textAreaTxt = text.value;
    text.value =
      textAreaTxt.substring(0, cursorPosition) +
      "    " +
      textAreaTxt.substring(cursorPosition);
    text.selectionStart = text.selectionEnd = cursorPosition + 4;
  }

  function typeArrow(arrow, arrowText) {
    if (el.code == arrow) {
      el.preventDefault();
      let cursorPosition = text.selectionStart;
      text.value =
        text.value.substring(0, cursorPosition) +
        arrowText +
        text.value.substring(cursorPosition);
      text.selectionStart = text.selectionEnd = cursorPosition + 1;
    }
  }
  typeArrow("ArrowDown", "▼");
  typeArrow("ArrowUp", "▲");
  typeArrow("ArrowLeft", "◄");
  typeArrow("ArrowRight", "►");
}

function specialKeysShiftUp(el) {
  function shiftPress(shiftBtn) {
    if (el.code == shiftBtn) {
      shiftState = false;
      if (letterCase == "lower") {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toUpperCase();
            letterCase = "upper";
          }
        }
      } else {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toLowerCase();
            letterCase = "lower";
          }
        }
      }
    }
  }
  shiftPress("ShiftLeft");
  shiftPress("ShiftRight");
}

// window.addEventListener("keydown", specialKeys);
// window.addEventListener("keyup", specialKeysShiftUp);

function typeLetters() {
  selectKeys();
  allKeys.forEach((keyLetter) => {
    keyLetter.addEventListener("click", () => {
      let cursorPosition = text.selectionStart;
      // FOR LETTERS
      if (keyLetter.classList.contains("key-letters")) {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      }
      // FOR SYMBOLS
      // WITHOUT SHIFT
      if (keyLetter.classList.contains("key-symbols") && shiftState == false) {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText[2] +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      }
      // WITH SHIFT
      if (keyLetter.classList.contains("key-symbols") && shiftState == true) {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText[0] +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      }
      // FOR SPECIAL KEYS
      if (
        keyLetter.classList.contains("special-symbols") &&
        lang == "en" &&
        shiftState == false
      ) {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText[2] +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      } else if (
        keyLetter.classList.contains("special-symbols") &&
        lang == "en" &&
        shiftState == true
      ) {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText[0] +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      }
      if (keyLetter.classList.contains("special-symbols") && lang == "ru") {
        text.value =
          text.value.substring(0, cursorPosition) +
          keyLetter.innerText[0] +
          text.value.substring(cursorPosition);
        text.selectionStart = text.selectionEnd = cursorPosition + 1;
      }
    });
  });

  //  BACKPSPACE
  backspace.addEventListener("click", () => {
    console.log("press backspace");
    let str = text.value;
    const cursorPosition = text.selectionStart;
    text.value =
      str.substring(0, cursorPosition - 1) + str.substring(cursorPosition);
    text.selectionStart = text.selectionEnd = cursorPosition - 1;
  });

  //  DELETE
  del.addEventListener("click", () => {
    console.log("press del");
    let str = text.value;
    const cursorPosition = text.selectionStart;
    text.value =
      str.substring(0, cursorPosition) + str.substring(cursorPosition + 1);
    text.selectionStart = text.selectionEnd = cursorPosition;
  });

  // TAB
  tab.addEventListener("click", () => {
    const cursorPosition = text.selectionStart;
    const textAreaTxt = text.value;
    text.value =
      textAreaTxt.substring(0, cursorPosition) +
      "    " +
      textAreaTxt.substring(cursorPosition);
    text.selectionStart = text.selectionEnd = cursorPosition + 4;
  });

  //  ARROWS
  arrows.forEach((arrowBtn) => {
    arrowBtn.addEventListener("click", () => {
      let cursorPosition = text.selectionStart;
      text.value =
        text.value.substring(0, cursorPosition) +
        arrowBtn.innerText +
        text.value.substring(cursorPosition);
      text.selectionStart = text.selectionEnd = cursorPosition + 1;
    });
  });

  // ENTER
  enter.addEventListener("click", () => {
    const cursorPosition = text.selectionStart;
    const textAreaTxt = text.value;
    text.value =
      textAreaTxt.substring(0, cursorPosition) +
      "\n" +
      textAreaTxt.substring(cursorPosition);
    text.selectionStart = text.selectionEnd = cursorPosition;
  });

  // CAPSlOCK
  capslock.addEventListener("click", () => {
    console.log("press caps");
    {
      if (letterCase == "lower") {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toUpperCase();
            letterCase = "upper";
          }
        }
      } else {
        for (let item of allKeys) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toLowerCase();
            letterCase = "lower";
          }
        }
      }
    }
  });

  // SPACE
  space.addEventListener("click", () => {
    const cursorPosition = text.selectionStart;
    const textAreaTxt = text.value;
    text.value =
      textAreaTxt.substring(0, cursorPosition) +
      " " +
      textAreaTxt.substring(cursorPosition);
    text.selectionStart = text.selectionEnd = cursorPosition;
  });

  // SHIFT

  function shiftMouseDownUp(el, event) {
    el.addEventListener(event, () => {
      if (event == "mousedown") {
        shiftState = true;
      } else {
        shiftState = false;
      }
      {
        if (letterCase == "lower") {
          for (let item of allKeys) {
            if (item.innerText.length == 1) {
              item.innerText = item.innerText.toUpperCase();
              letterCase = "upper";
            }
          }
        } else {
          for (let item of allKeys) {
            if (item.innerText.length == 1) {
              item.innerText = item.innerText.toLowerCase();
              letterCase = "lower";
            }
          }
        }
      }
      console.log(shiftState);
    });
  }
  shiftMouseDownUp(leftShift, "mousedown");
  shiftMouseDownUp(leftShift, "mouseup");
  shiftMouseDownUp(rightShift, "mousedown");
  shiftMouseDownUp(rightShift, "mouseup");
}

// typeLetters();
function clickKeyAnimation() {
  selectKeys();
  allKeys.forEach((keyLetter) => {
    keyLetter.addEventListener("mousedown", () => {
      keyLetter.classList.add("active");
    });
  });
}
function clickKeyAnimationUp() {
  selectKeys();
  allKeys.forEach((keyLetter) => {
    keyLetter.addEventListener("mouseup", () => {
      keyLetter.classList.remove("active");
    });
  });
}
clickKeyAnimation();
clickKeyAnimationUp();

//CHANGE THE CASE
let letterCase = "lower";

function changeCase(el) {
  const keysLetters = document.querySelectorAll(".key");
  if (el.code === "CapsLock") {
    {
      if (letterCase == "lower") {
        for (let item of keysLetters) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toUpperCase();
            letterCase = "upper";
          }
        }
      } else {
        for (let item of keysLetters) {
          if (item.innerText.length == 1) {
            item.innerText = item.innerText.toLowerCase();
            letterCase = "lower";
          }
        }
      }
    }
    console.log(letterCase);
  }
}
// window.addEventListener("keydown", changeCase);

// Local storage saving function //

function setLocalStorage() {
  localStorage.setItem("language", lang);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("language")) {
    lang = localStorage.getItem("language");
  }
  fillKeys();
  selectKeys();
}
fillKeys();

window.addEventListener("load", getLocalStorage);
window.addEventListener("load", fillKeys);
window.addEventListener("load", selectKeys);
window.addEventListener("load", typeLetters);
typeLetters();
window.addEventListener("keydown", pressKeyAnimation);
window.addEventListener("keyup", releaseKeyAnimation);
window.addEventListener("keydown", specialKeys);
window.addEventListener("keyup", specialKeysShiftUp);
window.addEventListener("keydown", changeCase);
console.log("Особенности ES6, использованные в коде: стрелочные функции, тип данных Set и его методы, циклы for... of, оператор расширения,переменные let и const");
