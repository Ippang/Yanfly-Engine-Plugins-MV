//=============================================================================
// Yanfly Engine Plugins - Enemy Levels Extension - Difficulty Slider
// YEP_X_DifficultySlider.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_DifficultySlider = true;

var Yanfly = Yanfly || {};
Yanfly.DSlider = Yanfly.DSlider || {};
Yanfly.DSlider.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc v1.04 (Requires YEP_EnemyLevels.js) Give your players
 * access to an option that allows them to change difficulty.
 * @author Yanfly Engine Plugins
 *
 * @param ---Options---
 * @default
 *
 * @param Command Text
 * @parent ---Options---
 * @desc How the command appears in the options menu.
 * @default Difficulty
 *
 * @param Default Show
 * @parent ---Options---
 * @type boolean
 * @desc Show the command by default? If off, defaults to 100.
 * ON - true     OFF - false
 * @default true
 *
 * @param ---Settings---
 * @default
 *
 * @param Default Difficulty
 * @parent ---Settings---
 * @desc This is the default difficulty value.
 * @type Number
 * @default 100
 *
 * @param Minimum Difficulty
 * @parent ---Settings---
 * @desc This is the minimum difficulty value.
 * @type Number
 * @default 50
 *
 * @param Maximum Difficulty
 * @parent ---Settings---
 * @desc This is the maximum difficulty value.
 * @type Number
 * @default 200
 *
 * @param Change Increment
 * @parent ---Settings---
 * @desc This is the amount the difficulty changes per increment
 * @type Number
 * @default 25
 *
 * @param ---Formulas---
 * @default
 *
 * @param Base Level Formula
 * @parent ---Formulas---
 * @desc The formula used to determine the base level.
 * level - current level     multiplier - multiplier value
 * @default level * multiplier / 100
 *
 * @param Maximum Level Formula
 * @parent ---Formulas---
 * @desc The formula used to determine the maximum level.
 * level - current level     multiplier - multiplier value
 * @default level * multiplier / 100
 *
 * @param Minimum Level Formula
 * @parent ---Formulas---
 * @desc The formula used to determine the minimum level.
 * level - current level     multiplier - multiplier value
 * @default level * multiplier / 100
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_EnemyLevels.
 * Make sure this plugin is located under YEP_EnemyLevels in the plugin list.
 *
 * Sometimes, players would like to be able to increase or decrease the
 * difficulty of your game at their own accord. The Difficulty Slider becomes a
 * feature accessible from the game's option menu with this plugin installed.
 * There, the player is able to alter the level of the enemies that appear in
 * battle within a certain range (set by you, the developer).
 *
 * The Difficulty Slider will only alter the level of the enemies and nothing
 * else. Therefore, a 200% difficulty will mean only a 200% increase in level
 * but not necessarily a 200% increase in ATK, for example. The enemies' ATK
 * value will be based off of its ATK at 200% the original level.
 *
 * If the Difficulty Slider is disabled in the game, then the level multiplier
 * will revert back to 100%. You can enable and disable this feature at will
 * through plugin commands.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * There is a notetag you can use for the Difficulty Slider plugin.
 *
 * Enemy Notetag:
 *
 *   <Unaffected by Difficulty Slider>
 *   - This will make the enemy's level unaffected by the difficulty slider,
 *   meaning the enemy will always be at 100% its current calculated level.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * For those who wish to show/hide the Difficulty Slider from the options menu
 * midway through the game, you can control it using these plugin commands:
 *
 * Plugin Commands:
 *
 *   ShowDifficultySlider
 *   - This will show the Difficulty Slider and enable it making it apply to
 *   all enemies in the game that do not have an unaffected notetag.
 *
 *   HideDifficultySlider
 *   - This will hide the Difficulty Slider and also disable the slider's
 *   effects on enemy levels in the game.
 *
 * ============================================================================
 * Additional Info
 * ============================================================================
 *
 * For those who wish to use the Difficulty Slider in script calls, you can
 * find out the value the player has set using:
 *
 *   ConfigManager.difficultySlider
 *
 * This value will return a whole number. A difficulty setting of 100% will
 * yield 100 and a difficulty setting of 200% will yield 200. Therefore, if you
 * wish to make a check that appears only on higher difficulties, you can use
 * the following:
 *
 *   if (ConfigManager.difficultySlider >= 200) {
 *     // Do stuff
 *   }
 *
 * Have fun!
 *
 * ============================================================================
 * Options Core Settings - Adding the New Options
 * ============================================================================
 *
 * If you are using YEP_OptionsCore.js, you can add a new Option using this
 * plugin. Here's the following code/parameter settings you can use with it.
 *
 * ---------
 * Settings:
 * ---------
 * 
 * Name:
 * \i[87]Enemy Difficulty
 *
 * Help Description:
 * Determines the level strength of enemies.
 *
 * Symbol:
 * difficultySlider
 *
 * Show/Hide:
 * if (Imported.YEP_X_DifficultySlider) {
 *   show = $gameSystem.showDifficultySlider();
 * } else {
 *   show = false;
 * }
 *
 * Enable:
 * enabled = true;
 *
 * Ext:
 * ext = 0;
 *
 * ----------
 * Functions:
 * ----------
 * 
 * Make Option Code:
 * this.addCommand(name, symbol, enabled, ext);
 *
 * Draw Option Code:
 * var rect = this.itemRectForText(index);
 * var statusWidth = this.statusWidth();
 * var titleWidth = rect.width - statusWidth;
 * this.resetTextColor();
 * this.changePaintOpacity(this.isCommandEnabled(index));
 * this.drawOptionsName(index);
 * var value = this.getConfigValue(symbol);
 * var rate = value / Yanfly.Param.DSliderMaxDif;
 * var gaugeColor1 = this.textColor(28);
 * var gaugeColor2 = this.textColor(29);
 * this.drawOptionsGauge(index, rate, gaugeColor1, gaugeColor2);
 * this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'center');
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value += Yanfly.Param.DSliderChange;
 * if (value > Yanfly.Param.DSliderMaxDif) value = Yanfly.Param.DSliderMinDif;
 * value = value.clamp(Yanfly.Param.DSliderMinDif, Yanfly.Param.DSliderMaxDif);
 * this.changeValue(symbol, value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value += Yanfly.Param.DSliderChange;
 * value = value.clamp(Yanfly.Param.DSliderMinDif, Yanfly.Param.DSliderMaxDif);
 * this.changeValue(symbol, value);
 * 
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value -= Yanfly.Param.DSliderChange;
 * value = value.clamp(Yanfly.Param.DSliderMinDif,
 * Yanfly.Param.DSliderMaxDif);
 * this.changeValue(symbol, value);
 *
 * Default Config Code:
 * // Empty. Provided by this plugin.
 *
 * Save Config Code:
 * // Empty. Provided by this plugin.
 *
 * Load Config Code:
 * // Empty. Provided by this plugin.
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
 * - Compatibility update for YEP_OptionsCore.js.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Bug fixed: Error with pressing right on the difficulty slider causing
 * the game to crash unexpectedly.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_EnemyLevels) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_DifficultySlider');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.DSliderOptionsCmd = String(Yanfly.Parameters['Command Text']);
