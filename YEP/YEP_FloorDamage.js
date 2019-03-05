//=============================================================================
// Yanfly Engine Plugins - Floor Damage
// YEP_FloorDamage.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_FloorDamage = true;

var Yanfly = Yanfly || {};
Yanfly.FloorDmg = Yanfly.FloorDmg || {};
Yanfly.FloorDmg.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Allows you to modify floor damage based on terrain tags.
 * You can also change the color of the flash when damaged, too.
 * @author Yanfly Engine Plugins
 *
 * @param Default Damage
 * @type number
 * @min 1
 * @desc This is the default amount of damage dealt by damage floors.
 * @default 10
 *
 * @param Flash Color
 * @desc This is the flash color used for all floor damage by default.
 * Insert them by red, green, blue, opacity with values from 0-255
 * @default 255, 0, 0, 128
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For those who would like to make different tiles deal different amount of
 * damage, this plugin will allow you to accomplish such a thing. This way,
 * some tiles can deal more damage than others instead of dealing a static 10
 * damage each character. In addition to that, you are also able to change the
 * color of the damage flash, too!
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into the noteboxes for your tilesets:
 *
 * Tileset Notetag:
 *
 *   <Floor Damage x: y>
 *   - 'x' is the terrain tag to mark the tileset with. By default, terrain
 *   tags are set to 0. They will go up as high as 7. 'y' will be the amount of
 *   damage dealt to each actor in the party. For example, <Floor Damage 2: 50>
 *   will cause all damage tiles marked with terrain tag 2 to deal 50 damage.
 *   * Note: You will still need to mark the tile itself as a damage tile in
 *   the database editor.
 *
 *   <Floor Flash x: r, g, b, o>
 *   - 'x' is the terrain tag to mark the tileset with. Replace 'r', 'g', 'b',
 *   and 'o' with values between 0-255 to indicate the red, green, blue, and
 *   opacity values respectively. This will make the screen flash this color
 *   combination when the player takes damage from this tile.
 *   * Note: You will still need to mark the tile itself as a damage tile in
 *   the database editor.
 *
 * ============================================================================
 * Lunatic Mode - Custom Floor Damage
 * ============================================================================
 *
 * For those with JavaScript experience, you can make certain terrain tags deal
 * custom amounts of damage to your actors.
 *
 * Tileset Notetag:
 *
 *   <Custom Floor Damage x>
 *    value = actor.level;
 *   </Custom Floor Damage x>
 *   - 'x' is the terrain tag to mark the tileset with. By default, terrain
 *   tags are set to 0. They will go up as high as 7. 'y' will be the amount of
 *   damage dealt to each actor in the party. 'value' is the final damage value
 *   that will be added upon the <Floor Damage x: y> value. 'actor' will refer
 *   to the actor being damaged currently.
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

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_FloorDamage');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.FloorDmgDefault = Number(Yanfly.Parameters['Default Damage']);
Yanfly.SetupParameters = function() {
  var array = String(Yanfly.Parameters['Flash Color']).split(',');
  for (var i = 0; i < array.length; ++i) {
    array[i] = parseInt(array[i].trim());
  }
  Yanfly.Param.FloorDmgFlash = array;
};
Yanfly.SetupParameters();

//=============================================================================
// DataManager
//=============================================================================

Yanfly.FloorDmg.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.FloorDmg.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_FloorDamage) {
    this.processFloorDmgNotetags1($dataTilesets);
    Yanfly._loaded_YEP_FloorDamage = true;
  }
  
  return true;
};

DataManager.processFloorDmgNotetags1 = function(group) {
  var note1a = /<(?:CUSTOM FLOOR DAMAGE|custom floor dmg)[ ](\d+)>/i;
  var note1b = /<\/(?:CUSTOM FLOOR DAMAGE|custom floor dmg)[ ](\d+)>/i;
  var note2 = /<FLOOR FLASH[ ](\d+):[ ](.*)>/i
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.floorDmg = [
      Yanfly.Param.FloorDmgDefault, Yanfly.Param.FloorDmgDefault,
      Yanfly.Param.FloorDmgDefault, Yanfly.Param.FloorDmgDefault,
      Yanfly.Param.FloorDmgDefault, Yanfly.Param.FloorDmgDefault,
      Yanfly.Param.FloorDmgDefault, Yanfly.Param.FloorDmgDefault
    ];
    obj.floorDmgFlash = [
      Yanfly.Param.FloorDmgFlash, Yanfly.Param.FloorDmgFlash,
      Yanfly.Param.FloorDmgFlash, Yanfly.Param.FloorDmgFlash,
      Yanfly.Param.FloorDmgFlash, Yanfly.Param.FloorDmgFlash,
      Yanfly.Param.FloorDmgFlash, Yanfly.Param.FloorDmgFlash
    ]
    var evalMode = 'none';
    var terrainId = 0;
    obj.floorDmgEval = ['', '', '', '', '', '', '', ''];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:FLOOR DAMAGE|floor dmg)[ ](\d+):[ ](\d+)>/i)) {
        var tag = parseInt(RegExp.$1).clamp(0, 7);
        var dmg = parseInt(RegExp.$2);
        obj.floorDmg[tag] = dmg;
      } else if (line.match(note1a)) {
        evalMode = 'custom floor damage';
        var terrainId = parseInt(RegExp.$1).clamp(0, 7);
      } else if (line.match(note1b)) {
        evalMode = 'none';
      } else if (evalMode === 'custom floor damage') {
        obj.floorDmgEval[terrainId] += line + '\n';
      } else if (line.match(note2)) {
        var tag = parseInt(RegExp.$1).clamp(0, 7);
        var array = String(RegExp.$2).split(',');
        for (var a = 0; a < array.length; ++a) {
          array[a] = parseInt(array[a].trim());
        }
        if (array.length === 4) obj.floorDmgFlash[tag] = array;
      }
    }
  }
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.basicFloorDamage = function() {
  var value = $gameMap.evaluateFloorDamage(this);
  return Math.ceil(value);
};

Game_Actor.prototype.performMapDamage = function() {
  if ($gameParty.inBattle()) return;
  var terrainTag = $gamePlayer.terrainTag();
  var tileset = $gameMap.tileset();
  var data = tileset.floorDmgFlash[terrainTag] || [255, 0, 0, 128];
  $gameScreen.startFlash(data, 8);
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.evaluateFloorDamage = function(actor) {
  var terrainTag = $gamePlayer.terrainTag();
  var tileset = this.tileset();
  var value = tileset.floorDmg[terrainTag] || 10;
  var a = actor;
  var b = actor;
  var user = actor;
  var subject = actor;
  var target = actor;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = tileset.floorDmgEval[terrainTag] || 0;
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, 'CUSTOM FLOOR DAMAGE ERROR');
  }
  return value;
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
