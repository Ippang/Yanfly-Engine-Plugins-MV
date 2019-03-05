//=============================================================================
// Yanfly Engine Plugins - Lunatic Pack - Action Beginning and End Effects
// YEP_Z_ActionBeginEnd.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_Z_ActionBeginEnd = true;

var Yanfly = Yanfly || {};
Yanfly.LunActBegEnd = Yanfly.LunActBegEnd || {};
Yanfly.LunActBegEnd.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 (Lunatic Pack) Add additional effects that occur at the
 * beginning or end of an action.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires the following plugins:
 * - Battle Engine Core
 *
 * Place this plugin beneath the above listed plugin(s) in the plugin manager.
 *
 * Sometimes, we'd like to add additional effects to our actions in battle.
 * These effects can range from adding more HP, applying a new state to the
 * user after everything else has happened, removing debuffs, playing an
 * animation, or even absorbing a fraction of all the total damage directly
 * dealt by the action this turn. This Lunatic Pack provides a new batch of
 * effects that you can use to empower your items and skills, or to even 
 * globalize them as a result of states.
 *
 * *NOTE*: This plugin is best used with RPG Maker MV version 1.5.0+. You can
 * still use this plugin with a lower version number, but you will have a much
 * harder time altering the plugin parameters without it.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into a skill, item, or state's notebox to give
 * it one of these effects:
 *
 * ---
 *
 * Skill, Item, and State Notetags:
 *
 *   <timing Action: effect>
 *   - Most of this plugin's notetags will follow the above format. 'timing' is
 *   to be replaced with either 'Begin' or 'End' while 'effect' is to be
 *   replaced by the entries in the following EFFECT section below. 
 * 
 *   Insert multiple notetag entries to give your skills/items more effects. If
 *   a multitude of effects are present, then the order they'll occur will be:
 *   skill/item first, state effects based off of their state priority order
 *   from highest priority to lowest priority.
 *
 * =-=-=-= Action TIMING =-=-=-=
 *
 *   <Begin Action: effect>
 *   - If the timing is 'begin', then this effect will occur after the action's
 *   cost is used. 
 *
 *   <End Action: effect>
 *   - If the timing is 'end', it will occur after all action sequences are
 *   completed at the end of the current action.
 *
 * =-=-=-= Action EFFECTS =-=-=-=
 *
 *   --- Animation Effects ---
 *
 *   <timing Action: Animation x>
 *   <timing Action: Animation x, Mirror>
 *   <timing Action: Animation x, Delay y>
 *   <timing Action: Animation x, Mirror, Delay y>
 *   - This will make the animation x play on the user performing the action.
 *   If you insert 'Mirror' into the effect line, then the animation will be
 *   mirrored. If you insert 'Delay y' and replace 'y' with a number value,
 *   the animation will be delayed y frames before playing the animation.
 *   SUGGESTED BY: Yanfly
 *
 *   --- HP Effects ---
 *
 *   <timing Action: +x HP>
 *   <timing Action: -x HP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of HP you wish to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <timing Action: +x HP%>
 *   <timing Action: -x HP%>
 *   - Replace 'effect' with the above format. Replace 'x' with a HP equal to
 *   x% of the user's MaxHP to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <End Action: Drain x% Total HP Damage>
 *   - Can only work with end actions. Use the above format. Replace 'x' with
 *   the percentage of all total HP damage dealt directly by the user this
 *   action to recover as HP.
 *   SUGGESTED BY: Yanfly
 *
 *   <End Action: Recoil x% Total HP Damage>
 *   - Can only work with end actions. Use the above format. Replace 'x' with
 *   the percentage of all total HP damage dealt directly by the user this
 *   action to self-damage as HP.
 *   SUGGESTED BY: Yanfly
 *
 *   --- MP Effects ---
 *
 *   <timing Action: +x MP>
 *   <timing Action: -x MP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of MP you wish to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <timing Action: +x MP%>
 *   <timing Action: -x MP%>
 *   - Replace 'effect' with the above format. Replace 'x' with a MP equal to
 *   x% of the user's MaxMP to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <End Action: Drain x% Total MP Damage>
 *   - Can only work with end actions. Use the above format. Replace 'x' with
 *   the percentage of all total MP damage dealt directly by the user this
 *   action to recover as MP.
 *   SUGGESTED BY: Yanfly
 *
 *   <End Action: Recoil x% Total MP Damage>
 *   - Can only work with end actions. Use the above format. Replace 'x' with
 *   the percentage of all total MP damage dealt directly by the user this 
 *   action to self-damage as MP.
 *   SUGGESTED BY: Yanfly
 *
 *   --- TP Effects ---
 *
 *   <timing Action: +x TP>
 *   <timing Action: -x TP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of HP you wish to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <timing Action: +x TP%>
 *   <timing Action: -x TP%>
 *   - Replace 'effect' with the above format. Replace 'x' with a TP equal to
 *   x% of the user's MaxTP to apply to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   --- Buff/Debuff Effects ---
 *
 *   <timing Action: Add x Buff>
 *   <timing Action: Add x Buff, y Turns>
 *   <timing Action: Add x Debuff>
 *   <timing Action: Add x Debuff, y Turns>
 *   - Replace 'effect' with the above format(s). Replace 'x' with any of the
 *   following parameters: 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to have the effect alter the respective stat. If using the format
 *   with 'y' turns, replace 'y' with the number of turns you wish for the buff
 *   or debuff to last. If 'y' is not used, it will last for 5 turns instead.
 *   SUGGESTED BY: Yanfly
 *
 *   <timing Action: Remove x Buff>
 *   <timing Action: Remove x Debuff>
 *   - Replace 'effect' with the above format(s). Replace 'x' with any of the
 *   following parameters: 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to have the effect remove the respective buff/debuff from the
 *   user if the conditions are met.  If 'y' is not used, it will last for 5
 *   turns instead.
 *   SUGGESTED BY: Yanfly
 *
 *   --- State Effects ---
 *
 *   <timing Action: Add State x>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the state ID
 *   you wish to add to the user.
 *   SUGGESTED BY: Yanfly
 *
 *   <timing Action: Remove State x>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the state ID
 *   you wish to remove from the user.
 *   SUGGESTED BY: Yanfly
 *
 * ============================================================================
 * Lunatic Mode - Effect Code
 * ============================================================================
 *
 * For experienced users that know JavaScript and have RPG Maker MV 1.5.0+, you
 * can add new notetag effects that can be used by the plugin or alter the
 * effects of currently existing notetag effects from the plugin parameters
 * entry: Effect Code. It should look something like this:
 *
 * ---
 *
 * // ---------
 * // Animation
 * // ---------
 * if (data.match(/ANIMATION[ ](\d+)/i)) {
 *   var animationId = parseInt(RegExp.$1);
 *   var mirror = data.match(/MIRROR/i);
 *   if (data.match(/DELAY[ ](\d+)/i)) {
 *     var delay = parseInt(RegExp.$1);
 *   } else {
 *     var delay = 0;
 *   }
 *   user.startAnimation(animationId, mirror, delay);
 *
 * ...
 *
 * // -------------------------------
 * // Add new effects above this line
 * // -------------------------------
 * } else {
 *   skip = true;
 * }
 *
 * ---
 *
 * Here's what each of the variables used in this code bit refer to:
 *
 *   --------------------   ---------------------------------------------------
 *   Variable:              Refers to:
 *   --------------------   ---------------------------------------------------
 *   item                   The item being used by this action
 *   skill                  The skill being used by this action
 *
 *   isItem                 Returns true if action is an item
 *   isSkill                Returns true if action is a skill
 *
 *   a                      Returns the action user
 *   user                   Returns the action user
 *   subject                Returns the action user
 *
 *   b                      Returns the action's current target
 *   target                 Returns the action's current target
 *
 *   s[x]                   Return switch x (true/false)
 *   v[x]                   Return variable x's current value
 *
 *   user._result           The current results for the user
 *   target._result         The current results for the target
 *   userPreviousResult     The results for the user before any changes
 *   targetPreviousResult   The results for the target before any changes
 *
 *   totalHpDamage          The total amount of HP damage dealt this action
 *   totalMpDamage          The total amount of MP damage dealt this action
 *
 *   skip                   Default: false. If true, popups
 *
 * ---
 *
 * If you need to revert the Effect Code back to its original state, delete the
 * plugin from your plugin manager list and then add it again. The code will be
 * back to default.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param Effect Code
 * @type note
 * @desc LUNATIC MODE: This is the code used for each of the notetag
 * effects. Refer to the help file for variables used here.
 * @default "// ---------\n// Animation\n// ---------\nif (data.match(/ANIMATION[ ](\\d+)/i)) {\n  var animationId = parseInt(RegExp.$1);\n  var mirror = data.match(/MIRROR/i);\n  if (data.match(/DELAY[ ](\\d+)/i)) {\n    var delay = parseInt(RegExp.$1);\n  } else {\n    var delay = 0;\n  }\n  user.startAnimation(animationId, mirror, delay);\n\n// --------------\n// Flat Gain/Loss\n// --------------\n} else if (data.match(/([\\+\\-]\\d+)[ ]HP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainHp(value);\n\n} else if (data.match(/([\\+\\-]\\d+)[ ]MP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainMp(value);\n\n} else if (data.match(/([\\+\\-]\\d+)[ ]TP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainTp(value);\n\n// --------------------\n// Percentile Gain/Loss\n// --------------------\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]HP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.mhp * rate);\n  user.gainHp(value);\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]MP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.mmp * rate);\n  user.gainMp(value);\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]TP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.maxTp() * rate);\n  user.gainTp(value);\n\n// ------------------------\n// Add/Remove Buffs/Debuffs\n// ------------------------\n} else if (data.match(/ADD[ ](.*)[ ]BUFF/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var paramId = DataManager.getParamId(str);\n  if (data.match(/(\\d+)[ ]TURN/i)) {\n    var turns = parseInt(RegExp.$1);\n  } else {\n    var turns = 5;\n  }\n  if (paramId >= 0) {\n    user.addBuff(paramId, turns);\n  } else {\n    skip = true;\n  }\n\n} else if (data.match(/REMOVE[ ](.*)[ ](?:BUFF|DEBUFF)/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.removeBuff(paramId);\n  } else {\n    skip = true;\n  }\n\n// -----------------\n// Add/Remove States\n// -----------------\n} else if (data.match(/ADD STATE[ ](\\d+)/i)) {\n  var stateId = parseInt(RegExp.$1);\n  user.addState(stateId);\n\n} else if (data.match(/REMOVE STATE[ ](\\d+)/i)) {\n  var stateId = parseInt(RegExp.$1);\n  if (user.isStateAffected(stateId)) {\n    user.removeState(stateId);\n  } else {\n    skip = true;\n  }\n\n// ------------\n// Drain/Recoil\n// ------------\n} else if (data.match(/(\\d+)([%％])[ ]TOTAL HP[ ](?:DMG|DAMAGE)/i)) {\n  if (totalHpDamage !== 0) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    value = Math.round(totalHpDamage * rate);\n    if (data.match(/DRAIN/i)) {\n      user.gainHp(value);\n    } else if (data.match(/RECOIL/i)) {\n      user.gainHp(-value);\n    } else {\n      skip = true;\n    }\n  }\n\n} else if (data.match(/(\\d+)([%％])[ ]TOTAL MP[ ](?:DMG|DAMAGE)/i)) {\n  if (totalMpDamage !== 0) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    value = Math.round(totalMpDamage * rate);\n    if (data.match(/DRAIN/i)) {\n      user.gainMp(value);\n    } else if (data.match(/RECOIL/i)) {\n      user.gainMp(-value);\n    } else {\n      skip = true;\n    }\n  }\n\n// -------------------------------\n// Add new effects above this line\n// -------------------------------\n} else {\n  skip = true;\n}"
 *
 */
