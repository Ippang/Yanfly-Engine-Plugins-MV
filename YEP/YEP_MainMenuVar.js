//=============================================================================
// Yanfly Engine Plugins - Main Menu Variable Window
// YEP_MainMenuVar.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MainMenuVar = true;

var Yanfly = Yanfly || {};
Yanfly.MMVar = Yanfly.MMVar || {};
Yanfly.MMVar.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Adds a new variable window to your main menu.
 * You can use it to display up to 10 different variables!
 * @author Yanfly Engine Plugins + Tigress Collaboration
 *
 * @param ---Settings---
 * @default
 *
 * @param Window X
 * @parent ---Settings---
 * @desc This is the x position of your window! Use 'auto' to
 * automate the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Y
 * @parent ---Settings---
 * @desc This is the y position of your window! Use 'auto' to
 * automate the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Width
 * @parent ---Settings---
 * @desc This is the width of your window! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Height
 * @parent ---Settings---
 * @desc This is the height of your window! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Font Size
 * @parent ---Settings---
 * @desc This is the font size of the text! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Settings---
 * @type number
 * @min 1
 * @decimals 0
 * @desc This is the window padding value!
 * @default 18
 *
 * @param Text Padding
 * @parent ---Settings---
 * @type number
 * @min 1
 * @decimals 0
 * @desc This is the text padding value!
 * @default 6
 *
 * @param Back Opacity
 * @parent ---Settings---
 * @type number
 * @min 0
 * @max 255
 * @decimals 0
 * @desc This is the window's back opacity!
 * @default 192
 *
 * @param Window Opacity
 * @parent ---Settings---
 * @type number
 * @min 0
 * @max 255
 * @decimals 0
 * @desc This is the window's actual opacity!
 * @default 255
 *
 * @param ---Variables---
 * @default
 *
 * @param Displayed Variable 1
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 1st variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 1
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 2
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 2nd variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 2
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 3
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 3rd variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 3
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 4
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 4th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 4
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 5
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 5th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 5
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 6
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 6th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 6
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 7
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 7th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 7
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 8
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 8th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 8
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 9
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 9th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 9
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 10
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 10th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 10
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * In RPG Maker MV, the main menu only shows the party's gold as the only 
 * currency in the game. However, some games would prefer to display more than
 * just gold in the main menu, of which, may be possibly found in the form of
 * variables. You can do so using this plugin!
 *
 * This plugin lets you place up to 10 variables of your choice into your
 * game's main menu. It will display the name of the variable and the value of
 * it. If you wish to make certain variables hidden until a certain point, you
 * can attach a switch to it, making the variable show up only if the switch is
 * ON instead of OFF.
 *
 * The Main Menu Variable Window is also customizable, too. You can adjust the
 * x, y, width, height, font settings, and more within the plugin's parameters!
 * This way, you can make it fit your game's main menu however you want!
 *
 * This is a collaboration plugin by Tigress and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Compatibility update made with YEP_X_MoreCurrencies. If a variable has
 * << and >> in its name, it will remove it the text in between like with the
 * YEP_X_MoreCurrencies plugin.
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

Yanfly.Parameters = PluginManager.parameters('YEP_MainMenuVar');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MMVarWinX = String(Yanfly.Parameters['Window X']);
Yanfly.Param.MMVarWinY = String(Yanfly.Parameters['Window Y']);
Yanfly.Param.MMVarWinWidth = String(Yanfly.Parameters['Window Width']);
Yanfly.Param.MMVarWinHeight = String(Yanfly.Parameters['Window Height']);
Yanfly.Param.MMVarFontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.MMVarStandardPad = Number(Yanfly.Parameters['Standard Padding']);
Yanfly.Param.MMVarTextPad = Number(Yanfly.Parameters['Text Padding']);
Yanfly.Param.MMVarBackOpacity = Number(Yanfly.Parameters['Back Opacity']);
Yanfly.Param.MMVarWinOpacity = Number(Yanfly.Parameters['Window Opacity']);

Yanfly.SetupParameters = function() {
  Yanfly.Param.MMVarId = {};
  Yanfly.Param.MMVarSwitch = {};
  for (var i = 1; i <= 10; i++) {
    var key1 = 'Displayed Variable ' + i;
    var key2 = 'Show Switch Variable ' + i;
    Yanfly.Param.MMVarId[i] = Number(Yanfly.Parameters[key1]) || 0;
    Yanfly.Param.MMVarSwitch[i] = Number(Yanfly.Parameters[key2]) || 0;
  }
};
Yanfly.SetupParameters();

