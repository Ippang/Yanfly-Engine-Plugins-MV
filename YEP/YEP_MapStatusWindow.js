//=============================================================================
// Yanfly Engine Plugins - Map Status Window
// YEP_MapStatusWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MapStatusWindow = true;

var Yanfly = Yanfly || {};
Yanfly.MapStatus = Yanfly.MapStatus || {};
Yanfly.MapStatus.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Gain access to open up a window displaying
 * your party's status while on the map screen!
 * @author Yanfly Engine Plugins
 *
 * @param Window X
 * @desc The X position of the window.
 * This is a formula.
 * @default Math.floor((Graphics.boxWidth - statusWindow.width) / 2);
 *
 * @param Window Y
 * @desc The Y position of the window.
 * This is a formula.
 * @default Graphics.boxHeight - statusWindow.height
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin gives you (as the developer) access through plugin commands to
 * opening the party's status menu on the main map screen, as it is usually
 * seen from the battle system. It will display everything the normal battle
 * status menu usually has and it can also be moved.
 *
 * ============================================================================
 * Notes and Status Window Behaviors
 * ============================================================================
 *
 * This plugin can also be combined with Button Common Events or Picture Common
 * Events to give players access to a command that can open up the status
 * window on demand without having to enter the main menu to see how the party
 * is currently doing.
 *
 * The status Menu will automatically refresh while on the map screen whenever
 * an actor receives HP, MP, TP, state, or buff changes. This is to ensure the 
 * data displayed on the menu stays updated.
 *
 * The player can, however, move around and interact with other events while
 * the status window is open. However, in the scenario where an event opens up
 * a Show Text message, the status window will automatically close itself. This
 * is to prevent heavy overlapping between the windows. The status menu window
 * will also close whenever the player exits the current map or enters a menu
 * in a different scene.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * There's plugin commands associate with the Map Status Window that you may
 * use here!
 *
 * Plugin Commands:
 *
 *  OpenMapStatusWindow
 *  - This will open the Map Status Window while on the map scene. It will be
 *  automatically refreshed before opening.
 *
 *  CloseMapStatusWindow
 *  - This will close the Map Status Window while on the map scene.
 *
 *  ToggleMapStatusWindow
 *  - This will switch the Map Status Window between the open and close status
 *  while on the map scene. When it opens, the window will be refreshed.
 *
 *  RefreshMapStatusWindow
 *  - You can force the window to refresh with this command.
 *
 *  SetMapStatusWindowX n
 *  - This will set the X position of the Map Status Window to n. You can use a
 *  formula for n. This position will persist.
 *
 *  SetMapStatusWindowY n
 *  - This will set the Y position of the Map Status Window to n. You can use a
 *  formula for n. This position will persist.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 */
//=============================================================================

// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MapStatusWindow');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MapStatusWinX = String(Yanfly.Parameters['Window X']);
Yanfly.Param.MapStatusWinY = String(Yanfly.Parameters['Window Y']);

//=============================================================================
// Game_System
//=============================================================================

Yanfly.MapStatus.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.MapStatus.Game_System_initialize.call(this);
  this.initMapStatusWindowSettings();
};

Game_System.prototype.initMapStatusWindowSettings = function() {
  this._mapStatusWindowX = Yanfly.Param.MapStatusWinX;
  this._mapStatusWindowY = Yanfly.Param.MapStatusWinY;
};

Game_System.prototype.getMapStatusWindowX = function() {
  if (this._mapStatusWindowX === undefined) this.initMapStatusWindowSettings();
  return this._mapStatusWindowX;
};

Game_System.prototype.getMapStatusWindowY = function() {
  if (this._mapStatusWindowY === undefined) this.initMapStatusWindowSettings();
  return this._mapStatusWindowY;
};

Game_System.prototype.setMapStatusWindowX = function(str) {
  if (this._mapStatusWindowX === undefined) this.initMapStatusWindowSettings();
  this._mapStatusWindowX = str;
};

