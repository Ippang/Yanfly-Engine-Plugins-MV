//=============================================================================
// Yanfly Engine Plugins - Multi-Type Skills
// YEP_MultiTypeSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MultiTypeSkills = true;

var Yanfly = Yanfly || {};
Yanfly.MTS = Yanfly.MTS || {};
Yanfly.MTS.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Allow skills to have multiple types to make them 
 * appear in different skill type schools instead of just one.
 * @author Yanfly Engine Plugins + Tigress Collaboration
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * In RPG Maker MV, you can only assign one skill type per skill. This means
 * that each skill can only appear under one skill type library when scrolling
 * through a skill list. Yet, in traditional RPG's, we sometimes see skills
 * that can exist in multiple skill types. A "Cure" spell might appear in both
 * "White Magic" and "Red Magic" at the same time. This plugin enables the
 * possibility to give skills multiple skill types.
 *
 * This is a collaboration plugin by Tigress and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert these notetags into your skills' noteboxes that you wish to have
 * multiple skill types for.
 *
 * Skill Notetags:
 *
 *   <Skill Type: x>
 *   <Skill Types: x, x, x>
 *   <Skill Types: x to y>
 *   - Gives multiple skill types of x (or to y) for the modified skill. This
 *   will automatically include the skill's type placed by the editor.
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

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Notetags added by Yanfly
//=============================================================================

Yanfly.MTS.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.MTS.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_MultiTypeSkills) {
    this.processMTSNotetags1($dataSkills);
    Yanfly._loaded_YEP_MultiTypeSkills = true;
  }
  
  return true;
};

DataManager.processMTSNotetags1 = function(group) {
  var note1 = /<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<SKILL[ ](?:TYPE|TYPES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.skillTypes = [obj.stypeId];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.skillTypes = obj.skillTypes.concat(array);
      } else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.skillTypes = obj.skillTypes.concat(range);
      }
    }
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.MTS.Game_BattlerBase_msC =
  Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
  var value = Yanfly.MTS.Game_BattlerBase_msC.call(this, skill);
  if (!value) return false;
  if (skill && skill.skillTypes) {
    var length = skill.skillTypes;
    for (var n = 0; n < length; n++) {
      if (this.isSkillTypeSealed(skill.skillTypes[n])) {
        return false;
      }
    }
  }
  return true;
};

//=============================================================================
// Window_SkillList
//=============================================================================

Window_SkillList.prototype.matchSkillType = function(item) {
  if (item) {
    if (item.stypeId === this._stypeId) {
      return true;
    } else if (item.skillTypes && item.skillTypes.contains(this._stypeId)) {
      return true;
    }
  }
  return false;
};

if (Imported.YEP_SkillCore) {

Window_SkillList.prototype.includes = function(item) {
  if (this._actor) {
    if (!this._actor.noHiddenSkillConditionsMet(item)) return false;
  }
  return this.matchSkillType(item);
};

} else { // No YEP Skill Core

Window_SkillList.prototype.includes = function(item) {
  return item && this.matchSkillType(item);
};

} // Imported.YEP_SkillCore

//=============================================================================
// Utilities
// ----------------------------------------------------------------------------
// Provided by Yanfly
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRange = function(n, m) {
  var result = [];
  for (var i = n; i <= m; ++i) result.push(i);
  return result;
};

//=============================================================================
// End of File
//=============================================================================