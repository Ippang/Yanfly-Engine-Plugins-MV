//=============================================================================
// Yanfly Engine Plugins - Battle Engine Core Extension - Weak Enemy Poses
// YEP_X_WeakEnemyPoses.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_WeakEnemyPoses = true;

var Yanfly = Yanfly || {};
Yanfly.WEPose = Yanfly.WEPose || {};
Yanfly.WEPose.version = 1.03;

//=============================================================================
 /*:
 * @plugindesc v1.03 (Requires YEP_BattleEngineCore.js) Allow enemies to
 * have different battler images when they're weakened.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_BattleEngineCore. Make sure this plugin is located
 * under YEP_BattleEngineCore in the plugin list.
 *
 * Non-animated enemies often appear lifeless. They maintain one appearance
 * throughout the whole battle and do not change it under any circumstances.
 * This plugin allows you to set different images for enemies when they are
 * under certain health percentages as well as other conditions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into the database entries' noteboxes to alter
 * the weak pose data.
 *
 * Enemy Notetags:
 *
 *   <x% Health Pose: filename>
 *   - At x% HP or lower, the enemy will use 'filename' for its battler image
 *   instead of its default one. The filename is case sensitive and must not
 *   include the file extension. Insert multiple of these notetags to give the
 *   enemy various poses across different health values.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 *   <x% Health Pose: filename, hue>
 *   - At x% HP or lower, the enemy will use 'filename' for its battler image
 *   instead of its default one and a different hue instead of its default. The
 *   filename is case sensitive and must not include the file extension. The
 *   hue must be a value between 0 and 360. Insert multiple of these notetags
 *   to give the enemy various poses across different health values.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 * State Notetags:
 *
 *   <Force Enemy Pose: filename>
 *   - When an enemy is afflicted with this state, the enemy would take on this
 *   battler image as long as that state is the highest priority state with a
 *   forced enemy pose. Replace 'filename' with the battler image to be used.
 *   The filename is case sensitive and must not include the file extension.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 *   <Force Enemy Pose: filename, hue>
 *   - When an enemy is afflicted with this state, the enemy would take on this
 *   battler image as long as that state is the highest priority state with a
 *   forced enemy pose. Replace 'filename' with the battler image to be used.
 *   The filename is case sensitive and must not include the file extension.
 *   The hue must be a value between 0 and 360.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 * ============================================================================
 * Lunatic Mode - Custom Enemy Poses
 * ============================================================================
 *
 * For those with JavaScript experience, you can alter the pose used for an
 * enemy (static only, not animated) using these Lunatic Mode notetags:
 *
 * Enemy Notetags:
 *
 *   <Custom Enemy Pose>
 *    if (user.mpRate() >= 0.50) {
 *      name = 'Scorpion';
 *      hue = 180;
 *    } else {
 *      name = 'Spider';
 *    }
 *   </Custom Enemy Pose>
 *   - The 'name' variable will refer to the filename used for the battler
 *   image. The filename is case sensitive and must not include the file
 *   extension. If the 'hue' variable is used, then that hue will be forced.
 *   Otherwise, it will use the default hue of the enemy. The hue must be a
 *   value between 0 and 360.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 * State Notetags:
 *
 *   <Custom Enemy Pose>
 *    if (user.mpRate() >= 0.50) {
 *      name = 'Scorpion';
 *      hue = 180;
 *    } else {
 *      name = 'Spider';
 *    }
 *   </Custom Enemy Pose>
 *   - When an enemy is afflicted with this state, the enemy would take on the
 *   'name' image as long as that state is the highest priority state with a
 *   forced enemy pose. The filename is case sensitive and must not include the
 *   file extension. If the 'hue' variable is used, then that hue will be
 *   forced. Otherwise, it will use the default hue of the enemy. The hue must
 *   be a value between 0 and 360.
 *   * NOTE: This applies only to static enemies and NOT animated enemies.
 *
 * For the other variable to use:
 *
 *   defaultBattlerName
 *   - This will be the default battler's name.
 * 
 *   defaultBattlerHue
 *   - This will be the default battler's hue.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_BattleEngineCore) {

//=============================================================================
// DataManager
//=============================================================================

Yanfly.WEPose.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.WEPose.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_WeakEnemyPoses) {
    this.processWEPoseNotetags1($dataEnemies);
    this.processWEPoseNotetags2($dataStates);
    Yanfly._loaded_YEP_X_WeakEnemyPoses = true;
  }
  
  return true;
};

DataManager.processWEPoseNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.weakPosesRate = [1.0];
    obj.weakPosesData = {
      1.0: [obj.battlerName, obj.battlerHue],
    };
    var evalMode = 'none';
    obj.weakPoseEval = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(\d+)([%％])[ ]HEALTH POSE:[ ](.*),[ ](\d+)>/i)) {
        var rate = parseFloat(RegExp.$1) * 0.01;
        var data = [String(RegExp.$3), parseInt(RegExp.$4).clamp(0, 360)];
        obj.weakPosesRate.push(rate);
        obj.weakPosesData[rate] = data;
      } else if (line.match(/<(\d+)([%％])[ ]HEALTH POSE:[ ](.*)>/i)) {
        var rate = parseFloat(RegExp.$1) * 0.01;
        var data = [String(RegExp.$3), -1];
        obj.weakPosesRate.push(rate);
        obj.weakPosesData[rate] = data;
      } else if (line.match(/<CUSTOM ENEMY POSE>/i)) {
        var evalMode = 'custom enemy pose';
      } else if (line.match(/<\/CUSTOM ENEMY POSE>/i)) {
        var evalMode = 'none';
      } else if (evalMode === 'custom enemy pose') {
        obj.weakPoseEval += line + '\n';
      }
    }

    this.sortObjectWeakPoses(obj);
  }
};

DataManager.sortObjectWeakPoses = function(obj) {
  obj.weakPosesRate.sort(function(a, b) { return b - a; });
};

DataManager.processWEPoseNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.forceEnemyPose = undefined;
    obj.forceEnemyHue = -1;
    var evalMode = 'none';
    obj.forceEnemyPoseEval = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<FORCE ENEMY POSE:[ ](.*),[ ](\d+)>/i)) {
        obj.forceEnemyPose = String(RegExp.$1);
        obj.forceEnemyHue = parseInt(RegExp.$2).clamp(0, 360);
      } else if (line.match(/<FORCE ENEMY POSE:[ ](.*)>/i)) {
        obj.forceEnemyPose = String(RegExp.$1);
      } else if (line.match(/<CUSTOM ENEMY POSE>/i)) {
        var evalMode = 'custom enemy pose';
      } else if (line.match(/<\/CUSTOM ENEMY POSE>/i)) {
        var evalMode = 'none';
      } else if (evalMode === 'custom enemy pose') {
        obj.forceEnemyPoseEval += line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.WEPose.Game_Battler_refresh = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
  Yanfly.WEPose.Game_Battler_refresh.call(this);
  if (this.isEnemy()) this.clearWeakPoseData();
};

//=============================================================================
// Game_Enemy
//=============================================================================

Yanfly.WEPose.Game_Enemy_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
  Yanfly.WEPose.Game_Enemy_initMembers.call(this);
  this.clearWeakPoseData();
};

Game_Enemy.prototype.clearWeakPoseData = function() {
  this._weakPoseBattlerName = undefined;
  this._weakPoseBattlerHue = undefined;
};

Yanfly.WEPose.Game_Enemy_battlerName = Game_Enemy.prototype.battlerName;
Game_Enemy.prototype.battlerName = function() {
  if (this._weakPoseBattlerName !== undefined) {
    return this._weakPoseBattlerName;
  }
  this._weakPoseBattlerName = Yanfly.WEPose.Game_Enemy_battlerName.call(this);
  this._weakPoseBattlerHue = -1;
  this.makeEnemyWeakPoseData();
  this.makeEnemyWeakPoseEval();
  this.makeStateWeakPoseData();
  this.makeStateWeakPoseEval();
  return this._weakPoseBattlerName;
};

Yanfly.WEPose.Game_Enemy_battlerHue = Game_Enemy.prototype.battlerHue;
Game_Enemy.prototype.battlerHue = function() {
  if (this._weakPoseBattlerHue !== undefined) {
    if (this._weakPoseBattlerHue < 0) {
      return Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
    } else {
      return this._weakPoseBattlerHue;
    }
  }
  return Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
};

Game_Enemy.prototype.makeEnemyWeakPoseData = function() {
  var hpRate = this.hpRate();
  var data = this.enemy().weakPosesData;
  var rates = this.enemy().weakPosesRate;
  var length = rates.length;
  for (var i = 0; i < length; ++i) {
    var rate = rates[i];
    if (hpRate <= rate) {
      this._weakPoseBattlerName = data[rate][0];
      this._weakPoseBattlerHue = data[rate][1];
    } else {
      break;
    }
  }
};

Game_Enemy.prototype.makeEnemyWeakPoseEval = function() {
  var code = this.enemy().weakPoseEval;
  if (code === '') return;
  var hpRate = this.hpRate();
  var defaultBattlerName = Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
  var defaultBattlerHue = Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
  var name = this._weakPoseBattlerName;
  var hue = this._weakPoseBattlerHue;
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'WEAK POSE EVAL ERROR');
  }
  this._weakPoseBattlerName = name;
  this._weakPoseBattlerHue = hue;
};

Game_Enemy.prototype.makeStateWeakPoseData = function() {
  var hpRate = this.hpRate();
  var states = this.states();
  var length = states.length;
  for (var i = 0; i < length; ++i) {
    var state = states[i];
    if (state && state.forceEnemyPose !== undefined) {
      this._weakPoseBattlerName = state.forceEnemyPose;
      this._weakPoseBattlerHue = state.forceEnemyHue;
      break;
    }
  }
};

Game_Enemy.prototype.makeStateWeakPoseEval = function() {
  var hpRate = this.hpRate();
  var states = this.states();
  var length = states.length;
  for (var i = 0; i < length; ++i) {
    var state = states[i];
    if (state && state.forceEnemyPoseEval !== '') {
      var code = state.forceEnemyPoseEval;
      var defaultBattlerName = Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
      var defaultBattlerHue = Yanfly.WEPose.Game_Enemy_battlerHue.call(this);
      var name = this._weakPoseBattlerName;
      var hue = this._weakPoseBattlerHue;
      var a = this;
      var user = this;
      var subject = this;
      var b = this;
      var target = this;
      var s = $gameSwitches._data;
      var v = $gameVariables._data;
      try {
        eval(code);
      } catch (e) {
        Yanfly.Util.displayError(e, code, 'WEAK POSE STATE EVAL ERROR');
      }
      this._weakPoseBattlerName = name;
      this._weakPoseBattlerHue = hue;
      break;
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
}; // Imported.YEP_BattleEngineCore