//=============================================================================

Yanfly.PluginRequirements = function() {
  return Imported.YEP_BattleEngineCore;
};

if (Yanfly.PluginRequirements()) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_Z_ActionBeginEnd');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.LunActBegEndEffect = JSON.parse(Yanfly.Parameters['Effect Code']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.LunActBegEnd.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.LunActBegEnd.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_Z_ActionBeginEnd) {
    this.processLunActBegEndNotetags1($dataSkills);
    this.processLunActBegEndNotetags1($dataItems);
    this.processLunActBegEndNotetags1($dataStates);
    Yanfly._loaded_YEP_Z_ActionBeginEnd = true;
  }
  
  return true;
};

DataManager.processLunActBegEndNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.lunaticActionBegin = [];
    obj.lunaticActionEnd = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(.*)[ ](?:ACTION|ACTIONS):[ ](.*)>/i)) {
        var data1 = String(RegExp.$1);
        var data2 = String(RegExp.$2);
        if (data1.match(/BEGIN/i)) {
          obj.lunaticActionBegin.push(data2);
        } else if (data1.match(/END/i)) {
          obj.lunaticActionEnd.push(data2);
        }
      }
    }
  }
};

DataManager.getParamId = function(str) {
  switch (str.toUpperCase()) {
  case 'HP':
  case 'MAXHP':
  case 'MAX HP':
    return 0;
    break;
  case 'MP':
  case 'MAXMP':
  case 'MAX MP':
  case 'SP':
  case 'MAXSP':
  case 'MAX SP':
    return 1;
    break;
  case 'ATK':
  case 'STR':
    return 2;
    break;
  case 'DEF':
    return 3;
    break;
  case 'MAT':
  case 'INT':
  case 'SPI':
    return 4;
    break;
  case 'MDF':
  case 'RES':
    return 5;
    break;
  case 'AGI':
  case 'SPD':
    return 6;
    break;
  case 'LUK':
    return 7;
    break;
  default:
    return -1;
    break;
  }
};

