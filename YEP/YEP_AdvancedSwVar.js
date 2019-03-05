//=============================================================================
// Yanfly Engine Plugins - Advanced Switches % Variables
// YEP_AdvSwVar.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_AdvSwVar = true;

var Yanfly = Yanfly || {};
Yanfly.AdvSwVar = Yanfly.AdvSwVar || {};
Yanfly.AdvSwVar.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Make advanced switches and variables that are
 * able to utilize JavaScript for enhanced usage.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For the advanced users out there with JavaScript experience, you can set
 * certain switches and variables to return data about the game through pieces
 * of code on the get go. This can be used for event page conditions, enemy AI
 * conditions, troop page conditions, and more!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * To use this plugin, name the switches or variables that you want to utilize
 * code effects with the following format:
 *
 *   Eval: code
 *
 * This will make the switch or variable run the piece of code after the
 * 'Eval:' marker. The code is used for a switch, it ought to return a 'true' or
 * 'false' boolean. If the code is used for a variable, it ought to return a
 * numeric value for comparison.
 *
 * For example, a switch named 'Eval: $gameActors.actor(1).isLearnedSkill(5)',
 * then it will return true if Actor 1 has skill 5 learned or not. This can be
 * used for things like making a skill with 'True Sight' and making certain
 * things appear visible on the map if the actor has that skill.
 *
 * While variables can insert their own JavaScript code easily thanks to the
 * help of the 'Script' option in the Control Variables event, you can save
 * yourself the extra step by just naming a variable 'Eval: $gameParty.gold()'.
 * This will automatically make it calculate the amount of gold the party has
 * and reference it with the variable.
 *
 * !! WARNING !!
 *
 * If you are using this as an event's page condition, keep in mind that any
 * changes made from events on the map will not reflect the changes made to
 * reference those switches immediately. For that, you will have to refresh the
 * map, which can be done using the plugin command below:
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * These plugin commands can be used to immediately refresh a map or troop
 * troop event to ensure that switch/variable data gets noticed and triggered
 * or updated upon your call.
 *
 * Plugin Command:
 *
 *   RefreshMap
 *   - This will refresh all of the map's events. This will update any page
 *   conditions with Advanced Switches or Variables that may have changed
 *   values prior to using this plugin command. This can only be used outside
 *   of battle!
 *
 *   RefreshTroop
 *   - This will refresh the current event interpreter in battle. This will
 *   update any page condition within the current troop that utilizes Advanced
 *   Switches or Variables that may have changed values prior to using this
 *   plugin command.
 *   * NOTE: If you are using the Battle Engine Core, using this won't be
 *   necessary for the majority of the time.
 *
 * ============================================================================
 * Examples
 * ============================================================================
 *
 * Here are some examples that you can use Advanced Switches and Variables for!
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Switches
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Eval: $gameActors.actor(1).isLearnedSkill(5)
 * - This will make a check if Actor 1 (in the database) has learned skill 5
 * (in the database). This can be used for some skills like 'True Sight' to
 * certain events appear differently on the map or certain events happen in
 * battle (like seeing through an enemy's disguise).
 *
 * Eval: $gameActors.actor(2).isStateAffected(10)
 * - This will make a check to see if Actor 2 is affected by state 10 (in the
 * database). If the actor is affected by it, then the switch will return true.
 * Otherwise, it will return false.
 *
 * Eval: $gameActors.actor(3).isEquipped($dataWeapons[100])
 * - This will make a check to see if Actor 3 (in the database) has Weapon 100
 * (in the database) equipped. If it does, then the switch will return true.
 * Otherwise, it will return false.
 *
 * Eval: $gameActors.actor(4).isEquipped($dataArmors[200])
 * - This will make a check to see if Actor 4 (in the database) has Armor 200
 * (in the database) equipped. If it does, then the switch will return true.
 * Otherwise, it will return false.
 *
 * Eval: $gameActors.actor(5).isDead()
 * - This will make a check to see if Actor 5 is currently dead. Being dead
 * will require that the actor is afflicted with the death state. If the actor
 * is dead, the switch will return true. Otherwise, it will return false.
 *
 * Eval: $gameActors.actor(6).isAlive()
 * - This will make a check to see if Actor 6 is currently alive. Being alive
 * will require that the actor is not afflicted with the death state. If the
 * actor is alive, the switch will return true. Otherwise, it will return false.
 *
 * Eval: $gameVariables.value(2) < 3
 * - You know how map event page conditions can only make checks if a variable
 * is only greater than or equal to a value? Well, now you can do the opposite
 * and check if a variable is less than a certain value. The example used above
 * will check if Variable 2 has a value less than 3 (but not equal to).
 *
 * Eval: $gameSelfSwitches.value([10,20,'A'])
 * - This will allow an event to use another event's self switch case to
 * determine its condition. The example above checks if Map 10, Event 20's 'A'
 * self switch is turned on.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Variables
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Eval: $gameParty.leader().actorId()
 * - This will return the party leader's actor ID. This can be useful for
 * certain events that may have different reactions depending on who your party
 * leader is at the time.
 *
 * Eval: $gameParty.gold()
 * - This will return the party's exact amount of gold. This can also be used
 * in some event's pages to make bags of gold appear in the player's HQ to show
 * just how rich the player is.
 *
 * Eval: $gameParty.steps()
 * - This will return the amount of steps the player has walked. This can be
 * used in ways where a trophy may appear in the player's HQ depending on how
 * many steps the player has walked.
 *
 * Eval: $gameParty.aliveMembers().length
 * - This will return the number of alive members in the current party. Best if
 * used in battle when trying to make different things happen depending on the
 * number of allies currently alive in battle.
 *
 * Eval: $gameParty.deadMembers().length
 * - This will return the opposite: the number of dead members in the current
 * party. Also best used in battle when trying to make different things happen
 * depending on the number of allies that are dead in battle.
 *
 * Eval: $gameParty.highestLevel()
 * - This will return the party's current highest level member. In battle, this
 * will refer to the active party in action. Outside of battle, it pertains to
 * any of the members in the active party or reserve party.
 *
 * Eval: $gameParty.numItems($dataItems[1])
 * Eval: $gameParty.numItems($dataWeapons[2])
 * Eval: $gameParty.numItems($dataArmors[3])
 * - This will return the actual number of items as the condition instead of
 * whether or not the party has that item. For weapons and armors, this will
 * not include those that are equipped.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.01:
 * - Bug fixed to prevent compatibility problems with the Debugger.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 */
//=============================================================================

//=============================================================================
// Game_Switches
//=============================================================================

Yanfly.AdvSwVar.Game_Switches_value = Game_Switches.prototype.value;
Game_Switches.prototype.value = function(switchId) {
  if (this.isAdvancedSwitch(switchId)) {
    return this.runAdvancedSwitchCode(switchId);
  } else {
    return Yanfly.AdvSwVar.Game_Switches_value.call(this, switchId);
  }
};

Game_Switches.prototype.isAdvancedSwitch = function(switchId) {
  if (SceneManager._scene._debugActive) return false;
  if (SceneManager._scene instanceof Scene_Debug) return;
  var name = $dataSystem.switches[switchId];
  if (name.match(/EVAL:[ ](.*)/i)) return true;
  return false;
};

Game_Switches.prototype.runAdvancedSwitchCode = function(switchId) {
  var value = false;
  var name = $dataSystem.switches[switchId];
  if (name.match(/EVAL:[ ](.*)/i)) {
    var code = 'value = ' + String(RegExp.$1);
  } else {
    return this.defaultAdvancedSwitchResult(switchId);
  }
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'ADVANCED SWITCH ' + switchId + 
    ' EVAL ERROR');
  }
  return value;
};

