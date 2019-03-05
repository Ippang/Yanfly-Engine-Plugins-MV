//=============================================================================
// Yanfly Engine Plugins - Skill Mastery Levels
// YEP_SkillMasteryLevels.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SkillMasteryLevels = true;

var Yanfly = Yanfly || {};
Yanfly.SkillMastery = Yanfly.SkillMastery || {};
Yanfly.SkillMastery.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 Using skills improves skill mastery. As skill mastery
 * improves, skill costs drop and/or skill damage rises!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Note: If you are using YEP_SkillCore.js and/or YEP_X_SkillCooldowns.js,
 * place this plugin under those in the plugin manager list. This plugin works
 * independent of those plugins, but will work better with them if placed in
 * this specific order.
 *
 * In some RPG's, using skills over and over will result in some form of skill
 * mastery, effectively increasing the damage output, decreasing the cost of
 * said skills, and/or lowering the cooldown duration of the skills, too. This
 * plugin lets you accomplish such by adding in a Skill Mastery Level mechanic.
 *
 * The Skill Mastery Level mechanic works like such: when an actor or enemy
 * uses a skill in battle, they gain mastery EXP. Once the mastery EXP reaches
 * a certain threshhold, that skill's mastery level will increase, giving it
 * the desired mastery effects, of which can be increased damage, decreased
 * skill costs, or decreased cooldown duration. Each of these aspects can be
 * adjusted globally or individually from the formula used for the EXP required
 * per level up to the damage increase, cost alteration, or cooldown durations.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * To determine the effect the mastery level of a skill has or other various
 * mastery-related properties, use the following notetags for those skills:
 *
 * ---
 *
 * Skill Notetags:
 *
 *   <Max Mastery Level: x>
 *   - Replace 'x' with the max mastery level you want a skill to have. If you
 *   don't want the skill to have any mastery level at all, replace it with 0.
 *
 *   <Mastery Effect: +x Damage Per Level>
 *   <Mastery Effect: +x HP Cost Per Level>
 *   <Mastery Effect: +x MP Cost Per Level>
 *   <Mastery Effect: +x TP Cost Per Level>
 *   <Mastery Effect: +x Cooldown Per Level>
 *   <Mastery Effect: -x Damage Per Level>
 *   <Mastery Effect: -x HP Cost Per Level>
 *   <Mastery Effect: -x MP Cost Per Level>
 *   <Mastery Effect: -x TP Cost Per Level>
 *   <Mastery Effect: -x Cooldown Per Level>
 *   - This will increase or decrease the damage, HP cost, MP cost, TP cost,
 *   cooldown turns respectively for the skill depending on its mastery level.
 *   Replace 'x' with a flat number value of how much you want it to shift per
 *   the skill's mastery level.
 *   - Note: HP Cost requires YEP_SkillCore.js.
 *   - Note: Cooldown requires YEP_X_SkillCooldowns.
 *
 *   <Mastery Effect: +x% Damage Per Level>
 *   <Mastery Effect: +x% HP Cost Per Level>
 *   <Mastery Effect: +x% MP Cost Per Level>
 *   <Mastery Effect: +x% TP Cost Per Level>
 *   <Mastery Effect: +x% Cooldown Per Level>
 *   <Mastery Effect: -x% Damage Per Level>
 *   <Mastery Effect: -x% HP Cost Per Level>
 *   <Mastery Effect: -x% MP Cost Per Level>
 *   <Mastery Effect: -x% TP Cost Per Level>
 *   <Mastery Effect: -x% Cooldown Per Level>
 *   - This will increase or decrease the damage, HP cost, MP cost, TP cost,
 *   cooldown turns respectively for the skill depending on its mastery level.
 *   Replace 'x' with a percentile number value of how much you want it to
 *   shift per the skill's mastery level.
 *   - Note: HP Cost requires YEP_SkillCore.js.
 *   - Note: Cooldown requires YEP_X_SkillCooldowns.
 *
 *   <No Damage Mastery Effect>
 *   <No HP Cost Mastery Effect>
 *   <No MP Cost Mastery Effect>
 *   <No TP Cost Mastery Effect>
 *   <No Cooldown Mastery Effect>
 *   - These notetags will disable their respective mastery effects from the
 *   default settings. They will just have their default value with nothing
 *   changed about them at all.
 *   - Note: HP Cost requires YEP_SkillCore.js.
 *   - Note: Cooldown requires YEP_X_SkillCooldowns.
 *
 *   <Custom EXP Mastery Formula: x>
 *   - Makes a custom EXP mastery formula for the skill. Replace 'x' with the
 *   desired formula you wish to use for it.
 *   - Example: <Custom EXP Mastery Formula: level * 20 + 5>
 *
 *   <Custom Damage Mastery Formula: x>
 *   - Makes a custom damage mastery formula for the skill. Replace 'x' with
 *   the desired formula you wish to use for it.
 *   - Example: <Custom Damage Mastery Formula: value * (1.00 + (level * 0.20))>
 *
 *   <Custom HP Cost Mastery Formula: x>
 *   - Makes a custom HP cost mastery formula for the skill. Replace 'x' with
 *   the desired formula you wish to use for it.
 *   - Example: <Custom HP Cost Mastery Formula: cost * (1.00 - (level * 0.05))>
 *   - Note: HP Cost requires YEP_SkillCore.js.
 *
 *   <Custom MP Cost Mastery Formula: x>
 *   - Makes a custom MP cost mastery formula for the skill. Replace 'x' with
 *   the desired formula you wish to use for it.
 *   - Example: <Custom MP Cost Mastery Formula: cost * (1.00 - (level * 0.05))>
 *
 *   <Custom TP Cost Mastery Formula: x>
 *   - Makes a custom TP cost mastery formula for the skill. Replace 'x' with
 *   the desired formula you wish to use for it.
 *   - Example: <Custom TP Cost Mastery Formula: cost * (1.00 - (level * 0.05))>
 *
 *   <Custom Cooldown Mastery Formula: x>
 *   - Makes a custom cooldown mastery formula for the skill. Replace 'x' with
 *   the desired formula you wish to use for it.
 *   - Example: <Custom Cooldown Mastery Formula: turns - (level * 1.5)>
 *
 * ---
 *
 * Actor and Enemy Notetags:
 *
 *   <Starting Skill Masteries>
 *    list
 *    list
 *    list
 *   </Starting Skill Masteries>
 *   - If you want actors and/or enemies to have initial starting skill mastery
 *   levels, use the above notetag. This will only apply for actors when
 *   starting a new game or initializing them. Replace 'list' with one of the
 *   following setups:
 *
 *   Skill x: level
 *   Skill x: level, exp
 *   name: level
 *   name: level, exp
 *   - Replace 'x' with the ID of the skill you wish to alter the starting
 *   mastery level of. Alternatively, you can replace 'Skill x' with the skill
 *   'name'. If multiple skills have the same name in the database, this will
 *   apply to the first skill entry with that name.
 *   - Replace 'level' with the level you wish to start it off as. This cannot
 *   go under 0 nor go above the maximum level of the skill.
 *   - If used, replace 'exp' with the amount of EXP it will currently have at
 *   the start. This cannot be greater than or equal to the maximum value for
 *   the skill mastery level's EXP. If not used, it will default to 0.
 *
 *   Example:
 *
 *   <Starting Skill Masteries>
 *    Skill 5: 2
 *    Skill 6: 3, 4
 *    Firaga: 7
 *    Firaja: 8, 10
 *   </Starting Skill Masteries>
 *   - In the above example, the actor/enemy will have Skill 5 and 6 starting
 *   at levels 2 and 3 respectively. However, Skill 6 will also have some skill
 *   EXP starting at 4. The actor/enemy's 'Firaga' and 'Firaja' skills will
 *   start at levels 7 and 8 respectively while 'Firaja' will have 10 skill EXP
 *   at the very start.
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * For those with JavaScript experience, you can use the following script calls
 * reference or alter skill mastery levels to your liking:
 *
 * Script Calls:
 *
 *   battler.skillMasteryLevel(skillId)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose mastery level you wish to acquire.
 *   This will return the mastery level of that skill.
 *
 *   battler.setSkillMasteryLevel(skillId, level)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose mastery level you wish to alter.
 *   Replace 'level' with the level of the skill you wish to set it to. This
 *   will not allow the skill mastery level to go below 0 or above its max level
 *   and the number of uses will be set to 0 for that level.
 *
 *   battler.gainSkillMasteryLevel(skillId, value)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose mastery level you wish to increase.
 *   Replace 'value' with the amount of levels to increase (or decrease) the
 *   skill's current mastery level by.
 *
 *   battler.skillMasteryUses(skillId)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose current mastery usage amount you wish to
 *   acquire the value of. This will return the current mastery usage amount
 *   of that skill.
 *
 *   battler.setSkillMasteryUses(skillId, value)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose current mastery usage amount to be changed.
 *   Replace 'value' with the amount to set the amount to. If the usage amount
 *   exceeds the need to reach the next level, the skill automatically update
 *   to the next mastery level and set the mastery usage amount to 0.
 *
 *   battler.gainSkillMasteryUses(skillId, value)
 *   - 'battler' is a variable that represents an actor/enemy. Replace 'skillId'
 *   with the ID of the skill whose current mastery usage amount to be changed.
 *   Replace 'value' with the amount to increase/decrease. If the usage amount
 *   exceeds the need to reach the next level, the skill automatically update
 *   to the next mastery level and set the mastery usage amount to 0.
 *
 * ============================================================================
 * Lunatic Mode - Requires YEP_SkillCore.js
 * ============================================================================
 *
 * There are no specific Skill Mastery Levels lunatic notetags, but this part
 * of the help file will serve as a means to answer potential questions that
 * people may have about how to add special effects based on a battler's
 * mastery level.
 *
 * These examples require YEP_SkillCore.js as they use the Skill Core's lunatic
 * notetags to produce special effects.
 *
 * YEP_SkillCore.js Skill Notetag Examples:
 *
 * ---
 *
 * <After Eval>
 * if (user.skillMasteryLevel(item.id) >= 5) {
 *   target.addState(10);
 *   target.removeState(9);
 * }
 * <After Eval>
 *
 * The above code will make a check to see if the user's current mastery level
 * of the skill is greater than or equal to 5. If it is, then state 10 in the
 * database will also be applied to the target. However, state 9 will then be
 * removed from the target.
 *
 * ---
 *
 * <After Eval>
 * if (user.skillMasteryLevel(item.id) >= 2) {
 *   user.addBuff(3, 5);
 *   user.addDebuff(5, 8);
 * }
 * <After Eval>
 *
 * The above code will make a check to see if the user's current mastery level
 * of the skill is greater than or equal to 2. If it is, then the user will
 * gain a DEF buff for 5 turns. However, the user will then suffer a debuff for
 * MDF for 8 turns.
 *
 * For reference on what the parameter ID's are:
 *
 * 0 = MaxHP
 * 1 = MaxMP
 * 2 = ATK
 * 3 = DEF
 * 4 = MAT
 * 5 = MDF
 * 6 = AGI
 * 7 = LUK
 *
 * ---
 *
 * <After Eval>
 * if (user.skillMasteryLevel(item.id) >= 3) {
 *   $gameTemp.reserveCommonEvent(5)
 * }
 * <After Eval>
 *
 * The above code will make a check to see if the user's current mastery level
 * of the skill is greater than or equal to 3. If it is, common event 5 will be
 * reserved and ran once applicable.
 *
 * ---
 *
 * There are more possibilities with the way lunatic code can be used than just
 * these examples listed here. For some ideas, be sure to check out the Tips &
 * Tricks on Yanfly.moe.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param ---Settings---
 * @default
 *
 * @param Default Max Mastery
 * @parent ---Settings---
 * @type number
 * @desc Default maximum mastery level for skills.
 * @default 10
 *
 * @param Level Formula
 * @parent ---Settings---
 * @type combo
 * @option 5  // 5 uses per mastery level
 * @option 10 // 10 uses per mastery level
 * @option 20 // 20 uses per mastery level
 * @option level * 5  // Increases by 5 each level
 * @option level * 10 // Increases by 10 each level
 * @option level * 20 // Increases by 20 each level
 * @desc Amount of uses needed before reaching the next skill mastery
 * level.   level: the target level to be reached
 * @default level * 5  // Increases by 5 each level
 *
 * @param Damage Formula
 * @parent ---Settings---
 * @type combo
 * @option value // no changes based on mastery level
 * @option value * (1.00 + (level * 0.05)) // +5% per level
 * @option value * (1.00 + (level * 0.10)) // +10% per level
 * @option value * (1.00 + (level * 0.20)) // +20% per level
 * @option value + (level * 1)  // +1 MP per level
 * @option value + (level * 5)  // +5 MP per level
 * @option value + (level * 10) // +10 MP per level
 * @desc Damage rate based on level.   value: original damage
 * level: the target level to be reached
 * @default value * (1.00 + (level * 0.20)) // +20% per level
 *
 * @param MP Cost Formula
 * @parent ---Settings---
 * @type combo
 * @option cost // no changes based on mastery level
 * @option cost * (1.00 - (level * 0.05)) // -5% per level
 * @option cost * (1.00 - (level * 0.10)) // -10% per level
 * @option cost * (1.00 - (level * 0.20)) // -20% per level
 * @option cost - (level * 1)  // -1 MP per level
 * @option cost - (level * 5)  // -5 MP per level
 * @option cost - (level * 10) // -10 MP per level
 * @desc MP cost based on level.   cost: original cost
 * level: the target level to be reached
 * @default cost * (1.00 + (level * 0.10)) // -10% per level
 *
 * @param Minimum MP Cost
 * @parent MP Cost Formula
 * @desc What's the minimum MP cost of a skill if it's been reduced?
 * This does not apply if the skill has no MP cost.
 * @default 1
 *
 * @param TP Cost Formula
 * @parent ---Settings---
 * @type combo
 * @option cost // no changes based on mastery level
 * @option cost * (1.00 - (level * 0.05)) // -5% per level
 * @option cost * (1.00 - (level * 0.10)) // -10% per level
 * @option cost * (1.00 - (level * 0.20)) // -20% per level
 * @option cost - (level * 1)  // -1 TP per level
 * @option cost - (level * 5)  // -5 TP per level
 * @option cost - (level * 10) // -10 TP per level
 * @desc TP cost based on level.   cost: original cost
 * level: the target level to be reached
 * @default cost * (1.00 + (level * 0.10)) // -10% per level
 *
 * @param Minimum TP Cost
 * @parent TP Cost Formula
 * @desc What's the minimum TP cost of a skill if it's been reduced?
 * This does not apply if the skill has no TP cost.
 * @default 1
 *
 * @param (YEP_SkillCore)
 * @parent ---Settings---
 *
 * @param HP Cost Formula
 * @parent (YEP_SkillCore)
 * @type combo
 * @option cost // no changes based on mastery level
 * @option cost * (1.00 - (level * 0.05)) // -5% per level
 * @option cost * (1.00 - (level * 0.10)) // -10% per level
 * @option cost * (1.00 - (level * 0.20)) // -20% per level
 * @option cost - (level * 1)  // -1 HP per level
 * @option cost - (level * 5)  // -5 HP per level
 * @option cost - (level * 10) // -10 HP per level
 * @desc HP cost based on level.   cost: original cost
 * level: the target level to be reached
 * @default cost * (1.00 + (level * 0.10)) // -10% per level
 *
 * @param Minimum HP Cost
 * @parent HP Cost Formula
 * @desc What's the minimum HP cost of a skill if it's been reduced?
 * This does not apply if the skill has no HP cost.
 * @default 1
 *
 * @param (YEP_X_SkillCooldowns)
 * @parent ---Settings---
 *
 * @param Cooldown Formula
 * @parent (YEP_X_SkillCooldowns)
 * @type combo
 * @option turns // no changes based on mastery level
 * @option turns * (1.00 - (level * 0.05)) // -5% per level
 * @option turns * (1.00 - (level * 0.10)) // -10% per level
 * @option turns * (1.00 - (level * 0.20)) // -20% per level
 * @option turns - (level * 1)  // -1 turn per level
 * @option turns - (level * 5)  // -5 turns per level
 * @option turns - (level * 10) // -10 turns per level
 * @desc Turns based on level.   turns: original turns
 * level: the target level to be reached
 * @default turns - (level * 1)  // -1 turn per level
 *
 * @param Minimum Cooldown
 * @parent Cooldown Formula
 * @desc What's the minimum cooldown of a skill if it's been reduced?
 * This does not apply if the skill has no cooldown.
 * @default 1
 *
 * @param ---Visual---
 * @default
 *
 * @param Level Up Animation
 * @parent ---Visual---
 * @type animation
 * @desc Animation played when a skill reaches mastery level up.
 * Leave at 0 to not show any animation.
 * @default 0
 *
 * @param Mirror Actor
 * @parent Level Up Animation
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc Mirror the animation for actors?
 * YES - true     NO - false
 * @default true
 *
 * @param Mirror Enemy
 * @parent Level Up Animation
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc Mirror the animation for enemies?
 * YES - true     NO - false
 * @default false
 *
 * @param Draw Gauge
 * @parent ---Visual---
 * @type boolean
 * @on Draw Gauge
 * @off Don't Draw
 * @desc Draw the gauge for the skill mastery level?
 * YES - true     NO - false
 * @default true
 *
 * @param Gauge Color 1
 * @parent Draw Gauge
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color 1 used for the mastery gauge.
 * @default 12
 *
 * @param Gauge Color 2
 * @parent Draw Gauge
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color 2 used for the mastery gauge.
 * @default 4
 *
 * @param Gauge Height
 * @parent Draw Gauge
 * @type number
 * @min 1
 * @desc Gauge height.
 * @default 6
 *
 * @param Gauge Outline
 * @parent Draw Gauge
 * @type boolean
 * @on Outline
 * @off No Outline
 * @desc Make an outline for the gauge?
 * YES - true     NO - false
 * @default true
 *
 * @param Draw Level
 * @parent ---Visual---
 * @type boolean
 * @on Draw Gauge
 * @off Don't Draw
 * @desc Draw the level for the skill mastery level?
 * YES - true     NO - false
 * @default true
 *
 * @param Show Level 0
 * @parent Draw Level
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the level when a skill has 0 skill mastery?
 * YES - true     NO - false
 * @default false
 *
 * @param Text Color
 * @parent Draw Level
 * @type number
 * @min 0
 * @max 31
 * @desc Text Color used for the mastery level.
 * @default 29
 *
 * @param Text Align
 * @parent Draw Level
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Align the text which way?
 * left     center     right
 * @default right
 *
 * @param Text Format
 * @parent Draw Level
 * @desc Text format for how mastery levels are displayed.
 * %1 - value
 * @default LV.%1
 *
 * @param Text Size
 * @parent Draw Level
 * @type number
 * @desc Text font size for the mastery level.
 * @default 14
 *
 * @param Text Y Offset
 * @parent Draw Level
 * @desc Offset the Y position 
 * @default -8
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_SkillMasteryLevels');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.SMLDefaultMaxLv = Number(Yanfly.Parameters['Default Max Mastery']);
Yanfly.Param.SMLLvFormula = String(Yanfly.Parameters['Level Formula']);
Yanfly.Param.SMLDmgFormula = String(Yanfly.Parameters['Damage Formula']);
Yanfly.Param.SMLmpFormula = String(Yanfly.Parameters['MP Cost Formula']);
Yanfly.Param.SMLminMpCost = Number(Yanfly.Parameters['Minimum MP Cost']);
Yanfly.Param.SMLtpFormula = String(Yanfly.Parameters['TP Cost Formula']);
Yanfly.Param.SMLminTpCost = Number(Yanfly.Parameters['Minimum TP Cost']);
Yanfly.Param.SMLhpFormula = String(Yanfly.Parameters['HP Cost Formula']);
Yanfly.Param.SMLminHpCost = Number(Yanfly.Parameters['Minimum HP Cost']);
Yanfly.Param.SMLcdFormula = String(Yanfly.Parameters['Cooldown Formula']);
Yanfly.Param.SMLminCdCost = Number(Yanfly.Parameters['Minimum Cooldown']);