//=============================================================================
// Game_Temp
//=============================================================================

Game_Temp.prototype.clearLunaticActionValues = function() {
  this._totalHpDamage = 0;
  this._totalMpDamage = 0;
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.LunActBegEnd.Game_Battler_useItem = Game_Battler.prototype.useItem;
Game_Battler.prototype.useItem = function(item) {
  Yanfly.LunActBegEnd.Game_Battler_useItem.call(this, item);
  $gameTemp.clearLunaticActionValues();
  this.processLunaticBeginEndAction('begin');
};

Yanfly.LunActBegEnd.Game_Battler_performActionEnd =
  Game_Battler.prototype.performActionEnd;
Game_Battler.prototype.performActionEnd = function() {
  this.processLunaticBeginEndAction('end');
  $gameTemp.clearLunaticActionValues();
  Yanfly.LunActBegEnd.Game_Battler_performActionEnd.call(this);
};

Game_Battler.prototype.processLunaticBeginEndAction = function(type) {
  if (!$gameParty.inBattle()) return;
  var action = BattleManager._action;
  if (!action) return;
  var item = action.item();
  if (!item) return;
  var effects = this.getLunaticBeginEndActionEffects(type, item);
  action.processLunaticBeginEndActions(effects);
};

Game_Battler.prototype.getLunaticBeginEndActionEffects = function(type, item) {
  var effects = [];
  var states = this.states();
  var length = states.length;
  if (type === 'begin') {
    effects = effects.concat(item.lunaticActionBegin);
    for (var i = 0; i < length; ++i) {
      var state = states[i];
      if (state && state.lunaticActionBegin) {
        effects = effects.concat(state.lunaticActionBegin);
      }
    }
  } else if (type === 'end') {
    effects = effects.concat(item.lunaticActionEnd);
    for (var i = 0; i < length; ++i) {
      var state = states[i];
      if (state && state.lunaticActionEnd) {
        effects = effects.concat(state.lunaticActionEnd);
      }
    }
  }
  return effects;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.LunActBegEnd.Game_Action_executeHpDamage =
  Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
  $gameTemp._totalHpDamage += value;
  Yanfly.LunActBegEnd.Game_Action_executeHpDamage.call(this, target, value);
};

Yanfly.LunActBegEnd.Game_Action_executeMpDamage =
  Game_Action.prototype.executeMpDamage;
Game_Action.prototype.executeMpDamage = function(target, value) {
  $gameTemp._totalMpDamage += value;
  Yanfly.LunActBegEnd.Game_Action_executeMpDamage.call(this, target, value);
};

Yanfly.LunActBegEnd.apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
  Yanfly.LunActBegEnd.apply.call(this, target);
  if (target) $gameTemp._lastActionTarget = target;
};