Game_Switches.prototype.defaultAdvancedSwitchResult = function(switchId) {
  return false;
};

//=============================================================================
// Game_Variables
//=============================================================================

Yanfly.AdvSwVar.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function(variableId) {
  if (this.isAdvancedVariable(variableId)) {
    return this.runAdvancedVariableCode(variableId);
  } else {
    return Yanfly.AdvSwVar.Game_Variables_value.call(this, variableId);
  }
};

Game_Variables.prototype.isAdvancedVariable = function(variableId) {
  if (SceneManager._scene._debugActive) return false;
  if (SceneManager._scene instanceof Scene_Debug) return;
  var name = $dataSystem.variables[variableId];
  if (name.match(/EVAL:[ ](.*)/i)) return true;
  return false;
};

Game_Variables.prototype.runAdvancedVariableCode = function(variableId) {
  var value = 0;
  var name = $dataSystem.variables[variableId];
  if (name.match(/EVAL:[ ](.*)/i)) {
    var code = 'value = ' + String(RegExp.$1);
  } else {
    return this.defaultAdvancedVariableResult(variableId);
  }
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'ADVANCED VARIABLE' + variableId +
    ' EVAL ERROR');
  }
  return value;
};

Game_Switches.prototype.defaultAdvancedVariableResult = function(variableId) {
  return 0;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.AdvSwVar.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.AdvSwVar.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'RefreshMap') {
    if (!$gameParty.inBattle()) {
      $gameMap.requestRefresh($gameMap.mapId());
    }
  }
  if (command === 'RefreshTroop') {
    if ($gameParty.inBattle()) {
      $gameTroop.setupBattleEvent();
    }
  }
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================