Yanfly.Param.SMLAnimation = Number(Yanfly.Parameters['Level Up Animation']);
Yanfly.Param.SMLAniMirActor = eval(String(Yanfly.Parameters['Mirror Actor']));
Yanfly.Param.SMLAniMirEnemy = eval(String(Yanfly.Parameters['Mirror Enemy']));

Yanfly.Param.SMLDrawGauge = eval(String(Yanfly.Parameters['Draw Gauge']));
Yanfly.Param.SMLGauge1 = Number(Yanfly.Parameters['Gauge Color 1']);
Yanfly.Param.SMLGauge2 = Number(Yanfly.Parameters['Gauge Color 2']);
Yanfly.Param.SMLGaugeH = Number(Yanfly.Parameters['Gauge Height']);
Yanfly.Param.SMLGaugeOutline = eval(String(Yanfly.Parameters['Gauge Outline']));

Yanfly.Param.SMLDrawLevel = eval(String(Yanfly.Parameters['Draw Level']));
Yanfly.Param.SMLShowLevel0 = eval(String(Yanfly.Parameters['Show Level 0']));
Yanfly.Param.SMLLevelColor = Number(Yanfly.Parameters['Text Color']);
Yanfly.Param.SMLTextAlign = String(Yanfly.Parameters['Text Align']);
Yanfly.Param.SMLTextFmt = String(Yanfly.Parameters['Text Format']);
Yanfly.Param.SMLTextSize = Number(Yanfly.Parameters['Text Size']);
Yanfly.Param.SMLTextOffsetY = Number(Yanfly.Parameters['Text Y Offset']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.SkillMastery.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.SkillMastery.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_SkillMasteryLevels) {
    this.processSkillMasteryLevelSkillRef($dataSkills);
    this.processSkillMasteryLevelsNotetags1($dataSkills);
    this.processSkillMasteryLevelsNotetags2($dataActors);
    this.processSkillMasteryLevelsNotetags2($dataEnemies);
    Yanfly._loaded_YEP_SkillMasteryLevels = true;
  }
  
  return true;
};