Game_Action.prototype.processLunaticBeginEndActions = function(effects) {
  var length = effects.length;
  for (var i = 0; i < length; ++i) {
    var data = effects[i];
    this.processLunaticBeginEndActionEval(data);
  }
  $gameTemp._lastActionTarget = undefined;
};

Game_Action.prototype.processLunaticBeginEndActionEval = function(data) {
  var item = this.item();
  var skill = this.item();
  var isSkill = DataManager.isSkill(skill);
  var isItem = DataManager.isSkill(item);
  var user = this.subject();
  var a = user;
  var subject = user;
  var target = $gameTemp._lastActionTarget || user;
  var b = target;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;

  var totalHpDamage = $gameTemp._totalHpDamage;
  var totalMpDamage = $gameTemp._totalMpDamage;

  var userPreviousResult = JsonEx.makeDeepCopy(user._result);
  var targetPreviousResult = JsonEx.makeDeepCopy(target._result);
  var skip = false;
  var value = 0;
  var rate = 1;

  a.clearResult();
  b.clearResult();

  var code = Yanfly.Param.LunActBegEndEffect;
  try {
    eval(code)
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'LUNATIC ACTION BEGIN END ERROR');
  }

  if (skip) {
    if (user.isDead()) user.performCollapse();
    if (target.isDead()) target.performCollapse();
    user._result = userPreviousResult;
    target._result = targetPreviousResult;
    return;
  } else {
    if (user.result() && user.result().hpDamage !== 0) {
      user.startDamagePopup();
    } else if (user.result() && user.result().mpDamage !== 0) {
      user.startDamagePopup();
    }
  }

  if (user.isDead()) user.performCollapse();
  if (target.isDead()) target.performCollapse();
  user._result = userPreviousResult;
  target._result = targetPreviousResult;
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// Default Effect Code
//=============================================================================