Yanfly.Param.DSliderShow = eval(String(Yanfly.Parameters['Default Show']));

Yanfly.Param.DSliderDefDif = Number(Yanfly.Parameters['Default Difficulty']);
Yanfly.Param.DSliderMinDif = Number(Yanfly.Parameters['Minimum Difficulty']);
Yanfly.Param.DSliderMaxDif = Number(Yanfly.Parameters['Maximum Difficulty']);
Yanfly.Param.DSliderChange = Number(Yanfly.Parameters['Change Increment']);

Yanfly.Param.DSliderBase = String(Yanfly.Parameters['Base Level Formula']);
Yanfly.Param.DSliderMax = String(Yanfly.Parameters['Maximum Level Formula']);
Yanfly.Param.DSliderMin = String(Yanfly.Parameters['Maximum Level Formula']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.DSlider.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.DSlider.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_DifficultySlider) {
    this.processDSliderNotetags1($dataEnemies);
    Yanfly._loaded_YEP_DifficultySlider = true;
  }
  
  return true;
};

DataManager.processDSliderNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.difficultySliderAffected = true;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<UNAFFECTED BY DIFFICULTY SLIDER>/i)) {
        obj.difficultySliderAffected = false;
      }
    }
  }
};

//=============================================================================
// ConfigManager
//=============================================================================

ConfigManager.difficultySlider = Yanfly.Param.DSliderDefDif;

Yanfly.DSlider.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
  var config = Yanfly.DSlider.ConfigManager_makeData.call(this);
  config.difficultySlider = this.difficultySlider;
  return config;
};

Yanfly.DSlider.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
  Yanfly.DSlider.ConfigManager_applyData.call(this, config);
  this.difficultySlider = this.readConfigDifficultySlider(config,
    'difficultySlider');
};