DataManager.processSkillMasteryLevelSkillRef = function(group) {
  if (Yanfly.SkillIdRef) return;
  Yanfly.SkillIdRef = {};
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (obj.name.length <= 0) continue;
    Yanfly.SkillIdRef[obj.name.toUpperCase()] = n;
  }
};

DataManager.processSkillMasteryLevelsNotetags1 = function(group) {
  var note1 = /<MASTERY EFFECT: ([\+\-]\d+)[ ](.*)[ ]PER LEVEL>/i;
  var note2 = /<MASTERY EFFECT: ([\+\-]\d+)([%％])[ ](.*)[ ]PER LEVEL>/i;
  var note3 = /<CUSTOM (.*) MASTERY FORMULA: (.*)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.masteryMaxLevel = Yanfly.Param.SMLDefaultMaxLv;
    obj.masteryFormula = new Function('level','skill', 
      'return ' + Yanfly.Param.SMLLvFormula);
    obj.masteryDamage = new Function('value', 'level','skill',
      'return ' + Yanfly.Param.SMLDmgFormula);
    obj.masteryMpCost = new Function('cost', 'level','skill',
      'return ' + Yanfly.Param.SMLmpFormula);
    obj.masteryTpCost = new Function('cost', 'level','skill',
      'return ' + Yanfly.Param.SMLtpFormula);
    obj.masteryHpCost = new Function('cost', 'level','skill',
      'return ' + Yanfly.Param.SMLhpFormula);
    obj.masteryCooldown = new Function('turns', 'level','skill',
      'return ' + Yanfly.Param.SMLcdFormula);

    var evalMode = 'none';
    var evalText = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:MAX MASTERY LEVEL):[ ](\d+)>/i)) {
        obj.masteryMaxLevel = parseInt(RegExp.$1);
      // Flat +/- per mastery level
      } else if (line.match(note1)) {
        var value = parseInt(RegExp.$1);
        var type = String(RegExp.$2).toUpperCase();
        if (type === 'DAMAGE') {
          obj.masteryDamage = new Function('value', 'level','skill',
            'return value + (level * ' + value + ')');
        } else if (type === 'MP COST') {
          obj.masteryMpCost = new Function('cost', 'level','skill',
            'return cost + (level * ' + value + ')');
        } else if (type === 'TP COST') {
          obj.masteryTpCost = new Function('cost', 'level','skill',
            'return cost + (level * ' + value + ')');
        } else if (type === 'HP COST') {
          obj.masteryHpCost = new Function('cost', 'level','skill',
            'return cost + (level * ' + value + ')');
        } else if (type === 'COOLDOWN') {
          obj.masteryCooldown = new Function('turns', 'level','skill',
            'return turns + (level * ' + value + ')');
        }
      // Percentile +/- per mastery level
      } else if (line.match(note2)) {
        var value = parseFloat(RegExp.$1) * 0.01;
        var type = String(RegExp.$3).toUpperCase();
        if (type === 'DAMAGE') {
          obj.masteryDamage = new Function('value', 'level','skill',
            'return value * (1.00 + (level * ' + value + '))');
        }if (type === 'MP COST') {
          obj.masteryMpCost = new Function('cost', 'level','skill',
            'return cost * (1.00 + (level * ' + value + '))');
        } else if (type === 'TP COST') {
          obj.masteryTpCost = new Function('cost', 'level','skill',
            'return cost * (1.00 + (level * ' + value + '))');
        } else if (type === 'HP COST') {
          obj.masteryHpCost = new Function('cost', 'level','skill',
            'return cost * (1.00 + (level * ' + value + '))');
        } else if (type === 'COOLDOWN') {
          obj.masteryCooldown = new Function('turns', 'level','skill',
            'return turns * (1.00 + (level * ' + value + '))');
        }
      // No Mastery Change
      } else if (line.match(/<NO[ ](.*)[ ]MASTERY EFFECT>/i)) {
        var type = String(RegExp.$1).toUpperCase();
        if (type === 'DAMAGE') {
          obj.masteryDamage = new Function('value', 'level','skill',
            'return value');
        } else if (type === 'MP COST') {
          obj.masteryMpCost = new Function('cost', 'level','skill',
            'return cost');
        } else if (type === 'TP COST') {
          obj.masteryTpCost = new Function('cost', 'level','skill',
            'return cost');
        } else if (type === 'HP COST') {
          obj.masteryHpCost = new Function('cost', 'level','skill',
            'return cost');
        } else if (type === 'COOLDOWN') {
          obj.masteryCooldown = new Function('turns', 'level','skill',
            'return turns');
        }
      // Mastery Custom Formula
      } else if (line.match(note3)) {
        var type = String(RegExp.$1).toUpperCase();
        var formula = String(RegExp.$2);
        if (type === 'EXP') {
          obj.masteryFormula = new Function('level','skill',
            'return ' + formula);
        } else if (type === 'DAMAGE') {
          obj.masteryDamage = new Function('value', 'level','skill',
            'return ' + formula);
        } else if (type === 'MP COST') {
          obj.masteryMpCost = new Function('cost', 'level','skill',
            'return ' + formula);
        } else if (type === 'TP COST') {
          obj.masteryTpCost = new Function('cost', 'level','skill',
            'return ' + formula);
        } else if (type === 'HP COST') {
          obj.masteryHpCost = new Function('cost', 'level','skill',
            'return ' + formula);
        } else if (type === 'COOLDOWN') {
          obj.masteryCooldown = new Function('turns', 'level','skill',
            'return ' + formula);
        }
      // End
      } else if (evalMode !== 'none') {
        evalText += line + '\n';
      }
    }
  }
};

DataManager.processSkillMasteryLevelsNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.startingSkillMasteryLevels = [];
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<STARTING SKILL (?:MASTERY|MASTERIES)>/i)) {
        var evalMode = 'starting skill masteries';
      } else if (line.match(/<\/STARTING SKILL (?:MASTERY|MASTERIES)>/i)) {
        var evalMode = 'none';
      } else if (evalMode === 'starting skill masteries') {
        if (line.match(/SKILL[ ](\d+):[ ](\d+)/i)) {
          var skillId = parseInt(RegExp.$1);
          var level = parseInt(RegExp.$2);
        } else if (line.match(/(.*):[ ](\d+)/i)) {
          var name = String(RegExp.$1).toUpperCase();
          var level = parseInt(RegExp.$2);
          if (Yanfly.SkillIdRef[name]) {
            var skillId = Yanfly.SkillIdRef[name];
          } else {
            continue;
          }
        }
        if (line.match(/(\d+),[ ](\d+)/i)) {
          var uses = parseInt(RegExp.$2);
          var formula = $dataSkills[skillId].masteryFormula;
          try {
            var max = formula.call(this, level + 1, $dataSkills[skillId]) - 1;
          } catch (e) {
            Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
              'Bad code for Mastery EXP Formula for ' +
              $dataSkills[skillId].name, e);
          }
          uses = uses.clamp(0, max);
        } else {
          var uses = 0;
        }
        level = level.clamp(0, $dataSkills[skillId].masteryMaxLevel);
        obj.startingSkillMasteryLevels.push([skillId, level, uses]);
      }
    }
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.SkillMastery.Game_BattlerBase_initMembers =
  Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
  Yanfly.SkillMastery.Game_BattlerBase_initMembers.call(this);
  this.initSkillMasteryLevels();
};