if (false) {

// ---------
// Animation
// ---------
if (data.match(/ANIMATION[ ](\d+)/i)) {
  var animationId = parseInt(RegExp.$1);
  var mirror = data.match(/MIRROR/i);
  if (data.match(/DELAY[ ](\d+)/i)) {
    var delay = parseInt(RegExp.$1);
  } else {
    var delay = 0;
  }
  user.startAnimation(animationId, mirror, delay);

// --------------
// Flat Gain/Loss
// --------------
} else if (data.match(/([\+\-]\d+)[ ]HP/i)) {
  value = parseInt(RegExp.$1);
  user.gainHp(value);

} else if (data.match(/([\+\-]\d+)[ ]MP/i)) {
  value = parseInt(RegExp.$1);
  user.gainMp(value);

} else if (data.match(/([\+\-]\d+)[ ]TP/i)) {
  value = parseInt(RegExp.$1);
  user.gainTp(value);

// --------------------
// Percentile Gain/Loss
// --------------------
} else if (data.match(/([\+\-]\d+)([%％])[ ]HP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.mhp * rate);
  user.gainHp(value);

} else if (data.match(/([\+\-]\d+)([%％])[ ]MP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.mmp * rate);
  user.gainMp(value);

} else if (data.match(/([\+\-]\d+)([%％])[ ]TP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.maxTp() * rate);
  user.gainTp(value);

// ------------------------
// Add/Remove Buffs/Debuffs
// ------------------------
} else if (data.match(/ADD[ ](.*)[ ]BUFF/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var paramId = DataManager.getParamId(str);
  if (data.match(/(\d+)[ ]TURN/i)) {
    var turns = parseInt(RegExp.$1);
  } else {
    var turns = 5;
  }
  if (paramId >= 0) {
    user.addBuff(paramId, turns);
  } else {
    skip = true;
  }

} else if (data.match(/REMOVE[ ](.*)[ ](?:BUFF|DEBUFF)/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.removeBuff(paramId);
  } else {
    skip = true;
  }

// -----------------
// Add/Remove States
// -----------------
} else if (data.match(/ADD STATE[ ](\d+)/i)) {
  var stateId = parseInt(RegExp.$1);
  user.addState(stateId);

} else if (data.match(/REMOVE STATE[ ](\d+)/i)) {
  var stateId = parseInt(RegExp.$1);
  if (user.isStateAffected(stateId)) {
    user.removeState(stateId);
  } else {
    skip = true;
  }

// ------------
// Drain/Recoil
// ------------
} else if (data.match(/(\d+)([%％])[ ]TOTAL HP[ ](?:DMG|DAMAGE)/i)) {
  if (totalHpDamage !== 0) {
    rate = parseFloat(RegExp.$1) * 0.01;
    value = Math.round(totalHpDamage * rate);
    if (data.match(/DRAIN/i)) {
      user.gainHp(value);
    } else if (data.match(/RECOIL/i)) {
      user.gainHp(-value);
    } else {
      skip = true;
    }
  }

} else if (data.match(/(\d+)([%％])[ ]TOTAL MP[ ](?:DMG|DAMAGE)/i)) {
  if (totalMpDamage !== 0) {
    rate = parseFloat(RegExp.$1) * 0.01;
    value = Math.round(totalMpDamage * rate);
    if (data.match(/DRAIN/i)) {
      user.gainMp(value);
    } else if (data.match(/RECOIL/i)) {
      user.gainMp(-value);
    } else {
      skip = true;
    }
  }

// -------------------------------
// Add new effects above this line
// -------------------------------
} else {
  skip = true;
}

}; // Default Effect Code

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_Z_ActionBeginEnd without the required plugins. Please visit ';
text += 'Yanfly.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Yanfly.PluginRequirements