//=============================================================================
// Window_MainMenuVariable
//=============================================================================

function Window_MainMenuVariable() {
    this.initialize.apply(this, arguments);
}

Window_MainMenuVariable.prototype = Object.create(Window_Base.prototype);
Window_MainMenuVariable.prototype.constructor = Window_MainMenuVariable;

Window_MainMenuVariable.prototype.initialize = function(x, y, w, h) {
  Window_Base.prototype.initialize.call(this, x, y, w, h);
  this.opacity = Yanfly.Param.MMVarWinOpacity;
  this.refresh();
};

Window_MainMenuVariable.prototype.standardFontSize = function() {
  return Yanfly.Param.MMVarFontSize || 28;
};

Window_MainMenuVariable.prototype.standardPadding = function() {
  return Yanfly.Param.MMVarStandardPad || 18;
};

Window_MainMenuVariable.prototype.textPadding = function() {
  return Yanfly.Param.MMVarTextPad || 6;
};

Window_MainMenuVariable.prototype.standardBackOpacity = function() {
  return Yanfly.Param.MMVarBackOpacity;
};

Window_MainMenuVariable.prototype.refresh = function() {
  this.contents.clear();
  var x = this.textPadding();
  var y = 0;
  for (var i = 1; i <= this.maxVariables(); i++) {
    if (this.showVariableData(i)) {
      this.resetFontSettings();
      y = this.drawVariableData(i, x, y);
    }
  }
};

Window_MainMenuVariable.prototype.maxVariables = function() {
  return 10;
};

Window_MainMenuVariable.prototype.showVariableData = function(i) {
  if (Yanfly.Param.MMVarSwitch[i] <= 0) {
    return true;
  } else {
    return $gameSwitches.value(Yanfly.Param.MMVarSwitch[i]);
  }
};

Window_MainMenuVariable.prototype.drawVariableData = function(i, x, y) {
  if (Yanfly.Param.MMVarId[i] <= 0) {
    return y;
  }
  var varId = Yanfly.Param.MMVarId[i];
  var name = $dataSystem.variables[varId];
  if (Imported.YEP_X_MoreCurrencies) {
    name = name.replace(/<<(.*?)>>/gi, '');
  }
  this.drawTextEx(name, x, y);
  var value = Yanfly.Util.toGroup($gameVariables.value(varId));
  var width = this.contents.width - this.textPadding() * 2;
  this.drawText(value, x, y, width, 'right');
  return y + this.lineHeight();
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.MMVar.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
  Yanfly.MMVar.Scene_Menu_create.call(this);
  this.createVariableWindow();
};

Scene_Menu.prototype.createVariableWindow = function() {
  var x = this.getVariableWindowX();
  var y = this.getVariableWindowY();
  var w = this.getVariableWindowWidth();
  var h = this.getVariableWindowHeight();
  this._variableWindow = new Window_MainMenuVariable(x, y, w, h);
  this.addWindow(this._variableWindow);
};

Scene_Menu.prototype.getVariableWindowX = function() {
  if (Yanfly.Param.MMVarWinX.toUpperCase() === 'AUTO') {
    return this._commandWindow.x;
  } else {
    return eval(Yanfly.Param.MMVarWinX);
  }
};

Scene_Menu.prototype.getVariableWindowY = function() {
  if (Yanfly.Param.MMVarWinY.toUpperCase() === 'AUTO') {
    return this._commandWindow.y + this._commandWindow.height;
  } else {
    return eval(Yanfly.Param.MMVarWinY);
  }
};

Scene_Menu.prototype.getVariableWindowWidth = function() {
  if (Yanfly.Param.MMVarWinWidth.toUpperCase() === 'AUTO') {
    return this._commandWindow.width;
  } else {
    return eval(Yanfly.Param.MMVarWinWidth);
  }
};

Scene_Menu.prototype.getVariableWindowHeight = function() {
  if (Yanfly.Param.MMVarWinHeight.toUpperCase() === 'AUTO') {
    return Graphics.boxHeight - this._commandWindow.height -
      this._goldWindow.height;
  } else {
    return eval(Yanfly.Param.MMVarWinHeight);
  }
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {}

if (!Yanfly.Util.toGroup) {

Yanfly.Util.toGroup = function(inVal) {
  return inVal;
}

}; // Yanfly.Util.toGroup

//=============================================================================
// End of File
//=============================================================================