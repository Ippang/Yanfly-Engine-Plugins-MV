//=============================================================================
// Yanfly Engine Plugins - Event Region Trigger
// YEP_EventRegionTrigger.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_EventRegionTrigger = true;

var Yanfly = Yanfly || {};
Yanfly.EvReTr = Yanfly.EvReTr || {};
Yanfly.EvReTr.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Allows events to trigger by being in specific regions
 * instead of needing to exactly next to or on top of them.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * In RPG Maker MV, events can only trigger when you are either standing next
 * to them or on top of them. This plugin lets you bind their activation to
 * different events onto regions, making them trigger if the player is standing
 * on the designated region first before talking to them through the Action
 * Button, Player Touch, Event Touch, Autorun, and/or Parallels giving them
 * multitudes of ways to trigger events. All of these can be done by simply
 * adding Comment Tags into an event's page.
 *
 * This is different from Region Events, which causes a Common Event to autorun
 * once the player has stepped onto one of those regions. This plugin binds
 * actual map events to regions instead.
 *
 * ============================================================================
 * Comment Tags
 * ============================================================================
 *
 * By default, event pages have no Region Triggers. They have to be added
 * manually per event page using comment tags. You can use the following
 * comment tags to give each event page a region trigger.
 *
 * ---
 *
 * Comment Tags:
 *
 *   <Region Trigger: x>
 *   <Region Triggers: x, x, x>
 *   - Replace 'x' with the ID's of the regions you wish to let the event
 *   trigger if the player is standing within a tile with that region ID and
 *   triggering the event page's activation trigger requirements.
 *
 * ---
 *
  * Event region triggers behave differently depending on the event page's
 * trigger type. Here is how the event page will activate based on the trigger:
 *
 *   Action Button
 *   - As long as the player is within the matching region ID, pressing
 *   the OK button will activate the event.
 *
 *   Player Touch
 *   - If the player moves within the matching region ID, the event will
 *   automatically activate. The player can also press the OK button to trigger
 *   the event.
 *
 *   Event Touch
 *   - If the player moves within the matching region ID, the event will
 *   automatically activate. The player can also press the OK button to trigger
 *   the event.
 *
 *   Autorun
 *   - If the player moves within the matching region ID, the event will
 *   automatically activate. There is no escaping this autorun unless you have
 *   a way of turning it off.
 *
 *   Parallel
 *   - If the player moves within the matching region ID, the event will
 *   automatically activate. The player is granted a few frames of movement
 *   each time the parallel process loops.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Fixed a bug where parallels don't loop.
 *
 * Version 1.01:
 * - Fixed a bug where Autorun and Parallel triggers won't run unless they had
 * a region associated with them.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 */
//=============================================================================

//=============================================================================
// Game_CharacterBase
//=============================================================================

Yanfly.EvReTr.Game_CharacterBase_increaseSteps =
  Game_CharacterBase.prototype.increaseSteps;
Game_CharacterBase.prototype.increaseSteps = function() {
  Yanfly.EvReTr.Game_CharacterBase_increaseSteps.call(this);
  this.eventProximityIncreaseSteps();
};

Game_CharacterBase.prototype.eventProximityIncreaseSteps = function() {
};

//=============================================================================
// Game_Player
//=============================================================================

Yanfly.EvReTr.Game_Player_startMapEvent = Game_Player.prototype.startMapEvent;
Game_Player.prototype.startMapEvent = function(x, y, triggers, normal) {
  Yanfly.EvReTr.Game_Player_startMapEvent.call(this, x, y, triggers, normal);
  if (!$gameMap.isEventRunning() && !$gameMap.isAnyEventStarting()) {
    this.startEventRegionTrigger(triggers, normal);
  }
};

Game_Player.prototype.startEventRegionTrigger = function(triggers, normal) {
  var events = $gameMap.events();
  var length = events.length;
  for (var i = 0; i < length; ++i) {
    var ev = events[i];
    if (!ev) continue;
    if (!ev.isTriggerIn(triggers)) continue;
    if (!ev._regionTriggerList) continue;
    if (ev._regionTriggerList.length <= 0) continue;
    if (this.meetPlayerRegionTriggerConditions(ev)) ev.start();
  }
};

Game_Player.prototype.meetPlayerRegionTriggerConditions = function(ev) {
  var regionId = this.regionId();
  return ev._regionTriggerList && ev._regionTriggerList.contains(regionId);
};

//=============================================================================
// Game_Event
//=============================================================================

Yanfly.EvReTr.Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
  this._initialAutoRegionTriggerBypass = true;
  Yanfly.EvReTr.Game_Event_setupPage.call(this);
  this._initialAutoRegionTriggerBypass = false;
  this.setupEventRegionTriggerSettings();
};

Game_Event.prototype.setupEventRegionTriggerSettings = function() {
  this.initEventRegionTriggerSettings();
  this.setupEventRegionTriggerCommentTags();
};

Game_Event.prototype.initEventRegionTriggerSettings = function() {
  this._regionTriggerList = [];
};

Game_Event.prototype.setupEventRegionTriggerCommentTags = function() {
  if (!this.page()) return;
  var note1 = /<REGION (?:TRIGGER|TRIGGERS):[ ](\d+)>/i;
  var note2 = /<REGION (?:TRIGGER|TRIGGERS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var list = this.list();
  var length = list.length;
  for (var i = 0; i < length; ++i) {
    var ev = list[i];
    if ([108, 408].contains(ev.code)) {
      if (ev.parameters[0].match(note1)) {
        this._regionTriggerList.push(parseInt(RegExp.$1));
      } else if (ev.parameters[0].match(note2)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        this._regionTriggerList = this._regionTriggerList.concat(array);
      }
    }
  }
};

Game_Event.prototype.eventProximityIncreaseSteps = function() {
  if (!$gameMap.isEventRunning() && !$gameMap.isAnyEventStarting()) {
    $gamePlayer.startEventRegionTrigger([2], this.isNormalPriority());
  }
};

Yanfly.EvReTr.Game_Event_checkEventTriggerAuto =
  Game_Event.prototype.checkEventTriggerAuto;
Game_Event.prototype.checkEventTriggerAuto = function() {
  if (this._trigger !== 3) return;
  if (this._initialAutoRegionTriggerBypass) return;
  if (!this.meetEventRegionTriggerConditions(false)) return;
  Yanfly.EvReTr.Game_Event_checkEventTriggerAuto.call(this);
};

Yanfly.EvReTr.Game_Event_updateParallel = Game_Event.prototype.updateParallel;
Game_Event.prototype.updateParallel = function() {
  if (!this._interpreter) return;
  if (!this.meetEventRegionTriggerConditions(true)) return;
  Yanfly.EvReTr.Game_Event_updateParallel.call(this);
};

Game_Event.prototype.meetEventRegionTriggerConditions = function(parallel) {
  if (!parallel && $gameMap.isEventRunning()) return false;
  if (!parallel && $gameMap.isAnyEventStarting()) return false;
  if (!this._regionTriggerList) return true;
  if (this._regionTriggerList.length <= 0) return true;
  return $gamePlayer.meetPlayerRegionTriggerConditions(this);
};

//=============================================================================
// End of File
//=============================================================================