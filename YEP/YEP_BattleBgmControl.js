//=============================================================================
// Yanfly Engine Plugins - Battle BGM Control
// YEP_BattleBgmControl.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_BattleBgmControl = true;

var Yanfly = Yanfly || {};
Yanfly.BattleBgm = Yanfly.BattleBgm || {};
Yanfly.BattleBgm.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Assign BGM's to certain troops. Make BGM's change
 * during battle when certain enemies reach different HP values.
 * @author Yanfly Engine Plugins + Chickie Collaboration
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin lets you assign certain BGM's to certain troops so that they
 * will play from the map transition into the battle. Furthermore, when a major
 * enemy's HP is reduced to certain values, the battle BGM can change as well.
 * This will help add extra feeling to the battle and make battle BGM's less
 * monotonous for longer battles.
 *
 * This is a collaboration plugin by Chickie and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Comment Tags
 * ============================================================================
 *
 * To make a specific battle play a certain BGM upon loading the battle, make a
 * comment in one of the Troop's event pages. Insert the following comment tags
 * to have it trigger a specific BGM to play when the battle starts.
 *
 * Troop Event Comment Tags:
 *
 *   <Battle BGM Name: filename>
 *   - Replace 'filename' with the filename of the BGM you wish to play at the
 *   start of battle without the file extension. The filename is also case
 *   sensitive. For example, if you wish to play Battle3.m4a, replace
 *   'filename' with only 'Battle3' and no '.m4a' in the tag. This is the only
 *   required tag. Once this tag is detected, only the remainder of the event
 *   page will be scanned. Other pages in the troop will be ignored. 
 *
 *   <Battle BGM Volume: x>
 *   - Replace 'x' with a number between 0 and 100. This determines the volume
 *   of the BGM being played when the battle starts. This is an optional tag.
 *   If not used, it will default to a volume of 90.
 *
 *   <Battle BGM Pitch: x>
 *   - Replace 'x' with a number between 0 and 100. This determines the pitch
 *   of the BGM being played when the battle starts. This is an optional tag.
 *   If not used, it will default to a pitch of 0.
 *
 *   <Battle BGM Pan: +x>
 *   <Battle BGM Pan: -x>
 *   - Replace 'x' with a number between -100 and 100. This determines the pan
 *   of the BGM being played when the battle starts. This is an optional tag.
 *   If not used, it will default to a pan of 0.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can insert these notetag settings into an enemy's notebox to make the
 * music play a different BGM when the enemy is at different HP values. 
 *
 * Enemy Notetags:
 *
 *   <Battle BGM x%: filename>
 *   <Battle BGM x%: filename, volume>
 *   <Battle BGM x%: filename, volume, pitch>
 *   <Battle BGM x%: filename, volume, pitch, pan>
 *   - Insert any of the above notetags into the enemy's notebox. Replace 'x'
 *   with the HP percentage you wish to change the Battle BGM music at. The
 *   'filename' of the audio is case sensitive. Replace 'volume' and/or 'pitch'
 *   with integer values from 0 to 100. Replace 'pan' with an integer value
 *   between -100 to 100. Use any of the notetags above. If data is omitted,
 *   it will default to a volume of 90, pitch of 100, and pan of 0.
 *
 *   * Note: This will designate this enemy as a potential key enemy for the
 *   battle it's in. In battles, there can only be one key enemy for the battle
 *   BGM changes. If there are multiple, it will pick the first available key
 *   enemy and set it as that for that battle.
 *
 *   If you wish to make the boss play different BGMs at multiple  different HP
 *   values, insert multiples of the above notetags. However, make sure the
 *   notetags are in descending HP% order like such:
 *
 *   <Battle BGM 100%: Battle1, 90, 100, 0>
 *   <Battle BGM 70%: Battle2, 90, 110, 0>
 *   <Battle BGM 50%: Battle3, 90, 120, 0>
 *   <Battle BGM 20%: Battle4, 90, 130, 0>
 *   <Battle BGM 5%: Battle5, 90, 140, 0>
 *
 *   This is because the plugin will check from top to bottom. So if you want
 *   the songs to play as the key enemy's HP drops progressively, place them in
 *   such order.
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

Yanfly.BattleBgm.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.BattleBgm.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_BattleBgmControl) {
    this.processBattleBgmNotetags1($dataTroops);
    this.processBattleBgmNotetags2($dataEnemies);
    Yanfly._loaded_YEP_BattleBgmControl = true;
  }
  
  return true;
};

DataManager.processBattleBgmNotetags1 = function(group) {
  var length = group.length;
  for (var t = 1; t < length; t++) {
    var troop = group[t];
    if (!troop) continue;
    troop.specificBgm = {
      name: undefined,
      volume: 90,
      pitch: 100,
      pan: 0,
      pos: 0
    }
    var pageLength = troop.pages.length;
    for (var p = 0; p < pageLength; ++p) {
      var page = troop.pages[p];
      if (page) this.processBattleBgmTroopData(troop, page);
    }
  }
};

