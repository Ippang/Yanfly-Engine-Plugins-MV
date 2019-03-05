//=============================================================================
// Yanfly Engine Plugins - Sectioned Gauges
// YEP_SectionedGauges.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SectionedGauges = true;

var Yanfly = Yanfly || {};
Yanfly.SecGauge = Yanfly.SecGauge || {};
Yanfly.SecGauge.version = 1.03;

//=============================================================================
 /*:
 * @plugindesc v1.03 Section up your gauges to make them easier to read.
 * @author Yanfly Engine Plugins + Tigress Collaboration
 *
 * @param ---Sections---
 * @default
 *
 * @param HP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your HP gauges?
 * @default 10
 *
 * @param MP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your MP gauges?
 * @default 4
 *
 * @param TP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your TP gauges?
 * @default 4
 *
 * @param ---Status Menu Core---
 * @default
 *
 * @param EXP Gauge Sections
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your EXP gauges?
 * @default 10
 *
 * @param Param Gauge Sections
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your Param gauges?
 * @default 10
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Plain old gauges can be kind of hard to read when they're a bit too long.
 * Make them more visually friendly by sectioning them up so the player has a
 * better idea of how much of a battler's HP, MP, or TP is left. You can set
 * how many sections you want for the gauges, too.
 *
 * This plugin is plug and play, but you can adjust the plugin parameters to
 * fit the settings and needs of your game. Adjust the values found in the
 * plugin's parameters to adjust the mentioned aspect to change up the sections
 * found in a gauge's HP, MP, or TP. Sections are divided up into percentile
 * parts of the gauge allowing for the player to easily read the percentile
 * value of an HP, MP, or TP gauge.
 *
 * The Status Menu Core also has compatibility with this plugin to display
 * sectioned gauges for the EXP gauges and the parameter gauges. Like with the
 * other plugin parameters, you can adjust the amount of sections added per
 * gauge with them to separate them for easier viewing.
 *
 * This is a collaboration plugin by Tigress and Yanfly to ensure compatibility
 * with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Bug fix: adjusted gauge positioning issues courtesy of Fragrarch.
 *
 * Version 1.01:
 * - Bug fix: Was missing a compatibility check.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_SegmentedGauges) {

var text = '================================================================\n';
text += 'You are trying to use YEP_SectionedGauges with YEP_SegmentedGauges.\n';
text += 'These two plugins cannot be used with each other. Please disable\n';
text += 'one or the other.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_SectionedGauges');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.SectionGaugesHp = Number(Yanfly.Parameters['HP Gauge Sections']);
Yanfly.Param.SectionGaugesMp = Number(Yanfly.Parameters['MP Gauge Sections']);
Yanfly.Param.SectionGaugesTp = Number(Yanfly.Parameters['TP Gauge Sections']);

Yanfly.Param.SectionGaugesExp = Number(Yanfly.Parameters['EXP Gauge Sections']);
Yanfly.Param.SectionGaugesParam =
  Number(Yanfly.Parameters['Param Gauge Sections']);

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.SecGauge.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
  this.clearGaugeSections();
  Yanfly.SecGauge.Window_Base_initialize.call(this, x, y, width, height);
};

Yanfly.SecGauge.Window_Base_drawActorHp = Window_Base.prototype.drawActorHp;
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesHp);
  Yanfly.SecGauge.Window_Base_drawActorHp.call(this, actor, x, y, width);
  this.clearGaugeSections();
};

Yanfly.SecGauge.Window_Base_drawActorMp = Window_Base.prototype.drawActorMp;
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesMp);
  Yanfly.SecGauge.Window_Base_drawActorMp.call(this, actor, x, y, width);
  this.clearGaugeSections();
};

Yanfly.SecGauge.Window_Base_drawActorTp = Window_Base.prototype.drawActorTp;
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesTp);
  Yanfly.SecGauge.Window_Base_drawActorTp.call(this, actor, x, y, width);
  this.clearGaugeSections();
};

Window_Base.prototype.setGaugeSections = function(sections) {
  this._gaugeSections = sections;
};

Window_Base.prototype.clearGaugeSections = function() {
  this._gaugeSections = 0;
};

Yanfly.SecGauge.Window_Base_drawGauge = Window_Base.prototype.drawGauge;
Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  Yanfly.SecGauge.Window_Base_drawGauge.call(this, dx, dy, dw, rate, 
    color1, color2);
  this.drawGaugeSections(dx, dy, dw, 0, 0);
};

Window_Base.prototype.drawGaugeSections = function(dx, dy, dw, xB, yB) {
  var sections = this._gaugeSections;
  if (sections) {
    var gaugeH = this.gaugeHeight() - 2;
    var gaugeY = dy + this.lineHeight() - gaugeH - 2 + yB;
    if (this.isGaugeOutline()) {
      dx += 1;
      dw -= 2;
      gaugeY -= 2;
    }
    dx += xB;
    var sectionWidth = dw / sections;
    if (sectionWidth > 0) {
      var color = this.gaugeBackColor();
      for (var i = 1; i < sections; ++i) {
        dx += sectionWidth;
        this.contents.fillRect(dx, gaugeY, 1, gaugeH, color);
      }
    }
  }
};

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// YEP_CoreEngine
//=============================================================================

if (!Imported.YEP_CoreEngine) {

Window_Base.prototype.gaugeHeight = function() {
  return 6;
};

}; // Imported.YEP_CoreEngine

Window_Base.prototype.isGaugeOutline = function() {
  if (this._isGaugeOutline === undefined) {
    if (Imported.YEP_CoreEngine) {
      this._isGaugeOutline = eval(Yanfly.Param.GaugeOutline);
    } else {
      this._isGaugeOutline = false;
    }
  }
  return this._isGaugeOutline;
};

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// YEP_X_VisualHpGauge
//=============================================================================

if (Imported.YEP_X_VisualHpGauge) {

Yanfly.SecGauge.Window_VisualHPGauge_drawActorHp =
  Window_VisualHPGauge.prototype.drawActorHp;
Window_VisualHPGauge.prototype.drawActorHp = function(actor, x, y, w) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesHp);
  Yanfly.SecGauge.Window_VisualHPGauge_drawActorHp.call(this, actor, x, y, w);
  this.clearGaugeSections();
};

Yanfly.SecGauge.Window_VisualHPGauge_drawGauge =
  Window_VisualHPGauge.prototype.drawGauge;
Window_VisualHPGauge.prototype.drawGauge =
function(dx, dy, dw, rate, color1, color2) {
  Yanfly.SecGauge.Window_VisualHPGauge_drawGauge.call(this, dx, dy, dw, rate,
    color1, color2);
  this.drawGaugeSections(dx, dy, dw, 0, 1);
};

}; // Imported.YEP_X_VisualHpGauge

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// YEP_StatusMenuCore
//=============================================================================

if (Imported.YEP_StatusMenuCore) {

Yanfly.SecGauge.Window_StatusInfo_drawExpGauge =
  Window_StatusInfo.prototype.drawExpGauge;
Window_StatusInfo.prototype.drawExpGauge = function(actor, rate, rect) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesExp);
  Yanfly.SecGauge.Window_StatusInfo_drawExpGauge.call(this, actor, rate, rect);
  this.clearGaugeSections();
};

Yanfly.SecGauge.Window_StatusInfo_drawParamGauge =
  Window_StatusInfo.prototype.drawParamGauge;
Window_StatusInfo.prototype.drawParamGauge = function(dx, dy, dw, paramId) {
  this.setGaugeSections(Yanfly.Param.SectionGaugesParam);
  var rate = Yanfly.SecGauge.Window_StatusInfo_drawParamGauge.call(this, dx, dy,
    dw, paramId);
  this.clearGaugeSections();
  return rate;
};

}; // Imported.YEP_StatusMenuCore

//=============================================================================
// End of File
//=============================================================================
}; // Imported.YEP_SegmentedGauges