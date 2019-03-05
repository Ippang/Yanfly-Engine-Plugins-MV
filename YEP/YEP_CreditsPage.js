//=============================================================================
// Yanfly Engine Plugins - Credits Page
// YEP_CreditsPage.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CreditsPage = true;

var Yanfly = Yanfly || {};
Yanfly.Credits = Yanfly.Credits || {};
Yanfly.Credits.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Adds a 'Credits' command to the title screen that
 * will take the player to a credits scene.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Command Name
 * @parent ---General---
 * @desc This is the command name that appears for the title
 * command menu.
 * @default Credits
 *
 * @param ---Credit Lines---
 * @default
 *
 * @param Line 1 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 1 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 2 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 2 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 3 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 3 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 4 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 4 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 5 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 5 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 6 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 6 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 7 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 7 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 8 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 8 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 9 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 9 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 10 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 10 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 11 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 11 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 12 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 12 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 13 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 13 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 14 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 14 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 15 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 15 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 16 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 16 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 17 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 17 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 18 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 18 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 19 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 19 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 20 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 20 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 21 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 21 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 22 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 22 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 23 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 23 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 24 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 24 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 25 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 25 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 26 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 26 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 27 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 27 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 28 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 28 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 29 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 29 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 30 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 30 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 31 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 31 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 32 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 32 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 33 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 33 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 34 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 34 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 35 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 35 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 36 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 36 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 37 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 37 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 38 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 38 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 39 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 39 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 40 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 40 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 41 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 41 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 42 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 42 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 43 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 43 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 44 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 44 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 45 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 45 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 46 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 46 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 47 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 47 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 48 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 48 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 49 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 49 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 50 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 50 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 51 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 51 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 52 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 52 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 53 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 53 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 54 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 54 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 55 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 55 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 56 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 56 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 57 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 57 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 58 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 58 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 59 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 59 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 60 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 60 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 61 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 61 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 62 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 62 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 63 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 63 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 64 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 64 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 65 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 65 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 66 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 66 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 67 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 67 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 68 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 68 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 69 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 69 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 70 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 70 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 71 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 71 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 72 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 72 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 73 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 73 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 74 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 74 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 75 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 75 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 76 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 76 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 77 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 77 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 78 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 78 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 79 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 79 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 80 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 80 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 81 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 81 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 82 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 82 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 83 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 83 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 84 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 84 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 85 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 85 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 86 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 86 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 87 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 87 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 88 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 88 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 89 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 89 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
  * @param Line 90 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 90 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 91 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 91 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 92 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 92 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 93 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 93 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 94 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 94 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 95 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 95 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 96 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 96 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 97 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 97 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 98 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 98 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 99 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 99 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 100 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 100 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 101 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 101 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 102 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 102 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 103 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 103 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 104 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 104 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 105 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 105 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 106 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 106 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 107 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 107 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 108 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 108 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 109 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 109 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 110 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 110 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 111 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 111 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 112 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 112 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 113 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 113 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 114 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 114 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 115 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 115 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 116 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 116 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 117 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 117 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 118 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 118 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 119 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 119 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 120 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 120 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 121 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 121 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 122 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 122 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 123 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 123 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 124 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 124 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 125 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 125 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 126 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 126 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 127 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 127 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 128 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 128 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 129 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 129 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 130 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 130 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 131 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 131 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 132 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 132 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 133 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 133 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 134 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 134 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 135 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 135 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 136 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 136 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 137 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 137 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 138 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 138 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 139 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 139 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 140 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 140 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 141 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 141 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 142 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 142 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 143 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 143 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 144 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 144 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 145 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 145 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 146 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 146 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 147 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 147 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 148 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 148 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 149 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 149 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 150 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 150 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 151 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 151 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 152 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 152 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 153 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 153 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 154 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 154 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 155 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 155 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 156 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 156 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 157 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 157 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 158 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 158 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 159 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 159 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 160 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 160 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 161 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 161 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 162 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 162 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 163 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 163 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 164 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 164 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 165 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 165 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 166 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 166 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 167 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 167 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 168 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 168 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 169 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 169 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 170 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 170 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 171 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 171 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 172 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 172 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 173 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 173 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 174 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 174 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 175 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 175 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 176 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 176 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 177 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 177 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 178 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 178 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 179 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 179 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 180 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 180 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 181 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 181 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 182 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 182 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 183 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 183 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 184 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 184 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 185 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 185 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 186 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 186 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 187 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 187 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 188 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 188 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 189 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 189 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 190 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 190 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 191 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 191 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 192 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 192 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 193 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 193 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 194 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 194 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 195 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 195 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 196 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 196 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 197 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 197 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 198 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 198 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 199 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 199 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 200 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 200 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 201 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 201 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 202 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 202 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 203 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 203 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 204 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 204 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 205 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 205 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 206 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 206 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 207 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 207 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 208 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 208 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 209 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 209 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 210 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 210 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 211 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 211 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 212 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 212 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 213 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 213 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 214 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 214 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 215 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 215 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 216 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 216 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 217 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 217 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 218 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 218 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 219 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 219 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 220 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 220 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 221 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 221 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 222 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 222 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 223 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 223 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 224 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 224 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 225 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 225 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 226 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 226 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 227 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 227 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 228 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 228 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 229 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 229 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 230 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 230 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 231 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 231 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 232 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 232 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 233 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 233 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 234 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 234 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 235 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 235 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 236 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 236 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 237 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 237 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 238 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 238 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 239 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 239 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 240 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 240 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 241 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 241 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 242 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 242 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 243 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 243 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 244 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 244 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 245 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 245 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 246 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 246 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 247 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 247 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 248 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 248 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 249 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 249 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 250 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 250 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 251 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 251 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 252 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 252 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 253 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 253 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 254 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 254 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 255 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 255 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 256 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 256 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 257 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 257 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 258 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 258 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 259 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 259 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 260 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 260 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 261 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 261 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 262 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 262 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 263 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 263 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 264 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 264 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 265 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 265 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 266 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 266 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 267 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 267 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 268 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 268 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 269 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 269 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 270 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 270 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 271 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 271 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 272 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 272 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 273 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 273 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 274 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 274 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 275 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 275 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 276 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 276 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 277 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 277 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 278 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 278 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 279 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 279 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 280 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 280 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 281 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 281 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 282 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 282 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 283 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 283 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 284 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 284 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 285 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 285 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 286 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 286 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 287 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 287 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 288 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 288 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 289 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 289 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 290 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 290 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 291 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 291 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 292 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 292 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 293 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 293 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 294 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 294 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 295 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 295 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 296 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 296 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 297 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 297 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 298 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 298 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 299 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 299 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @param Line 300 Text
 * @parent ---Credit Lines---
 * @desc The text to be displayed on this line:
 * @default
 *
 * @param Line 300 URL
 * @parent ---Credit Lines---
 * @desc If there is a URL, link it to here.
 * @default
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a 'Credits' command to the title screen that will bring up
 * a window of a credits page made the way you want. Text codes can be used
 * for the credits page to allow for more customization options. Furthermore,
 * specific entries can be tied to URL's so you can link back to those you've
 * provided credit for!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin's parameters, where it says Line x Text, this is how the text
 * will appear. Using text codes here will cause the credits page to write it
 * out with text code properties.
 *
 * If you provide a URL with the Line x URL entry, then this specific entry
 * will open up a new window that will link the player to the specified URL.
 * This is optional. If nothing is used, no linking will occur.
 *
 * If an entry is left blank, it will be skipped. If you wish to leave an
 * empty line, provide at least one space ' ' in the text entry.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * For those who wish to display the credits window from the map scene during
 * the middle of your game, you can now do so with a plugin command!
 *
 * Plugin Command:
 *
 *   OpenCreditsWindow
 *   - Opens the credit window from in-game during the map scene. This will
 *   cause the player and events to be unable to move.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Added new plugin command 'OpenCreditsWindow'.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CreditsPage');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.CreditsCmdName = String(Yanfly.Parameters['Command Name']);