Game_BattlerBase.prototype.initSkillMasteryLevels = function() {
  this._skillMasteryLevels = {};
  this._skillMasteryUses = {};
  this._skillMasteryUsageMax = {};
};

Game_BattlerBase.prototype.checkSkillMasteryLevels = function() {
  if (this._skillMasteryLevels === undefined) this.initSkillMasteryLevels();
  if (this._skillMasteryUses === undefined) this.initSkillMasteryLevels();
  if (this._skillMasteryUsageMax === undefined) this.initSkillMasteryLevels();
};

Game_BattlerBase.prototype.updateSkillMasteryUsageMax = function(skillId) {
  this.checkSkillMasteryLevels();
  this._skillMasteryLevels[skillId] = this._skillMasteryLevels[skillId] || 0;
  this._skillMasteryUses[skillId] = this._skillMasteryUses[skillId] || 0;
  var skillFormula = $dataSkills[skillId].masteryFormula;
  try {
    this._skillMasteryUsageMax[skillId] = skillFormula.call(this,
      this._skillMasteryLevels[skillId] + 1, $dataSkills[skillId]);
  } catch (e) {
    Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
      'Bad code for Mastery EXP Formula for ' +
      $dataSkills[skillId].name, e);
  }
};

Game_BattlerBase.prototype.skillMasteryLevel = function(skill) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  this.checkSkillMasteryLevels();
  this._skillMasteryLevels[skillId] = this._skillMasteryLevels[skillId] || 0;
  this._skillMasteryUses[skillId] = this._skillMasteryUses[skillId] || 0;
  return this._skillMasteryLevels[skillId];
};

