//=============================================================================
// Yanfly Engine Plugins - Item Core Extension - Item Requirements
// YEP_X_ItemRequirements.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_ItemRequirements = true;

var Yanfly = Yanfly || {};
Yanfly.ItemReq = Yanfly.ItemReq || {};
Yanfly.ItemReq.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 (Requires YEP_ItemCore.js) Place requirements on
 * items before they can be used.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_ItemCore. Make sure this plugin is located under
 * YEP_ItemCore in the plugin list.
 *
 * In RPG Maker MV, items only have a few restrictions on them by default,
 * whether or not they can be used in or out of battle or never. There aren't
 * any other conditions that you can set that would otherwise determine if an
 * item can or cannot be used. This plugin gives more ways to restrict item
 * usage based on switches, variables, the actors using them, classes, state
 * requirements, and more.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Use the following notetags to enforce requirements for items before they can
 * be used.
 *
 * Item Notetags:
 *
 *   <Enable Requirements>
 *    condition
 *    condition
 *   </Enable Requirements>
 *   - Replace 'condition' with the desired condition setup. You can insert any
 *   number of conditions inside the notetags. All of the conditions must be
 *   met before the item can be used. Look below for a list of the possible
 *   conditions that can be used.
 *
 * ---
 *
 * Conditions:
 *
 * ---
 *
 * Eval: code
 * - Replace 'code' with JavaScript code that you'd like to run a check against
 * to enable the item. If the check returns false, the item will be disabled
 * regardless of other conditions.
 *
 * Examples:
 *   Eval: $gameActors.actor(1).name() === 'Harold'
 *   Eval: $gameActors.leader().name() !== 'Ralph'
 *
 * ---
 *
 * Actor: x
 * Actor: x, x, x
 * - Requires actor(s) ID 'x' to use the item. If the actor isn't the one using
 * the said item, then the item is disabled and cannot be used regardless of
 * other conditions.
 *
 * Not Actor: x
 * Not Actor: x, x, x
 * - Requires the actor using the item to NOT be actor ID 'x'. If the actor's
 * ID matches one of the listed 'x', then the item is disabled and cannot be
 * used regardless of other conditions.
 *
 * Examples:
 *   Actor: 1
 *   Actor: 2, 3, 4, 5, 6
 *   Not Actor: 7
 *   Not Actor: 8, 9, 10
 *
 * ---
 *
 * Armor: x
 * Armor: x, x, x
 * - Requires the actor to specifically have armor ID 'x' equipped to use the
 * item. If multiple 'x' are used, the actor can have any of them equipped. If
 * the actor does not have armor 'x' equipped, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Not Armor: x
 * Not Armor: x, x, x
 * - Requires the actor to not have armor ID 'x' equipped to use the item.
 * If multiple 'x' are used, the actor cannot have any of them equipped. If
 * the actor does have armor 'x' equipped, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Examples:
 *   Armor: 1
 *   Armor: 2, 3, 4, 5, 6
 *   Not Armor: 7
 *   Not Armor: 8, 9, 10
 *
 * ---
 *
 * Class: x
 * Class: x, x, x
 * - Requires class(es) ID 'x' to use the item. If the actor's class doesn't
 * match the item requirement, then the item is disabled and cannot be used
 * regardless of other conditions.
 *
 * Not Class: x
 * Not Class: x, x, x
 * - Requires the actor using the item to NOT be class ID 'x'. If the actor's
 * class ID matches one of the listed 'x', then the item is disabled and cannot
 * be used regardless of other conditions.
 *
 * Examples:
 *   Class: 1
 *   Class: 2, 3, 4, 5, 6
 *   Not Class: 7
 *   Not Class: 8, 9, 10
 *
 * ---
 *
 * Subclass: x
 * Subclass: x, x, x
 * - Requires YEP_X_Subclass.js
 * - Requires subclass(es) ID 'x' to use the item. If the actor's class doesn't
 * match the item requirement, then the item is disabled and cannot be used
 * regardless of other conditions.
 *
 * Not Subclass: x
 * Not Subclass: x, x, x
 * - Requires YEP_X_Subclass.js
 * - Requires the actor using the item to NOT be subclass ID 'x'. If the
 * actor's subclass ID matches one of the listed 'x', then the item is disabled
 * and cannot be used regardless of other conditions.
 *
 * Examples:
 *   Subclass: 1
 *   Subclass: 2, 3, 4, 5, 6
 *   Not Subclass: 7
 *   Not Subclass: 8, 9, 10
 *
 * ---
 *
 * Either Class: x
 * Either Class: x, x, x
 * - Requires YEP_X_Subclass.js
 * - The actor's primary class or subclass ID has to match 'x'. If at least one
 * of them match, then the condition passes. Otherwise, the condition fails and
 * the item is disabled and cannot be used regardless of other conditions.
 *
 * Neither Class: x
 * Neither Class: x, x, x
 * - Requires YEP_X_Subclass.js
 * - Requires YEP_X_Subclass.js
 * - The actor's primary class or subclass ID has to NOT match 'x'. If at least
 * one of them match, then the condition fails and the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Examples:
 *   Either Class: 1
 *   Either Class: 2, 3, 4, 5, 6
 *   Neither Class: 7
 *   Neither Class: 8, 9, 10
 *
 * ---
 *
 * State: x
 * State: x, x, x
 * - Requires the actor using the item to be affected by state 'x'. If multiple
 * 'x' are used, the actor can be affected by any of them. If the actor is not
 * affected by state 'x', then the condition fails and the item is disabled
 * and cannot be used regardless of other conditions.
 *
 * Not State: x
 * Not State: x, x, x
 * - Requires the actor using the item to be not affected by state 'x'. If
 * multiple 'x' are used, the actor cannot be affected by any of them. If the
 * actor is not affected by state 'x', then the condition fails and the item is
 * disabled and cannot be used regardless of other conditions.
 *
 * Examples:
 *   State: 10
 *   State: 11, 12, 13, 14, 15
 *   Not State: 16
 *   Not Stage: 17, 18, 19, 20
 *
 * ---
 *
 * Switch Off: x
 * Switch Off: x, x, x
 * - Requires switch(es) x to be OFF before the item can be used. If the switch
 * is ON, then the item is disabled and cannot be used regardless of other
 * conditions.
 *
 * Examples:
 *   Switch Off: 1
 *   Switch Off: 2, 3, 4, 5, 6
 *
 * ---
 *
 * Switch On: x
 * Switch On: x, x, x
 * - Requires switch(es) x to be ON before the item can be used. If the switch
 * is OFF, then the item is disabled and cannot be used regardless of other
 * conditions.
 *
 * Examples:
 *   Switch On: 1
 *   Switch On: 2, 3, 4, 5, 6
 *
 * ---
 *
 * Variable x eval
 * - Makes a check against variable x. Replace 'x' with an integer value and
 * 'eval' with the code check you wish to run it against.
 *
 * Examples:
 *   Variable 1 >= 5
 *   Variable 2 < 6
 *   Variable 3 === 7
 *   Variable 4 !== 8
 *
 * ---
 *
 * Weapon: x
 * Weapon: x, x, x
 * - Requires the actor to specifically have weapon ID 'x' equipped to use the
 * item. If multiple 'x' are used, the actor can have any of them equipped. If
 * the actor does not have weapon 'x' equipped, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Not Weapon: x
 * Not Weapon: x, x, x
 * - Requires the actor to not have weapon ID 'x' equipped to use the item.
 * If multiple 'x' are used, the actor cannot have any of them equipped. If
 * the actor does have weapon 'x' equipped, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Examples:
 *   Weapon: 1
 *   Weapon: 2, 3, 4, 5, 6
 *   Not Weapon: 7
 *   Not Weapon: 8, 9, 10
 *
 * ---
 *
 * Weapon Type: x
 * Weapon Type: x, x, x
 * - Requires the actor to have weapon type 'x' equipped. If multiple 'x' are
 * used, the actor can have any of the 'x' weapon types equipped. If the actor
 * does not have the matching weapon types, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Not Weapon Type: x
 * Not Weapon Type: x, x, x
 * - Requires the actor to not have weapon type 'x' equipped. If multiple 'x'
 * are used, the actor cannot have any of the 'x' weapon types equipped. If the
 * actor does have the matching weapon types, then the item is disabled and
 * cannot be used regardless of other conditions.
 *
 * Examples:
 *   Weapon Type: 1
 *   Weapon Type: 2, 3, 4, 5, 6
 *   Not Weapon Type: 7
 *   Not Weapon Type: 8, 9, 10
 *
 * ============================================================================
 * Lunatic Mode - Custom Enable Requirements
 * ============================================================================
 *
 * For those with JavaScript experience, you can create your own custom
 * requirements for whether or not items can be used using the following
 * notetag setup:
 *
 * Item Notetags:
 *
 *   <Custom Enable Requirement>
 *    condition = battler.level >= item.price;
 *   </Custom Enable Requirement>
 *   - The 'condition' variable will determine whether or not the item will be
 *   enabled/disabled. If the 'condition' variable returns true, then the item
 *   is enabled provided all other conditions (if any) are also met. Otherwise,
 *   the item is disabled and cannot be used. The 'battler' variable will refer
 *   to the battler using the item. The 'item' variable will refer to the item
 *   being checked.
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
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_ItemCore) {

//=============================================================================
// DataManager
//=============================================================================

Yanfly.ItemReq.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.ItemReq.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_ItemRequirements) {
    this.processItemRequirementsNotetags1($dataItems);
    Yanfly._loaded_YEP_X_ItemRequirements = true;
  }
  
  return true;
};

