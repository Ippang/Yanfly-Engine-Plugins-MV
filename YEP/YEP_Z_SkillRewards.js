//=============================================================================
// Yanfly Engine Plugins - Lunatic Pack - Skill Rewards
// YEP_Z_SkillRewards.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_Z_SkillRewards = true;

var Yanfly = Yanfly || {};
Yanfly.LunSkRew = Yanfly.LunSkRew || {};
Yanfly.LunSkRew.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 (Lunatic Pack) Add a variety of effects to your items and
 * skills to reward the player for good (or bad) gameplay.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires the following plugins:
 * - Battle Engine Core
 * - Skill Core
 *
 * Place this plugin beneath the above listed plugins in the plugin manager.
 *
 * This plugin allows you to add a variety of effects to your items and skills
 * to reward the player for good (or bad) gameplay. Certain effects can only
 * trigger under specific conditions, such as defeating the target, landing a
 * critical hit, or striking the target's weakness. After these conditions have
 * been met, the effects can range from refunding skill costs, adding buffs,
 * removing debuffs, or even applying states.
 *
 * *NOTE*: This plugin is best used with RPG Maker MV version 1.5.0+. You can
 * still use this plugin with a lower version number, but you will have a much
 * harder time altering the plugin parameters without it.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into a skill or item's notebox to give it one
 * of these effects:
 *
 * ---
 *
 * Skill and Item Notetags:
 *
 *   <Reward Animation: x>
 *   - If there's a reward tied to this skill/item effect and conditions are
 *   met, this animation will be played in place of the default animations to
 *   indicate an effect has taken place. 
 *
 *   <condition Reward: effect>
 *   - Most of this plugin's notetags will follow the above format. 'condition'
 *   and 'effect' in the notetag will be replaced respectively by entries in
 *   the following CONDITION and EFFECT sections below. Insert multiple entries
 *   to give your skills/items multiple effects.
 *
 * =-=-=-= Reward CONDITIONS =-=-=-=
 *
 *   <Defeat Reward: effect>
 *   - Replace 'condition' with 'Defeat' and you'll enable the notetag to take
 *   effect when the target is defeated (HP reaches 0 or receives death state).
 *
 *   <Critical Reward: effect>
 *   - Replace 'condition' with 'Critical' and you'll enable the notetag to
 *   take effect when the user lands a critical hit on the target.
 *
 *   <Noncritical Reward: effect>
 *   - Replace 'condition' with 'Nonnritical' and you'll enable the notetag to
 *   take effect when the user fails to land a critical hit on the target.
 *
 *   <Hit Reward: effect>
 *   - Replace 'condition' with 'Hit' and you'll enable the notetag to take
 *   effect when the user has successfully hit the target.
 *
 *   <Missed Reward: effect>
 *   - Replace 'condition' with 'Missed' and you'll enable the notetag to take
 *   effect when the user misses the action or the target evades the action.
 *
 *   <Weakness Reward: effect>
 *   - Replace 'condition' with 'Weakness' and you'll enable the notetag to
 *   take effect when the user hits an elemental weakness on the target.
 *
 *   <Resisted Reward: effect>
 *   - Replace 'condition' with 'Resisted' and you'll enable the notetag to
 *   take effect when the user hits an elemental resistance on the target.
 *
 *   <Nulled Reward: effect>
 *   - Replace 'condition' with 'Nulled' and you'll enable the notetag to take
 *   effect when the user hits a nulled element on the target.
 *
 *   <Absorb Reward: effect>
 *   - Replace 'condition' with 'Nulled' and you'll enable the notetag to take
 *   effect when the user hits an absorbed element on the target.
 *
 * =-=-=-= Reward EFFECTS =-=-=-=
 *
 *   --- HP Effects ---
 *
 *   <condition Reward: +x HP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of HP you wish to reward the user when the skill/item condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% HP>
 *   - Replace 'effect' with the above format. Replace 'x' with a HP equal to
 *   x% of the user's MaxHP to reward the user when the condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% Refund HP Cost>
 *   - Replace 'effect' with the above format. Replace 'x' with a percentage of
 *   the HP cost of the skill used to reward the user if conditions are met.
 *   *Note: Can only be used with skills.
 *   SUGGESTED BY: Yanfly
 *
 *   --- MP Effects ---
 *
 *   <condition Reward: +x MP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of MP you wish to reward the user when the skill/item condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% MP>
 *   - Replace 'effect' with the above format. Replace 'x' with a MP equal to
 *   x% of the user's MaxMP to reward the user when the condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% Refund MP Cost>
 *   - Replace 'effect' with the above format. Replace 'x' with a percentage of
 *   the HP cost of the skill used to reward the user if conditions are met.
 *   *Note: Can only be used with skills.
 *   SUGGESTED BY: Yanfly
 *
 *   --- TP Effects ---
 *
 *   <condition Reward: +x TP>
 *   - Replace 'effect' with the above format. Replace 'x' with a flat amount
 *   of TP you wish to reward the user when the skill/item condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% TP>
 *   - Replace 'effect' with the above format. Replace 'x' with a TP equal to
 *   x% of the user's MaxTP to reward the user when the condition is met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: +x% Refund TP Cost>
 *   - Replace 'effect' with the above format. Replace 'x' with a percentage of
 *   the HP cost of the skill used to reward the user if conditions are met.
 *   *Note: Can only be used with skills.
 *   SUGGESTED BY: Yanfly
 *
 *   --- Item Effects ---
 *
 *   <condition Reward: x% Refund Item>
 *   - Replace 'effect' with the above format. Replace 'x' with the chance the
 *   user has to refund the item (getting it back) if conditions are met.
 *
 *   *Note: Can only be used with items. Best if used with consumable items.
 *   SUGGESTED BY: Yanfly
 *
 *   --- Buff/Debuff Effects ---
 *
 *   <condition Reward: Add x Buff>
 *   <condition Reward: Add x Buff, y Turns>
 *   <condition Reward: Add x Debuff>
 *   <condition Reward: Add x Debuff, y Turns>
 *   - Replace 'effect' with the above format(s). Replace 'x' with any of the
 *   following parameters: 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to have the effect alter the respective stat. If using the format
 *   with 'y' turns, replace 'y' with the number of turns you wish for the buff
 *   or debuff to last. If 'y' is not used, it will last for 5 turns instead.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: Remove x Buff>
 *   <condition Reward: Remove x Debuff>
 *   - Replace 'effect' with the above format(s). Replace 'x' with any of the
 *   following parameters: 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to have the effect remove the respective buff/debuff from the
 *   user if the conditions are met.  If 'y' is not used, it will last for 5
 *   turns instead.
 *   SUGGESTED BY: Yanfly
 *
 *   --- State Effects ---
 *
 *   <condition Reward: Add State x>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the state ID
 *   you wish to add to the user when conditions are met.
 *   SUGGESTED BY: Yanfly
 *
 *   <condition Reward: Remove State x>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the state ID
 *   you wish to remove from the user when conditions are met.
 *   SUGGESTED BY: Yanfly
 *
 *   --- Rolling Critical ---
 *
 *   <condition Reward: Rolling Critical +x%>
 *   <condition Reward: Rolling Critical -x%>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the percent
 *   increase/decrease for the next usage of the skill. This change will only
 *   occur for the user if the conditions are met.
 *
 *   *Note: Can only be used with skills. Turn on critical hits for the skill.
 *   SUGGESTED BY: Goldschuss
 *
 *   <condition Reward: Rolling Critical x%>
 *   - Replace 'effect' with the above format(s). Replace 'x' with the percent
 *   rate for the next usage of the skill when the conditions are met.
 *
 *   *Note: Can only be used with skills. Turn on critical hits for the skill.
 *   SUGGESTED BY: Goldschuss
 *
 * =-=-=-= Examples =-=-=-=
 *
 *   <Defeat Reward: +50% MP>
 *   - When the target is defeated by this skill, refunding 50% of the MP the
 *   user has spent in order to cast the skill.
 *
 *   <Critical Reward: Add ATK Buff, 8 Turns>
 *   - When the user lands a critical hit on the enemy, grant the user an ATK
 *   buff that lasts 8 turns.
 *
 *   <Hit Reward: Add DEF Buff, 2 Turns>
 *   - When the user lands a successful hit on the enemy, buff the user's DEF
 *   for 2 turns.
 *
 *   <Missed Reward: Refund Item>
 *   - When the user fails to land using the item, make sure it won't be
 *   consumed by refunding it.
 *
 *   <Weakness Reward: +20 TP>
 *   - If the user performs this skill on an enemy weak to this skill's element
 *   then grant the user +20 additional TP.
 *
 *   <Critical Reward: Rolling Critical 0%>
 *   <Noncritical Reward: Rolling Critical +10%>
 *   - If the user fails to land a critical hit with this skill, the user will
 *   have a 10% chance to do so the next time the user performs the skill. The
 *   critical hit rate will continue to rise by 10% each time until the user
 *   finally manages to land the critical hit. Once the user does, the critical
 *   hit rate bonus will reset back to 0%.
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
 * // ----------
 * // Flat Gains
 * // ----------
 * if (data.match(/([\+\-]\d+)[ ]HP/i)) {
 *   value = parseInt(RegExp.$1);
 *   user.gainHp(value);
 *   animation = animation || hpAnimation;

 * } else if (data.match(/([\+\-]\d+)[ ]MP/i)) {
 *   value = parseInt(RegExp.$1);
 *   user.gainMp(value);
 *   animation = animation || mpAnimation;
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
 *   animation              The animation to be played. You can set it equal to
 *                          any of the following which corresponds to plugin
 *                          parameter settings:
 *                          - hpAnimation
 *                          - mpAnimation
 *                          - tpAnimation
 *                          - itemAnimation
 *                          - buffAnimation
 *                          - debuffAnimation
 *                          - addStateAnimation
 *                          - removeStateAnimation
 *                          - miscAnimation
 *
 *   skip                   Default: false. If true, skips popups & animations
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
 * @param ---General---
 * @default
 *
 * @param Effect Code
 * @parent ---General---
 * @type note
 * @desc LUNATIC MODE: This is the code used for each of the notetag
 * effects. Refer to the help file for variables used here.
 * @default "// ----------\n// Flat Gains\n// ----------\nif (data.match(/([\\+\\-]\\d+)[ ]HP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainHp(value);\n  animation = animation || hpAnimation;\n\n} else if (data.match(/([\\+\\-]\\d+)[ ]MP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainMp(value);\n  animation = animation || mpAnimation;\n\n} else if (data.match(/([\\+\\-]\\d+)[ ]TP/i)) {\n  value = parseInt(RegExp.$1);\n  user.gainTp(value);\n  animation = animation || tpAnimation;\n\n// ----------------\n// Percentile Gains\n// ----------------\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]HP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.mhp * rate);\n  user.gainHp(value);\n  animation = animation || hpAnimation;\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]MP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.mmp * rate);\n  user.gainMp(value);\n  animation = animation || mpAnimation;\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]TP/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  value = Math.round(user.maxTp() * rate);\n  user.gainTp(value);\n  animation = animation || tpAnimation;\n\n// ------------------\n// Refund Skill Costs\n// ------------------\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]REFUND HP COST/i)) {\n  if (isSkill) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    value = Math.round(user.skillHpCost(skill) * rate);\n    user.gainHp(value);\n    animation = animation || hpAnimation;\n  } else {\n    skip = true;\n  }\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]REFUND MP COST/i)) {\n  if (isSkill) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    value = Math.round(user.skillMpCost(skill) * rate);\n    user.gainMp(value);\n    animation = animation || mpAnimation;\n  } else {\n    skip = true;\n  }\n\n} else if (data.match(/([\\+\\-]\\d+)([%％])[ ]REFUND TP COST/i)) {\n  if (isSkill) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    value = Math.round(user.skillTpCost(skill) * rate);\n    user.gainTp(value);\n    animation = animation || tpAnimation;\n  } else {\n    skip = true;\n  }\n\n// -----------\n// Refund Item\n// -----------\n} else if (data.match(/(\\d+)([%％])[ ]REFUND ITEM/i)) {\n  rate = parseFloat(RegExp.$1) * 0.01;\n  if (isItem && Math.random() < chance) {\n    $gameParty.gainItem(item, 1);\n    SoundManager.playUseItem();\n    animation = animation || itemAnimation;\n  } else {\n    skip = true;\n  }\n\n// ------------------------\n// Add/Remove Buffs/Debuffs\n// ------------------------\n} else if (data.match(/ADD[ ](.*)[ ]BUFF,[ ](\\d+)[ ]TURN/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var turns = parseInt(RegExp.$2);\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.addBuff(paramId, turns);\n  } else {\n    skip = true;\n  }\n  animation = animation || buffAnimation;\n\n} else if (data.match(/ADD[ ](.*)[ ]BUFF/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var turns = 5;\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.addBuff(paramId, turns);\n  } else {\n    skip = true;\n  }\n  animation = animation || buffAnimation;\n\n} else if (data.match(/ADD[ ](.*)[ ]DEBUFF,[ ](\\d+)[ ]TURN/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var turns = parseInt(RegExp.$2);\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.addDebuff(paramId, turns);\n  } else {\n    skip = true;\n  }\n  animation = animation || debuffAnimation;\n\n} else if (data.match(/ADD[ ](.*)[ ]DEBUFF/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var turns = 5;\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.addDebuff(paramId, turns);\n  } else {\n    skip = true;\n  }\n  animation = animation || debuffAnimation;\n\n} else if (data.match(/REMOVE[ ](.*)[ ](?:BUFF|DEBUFF)/i)) {\n  var str = String(RegExp.$1).toUpperCase();\n  var paramId = DataManager.getParamId(str);\n  if (paramId >= 0) {\n    user.removeBuff(paramId);\n  } else {\n    skip = true;\n  }\n  animation = animation || miscAnimation;\n\n// -----------------\n// Add/Remove States\n// -----------------\n} else if (data.match(/ADD STATE[ ](\\d+)/i)) {\n  var stateId = parseInt(RegExp.$1);\n  user.addState(stateId);\n  animation = animation || addStateAnimation;\n\n} else if (data.match(/REMOVE STATE[ ](\\d+)/i)) {\n  var stateId = parseInt(RegExp.$1);\n  if (user.isStateAffected(stateId)) {\n    user.removeState(stateId);\n    animation = animation || removeStateAnimation;\n  } else {\n    skip = true;\n  }\n\n// ----------------\n// Rolling Critical\n// ----------------\n} else if (data.match(/ROLLING CRITICAL[ ]([\\+\\-]\\d+)([%％])/i)) {\n  if (isSkill) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    user._rollingCritical = user._rollingCritical || {};\n    user._rollingCritical[skill.id] = user._rollingCritical[skill.id] || 0;\n    user._rollingCritical[skill.id] += rate;\n  } else {\n    skip = true;\n  }\n\n} else if (data.match(/ROLLING CRITICAL[ ](\\d+)([%％])/i)) {\n  if (isSkill) {\n    rate = parseFloat(RegExp.$1) * 0.01;\n    user._rollingCritical = user._rollingCritical || {};\n    user._rollingCritical[skill.id] = user._rollingCritical[skill.id] || 0;\n    user._rollingCritical[skill.id] = rate;\n  } else {\n    skip = true;\n  }\n\n// -------------------------------\n// Add new effects above this line\n// -------------------------------\n} else {\n  skip = true;\n}"
 *
 * @param Weakness Rate
 * @parent ---General---
 * @type number
 * @decimals 2
 * @min 0
 * @max 31
 * @desc At what point does an element rate count as a weakness?
 * @default 1.20
 *
 * @param Resisted Rate
 * @parent ---General---
 * @type number
 * @decimals 2
 * @min 0
 * @max 31
 * @desc At what point does an element rate count as resisted?
 * @default 0.80
 *
 * @param ---Animations---
 * @default
 *
 * @param HP Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves healing HP.
 * @default 41
 *
 * @param MP Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves restoring MP.
 * @default 45
 *
 * @param TP Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves raising TP.
 * @default 45
 *
 * @param Item Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves refunding items.
 * @default 46
 *
 * @param Buff Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves buffing parameters.
 * @default 51
 *
 * @param Debuff Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves debuffing parameters.
 * @default 54
 *
 * @param Add State Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves adding states.
 * @default 53
 *
 * @param Remove State Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves removing states.
 * @default 56
 *
 * @param Misc Animation
 * @parent ---Animations---
 * @type animation
 * @desc Animation to play when reward involves misc effects.
 * @default 97
 *
 */
//=============================================================================

Yanfly.PluginRequirements = function() {
  return Imported.YEP_BattleEngineCore &&
         Imported.YEP_SkillCore;
};

if (Yanfly.PluginRequirements()) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_Z_SkillRewards');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.LunSkRewEffect = JSON.parse(Yanfly.Parameters['Effect Code']);
Yanfly.Param.LunSkRewWeakness = Number(Yanfly.Parameters['Weakness Rate']);
Yanfly.Param.LunSkRewResisted = Number(Yanfly.Parameters['Resisted Rate']);

Yanfly.Param.LunSkRewAniHp = 
  Number(Yanfly.Parameters['HP Animation']);
Yanfly.Param.LunSkRewAniMp = 
  Number(Yanfly.Parameters['MP Animation']);
Yanfly.Param.LunSkRewAniTp = 
  Number(Yanfly.Parameters['TP Animation']);
Yanfly.Param.LunSkRewAniItem = 
  Number(Yanfly.Parameters['Item Animation']);
Yanfly.Param.LunSkRewAniBuff = 
  Number(Yanfly.Parameters['Buff Animation']);
Yanfly.Param.LunSkRewAniDebuff = 
  Number(Yanfly.Parameters['Debuff Animation']);
Yanfly.Param.LunSkRewAniAddState = 
  Number(Yanfly.Parameters['Add State Animation']);
Yanfly.Param.LunSkRewAniRemoveState = 
  Number(Yanfly.Parameters['Remove State Animation']);
Yanfly.Param.LunSkRewAniMisc = 
  Number(Yanfly.Parameters['Misc Animation']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.LunSkRew.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.LunSkRew.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_Z_SkillRewards) {
    this.processLunSkRewNotetags1($dataSkills);
    this.processLunSkRewNotetags1($dataItems);
    Yanfly._loaded_YEP_Z_SkillRewards = true;
  }
  
  return true;
};

