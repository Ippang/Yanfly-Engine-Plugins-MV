//=============================================================================
// Yanfly Engine Plugins - Main Menu Manager
// YEP_MainMenuManager.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MainMenuManager = true;

var Yanfly = Yanfly || {};
Yanfly.MMM = Yanfly.MMM || {};
Yanfly.MMM.version = 1.03

//=============================================================================
 /*:
 * @plugindesc v1.03 This plugin allows you to manage the various aspects
 * of your main menu.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Hide Actor Window
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish to hide the main actor window?
 * NO - false     YES - true
 * @default false
 *
 * @param Hide Gold Window
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish to hide the gold window?
 * NO - false     YES - true
 * @default false
 *
 * @param Blurry Background
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish to have a blurry background?
 * NO - false     YES - true     Default: true
 * @default true
 *
 * @param ---Command---
 * @default
 *
 * @param Command Alignment
 * @parent ---Command---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc This is the text alignment for the Command Window.
 * left     center     right
 * @default left
 *
 * @param Command Position
 * @parent ---Command---
 * @type combo
 * @option left
 * @option right
 * @desc Determine the command window's position.
 * left     right
 * @default left
 *
 * @param Command Columns
 * @parent ---Command---
 * @desc Amount of columns to be displayed by the command window.
 * This is a formula. Default: 1
 * @default 1
 *
 * @param Command Rows
 * @parent ---Command---
 * @desc The number of visible rows for the command window.
 * This is a formula. 
 * @default Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))
 *
 * @param Command Width
 * @parent ---Command---
 * @desc This is the command window width in pixels.
 * This is a formula. Default: 240
 * @default 240
 *
 * @param ---Menu Items---
 * @default
 *
 * @param ---Menu 1---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 1 Name
 * @parent ---Menu 1---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 1 Symbol
 * @parent ---Menu 1---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 1 Show
 * @parent ---Menu 1---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 1 Enabled
 * @parent ---Menu 1---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 1 Ext
 * @parent ---Menu 1---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 1 Main Bind
 * @parent ---Menu 1---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 1 Actor Bind
 * @parent ---Menu 1---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 2---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 2 Name
 * @parent ---Menu 2---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 2 Symbol
 * @parent ---Menu 2---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 2 Show
 * @parent ---Menu 2---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 2 Enabled
 * @parent ---Menu 2---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 2 Ext
 * @parent ---Menu 2---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 2 Main Bind
 * @parent ---Menu 2---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 2 Actor Bind
 * @parent ---Menu 2---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 3---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 3 Name
 * @parent ---Menu 3---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 3 Symbol
 * @parent ---Menu 3---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 3 Show
 * @parent ---Menu 3---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 3 Enabled
 * @parent ---Menu 3---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 3 Ext
 * @parent ---Menu 3---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 3 Main Bind
 * @parent ---Menu 3---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 3 Actor Bind
 * @parent ---Menu 3---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 4---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 4 Name
 * @parent ---Menu 4---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 4 Symbol
 * @parent ---Menu 4---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 4 Show
 * @parent ---Menu 4---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 4 Enabled
 * @parent ---Menu 4---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 4 Ext
 * @parent ---Menu 4---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 4 Main Bind
 * @parent ---Menu 4---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 4 Actor Bind
 * @parent ---Menu 4---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 5---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 5 Name
 * @parent ---Menu 5---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 5 Symbol
 * @parent ---Menu 5---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 5 Show
 * @parent ---Menu 5---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 5 Enabled
 * @parent ---Menu 5---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 5 Ext
 * @parent ---Menu 5---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 5 Main Bind
 * @parent ---Menu 5---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 5 Actor Bind
 * @parent ---Menu 5---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 6---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 6 Name
 * @parent ---Menu 6---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 6 Symbol
 * @parent ---Menu 6---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 6 Show
 * @parent ---Menu 6---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 6 Enabled
 * @parent ---Menu 6---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 6 Ext
 * @parent ---Menu 6---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 6 Main Bind
 * @parent ---Menu 6---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 6 Actor Bind
 * @parent ---Menu 6---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 7---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 7 Name
 * @parent ---Menu 7---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 7 Symbol
 * @parent ---Menu 7---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 7 Show
 * @parent ---Menu 7---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 7 Enabled
 * @parent ---Menu 7---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 7 Ext
 * @parent ---Menu 7---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 7 Main Bind
 * @parent ---Menu 7---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 7 Actor Bind
 * @parent ---Menu 7---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 8---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 8 Name
 * @parent ---Menu 8---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 8 Symbol
 * @parent ---Menu 8---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 8 Show
 * @parent ---Menu 8---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 8 Enabled
 * @parent ---Menu 8---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 8 Ext
 * @parent ---Menu 8---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 8 Main Bind
 * @parent ---Menu 8---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 8 Actor Bind
 * @parent ---Menu 8---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 9---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 9 Name
 * @parent ---Menu 9---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 9 Symbol
 * @parent ---Menu 9---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 9 Show
 * @parent ---Menu 9---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 9 Enabled
 * @parent ---Menu 9---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 9 Ext
 * @parent ---Menu 9---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 9 Main Bind
 * @parent ---Menu 9---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 9 Actor Bind
 * @parent ---Menu 9---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 10---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 10 Name
 * @parent ---Menu 10---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.item
 *
 * @param Menu 10 Symbol
 * @parent ---Menu 10---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default item
 *
 * @param Menu 10 Show
 * @parent ---Menu 10---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('item')
 *
 * @param Menu 10 Enabled
 * @parent ---Menu 10---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 10 Ext
 * @parent ---Menu 10---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 10 Main Bind
 * @parent ---Menu 10---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandItem.bind(this)
 *
 * @param Menu 10 Actor Bind
 * @parent ---Menu 10---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 11---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 11 Name
 * @parent ---Menu 11---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 11 Symbol
 * @parent ---Menu 11---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 11 Show
 * @parent ---Menu 11---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 11 Enabled
 * @parent ---Menu 11---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 11 Ext
 * @parent ---Menu 11---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 11 Main Bind
 * @parent ---Menu 11---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 11 Actor Bind
 * @parent ---Menu 11---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 12---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 12 Name
 * @parent ---Menu 12---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 12 Symbol
 * @parent ---Menu 12---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 12 Show
 * @parent ---Menu 12---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 12 Enabled
 * @parent ---Menu 12---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 12 Ext
 * @parent ---Menu 12---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 12 Main Bind
 * @parent ---Menu 12---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 12 Actor Bind
 * @parent ---Menu 12---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 13---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 13 Name
 * @parent ---Menu 13---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 13 Symbol
 * @parent ---Menu 13---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 13 Show
 * @parent ---Menu 13---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 13 Enabled
 * @parent ---Menu 13---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 13 Ext
 * @parent ---Menu 13---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 13 Main Bind
 * @parent ---Menu 13---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 13 Actor Bind
 * @parent ---Menu 13---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 14---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 14 Name
 * @parent ---Menu 14---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 14 Symbol
 * @parent ---Menu 14---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 14 Show
 * @parent ---Menu 14---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 14 Enabled
 * @parent ---Menu 14---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 14 Ext
 * @parent ---Menu 14---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 14 Main Bind
 * @parent ---Menu 14---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 14 Actor Bind
 * @parent ---Menu 14---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 15---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 15 Name
 * @parent ---Menu 15---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.skill
 *
 * @param Menu 15 Symbol
 * @parent ---Menu 15---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default skill
 *
 * @param Menu 15 Show
 * @parent ---Menu 15---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('skill')
 *
 * @param Menu 15 Enabled
 * @parent ---Menu 15---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 15 Ext
 * @parent ---Menu 15---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 15 Main Bind
 * @parent ---Menu 15---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 15 Actor Bind
 * @parent ---Menu 15---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Skill)
 *
 * @param ---Menu 16---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 16 Name
 * @parent ---Menu 16---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 16 Symbol
 * @parent ---Menu 16---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 16 Show
 * @parent ---Menu 16---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 16 Enabled
 * @parent ---Menu 16---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 16 Ext
 * @parent ---Menu 16---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 16 Main Bind
 * @parent ---Menu 16---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 16 Actor Bind
 * @parent ---Menu 16---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 17---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 17 Name
 * @parent ---Menu 17---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 17 Symbol
 * @parent ---Menu 17---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 17 Show
 * @parent ---Menu 17---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 17 Enabled
 * @parent ---Menu 17---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 17 Ext
 * @parent ---Menu 17---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 17 Main Bind
 * @parent ---Menu 17---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 17 Actor Bind
 * @parent ---Menu 17---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 18---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 18 Name
 * @parent ---Menu 18---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 18 Symbol
 * @parent ---Menu 18---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 18 Show
 * @parent ---Menu 18---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 18 Enabled
 * @parent ---Menu 18---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 18 Ext
 * @parent ---Menu 18---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 18 Main Bind
 * @parent ---Menu 18---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 18 Actor Bind
 * @parent ---Menu 18---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 19---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 19 Name
 * @parent ---Menu 19---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 19 Symbol
 * @parent ---Menu 19---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 19 Show
 * @parent ---Menu 19---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 19 Enabled
 * @parent ---Menu 19---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 19 Ext
 * @parent ---Menu 19---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 19 Main Bind
 * @parent ---Menu 19---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 19 Actor Bind
 * @parent ---Menu 19---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 20---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 20 Name
 * @parent ---Menu 20---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.equip
 *
 * @param Menu 20 Symbol
 * @parent ---Menu 20---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default equip
 *
 * @param Menu 20 Show
 * @parent ---Menu 20---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('equip')
 *
 * @param Menu 20 Enabled
 * @parent ---Menu 20---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 20 Ext
 * @parent ---Menu 20---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 20 Main Bind
 * @parent ---Menu 20---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 20 Actor Bind
 * @parent ---Menu 20---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Equip)
 *
 * @param ---Menu 21---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 21 Name
 * @parent ---Menu 21---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 21 Symbol
 * @parent ---Menu 21---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 21 Show
 * @parent ---Menu 21---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 21 Enabled
 * @parent ---Menu 21---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 21 Ext
 * @parent ---Menu 21---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 21 Main Bind
 * @parent ---Menu 21---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 21 Actor Bind
 * @parent ---Menu 21---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 22---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 22 Name
 * @parent ---Menu 22---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 22 Symbol
 * @parent ---Menu 22---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 22 Show
 * @parent ---Menu 22---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 22 Enabled
 * @parent ---Menu 22---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 22 Ext
 * @parent ---Menu 22---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 22 Main Bind
 * @parent ---Menu 22---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 22 Actor Bind
 * @parent ---Menu 22---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 23---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 23 Name
 * @parent ---Menu 23---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 23 Symbol
 * @parent ---Menu 23---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 23 Show
 * @parent ---Menu 23---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 23 Enabled
 * @parent ---Menu 23---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 23 Ext
 * @parent ---Menu 23---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 23 Main Bind
 * @parent ---Menu 23---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 23 Actor Bind
 * @parent ---Menu 23---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 24---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 24 Name
 * @parent ---Menu 24---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 24 Symbol
 * @parent ---Menu 24---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 24 Show
 * @parent ---Menu 24---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 24 Enabled
 * @parent ---Menu 24---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 24 Ext
 * @parent ---Menu 24---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 24 Main Bind
 * @parent ---Menu 24---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 24 Actor Bind
 * @parent ---Menu 24---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 25---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 25 Name
 * @parent ---Menu 25---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default Yanfly.Param.CCCCmdName
 *
 * @param Menu 25 Symbol
 * @parent ---Menu 25---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default class
 *
 * @param Menu 25 Show
 * @parent ---Menu 25---
 * @desc This is the eval condition for this menu command to appear.
 * @default Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()
 *
 * @param Menu 25 Enabled
 * @parent ---Menu 25---
 * @desc Is this menu command enabled? This is an eval.
 * @default $gameSystem.isEnableClass() && this.areMainCommandsEnabled()
 *
 * @param Menu 25 Ext
 * @parent ---Menu 25---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 25 Main Bind
 * @parent ---Menu 25---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 25 Actor Bind
 * @parent ---Menu 25---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Class)
 *
 * @param ---Menu 26---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 26 Name
 * @parent ---Menu 26---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 26 Symbol
 * @parent ---Menu 26---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 26 Show
 * @parent ---Menu 26---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 26 Enabled
 * @parent ---Menu 26---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 26 Ext
 * @parent ---Menu 26---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 26 Main Bind
 * @parent ---Menu 26---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 26 Actor Bind
 * @parent ---Menu 26---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 27---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 27 Name
 * @parent ---Menu 27---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 27 Symbol
 * @parent ---Menu 27---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 27 Show
 * @parent ---Menu 27---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 27 Enabled
 * @parent ---Menu 27---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 27 Ext
 * @parent ---Menu 27---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 27 Main Bind
 * @parent ---Menu 27---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 27 Actor Bind
 * @parent ---Menu 27---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 28---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 28 Name
 * @parent ---Menu 28---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 28 Symbol
 * @parent ---Menu 28---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 28 Show
 * @parent ---Menu 28---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 28 Enabled
 * @parent ---Menu 28---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 28 Ext
 * @parent ---Menu 28---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 28 Main Bind
 * @parent ---Menu 28---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 28 Actor Bind
 * @parent ---Menu 28---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 29---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 29 Name
 * @parent ---Menu 29---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 29 Symbol
 * @parent ---Menu 29---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 29 Show
 * @parent ---Menu 29---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 29 Enabled
 * @parent ---Menu 29---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 29 Ext
 * @parent ---Menu 29---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 29 Main Bind
 * @parent ---Menu 29---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 29 Actor Bind
 * @parent ---Menu 29---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 30---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 30 Name
 * @parent ---Menu 30---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 30 Symbol
 * @parent ---Menu 30---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 30 Show
 * @parent ---Menu 30---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 30 Enabled
 * @parent ---Menu 30---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 30 Ext
 * @parent ---Menu 30---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 30 Main Bind
 * @parent ---Menu 30---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 30 Actor Bind
 * @parent ---Menu 30---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 31---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 31 Name
 * @parent ---Menu 31---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 31 Symbol
 * @parent ---Menu 31---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 31 Show
 * @parent ---Menu 31---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 31 Enabled
 * @parent ---Menu 31---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 31 Ext
 * @parent ---Menu 31---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 31 Main Bind
 * @parent ---Menu 31---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 31 Actor Bind
 * @parent ---Menu 31---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 32---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 32 Name
 * @parent ---Menu 32---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 32 Symbol
 * @parent ---Menu 32---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 32 Show
 * @parent ---Menu 32---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 32 Enabled
 * @parent ---Menu 32---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 32 Ext
 * @parent ---Menu 32---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 32 Main Bind
 * @parent ---Menu 32---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 32 Actor Bind
 * @parent ---Menu 32---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 33---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 33 Name
 * @parent ---Menu 33---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 33 Symbol
 * @parent ---Menu 33---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 33 Show
 * @parent ---Menu 33---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 33 Enabled
 * @parent ---Menu 33---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 33 Ext
 * @parent ---Menu 33---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 33 Main Bind
 * @parent ---Menu 33---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 33 Actor Bind
 * @parent ---Menu 33---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 34---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 34 Name
 * @parent ---Menu 34---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 34 Symbol
 * @parent ---Menu 34---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 34 Show
 * @parent ---Menu 34---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 34 Enabled
 * @parent ---Menu 34---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 34 Ext
 * @parent ---Menu 34---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 34 Main Bind
 * @parent ---Menu 34---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 34 Actor Bind
 * @parent ---Menu 34---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 35---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 35 Name
 * @parent ---Menu 35---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 35 Symbol
 * @parent ---Menu 35---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 35 Show
 * @parent ---Menu 35---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 35 Enabled
 * @parent ---Menu 35---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 35 Ext
 * @parent ---Menu 35---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 35 Main Bind
 * @parent ---Menu 35---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 35 Actor Bind
 * @parent ---Menu 35---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 36---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 36 Name
 * @parent ---Menu 36---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 36 Symbol
 * @parent ---Menu 36---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 36 Show
 * @parent ---Menu 36---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 36 Enabled
 * @parent ---Menu 36---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 36 Ext
 * @parent ---Menu 36---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 36 Main Bind
 * @parent ---Menu 36---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 36 Actor Bind
 * @parent ---Menu 36---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 37---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 37 Name
 * @parent ---Menu 37---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 37 Symbol
 * @parent ---Menu 37---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 37 Show
 * @parent ---Menu 37---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 37 Enabled
 * @parent ---Menu 37---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 37 Ext
 * @parent ---Menu 37---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 37 Main Bind
 * @parent ---Menu 37---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 37 Actor Bind
 * @parent ---Menu 37---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 38---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 38 Name
 * @parent ---Menu 38---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 38 Symbol
 * @parent ---Menu 38---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 38 Show
 * @parent ---Menu 38---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 38 Enabled
 * @parent ---Menu 38---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 38 Ext
 * @parent ---Menu 38---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 38 Main Bind
 * @parent ---Menu 38---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 38 Actor Bind
 * @parent ---Menu 38---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 39---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 39 Name
 * @parent ---Menu 39---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 39 Symbol
 * @parent ---Menu 39---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 39 Show
 * @parent ---Menu 39---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 39 Enabled
 * @parent ---Menu 39---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 39 Ext
 * @parent ---Menu 39---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 39 Main Bind
 * @parent ---Menu 39---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 39 Actor Bind
 * @parent ---Menu 39---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 40---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 40 Name
 * @parent ---Menu 40---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 40 Symbol
 * @parent ---Menu 40---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 40 Show
 * @parent ---Menu 40---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 40 Enabled
 * @parent ---Menu 40---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 40 Ext
 * @parent ---Menu 40---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 40 Main Bind
 * @parent ---Menu 40---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 40 Actor Bind
 * @parent ---Menu 40---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 41---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 41 Name
 * @parent ---Menu 41---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 41 Symbol
 * @parent ---Menu 41---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 41 Show
 * @parent ---Menu 41---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 41 Enabled
 * @parent ---Menu 41---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 41 Ext
 * @parent ---Menu 41---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 41 Main Bind
 * @parent ---Menu 41---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 41 Actor Bind
 * @parent ---Menu 41---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 42---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 42 Name
 * @parent ---Menu 42---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 42 Symbol
 * @parent ---Menu 42---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 42 Show
 * @parent ---Menu 42---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 42 Enabled
 * @parent ---Menu 42---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 42 Ext
 * @parent ---Menu 42---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 42 Main Bind
 * @parent ---Menu 42---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 42 Actor Bind
 * @parent ---Menu 42---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 43---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 43 Name
 * @parent ---Menu 43---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 43 Symbol
 * @parent ---Menu 43---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 43 Show
 * @parent ---Menu 43---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 43 Enabled
 * @parent ---Menu 43---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 43 Ext
 * @parent ---Menu 43---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 43 Main Bind
 * @parent ---Menu 43---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 43 Actor Bind
 * @parent ---Menu 43---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 44---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 44 Name
 * @parent ---Menu 44---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 44 Symbol
 * @parent ---Menu 44---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 44 Show
 * @parent ---Menu 44---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 44 Enabled
 * @parent ---Menu 44---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 44 Ext
 * @parent ---Menu 44---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 44 Main Bind
 * @parent ---Menu 44---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 44 Actor Bind
 * @parent ---Menu 44---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 45---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 45 Name
 * @parent ---Menu 45---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 45 Symbol
 * @parent ---Menu 45---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 45 Show
 * @parent ---Menu 45---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 45 Enabled
 * @parent ---Menu 45---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 45 Ext
 * @parent ---Menu 45---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 45 Main Bind
 * @parent ---Menu 45---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 45 Actor Bind
 * @parent ---Menu 45---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 46---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 46 Name
 * @parent ---Menu 46---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 46 Symbol
 * @parent ---Menu 46---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 46 Show
 * @parent ---Menu 46---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 46 Enabled
 * @parent ---Menu 46---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 46 Ext
 * @parent ---Menu 46---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 46 Main Bind
 * @parent ---Menu 46---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 46 Actor Bind
 * @parent ---Menu 46---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 47---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 47 Name
 * @parent ---Menu 47---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 47 Symbol
 * @parent ---Menu 47---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 47 Show
 * @parent ---Menu 47---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 47 Enabled
 * @parent ---Menu 47---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 47 Ext
 * @parent ---Menu 47---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 47 Main Bind
 * @parent ---Menu 47---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 47 Actor Bind
 * @parent ---Menu 47---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 48---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 48 Name
 * @parent ---Menu 48---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 48 Symbol
 * @parent ---Menu 48---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 48 Show
 * @parent ---Menu 48---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 48 Enabled
 * @parent ---Menu 48---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 48 Ext
 * @parent ---Menu 48---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 48 Main Bind
 * @parent ---Menu 48---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 48 Actor Bind
 * @parent ---Menu 48---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 49---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 49 Name
 * @parent ---Menu 49---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 49 Symbol
 * @parent ---Menu 49---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 49 Show
 * @parent ---Menu 49---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 49 Enabled
 * @parent ---Menu 49---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 49 Ext
 * @parent ---Menu 49---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 49 Main Bind
 * @parent ---Menu 49---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 49 Actor Bind
 * @parent ---Menu 49---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 50---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 50 Name
 * @parent ---Menu 50---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.status
 *
 * @param Menu 50 Symbol
 * @parent ---Menu 50---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default status
 *
 * @param Menu 50 Show
 * @parent ---Menu 50---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('status')
 *
 * @param Menu 50 Enabled
 * @parent ---Menu 50---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 50 Ext
 * @parent ---Menu 50---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 50 Main Bind
 * @parent ---Menu 50---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 50 Actor Bind
 * @parent ---Menu 50---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Status)
 *
 * @param ---Menu 51---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 51 Name
 * @parent ---Menu 51---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 51 Symbol
 * @parent ---Menu 51---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 51 Show
 * @parent ---Menu 51---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 51 Enabled
 * @parent ---Menu 51---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 51 Ext
 * @parent ---Menu 51---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 51 Main Bind
 * @parent ---Menu 51---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 51 Actor Bind
 * @parent ---Menu 51---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 52---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 52 Name
 * @parent ---Menu 52---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 52 Symbol
 * @parent ---Menu 52---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 52 Show
 * @parent ---Menu 52---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 52 Enabled
 * @parent ---Menu 52---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 52 Ext
 * @parent ---Menu 52---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 52 Main Bind
 * @parent ---Menu 52---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 52 Actor Bind
 * @parent ---Menu 52---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 53---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 53 Name
 * @parent ---Menu 53---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 53 Symbol
 * @parent ---Menu 53---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 53 Show
 * @parent ---Menu 53---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 53 Enabled
 * @parent ---Menu 53---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 53 Ext
 * @parent ---Menu 53---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 53 Main Bind
 * @parent ---Menu 53---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 53 Actor Bind
 * @parent ---Menu 53---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 54---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 54 Name
 * @parent ---Menu 54---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 54 Symbol
 * @parent ---Menu 54---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 54 Show
 * @parent ---Menu 54---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 54 Enabled
 * @parent ---Menu 54---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 54 Ext
 * @parent ---Menu 54---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 54 Main Bind
 * @parent ---Menu 54---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 54 Actor Bind
 * @parent ---Menu 54---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 55---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 55 Name
 * @parent ---Menu 55---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.formation
 *
 * @param Menu 55 Symbol
 * @parent ---Menu 55---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default formation
 *
 * @param Menu 55 Show
 * @parent ---Menu 55---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('formation')
 *
 * @param Menu 55 Enabled
 * @parent ---Menu 55---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isFormationEnabled()
 *
 * @param Menu 55 Ext
 * @parent ---Menu 55---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 55 Main Bind
 * @parent ---Menu 55---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandFormation.bind(this)
 *
 * @param Menu 55 Actor Bind
 * @parent ---Menu 55---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 56---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 56 Name
 * @parent ---Menu 56---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 56 Symbol
 * @parent ---Menu 56---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 56 Show
 * @parent ---Menu 56---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 56 Enabled
 * @parent ---Menu 56---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 56 Ext
 * @parent ---Menu 56---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 56 Main Bind
 * @parent ---Menu 56---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 56 Actor Bind
 * @parent ---Menu 56---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 57---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 57 Name
 * @parent ---Menu 57---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 57 Symbol
 * @parent ---Menu 57---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 57 Show
 * @parent ---Menu 57---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 57 Enabled
 * @parent ---Menu 57---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 57 Ext
 * @parent ---Menu 57---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 57 Main Bind
 * @parent ---Menu 57---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 57 Actor Bind
 * @parent ---Menu 57---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 58---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 58 Name
 * @parent ---Menu 58---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 58 Symbol
 * @parent ---Menu 58---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 58 Show
 * @parent ---Menu 58---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 58 Enabled
 * @parent ---Menu 58---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 58 Ext
 * @parent ---Menu 58---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 58 Main Bind
 * @parent ---Menu 58---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 58 Actor Bind
 * @parent ---Menu 58---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 59---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 59 Name
 * @parent ---Menu 59---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 59 Symbol
 * @parent ---Menu 59---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 59 Show
 * @parent ---Menu 59---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 59 Enabled
 * @parent ---Menu 59---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 59 Ext
 * @parent ---Menu 59---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 59 Main Bind
 * @parent ---Menu 59---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 59 Actor Bind
 * @parent ---Menu 59---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 60---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 60 Name
 * @parent ---Menu 60---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 60 Symbol
 * @parent ---Menu 60---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 60 Show
 * @parent ---Menu 60---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 60 Enabled
 * @parent ---Menu 60---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 60 Ext
 * @parent ---Menu 60---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 60 Main Bind
 * @parent ---Menu 60---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 60 Actor Bind
 * @parent ---Menu 60---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 61---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 61 Name
 * @parent ---Menu 61---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 61 Symbol
 * @parent ---Menu 61---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 61 Show
 * @parent ---Menu 61---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 61 Enabled
 * @parent ---Menu 61---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 61 Ext
 * @parent ---Menu 61---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 61 Main Bind
 * @parent ---Menu 61---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 61 Actor Bind
 * @parent ---Menu 61---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 62---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 62 Name
 * @parent ---Menu 62---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 62 Symbol
 * @parent ---Menu 62---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 62 Show
 * @parent ---Menu 62---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 62 Enabled
 * @parent ---Menu 62---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 62 Ext
 * @parent ---Menu 62---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 62 Main Bind
 * @parent ---Menu 62---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 62 Actor Bind
 * @parent ---Menu 62---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 63---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 63 Name
 * @parent ---Menu 63---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 63 Symbol
 * @parent ---Menu 63---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 63 Show
 * @parent ---Menu 63---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 63 Enabled
 * @parent ---Menu 63---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 63 Ext
 * @parent ---Menu 63---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 63 Main Bind
 * @parent ---Menu 63---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 63 Actor Bind
 * @parent ---Menu 63---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 64---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 64 Name
 * @parent ---Menu 64---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 64 Symbol
 * @parent ---Menu 64---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 64 Show
 * @parent ---Menu 64---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 64 Enabled
 * @parent ---Menu 64---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 64 Ext
 * @parent ---Menu 64---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 64 Main Bind
 * @parent ---Menu 64---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 64 Actor Bind
 * @parent ---Menu 64---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 65---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 65 Name
 * @parent ---Menu 65---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 65 Symbol
 * @parent ---Menu 65---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 65 Show
 * @parent ---Menu 65---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 65 Enabled
 * @parent ---Menu 65---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 65 Ext
 * @parent ---Menu 65---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 65 Main Bind
 * @parent ---Menu 65---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 65 Actor Bind
 * @parent ---Menu 65---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 66---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 66 Name
 * @parent ---Menu 66---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 66 Symbol
 * @parent ---Menu 66---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 66 Show
 * @parent ---Menu 66---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 66 Enabled
 * @parent ---Menu 66---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 66 Ext
 * @parent ---Menu 66---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 66 Main Bind
 * @parent ---Menu 66---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 66 Actor Bind
 * @parent ---Menu 66---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 67---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 67 Name
 * @parent ---Menu 67---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 67 Symbol
 * @parent ---Menu 67---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 67 Show
 * @parent ---Menu 67---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 67 Enabled
 * @parent ---Menu 67---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 67 Ext
 * @parent ---Menu 67---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 67 Main Bind
 * @parent ---Menu 67---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 67 Actor Bind
 * @parent ---Menu 67---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 68---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 68 Name
 * @parent ---Menu 68---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 68 Symbol
 * @parent ---Menu 68---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 68 Show
 * @parent ---Menu 68---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 68 Enabled
 * @parent ---Menu 68---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 68 Ext
 * @parent ---Menu 68---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 68 Main Bind
 * @parent ---Menu 68---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 68 Actor Bind
 * @parent ---Menu 68---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 69---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 69 Name
 * @parent ---Menu 69---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 69 Symbol
 * @parent ---Menu 69---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 69 Show
 * @parent ---Menu 69---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 69 Enabled
 * @parent ---Menu 69---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 69 Ext
 * @parent ---Menu 69---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 69 Main Bind
 * @parent ---Menu 69---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 69 Actor Bind
 * @parent ---Menu 69---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 70---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 70 Name
 * @parent ---Menu 70---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 70 Symbol
 * @parent ---Menu 70---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 70 Show
 * @parent ---Menu 70---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 70 Enabled
 * @parent ---Menu 70---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 70 Ext
 * @parent ---Menu 70---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 70 Main Bind
 * @parent ---Menu 70---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 70 Actor Bind
 * @parent ---Menu 70---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 71---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 71 Name
 * @parent ---Menu 71---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 71 Symbol
 * @parent ---Menu 71---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 71 Show
 * @parent ---Menu 71---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 71 Enabled
 * @parent ---Menu 71---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 71 Ext
 * @parent ---Menu 71---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 71 Main Bind
 * @parent ---Menu 71---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 71 Actor Bind
 * @parent ---Menu 71---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 72---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 72 Name
 * @parent ---Menu 72---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 72 Symbol
 * @parent ---Menu 72---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 72 Show
 * @parent ---Menu 72---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 72 Enabled
 * @parent ---Menu 72---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 72 Ext
 * @parent ---Menu 72---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 72 Main Bind
 * @parent ---Menu 72---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 72 Actor Bind
 * @parent ---Menu 72---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 73---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 73 Name
 * @parent ---Menu 73---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 73 Symbol
 * @parent ---Menu 73---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 73 Show
 * @parent ---Menu 73---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 73 Enabled
 * @parent ---Menu 73---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 73 Ext
 * @parent ---Menu 73---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 73 Main Bind
 * @parent ---Menu 73---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 73 Actor Bind
 * @parent ---Menu 73---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 74---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 74 Name
 * @parent ---Menu 74---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 74 Symbol
 * @parent ---Menu 74---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 74 Show
 * @parent ---Menu 74---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 74 Enabled
 * @parent ---Menu 74---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 74 Ext
 * @parent ---Menu 74---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 74 Main Bind
 * @parent ---Menu 74---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 74 Actor Bind
 * @parent ---Menu 74---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 75---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 75 Name
 * @parent ---Menu 75---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 75 Symbol
 * @parent ---Menu 75---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 75 Show
 * @parent ---Menu 75---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 75 Enabled
 * @parent ---Menu 75---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 75 Ext
 * @parent ---Menu 75---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 75 Main Bind
 * @parent ---Menu 75---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 75 Actor Bind
 * @parent ---Menu 75---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 76---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 76 Name
 * @parent ---Menu 76---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 76 Symbol
 * @parent ---Menu 76---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 76 Show
 * @parent ---Menu 76---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 76 Enabled
 * @parent ---Menu 76---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 76 Ext
 * @parent ---Menu 76---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 76 Main Bind
 * @parent ---Menu 76---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 76 Actor Bind
 * @parent ---Menu 76---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 77---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 77 Name
 * @parent ---Menu 77---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 77 Symbol
 * @parent ---Menu 77---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 77 Show
 * @parent ---Menu 77---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 77 Enabled
 * @parent ---Menu 77---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 77 Ext
 * @parent ---Menu 77---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 77 Main Bind
 * @parent ---Menu 77---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 77 Actor Bind
 * @parent ---Menu 77---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 78---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 78 Name
 * @parent ---Menu 78---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 78 Symbol
 * @parent ---Menu 78---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 78 Show
 * @parent ---Menu 78---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 78 Enabled
 * @parent ---Menu 78---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 78 Ext
 * @parent ---Menu 78---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 78 Main Bind
 * @parent ---Menu 78---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 78 Actor Bind
 * @parent ---Menu 78---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 79---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 79 Name
 * @parent ---Menu 79---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 79 Symbol
 * @parent ---Menu 79---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 79 Show
 * @parent ---Menu 79---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 79 Enabled
 * @parent ---Menu 79---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 79 Ext
 * @parent ---Menu 79---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 79 Main Bind
 * @parent ---Menu 79---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 79 Actor Bind
 * @parent ---Menu 79---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 80---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 80 Name
 * @parent ---Menu 80---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 80 Symbol
 * @parent ---Menu 80---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 80 Show
 * @parent ---Menu 80---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 80 Enabled
 * @parent ---Menu 80---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 80 Ext
 * @parent ---Menu 80---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 80 Main Bind
 * @parent ---Menu 80---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 80 Actor Bind
 * @parent ---Menu 80---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 81---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 81 Name
 * @parent ---Menu 81---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 1'
 *
 * @param Menu 81 Symbol
 * @parent ---Menu 81---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 81 Show
 * @parent ---Menu 81---
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 81 Enabled
 * @parent ---Menu 81---
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 81 Ext
 * @parent ---Menu 81---
 * @desc This is the menu command's extension. This is an eval.
 * @default 1
 *
 * @param Menu 81 Main Bind
 * @parent ---Menu 81---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 81 Actor Bind
 * @parent ---Menu 81---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 82---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 82 Name
 * @parent ---Menu 82---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 2'
 *
 * @param Menu 82 Symbol
 * @parent ---Menu 82---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 82 Show
 * @parent ---Menu 82---
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 82 Enabled
 * @parent ---Menu 82---
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 82 Ext
 * @parent ---Menu 82---
 * @desc This is the menu command's extension. This is an eval.
 * @default 2
 *
 * @param Menu 82 Main Bind
 * @parent ---Menu 82---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 82 Actor Bind
 * @parent ---Menu 82---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 83---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 83 Name
 * @parent ---Menu 83---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 3'
 *
 * @param Menu 83 Symbol
 * @parent ---Menu 83---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 83 Show
 * @parent ---Menu 83---
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 83 Enabled
 * @parent ---Menu 83---
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 83 Ext
 * @parent ---Menu 83---
 * @desc This is the menu command's extension. This is an eval.
 * @default 3
 *
 * @param Menu 83 Main Bind
 * @parent ---Menu 83---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 83 Actor Bind
 * @parent ---Menu 83---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 84---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 84 Name
 * @parent ---Menu 84---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 84 Symbol
 * @parent ---Menu 84---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 84 Show
 * @parent ---Menu 84---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 84 Enabled
 * @parent ---Menu 84---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 84 Ext
 * @parent ---Menu 84---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 84 Main Bind
 * @parent ---Menu 84---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 84 Actor Bind
 * @parent ---Menu 84---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 85---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 85 Name
 * @parent ---Menu 85---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 85 Symbol
 * @parent ---Menu 85---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 85 Show
 * @parent ---Menu 85---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 85 Enabled
 * @parent ---Menu 85---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 85 Ext
 * @parent ---Menu 85---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 85 Main Bind
 * @parent ---Menu 85---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 85 Actor Bind
 * @parent ---Menu 85---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 86---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 86 Name
 * @parent ---Menu 86---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 86 Symbol
 * @parent ---Menu 86---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 86 Show
 * @parent ---Menu 86---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 86 Enabled
 * @parent ---Menu 86---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 86 Ext
 * @parent ---Menu 86---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 86 Main Bind
 * @parent ---Menu 86---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 86 Actor Bind
 * @parent ---Menu 86---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 87---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 87 Name
 * @parent ---Menu 87---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 87 Symbol
 * @parent ---Menu 87---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 87 Show
 * @parent ---Menu 87---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 87 Enabled
 * @parent ---Menu 87---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 87 Ext
 * @parent ---Menu 87---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 87 Main Bind
 * @parent ---Menu 87---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 87 Actor Bind
 * @parent ---Menu 87---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 88---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 88 Name
 * @parent ---Menu 88---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 88 Symbol
 * @parent ---Menu 88---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 88 Show
 * @parent ---Menu 88---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 88 Enabled
 * @parent ---Menu 88---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 88 Ext
 * @parent ---Menu 88---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 88 Main Bind
 * @parent ---Menu 88---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 88 Actor Bind
 * @parent ---Menu 88---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 89---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 89 Name
 * @parent ---Menu 89---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 89 Symbol
 * @parent ---Menu 89---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 89 Show
 * @parent ---Menu 89---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 89 Enabled
 * @parent ---Menu 89---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 89 Ext
 * @parent ---Menu 89---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 89 Main Bind
 * @parent ---Menu 89---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 89 Actor Bind
 * @parent ---Menu 89---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 90---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 90 Name
 * @parent ---Menu 90---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.options
 *
 * @param Menu 90 Symbol
 * @parent ---Menu 90---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default options
 *
 * @param Menu 90 Show
 * @parent ---Menu 90---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('options')
 *
 * @param Menu 90 Enabled
 * @parent ---Menu 90---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isOptionsEnabled()
 *
 * @param Menu 90 Ext
 * @parent ---Menu 90---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 90 Main Bind
 * @parent ---Menu 90---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandOptions.bind(this)
 *
 * @param Menu 90 Actor Bind
 * @parent ---Menu 90---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 91---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 91 Name
 * @parent ---Menu 91---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 91 Symbol
 * @parent ---Menu 91---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 91 Show
 * @parent ---Menu 91---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 91 Enabled
 * @parent ---Menu 91---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 91 Ext
 * @parent ---Menu 91---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 91 Main Bind
 * @parent ---Menu 91---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 91 Actor Bind
 * @parent ---Menu 91---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 92---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 92 Name
 * @parent ---Menu 92---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 92 Symbol
 * @parent ---Menu 92---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 92 Show
 * @parent ---Menu 92---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 92 Enabled
 * @parent ---Menu 92---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 92 Ext
 * @parent ---Menu 92---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 92 Main Bind
 * @parent ---Menu 92---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 92 Actor Bind
 * @parent ---Menu 92---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 93---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 93 Name
 * @parent ---Menu 93---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 93 Symbol
 * @parent ---Menu 93---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 93 Show
 * @parent ---Menu 93---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 93 Enabled
 * @parent ---Menu 93---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 93 Ext
 * @parent ---Menu 93---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 93 Main Bind
 * @parent ---Menu 93---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 93 Actor Bind
 * @parent ---Menu 93---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 94---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 94 Name
 * @parent ---Menu 94---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 94 Symbol
 * @parent ---Menu 94---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 94 Show
 * @parent ---Menu 94---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 94 Enabled
 * @parent ---Menu 94---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 94 Ext
 * @parent ---Menu 94---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 94 Main Bind
 * @parent ---Menu 94---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 94 Actor Bind
 * @parent ---Menu 94---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 95---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 95 Name
 * @parent ---Menu 95---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.save
 *
 * @param Menu 95 Symbol
 * @parent ---Menu 95---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default save
 *
 * @param Menu 95 Show
 * @parent ---Menu 95---
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('save')
 *
 * @param Menu 95 Enabled
 * @parent ---Menu 95---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isSaveEnabled()
 *
 * @param Menu 95 Ext
 * @parent ---Menu 95---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 95 Main Bind
 * @parent ---Menu 95---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandSave.bind(this)
 *
 * @param Menu 95 Actor Bind
 * @parent ---Menu 95---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 96---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 96 Name
 * @parent ---Menu 96---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 96 Symbol
 * @parent ---Menu 96---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 96 Show
 * @parent ---Menu 96---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 96 Enabled
 * @parent ---Menu 96---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 96 Ext
 * @parent ---Menu 96---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 96 Main Bind
 * @parent ---Menu 96---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 96 Actor Bind
 * @parent ---Menu 96---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 97---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 97 Name
 * @parent ---Menu 97---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 97 Symbol
 * @parent ---Menu 97---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 97 Show
 * @parent ---Menu 97---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 97 Enabled
 * @parent ---Menu 97---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 97 Ext
 * @parent ---Menu 97---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 97 Main Bind
 * @parent ---Menu 97---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 97 Actor Bind
 * @parent ---Menu 97---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 98---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 98 Name
 * @parent ---Menu 98---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 98 Symbol
 * @parent ---Menu 98---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 98 Show
 * @parent ---Menu 98---
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 98 Enabled
 * @parent ---Menu 98---
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 98 Ext
 * @parent ---Menu 98---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 98 Main Bind
 * @parent ---Menu 98---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 98 Actor Bind
 * @parent ---Menu 98---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 99---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 99 Name
 * @parent ---Menu 99---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Debug'
 *
 * @param Menu 99 Symbol
 * @parent ---Menu 99---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default debug
 *
 * @param Menu 99 Show
 * @parent ---Menu 99---
 * @desc This is the eval condition for this menu command to appear.
 * @default $gameTemp.isPlaytest()
 *
 * @param Menu 99 Enabled
 * @parent ---Menu 99---
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 99 Ext
 * @parent ---Menu 99---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 99 Main Bind
 * @parent ---Menu 99---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandDebug.bind(this)
 *
 * @param Menu 99 Actor Bind
 * @parent ---Menu 99---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 100---
 * @parent ---Menu Items---
 * @default
 *
 * @param Menu 100 Name
 * @parent ---Menu 100---
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.gameEnd
 *
 * @param Menu 100 Symbol
 * @parent ---Menu 100---
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default gameEnd
 *
 * @param Menu 100 Show
 * @parent ---Menu 100---
 * @desc This is the eval condition for this menu command to appear.
 * @default true
 *
 * @param Menu 100 Enabled
 * @parent ---Menu 100---
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isGameEndEnabled()
 *
 * @param Menu 100 Ext
 * @parent ---Menu 100---
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 100 Main Bind
 * @parent ---Menu 100---
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandGameEnd.bind(this)
 *
 * @param Menu 100 Actor Bind
 * @parent ---Menu 100---
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For those who wish to alter the various aspects of the main menu commands
 * without needing to touch the source code can use this plugin to do so.
 * Although this plugin mostly ports the menu creation process to the Plugin
 * Manager parameters, it allows for a cleaner way to handle the menu command
 * management process.
 *
 * ============================================================================
 * How to Use This Plugin
 * ============================================================================
 *
 * Each section in the parameters is divided up into various parts. Each of
 * these parts play a role in how the menu command functions. Here's what each
 * part does:
 *
 * Name
 * - This is how the command will appear visually in the main menu. This is an
 * eval, which means, it's code driven. If you want the command to appear just
 * as it is, use 'quotes' around it.
 *
 * Symbol
 * - This is the identifier for the command. Each command should have a unique
 * symbol, so much as to not cause conflicts with each command. However, shared
 * symbols are perfectly fine as long as you're fine with them performing the
 * same function when selected.
 *
 * Show
 * - This is an eval condition for whether or not the command shows up in the
 * main menu. If you wish for this to always show up, simply use 'true' without
 * the quotes.
 *
 * Enabled
 * - This is an eval condition for whether or not the command is enabled. The
 * difference between showing a command and enabling a command is that a
 * command can show, but it can't be selected because it isn't enabled. If you
 * wish for this command to always be enabled, use 'true' without the quotes.
 *
 * Ext
 * - Stands for extension. This serves as a secondary symbol for the command
 * and it can be used for pretty much anything. It has no direct impact on the
 * command unless the command's objective is related to the extension value.
 * The majority of commands do not need to make use of the Ext value.
 *
 * Main Bind
 * - This is an eval function that is to be ran when this command is selected
 * straight from the main menu. The function that is to be bound to this
 * command needs to be accessible from Scene_Menu is some way or another. For
 * commands that are meant to select an actor first, use
 * 'this.commandItem.bind(this)' without the quotes.
 *
 * Actor Bind
 * - This is an eval function that is to be ran when an actor is selected after
 * choosing this command, usually to push a scene. This function isn't needed
 * for any menu commands that don't require selecting an actor.
 *
 * ============================================================================
 * Examples
 * ============================================================================
 *
 * The following are some examples to help you add/alter/change the way
 * commands appear for your main menu.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.item
 *     Symbol: item
 *       Show: this.needsCommand('item')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandItem.bind(this)
 * Actor Bind:
 *
 * The item command is made using the above example. 'TextManager.item' is how
 * the command name will appear. It draws the name information from the
 * database Text Manager entry for 'Item' and uses whatever you put into the
 * database in here. The symbol 'item' is used to make the item command's
 * unique identifier. In order for the command to show, it will run a
 * 'needsCommand' function to check if it will appear. This 'needsCommand'
 * function is related to your database on whether or not you want the item to
 * appear there. In order for this command to be enabled, it will check for
 * whether or not the main commands are enabled, which is related to whether or
 * not there are actors in the current party. And finally, the line of code
 * 'this.commandItem.bind(this)' is the command that will run once the item
 * entry is selected.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.skill
 *     Symbol: skill
 *       Show: this.needsCommand('skill')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandPersonal.bind(this)
 * Actor Bind: SceneManager.push(Scene_Skill)
 *
 * The skill command is made using the above example. 'TextManager.skill' is
 * how the command name will appear. It draws the name information from the
 * database Text Manager entry for 'Skill' and uses whatever you put into the
 * database in here. The symbol 'skill' is used to make the skill command's
 * unique identifier. In order for the command to show, it will run a line code
 * 'needsCommand' function to check if it will appear. This 'needsCommand'
 * function is related to your database on whether or not you want the skill
 * option to appear there. In order for this command to be enabled, it will
 * check for whether or not the main commands are enabled, which is related to
 * whether or not there are actors in the current party. This time, the main
 * bind command is to send the player to the actor selection process using
 * 'this.commandPersonal.bind(this)' instead. Once the player selects an actor,
 * 'SceneManager.push(Scene_Skill)' is then ran to send the player to
 * Scene_Skill to manage the actor's skills.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: 'Common Event 1'
 *     Symbol: common event
 *       Show: false
 *    Enabled: true
 *        Ext: 1
 *  Main Bind: this.callCommonEvent.bind(this)
 * Actor Bind:
 *
 * This is a customized command that is included by default with the plugin.
 * This command's name is 'Common Event 1', but it can be changed to whatever
 * you want by simply changing what's in between the 'quotes' in the parameter
 * settings. The symbol is the identifier for all common events. However, by
 * default, this common event item does not show in the main menu. If you want
 * it to appear, set the Show option to 'true' without the quotes and it will
 * appear. Because the Enabled option is 'true', the command can always be
 * selected by the player. The Ext actually has a role with this command. The
 * Ext determines which common event is to be played. In this example, the Ext
 * value is 1, which means common event 1 will be ran when this command is
 * selected. Should the Ext value equal to 25, it will be common event 25 that
 * will run once this command is selected. The reason is because the Main Bind
 * for this command option is 'this.callCommonEvent.bind(this)', which is a
 * function included in this plugin to allow for common events to be ran.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - The gold window will now match the command window's width.
 *
 * Version 1.01:
 * - Added 'Hide Actor Window', 'Hide Gold Window', 'Blurry Background'
 * parameters for the plugin settings.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MainMenuManager');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MMMCmdAlign = String(Yanfly.Parameters['Command Alignment']);
Yanfly.Param.MMMCmdPosition = String(Yanfly.Parameters['Command Position']);
Yanfly.Param.MMMCmdCols = String(Yanfly.Parameters['Command Columns']);
Yanfly.Param.MMMCmdRows = String(Yanfly.Parameters['Command Rows']);
Yanfly.Param.MMMCmdWidth = String(Yanfly.Parameters['Command Width']);
Yanfly.Param.MMMHideActorWin = String(Yanfly.Parameters['Hide Actor Window']);
Yanfly.Param.MMMHideGoldWin = String(Yanfly.Parameters['Hide Gold Window']);
Yanfly.Param.MMMBlurryBG = String(Yanfly.Parameters['Blurry Background']);
Yanfly.MMM.Name = {};
Yanfly.MMM.Symbol = {};
Yanfly.MMM.Show = {};
Yanfly.MMM.Enabled = {};
Yanfly.MMM.Ext = {};
Yanfly.MMM.MainBind = {};
Yanfly.MMM.ActorBind = {};
for (Yanfly.i = 1; Yanfly.i <= 100; ++Yanfly.i) {
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Name'])";
  Yanfly.MMM.Name[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Symbol'])";
  Yanfly.MMM.Symbol[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Show'])";
  Yanfly.MMM.Show[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Enabled'])";
  Yanfly.MMM.Enabled[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Ext'])";
  Yanfly.MMM.Ext[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Main Bind'])";
  Yanfly.MMM.MainBind[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Actor Bind'])";
  Yanfly.MMM.ActorBind[Yanfly.i] = eval(Yanfly.line);
};

//=============================================================================
// SceneManager
//=============================================================================

Yanfly.MMM.SceneManager_snapForBackground = SceneManager.snapForBackground;
SceneManager.snapForBackground = function() {
    if (eval(Yanfly.Param.MMMBlurryBG)) {
      Yanfly.MMM.SceneManager_snapForBackground.call(this);
    } else {
      this._backgroundBitmap = this.snap();
    }
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Window_MenuCommand.prototype.makeCommandList = function() {
    for (var i = 1; i <= 100; ++i) {
      this.createCommand(i);
    }
};

Window_MenuCommand.prototype.addMainCommands = function() {
};

Window_MenuCommand.prototype.addFormationCommand = function() {
};

Window_MenuCommand.prototype.addOriginalCommands = function() {
};

Window_MenuCommand.prototype.addOptionsCommand = function() {
};

Window_MenuCommand.prototype.addSaveCommand = function() {
};

Window_MenuCommand.prototype.addGameEndCommand = function() {
};

Window_MenuCommand.prototype.createCommand = function(i) {
    var show = Yanfly.MMM.Show[i];
    if (show === '') return;
    if (!eval(show)) return;
    var name = Yanfly.MMM.Name[i];
    if (name === '') return;
    name = eval(name);
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') return;
    var enabled = eval(Yanfly.MMM.Enabled[i]);
    if (enabled === '') enabled = true;
    var ext = eval(Yanfly.MMM.Ext[i]);
    this.addCommand(name, symbol, enabled, ext);
    this.addSymbolBridge(symbol);
};

Window_MenuCommand.prototype.addSymbolBridge = function(symbol) {
    if (symbol === 'item') this.addMainCommands();
    if (symbol === 'formation') this.addFormationCommand();
    if (symbol === 'formation') this.addOriginalCommands();
    if (symbol === 'options') this.addOptionsCommand();
    if (symbol === 'save') this.addSaveCommand();
    if (symbol === 'gameEnd') this.addGameEndCommand();
};

Window_MenuCommand.prototype.itemTextAlign = function() {
    return Yanfly.Param.MMMCmdAlign;
};

Window_MenuCommand.prototype.windowWidth = function() {
    return eval(Yanfly.Param.MMMCmdWidth);
};

Window_MenuCommand.prototype.maxCols = function() {
    return eval(Yanfly.Param.MMMCmdCols);
};

Window_MenuCommand.prototype.numVisibleRows = function() {
    return eval(Yanfly.Param.MMMCmdRows);
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Yanfly.MMM.Window_MenuStatus_initialize =
    Window_MenuStatus.prototype.initialize;
Window_MenuStatus.prototype.initialize = function(wx, wy) {
    this._initX = wx;
    Yanfly.MMM.Window_MenuStatus_initialize.call(this, wx, wy);
};

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - this._initX;
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.MMM.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    Yanfly.MMM.Scene_Menu_create.call(this);
    this.repositionWindows();
};

Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this.createCommandWindowBinds();
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Yanfly.MMM.Scene_Menu_createGoldWindow =
    Scene_Menu.prototype.createGoldWindow;
Scene_Menu.prototype.createGoldWindow = function() {
    Yanfly.MMM.Scene_Menu_createGoldWindow.call(this);
    if (eval(Yanfly.Param.MMMHideGoldWin)) this._goldWindow.hide();
};

Yanfly.MMM.Scene_Menu_createStatusWindow =
    Scene_Menu.prototype.createStatusWindow;
Scene_Menu.prototype.createStatusWindow = function() {
    Yanfly.MMM.Scene_Menu_createStatusWindow.call(this);
    if (eval(Yanfly.Param.MMMHideActorWin)) this._statusWindow.hide();
};

Scene_Menu.prototype.createCommandWindowBinds = function() {
  this._actorBinds = {};
  for (var i = 1; i <= 100; ++i) {
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') continue;
    var bind = Yanfly.MMM.MainBind[i];
    if (bind === '') continue;
    eval("this._commandWindow.setHandler('" + symbol + "', " + bind + ")");
    var actorBind = Yanfly.MMM.ActorBind[i];
    if (actorBind === '') continue;
    this._actorBinds[symbol] = actorBind;
  }
};

Scene_Menu.prototype.resizeGoldWindow = function() {
    this._goldWindow.width = this._commandWindow.width;
    this._goldWindow.createContents();
    this._goldWindow.refresh();
};

Scene_Menu.prototype.repositionWindows = function() {
    this.resizeGoldWindow();
    if (Yanfly.Param.MMMCmdPosition === 'right') {
      this._commandWindow.x = Graphics.boxWidth - this._commandWindow.width;
      this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
      this._statusWindow.x = 0;
    } else if (Yanfly.Param.MMMCmdPosition === 'left') {
      this._commandWindow.x = 0;
      this._goldWindow.x = 0;
      this._statusWindow.x = this._commandWindow.width;
    }
};

Yanfly.MMM.Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
Scene_Menu.prototype.commandPersonal = function() {
    Yanfly.MMM.Scene_Menu_commandPersonal.call(this);
    this._statusWindow.show();
};

Scene_Menu.prototype.onPersonalOk = function() {
    var symbol = this._commandWindow.currentSymbol();
    var actorBind = this._actorBinds[symbol];
    if (!actorBind) return;
    eval(actorBind);
};

Yanfly.MMM.Scene_Menu_onPersonalCancel = Scene_Menu.prototype.onPersonalCancel;
Scene_Menu.prototype.onPersonalCancel = function() {
    Yanfly.MMM.Scene_Menu_onPersonalCancel.call(this);
    if (eval(Yanfly.Param.MMMHideActorWin)) this._statusWindow.hide();
};

Scene_Menu.prototype.callCommonEvent = function() {
    var ext = this._commandWindow.currentExt();
    $gameTemp.reserveCommonEvent(parseInt(ext));
    this.popScene();
};

Scene_Menu.prototype.commandDebug = function() {
    SceneManager.push(Scene_Debug);
};

//=============================================================================
// End of File
//=============================================================================