Game_BattlerBase.prototype.setSkillMasteryLevel = function(skill, value) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  this.checkSkillMasteryLevels();
  var level = value.clamp(0, $dataSkills[skillId].masteryMaxLevel);
  this._skillMasteryLevels[skillId] = level;
  this._skillMasteryUses[skillId] = 0;
  this.updateSkillMasteryUsageMax(skillId);
};

Game_BattlerBase.prototype.gainSkillMasteryLevel = function(skillId, value) {
  this.checkSkillMasteryLevels();
  this._skillMasteryLevels[skillId] = this._skillMasteryLevels[skillId] || 0;
  this._skillMasteryLevels[skillId] += value;
  this._skillMasteryLevels[skillId] = this._skillMasteryLevels[skillId].clamp(0,
    $dataSkills[skillId].masteryMaxLevel);
  this._skillMasteryUses[skillId] = 0;
  this.updateSkillMasteryUsageMax(skillId);
};

Game_BattlerBase.prototype.isMaxedSkillMasteryLevel = function(skill) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return false;
  }
  this.checkSkillMasteryLevels();
  return this.skillMasteryLevel(skillId) >=
    $dataSkills[skillId].masteryMaxLevel;
};

Game_BattlerBase.prototype.skillMasteryUses = function(skill) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  this.checkSkillMasteryLevels();
  this._skillMasteryLevels[skillId] = this._skillMasteryLevels[skillId] || 0;
  this._skillMasteryUses[skillId] = this._skillMasteryUses[skillId] || 0;
  return this._skillMasteryUses[skillId];
};