Yanfly.Param.CreditsLine = {};
Yanfly.Param.CreditsURL = {};
Yanfly.SetupParameters = function() {
  for (var i = 1; i < 301; ++i) {
    var tName = 'Line ' + i + ' Text';
    var uName = 'Line ' + i + ' URL';
    Yanfly.Param.CreditsLine[i] = String(Yanfly.Parameters[tName]);
    Yanfly.Param.CreditsURL[i] = String(Yanfly.Parameters[uName]);
  };
};
Yanfly.SetupParameters();

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.Credits.Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
Game_Map.prototype.isEventRunning = function() {
  if ($gameTemp._creditsWindowOpen) return true;
  return Yanfly.Credits.Game_Map_isEventRunning.call(this);
};

//=============================================================================
// Game_Event
//=============================================================================

Yanfly.Credits.Game_Event_updateSelfMovement =
  Game_Event.prototype.updateSelfMovement;
Game_Event.prototype.updateSelfMovement = function() {
  if ($gameTemp._creditsWindowOpen) return true;
  Yanfly.Credits.Game_Event_updateSelfMovement.call(this);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Credits.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.Credits.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'OpenCreditsWindow') {
    if (SceneManager._scene instanceof Scene_Map) {
      SceneManager._scene.openCreditsWindow();
      $gameTemp._creditsWindowOpen = true;
    }
  }
};

//=============================================================================
// Window_Command
//=============================================================================

