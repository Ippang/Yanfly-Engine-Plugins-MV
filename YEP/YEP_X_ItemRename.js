//=============================================================================
// Yanfly Engine Plugins - Item Core Extension - Item Rename
// YEP_X_ItemRename.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_ItemRename = true;

var Yanfly = Yanfly || {};
Yanfly.ItemRename = Yanfly.ItemRename || {};
Yanfly.ItemRename.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 (Requires YEP_ItemCore.js) Allows the player to
 * rename independent items in their inventory.
 * @author Yanfly Engine Plugins + Sylvester Collaboration
 *
 * @param Rename Command
 * @desc The command text used for renaming items.
 * %1 - Item Name
 * @default Rename %1
 *
 * @param Default Rename
 * @type boolean
 * @desc Can all independent items be renamed by default?
 * ON - true     OFF - false
 * @default true
 *
 * @param Max Length
 * @type number
 * @min 1
 * @desc The maximum length players can rename their items.
 * @default 12
 *
 * @param Rename Text
 * @desc The text used to describe the rename process.
 * @default ...will be renamed to...
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_ItemCore. Make sure this plugin is located under
 * YEP_ItemCore in the plugin list.
 *
 * In games with a lot of items, weapons, and/or pieces of armors being used
 * all the time, simply remembering which one is which can prove to be a hard
 * task for some players. By giving the player the ability to rename the said
 * item, weapon, and/or armor, the player is able to develop his/her own way
 * to commit the object to memory and personalize the object even more.
 *
 * This plugin provides players the option to rename independent items of your
 * (the developer) choice. Items that can be renamed will have an additional
 * command when selection an action from the Item Core menu. This will take the
 * player to a new screen where the player is given access to the game's input
 * commands on renaming the item.
 *
 * Once changed, the independent item will become that item's priority name,
 * being unaffected by prefixes or suffixes added to them from other sources
 * such as upgrades and augments meaning the player's item renaming will always
 * be the name used for the modified independent item.
 *
 * This is a collaboration plugin by Sylvester and Yanfly to ensure
 * compatibility with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * There are a couple of notetags you can use with the Item Rename plugin.
 * They exist to allow you to offset the Default Rename option in the plugin's
 * parameter settings.
 *
 * Item, Weapon, and Armor Notetags:
 *
 *   <Can Rename>
 *   - This will set the item, weapon, or armor to be renameable regardless of
 *   the Default Rename plugin parameter.
 *
 *   <Cannot Rename>
 *   - This will set the item, weapon, or armor unable to be renameable
 *   regardless of the Default Rename plugin parameter.
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

if (Imported.YEP_ItemCore &&
  Yanfly.Item.version && Yanfly.Item.version >= 1.27) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_ItemRename');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ItemRenameCmd = String(Yanfly.Parameters['Rename Command']);
Yanfly.Param.ItemRenameDefault = String(Yanfly.Parameters['Default Rename']);
Yanfly.Param.ItemRenameDefault = eval(Yanfly.Param.ItemRenameDefault);
Yanfly.Param.ItemRenameMaxLength = Number(Yanfly.Parameters['Max Length']);
Yanfly.Param.ItemRenameText = String(Yanfly.Parameters['Rename Text']);

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Notetags added by Yanfly
//=============================================================================

Yanfly.ItemRename.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.ItemRename.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_ItemRename) {
    this.processItemRenameNotetags1($dataItems);
    this.processItemRenameNotetags1($dataWeapons);
    this.processItemRenameNotetags1($dataArmors);
    Yanfly._loaded_YEP_X_ItemRename = true;
  }
  
  return true;
};

DataManager.processItemRenameNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.canRename = Yanfly.Param.ItemRenameDefault;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<CAN RENAME>/i)) {
        obj.canRename = true;
      } else if (line.match(/<CANNOT RENAME>/i)) {
        obj.canRename = false;
      }
    }
  }
};

//=============================================================================
// Window_ItemActionCommand
//=============================================================================

