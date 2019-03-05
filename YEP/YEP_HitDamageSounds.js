//=============================================================================
// Yanfly Engine Plugins - Hit Damage Sounds
// YEP_HitDamageSounds.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_HitDamageSounds = true;

var Yanfly = Yanfly || {};
Yanfly.HDS = Yanfly.HDS || {};
Yanfly.HDS.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Play specific damage sounds based on the target's
 * armor and/or specific enemy types.
 * @author Yanfly Engine Plugins + Chickie Collaboration
 *
 * @param ---Settings---
 * @default
 *
 * @param Only Sound
 * @parent ---Settings---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Play only the armor sound? If false, will play the default
 * hit sound, too. YES - true     NO - false
 * @default false
 *
 * @param ---Armor Types---
 * @default
 *
 * @param Armor Type 1
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default Blow1, 90, 100, 0
 *
 * @param Armor Type 2
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default Blow2, 90, 100, 0
 *
 * @param Armor Type 3
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default Blow3, 90, 100, 0
 *
 * @param Armor Type 4
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default Hammer, 90, 100, 0
 *
 * @param Armor Type 5
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 6
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 7
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 8
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 9
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 10
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 11
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 12
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 13
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 14
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 15
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 16
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 17
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 18
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 19
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 20
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 21
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 22
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 23
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 24
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 25
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 26
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 27
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 28
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 29
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 30
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 31
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 32
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 33
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 34
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 35
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 36
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 37
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 38
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 39
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 40
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 41
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 42
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 43
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 44
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 45
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 46
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 47
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 48
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 49
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 50
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 51
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 52
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 53
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 54
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 55
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 56
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 57
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 58
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 59
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 60
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 61
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 62
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 63
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 64
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 65
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 66
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 67
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 68
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 69
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 70
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 71
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 72
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 73
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 74
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 75
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 76
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 77
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 78
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 79
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 80
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 81
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 82
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 83
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 84
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 85
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 86
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 87
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 88
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 89
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 90
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 91
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 92
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 93
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 94
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 95
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 96
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 97
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 98
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 99
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @param Armor Type 100
 * @parent ---Armor Types---
 * @desc The sound used for this armor type. Leave empty to not use.
 * Format: filename, volume, pitch, pan
 * @default 
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Different types of armors make different sounds when they're hit. When an
 * actor is struck by an attack and takes damage, they will play a sound effect
 * based off the armor they are wearing (ie. cloth versus metal). Enemies can
 * also play different sound effects when they get hit, too (ie. slimes versus
 * robots). Use this plugin to make your armors and enemies more lively when
 * they react to damage.
 *
 * This is a collaboration plugin by Chickie and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Change the plugin parameters to make default hit damage sound effects for
 * specific armor types. These armor types are found in the Database > Types
 * tab found in your RPG Maker MV project's database. If an armor type is left
 * empty, it will not play a special hit damage sound effect when the actor is
 * struck by a damaging action.
 *
 * If the armor has a hit damage sound effect, it will be played. Otherwise,
 * the regular damage sound effect will play. If an actor has multiple pieces
 * of armor with different hit damage sounds, a random sound will be played
 * from that selection of armors.
 *
 * Enemies can also play hit damage sound effects when struck, too. However,
 * they can only have one sound effect when being hit.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into the armors and/or enemy noteboxes to make
 * them play different sounds when getting struck.
 *
 * Armor and Enemy Notetags
 *
 *   <Hit Damage Sound: filename>
 *   <Hit Damage Sound: filename, volume>
 *   <Hit Damage Sound: filename, volume, pitch>
 *   <Hit Damage Sound: filename, volume, pitch, pan>
 *   - Makes the piece of armor or enemy play 'filename' when struck. When
 *   inserting the filename, the filename must be case sensitive and must not
 *   include the extension. The 'volume' and 'pitch' variables must be integar
 *   values between 0 and 100 if they are used. The 'pan' variable can be an
 *   integar value between -100 and 100 if it is used.
 *
 *   Examples:
 *
 *   <Hit Damage Sound: Fire1>
 *   <Hit Damage Sound: Fire2, 80>
 *   <Hit Damage Sound: Fire3, 80, 130, 20>
 *
 *   In the above examples, the armor piece or enemy will play the Fire sound
 *   effects when struck. This will override the default settings.
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
// Parameter Variables
//=============================================================================

Yanfly.HDS.setupParameters = function() {
  Yanfly.Parameters = PluginManager.parameters('YEP_HitDamageSounds');
  Yanfly.Param = Yanfly.Param || {};
  Yanfly.Param.HitDamageSoundsOnly = String(Yanfly.Parameters['Only Sound']);
  Yanfly.Param.HitDamageSoundsOnly = eval(Yanfly.Param.HitDamageSoundsOnly);
  Yanfly.Param.HitDamageSounds = [null];

  for (var i = 1; i < 101; ++i) {
    var str = String(Yanfly.Parameters['Armor Type ' + i]);
    if (str.length <= 0) continue;
    str = str.split(',');
    
    var sound = {
      name:   String(str[0].trim()),
      volume: parseInt(str[1].trim()),
      pitch:  parseInt(str[2].trim()),
      pan:    parseInt(str[3].trim())
    };

    Yanfly.Param.HitDamageSounds[i] = sound;
    AudioManager.loadStaticSe(sound);
  }
};
Yanfly.HDS.setupParameters();

