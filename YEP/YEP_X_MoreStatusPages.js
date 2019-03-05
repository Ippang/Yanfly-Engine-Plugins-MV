//=============================================================================
// Yanfly Engine Plugins - Status Menu Extension - More Status Menu Pages
// YEP_X_MoreStatusPages.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MoreStatusPages = true;

var Yanfly = Yanfly || {};
Yanfly.MSMP = Yanfly.MSMP || {};
Yanfly.MSMP.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 (Requires YEP_StatusMenuCore.js) Add more pages to
 * your status menu however you want!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_StatusMenuCore. Make sure this plugin is located
 * under YEP_StatusMenuCore in the plugin list.
 *
 * Sometimes, you'll want to be able to place more information in each party
 * member's status menu page. This extension menu allows you to create as many
 * custom pages as you want and insert whatever text inside of them! Use this
 * to create custom backstories, additional information regarding the actors,
 * and more!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Follow these steps to add more status pages to your status menu list:
 *
 *   1. Open your YEP_StatusMenuCore plugin in the plugin list. Look for the
 *      'Command Order' plugin parameter.
 *
 *   2. Inside it, place the text 'MorePages' where you want the extra Status
 *      Menu Pages to go.
 *
 *   3. Press OK and close the Plugin Manager.
 *
 *   4. Save your game project.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Place the following notetags inside of an actor's notebox that you wish to
 * add more status menu pages to.
 *
 * Actor Notetags:
 *
 *   ========================================================================
 *
 *   <Status Menu Page: title>
 *    text
 *    text
 *   </Status Menu Page: title>
 *   - Replace 'title' with the title of the status menu page you wish for it
 *   to display in the command window. Insert as many lines of 'text' as you
 *   see fit for your extra status menu profile. Inserting multiple setups of
 *   this notetag will allow you to have more page entries in the status menu.
 *
 *   Note: You can use text codes for the 'text' entries.
 *
 *   -- Examples ---
 *
 *   <Status Menu Page: Origin>
 *    \n[1] is originally from the kingdom of Dragnof, a country that
 *    existed 400 years in the past; the population was made up of both
 *    humans and Dragons co-existing peacefully with each other.
 *   </Status Menu Page: Origin>
 *
 *   <Status Menu Page: Discipline>
 *    \n[1] firmly believes in noblesse oblige, where the strong and
 *    privileged should act with generosity and nobility towards those
 *    less privileged.
 *   </Status Menu Page: Discipline>
 *
 *   ========================================================================
 *
 *   <Status Menu Page title Switch: x>
 *   <Status Menu Page title Switch: x, x, x>
 *   - Replace 'title' with the title of the status menu page you wish for this
 *   notetag to affect. Replace 'x' with a switch ID that is required to be ON
 *   in order for this status menu page to show up in the actor's status menu
 *   profile. If you use multiple switches, all the switches must be on in
 *   order for this status menu page to appear.
 *
 *   -- Examples ---
 *
 *   <Status Menu Page Origin Switch: 1>
 *   <Status Menu Page Discipline Switch: 5, 6, 7, 8, 9, 10>
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Fixed a bug that crashed the game if certain actors did not have the same
 * status page keys as others when changing between actors.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_StatusMenuCore && Yanfly.Status.version &&
  Yanfly.Status.version >= 1.02) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_MoreStatusPages');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.Variables = String(Yanfly.Parameters['Variables']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.MSMP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.MSMP.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_MoreStatusPages) {
    this.processMoreStatusMenuPagesNotetags1($dataActors);
    Yanfly._loaded_YEP_X_MoreStatusPages = true;
  }
  
  return true;
};

DataManager.processMoreStatusMenuPagesNotetags1 = function(group) {
  var note1 = /<STATUS MENU PAGE:[ ](.*)>/i;
  var note2 = /<\/STATUS MENU PAGE:[ ](.*)>/i;
  var note3 = /<STATUS MENU PAGE[ ](.*)[ ]SWITCH:[ ]*(\d+(?:\s*,\s*\d+)*)>/i
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.customStatusMenuPages = [];
    obj.customStatusMenuPagesData = {};
    obj.customStatusMenuPageRequirement = {};
    var evalMode = 'none';
    var pageKey = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        evalMode = 'custom status menu page';
        var pageKey = String(RegExp.$1);
        obj.customStatusMenuPages.push(pageKey);
        obj.customStatusMenuPagesData[pageKey] = [];
      } else if (line.match(note2)) {
        evalMode = 'none';
        pageKey = 'none';
      } else if (evalMode === 'custom status menu page') {
        obj.customStatusMenuPagesData[pageKey].push(line);
      } else if (line.match(note3)) {
        var pageKey = String(RegExp.$1);
        obj.customStatusMenuPageRequirement[pageKey] =
          obj.customStatusMenuPageRequirement[pageKey] || [];
        var array = JSON.parse('[' + RegExp.$2.match(/\d+/g) + ']');
        obj.customStatusMenuPageRequirement[pageKey] =
          obj.customStatusMenuPageRequirement[pageKey].concat(array);
      }
    }
  }
};