ConfigManager.readConfigDifficultySlider = function(config, name) {
  var value = config[name];
  if (value !== undefined) {
    return Number(value).clamp(Yanfly.Param.DSliderMinDif,
      Yanfly.Param.DSliderMaxDif);
  } else {
    return Yanfly.Param.DSliderDefDif.clamp(Yanfly.Param.DSliderMinDif,
      Yanfly.Param.DSliderMaxDif);
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.DSlider.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.DSlider.Game_System_initialize.call(this);
  this.initDifficultySliderSettings();
};

Game_System.prototype.initDifficultySliderSettings = function() {
  this._showDifficultySlider = Yanfly.Param.DSliderShow;
};

Game_System.prototype.showDifficultySlider = function() {
  if (this._showDifficultySlider === undefined) {
    this.initDifficultySliderSettings();
  }
  return this._showDifficultySlider;
};

Game_System.prototype.setDifficultySlider = function(value) {
  if (this._showDifficultySlider === undefined) {
    this.initDifficultySliderSettings();
  }
  this._showDifficultySlider = value;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.isDifficultySliderAffected = function() {
  return this.enemy().difficultySliderAffected && 
    $gameSystem.showDifficultySlider();
};

Yanfly.DSlider.Game_Enemy_setupMinimumLevel =
  Game_Enemy.prototype.setupMinimumLevel;
Game_Enemy.prototype.setupMinimumLevel = function() {
  var level = Yanfly.DSlider.Game_Enemy_setupMinimumLevel.call(this);
  if (this.isDifficultySliderAffected()) {
    var multiplier = ConfigManager.difficultySlider
    var code = Yanfly.Param.DSliderMin;
    try {
      level = eval(code);
    } catch (e) {
      level = level * multiplier / 100;
      Yanfly.Util.displayError(e, code, 
        'DIFFICULTY SLIDER MINIMUM LEVEL ERROR');
    }
  }
  return parseInt(level);
};

Yanfly.DSlider.Game_Enemy_setupMaximumLevel =
  Game_Enemy.prototype.setupMaximumLevel;
Game_Enemy.prototype.setupMaximumLevel = function() {
  var level = Yanfly.DSlider.Game_Enemy_setupMaximumLevel.call(this);
  if (this.isDifficultySliderAffected()) {
    var multiplier = ConfigManager.difficultySlider
    var code = Yanfly.Param.DSliderMax;
    try {
      level = eval(code);
    } catch (e) {
      level = level * multiplier / 100;
      Yanfly.Util.displayError(e, code, 
        'DIFFICULTY SLIDER MAXIMUM LEVEL ERROR');
    }
  }
  return parseInt(level);
};

Yanfly.DSlider.Game_Enemy_getSetupLevel = Game_Enemy.prototype.getSetupLevel;
Game_Enemy.prototype.getSetupLevel = function() {
  var level = Yanfly.DSlider.Game_Enemy_getSetupLevel.call(this);
  if (this.isDifficultySliderAffected()) {
    var multiplier = ConfigManager.difficultySlider
    var code = Yanfly.Param.DSliderBase;
    try {
      level = eval(code);
    } catch (e) {
      level = level * multiplier / 100;
      Yanfly.Util.displayError(e, code, 
        'DIFFICULTY SLIDER BASE LEVEL ERROR');
    }
  }
  return parseInt(level);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.DSlider.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.DSlider.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'ShowDifficultySlider') {
    $gameSystem.setDifficultySlider(true);
  } else if (command === 'HideDifficultySlider') {
    $gameSystem.setDifficultySlider(false);
  }
};

//=============================================================================
// Window_Options
//=============================================================================

Yanfly.DSlider.Window_Options_addGeneralOptions =
  Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
  Yanfly.DSlider.Window_Options_addGeneralOptions.call(this);
  if (Imported.YEP_OptionsCore) return;
  if ($gameSystem.showDifficultySlider()) this.addDifficultySliderOptions();
};

Window_Options.prototype.addDifficultySliderOptions = function() {
  this.addCommand(Yanfly.Param.DSliderOptionsCmd, 'difficultySlider');
};

Yanfly.DSlider.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
  var symbol = this.commandSymbol(index);
  var value = this.getConfigValue(symbol);
  if (symbol === 'difficultySlider') {
    return Yanfly.Util.toGroup(value) + '%';
  } else {
    return Yanfly.DSlider.Window_Options_statusText.call(this, index);
  }
};

if (!Imported.YEP_OptionsCore) {

Yanfly.DSlider.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'difficultySlider') {
    var value = this.getConfigValue(symbol);
    value += Yanfly.Param.DSliderChange;
    if (value > Yanfly.Param.DSliderMaxDif) value = Yanfly.Param.DSliderMinDif;
    value = value.clamp(Yanfly.Param.DSliderMinDif,
      Yanfly.Param.DSliderMaxDif);
    this.changeValue(symbol, value);
  } else {
    Yanfly.DSlider.Window_Options_processOk.call(this);
  }
};

Yanfly.DSlider.Window_Options_cursorRight = 
  Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'difficultySlider') {
    var value = this.getConfigValue(symbol);
    value += Yanfly.Param.DSliderChange;
    value = value.clamp(Yanfly.Param.DSliderMinDif,
      Yanfly.Param.DSliderMaxDif);
    this.changeValue(symbol, value);
  } else {
    Yanfly.DSlider.Window_Options_cursorRight.call(this, wrap);
  }
};

Yanfly.DSlider.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'difficultySlider') {
    var value = this.getConfigValue(symbol);
    value -= Yanfly.Param.DSliderChange;
    value = value.clamp(Yanfly.Param.DSliderMinDif,
      Yanfly.Param.DSliderMaxDif);
    this.changeValue(symbol, value);
  } else {
    Yanfly.DSlider.Window_Options_cursorLeft.call(this, wrap);
  }
};

}; // Imported.YEP_OptionsCore


//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {

Yanfly.Util.toGroup = function(inVal) {
  return inVal;
}

}; // Yanfly.Util.toGroup

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
text += 'YEP_X_DifficultySlider requires YEP_EnemyLevels to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.yanfly.moe and ';
text += 'update to the latest version for the YEP_EnemyLevels plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.YEP_EnemyLevels