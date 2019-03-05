//=============================================================================
// Yanfly Engine Plugins - Buffs & States Extension - Extended Damage Over Time
// YEP_X_ExtDoT.js
//=============================================================================

if (Imported.YEP_BattleEngineCore && Imported.YEP_BuffsStatesCore) {

var Imported = Imported || {};
Imported.YEP_X_ExtDoT = true;

var Yanfly = Yanfly || {};
Yanfly.EDoT = Yanfly.EDoT || {};
Yanfly.EDoT.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc v1.04 (Req YEP_BattleEngineCore & YEP_BuffsStatesCore)
 * Create custom DoT formulas and effects with ease.
 * @author Yanfly Engine Plugins + Tigress Collaboration
 *
 * @param ---Defaults---
 * @default
 *
 * @param Regen Animation
 * @parent ---Defaults---
 * @type animation
 * @desc When creating a regen state, this will be the default animation.
 * Leave at 0 to play no animation.
 * @default 46
 *
 * @param DoT Animation
 * @type animation
 * @desc When creating a DoT state, this will be the default animation.
 * Leave at 0 to play no animation.
 * @default 59
 *
 * @param Default Variance
 * @type number
 * @desc This is the default variance value for Extended DoT formulas.
 * Leave at 0 for no variance.
 * @default 20
 *
 * @param Default Element
 * @type number
 * @desc This is the default element used for Extended DoT formulas.
 * Leave at 0 for no element.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires both YEP_BattleEngineCore && YEP_BuffsStatesCore. Make
 * sure this plugin is located under both YEP_BattleEngineCore and
 * YEP_BuffsStatesCore in the plugin list.
 *
 * RPG Maker MV does not provide the ability to utilize custom formulas for any
 * damage or healing over time state effects. This plugin, through aid of
 * Yanfly's Buffs & States Core, will allow usage for formulas to create custom
 * damage or healing over time values, animations to go with them, variance
 * control, and elemental rate aspects.
 *
 * This is a collaboration plugin by Tigress and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into your states to achieve their respective
 * damage over time effects.
 *
 * State Notetags:
 *
 *    ---
 *
 *   <Regen Animation: x>
 *   <DoT Animation: x>
 *   - This will make the state play animation x for regen/damage over time if
 *   there is any healing or damage dealt through the extended damage over time
 *   formulas used below.
 *
 *   Examples:
 *     <Regen Animation: 41>  // Play animation 41 when regen occurs
 *     <DoT Animation: 59>    // Play animation 59 when DoT occurs
 *
 *   * NOTE: Animations will only occur if it is used with one of the below
 *   formulas and the formula does not yield a 0 value.
 *
 *   ---
 *
 *   <Regen Formula: x>
 *   - This will make the affected battler regenerate x HP each turn. You can
 *   use either a formula or a numeric value in place of 'x'.
 *
 *   Examples:
 *     <Regen Formula: 100>        // Regen 100 HP exactly each turn
 *     <Regen Formula: a.mdf * 2>  // Regen HP equal to the origin's MDF
 *
 *   ---
 *
 *   <DoT Formula: x>
 *   - This will make the affected battler take x HP damage each turn. You can
 *   use either a formula or a numeric value in place of 'x'.
 *
 *   Examples:
 *     <DoT Formula: 100>        // Damage 100 HP exactly each turn
 *     <DoT Formula: a.mat * 2>  // Damage HP equal to the origin's MAT
 *
 *   ---
 *
 *   <Regen Element: x>
 *   <DoT Element: x>
 *   - This will make the healing/damage done by this state to be element 'x'.
 *   This will take into consideration the target's elemental rates towards
 *   that element. If this is left blank, there will be no element modifiers.
 *
 *   Examples:
 *     <Regen Element: 4>   // Healing done will be affected by element 4.
 *     <DoT Element: 5>     // Damage done will be affected by element 5.
 *
 *   ---
 *
 *   <Regen Variance: x%>
 *   <DoT Variance: x%>
 *   - The amount of variance you want the DoT effect to have. Replace x with
 *   a percentage value. If this is left blank, the settings in the plugin
 *   parameters will be used by default.
 *
 *   Examples:
 *     <Regen Variance: 10%>   // Regen will have 10% healing variance
 *     <DoT Variance: 20%>     // DoT will have 20% damage variance
 *
 * ============================================================================
 * Lunatic Mode - Custom DoT Formula
 * ============================================================================
 *
 * For those with JavaScript experience and would like to create more complex
 * formulas for custom damage/healing over time states, you can use these
 * following notetags below.
 *
 * State Notetags:
 *
 *   ---
 *
 *   <Custom DoT Formula>
 *    if (a.isActor()) {
 *      value = a.level * 100;
 *      variance = 20;
 *      element = 1;
 *    } else {
 *      value = a.hp / 50;
 *      variance = 10;
 *      element = 2;
 *    }
 *   </Custom DoT Formula>
 *   - The damage to be dealt will be equal to the 'value'. This is the base
 *   damage dealt primarily by the formula alone. The finalized damage to be
 *   dealt will be affected by the 'variance' and 'element' values, which can
 *   be changed within this formula, too. If 'variance' or 'element' are left
 *   out of the formula, they will take on their default values. If you are
 *   going to make a healing effect, use the notetag below this one.
 *
 *   ---
 *
 *   <Custom Regen Formula>
 *    if (a.isActor()) {
 *      value = a.level * 8;
 *      variance = 15;
 *      element = 3;
 *    } else {
 *      value = a.hp / 2;
 *      variance = 5;
 *      element = 4;
 *    }
 *   </Custom Regen Formula>
 *   - The healing to be dealt will be equal to the 'value'. This is the base
 *   heal dealt primarily by the formula alone. The finalized healing to be
 *   dealt will be affected by the 'variance' and 'element' values, which can
 *   be changed within this formula, too. If 'variance' or 'element' are left
 *   out of the formula, they will take on their default values. If you are
 *   going to make a damaging effect, use the notetag above this one.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.6.1.
 *
 * Version 1.02:
 * - Made DoT effects battle only to prevent errors and crashes.
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

Yanfly.Parameters = PluginManager.parameters('YEP_X_ExtDoT');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.EDoTRegenAni = Number(Yanfly.Parameters['Regen Animation']);
Yanfly.Param.EDoTDamageAni = Number(Yanfly.Parameters['DoT Animation']);
Yanfly.Param.EDoTDefVariance = Number(Yanfly.Parameters['Default Variance']);
Yanfly.Param.EDoTDefElement = Number(Yanfly.Parameters['Default Element']);

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Notetags added by Yanfly
//=============================================================================

Yanfly.EDoT.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.EDoT.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_ExtDoT) {
    this.processEDoTNotetags1($dataStates);
    Yanfly._loaded_YEP_X_ExtDoT = true;
  }
  
  return true;
};