//=============================================================================
// Window_StatusCommand
//=============================================================================

Yanfly.MSMP.Window_StatusCommand_createCommand =
  Window_StatusCommand.prototype.createCommand;
Window_StatusCommand.prototype.createCommand = function(command) {
  Yanfly.MSMP.Window_StatusCommand_createCommand.call(this, command);
  command = command.toUpperCase();
  if (['MOREPAGES', 'MOREPAGE'].contains(command)) {
    this.addMoreStatusMenuPages();
  }
};

Yanfly.MSMP.Window_StatusCommand_setActor =
  Window_StatusCommand.prototype.setActor;
Window_StatusCommand.prototype.setActor = function(actor) {
  var prevActor = this._actor;
  Yanfly.MSMP.Window_StatusCommand_setActor.call(this, actor);
  this.clearCommandList();
  this.makeCommandList();
  this.refresh();
};

Window_StatusCommand.prototype.addMoreStatusMenuPages = function() {
  if (!this._actor) {
    return;
  }
  var order = this._actor.actor().customStatusMenuPages;
  if (!order) return;
  for (var i = 0; i < order.length; i++) {
    var pageKey = order[i];
    if (this.isShowStatusMenuPage(pageKey)) {
      this.addCommand(pageKey, 'morePages', true, pageKey);
    }
  }
};

Window_StatusCommand.prototype.isShowStatusMenuPage = function(pageKey) {
  var data = this._actor.actor().customStatusMenuPageRequirement[pageKey] || [];
  if (data.length <= 0) return true;
  for (var i = 0; i < data.length; i++) {
    var switchId = data[i];
    if (!$gameSwitches.value(switchId)) {
      return false;
    }
  }
  return true;
};

//=============================================================================
// Window_StatusInfo
//=============================================================================

Yanfly.MSMP.Window_StatusInfo_setSymbol =
  Window_StatusInfo.prototype.setSymbol;
Window_StatusInfo.prototype.setSymbol = function(symbol) {
  Yanfly.MSMP.Window_StatusInfo_setSymbol.call(this, symbol);
  if (this._symbol === 'morePages') {
    this.refresh();
  }
};

Yanfly.MSMP.Window_StatusInfo_drawInfoContents =
  Window_StatusInfo.prototype.drawInfoContents;
Window_StatusInfo.prototype.drawInfoContents = function(symbol) {
  if (symbol === 'morePages') {
    this.drawAllItems();
  } else {
    Yanfly.MSMP.Window_StatusInfo_drawInfoContents.call(this, symbol);
  }
};

Yanfly.MSMP.Window_StatusInfo_maxItems = Window_StatusInfo.prototype.maxItems;
Window_StatusInfo.prototype.maxItems = function() {
  if (this._symbol === 'morePages') {
    var pageKey = SceneManager._scene._commandWindow.currentExt();
    if (this._actor.actor().customStatusMenuPagesData) {
      if (this._actor.actor().customStatusMenuPagesData[pageKey]) {
        return this._actor.actor().customStatusMenuPagesData[pageKey].length;
      }
    }
  }
  return Yanfly.MSMP.Window_StatusInfo_maxItems.call(this);
};

Yanfly.MSMP.Window_StatusInfo_drawItem = Window_StatusInfo.prototype.drawItem;
Window_StatusInfo.prototype.drawItem = function(index) {
  Yanfly.MSMP.Window_StatusInfo_drawItem.call(this);
  if (this._symbol === 'morePages') {
    this.drawMoreStatusPageContent(index);
  }
};

Window_StatusInfo.prototype.drawMoreStatusPageContent = function(index) {
  var pageKey = SceneManager._scene._commandWindow.currentExt();
  if (!this._actor.actor().customStatusMenuPagesData) return;
  if (!this._actor.actor().customStatusMenuPagesData[pageKey]) return;
  var data = this._actor.actor().customStatusMenuPagesData[pageKey];
  var text = data[index];
  var rect = this.itemRectForText(index);
  this.drawTextEx(text, rect.x, rect.y);
};

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '================================================================\n';
text += 'YEP_X_MoreStatusPages requires YEP_StatusMenuCore to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.yanfly.moe and ';
text += 'update to the latest version for the YEP_StatusMenuCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // YEP_StatusMenuCore