DataManager.processItemRequirementsNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.itemRequirements = [];
    var evalMode = 'none';
    obj.customItemRequirements = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<ENABLE (?:REQUIREMENT|REQUIREMENTS)>/i)) {
        evalMode = 'enable requirements';
      } else if (line.match(/<\/ENABLE (?:REQUIREMENT|REQUIREMENTS)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'enable requirements') {
        obj.itemRequirements.push(line);
      } else if (line.match(/<CUSTOM ENABLE (?:REQUIREMENT|REQUIREMENTS)>/i)) {
        evalMode = 'custom enable requirements';
      } else if (line.match(/<\/CUSTOM ENABLE (?:REQUIREMENT|REQUIREMENTS)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom enable requirements') {
        obj.customItemRequirements += line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.ItemReq.Game_BattlerBase_mIC =
  Game_BattlerBase.prototype.meetsItemConditions;
Game_BattlerBase.prototype.meetsItemConditions = function(item) {
  if (!Yanfly.ItemReq.Game_BattlerBase_mIC.call(this, item)) {
    return false;
  }
  return ItemManager.meetsUsableItemRequirements(item, this);
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.isAtypeEquipped = function(atypeId) {
  return this.armors().some(function(armor) {
    return armor.atypeId === atypeId;
  });
};

//=============================================================================
// ItemManager
//=============================================================================

ItemManager.meetsUsableItemRequirements = function(item, battler) {
  if (!item) return false;
  if (!item.itemRequirements) {
    var baseItem = DataManager.getBaseItem(item);
    item.itemRequirements = JsonEx.makeDeepCopy(baseItem.itemRequirements);
  }
  var length = item.itemRequirements.length;
  if ($gameParty.inBattle()) var battler = this.battleSubject() || battler;
  for (var i = 0; i < length; ++i) {
    var line = item.itemRequirements[i];
    if (!line) continue;
    if (!this.checkUsableItemRequirement(line, item, battler)) return false;
  }
  if (item.customItemRequirements && item.customItemRequirements.length >= 1) {
    if (!this.checkCustomUsableItemRequirement(item, battler)) return false;
  }
  return true;
};

ItemManager.battleSubject = function() {
  return BattleManager.actor() || BattleManager._subject;
};

ItemManager.checkUsableItemRequirement = function(line, item, battler) {
  // EVAL
  if (line.match(/EVAL:(.*)/i)) {
    var code = String(RegExp.$1);
    return this.usableItemRequirementEval(code);
  }
  // NOT ACTOR
  if (line.match(/NOT ACTOR:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementActor(data, battler, false);
  }
  // ACTOR
  if (line.match(/ACTOR:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementActor(data, battler, true);
  }
  // NOT ARMOR TYPE
  if (line.match(/NOT ARMOR TYPE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementAtype(data, battler, false);
  }
  // ARMOR TYPE
  if (line.match(/ARMOR TYPE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementAtype(data, battler, true);
  }
  // NOT ARMOR
  if (line.match(/NOT ARMOR:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementArmor(data, battler, false);
  }
  // ARMOR
  if (line.match(/ARMOR:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementArmor(data, battler, true);
  }
  if (Imported.YEP_X_Subclass) {
    // NOT SUBCLASS
    if (line.match(/NOT SUBCLASS:(.*)/i)) {
      var data = String(RegExp.$1);
      return this.usableItemRequirementSubclass(data, battler, false);
    }
    // SUBCLASS
    if (line.match(/SUBCLASS:(.*)/i)) {
      var data = String(RegExp.$1);
      return this.usableItemRequirementSubclass(data, battler, true);
    }
    // EITHER CLASS
    if (line.match(/EITHER CLASS:(.*)/i)) {
      var data = String(RegExp.$1);
      return this.usableItemRequirementDuoClass(data, battler, true);
    }
    // NEITHER CLASS
    if (line.match(/NEITHER CLASS:(.*)/i)) {
      var data = String(RegExp.$1);
      return this.usableItemRequirementDuoClass(data, battler, false);
    }
  }
  // NOT CLASS
  if (line.match(/NOT CLASS:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementClass(data, battler, false);
  }
  // CLASS
  if (line.match(/CLASS:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementClass(data, battler, true);
  }
  // NOT STATE
  if (line.match(/NOT STATE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementState(data, battler, false);
  }
  // STATE
  if (line.match(/STATE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementState(data, battler, true);
  }
  // NOT WEAPON TYPE
  if (line.match(/NOT WEAPON TYPE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementWtype(data, battler, false);
  }
  // WEAPON TYPE
  if (line.match(/WEAPON TYPE:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementWtype(data, battler, true);
  }
  // NOT WEAPON
  if (line.match(/NOT WEAPON:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementWeapon(data, battler, false);
  }
  // WEAPON
  if (line.match(/WEAPON:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementWeapon(data, battler, true);
  }
  // SWITCH OFF
  if (line.match(/SWITCH OFF:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementSwitch(data, false);
  }
  // SWITCH ON
  if (line.match(/SWITCH ON:(.*)/i)) {
    var data = String(RegExp.$1);
    return this.usableItemRequirementSwitch(data, true);
  }
  // VARIABLE
  if (line.match(/VARIABLE[ ](\d+)[ ](.*)/i)) {
    var variableId = parseInt(RegExp.$1);
    var code = String(RegExp.$2);
    return this.usableItemRequirementVariable(variableId, code);
  }
  return true;
};

ItemManager.usableItemRequirementEval = function(code) {
  var value = false;
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'CUSTOM ITEM USE EVAL CODE ERROR');
  }
  return value;
};

ItemManager.usableItemRequirementActor = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var actorId = parseInt(array[i].trim());
    if (battler.actorId() === actorId) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementClass = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var classId = parseInt(array[i].trim());
    if (battler._classId === classId) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementDuoClass = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var classId = parseInt(array[i].trim());
    var subclassId = parseInt(array[i].trim());
    if (battler._classId === classId || battler._subclassId === subclassId) {
      return condition;
    }
  }
  return !condition;
};

ItemManager.usableItemRequirementSubclass = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var subclassId = parseInt(array[i].trim());
    if (battler._subclassId === subclassId) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementState = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var stateId = parseInt(array[i].trim());
    var state = $dataStates[stateId];
    if (battler.states().contains(state)) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementWtype = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var id = parseInt(array[i].trim());
    if (battler.isWtypeEquipped(id)) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementWeapon = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var id = parseInt(array[i].trim());
    var equip = $dataWeapons[id];
    if (battler.hasWeapon(equip)) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementAtype = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var id = parseInt(array[i].trim());
    if (battler.isAtypeEquipped(id)) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementArmor = function(data, battler, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var id = parseInt(array[i].trim());
    var equip = $dataArmors[id];
    if (battler.hasArmor(equip)) return condition;
  }
  return !condition;
};

ItemManager.usableItemRequirementSwitch = function(data, condition) {
  var array = data.split(',');
  var length = array.length;
  for (var i = 0; i < length; ++i) {
    var switchId = parseInt(array[i].trim());
    if ($gameSwitches.value(switchId) !== condition) return false;
  }
  return true;
};

ItemManager.usableItemRequirementVariable = function(variableId, code) {
  return eval('$gameVariables.value(variableId) ' + code);
};

ItemManager.checkCustomUsableItemRequirement = function(item, battler) {
  var condition = false;
  var user = battler;
  var a = battler;
  var b = battler;
  var target = battler;
  var subject = battler;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = item.customItemRequirements;
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'CUSTOM ITEM USE REQUIREMENT CODE ERROR');
  }
  return condition;
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
} else {

var text = '================================================================\n';
text += 'YEP_X_ItemRequirements requires YEP_ItemCore to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.yanfly.moe and ';
text += 'update to the latest version for the YEP_ItemCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // // Imported.YEP_ItemCore