DataManager.processEDoTNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.dotAnimation = 0;
    obj.dotElement = Yanfly.Param.EDoTDefElement;
    obj.dotVariance = Yanfly.Param.EDoTDefVariance;
    var evalMode = 'none';
    obj.dotFormula = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:REGEN|DOT) ANIMATION:[ ](\d+)>/i)) {
        obj.dotAnimation = parseInt(RegExp.$1);
      } else if (line.match(/<(?:REGEN|REGENERATE) FORMULA:[ ](.*)>/i)) {
        var formula = String(RegExp.$1);
        obj.dotFormula = 'value = Math.max(0, ' + formula + ');\n';
        obj.dotFormula += 'healing = true;'
        if (obj.dotAnimation === 0) {
          obj.dotAnimation = Yanfly.Param.EDoTRegenAni;
        }
      } else if (line.match(/<(?:DOT|DAMAGE OVER TIME) FORMULA:[ ](.*)>/i)) {
        var formula = String(RegExp.$1);
        obj.dotFormula = 'value = Math.max(0, ' + formula + ');\n';
        obj.dotFormula += 'healing = false;'
        if (obj.dotAnimation === 0) {
          obj.dotAnimation = Yanfly.Param.EDoTDamageAni;
        }
      } else if (line.match(/<(?:REGEN|DOT) VARIANCE:[ ](\d+)([%％])>/i)) {
        obj.dotVariance = parseInt(RegExp.$1);
      } else if (line.match(/<(?:REGEN|DOT) ELEMENT:[ ](\d+)>/i)) {
        obj.dotElement = parseInt(RegExp.$1);
      } else if (line.match(/<(?:CUSTOM REGEN FORMULA)>/i)) {
        evalMode = 'custom dot formula';
      } else if (line.match(/<\/(?:CUSTOM REGEN FORMULA)>/i)) {
        obj.dotFormula += 'healing = true';
        evalMode = 'none';
      } else if (line.match(/<(?:CUSTOM DOT FORMULA)>/i)) {
        evalMode = 'custom dot formula';
      } else if (line.match(/<\/(?:CUSTOM DOT FORMULA)>/i)) {
        obj.dotFormula += 'healing = false';
        evalMode = 'none';
      } else if (evalMode === 'custom dot formula') {
        obj.dotFormula += line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_Battler
// ----------------------------------------------------------------------------
// Compatibility with YEP_BuffsStatesCore
//=============================================================================

Yanfly.EDoT.Game_Battler_regenerateAll = Game_Battler.prototype.regenerateAll;
Game_Battler.prototype.regenerateAll = function() {
  if (this.isAlive() && $gameParty.inBattle()) {
    this.processDamageOverTimeStates();
  }
  Yanfly.EDoT.Game_Battler_regenerateAll.call(this);
};

Game_Battler.prototype.processDamageOverTimeStates = function() {
  if (!$gameParty.inBattle()) return;
  var result = JsonEx.makeDeepCopy(this._result);
  var states = this.states();
  while (states.length > 0) {
    var state = states.shift();
    if (state) {
      this.processDamageOverTimeStateEffect(state);
    }
  }
  this._result = result;
};

Game_Battler.prototype.processDamageOverTimeStateEffect = function(state) {
  var stateId = state.id;
  var state = $dataStates[stateId];
  if (!state) return;
  if (state.dotFormula === '') return;
  var a = this.stateOrigin(stateId);
  var b = this;
  var user = this;
  var target = this;
  var origin = this.stateOrigin(stateId);
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var healing = false;
  var variance = state.dotVariance;
  var element = state.dotElement;
  var code = state.dotFormula;
  try {
    eval(code);
    if (healing) {
      value = Math.abs(Math.max(0, value));
    } else {
      value = Math.abs(Math.max(0, value)) * -1;
    }
    value = this.applyDamageOverTimeVariance(value, variance);
    value = this.applyDamageOverTimeElement(value, element);
    value = Math.round(value);
    if (value !== 0) {
      this.clearResult();
      this.gainHp(value);
      this.startDamagePopup();
      if (state.dotAnimation > 0) {
        this.startAnimation(state.dotAnimation);
      }
      if (this.isDead()) {
        this.performCollapse();
      }
      this.clearResult();
    }
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'CUSTOM DOT ' + stateId + ' CODE ERROR');
  }
};

Game_Battler.prototype.applyDamageOverTimeVariance = function(damage, vari) {
  if (vari === 0) return damage;
  var variance = vari;
  var amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
  var v = Math.randomInt(amp + 1) + Math.randomInt(amp + 1) - amp;
  return damage >= 0 ? damage + v : damage - v;
};

Game_Battler.prototype.applyDamageOverTimeElement = function(damage, element) {
  if (element === 0) return damage;
  return damage * this.elementRate(element);
};

//=============================================================================
// Utilities
// ----------------------------------------------------------------------------
// From Yanfly's Utility Library
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
text += 'YEP_X_ExtDoT requires YEP_BattleEngineCore and ';
text += 'YEP_BuffsStatesCoreto be at the latest version to run properly. '
text += '\n\nPlease go to www.yanfly.moe and update to the latest version for ';
text += 'the YEP_BattleEngineCore and YEP_BuffsStatesCore plugins.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.YEP_BuffsStatesCore