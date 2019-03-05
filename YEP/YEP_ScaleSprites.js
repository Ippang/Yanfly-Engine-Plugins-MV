//=============================================================================
// Yanfly Engine Plugins - Scale Sprites
// YEP_ScaleSprites.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ScaleSprites = true;

var Yanfly = Yanfly || {};
Yanfly.ScSpr = Yanfly.ScSpr || {};
Yanfly.ScSpr.version = 1.01

//=============================================================================
 /*:
 * @plugindesc v1.01 This is a plugin that lets you scale sprites of
 * smaller or larger sizes to certain dimensions.
 * @author Yanfly Engine Plugins
 *
 * @param Smoothing
 * @type boolean
 * @on Smoothing
 * @off Normal
 * @desc Enable bitmap smoothing for scaled sprites?
 * YES - true     NO - false
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * Sometimes we want to use sprites from different sizes other than 48x48 for
 * our standard sprites. But sometimes, we'd also like to scale them from the
 * actual size they're at, too. For example, if your sprite would be 128x128
 * tall and you want it to appear 48x48 in-game, this plugin will let that
 * effect happen.
 *
 * To accomplish such a feat, when naming your scaled character sprite, add the
 * following text to its name anywhere:
 *
 * [48x48]
 *
 * For example, if you had 'Actor2.png', rename it to 'Actor2 [48x48].png' to
 * make it appear 48x48 in game. Note that due to Pixi's scaling algorithm,
 * this effect works better when scaling down than scaling up.
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

Yanfly.Parameters = PluginManager.parameters('YEP_ScaleSprites');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ScSprSmoothing = eval(String(Yanfly.Parameters['Smoothing']));

//=============================================================================
// ImageManager
//=============================================================================

ImageManager.loadCharacterSmooth = function(filename, hue) {
  var smooth = Yanfly.Param.ScSprSmoothing;
  return this.loadBitmap('img/characters/', filename, hue, smooth);
};

//=============================================================================
// Sprite_Character
//=============================================================================

Yanfly.ScSpr.Sprite_Character_setCharacterBitmap =
  Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
  if (this._characterName.match(/\[(\d+)x(\d+)\]/i)) {
    this._scaledWidth = parseInt(RegExp.$1);
    this._scaledHeight = parseInt(RegExp.$2);
    this.setCharacterBitmapScaled();
  } else {
    this._scaledWidth = 0;
    this._scaledHeight = 0;
    Yanfly.ScSpr.Sprite_Character_setCharacterBitmap.call(this);
    this.scale.x = 1.0;
    this.scale.y = 1.0;
  }
};

Sprite_Character.prototype.setCharacterBitmapScaled = function() {
  this.bitmap = ImageManager.loadCharacterSmooth(this._characterName);
  this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
};

Sprite_Character.prototype.isCharacterBitmapScaled = function() {
  return this._scaledWidth;
};

Yanfly.ScSpr.Sprite_Character_patternWidth =
  Sprite_Character.prototype.patternWidth;
Sprite_Character.prototype.patternWidth = function() {
  if (this.isCharacterBitmapScaled()) {
    this.scale.x = this._scaledWidth / this.width;
  }
  return Yanfly.ScSpr.Sprite_Character_patternWidth.call(this);
};

Yanfly.ScSpr.Sprite_Character_patternHeight =
  Sprite_Character.prototype.patternHeight;
Sprite_Character.prototype.patternHeight = function() {
  if (this.isCharacterBitmapScaled()) {
    this.scale.y = this._scaledHeight / this.height;
  }
  return Yanfly.ScSpr.Sprite_Character_patternHeight.call(this);
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.ScSpr.Window_Base_drawCharacter =
  Window_Base.prototype.drawCharacter;
Window_Base.prototype.drawCharacter = function(name, index, x, y) {
  if (name.match(/\[(\d+)x(\d+)\]/i)) {
    var width = parseInt(RegExp.$1);
    var height = parseInt(RegExp.$1);
    this.drawScaledCharacter(name, index, x, y, width, height);
  } else {
    Yanfly.ScSpr.Window_Base_drawCharacter.call(this, name, index, x, y);
  }
};

Window_Base.prototype.drawScaledCharacter = function(name, index, x, y, w, h) {
  var bitmap = ImageManager.loadCharacter(name);
  var big = ImageManager.isBigCharacter(name);
  var pw = bitmap.width / (big ? 3 : 12);
  var ph = bitmap.height / (big ? 4 : 8);
  var n = index;
  var sx = (n % 4 * 3 + 1) * pw;
  var sy = (Math.floor(n / 4) * 4) * ph;
  this.contents.blt(bitmap, sx, sy, pw, ph, x - w / 2, y - h, w, h);
};

//=============================================================================
// End of File
//=============================================================================