Game_BattlerBase.prototype.setSkillMasteryUses = function(skill, value) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  this.checkSkillMasteryLevels();
  this._skillMasteryUses[skillId] = Math.max(0, value);
  this.updateSkillMasteryUsageMax(skillId);
  if (this._skillMasteryUses[skillId] >= this._skillMasteryUsageMax[skillId]) {
    this.gainSkillMasteryLevel(skillId, 1);
  }
};

Game_BattlerBase.prototype.gainSkillMasteryUses = function(skill, value) {
  var uses = this.skillMasteryUses(skill) + value;
  this.setSkillMasteryUses(skill, uses);
};

Game_BattlerBase.prototype.skillMasteryUsageMax = function(skill) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  this.checkSkillMasteryLevels();
  this.updateSkillMasteryUsageMax(skillId);
  return this._skillMasteryUsageMax[skillId];
};

Game_BattlerBase.prototype.skillMasteryRate = function(skill) {
  if (DataManager.isSkill(skill)) {
    var skillId = skill.id;
  } else if (typeof skill === 'number') {
    var skillId = skill;
  } else {
    return 0;
  }
  if (this.isMaxedSkillMasteryLevel(skillId)) return 1;
  this.checkSkillMasteryLevels();
  this.updateSkillMasteryUsageMax(skillId);
  return this._skillMasteryUses[skillId] / this._skillMasteryUsageMax[skillId];
};

Yanfly.SkillMastery.Game_BattlerBase_paySkillCost =
  Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function(skill) {
  Yanfly.SkillMastery.Game_BattlerBase_paySkillCost.call(this, skill);
  if ($gameParty.inBattle()) {
    this._actionMastery = this._actionMastery || [];
    this._actionMastery.push(skill.id);
  }
};

Yanfly.SkillMastery.Game_Battler_onAllActionsEnd =
  Game_Battler.prototype.onAllActionsEnd;
Game_Battler.prototype.onAllActionsEnd = function() {
  Yanfly.SkillMastery.Game_Battler_onAllActionsEnd.call(this);
  if (this._actionMastery && $gameParty.inBattle()) {
    var levelup = false;
    while (this._actionMastery.length > 0) {
      var skillId = this._actionMastery.shift();
      if (this.isMaxedSkillMasteryLevel(skillId)) continue;
      var level = this.skillMasteryLevel(skillId);
      this.gainSkillMasteryUses(skillId, 1);
      if (this.skillMasteryLevel(skillId) > level) levelup = true;
    }
    if (levelup && Yanfly.Param.SMLAnimation > 0) {
      if (this.isActor()) {
        var mirror = Yanfly.Param.SMLAniMirActor;
      } else {
        var mirror = Yanfly.Param.SMLAniMirEnemy;
      }
      this.startAnimation(Yanfly.Param.SMLAnimation, mirror);
    }
  }
};

Yanfly.SkillMastery.Game_BattlerBase_skillMpCost =
  Game_BattlerBase.prototype.skillMpCost;
Game_BattlerBase.prototype.skillMpCost = function(skill) {
  var cost = Yanfly.SkillMastery.Game_BattlerBase_skillMpCost.call(this, skill);
  if (cost > 0) {
    var level = this.skillMasteryLevel(skill);
    try {
      cost = Math.floor(skill.masteryMpCost.call(this, cost, level, skill));
    } catch (e) {
      Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
        'Bad code for Mastery MP Cost Formula for ' +
        $dataSkills[skill.id].name, e);
    }
    cost = Math.max(cost, Yanfly.Param.SMLminMpCost);
  }
  return cost;
};

Yanfly.SkillMastery.Game_BattlerBase_skillTpCost =
  Game_BattlerBase.prototype.skillTpCost;
Game_BattlerBase.prototype.skillTpCost = function(skill) {
  var cost = Yanfly.SkillMastery.Game_BattlerBase_skillTpCost.call(this, skill);
  if (cost > 0) {
    var level = this.skillMasteryLevel(skill);
    try {
      cost = Math.floor(skill.masteryTpCost.call(this, cost, level, skill));
    } catch (e) {
      Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
        'Bad code for Mastery TP Cost Formula for ' +
        $dataSkills[skill.id].name, e);
    }
    cost = Math.max(cost, Yanfly.Param.SMLminTpCost);
  }
  return cost;
};

if (Imported.YEP_SkillCore) {

Yanfly.SkillMastery.Game_BattlerBase_skillHpCost =
  Game_BattlerBase.prototype.skillHpCost;
Game_BattlerBase.prototype.skillHpCost = function(skill) {
  var cost = Yanfly.SkillMastery.Game_BattlerBase_skillHpCost.call(this, skill);
  if (cost > 0) {
    var level = this.skillMasteryLevel(skill);
    try {
      cost = Math.floor(skill.masteryHpCost.call(this, cost, level, skill));
    } catch (e) {
      Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
        'Bad code for Mastery HP Cost Formula for ' +
        $dataSkills[skill.id].name, e);
    }
    cost = Math.max(cost, Yanfly.Param.SMLminHpCost);
  }
  return cost;
};