Yanfly.ItemRename.Window_ItemActionCommand_addCustomCommandsE =
  Window_ItemActionCommand.prototype.addCustomCommandsE;
Window_ItemActionCommand.prototype.addCustomCommandsE = function() {
  Yanfly.ItemRename.Window_ItemActionCommand_addCustomCommandsE.call(this);
  if (this.isShowRenameCommand()) this.addRenameCommand();
};

Window_ItemActionCommand.prototype.isShowRenameCommand = function() {
  if (this._item && this._item.baseItemId && this._item.canRename) {
    return true;
  } else {
    return false;
  }
};

Window_ItemActionCommand.prototype.addRenameCommand = function() {
  if (!this._item) {
    return false;
  }
  var text = this.createRenameCommandName();
  this.addCommand(text, 'rename', true);
};

Window_ItemActionCommand.prototype.createRenameCommandName = function() {
  var fmt = Yanfly.Param.ItemRenameCmd;
  var name = '\\i[' + this._item.iconIndex + ']';
  if (this._item.textColor !== undefined) {
    name += '\\c[' + this._item.textColor + ']';
  }
  name += this._item.name + '\\c[0]';
  var text = fmt.format(name);
  return text;
};

//=============================================================================
// Window_ItemNameEdit
//=============================================================================

function Window_ItemNameEdit() {
    this.initialize.apply(this, arguments);
}

Window_ItemNameEdit.prototype = Object.create(Window_Base.prototype);
Window_ItemNameEdit.prototype.constructor = Window_ItemNameEdit;

Window_ItemNameEdit.prototype.initialize = function(item, maxLength) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._item = item;
    this._name = this._item.name.slice(0, this._maxLength);
    this._index = this._name.length;
    this._maxLength = maxLength;
    this._defaultName = this._name;
    this.deactivate();
    this.refresh();
};

Window_ItemNameEdit.prototype.windowWidth = function() {
  return 480;
};

Window_ItemNameEdit.prototype.windowHeight = function() {
  return this.fittingHeight(4);
};

Window_ItemNameEdit.prototype.name = function() {
  return this._name;
};

Window_ItemNameEdit.prototype.restoreDefault = function() {
  this._name = this._defaultName;
  this._index = this._name.length;
  this.refresh();
  return this._name.length > 0;
};

Window_ItemNameEdit.prototype.add = function(ch) {
  if (this._index < this._maxLength) {
    this._name += ch;
    this._index++;
    this.refresh();
    return true;
  } else {
    return false;
  }
};

Window_ItemNameEdit.prototype.back = function() {
  if (this._index > 0) {
    this._index--;
    this._name = this._name.slice(0, this._index);
    this.refresh();
    return true;
  } else {
    return false;
  }
};

Window_ItemNameEdit.prototype.faceWidth = function() {
  return 0;
};

Window_ItemNameEdit.prototype.charWidth = function() {
  var text = $gameSystem.isJapanese() ? '\uff21' : 'A';
  return this.textWidth(text);
};

Window_ItemNameEdit.prototype.left = function() {
  var nameCenter = (this.contentsWidth() + this.faceWidth()) / 2;
  var nameWidth = (this._maxLength + 1) * this.charWidth();
  return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
};

Window_ItemNameEdit.prototype.itemRect = function(index) {
  return {
      x: this.left() + index * this.charWidth(),
      y: this.lineHeight() * 2.5,
      width: this.charWidth(),
      height: this.lineHeight()
  };
};

Window_ItemNameEdit.prototype.underlineRect = function(index) {
  var rect = this.itemRect(index);
  rect.x++;
  rect.y += rect.height - 4;
  rect.width -= 2;
  rect.height = 2;
  return rect;
};

Window_ItemNameEdit.prototype.underlineColor = function() {
  return this.normalColor();
};

Window_ItemNameEdit.prototype.drawUnderline = function(index) {
  var rect = this.underlineRect(index);
  var color = this.underlineColor();
  this.contents.paintOpacity = 48;
  this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
  this.contents.paintOpacity = 255;
};