//=============================================================================
// DataManager
//=============================================================================

Yanfly.HDS.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.HDS.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_HitDamageSounds) {
    this.processHDSNotetags1($dataArmors);
    this.processHDSNotetags1($dataEnemies);
    Yanfly._loaded_YEP_HitDamageSounds = true;
  }
  
  return true;
};

DataManager.processHDSNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    if (obj.atypeId) {
      obj.hitDamageSound = Yanfly.Param.HitDamageSounds[obj.atypeId];
    }

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<HIT DAMAGE SOUND:[ ](.*)>/i)) {
        var data = String(RegExp.$1).split(',');
        obj.hitDamageSound = this.processHitDamageSoundData(data);
      }
    }
  }
};

DataManager.processHitDamageSoundData = function(data) {
  if (data[0] === '') return;
  var sound = {
    name: String(data[0].trim())
  }
  sound['volume'] = data[1] ? parseInt(data[1].trim()) : 90;
  sound['pitch'] = data[2] ? parseInt(data[2].trim()) : 100;
  sound['pan'] = data[3] ? parseInt(data[3].trim()) : 0;
  return sound;
};

//=============================================================================
// SoundManager
//=============================================================================

Yanfly.HDS.SoundManager_playEnemyDamage = SoundManager.playEnemyDamage;
SoundManager.playEnemyDamage = function() {
  if (!!$gameTemp.getHitDamageBattler()) {
    this.playHitDamageSound();
  } else {
    Yanfly.HDS.SoundManager_playEnemyDamage.call(this);
  }
};

Yanfly.HDS.SoundManager_playActorDamage = SoundManager.playActorDamage;
SoundManager.playActorDamage = function() {
  if (!!$gameTemp.getHitDamageBattler()) {
    this.playHitDamageSound();
  } else {
    Yanfly.HDS.SoundManager_playActorDamage.call(this);
  }
};

SoundManager.playHitDamageSound = function() {
  var battler = $gameTemp.getHitDamageBattler();
  if (battler.isActor()) {
    this.playActorHitDamageSound();
  } else if (battler.isEnemy()) {
    this.playEnemyHitDamageSound();
  }
};

SoundManager.playActorHitDamageSound = function() {
  var battler = $gameTemp.getHitDamageBattler();
  var sounds = this.getBattlerArmorSounds(battler);
  if (sounds.length > 0) {
    var sound = sounds[Math.floor(Math.random() * sounds.length)];
    AudioManager.playStaticSe(sound);
    if (!Yanfly.Param.HitDamageSoundsOnly) {
      Yanfly.HDS.SoundManager_playEnemyDamage.call(this);
    }
  } else {
    Yanfly.HDS.SoundManager_playActorDamage.call(this);
  }
};

SoundManager.getBattlerArmorSounds = function(battler) {
  var armors = battler.armors();
  var array = [];
  var length = armors.length;
  for (var i = 0; i < length; ++i) {
    var armor = armors[i];
    if (armor.hitDamageSound) {
      array.push(armor.hitDamageSound);
    }
  }
  return array;
};

SoundManager.playEnemyHitDamageSound = function() {
  var battler = $gameTemp.getHitDamageBattler();
  if (battler.enemy().hitDamageSound) {
    AudioManager.playStaticSe(battler.enemy().hitDamageSound);
    if (!Yanfly.Param.HitDamageSoundsOnly) {
      Yanfly.HDS.SoundManager_playEnemyDamage.call(this);
    }
  } else {
    Yanfly.HDS.SoundManager_playEnemyDamage.call(this);
  }
};

//=============================================================================
// Game_Temp
//=============================================================================

Game_Temp.prototype.setHitDamageBattler = function(battler) {
  this._hitDamageBattler = battler;
};

Game_Temp.prototype.getHitDamageBattler = function() {
  return this._hitDamageBattler;
};

Game_Temp.prototype.clearHitDamageBattler = function() {
  this._hitDamageBattler = undefined;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.HDS.Game_Actor_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function() {
  $gameTemp.setHitDamageBattler(this);
  Yanfly.HDS.Game_Actor_performDamage.call(this);
  $gameTemp.clearHitDamageBattler();
};

//=============================================================================
// Game_Enemy
//=============================================================================

Yanfly.HDS.Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
Game_Enemy.prototype.performDamage = function() {
  $gameTemp.setHitDamageBattler(this);
  Yanfly.HDS.Game_Enemy_performDamage.call(this);
  $gameTemp.clearHitDamageBattler();
};

//=============================================================================
// End of File
//=============================================================================