DataManager.processLunSkRewNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.rewardAnimation = 0;
    obj.criticalRewards = [];
    obj.noncriticalRewards = [];
    obj.defeatRewards = [];
    obj.hitRewards = [];
    obj.missedRewards = [];
    obj.weaknessRewards = [];
    obj.resistRewards = [];
    obj.nulledRewards = [];
    obj.absorbRewards = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<REWARD[ ](?:ANI|ANIMATION):[ ](\d+)>/i)) {
        obj.rewardAnimation = parseInt(RegExp.$1);
      } else if (line.match(/<(.*)[ ](?:REWARD|REWARDS):[ ](.*)>/i)) {
        var condition = String(RegExp.$1);
        var data = String(RegExp.$2);
        if (condition.match(/DEFEAT/i)) {
          obj.defeatRewards.push(data);
        } else if (condition.match(/NONCRITICAL/i)) {
          obj.noncriticalRewards.push(data);
        } else if (condition.match(/CRITICAL/i)) {
          obj.criticalRewards.push(data);
        } else if (condition.match(/HIT/i)) {
          obj.hitRewards.push(data);
        } else if (condition.match(/(?:MISSED|EVADE)/i)) {
          obj.missedRewards.push(data);
        } else if (condition.match(/WEAKNESS/i)) {
          obj.weaknessRewards.push(data);
        } else if (condition.match(/RESIST/i)) {
          obj.resistRewards.push(data);
        } else if (condition.match(/NULLED/i)) {
          obj.nulledRewards.push(data);
        } else if (condition.match(/ABSORB/i)) {
          obj.absorbRewards.push(data);
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
// Game_Action
//=============================================================================

Yanfly.LunSkRew.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
  var alive = target.hp > 0;
  Yanfly.LunSkRew.Game_Action_apply.call(this, target);
  var result = target.result();
  if (alive) {
    if (target.hp <= 0 || target.isDead()) {
      this.processLunaticSkillReward(target, 'defeat');
    }
  }
  if (result.isHit()) {
    this.processLunaticSkillReward(target, 'hit');
    if (result.critical) {
      this.processLunaticSkillReward(target, 'critical');
    } else {
      this.processLunaticSkillReward(target, 'noncritical');
    }
    var rate = this.calcElementRate(target);
    if (rate >= Yanfly.Param.LunSkRewWeakness) {
      this.processLunaticSkillReward(target, 'weakness');
    } else if (rate < 0) {
      this.processLunaticSkillReward(target, 'absorb');
    } else if (rate === 0) {
      this.processLunaticSkillReward(target, 'nulled');
    } else if (rate <= Yanfly.Param.LunSkRewResisted) {
      this.processLunaticSkillReward(target, 'resist');
    }
  } else {
    this.processLunaticSkillReward(target, 'missed');
  }
};

Yanfly.LunSkRew.Game_Action_itemCri = Game_Action.prototype.itemCri;
Game_Action.prototype.itemCri = function(target) {
  var cri = Yanfly.LunSkRew.Game_Action_itemCri.call(this, target);
  var user = this.subject();
  if (this.isSkill() && user && user._rollingCritical) {
    user._rollingCritical[skill.id] = user._rollingCritical[skill.id] || 0;
    cri += user._rollingCritical[skill.id];
  }
  return cri;
};

Game_Action.prototype.processLunaticSkillReward = function(target, type) {
  switch (type) {
  case 'defeat':
    var dataInfo = this.item().defeatRewards;
    break;
  case 'noncritical':
    var dataInfo = this.item().noncriticalRewards;
    break;
  case 'critical':
    var dataInfo = this.item().criticalRewards;
    break;
  case 'hit':
    var dataInfo = this.item().hitRewards;
    break;
  case 'missed':
    var dataInfo = this.item().missedRewards;
    break;
  case 'weakness':
    var dataInfo = this.item().weaknessRewards;
    break;
  case 'resist':
    var dataInfo = this.item().resistRewards;
    break;
  case 'nulled':
    var dataInfo = this.item().nulledRewards;
    break;
  case 'absorb':
    var dataInfo = this.item().absorbRewards;
    break;
  default:
    return;
  }
  var length = dataInfo.length;
  for (var i = 0; i < length; ++i) {
    var data = dataInfo[i];
    this.lunaticSkillRewardEval(target, type, data);
  }
};

Game_Action.prototype.lunaticSkillRewardEval = function(target, type, data) {
  var item = this.item();
  var skill = this.item();
  var isSkill = DataManager.isSkill(skill);
  var isItem = DataManager.isSkill(item);
  var user = this.subject();
  var a = user;
  var subject = user;
  var b = target;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var userPreviousResult = JsonEx.makeDeepCopy(user._result);
  var targetPreviousResult = JsonEx.makeDeepCopy(target._result);
  var skip = false;
  var value = 0;
  var rate = 1;

  var hpAnimation = Yanfly.Param.LunSkRewAniHp;
  var mpAnimation = Yanfly.Param.LunSkRewAniMp;
  var tpAnimation = Yanfly.Param.LunSkRewAniTp;
  var itemAnimation = Yanfly.Param.LunSkRewAniItem;
  var buffAnimation = Yanfly.Param.LunSkRewAniBuff;
  var debuffAnimation = Yanfly.Param.LunSkRewAniDebuff;
  var addStateAnimation = Yanfly.Param.LunSkRewAniAddState;
  var removeStateAnimation = Yanfly.Param.LunSkRewAniRemoveState;
  var miscAnimation = Yanfly.Param.LunSkRewAniMisc;

  var animation = this.item().rewardAnimation || 0;

  var code = Yanfly.Param.LunSkRewEffect;
  try {
    eval(code)
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'LUNATIC SKILL REWARDS ERROR');
  }

  if (!skip) {
    user.startDamagePopup();
    if (animation > 0) {
      user.startAnimation(animation);
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
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
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

// ----------
// Flat Gains
// ----------
if (data.match(/([\+\-]\d+)[ ]HP/i)) {
  value = parseInt(RegExp.$1);
  user.gainHp(value);
  animation = animation || hpAnimation;

} else if (data.match(/([\+\-]\d+)[ ]MP/i)) {
  value = parseInt(RegExp.$1);
  user.gainMp(value);
  animation = animation || mpAnimation;

} else if (data.match(/([\+\-]\d+)[ ]TP/i)) {
  value = parseInt(RegExp.$1);
  user.gainTp(value);
  animation = animation || tpAnimation;

// ----------------
// Percentile Gains
// ----------------
} else if (data.match(/([\+\-]\d+)([%％])[ ]HP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.mhp * rate);
  user.gainHp(value);
  animation = animation || hpAnimation;

} else if (data.match(/([\+\-]\d+)([%％])[ ]MP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.mmp * rate);
  user.gainMp(value);
  animation = animation || mpAnimation;

} else if (data.match(/([\+\-]\d+)([%％])[ ]TP/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  value = Math.round(user.maxTp() * rate);
  user.gainTp(value);
  animation = animation || tpAnimation;

// ------------------
// Refund Skill Costs
// ------------------
} else if (data.match(/([\+\-]\d+)([%％])[ ]REFUND HP COST/i)) {
  if (isSkill) {
    rate = parseFloat(RegExp.$1) * 0.01;
    value = Math.round(user.skillHpCost(skill) * rate);
    user.gainHp(value);
    animation = animation || hpAnimation;
  } else {
    skip = true;
  }

} else if (data.match(/([\+\-]\d+)([%％])[ ]REFUND MP COST/i)) {
  if (isSkill) {
    rate = parseFloat(RegExp.$1) * 0.01;
    value = Math.round(user.skillMpCost(skill) * rate);
    user.gainMp(value);
    animation = animation || mpAnimation;
  } else {
    skip = true;
  }

} else if (data.match(/([\+\-]\d+)([%％])[ ]REFUND TP COST/i)) {
  if (isSkill) {
    rate = parseFloat(RegExp.$1) * 0.01;
    value = Math.round(user.skillTpCost(skill) * rate);
    user.gainTp(value);
    animation = animation || tpAnimation;
  } else {
    skip = true;
  }

// -----------
// Refund Item
// -----------
} else if (data.match(/(\d+)([%％])[ ]REFUND ITEM/i)) {
  rate = parseFloat(RegExp.$1) * 0.01;
  if (isItem && Math.random() < chance) {
    $gameParty.gainItem(item, 1);
    SoundManager.playUseItem();
    animation = animation || itemAnimation;
  } else {
    skip = true;
  }

// ------------------------
// Add/Remove Buffs/Debuffs
// ------------------------
} else if (data.match(/ADD[ ](.*)[ ]BUFF,[ ](\d+)[ ]TURN/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var turns = parseInt(RegExp.$2);
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.addBuff(paramId, turns);
  } else {
    skip = true;
  }
  animation = animation || buffAnimation;

} else if (data.match(/ADD[ ](.*)[ ]BUFF/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var turns = 5;
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.addBuff(paramId, turns);
  } else {
    skip = true;
  }
  animation = animation || buffAnimation;

} else if (data.match(/ADD[ ](.*)[ ]DEBUFF,[ ](\d+)[ ]TURN/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var turns = parseInt(RegExp.$2);
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.addDebuff(paramId, turns);
  } else {
    skip = true;
  }
  animation = animation || debuffAnimation;

} else if (data.match(/ADD[ ](.*)[ ]DEBUFF/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var turns = 5;
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.addDebuff(paramId, turns);
  } else {
    skip = true;
  }
  animation = animation || debuffAnimation;

} else if (data.match(/REMOVE[ ](.*)[ ](?:BUFF|DEBUFF)/i)) {
  var str = String(RegExp.$1).toUpperCase();
  var paramId = DataManager.getParamId(str);
  if (paramId >= 0) {
    user.removeBuff(paramId);
  } else {
    skip = true;
  }
  animation = animation || miscAnimation;

// -----------------
// Add/Remove States
// -----------------
} else if (data.match(/ADD STATE[ ](\d+)/i)) {
  var stateId = parseInt(RegExp.$1);
  user.addState(stateId);
  animation = animation || addStateAnimation;

} else if (data.match(/REMOVE STATE[ ](\d+)/i)) {
  var stateId = parseInt(RegExp.$1);
  if (user.isStateAffected(stateId)) {
    user.removeState(stateId);
    animation = animation || removeStateAnimation;
  } else {
    skip = true;
  }

// ----------------
// Rolling Critical
// ----------------
} else if (data.match(/ROLLING CRITICAL[ ]([\+\-]\d+)([%％])/i)) {
  if (isSkill) {
    rate = parseFloat(RegExp.$1) * 0.01;
    user._rollingCritical = user._rollingCritical || {};
    user._rollingCritical[skill.id] = user._rollingCritical[skill.id] || 0;
    user._rollingCritical[skill.id] += rate;
  } else {
    skip = true;
  }

} else if (data.match(/ROLLING CRITICAL[ ](\d+)([%％])/i)) {
  if (isSkill) {
    rate = parseFloat(RegExp.$1) * 0.01;
    user._rollingCritical = user._rollingCritical || {};
    user._rollingCritical[skill.id] = user._rollingCritical[skill.id] || 0;
    user._rollingCritical[skill.id] = rate;
  } else {
    skip = true;
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
text += 'YEP_Z_SkillRewards without the required plugins. Please visit ';
text += 'Yanfly.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Yanfly.PluginRequirements