if (Imported.YEP_X_SkillCooldowns) {

Yanfly.SkillMastery.Game_BattlerBase_applyCooldownMods =
  Game_BattlerBase.prototype.applyCooldownMods;
Game_BattlerBase.prototype.applyCooldownMods = function(skill) {
  Yanfly.SkillMastery.Game_BattlerBase_applyCooldownMods.call(this, skill);
  var turns = this.cooldown(skill.id);
  if (turns > 0) {
    var level = this.skillMasteryLevel(skill);
    try {
      turns = Math.floor(skill.masteryCooldown.call(this, turns, level, skill));
    } catch (e) {
      Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
        'Bad code for Mastery Cooldown Formula for ' +
        $dataSkills[skill.id].name, e);
    }
    this.setCooldown(skill.id, Math.max(Yanfly.Param.SMLminCdCost, turns));
  }
};

}; // Imported.YEP_X_SkillCooldowns
}; // Imported.YEP_SkillCore

Game_BattlerBase.prototype.makeStartingSkillMasteryLevels = function(obj) {
  if (!obj) return;
  if (!obj.startingSkillMasteryLevels) return;
  var data = obj.startingSkillMasteryLevels;
  var length = data.length;
  for (var i = 0; i < length; ++i) {
    var skillId = data[i][0];
    var level = data[i][1];
    var uses = data[i][2];
    this.setSkillMasteryLevel(skillId, level);
    this.setSkillMasteryUses(skillId, uses);
  }
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.SkillMastery.Game_Action_makeDamageValue =
  Game_Action.prototype.makeDamageValue;
Game_Action.prototype.makeDamageValue = function(target, critical) {
  var value = Yanfly.SkillMastery.Game_Action_makeDamageValue.call(this,
    target, critical);
  if (value !== 0 && this.isSkill()) {
    var level = this.subject().skillMasteryLevel(this.item());
    try {
      value = Math.round(this.item().masteryDamage.call(this, value, level,
        this.item()));
    } catch (e) {
      Yanfly.Util.SkillMasteryLevelsError('SKILL MASTERY LEVELS:\n' + 
        'Bad code for Mastery Damage Formula for ' +
        this.item().name, e);
    }
  }
  return value;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.SkillMastery.Game_Actor_initSkills = Game_Actor.prototype.initSkills;
Game_Actor.prototype.initSkills = function() {
  Yanfly.SkillMastery.Game_Actor_initSkills.call(this);
  this.makeStartingSkillMasteryLevels(this.actor());
};

//=============================================================================
// Game_Enemy
//=============================================================================

Yanfly.SkillMastery.Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
  Yanfly.SkillMastery.Game_Enemy_setup.call(this, enemyId, x, y);
  this.makeStartingSkillMasteryLevels(this.enemy());
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.SkillMastery.Window_Base_drawItemName =
  Window_Base.prototype.drawItemName;
Window_Base.prototype.drawItemName = function(item, x, y, width) {
  width = width || 312;
  var drawSkillMastery = this._actor && DataManager.isSkill(item);
  if (drawSkillMastery && Yanfly.Param.SMLDrawGauge) {
    this.drawSkillMasteryGauge(item, x, y, width);
  }
  Yanfly.SkillMastery.Window_Base_drawItemName.call(this, item, x, y, width);
  if (drawSkillMastery && Yanfly.Param.SMLDrawLevel) {
    this.drawSkillMasteryLevel(item, x, y, width);
  }
};

Window_Base.prototype.drawSkillMasteryGauge = function(skill, x, y, width) {
  if (skill.masteryMaxLevel <= 0) return;
  x += Window_Base._iconWidth + 4;
  width -= Window_Base._iconWidth + 4;
  var color1 = this.textColor(Yanfly.Param.SMLGauge1);
  var color2 = this.textColor(Yanfly.Param.SMLGauge2);
  var gaugeH = Yanfly.Param.SMLGaugeH;
  var gaugeY = y + this.lineHeight() - gaugeH - 2;
  if (Yanfly.Param.SMLGaugeOutline) {
    gaugeY -= 2;
    gaugeH += 2;
  }
  this.contents.fillRect(x, gaugeY, width, gaugeH, this.gaugeBackColor());
  if (Yanfly.Param.SMLGaugeOutline) {
    gaugeY += 1;
    gaugeH -= 2;
    x += 1;
    width -= 1;
  }
  var rate = this._actor.skillMasteryRate(skill);
  var fillW = Math.floor(width * rate);
  this.contents.gradientFillRect(x, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.drawSkillMasteryLevel = function(skill, x, y, width) {
  var level = this._actor.skillMasteryLevel(skill);
  if (level <= 0 && !Yanfly.Param.SMLShowLevel0) return;
  var fmt = Yanfly.Param.SMLTextFmt;
  var text = fmt.format(Yanfly.Util.toGroup(level));
  this.resetFontSettings();
  this.contents.fontSize = Yanfly.Param.SMLTextSize;
  this.changeTextColor(this.textColor(Yanfly.Param.SMLLevelColor));
  var align = Yanfly.Param.SMLTextAlign;
  var offsetY = Yanfly.Param.SMLTextOffsetY;
  this.drawText(text, x + 2, y + offsetY, Window_Base._iconWidth, align);
  this.resetFontSettings();
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {

Yanfly.Util.toGroup = function(inVal) {
  return inVal;
}

}; // Yanfly.Util.toGroup

Yanfly.Util.SkillMasteryLevelsError = function(text, e) {
  text = text + '\n\n' + e.stack;
  alert(text);
  SceneManager.terminate();
};

//=============================================================================
// End of File
//=============================================================================