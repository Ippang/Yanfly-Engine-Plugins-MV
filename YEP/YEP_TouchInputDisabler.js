//=============================================================================
// Yanfly Engine Plugins - Touch Input Disabler
// YEP_TouchInputDisabler.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_TouchInputDisabler = true;

var Yanfly = Yanfly || {};
Yanfly.TID = Yanfly.TID || {};
Yanfly.TID.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 Sometimes, we just want to disable mouse and touch input
 * for our games.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, we just want to disable the mouse and touch controls for our
 * games. This small plugin lets you control just which parts of the mouse and
 * touch controls you want to disable out of everything available.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Everything related to the mouse/touch input is disabled by the default
 * plugin parameters. Change the settings to fit your game. If a setting is
 * on/true, then the mouse/touch input for that setting will be enabled.
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
 * @param ---Mouse---
 * @default
 *
 * @param Press Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Pressing.
 * @default false
 *
 * @param Trigger Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Triggering.
 * @default false
 *
 * @param Repeat Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Repeating.
 * @default false
 *
 * @param Long Press Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Long Pressing.
 * @default false
 *
 * @param Cancel Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Cancel.
 * @default false
 *
 * @param Move Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Moving.
 * @default false
 *
 * @param Release Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Releasing.
 * @default false
 *
 * @param Wheel Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for the Scroll Wheel.
 * @default false
 *
 * @param Map Move Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Map Movement. If enabled,
 * requires Press and Trigger checks to be true.
 * @default false
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_TouchInputDisabler');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.InputDisabler = {
  Press: eval(String(Yanfly.Parameters['Press Check'])),
  Trigger: eval(String(Yanfly.Parameters['Trigger Check'])),
  Repeat: eval(String(Yanfly.Parameters['Repeat Check'])),
  LongPress: eval(String(Yanfly.Parameters['Long Press Check'])),
  Cancel: eval(String(Yanfly.Parameters['Cancel Check'])),
  Move: eval(String(Yanfly.Parameters['Move Check'])),
  Release: eval(String(Yanfly.Parameters['Release Check'])),
  Wheel: eval(String(Yanfly.Parameters['Wheel Check'])),
  MapMove: eval(String(Yanfly.Parameters['Map Move Check'])),
}

//=============================================================================
// TouchInput
//=============================================================================

Yanfly.TID.TouchInput_isPressed = TouchInput.isPressed;
TouchInput.isPressed = function() {
  if (!Yanfly.Param.InputDisabler.Press) return false;
  return Yanfly.TID.TouchInput_isPressed.call(this);
};

Yanfly.TID.TouchInput_isTriggered = TouchInput.isTriggered;
TouchInput.isTriggered = function() {
  if (!Yanfly.Param.InputDisabler.Trigger) return false;
  return Yanfly.TID.TouchInput_isTriggered.call(this);
};

Yanfly.TID.TouchInput_isRepeated = TouchInput.isRepeated;
TouchInput.isRepeated = function() {
  if (!Yanfly.Param.InputDisabler.Repeat) return false;
  return Yanfly.TID.TouchInput_isRepeated.call(this);
};

Yanfly.TID.TouchInput_isLongPressed = TouchInput.isLongPressed;
TouchInput.isLongPressed = function() {
  if (!Yanfly.Param.InputDisabler.LongPress) return false;
  return Yanfly.TID.TouchInput_isLongPressed.call(this);
};

Yanfly.TID.TouchInput_isCancelled = TouchInput.isCancelled;
TouchInput.isCancelled = function() {
  if (!Yanfly.Param.InputDisabler.Cancel) return false;
  return Yanfly.TID.TouchInput_isCancelled.call(this);
};

Yanfly.TID.TouchInput_isMoved = TouchInput.isMoved;
TouchInput.isMoved = function() {
  if (!Yanfly.Param.InputDisabler.Move) return false;
  return Yanfly.TID.TouchInput_isMoved.call(this);
};

Yanfly.TID.TouchInput_isReleased = TouchInput.isReleased;
TouchInput.isReleased = function() {
  if (!Yanfly.Param.InputDisabler.Release) return false;
  return Yanfly.TID.TouchInput_isReleased.call(this);
};

Object.defineProperty(TouchInput, 'wheelX', {
  get: function() {
    if (!Yanfly.Param.InputDisabler.Wheel) return 0;
    return this._wheelX;
  },
  configurable: true
});

Object.defineProperty(TouchInput, 'wheelY', {
  get: function() {
    if (!Yanfly.Param.InputDisabler.Wheel) return 0;
    return this._wheelY;
  },
  configurable: true
});

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.TID.Scene_Map_processMapTouch =
  Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
  if (!Yanfly.Param.InputDisabler.MapMove) return;
  Yanfly.TID.Scene_Map_processMapTouch.call(this);
};

//=============================================================================
// End of File
//=============================================================================