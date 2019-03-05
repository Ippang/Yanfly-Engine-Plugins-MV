//=============================================================================
// Yanfly Engine Plugins - Map Select Equip
// YEP_MapSelectEquip.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MapSelectEquip = true;

var Yanfly = Yanfly || {};
Yanfly.MSE = Yanfly.MSE || {};
Yanfly.MSE.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Open up a window similar to the Select Item Window,
 * but instead, returns weapon/armor ID's to a variable.
 * @author Yanfly Engine Plugins
 *
 * @param Default Columns
 * @type number
 * @min 1
 * @desc Default number of columns for the window.
 * @default 2
 *
 * @param Default Rows
 * @type number
 * @min 1
 * @desc Default number of rows for the window.
 * @default 4
 *
 * @param Default X Position
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Default X Position of the window.
 * left     center     right
 * @default center
 *
 * @param Default Y Position
 * @type combo
 * @option top
 * @option middle
 * @option bottom
 * @desc Default Y Position of the window.
 * top     middle     bottom
 * @default bottom
 *
 * @param Default Width
 * @type number
 * @min 0
 * @desc Default width of the window.
 * If set to 0, window width will be the screen width.
 * @default 0
 *
 * @param Default Enable
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable all equips by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Default Quantity
 * @type boolean
 * @on YES
 * @off NO
 * @desc Show the quantity of the equips by default?
 * NO - false     YES - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Select Item event in RPG Maker MV does what it's supposed to: selects an
 * item and then binds the value to a variable. However, it lacks the ability
 * to allow the player to select weapons, armors, or both. This plugin gives
 * you the functionality of selecting an equip and binding the ID of the equip
 * to a variable.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Use the following plugin commands to utilize the Map Select Equip plugin.
 *
 * --- Plugin Commands ---
 *
 * MapSelectEquip var type
 * - This will open up the Map Select Equip window. Replace 'var' with the ID
 * of the variable you wish to set the selected item to. Replace 'type' with
 * 'weapon', 'armor', or 'both'. The 'type' will decide the list type.
 *
 * MapSelectEquipColumns x
 * - Sets the number of columns for the Map Select Equip Window to x.
 *
 * MapSelectEquipRows x
 * - Sets the number of rows for the Map Select Equip Window to x.
 *
 * MapSelectEquipWidth x
 * - Sets the width for the Map Select Equip Window to x. If 0 is used, then
 * the window width will be the screen width.
 *
 * MapSelectEquipX left
 * MapSelectEquipX center
 * MapSelectEquipX right
 * - Sets the Map Select Equip Window to be aligned to the left side of the
 * screen, center of the screen, or right side of the screen.
 *
 * MapSelectEquipY top
 * MapSelectEquipY middle
 * MapSelectEquipY bottom
 * - Sets the Map Select Equip Window to be aligned to the top of the screen,
 * middle of the screen, or bottom of the screen.
 *
 * ShowMapSelectEquipQuantity
 * - Show the quantity of the Equips in the Map Select Equip Window.
 *
 * HideMapSelectEquipQuantity
 * - Hide the quantity of the Equips in the Map Select Equip Window.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MapSelectEquip');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MSECol = Number(Yanfly.Parameters['Default Columns']);
Yanfly.Param.MSERow = Number(Yanfly.Parameters['Default Rows']);
Yanfly.Param.MSEPosX = String(Yanfly.Parameters['Default X Position']);
Yanfly.Param.MSEPosY = String(Yanfly.Parameters['Default Y Position']);
Yanfly.Param.MSEWidth = Number(Yanfly.Parameters['Default Width']);
Yanfly.Param.MSEEnable = eval(String(Yanfly.Parameters['Default Enable']));
Yanfly.Param.MSEQuantity = eval(String(Yanfly.Parameters['Default Quantity']));

//=============================================================================
// Game_System
//=============================================================================

Yanfly.MSE.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.MSE.Game_System_initialize.call(this);
    this.initMapSelectEquip();
};

Game_System.prototype.initMapSelectEquip = function() {
    this._MapSelectEquipWindowColumns = Yanfly.Param.MSECol;
    this._MapSelectEquipWindowRows = Yanfly.Param.MSERow;
    this._MapSelectEquipWindowPosX = Yanfly.Param.MSEPosX;
    this._MapSelectEquipWindowPosY = Yanfly.Param.MSEPosY;
    this._MapSelectEquipWindowWidth = Yanfly.Param.MSEWidth;
    this._MapSelectEquipWindowEnable = Yanfly.Param.MSEEnable;
    this._MapSelectEquipWindowQuantity = Yanfly.Param.MSEQuantity;
};

