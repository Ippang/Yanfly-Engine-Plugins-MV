//=============================================================================
// Yanfly Engine Plugins - Hit Accuracy
// YEP_HitAccuracy.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_HitAccuracy = true;

var Yanfly = Yanfly || {};
Yanfly.HA = Yanfly.HA || {};
Yanfly.HA.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc v1.04 This plugin alters the nature of hit accuracy for
 * RPG Maker MV by giving control to its formula.
 * @author Yanfly Engine Plugins
 *
 * @param ---Formula---
 * @default
 *
 * @param Accuracy Formula
 * @parent ---Formula---
 * @desc The formula used to determine the skill's accuracy.
 * Variables: skillHitRate, userHitRate, targetEvadeRate
 * @default skillHitRate * (userHitRate - targetEvadeRate)
 *
 * @param Evade Formula
 * @parent ---Formula---
 * @desc The formula used to determine if the skill is evaded.
 * Variables: skillHitRate, userHitRate, targetEvadeRate
 * @default 0
 *
 * @param ---User Hit Rate---
 * @default
 *
 * @param User Physical Hit
 * @parent ---User Hit Rate---
 * @desc The formula used to determine the user's hit rate
 * for physical actions.
 * @default user.hit
 *
 * @param User Magical Hit
 * @parent ---User Hit Rate---
 * @desc The formula used to determine the user's hit rate
 * for magical actions.
 * @default 1.00
 *
 * @param User Certain Hit
 * @parent ---User Hit Rate---
 * @desc The formula used to determine the user's hit rate
 * for certain hit actions.
 * @default 1.00
 *
 * @param ---Target Evade Rate---
 * @default
 *
 * @param Target Physical Evade
 * @parent ---Target Evade Rate---
 * @desc The formula used to determine the target's evade rate
 * for physical actions.
 * @default target.eva
 *
 * @param Target Magical Evade
 * @parent ---Target Evade Rate---
 * @desc The formula used to determine the target's evade rate
 * for magical actions.
 * @default target.mev
 *
 * @param Target Certain Evade
 * @parent ---Target Evade Rate---
 * @desc The formula used to determine the target's evade rate
 * for certain hit actions.
 * @default 0.00
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MV's action accuracy formula is unintuitive. For what
 * it matters, the accuracy of the skill is determined first, then the evasion
 * of the target is determined second regardless of the accuracy of the first
 * check. This means that even if an attacker has 1000% HIT accuracy, the skill
 * can still be evaded by the enemy's 5% EVA stat. So instead, this plugin will
 * provide control over an action's accuracy formula and evasion formula. By
 * this plugin's default settings, accuracy will now be calculated where the
 * attacker's HIT and the enemy's EVA are set against one another for a more
 * intuitive accuracy formula.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * This plugin can be plug-and-play. But, if you wish to modify the accuracy
 * formulas to your liking, adjust the plugin parameters that alter each of the
 * individual aspects.
 *
 * skillHitRate - This is the inherent success rate of the skill/item.
 *
 * userHitRate - This is the accuracy rate of the user. If it's a physical
 * action, by default, HIT is used. If it's a magical action, by default, there
 * will be a 100% modifier from it, meaning it doesn't alter the success rate.
 *
 * targetEvadeRate - This is the evasion rate of the target. If it's a physical
 * action, the EVA stat is used by default. If it's a magical action, the MEV
 * stat is used by default.
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
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.01:
 * - Made a correction to the calculation of the skillhitrate so that it's a
 * proper float value instead.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_HitAccuracy');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.HAHitFormula = String(Yanfly.Parameters['Accuracy Formula']);
Yanfly.Param.HAEvaFormula = String(Yanfly.Parameters['Evade Formula']);

Yanfly.Param.HAUserPhysical = String(Yanfly.Parameters['User Physical Hit']);
Yanfly.Param.HAUserMagical = String(Yanfly.Parameters['User Magical Hit']);
Yanfly.Param.HAUserCertain = String(Yanfly.Parameters['User Certain Hit']);

Yanfly.Param.HATarPhysical = String(Yanfly.Parameters['Target Physical Evade']);
Yanfly.Param.HATarMagical = String(Yanfly.Parameters['Target Magical Evade']);
Yanfly.Param.HATarCertain = String(Yanfly.Parameters['Target Certain Evade']);

//=============================================================================
// Game_Action
//=============================================================================

Game_Action.prototype.itemHit = function(target) {
    var item = this.item();
    var skill = this.item();
    var a = this.subject();
    var user = this.subject();
    var subject = this.subject();
    var b = target;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var skillHitRate = this.item().successRate * 0.01;
    var userHitRate = this.userHitRate(target);
    var targetEvadeRate = this.targetEvadeRate(target);
    var code = Yanfly.Param.HAHitFormula;
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM HIT FORMULA ERROR');
      return false;
    }
};

Game_Action.prototype.itemEva = function(target) {
    var item = this.item();
    var skill = this.item();
    var a = this.subject();
    var user = this.subject();
    var subject = this.subject();
    var b = target;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var skillHitRate = this.item().successRate * 0.01;
    var userHitRate = this.userHitRate(target);
    var targetEvadeRate = this.targetEvadeRate(target);
    var code = Yanfly.Param.HAEvaFormula;
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM EVA FORMULA ERROR');
      return false;
    }
};

Game_Action.prototype.userHitRate = function(target) {
    var item = this.item();
    var skill = this.item();
    var a = this.subject();
    var user = this.subject();
    var subject = this.subject();
    var b = target;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    if (this.isPhysical()) {
      var code = Yanfly.Param.HAUserPhysical;
    } else if (this.isMagical()) {
      var code = Yanfly.Param.HAUserMagical;
    } else {
      var code = Yanfly.Param.HAUserCertain;
    }
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM HIT RATE FORMULA ERROR');
      return 0;
    }
};

Game_Action.prototype.targetEvadeRate = function(target) {
    var item = this.item();
    var skill = this.item();
    var a = this.subject();
    var user = this.subject();
    var subject = this.subject();
    var b = target;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    if (this.isPhysical()) {
      var code = Yanfly.Param.HATarPhysical;
    } else if (this.isMagical()) {
      var code = Yanfly.Param.HATarMagical;
    } else {
      var code = Yanfly.Param.HATarCertain;
    }
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM EVA RATE FORMULA ERROR');
      return 0;
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