Window_Command.prototype.addCommandAt = function(index, name, symbol, en, ext) {
  if (en === undefined) enabled = true;
  if (ext === undefined) ext = null;
  var obj = { name: name, symbol: symbol, enabled: en, ext: ext};
  this._list.splice(index, 0, obj);
};

//=============================================================================
// Window_TitleCommand
//=============================================================================

Yanfly.Credits.Window_TitleCommand_makeCommandList =
  Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
  Yanfly.Credits.Window_TitleCommand_makeCommandList.call(this);
  var index = this.findSymbol('options');
  var text = Yanfly.Param.CreditsCmdName;
  var enabled = true;
  this.addCommandAt(index, text, 'credits', enabled);
};

//=============================================================================
// Window_CreditsPage
//=============================================================================

function Window_CreditsPage() {
    this.initialize.apply(this, arguments);
}

Window_CreditsPage.prototype = Object.create(Window_Command.prototype);
Window_CreditsPage.prototype.constructor = Window_CreditsPage;

Window_CreditsPage.prototype.initialize = function() {
  Window_Command.prototype.initialize.call(this, 0, 0);
  this.openness = 0;
};

Window_CreditsPage.prototype.windowWidth = function() {
  return Graphics.boxWidth;
};

Window_CreditsPage.prototype.windowHeight = function() {
  return Graphics.boxHeight;
};

Window_CreditsPage.prototype.makeCommandList = function() {
  for (var i = 0; i < 301; ++i) {
    var text = Yanfly.Param.CreditsLine[i];
    var url = Yanfly.Param.CreditsURL[i];
    if (!text) continue;
    if (text === '') continue;
    this.addCommand(text, 'credit', true, url);
  }
};

Window_CreditsPage.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var align = this.itemTextAlign();
  var text = this.commandName(index);
  this.resetTextColor();
  this.changePaintOpacity(this.isCommandEnabled(index));
  this.drawTextEx(text, rect.x, rect.y, rect.width, align);
};

Window_CreditsPage.prototype.playOkSound = function() {
  if (this.currentExt() !== '') SoundManager.playOk();
};

//=============================================================================
// Scene_Title
//=============================================================================

Yanfly.Credits.Scene_Title_createCommandWindow =
  Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
  Yanfly.Credits.Scene_Title_createCommandWindow.call(this);
  this.createCreditsWindow();
  this._commandWindow.setHandler('credits',  this.commandCredits.bind(this));
};

Scene_Title.prototype.createCreditsWindow = function() {
  this._creditsWindow = new Window_CreditsPage();
  this._creditsWindow.setHandler('cancel', this.onCreditsCancel.bind(this));
  this._creditsWindow.setHandler('ok', this.onCreditsOk.bind(this));
  this.addWindow(this._creditsWindow);
};

Scene_Title.prototype.commandCredits = function() {
  this._commandWindow.close();
  this._creditsWindow.select(0);
  this._creditsWindow.activate();
  this._creditsWindow.open();
};

Scene_Title.prototype.onCreditsCancel = function() {
  this._creditsWindow.close();
  this._commandWindow.activate();
  this._commandWindow.open();
};

Scene_Title.prototype.onCreditsOk = function() {
  this._creditsWindow.activate();
  var url = this._creditsWindow.currentExt();
  if (url === '') return;
  var win = window.open(url, '_blank');
  if (win) {
    win.focus();
  } else if (Imported.YEP_ExternalLinks) {
    SceneManager.openPopupBlockerMessage();
  }
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.Credits.Scene_Map_createAllWindows =
  Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
  Yanfly.Credits.Scene_Map_createAllWindows.call(this);
  this.createCreditsWindow();
};

Scene_Map.prototype.createCreditsWindow = function() {
  this._creditsWindow = new Window_CreditsPage();
  this._creditsWindow.setHandler('cancel', this.onCreditsCancel.bind(this));
  this._creditsWindow.setHandler('ok', this.onCreditsOk.bind(this));
  this.addWindow(this._creditsWindow);
};

Scene_Map.prototype.openCreditsWindow = function() {
  this._creditsWindow.select(0);
  this._creditsWindow.activate();
  this._creditsWindow.open();
};

Scene_Map.prototype.onCreditsCancel = function() {
  this._creditsWindow.close();
  $gameTemp._creditsWindowOpen = false;
};

Scene_Map.prototype.onCreditsOk = function() {
  this._creditsWindow.activate();
  var url = this._creditsWindow.currentExt();
  if (url === '') return;
  var win = window.open(url, '_blank');
  if (win) {
    win.focus();
  } else if (Imported.YEP_ExternalLinks) {
    SceneManager.openPopupBlockerMessage();
  }
};

//=============================================================================
// End of File
//=============================================================================