Game_System.prototype.getMapSelectEquipColumns = function() {
    if (this._MapSelectEquipWindowColumns === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowColumns;
};

Game_System.prototype.setMapSelectEquipColumns = function(value) {
    if (this._MapSelectEquipWindowColumns === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowColumns = value;
};

Game_System.prototype.getMapSelectEquipRows = function() {
    if (this._MapSelectEquipWindowRows === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowRows;
};

Game_System.prototype.setMapSelectEquipRows = function(value) {
    if (this._MapSelectEquipWindowRows === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowRows = value;
};

Game_System.prototype.getMapSelectEquipPosX = function() {
    if (this._MapSelectEquipWindowPosX === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowPosX;
};

Game_System.prototype.setMapSelectEquipPosX = function(value) {
    if (this._MapSelectEquipWindowPosX === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowPosX = value;
};

Game_System.prototype.getMapSelectEquipPosY = function() {
    if (this._MapSelectEquipWindowPosY === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowPosY;
};

Game_System.prototype.setMapSelectEquipPosY = function(value) {
    if (this._MapSelectEquipWindowPosY === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowPosY = value;
};

Game_System.prototype.getMapSelectEquipWidth = function() {
    if (this._MapSelectEquipWindowWidth === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowWidth;
};

Game_System.prototype.setMapSelectEquipWidth = function(value) {
    if (this._MapSelectEquipWindowWidth === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowWidth = value;
};

Game_System.prototype.getMapSelectEquipEnable = function() {
    if (this._MapSelectEquipWindowEnable === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowEnable;
};

Game_System.prototype.setMapSelectEquipEnable = function(value) {
    if (this._MapSelectEquipWindowEnable === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowEnable = value;
};

Game_System.prototype.getMapSelectEquipQuantity = function() {
    if (this._MapSelectEquipWindowQuantity === undefined) {
      this.initMapSelectEquip();
    }
    return this._MapSelectEquipWindowQuantity;
};

Game_System.prototype.setMapSelectEquipQuantity = function(value) {
    if (this._MapSelectEquipWindowQuantity === undefined) {
      this.initMapSelectEquip();
    }
    this._MapSelectEquipWindowQuantity = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.MSE.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.MSE.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'MapSelectEquip') {
    if (SceneManager._scene instanceof Scene_Map) {
      var varId = parseInt(args[0]);
      var line = String(args[1]);
      if (line.match(/WEAPON/i)) {
        var type = 'WEAPONS';
      } else if (line.match(/ARMOR/i)) {
        var type = 'ARMORS';
      } else if (line.match(/BOTH/i)) {
        var type = 'BOTH';
      } else {
        return;
      }
      SceneManager._scene.setupMapSelectEquip(varId, type, false);
      this.wait(10);
    }
  } else if (command === 'MapSelectEquipBase') {
    if (SceneManager._scene instanceof Scene_Map) {
      var varId = parseInt(args[0]);
      var line = String(args[1]);
      if (line.match(/WEAPON/i)) {
        var type = 'WEAPONS';
      } else if (line.match(/ARMOR/i)) {
        var type = 'ARMORS';
      } else if (line.match(/BOTH/i)) {
        var type = 'BOTH';
      } else {
        return;
      }
      SceneManager._scene.setupMapSelectEquip(varId, type, true);
      this.wait(10);
    }
  } else if (command === 'MapSelectEquipColumns') {
    var value = parseInt(args[0]);
    $gameSystem.setMapSelectEquipColumns(value);
  } else if (command === 'MapSelectEquipRows') {
    var value = parseInt(args[0]);
    $gameSystem.setMapSelectEquipRows(value);
  } else if (command === 'MapSelectEquipWidth') {
    var value = parseInt(args[0]);
    $gameSystem.setMapSelectEquipWidth(value);
  } else if (command === 'MapSelectEquipX') {
    var value = String(args[0]).toLowerCase();
    $gameSystem.setMapSelectEquipPosX(value);
  } else if (command === 'MapSelectEquipY') {
    var value = String(args[0]).toLowerCase();
    $gameSystem.setMapSelectEquipPosY(value);
  } else if (command === 'ShowMapSelectEquipQuantity') {
    $gameSystem.setMapSelectEquipQuantity(true);
  } else if (command === 'HideMapSelectEquipQuantity') {
    $gameSystem.setMapSelectEquipQuantity(false);
  }
};

//=============================================================================
// Window_MapSelectEquip
//=============================================================================

function Window_MapSelectEquip() {
    this.initialize.apply(this, arguments);
}

Window_MapSelectEquip.prototype = Object.create(Window_ItemList.prototype);
Window_MapSelectEquip.prototype.constructor = Window_MapSelectEquip;

Window_MapSelectEquip.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this.openness = 0;
};

Window_MapSelectEquip.prototype.windowWidth = function() {
    return this._windowWidth || Graphics.boxWidth;
};

Window_MapSelectEquip.prototype.windowHeight = function() {
    return this._windowHeight || this.fittingHeight(4);
};

Window_MapSelectEquip.prototype.setup = function(varId, type, base) {
    if (!varId) return;
    if (!type) return;
    this.updateWindowSettings();
    this._varId = varId;
    this._base = base;
    this.setType(type)
    this.refresh();
    this.activate();
    this.open();
    this.select(0);
};

Window_MapSelectEquip.prototype.setType = function(type) {
    this._type = type.toUpperCase();
};

Window_MapSelectEquip.prototype.includes = function(item) {
    if (DataManager.isWeapon(item)) {
      return ['WEAPONS', 'BOTH'].contains(this._type);
    }
    if (DataManager.isArmor(item)) {
      return ['ARMORS', 'BOTH'].contains(this._type);
    }
    return false;
};

Window_MapSelectEquip.prototype.maxCols = function() {
    return $gameSystem.getMapSelectEquipColumns() || 1;
};

Window_MapSelectEquip.prototype.updateWindowSettings = function() {
    this.width = $gameSystem.getMapSelectEquipWidth() || Graphics.boxWidth;
    var col = $gameSystem.getMapSelectEquipRows() || 4;
    this.height = this.fittingHeight(col);
    if ($gameSystem.getMapSelectEquipPosX() === 'left') {
      this.x = 0;
    } else if ($gameSystem.getMapSelectEquipPosX() === 'center') {
      this.x = Math.floor((Graphics.boxWidth - this.width) / 2);
    } else {
      this.x = Graphics.boxWidth - this.width;
    }
    if ($gameSystem.getMapSelectEquipPosY() === 'top') {
      this.y = 0;
    } else if ($gameSystem.getMapSelectEquipPosY() === 'middle') {
      this.y = Math.floor((Graphics.boxHeight - this.height) / 2);
    } else {
      this.y = Graphics.boxHeight - this.height;
    }
};

Window_MapSelectEquip.prototype.isEnabled = function(item) {
    if ($gameSystem.getMapSelectEquipEnable()) return true;
    return Window_ItemList.prototype.isEnabled.call(this, item);
};

Window_MapSelectEquip.prototype.drawItemNumber = function(item, x, y, width) {
  if ($gameSystem.getMapSelectEquipQuantity()) {
    Window_ItemList.prototype.drawItemNumber.call(this, item, x, y, width);
  }
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.MSE.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
    Yanfly.MSE.Scene_Map_createAllWindows.call(this);
    this.createMapSelectEquipWindow();
};

Scene_Map.prototype.createMapSelectEquipWindow = function() {
    this._MapSelectEquipWindow = new Window_MapSelectEquip();
    this._MapSelectEquipWindow.setHandler('ok', 
      this.onMapSelectEquipOk.bind(this));
    this._MapSelectEquipWindow.setHandler('cancel', 
      this.onMapSelectEquipCancel.bind(this));
    this.addChild(this._MapSelectEquipWindow);
};

Scene_Map.prototype.setupMapSelectEquip = function(varId, type, base) {
    this._MapSelectEquipWindow.setup(varId, type, base);
    this._active = false;
};

Scene_Map.prototype.onMapSelectEquipOk = function() {
    this._MapSelectEquipWindow.close();
    var item = this._MapSelectEquipWindow.item();
    var varId = this._MapSelectEquipWindow._varId;
    if (Imported.YEP_SelfSwVar) $gameTemp.clearSelfSwVarEvBridge();
    if (!item) {
      $gameVariables.setValue(varId, 0);
    } else {
      if (this._MapSelectEquipWindow._base && item.baseItemId) {
        $gameVariables.setValue(varId, item.baseItemId);
      } else {
        $gameVariables.setValue(varId, item.id);
      }
    }
    if (Imported.YEP_SelfSwVar) $gameTemp.clearSelfSwVarEvent();
    this._active = true;
};

Scene_Map.prototype.onMapSelectEquipCancel = function() {
    this._MapSelectEquipWindow.close();
    var varId = this._MapSelectEquipWindow._varId;
    $gameVariables.setValue(varId, 0);
    this._active = true;
};

//=============================================================================
// End of File
//=============================================================================