Window_ItemNameEdit.prototype.drawChar = function(index) {
  var rect = this.itemRect(index);
  this.resetTextColor();
  this.drawText(this._name[index] || '', rect.x, rect.y);
};

Window_ItemNameEdit.prototype.refresh = function() {
  this.contents.clear();
  var lh = this.lineHeight();
  var name = this._item.name;
  var width = this.textWidth(name);
  var iconWidth = Window_Base._iconWidth;
  var x = this.contents.width / 2 - (iconWidth / 2) - 4 - (width/2);
  this.drawItemName(this._item, x, lh * 0.5, this.contents.width);
  var text = Yanfly.Param.ItemRenameText;
  this.drawText(text, 0, lh * 1.5, this.contents.width, 'center');
  for (var i = 0; i < this._maxLength; i++) {
    this.drawUnderline(i);
  }
  for (var j = 0; j < this._name.length; j++) {
    this.drawChar(j);
  }
  var rect = this.itemRect(this._index);
  this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

//=============================================================================
// Scene_Item
//=============================================================================

Yanfly.ItemRename.Scene_Item_createActionWindow =
  Scene_Item.prototype.createActionWindow;
Scene_Item.prototype.createActionWindow = function() {
  Yanfly.ItemRename.Scene_Item_createActionWindow.call(this);
  this._itemActionWindow.setHandler('rename', this.onActionRename.bind(this));
};

Scene_Item.prototype.onActionRename = function() {
  var item = this._itemActionWindow._item;
  this.preItemRename();
  SceneManager.push(Scene_ItemRename);
  SceneManager.prepareNextScene(item);
};

Scene_Item.prototype.preItemRename = function() {
  $gameTemp._itemCategoryIndex = this._categoryWindow.index();
  $gameTemp._itemListIndex = this._itemWindow.index();
  $gameTemp._itemActionIndex = this._itemActionWindow.index();
  $gameTemp._itemRename = this.item();
};

Scene_Item.prototype.postItemRename = function() {
  this._categoryWindow.select($gameTemp._itemCategoryIndex);
  this._categoryWindow.update();
  $gameTemp._itemCategoryIndex = undefined;
  this._itemWindow.update();
  this._itemWindow.select($gameTemp._itemListIndex);
  this._itemWindow.updateHelp();
  $gameTemp._itemListIndex = undefined;
  this._itemActionWindow.setItem($gameTemp._itemRename);
  this._itemActionWindow.select($gameTemp._itemActionIndex);
  $gameTemp._itemActionIndex = undefined;
  $gameTemp._itemRename = undefined;
  this._categoryWindow.deactivate();
};

Yanfly.ItemRename.Scene_Item_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
  Yanfly.ItemRename.Scene_Item_create.call(this);
  if ($gameTemp._itemCategoryIndex) {
    this.postItemRename();
  }
};

//=============================================================================
// Scene_ItemRename
//=============================================================================

function Scene_ItemRename() {
    this.initialize.apply(this, arguments);
}

Scene_ItemRename.prototype = Object.create(Scene_Name.prototype);
Scene_ItemRename.prototype.constructor = Scene_ItemRename;

Scene_ItemRename.prototype.initialize = function() {
  Scene_Name.prototype.initialize.call(this);
};

Scene_ItemRename.prototype.prepare = function(item) {
  this._item = item;
  this._maxLength = Yanfly.Param.ItemRenameMaxLength;
};

Scene_ItemRename.prototype.createEditWindow = function() {
  this._editWindow = new Window_ItemNameEdit(this._item, this._maxLength);
  this.addWindow(this._editWindow);
};

Scene_ItemRename.prototype.onInputOk = function() {
  ItemManager.setPriorityName(this._item, this._editWindow.name());
  ItemManager.updateItemName(this._item);
  this.popScene();
};

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '================================================================\n';
text += 'YEP_X_ItemRename requires YEP_ItemCore and to be at the latest '
text += 'version to run properly. '
text += '\n\nPlease go to www.yanfly.moe and update to the latest version for ';
text += 'the YEP_ItemCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // if (Imported.YEP_ItemCore) {