Game_System.prototype.setMapStatusWindowY = function(str) {
  if (this._mapStatusWindowY === undefined) this.initMapStatusWindowSettings();
  this._mapStatusWindowY = str;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.isUpdateMapStatus = function() {
  if (!this.isActor()) return false;
  if (SceneManager._scene instanceof Scene_Map) {
    var scene = SceneManager._scene;
    return scene._statusWindow && scene._statusWindow.isOpen();
  }
  return false;
};

Yanfly.MapStatus.Game_BattlerBase_setHp = Game_BattlerBase.prototype.setHp;
Game_BattlerBase.prototype.setHp = function(hp) {
  Yanfly.MapStatus.Game_BattlerBase_setHp.call(this, hp);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_BattlerBase_setMp = Game_BattlerBase.prototype.setMp;
Game_BattlerBase.prototype.setMp = function(mp) {
  Yanfly.MapStatus.Game_BattlerBase_setMp.call(this, mp);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_BattlerBase_setTp = Game_BattlerBase.prototype.setTp;
Game_BattlerBase.prototype.setTp = function(tp) {
  Yanfly.MapStatus.Game_BattlerBase_setTp.call(this, tp);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.MapStatus.Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function(stateId) {
  Yanfly.MapStatus.Game_Battler_addState.call(this, stateId);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function(stateId) {
  Yanfly.MapStatus.Game_Battler_removeState.call(this, stateId);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_Battler_addBuff = Game_Battler.prototype.addBuff;
Game_Battler.prototype.addBuff = function(paramId, turns) {
  Yanfly.MapStatus.Game_Battler_addBuff.call(this, paramId, turns);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_Battler_addDebuff = Game_Battler.prototype.addDebuff;
Game_Battler.prototype.addDebuff = function(paramId, turns) {
  Yanfly.MapStatus.Game_Battler_addDebuff.call(this, paramId, turns);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

Yanfly.MapStatus.Game_Battler_removeBuff = Game_Battler.prototype.removeBuff;
Game_Battler.prototype.removeBuff = function(paramId) {
  Yanfly.MapStatus.Game_Battler_removeBuff.call(this, paramId);
  if (this.isUpdateMapStatus()) SceneManager._scene.refreshMapStatusWindow();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.MapStatus.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.MapStatus.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'OpenMapStatusWindow') {
    if (SceneManager._scene instanceof Scene_Map) {
      SceneManager._scene.openMapStatusWindow();
    }
  } else if (command === 'CloseMapStatusWindow') {
    if (SceneManager._scene instanceof Scene_Map) {
      SceneManager._scene.closeMapStatusWindow();
    }
  } else if (command === 'ToggleMapStatusWindow') {
    if (SceneManager._scene instanceof Scene_Map) {
      SceneManager._scene.toggleMapStatusWindow();
    }
  } else if (command === 'RefreshMapStatusWindow') {
    if (SceneManager._scene instanceof Scene_Map) {
      SceneManager._scene.refreshMapStatusWindow();
    }
  } else if (command === 'SetMapStatusWindowX') {
    if (SceneManager._scene instanceof Scene_Map) {
      var code = this.argsToString(args);
      $gameSystem.setMapStatusWindowX(code);
      SceneManager._scene._statusWindow.x = eval(code);
    }
  } else if (command === 'SetMapStatusWindowY') {
    if (SceneManager._scene instanceof Scene_Map) {
      var code = this.argsToString(args);
      $gameSystem.setMapStatusWindowY(code);
      SceneManager._scene._statusWindow.y = eval(code);
    }
  }
};

Game_Interpreter.prototype.argsToString = function(args) {
  var str = '';
  var length = args.length;
  for (var i = 0; i < length; ++i) {
    str += args[i] + ' ';
  }
  return str.trim();
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.MapStatus.Scene_Map_createAllWindows = 
  Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
  Yanfly.MapStatus.Scene_Map_createAllWindows.call(this);
  this.createMapStatusWindow();
};

Scene_Map.prototype.createMapStatusWindow = function() {
  this._statusWindow = new Window_BattleStatus();
  var statusWindow = this._statusWindow;
  this._needStatusWindowRefresh = false;
  this._statusWindow.x = eval($gameSystem.getMapStatusWindowX());
  this._statusWindow.y = eval($gameSystem.getMapStatusWindowY());
  this.addWindow(this._statusWindow);
};

Scene_Map.prototype.openMapStatusWindow = function() {
  if (!this._statusWindow) this.createMapStatusWindow();
  this._statusWindow.refresh();
  this._statusWindow.open();
};

Scene_Map.prototype.closeMapStatusWindow = function() {
  if (!this._statusWindow) this.createMapStatusWindow();
  this._statusWindow.close();
};

Scene_Map.prototype.toggleMapStatusWindow = function() {
  if (!this._statusWindow) this.createMapStatusWindow();
  if (this._statusWindow.isOpen()) {
    this.closeMapStatusWindow();
  } else {
    this.openMapStatusWindow();
  }
};

Scene_Map.prototype.refreshMapStatusWindow = function() {
  if (!this._statusWindow) this.createMapStatusWindow();
  this._needStatusWindowRefresh = true;
};

Yanfly.MapStatus.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
  Yanfly.MapStatus.Scene_Map_update.call(this);
  if (this._needStatusWindowRefresh && this._statusWindow) {
    this._statusWindow.refresh();
  }
};

Yanfly.MapStatus.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  this._statusWindow.visible = false;
  Yanfly.MapStatus.Scene_Map_terminate.call(this);
};

//=============================================================================
// Window_Message
//=============================================================================

Yanfly.MapStatus.Window_Message_startMessage =
  Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
  Yanfly.MapStatus.Window_Message_startMessage.call(this);
  if (SceneManager._scene instanceof Scene_Map) {
    SceneManager._scene.closeMapStatusWindow();
  }
};

Yanfly.MapStatus.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
  Yanfly.MapStatus.Window_Message_terminateMessage.call(this);
  if (SceneManager._scene instanceof Scene_Map) {
    SceneManager._scene.closeMapStatusWindow();
  }
};

//=============================================================================
// End of File
//=============================================================================