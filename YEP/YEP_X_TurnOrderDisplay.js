//=============================================================================
// Yanfly Engine Plugins - Battle Engine Extension - Turn Order Display
// YEP_X_TurnOrderDisplay.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_TurnOrderDisplay = true;

var Yanfly = Yanfly || {};
Yanfly.TOD = Yanfly.TOD || {};
Yanfly.TOD.version = 1.03;

//=============================================================================
 /*:
 * @plugindesc v1.03 Displays the turn order for turn-based battle systems
 * and allows for various display options.
 * @author Yanfly Engine Plugins
 *
 * @param ---Default---
 * @default
 *
 * @param Show Turn Order
 * @parent ---Default---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show turn order by default?
 * YES - true    NO - false
 * @default true
 *
 * @param ---Settings---
 * @default
 *
 * @param Icon Size
 * @parent ---Settings---
 * @type number
 * @min 0
 * @desc This is the size of the icons displayed for the turn order.
 * Default: 32
 * @default 32
 *
 * @param Position X
 * @parent ---Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Which side of the screen should the turn order appear?
 * left     center     right
 * @default right
 *
 * @param Position Y
 * @parent ---Settings---
 * @type number
 * @min 0
 * @desc Where do you want to align the Y turn order?
 * @default 54
 *
 * @param Turn Direction
 * @parent ---Settings---
 * @type combo
 * @option left
 * @option right
 * @desc Which way do you want the turn icons going?
 * left     right
 * @default left
 *
 * @param Performed Spacing
 * @parent ---Settings---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Add a space separating battlers that already performed actions?
 * YES - true     NO - false
 * @default true
 *
 * @param ---Allies---
 * @default
 *
 * @param Ally Border Color
 * @parent ---Allies---
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color used for the borders of allies.
 * @default 4
 *
 * @param Ally Back Color
 * @parent ---Allies---
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color used for the ally background color.
 * @default 22
 *
 * @param Ally Icon
 * @parent ---Allies---
 * @type number
 * @min 0
 * @desc Default icon used for allies. If this value is 0,
 * the icon will be the ally's face graphic instead.
 * @default 0
 *
 * @param ---Enemies---
 * @default
 *
 * @param Enemy Border Color
 * @parent ---Enemies---
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color used for the borders of enemies.
 * @default 2
 *
 * @param Enemy Back Color
 * @parent ---Enemies---
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color used for the ally background color.
 * @default 19
 *
 * @param Enemy Icon
 * @parent ---Enemies---
 * @type number
 * @min 0
 * @desc Default icon used for enemies. If this value is 0,
 * the icon will be the enemy's drawn battler instead.
 * @default 0
 *
 * @param Enemy SV Battlers
 * @parent ---Enemies---
 * @type boolean
 * @on YES
 * @off NO
 * @desc If using Animated SV Enemies, draw their battlers if no icon
 * is being used? This can become laggy. NO - false  YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_BattleEngineCore. Make sure this plugin is located
 * under YEP_BattleEngineCore in the plugin list.
 *
 * For Turn-Based Battle Systems like DTB (Default Turn Battle), letting the
 * player see the turn order visually can add a whole lot more depth to the
 * battle system. This plugin will add a display of icons showing the turn
 * order of the player's party and the enemy party within a corner of the
 * screen (modifiable).
 *
 * NOTE! This plugin does NOT work with tick-based Battle Systems like ATB or
 * CTB! It is specifically made to work only with turn-based battle systems.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags to give your actors and enemies unique turn
 * order icons.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *
 * Actor and Enemy Notetags:
 *
 *   <Turn Order Icon: x>
 *   - This sets the icon used for the actor/enemy to be x.
 *
 *   <Turn Order Border Color: x>
 *   - This sets the border color used for the actor/enemy to text color x.
 *
 *   <Turn Order Background Color: x>
 *   - This sets the background color used for the actor/enemy to text color x.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *
 * Actor Only Notetags:
 *
 *   <Class x Turn Order Icon: y>
 *   - This sets it so that if the actor is a specific class, the actor will
 *   get a specific icon used for the Turn Order Display. If the actor is class
 *   x, it will receive icon y.
 *
 *   <Hero Turn Order Icon: x>
 *   <Warrior Turn Order Icon: x>
 *   <Mage Turn Order Icon: x>
 *   <Priest Turn Order Icon: x>
 *   - If you prefer to use names instead of class ID's, you can use the above
 *   notetag format. If the actor is the named class, it will receive icon x.
 *   If you have multiple classes with the same name, priority will be given to
 *   the class with the highest ID.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Use the following plugin commands to control the Turn Order Display.
 *
 * Plugin Command:
 *
 *   EnableTurnOrderDisplay
 *   - Turns on the Turn Order Display to be shown in battle if the battle is
 *   a turn-based battle system can support the Turn Order Display.
 *
 *   DisableTurnOrderDisplay
 *   - Turns off the Turn Order Display to be hidden in battle.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Fixed a bug that caused enemies to endlessly have turns if dynamic actions
 * were enabled.
 *
 * Version 1.01:
 * - Fixed some bugs that caused crashes when returning to the battle scene.
 * - Fixed a bug that altered the order flow during a Surprise Attack or a
 * Preemptive Attack for battle advantage.
 * - Made turn order display not cover up certain windows.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_BattleEngineCore) {
if (Yanfly.BEC.version && Yanfly.BEC.version >= 1.42) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_TurnOrderDisplay');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.TODShowDefault = String(Yanfly.Parameters['Show Turn Order']);
Yanfly.Param.TODShowDefault = eval(Yanfly.Param.TODShowDefault);

Yanfly.Param.TODIconSize = Number(Yanfly.Parameters['Icon Size']);
Yanfly.Param.TODPositionX = String(Yanfly.Parameters['Position X']);
Yanfly.Param.TODPositionY = Number(Yanfly.Parameters['Position Y']);
Yanfly.Param.TODTurnDirection = String(Yanfly.Parameters['Turn Direction']);
Yanfly.Param.TODPerformedSpace = String(Yanfly.Parameters['Performed Spacing']);
Yanfly.Param.TODPerformedSpace = eval(Yanfly.Param.TODPerformedSpace);

Yanfly.Param.TODColorAllyBr = Number(Yanfly.Parameters['Ally Border Color']);
Yanfly.Param.TODColorAllyBg = Number(Yanfly.Parameters['Ally Back Color']);
Yanfly.Param.TODAllyIcon = Number(Yanfly.Parameters['Ally Icon']);

Yanfly.Param.TODColorEnemyBr = Number(Yanfly.Parameters['Enemy Border Color']);
Yanfly.Param.TODColorEnemyBg = Number(Yanfly.Parameters['Enemy Back Color']);
Yanfly.Param.TODEnemyIcon = Number(Yanfly.Parameters['Enemy Icon']);
Yanfly.Param.TODEnemySVBattler = String(Yanfly.Parameters['Enemy SV Battlers']);
Yanfly.Param.TODEnemySVBattler = eval(Yanfly.Param.TODEnemySVBattler);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.TOD.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.TOD.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_TurnOrderDisplay) {
    this.processTODNotetagsC($dataClasses);
    this.processTODNotetags1($dataActors, true);
    this.processTODNotetags1($dataEnemies, false);
    Yanfly._loaded_YEP_X_TurnOrderDisplay = true;
  }
  
  return true;
};

DataManager.processTODNotetagsC = function(group) {
  if (Yanfly.ClassIdRef) return;
  Yanfly.ClassIdRef = {};
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (obj.name.length <= 0) continue;
    Yanfly.ClassIdRef[obj.name.toUpperCase()] = n;
  }
};

DataManager.processTODNotetags1 = function(group, isActor) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    if (isActor) {
      obj.turnOrderIcon = Yanfly.Param.TODAllyIcon;
      obj.turnOrderBorderColor = Yanfly.Param.TODColorAllyBr;
      obj.turnOrderBackgroundColor = Yanfly.Param.TODColorAllyBg;
      obj.turnOrderClassIcon = {};
    } else {
      obj.turnOrderIcon = Yanfly.Param.TODEnemyIcon;
      obj.turnOrderBorderColor = Yanfly.Param.TODColorEnemyBr;
      obj.turnOrderBackgroundColor = Yanfly.Param.TODColorEnemyBg;
    }

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:TURN ORDER ICON|TURN ICON):[ ](\d+)>/i)) {
        obj.turnOrderIcon = parseInt(RegExp.$1);
      } else if (line.match(/<(?:TURN ORDER BORDER COLOR):[ ](\d+)>/i)) {
        obj.turnOrderBorderColor = parseInt(RegExp.$1);
      } else if (line.match(/<(?:TURN ORDER BACKGROUND COLOR):[ ](\d+)>/i)) {
        obj.turnOrderBackgroundColor = parseInt(RegExp.$1);
      } else if (line.match(/<CLASS[ ](\d+)[ ]TURN ORDER ICON:[ ](\d+)>/i)) {
        var classId = parseInt(RegExp.$1);
        var icon = parseInt(RegExp.$2);
        obj.turnOrderClassIcon[classId] = icon;
      } else if (line.match(/<(.*)[ ]TURN ORDER ICON:[ ](\d+)>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        var icon = parseInt(RegExp.$2);
        var classId = Yanfly.ClassIdRef[name];
        if (classId) obj.turnOrderClassIcon[classId] = icon;
      }
    }
  }
};

//=============================================================================
// BattleManager
//=============================================================================

if (!Imported.YEP_BattleEngineCore) {

BattleManager.isTurnBased = function() {
  return true;
};

}; // Imported.YEP_BattleEngineCore

BattleManager.isTurnOrderDisplayUseable = function() {
  return this.isTurnBased();
};

Yanfly.TOD.BattleManager_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {
  Yanfly.TOD.BattleManager_startBattle.call(this);
  this.initializeTurnOrderDisplay();
};

BattleManager.initializeTurnOrderDisplay = function() {
  $gameParty._inBattle = true;
  this._performedBattlers = [];
  this.initializeBattlerActions();
  this.makeActionOrders();
};

BattleManager.initializeBattlerActions = function() {
  $gameParty.makeActions();
  $gameTroop.makeActions();
};

BattleManager.isPreventUpdateTurnOrder = function() {
  if (Imported.YEP_X_CounterControl && this.isCountering()) return true;
  if (Imported.YEP_InstantCast && this._instantCasting) return true;
  return false;
};

BattleManager.updateTurnOrderDisplayX = function() {
  if ($gameParty.inBattle() && this.isTurnBased()) {
    if (this.isPreventUpdateTurnOrder()) return;
    if (SceneManager._scene instanceof Scene_Battle) {
      SceneManager._scene.requestUpdateTurnOrderDisplayX();
    }
  }
};

BattleManager.refreshTurnOrderDisplay = function() {
  if ($gameParty.inBattle() && this.isTurnBased()) {
    if (this.isPreventUpdateTurnOrder()) return;
    if (SceneManager._scene instanceof Scene_Battle) {
      SceneManager._scene.refreshTurnOrderDisplay();
    }
  }
};

Yanfly.TOD.BattleManager_makeActionOrders = BattleManager.makeActionOrders;
BattleManager.makeActionOrders = function() {
  Yanfly.TOD.BattleManager_makeActionOrders.call(this);
  this.updateTurnOrderDisplayX();
};

Yanfly.TOD.BattleManager_startInput = BattleManager.startInput;
BattleManager.startInput = function() {
  Yanfly.TOD.BattleManager_startInput.call(this);
  if (this.isDTB()) {
    this._performedBattlers = [];
  }
  this.updateTurnOrderDisplayX();
};

Yanfly.TOD.BattleManager_updateTurn = BattleManager.updateTurn;
BattleManager.updateTurn = function() {
  Yanfly.TOD.BattleManager_updateTurn.call(this);
  this.updateTurnOrderDisplayX();
};

Yanfly.TOD.BattleManager_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function() {
  Yanfly.TOD.BattleManager_endTurn.call(this);
  this.updateTurnOrderDisplayX();
};

Yanfly.TOD.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
  this.updateTurnOrderDisplayX();
  Yanfly.TOD.BattleManager_endAction.call(this);
};

BattleManager.setTurnOrderDisplaySurprisePreemptiveDefault = function() {
  var change = false;
  if (this._surprise) {
    var change = true;
    this._performedBattlers = 
      this._performedBattlers.concat($gameParty.members());
  } else if (this._preemptive) {
    var change = true;
    this._performedBattlers = 
      this._performedBattlers.concat($gameTroop.members());
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.TOD.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.TOD.Game_System_initialize.call(this);
  this.initTurnOrderDisplaySettings();
};

Game_System.prototype.initTurnOrderDisplaySettings = function() {
  this._showTurnOrderDisplay = Yanfly.Param.TODShowDefault;
};

Game_System.prototype.isShowTurnOrderDisplaySettings = function() {
  if (this._showTurnOrderDisplay == undefined) {
    this.initTurnOrderDisplaySettings();
  }
  if (!this._showTurnOrderDisplay) return false;
  return BattleManager.isTurnOrderDisplayUseable();
};

Game_System.prototype.setTurnOrderDisplaySettings = function(value) {
  this._showTurnOrderDisplay = value;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.TOD.Game_BattlerBase_appear = Game_BattlerBase.prototype.appear;
Game_BattlerBase.prototype.appear = function() {
  Yanfly.TOD.Game_BattlerBase_appear.call(this);
  if ($gameParty.inBattle()) {
    this.makeActions();
    $gameTroop.makeUniqueNames();
    BattleManager.makeActionOrders();
    BattleManager.refreshTurnOrderDisplay();
  }
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.TOD.Game_Battler_performCollapse =
  Game_Battler.prototype.performCollapse;
Game_Battler.prototype.performCollapse = function() {
  Yanfly.TOD.Game_Battler_performCollapse.call(this);
  BattleManager.refreshTurnOrderDisplay();
};

Game_Battler.prototype.turnOrderDisplayBitmap = function() {
  return ImageManager.loadSystem('IconSet');
};

Game_Battler.prototype.turnOrderDisplayIcon = function() {
  return 0;
};

Yanfly.TOD.Game_Battler_setAction = Game_Battler.prototype.setAction;
Game_Battler.prototype.setAction = function(index, action) {
  Yanfly.TOD.Game_Battler_setAction.call(this, index, action);
  BattleManager.makeActionOrders();
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.turnOrderDisplayBitmap = function() {
  if (this.actor().turnOrderClassIcon) {
    if (this.actor().turnOrderClassIcon[this._classId]) {
      return this.actor().turnOrderClassIcon[this._classId];
    }
  }
  if (this.turnOrderDisplayIcon() > 0) {
    return ImageManager.loadSystem('IconSet');
  }
  return ImageManager.loadFace(this.faceName());
};

Game_Actor.prototype.turnOrderDisplayIcon = function() {
  return this.actor().turnOrderIcon;
};

Game_Actor.prototype.turnOrderBorderColor = function() {
  return this.actor().turnOrderBorderColor;
};

Game_Actor.prototype.turnOrderBackgroundColor = function() {
  return this.actor().turnOrderBackgroundColor;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.turnOrderDisplayBitmap = function() {
  if (this.turnOrderDisplayIcon() > 0) {
    return ImageManager.loadSystem('IconSet');
  }
  var name = this.battlerName();
  var hue = this.battlerHue();
  if (Imported.YEP_X_AnimatedSVEnemies && this.hasSVBattler()) {
    return ImageManager.loadSvActor(this.svBattlerName());
  }
  if ($gameSystem.isSideView()) {
    return ImageManager.loadSvEnemy(name, hue);
  } else {
    return ImageManager.loadEnemy(name, hue);
  }
};

Game_Enemy.prototype.turnOrderDisplayIcon = function() {
  return this.enemy().turnOrderIcon;
};

Game_Enemy.prototype.turnOrderBorderColor = function() {
  return this.enemy().turnOrderBorderColor;
};

Game_Enemy.prototype.turnOrderBackgroundColor = function() {
  return this.enemy().turnOrderBackgroundColor;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.TOD.Game_Action_clear = Game_Action.prototype.clear;
Game_Action.prototype.clear = function() {
  Yanfly.TOD.Game_Action_clear.call(this);
  BattleManager.makeActionOrders();
};

Yanfly.TOD.Game_Action_setSkill = Game_Action.prototype.setSkill;
Game_Action.prototype.setSkill = function(skillId) {
  Yanfly.TOD.Game_Action_setSkill.call(this, skillId);
  BattleManager.makeActionOrders();
};

Yanfly.TOD.Game_Action_setItem = Game_Action.prototype.setItem;
Game_Action.prototype.setItem = function(itemId) {
  Yanfly.TOD.Game_Action_setItem.call(this, itemId);
  BattleManager.makeActionOrders();
};

Yanfly.TOD.Game_Action_setItemObject = Game_Action.prototype.setItemObject;
Game_Action.prototype.setItemObject = function(object) {
  Yanfly.TOD.Game_Action_setItemObject.call(this, object);
  BattleManager.makeActionOrders();
};

//=============================================================================
// Game_Troop
//=============================================================================

Yanfly.TOD.Game_Troop_increaseTurn = Game_Troop.prototype.increaseTurn;
Game_Troop.prototype.increaseTurn = function() {
  Yanfly.TOD.Game_Troop_increaseTurn.call(this);
  BattleManager.updateTurnOrderDisplayX();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.TOD.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.TOD.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'EnableTurnOrderDisplay') {
    $gameSystem.setTurnOrderDisplaySettings(true);
    if ($gameParty.inBattle()) BattleManager.updateTurnOrderDisplayX();
  } else if (command === 'DisableTurnOrderDisplay') {
    $gameSystem.setTurnOrderDisplaySettings(false);
    if ($gameParty.inBattle()) BattleManager.updateTurnOrderDisplayX();
  }
};

//=============================================================================
// Scene_Battle
//=============================================================================

Scene_Battle.prototype.createTurnOrderDisplay = function() {
  this._turnOrderDisplay = [];
  var length = $gameTroop.members().length;
  for (var i = 0; i < length; ++i) {
    this._turnOrderDisplay.push(new Window_TurnOrderIcon($gameTroop, i));
  }
  var length = $gameParty.maxBattleMembers();
  for (var i = 0; i < length; ++i) {
    this._turnOrderDisplay.push(new Window_TurnOrderIcon($gameParty, i));
  }
  var length = this._turnOrderDisplay.length;
  for (var i = 0; i < length; ++i) {
    var win = this._turnOrderDisplay[i];
    this.setupTurnOrderDisplayWindow(win);
  }
};

Scene_Battle.prototype.setupTurnOrderDisplayWindow = function(win) {
  win._helpWindow = this._helpWindow;
  win._windowLayer = this._windowLayer;
  this.addChild(win);
};

Scene_Battle.prototype.requestUpdateTurnOrderDisplayX = function() {
  this._turnOrderDisplayUpdateRequest = true;
};

Yanfly.TOD.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
  Yanfly.TOD.Scene_Battle_update.call(this);
  if (this._turnOrderDisplayUpdateRequest) this.updateTurnOrderDisplayX();
};

Scene_Battle.prototype.updateTurnOrderDisplayX = function() {
  if (!this._turnOrderDisplay) this.createTurnOrderDisplay();
  var length = this._turnOrderDisplay.length;
  for (var i = 0; i < length; ++i) {
    this._turnOrderDisplay[i].updateDestinationX();
    this._turnOrderDisplay[i].updateTargetOpacity();
  }
  this._turnOrderDisplayUpdateRequest = false;
};

Scene_Battle.prototype.refreshTurnOrderDisplay = function() {
  if (!this._turnOrderDisplay) this.createTurnOrderDisplay();
  var length = this._turnOrderDisplay.length;
  for (var i = 0; i < length; ++i) {
    this._turnOrderDisplay[i].refresh();
  }
};

Yanfly.TOD.Scene_Battle_startActorCommandSelection =
  Scene_Battle.prototype.startActorCommandSelection;
Scene_Battle.prototype.startActorCommandSelection = function() {
  Yanfly.TOD.Scene_Battle_startActorCommandSelection.call(this);
  this.updateTurnOrderDisplayX();
};

Yanfly.TOD.Scene_Battle_startPartyCommandSelection =
  Scene_Battle.prototype.startPartyCommandSelection;
Scene_Battle.prototype.startPartyCommandSelection = function() {
  Yanfly.TOD.Scene_Battle_startPartyCommandSelection.call(this);
  this.updateTurnOrderDisplayX();
};

if (Imported.YEP_X_InBattleStatus) {

Yanfly.TOD.Scene_Battle_commandInBattleStatus =
  Scene_Battle.prototype.commandInBattleStatus;
Scene_Battle.prototype.commandInBattleStatus = function() {
  Yanfly.TOD.Scene_Battle_commandInBattleStatus.call(this);
  this.requestUpdateTurnOrderDisplayX();
};

Yanfly.TOD.Scene_Battle_onInBattleStatusCancel =
  Scene_Battle.prototype.onInBattleStatusCancel;
Scene_Battle.prototype.onInBattleStatusCancel = function() {
  Yanfly.TOD.Scene_Battle_onInBattleStatusCancel.call(this);
  this.requestUpdateTurnOrderDisplayX();
};

} // Imported.YEP_X_InBattleStatus

//=============================================================================
// Game_Temp
//=============================================================================

Game_Temp.prototype.battleTurnOrder = function() {
  this.makeBattleTurnOrderData();
  this._battleTurnOrder = [];
  this.battleTurnOrderAddSubject();
  this.battleTurnOrderAddActionActors();
  if (Yanfly.Param.TODPerformedSpace && this._battleTurnOrder.length > 0) {
    this._battleTurnOrder.push(undefined);
  }
  this.battleTurnOrderAddPerformedActors();
  return this._battleTurnOrder;
};

Game_Temp.prototype.battleTurnOrderIndex = function(battler) {
  return this.battleTurnOrder().indexOf(battler);
};

Game_Temp.prototype.makeBattleTurnOrderData = function() {
  var array = BattleManager._actionBattlers;
  this._actionBattlers = array.filter(Yanfly.Util.onlyUnique);
  array = BattleManager._performedBattlers;
  this._performedBattlers = array.filter(Yanfly.Util.onlyUnique);
};

Game_Temp.prototype.battleTurnOrderAddSubject = function() {
  if (!BattleManager._subject) return;
  if (BattleManager._subject.isDead()) return;
  if (BattleManager._surprise && BattleManager._subject.isActor()) return;
  this._battleTurnOrder.push(BattleManager._subject);
};

Game_Temp.prototype.battleTurnOrderAddActionActors = function() {
  var array = this._actionBattlers;
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var battler = array[i];
    if (!battler) continue;
    if (battler.isDead()) continue;
    if (battler.isHidden()) continue;
    if (BattleManager._surprise && battler.isActor()) continue;
    if (BattleManager._preemptive && battler.isEnemy()) continue;
    if (battler === BattleManager._subject) continue;
    if (this._performedBattlers.contains(battler)) continue;
    this._battleTurnOrder.push(battler);
  }
};

Game_Temp.prototype.battleTurnOrderAddPerformedActors = function() {
  var array = this._performedBattlers;
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var battler = array[i];
    if (!battler) continue;
    if (battler.isDead()) continue;
    if (battler.isHidden()) continue;
    if (BattleManager._surprise && battler.isActor()) continue;
    if (BattleManager._preemptive && battler.isEnemy()) continue;
    if (battler === BattleManager._subject) continue;
    this._battleTurnOrder.push(battler);
  }
};

//=============================================================================
// Window_TurnOrderIcon
//=============================================================================

function Window_TurnOrderIcon() {
  this.initialize.apply(this, arguments);
}

Window_TurnOrderIcon.prototype = Object.create(Window_Base.prototype);
Window_TurnOrderIcon.prototype.constructor = Window_TurnOrderIcon;

Window_TurnOrderIcon.prototype.initialize = function(unit, battlerIndex) {
  this.initSettings(unit, battlerIndex);
  var size = Yanfly.Param.TODIconSize + 8;
  Window_Base.prototype.initialize.call(this, 0, 0, size, size);
  this.updateDestinationX();
  this.updateTargetOpacity();
  this.x = this._destinationX;
  this.setup();
  this.waitUntilLoaded();
};

Window_TurnOrderIcon.prototype.initSettings = function(unit, battlerIndex) {
  this._battlerUnit = unit;
  this._battlerIndex = battlerIndex;
  this._battler = this.battler();
  this._position = Yanfly.Param.TODPositionX.toLowerCase();
  this._direction = Yanfly.Param.TODTurnDirection.toLowerCase();
  this._lowerWindows = eval(Yanfly.Param.BECLowerWindows);
};

Window_TurnOrderIcon.prototype.standardPadding = function() {
  return 0;
};

Window_TurnOrderIcon.prototype.battler = function() {
  var battler = this._battlerUnit.members()[this._battlerIndex];
  if (!battler) battler = $gameActors.actor(1);
  return battler;
};

Window_TurnOrderIcon.prototype.setup = function() {
  this._requireRedraw = false;
  this._image = this.battler().turnOrderDisplayBitmap();
  this._displayIcon = this.battler().turnOrderDisplayIcon();
  this.contentsOpacity = this._targetOpacity;
  this.opacity = 0;
  this.y = this.destinationY();
};

Window_TurnOrderIcon.prototype.isBattlerVisible = function() {
  var battler = this.battler();
  if (!battler) return false;
  if (battler.isDead()) return false;
  if (battler.isHidden()) return false;
  if (battler.friendsUnit().deadMembers().contains(battler)) return false;
  if (battler.isActor()) {
    return battler.isBattleMember();
  }
  return true;
};

Window_TurnOrderIcon.prototype.waitUntilLoaded = function() {
  if (!this._image) return;
  if (this._image.width <= 0) {
    return setTimeout(this.waitUntilLoaded.bind(this), 5);
  }
  this.refresh();
};

Window_TurnOrderIcon.prototype.refresh = function() {
  this.contents.clear();
  this.drawBorder();
  this.drawBattler();
};

Window_TurnOrderIcon.prototype.drawBorder = function() {
  var width = this.contents.width;
  var height = this.contents.height;
  this.contents.fillRect(0, 0, width, height, this.gaugeBackColor());
  width -= 2;
  height -= 2;
  this.contents.fillRect(1, 1, width, height, this.battlerBorderColor());
  width -= 4;
  height -= 4;
  this.contents.fillRect(3, 3, width, height, this.gaugeBackColor());
  width -= 2;
  height -= 2;
  this.contents.fillRect(4, 4, width, height, this.battlerBackColor());
  return;
};

Window_TurnOrderIcon.prototype.battlerBorderColor = function() {
  return this.textColor(this.battler().turnOrderBorderColor());
};

Window_TurnOrderIcon.prototype.battlerBackColor = function() {
  return this.textColor(this.battler().turnOrderBackgroundColor());
};

Window_TurnOrderIcon.prototype.drawBattler = function() {
  if (this.battler().turnOrderDisplayIcon() > 0) {
    this.drawIcon(this.battler().turnOrderDisplayIcon(), 4, 4);
  } else if (this.battler().isActor()) {
    this.drawActorFace();
  } else if (this.battler().isEnemy()) {
    this.drawEnemy();
    this.drawLetter();
  }
};

Window_TurnOrderIcon.prototype.iconWidth = function() {
  return Yanfly.Param.TODIconSize;
};

Window_TurnOrderIcon.prototype.iconHeight = function() {
  return Yanfly.Param.TODIconSize;
};

Window_TurnOrderIcon.prototype.drawIcon = function(iconIndex, x, y) {
  var bitmap = ImageManager.loadSystem('IconSet');
  var pw = Window_Base._iconWidth;
  var ph = Window_Base._iconHeight;
  var sx = iconIndex % 16 * pw;
  var sy = Math.floor(iconIndex / 16) * ph;
  var ww = this.iconWidth();
  var wh = this.iconHeight();
  this.contents.blt(bitmap, sx, sy, pw, ph, x, y, ww, wh);
};

Window_TurnOrderIcon.prototype.drawActorFace = function() {
  var width = Window_Base._faceWidth;
  var height = Window_Base._faceHeight;
  var faceIndex = this.battler().faceIndex();
  var bitmap = this._image;
  var pw = Window_Base._faceWidth;
  var ph = Window_Base._faceHeight;
  var sw = Math.min(width, pw);
  var sh = Math.min(height, ph);
  var dx = Math.floor(Math.max(width - pw, 0) / 2);
  var dy = Math.floor(Math.max(height - ph, 0) / 2);
  var sx = faceIndex % 4 * pw + (pw - sw) / 2;
  var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
  var dw = this.contents.width - 8;
  var dh = this.contents.height - 8;
  this.contents.blt(bitmap, sx, sy, sw, sh, dx + 4, dy + 4, dw, dh);
};

Window_TurnOrderIcon.prototype.isUsingSVBattler = function() {
  if (!Imported.YEP_X_AnimatedSVEnemies) return false;
  if (!this.battler().hasSVBattler()) return false;
  return Yanfly.Param.TODEnemySVBattler;
};

Window_TurnOrderIcon.prototype.drawEnemy = function() {
  if (this.isUsingSVBattler()) return this.drawSVEnemy();
  var bitmap = this._image;
  var sw = bitmap.width;
  var sh = bitmap.height;
  var dw = this.contents.width - 8;
  var dh = this.contents.height - 8;
  var dx = 0;
  var dy = 0;
  if (sw >= sh) {
    var rate = sh / sw;
    dh *= rate;
    dy += this.contents.height - 8 - dh;
  } else {
    var rate = sw / sh;
    dw *= rate;
    dx += Math.floor((this.contents.width - 8 - dw) / 2);
  }
  this.contents.blt(bitmap, 0, 0, sw, sh, dx + 4, dy + 4, dw, dh);
};

Window_TurnOrderIcon.prototype.drawSVEnemy = function() {
  var bitmap = this._image;
  var sw = bitmap.width / 9;
  var sh = bitmap.height / 6;
  var dw = this.contents.width - 8;
  var dh = this.contents.height - 8;
  var dx = 0;
  var dy = 0;
  if (sw >= sh) {
    var rate = sh / sw;
    dh *= rate;
    dy += this.contents.height - 8 - dh;
  } else {
    var rate = sw / sh;
    dw *= rate;
    dx += Math.floor((this.contents.width - 8 - dw) / 2);
  }
  this.contents.blt(bitmap, 0, 0, sw, sh, dx + 4, dy + 4, dw, dh);
};

Window_TurnOrderIcon.prototype.drawLetter = function() {
  if (!this.battler().isEnemy()) return;
  if (!this.battler()._plural) return;
  var letter = this.battler()._letter;
  var dy = this.contents.height - this.lineHeight();
  this.drawText(letter, 0, dy, this.contents.width - 4, 'right');
};

Window_TurnOrderIcon.prototype.update = function() {
  Window_Base.prototype.update.call(this);
  this.updateBattler();
  this.updateRedraw();
  this.updatePosition();
  this.updateOpacity();
};

Window_TurnOrderIcon.prototype.updateBattler = function() {
  if (this._battler !== this.battler()) {
    this._requireRedraw = true;
  }
};

Window_TurnOrderIcon.prototype.updateRedraw = function() {
  if (!this._requireRedraw) return;
  this._requireRedraw = false;
  this.setup();
  this.waitUntilLoaded();
};

Window_TurnOrderIcon.prototype.updateDestinationX = function() {
  if (!this.battler()) return;
  if (this.battler().isDead()) return;
  this._destinationX = 0;
  this.calculateDestinationXAlign();
  this.calculateDestinationXIndex();
};

Window_TurnOrderIcon.prototype.aliveMembersSize = function() {
  var value = 0;
  var members = $gameParty.battleMembers().concat($gameTroop.members());
  var length = members.length;
  for (var i = 0; i < length; ++i) {
    var member = members[i];
    if (!member) continue;
    if (member.isAlive()) value += 1;
  }
  if (Yanfly.Param.TODPerformedSpace) value += 1;
  return value;
};

Window_TurnOrderIcon.prototype.calculateDestinationXAlign = function() {
  var size = this.width;
  var buffer = Math.ceil(this.width / 4);
  if (this._position === 'left') {
    this._destinationX = this.width;
    this._destinationX += buffer;
    if (this._direction === 'left') {
      this._destinationX += this.aliveMembersSize() * size;
    }
  } else if (this._position === 'center') {
    this._destinationX = Math.floor(Graphics.boxWidth / 2);
    this._destinationX -= Math.floor(this.width / 2);
    if (this._direction === 'left') {
      this._destinationX += Math.floor((this.aliveMembersSize() * size) / 2);
    } else if (this._direction === 'right') {
      this._destinationX -= Math.floor((this.aliveMembersSize() * size) / 2);
    }
  } else if (this._position === 'right') {
    this._destinationX = Graphics.boxWidth - this.width;
    this._destinationX -= buffer;
    if (this._direction === 'right') {
      this._destinationX -= this.aliveMembersSize() * size;
    }
  }
};

Window_TurnOrderIcon.prototype.calculateDestinationXIndex = function() {
  var size = this.aliveMembersSize() - this.turnOrderDisplayIndex();
  var distance = this.width * size;
  if (this._direction === 'left') {
    this._destinationX -= distance;
  } else if (this._direction === 'right') {
    this._destinationX += distance;
  }
};

Window_TurnOrderIcon.prototype.turnOrderDisplayIndex = function() {
  var index = 0;
  if (!BattleManager._actionBattlers) return index;
  if (!BattleManager._performedBattlers) return index;
  if (this.battler().isHidden()) return -1;
  this._hiddenBattlers = this.getHiddenBattlers();
  index += this._hiddenBattlers.length;
  if (!BattleManager._ignoreTurnOrderFirstIndex) {
    if (this.isReturnFirstPossibleIndex()) {
      return index;
    } else if (this.isShiftFirstPossibleIndex()) {
      index += 1;
    }
  }
  var actionBattlers = this.getActionBattlers();
  var performedBattlers = this.getPerformedBattlers();
  if (performedBattlers.contains(this.battler())) {
    index += actionBattlers.length;
    index += performedBattlers.indexOf(this.battler());
    if (Yanfly.Param.TODPerformedSpace) index += 1;
    return index;
  } else {
    return index + actionBattlers.indexOf(this.battler());
  }
};

Window_TurnOrderIcon.prototype.turnOrderDisplayIndex = function() {
  return $gameTemp.battleTurnOrderIndex(this.battler());
};

Window_TurnOrderIcon.prototype.isReturnFirstPossibleIndex = function() {
  if (this.battler() !== BattleManager._subject) return false;
  return true;
};

Window_TurnOrderIcon.prototype.isShiftFirstPossibleIndex = function() {
  return BattleManager._subject;
};

Window_TurnOrderIcon.prototype.getHiddenBattlers = function() {
  var result = [];
  var members = $gameParty.battleMembers().concat($gameTroop.members());
  var length = members.length;
  for (var i = 0; i < length; ++i) {
    var member = members[i];
    if (!member) continue;
    if (member.isHidden()) result.push(member);
  }
  return result;
};

Window_TurnOrderIcon.prototype.getActionBattlers = function() {
  var result = [];
  var battlers = Yanfly.Util.getUnique(BattleManager._actionBattlers);
  var length = battlers.length;
  for (var i = 0; i < length; ++i) {
    var battler = battlers[i];
    if (!battler) continue;
    if (battler.isDead()) continue;
    if (battler.isHidden()) continue;
    if (this._hiddenBattlers.contains(battler)) continue;
    if (BattleManager._performedBattlers.contains(battler)) continue;
    result.push(battler);
  }
  return result;
};

Window_TurnOrderIcon.prototype.getPerformedBattlers = function() {
  var result = [];
  var battlers = Yanfly.Util.getUnique(BattleManager._performedBattlers);
  var length = battlers.length;
  for (var i = 0; i < length; ++i) {
    var battler = battlers[i];
    if (!battler) continue;
    if (battler.isHidden()) continue;
    if (battler.isDead()) continue;
    if (this._hiddenBattlers.contains(battler)) continue;
    result.push(battler);
  }
  return result;
};

Window_TurnOrderIcon.prototype.destinationY = function() {
  var value = Yanfly.Param.TODPositionY;
  if (this._helpWindow && this._helpWindow.visible) {
    var cap = this._helpWindow.height;
    this._selectHeight = this._selectHeight ||
      Math.round(this.contents.height / 4);
    value = Math.max(value, cap + this._selectHeight);
  }
  if (!this.battler()) return value;
  if (this.battler().isSelected()) {
    value -= this._selectHeight;
  }
  return value;
};

Window_TurnOrderIcon.prototype.updatePosition = function() {
  if (BattleManager._escaped) return;
  if (this._destinationX !== this.x) {
    var desX = this._destinationX;
    var moveAmount = Math.max(1, Math.abs(desX - this.x) / 4);
    if (this.x > desX) this.x = Math.max(this.x - moveAmount, desX);
    if (this.x < desX) this.x = Math.min(this.x + moveAmount, desX);
    var cap1 = this.destinationY() - this.contents.height / 2;
    var cap2 = this.destinationY() + this.contents.height / 2;
    var moveAmount = Math.max(1, Math.abs(cap2 - this.y) / 4);
    if (this.x > desX) this.y = Math.max(this.y - moveAmount, cap1);
    if (this.x < desX) this.y = Math.min(this.y + moveAmount, cap2);
  } else if (this.destinationY() !== this.y) {
    var desY = this.destinationY();
    var moveAmount = Math.max(1, Math.abs(desY - this.y) / 4);
    if (this.y > desY) this.y = Math.max(this.y - moveAmount, desY);
    if (this.y < desY) this.y = Math.min(this.y + moveAmount, desY);
  }
};

Window_TurnOrderIcon.prototype.opacityFadeRate = function() {
  return 8;
};

Window_TurnOrderIcon.prototype.updateOpacity = function() {
  if (BattleManager._victoryPhase) this._targetOpacity = 0;
  var rate = this.opacityFadeRate();
  if (this.contentsOpacity > this._targetOpacity) {
    this.contentsOpacity = Math.max(this.contentsOpacity - rate,
      this._targetOpacity);
  } else if (this.contentsOpacity < this._targetOpacity) {
    this.contentsOpacity = Math.min(this.contentsOpacity + rate,
      this._targetOpacity);
  }
};

Window_TurnOrderIcon.prototype.updateTargetOpacity = function() {
  if (!this.isBattlerVisible() || this.isReduceOpacity()) {
    this._targetOpacity = 0;
  } else {
    this._targetOpacity = 255;
  }
};

Window_TurnOrderIcon.prototype.isReduceOpacity = function() {
  if (!$gameSystem.isShowTurnOrderDisplaySettings()) return true;
  var scene = SceneManager._scene;
  if (BattleManager._victoryPhase) return true;
  if (!this._lowerWindows) {
    if (this.isLargeWindowShowing()) return true;
  }
  if (Imported.YEP_X_InBattleStatus && scene._inBattleStatusWindow.visible) {
    return true;
  }
  if (BattleManager._surprise && this.battler().isActor()) return true;
  if (BattleManager._preemptive && this.battler().isEnemy()) return true;
  return this._windowLayer && this._windowLayer.x !== 0;
};

Window_TurnOrderIcon.prototype.isLargeWindowShowing = function() {
  var scene = SceneManager._scene;
  if (scene._itemWindow.visible) return true;
  if (scene._skillWindow.visible) return true;
  return false;
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getUnique = function(array) {
  var result = [];
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var element = array[i];
    if (result.contains(element)) continue;
    result.push(element);
  }
  return result;
};

//=============================================================================
// Compatibility Check
//=============================================================================
} else { // Yanfly.BEC.version

var text = '================================================================\n';
text += 'YEP_X_TurnOrderDisplay requires YEP_BattleEngineCore to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.yanfly.moe and ';
text += 'update to the latest version for the YEP_BattleEngineCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // Yanfly.BEC.version
}; // YEP_BattleEngineCore

//=============================================================================
// End of File
//=============================================================================