DataManager.processBattleBgmTroopData = function(troop, page) {
  var length = page.list.length;
  var checked = false;
  for (var i = 0; i < length; i++) {
    var pageItem = page.list[i];
    if (pageItem) {
      if (pageItem.code === 108 || pageItem.code === 408) {
        var line = pageItem.parameters[0];
        if (line) {
          if (line.match(/<BATTLE BGM NAME:[ ](.*)>/i)) {
            troop.specificBgm['name'] = String(RegExp.$1);
            checked = true;
          } else if (line.match(/<BATTLE BGM VOLUME:[ ](\d+)>/i)) {
            troop.specificBgm['volume'] = parseInt(RegExp.$1);
          } else if (line.match(/<BATTLE BGM PITCH:[ ](\d+)>/i)) {
            troop.specificBgm['pitch'] = parseInt(RegExp.$1);
          } else if (line.match(/<BATTLE BGM PAN:[ ]([\+\-]\d+)>/i)) {
            troop.specificBgm['pan'] = parseInt(RegExp.$1);
          } else if (line.match(/<BATTLE BGM POSITION:[ ](\d+)>/i)) {
            troop.specificBgm['pos'] = parseInt(RegExp.$1);
          }
        }
      }
    }
    if (checked) {
      break;
    }
  }
};

DataManager.processBattleBgmNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.battleBgmKeyEnemy = false;
    obj.battleBgmChanges = {};

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<BATTLE BGM[ ](\d+)([%％]):[ ](.*)>/i)) {
        var percentage = parseFloat(RegExp.$1) * 0.01;
        var data = String(RegExp.$3);
        obj.battleBgmChanges[percentage] = this.convertBattleBgmData(data);
        obj.battleBgmKeyEnemy = true;
      }
    }

    keys = Object.keys(obj.battleBgmChanges);
    keys = keys.sort();
  }
};

DataManager.convertBattleBgmData = function(str) {
  var data = str.split(',');
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].trim();
    if (i > 0) {
      data[i] = Number(data[i]);
    }
  }
  var obj = {
    name: data[0],
    volume: data[1] || 90,
    pitch: data[2] || 100,
    pan: data[3] || 0,
    pos: data[4] || 0
  }
  return obj;
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.BattleBgm.BattleManager_playBattleBgm = BattleManager.playBattleBgm;
BattleManager.playBattleBgm = function() {
  if (AudioManager.getBattleBgmKeyEnemy()) {
    return AudioManager.updateBattleBgmKeyEnemy();
  }
  var troop = $dataTroops[$gameTroop._troopId];
  if (troop.specificBgm.name === undefined) {
    Yanfly.BattleBgm.BattleManager_playBattleBgm.call(this);
  } else {
    this.playBattleSpecificBgm(troop.specificBgm);
  }

};

BattleManager.playBattleSpecificBgm = function(settings) {
  AudioManager.playBgm(settings, settings.pos);
};

//=============================================================================
// AudioManager
//=============================================================================

AudioManager.clearBattleBgmKeyEnemy = function() {
  this._battleBgmKeyEnemy = undefined;
};

AudioManager.setBattleBgmKeyEnemy = function(enemy) {
  this._battleBgmKeyEnemy = enemy;
  this.updateBattleBgmKeyEnemy();
};

AudioManager.getBattleBgmKeyEnemy = function() {
  return this._battleBgmKeyEnemy;
};

AudioManager.updateBattleBgmKeyEnemy = function() {
  var settings = undefined;
  if (this._battleBgmKeyEnemy) {
    for (var key in this._battleBgmKeyEnemy.enemy().battleBgmChanges) {
      if (this._battleBgmKeyEnemy.hpRate() <= parseFloat(key)) {
        settings = this._battleBgmKeyEnemy.enemy().battleBgmChanges[key];
      } else {
        break;
      }
    }
  }
  if (settings !== undefined) {
    this.playBgm(settings, settings.pos);
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.BattleBgm.Game_BattlerBase_setHp = Game_BattlerBase.prototype.setHp;
Game_BattlerBase.prototype.setHp = function(hp) {
  Yanfly.BattleBgm.Game_BattlerBase_setHp.call(this, hp);
  if (this.isEnemy() && this === AudioManager.getBattleBgmKeyEnemy()) {
    AudioManager.updateBattleBgmKeyEnemy();
  }
};

//=============================================================================
// Game_Troop
//=============================================================================

Yanfly.BattleBgm.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function(troopId) {
  AudioManager.clearBattleBgmKeyEnemy();
  Yanfly.BattleBgm.Game_Troop_setup.call(this, troopId);
  this.detectAndSetBattleBgmKeyEnemy();
};

Game_Troop.prototype.detectAndSetBattleBgmKeyEnemy = function() {
  var members = this.members();
  for (var i = 0; i < members.length; i++) {
    var member = members[i];
    if (member) {
      if (member.enemy().battleBgmKeyEnemy) {
        AudioManager.setBattleBgmKeyEnemy(member);
        return;
      }
    }
  }
};

//=============================================================================
// End of File
//=============================================================================