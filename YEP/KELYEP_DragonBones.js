//=============================================================================
// Yanfly Engine Plugins + TheGreenKel - DragonBones Battle Integration
// KELYEP_DragonBones.js
//=============================================================================

var Imported = Imported || {};
Imported.KELYEP_DragonBones = true;

var Yanfly = Yanfly || {};
Yanfly.KelBattle = Yanfly.KelBattle || {};
Yanfly.KelBattle.version = 1.05;

//=============================================================================
 /*:
 * @plugindesc v1.05 DragonBones Integration with YEP library compatibility!
 * Use DragonBones assets with your battlers!
 * @author Yanfly Engine Plugins + TheGreenKel Collaboration
 *
 * @param ---General---
 * @default
 * 
 * @param Assets Path
 * @parent ---General---
 * @desc The folder that store all of the files exported from
 * DragonBones Software 5.2 (or greater)
 * @default ./dragonbones_assets/
 * 
 * @param Support UpperCase Animation Names
 * @text UpperCase Animation Names
 * @parent ---General---
 * @type boolean
 * @on Support
 * @off Don't
 * @desc If your animation names are all lowercase, then turn this
 * off for much better performance. ON - true   OFF - false
 * @default true
 *
 * @param Debug Console Text
 * @parent ---General---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show various status updates on the console?
 * SHOW - true   HIDE - false
 * @default false
 *
 * @param ---Preload---
 * @default
 * 
 * @param Preload Assets
 * @parent ---Preload---
 * @type text[]
 * @desc This is a list of all DragonBones assets to be preloaded at
 * game launch after the database is fully loaded.
 * @default []
 *
 * @param Auto-Preload Battlers
 * @parent ---Preload---
 * @type boolean
 * @on Auto-Preload
 * @off Manual-Preload
 * @desc Automatically preload battlers when assigned an asset from
 * notetags? Recommended: true    YES - true     NO - false
 * @default true
 *
 * @param ---Defaults---
 * @default
 *
 * @param Replace Battler Sprite
 * @parent ---Defaults---
 * @type boolean
 * @on Replace
 * @off Keep
 * @desc Fully replace the battler's sprite if it has an associated
 * DragonBones asset? REPLACE - true     KEEP - false
 * @default true
 *
 * @param Default ScaleX
 * @parent ---Defaults---
 * @type number
 * @decimals 1
 * @desc The default amount to scale a DragonBones battler's X property.
 * @default 0.5
 *
 * @param Default ScaleY
 * @parent ---Defaults---
 * @type number
 * @decimals 1
 * @desc The default amount to scale a DragonBones battler's Y property.
 * @default 0.5
 *
 * @param Default Width
 * @parent ---Defaults---
 * @type number
 * @desc The default amount to set a DragonBones battler's width.
 * @default 100
 *
 * @param Default Height
 * @parent ---Defaults---
 * @type number
 * @desc The default amount to scale a DragonBones battler's height.
 * @default 100
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin, made by TheGreenKel, and collaborated with Yanfly, will allow
 * you to use skeletal animations made by DragonBones for your battle system!
 * This means that with skeletal animation, you can make your battles look
 * extremely fluid, more flexible animations outside of only 3 frames per
 * motion, more than 18 possible motions, get rid of sprite based resources for
 * faster loading times, and smaller file sizes for your games! In other words,
 * there's practically no drawback to using it provided you have the resources.
 *
 * This is a collaboration plugin by TheGreenKel and Yanfly to ensure
 * compatibility with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * MIT License and Terms of Use
 * ============================================================================
 *
 * MIT License for the remaining code of the Plugin
 *
 * Copyright 2017 TheGreenKel
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Yanfly Engine Plugins Terms of Use
 *
 * Any original material made by Yanfly is free for use with both free and
 * commercial RPG Maker games unless specified otherwise. I do not demand
 * royalties or special liberties if you choose to use Yanfly original content
 * in your commercial games. (Although a free copy of your game would be nice!)
 * I only ask that you provide 'Yanfly' or 'Yanfly Engine' a spot in your
 * game’s credits.
 *
 * Any edits made to Yanfly original material are okay as long as you still
 * provide the proper credit. Any non-Original content posted, linked, or
 * shared on my website and channel will still require you to contact the
 * respective parties for permission of use.
 *
 * ============================================================================
 * Installation Instructions
 * ============================================================================
 *
 * Follow these instructions to integrate DragonBones into your game:
 *
 * 1. Make sure you have at least RPG Maker MV version 1.4.0 or above.
 *    Recommended version is 1.5.0 and above!
 *
 * 2. Download the Installation Pack from Yanfly.moe or from:
 *    https://thegreenkel.itch.io/dragonbones-rpg-maker-mv-plugin
 *
 * 3. Extract the Installation Pack using WinZip or WinRar.
 *
 * 4. Copy the contents of the 'js' folder into your project's folder matching
 *    the directory structure and files.
 *
 * 5. Open up your game project's index.html file with Notepad/HTML editor
 *
 * 6. Find <script type="text/javascript" src="js/libs/pixi-picture.js">
 *    and insert the following lines under it:
 *
 * <script type="text/javascript" src="js/libs/dragonbones/dragonBones.js"></script>
 * <script type="text/javascript" src="js/libs/dragonbones/dragonBonesPixi.js"></script>
 *
 * 7. Install this plugin by adding it through your Plugin Manager.
 *
 * 8. Make sure this plugin is located UNDER the following plugins:
 *      YEP_BattleEngineCore
 *      YEP_X_ActSeqPack1
 *      YEP_X_ActSeqPack2
 *      YEP_X_ActSeqPack3
 *      YEP_X_AnimatedSVEnemies
 *
 * 9. Copy the DragonBone assets from the Installation pack into the respective
 *    folder you wish for your game project. Adjust the 'Assets Path' plugin
 *    parameter to match the folder path.
 *
 * 10. Save your game project!
 *
 * ============================================================================
 * General Usage by TheGreenKel
 * ============================================================================
 *
 * The plugin is only tested on DragonBones 5.2 & 5.3. I rewrote a chunk of the
 * plugin to make it compatible with Yanfly plugins, and possibly more.
 *
 * Usage:    
 *     1) After confirming your DragonBones Armature/Skeleton shares the name of
 *        your Battler, export DragonBones data (with Data Version set to 5.0)
 *        into the 'Assets Path' parameter. Default is 'dragonbones_assets'
 * 
 *     2) Add the new armature data into 'Preload Assets' parameter
 * 
 *     3) This plugin will automatically look for the 18 default 
 *        animations inside the dragonbones armature. 
 *        [walk, swing, damage, dead, wait, chant, guard, etc.]
 * 
 *     4) You can overwrite default animation by using 
 *        'dragonbone_ani_' notes.  
 *        Example: 'dragonbone_ani_walk:steady', the 'steady' animation 
 *        will be played inplace of the 'walk'
 * 
 *     5) Vanilla actor/enemies now show up by default.  You need to 
 *        replace it with a blank image.  Check the demo project to see
 *        what a blank image would look like.  This change will make this
 *        plugin more compatible with plugins that changes UI.
 *          
 *     6) If you are using Yanfly Action Sequence 2, you can now play any 
 *        dragonbones' animation using the 'motion' command.
 *        Example: "motion dance".  The game will look into the dragonbones
 *        armature to see if it has the 'dance' animation.  If the animation 
 *        is there then the animation will be played.
 * 
 *     7) You can now control whether an animation is looping or not 
 *        by setting the 'Play Times' variable inside the Dragonbones Editor.
 *  
 *     8) Get more info/tutorial at forum link: 
 *        https://forums.rpgmakerweb.com/index.php?threads/rmmv-dragonbones-2d-animation-integration.81027/
 *
 * Important DragonBones Animation note:    
 *        A limitation of DragonBones Data version 5.0 is that you must use
 *        the same animation curves for position/rotation/scale keys.
 *        Below is an example of how the DragonBones and exported version
 *        differ because it prioritized the positions animation curve.
 *        https://gyazo.com/fd3539028c0ecadd2a727b99ac8398a4
 *        https://gyazo.com/e79427f5f5b5e4b56a15dfc2bf76253f
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Use the following notetags to make full use of your DragonBone battler
 * integration for your RPG Maker MV game!
 *
 * Actor and Enemy Notetags:
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone: name>
 *   <DragonBone Battler: name>
 *   - Sets the DragonBones associated with this actor/enemy to be "name". The
 *   name will be associated with the assets used. It will be used to check for
 *   associated filenames that end with _ske.json, _tex.json, and _tex.png. The
 *   listed assets must be found in your assets folder.
 *
 *   * Note: The name is case sensitive.
 *   * Note: If the plugin parameter 'Auto-Preload Battlers' is set to 'true',
 *   then this will add the battler to the list of assets to be preloaded.
 *
 *   **EXAMPLES**
 *
 *   <DragonBone: Demon>
 *   <DragonBone: DragonBoy>
 *   <DragonBone: Swordsman>
 *   <DragonBone: Ubbie>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   If a DragonBones battler is not detected here, it will not be able to
 *   utilize the following notetags and their effects.
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone ScaleX: n>
 *   <DragonBone ScaleY: n>
 *   - Replace 'n' with a number. It can be positive or negative, whole or
 *   decimal number. This will affect how much the battler will be scaled by.
 *   A number less than 1 will be smaller than the base asset itself while a
 *   number larger than 1 will be larger than the base asset. If the number is
 *   negative, it will be mirrored horizontally or vertically depending if
 *   ScaleX or ScaleY is used respectively.
 *
 *   * Note: This will overwrite the setting set in the plugin parameters for
 *   'Default ScaleX' and 'Default ScaleY'.
 * 
 *   **EXAMPLES**
 *
 *   <DragonBone ScaleX: -0.3>
 *   <DragonBone ScaleY: 0.3>
 *
 *   <DragonBone ScaleX: 1.2>
 *   <DragonBone ScaleY: 1.2>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Width: x>
 *   <DragonBone Height: x>
 *   - This allows you to set the 'width' and 'height' of the DragonBones
 *   battler by replacing 'x' with an integar value. This value is mostly used
 *   for collision purposes as well as mouse click activation. These values can
 *   be adjusted because each battler can be a dynamic width/height so it is
 *   important for you to adjust them properly. If not adjusted, they will take
 *   on the default width/height values found in the plugin parameters.
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Width: 150>
 *   <DragonBone Height: 180>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Keep Sprite>
 *   <DragonBone Replace Sprite>
 *   - Lets you decide if you want to keep the original sprite used for the
 *   actor/enemy or have the DragonBone battler replace it altogether. If you
 *   opt to replace the sprite, then the sprite will be hidden during battle
 *   as long as there is a DragonBone battler in place of it.
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Ani motion: animation>
 *   - Replace 'motion' with a proper battler motion name. 'animation' is to be
 *   replaced with a skeletal animation name from DragonBones. This is for any
 *   motion that doesn't have a specified skeletal animation of the same name
 *   in DragonBones.
 *
 *   Replace 'motion' with one of the following:
 *                  attack
 *     walk         thrust        escape
 *     wait         swing         victory
 *     chant        missile       dying
 *     guard        skill         abnormal
 *     damage       spell         sleep
 *     evade        item          dead
 *
 *   * Note: The 'animation' to be replaced is case sensitive.
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Ani Attack: normalAttack>
 *   <DragonBone Ani Walk: steady>
 *   <DragonBone Ani Damage: hit>
 *   <DragonBone Ani Dead: dead>
 *   <DragonBone Ani Wait: steady>
 *   <DragonBone Ani Chant: stun>
 *   <DragonBone Ani Swing: stun>
 *   <DragonBone Ani Evade: stun>
 *   <DragonBone Ani Thrust: stun>
 *   <DragonBone Ani Missile: stun>
 *   <DragonBone Ani Skill: stun>
 *   <DragonBone Ani Spell: stun>
 *   <DragonBone Ani Item: stun>
 *   <DragonBone Ani Victory: stun>
 *   <DragonBone Ani Dying: stun>
 *   <DragonBone Ani Abnormal: stun>
 *   <DragonBone Ani Sleep: stun>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   For those who want a more condensed way to adjust the DragonBone battler
 *   settings, you can use the following notetag format:
 *
 *   <DragonBone Settings>
 *    Battler: name             // The name used for the DB battler
 *    
 *    ScaleX: 0.3               // Scale X used for the DB battler
 *    ScaleY: 0.3               // Scale Y used for the DB battler
 *    Width: 150                // Width used for the DB battler
 *    Height: 180               // Height used for the DB battler
 *
 *    // Below are a bunch of battler motions tied to skeletal animations
 *
 *    Ani Attack: normalAttack
 *    Ani Walk: steady
 *    Ani Damage: hit
 *    Ani Dead: dead
 *    Ani Wait: steady
 *    Ani Chant: stun
 *    Ani Swing: stun
 *    Ani Evade: stun
 *    Ani Thrust: stun
 *    Ani Missile: stun
 *    Ani Skill: stun
 *    Ani Spell: stun
 *    Ani Item: stun
 *    Ani Victory: stun
 *    Ani Dying: stun
 *    Ani Abnormal: stun
 *    Ani Sleep: stun
 *    
 *    Keep Sprite             // Allow the sprite to show alongside DB battler
 *    Replace Sprite          // Hide the sprite while the DB battler is active
 *   </DragonBone Settings>
 *
 *   - Anything placed in between the notetags: <DragonBone Settings> and
 *   </DragonBone Settings> will be used to determine the properties set for
 *   the DragonBone battler used for the actor/enemy. With the exception of the
 *   'name' property, all other properties are optional and can be omitted from
 *   the list of properties to sandwich inbetween your notetags.
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Settings>
 *    Battler: Ubbie
 *    Replace Sprite
 *    ScaleX: -0.2
 *    ScaleY: 0.2
 *    Width: 150
 *    Height: 100
 *   </DragonBone Settings>
 *
 *   <DragonBone Settings>
 *    Battler: Demon
 *    Replace Sprite
 *    ScaleX: 0.3
 *    ScaleY: 0.3
 *    Width: 140
 *    Height: 140
 *   </DragonBone Settings>
 *
 *   <DragonBone Settings>
 *    Battler: Swordsman
 *    Replace Sprite
 *    ScaleX: -0.4
 *    ScaleY: 0.4
 *    Width: 150
 *    Height: 180
 *   </DragonBone Settings>
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Bugfix provided for crashes made by animations played on non-battler
 * sprites.
 *
 * Version 1.04:
 * - Bugfix provided by SwiftIllusion regarding the animation positioning on
 * DragonBones battlers.
 *
 * Version 1.03:
 * - Fixed an issue with state sprites appearing behind DragonBones assets.
 *
 * Version 1.02:
 * - Change to collapse effect occuring after death animation is completed so
 * that it fades away like normal instead of being stuck on the field.
 * Credits: Swift Illusion
 *
 * Version 1.01:
 * - If using YEP_X_AnimatedSVEnemies, enemies with DragonBones battlers will
 * be considered animated enemies, too.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.3.5") {

//=============================================================================
// Parameter Variables
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel and Yanfly
//=============================================================================

var dragonBonesIntegration = [];

dragonBonesIntegration.ArmatureDatabaseEnemy = [];
dragonBonesIntegration.ArmatureDatabaseActor = [];

dragonBonesIntegration.currentLoadIndex = 0;
dragonBonesIntegration.lastFileName = '';
dragonBonesIntegration.bIsPreloading = false;

Yanfly.Parameters = PluginManager.parameters('KELYEP_DragonBones');

dragonBonesIntegration.AssetsPath = String(Yanfly.Parameters['Assets Path']);
dragonBonesIntegration.supportUpperCaseNames =
  JSON.parse(Yanfly.Parameters['Support UpperCase Animation Names']);
dragonBonesIntegration.consoleDebug =
  JSON.parse(Yanfly.Parameters['Debug Console Text']);

dragonBonesIntegration.AssetsArray = 
  JSON.parse(Yanfly.Parameters['Preload Assets']);
dragonBonesIntegration.autoPreloadBattlers = 
  JSON.parse(Yanfly.Parameters['Auto-Preload Battlers']);

dragonBonesIntegration.ReplaceBattleSprite =
  JSON.parse(Yanfly.Parameters['Replace Battler Sprite']);
dragonBonesIntegration.DefaultScaleX = 
  Number(Yanfly.Parameters['Default ScaleX']);
dragonBonesIntegration.DefaultScaleY = 
  Number(Yanfly.Parameters['Default ScaleY']);
dragonBonesIntegration.DefaultWidth = 
  Number(Yanfly.Parameters['Default Width']);
dragonBonesIntegration.DefaultHeight = 
  Number(Yanfly.Parameters['Default Height']);

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel and Yanfly
//=============================================================================

Yanfly.KelBattle.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.KelBattle.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_KELYEP_DragonBones) {
    this.processDragonBonesBattleIntegrationNotetags1($dataActors);
    this.processDragonBonesBattleIntegrationNotetags1($dataEnemies);
    dragonBonesIntegration.PreLoadAllArmatures();
    Yanfly._loaded_KELYEP_DragonBones = true;
  }

  if (dragonBonesIntegration.bIsPreloading === true) {
    //console.log('Running isDatabaseLoaded');
    return false;
  }
  return true;
};

DataManager.processDragonBonesBattleIntegrationNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    this.processDragonBonesDefaults(obj);
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      // Standard Notetags
      if (line.match(/<(?:DB|DRAGONBONE)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)) {
        obj.meta.dragonbone = String(RegExp.$1).trim();
      } else if (line.match(/<(?:DB|DRAGONBONE):[ ]*(.*)>/i)) {
        obj.meta.dragonbone = String(RegExp.$1).trim();
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]SCALEX:[ ](.*)>/i)) {
        obj.meta.dragonbone_scalex = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]SCALEY:[ ](.*)>/i)) {
        obj.meta.dragonbone_scaley = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]WIDTH:[ ](.*)>/i)) {
        obj.meta.dragonbone_width = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]HEIGHT:[ ](.*)>/i)) {
        obj.meta.dragonbone_height = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]ANI[ ](.*):[ ](.*)>/i)) {
        var ani1 = String(RegExp.$1).trim().toLowerCase();
        var ani2 = String(RegExp.$2).trim();
        obj.meta['dragonbone_ani_' + ani1] = ani2;
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]REPLACE SPRITE>/i)) {
        obj.meta.dragonbone_replace = true;
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]KEEP SPRITE>/i)) {
        obj.meta.dragonbone_replace = false;
      // Grouped Notetags
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ](?:SETTINGS|SETTING)>/i)) {
        evalMode = 'dragonbone settings';
      } else if (line.match(/<\/(?:DB|DRAGONBONE)[ ](?:SETTINGS|SETTING)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'dragonbone settings') {
        if (line.match(/(?:BATTLER|SKIN|NAME):[ ]*(.*)/i)) {
          obj.meta.dragonbone = String(RegExp.$1).trim();
        } else if (line.match(/SCALEX:[ ](.*)/i)) {
          obj.meta.dragonbone_scalex = Number(RegExp.$1);
        } else if (line.match(/SCALEY:[ ](.*)/i)) {
          obj.meta.dragonbone_scaley = Number(RegExp.$1);
        } else if (line.match(/ANI[ ](.*):[ ](.*)/i)) {
          var ani1 = String(RegExp.$1).trim().toLowerCase();
          var ani2 = String(RegExp.$2).trim();
          obj.meta['dragonbone_ani_' + ani1] = ani2;
        } else if (line.match(/WIDTH:[ ](.*)/i)) {
          obj.meta.dragonbone_width = Number(RegExp.$1);
        } else if (line.match(/HEIGHT:[ ](.*)/i)) {
          obj.meta.dragonbone_height = Number(RegExp.$1);
        } else if (line.match(/REPLACE SPRITE/i)) {
          obj.meta.dragonbone_replace = true;
        } else if (line.match(/KEEP SPRITE/i)) {
          obj.meta.dragonbone_replace = false;
        }
      }
    }
    DataManager.processDragonBonesData(obj);
  }
};

DataManager.processDragonBonesDefaults = function(obj) {
  obj.meta.dragonbone = obj.meta.dragonbone || '';
  obj.meta.dragonbone_scalex = obj.meta.dragonbone_scalex ||
    dragonBonesIntegration.DefaultScaleX;
  obj.meta.dragonbone_scaley = obj.meta.dragonbone_scaley ||
    dragonBonesIntegration.DefaultScaleY;
  obj.meta.dragonbone_width = obj.meta.dragonbone_width ||
    dragonBonesIntegration.DefaultWidth;
  obj.meta.dragonbone_height = obj.meta.dragonbone_height ||
    dragonBonesIntegration.DefaultHeight;

  obj.meta.dragonbone_replace = dragonBonesIntegration.ReplaceBattleSprite;
};

DataManager.processDragonBonesData = function(obj) {
  if (!obj.meta.dragonbone) return;
  if (!dragonBonesIntegration.AssetsArray.contains(obj.meta.dragonbone)) {
    dragonBonesIntegration.AssetsArray.push(obj.meta.dragonbone);
  }
};

//=============================================================================
// dragonBonesIntegration
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================
    
//create a bunch of 'DragonBoy' armature to test performance
dragonBonesIntegration.Performance = function(iMax, jMax) {
  if (iMax === undefined || iMax === null) {
    iMax = 10;
  }
  if (!jMax === undefined || jMax === null) {
    jMax = 10;
  }
  for (var i = 0; i < iMax; i++) {
    for (var j = 0; j < jMax; j++) {
      var myArmature = 
        dragonBones.PixiFactory.factory.buildArmatureDisplay("DragonBoy");
      myArmature.animation.play("walk");
      SceneManager._scene.addChild(myArmature);
      myArmature.x = i*40 + 200;
      myArmature.y = j*40 + 200;
      myArmature.scale.x = 0.3;
      myArmature.scale.y = 0.3;
    }
  }
};

//Load complete
dragonBonesIntegration.LoadComplete = function(loader, resources) {
  var lastFileName = dragonBonesIntegration.lastFileName;
  //console.log("DragonBone Load Complete: " + lastFileName);

  //load dragon bone armature into memory ready for use by
  //dragonBonesIntegration.CreateArmature()
  dragonBones.PixiFactory.factory.parseDragonBonesData(resources[lastFileName +
    "dragonBonesData"].data);
  dragonBones.PixiFactory.factory.parseTextureAtlasData(resources[lastFileName +
    "textureDataA"].data, resources[lastFileName + "textureA"].texture);
  
  //load next dragonbone armature if not done
  if (dragonBonesIntegration.bIsPreloading) {
    dragonBonesIntegration.currentLoadIndex++;
    dragonBonesIntegration.PreLoadAllArmatures();
  }

};

//Load DragonBone data for use by dragonBonesIntegration.CreateArmature()
dragonBonesIntegration.Load = function(filename) {
  if (filename) {
    filename = filename.trim();
    dragonBonesIntegration.lastFileName = filename;

    PIXI.loader
    .add(filename + "dragonBonesData", dragonBonesIntegration.AssetsPath +
      filename + "_ske.json")
    .add(filename + "textureDataA", dragonBonesIntegration.AssetsPath +
      filename + "_tex.json")
    .add(filename + "textureA", dragonBonesIntegration.AssetsPath + filename +
      "_tex.png");
    PIXI.loader.once("complete", dragonBonesIntegration.LoadComplete, this,
      filename);
    PIXI.loader.load();
  }
};

//Preload all DragonBones data assigned in 'Preload Assets' parameter
//This is done when this plugin is loaded.
dragonBonesIntegration.PreLoadAllArmatures = function() {
  //only load what is inside of dragonBoneAssetsArray
  var index = dragonBonesIntegration.currentLoadIndex;
  if (index < dragonBonesIntegration.AssetsArray.length) {
    dragonBonesIntegration.bIsPreloading = true;
    dragonBonesIntegration.Load(dragonBonesIntegration.AssetsArray[index]);
  } else {
    dragonBonesIntegration.bIsPreloading = false;
    //SceneManager.run(Scene_Boot);
  }
};

//Create DragonBones armature ready for display on Scene.
//DragonBones armature must be already loaded by dragonBonesIntegration.Load()
dragonBonesIntegration.CreateArmature = function(armatureName, x, y) {
  var tempArmature = 
    dragonBones.PixiFactory.factory.buildArmatureDisplay(armatureName);
  if (tempArmature) {
    tempArmature.x = x;
    tempArmature.y = y;
  }
  return tempArmature;
}

//Play animation on actor/enemies.  This also handle default and overwrite
//animation behavior
dragonBonesIntegration.PlayAnimationOnBattler = function(battler, aniName) {
  //console.log("PlayAnimationOnBattler: " + battler.name() + " animation =
  //" + aniName);
  var armature;
  var result = false;

  if (battler && aniName) {
    if (battler.hasDragonBone === true) {
      //select armature depending on enemy or actor
      var index = battler.dragonboneIndex
      if (battler.isActor()) {
        armature = dragonBonesIntegration.ArmatureDatabaseActor[index];
      } else {
        armature = dragonBonesIntegration.ArmatureDatabaseEnemy[index];
      }

      //check for overwrite animation from dragonbone_ani Note tag
      var cmd = aniName.toLowerCase();
      var dragonBoneaniName = battler.dragonboneAnimation[cmd];
      if (dragonBoneaniName) {
        //console.log("Overwriting Animation: " + cmd + " with " + 
        //dragonBoneaniName);
        cmd = dragonBoneaniName;
      }
      
      //play animation if armature is valid
      if (armature) { 
        //if animation is found then play it
        if (armature.animation.animationList.contains(cmd)) {
          //if animation name match exactly then play
          armature.animation.play(cmd);
          result = true;
        } else if (dragonBonesIntegration.supportUpperCaseNames === true) {
          //search for animation name with case-insensitive.  Higher memory
          // cost + performance
          //Prefer method is to have all dragonbones animation be lower case.
          //console.log("supportUpperCaseNames: Search for animation with 
          //case-insensitive");
          for (var i = 0; i < armature.animation.animationList.length; i++) {
            var element = armature.animation.animationList[i];
            if (cmd === element.toLowerCase()) {
              //console.log("actionMotionTarget: Found lower case match for
              //" + cmd + " with " + element);
              armature.animation.play(element);
              result = true;
              break;
            }                                
          }
        } else {
          if (dragonBonesIntegration.consoleDebug) {
            console.log("PlayAnimationOnBattler: " + battler.name() +
              " Animation '" + aniName + "' not found.");
          }
        }
      }     
    }
  }

  return result;
};

//=============================================================================
// SceneManager
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

//(Must have for animation) Tick function required for dragonbone animations
dragonBonesIntegration.SceneManager_update = SceneManager.update;
SceneManager.update = function() {
  dragonBonesIntegration.SceneManager_update.call(this);

  if (dragonBones.PixiFactory._clock) {
    dragonBones.PixiFactory._clock.advanceTime(-1);
  }
};

//=============================================================================
// Spriteset_Battle
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

// CREATE DRAGONBONES ARMATURE DURING SPRITESET_BATTLE
Spriteset_Battle.prototype.createEnemies = function() {
  //enemies is an array of Game_Enemy
  var enemies = $gameTroop.members();
  var sprites = [];

  for (var i = 0; i < enemies.length; i++) {
    sprites[i] = new Sprite_Enemy(enemies[i]);

    var enemyId = enemies[i]._enemyId;

    var tempArmatureName = $dataEnemies[enemyId].meta.dragonbone;
    var tempScaleX = $dataEnemies[enemyId].meta.dragonbone_scalex;
    var tempScaleY = $dataEnemies[enemyId].meta.dragonbone_scaley;
    var tempStartAnimation = $dataEnemies[enemyId].meta.dragonbone_ani_walk;

    if (tempArmatureName) {
      //Delete last battle armature
      if (dragonBonesIntegration.ArmatureDatabaseEnemy[i]) {
        dragonBonesIntegration.ArmatureDatabaseEnemy[i].dispose();
      }

      //create new armature
      dragonBonesIntegration.ArmatureDatabaseEnemy[i] = 
        dragonBonesIntegration.CreateArmature(tempArmatureName, 0, 0);
  
      if (dragonBonesIntegration.ArmatureDatabaseEnemy[i]) {
        //tell whether a battler has a dragonbone armature
        enemies[i].hasDragonBone = true;

        //Store index of armature for later use
        //Can't store armature on enemy directly because of potential memory 
        //leak issue
        enemies[i].dragonboneIndex = i;
        enemies[i].dragonboneAnimation = [];

        //parse meta data into animation
        for (var key in $dataEnemies[enemyId].meta) {
          if ($dataEnemies[enemyId].meta.hasOwnProperty(key)) {
            var animationIndex = key.split("dragonbone_ani_");
            //console.log("animationIndex = " + animationIndex);
            if (animationIndex[1]) {
              enemies[i].dragonboneAnimation[animationIndex[1]] =
                $dataEnemies[enemyId].meta[key];
            }
          }
        }

        //set up auto transition to idle
        //transition to idle when animation finish playing.  
        //This should stop most animation hitches.
        enemies[i].AutoTransitionToIdle = function(event) {
          if (dragonBonesIntegration.consoleDebug) {
            console.log("Enemy AutoTransitionToIdle");
          }
          switch (event.type) {
            case dragonBones.EventObject.COMPLETE:
              //if actor is not knocked out
              if (this._states.contains(1) === false) {
                //var idleAnimation = this.dragonboneAnimation['walk'];
                //dragonBonesIntegration.ArmatureDatabaseEnemy
                //[this.dragonboneIndex].animation.play(idleAnimation);
                dragonBonesIntegration.PlayAnimationOnBattler(this, "walk");
              } else {
                dragonBonesIntegration.Game_Enemy_prototype_performCollapse.call(this);
              };
              break;
            default:
              //nothing
          }                                           
        }

        //Automatically transition to idle when animation is complete by using 
        //Event
        var enemyData = dragonBonesIntegration.ArmatureDatabaseEnemy[i];
        enemyData.addEvent(dragonBones.EventObject.COMPLETE,
          enemies[i].AutoTransitionToIdle, 
          enemies[i]);

        //play default idle animation on creation    
        dragonBonesIntegration.PlayAnimationOnBattler(enemies[i], "walk");   

        //set custom scale
        if (tempScaleX) {
          dragonBonesIntegration.ArmatureDatabaseEnemy[i].scale.x = tempScaleX;
        }

        //set custom scale            
        if (tempScaleY) {
          dragonBonesIntegration.ArmatureDatabaseEnemy[i].scale.y = tempScaleY;
        }

        sprites[i].addChild(dragonBonesIntegration.ArmatureDatabaseEnemy[i]);
      }

    } else {
      enemies[i].dragonboneIndex = null;
    }
  }

  sprites.sort(this.compareEnemySprite.bind(this));

  for (var i = 0; i < sprites.length; i++) {
    this._battleField.addChild(sprites[i]);
  }

  this._enemySprites = sprites;
}

Spriteset_Battle.prototype.createActors = function() {
  this._actorSprites = [];
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
    this._actorSprites[i] = new Sprite_Actor();

    var actorId = $gameParty._actors[i];
    if (actorId) {
      //console.log($dataActors[actorId]);
      var tempArmatureName = $dataActors[actorId].meta.dragonbone;
      var tempScaleX = $dataActors[actorId].meta.dragonbone_scalex;
      var tempScaleY = $dataActors[actorId].meta.dragonbone_scaley;
      
      if (tempArmatureName) {
        //Delete last battle armature
        if (dragonBonesIntegration.ArmatureDatabaseActor[i]) {
          dragonBonesIntegration.ArmatureDatabaseActor[i].dispose();
        }

        //create new armature
        dragonBonesIntegration.ArmatureDatabaseActor[i] = 
          dragonBonesIntegration.CreateArmature(tempArmatureName, 0, 0);
        
        //initialize dragon data inside the game actor in order to handle 
        //animation state changes
        if (dragonBonesIntegration.ArmatureDatabaseActor[i]) {
          //tell whether a battler has a dragonbone armature
          $gameActors.actor(actorId).hasDragonBone = true;
          $gameActors.actor(actorId).dragonboneIndex = i;
          $gameActors.actor(actorId).dragonboneAnimation = [];

          //transition to idle when animation finish playing.  This should stop 
          //most animation hitches.
          $gameActors.actor(actorId).AutoTransitionToIdle = function(event) {
            switch (event.type) {
              case dragonBones.EventObject.COMPLETE:
                //if actor is not knocked out
                if (this._states.contains(1) === false) {
                  //var idleAnimation = this.dragonboneAnimation['walk'];
                  //dragonBonesIntegration.ArmatureDatabaseActor
                  //[this.dragonboneIndex].animation.play(idleAnimation); 
                  this.lastMotionType = null;
                  dragonBonesIntegration.PlayAnimationOnBattler(this, "walk");
                }
                break;
              default:
                //nothing
            }                                           
          }

          //Automatically transition to idle when animation is complete by using
          //Event
          var actorData = dragonBonesIntegration.ArmatureDatabaseActor[i];
          actorData.addEvent(dragonBones.EventObject.COMPLETE,
            $gameActors.actor(actorId).AutoTransitionToIdle, 
            $gameActors.actor(actorId));

          //parse meta data into animation
          for (var key in $dataActors[actorId].meta) {
            if ($dataActors[actorId].meta.hasOwnProperty(key)) {
              var animationIndex = key.split("dragonbone_ani_");
              if (animationIndex[1]) {
                var actor = $gameActors.actor(actorId)
                actor.dragonboneAnimation[animationIndex[1]] = 
                  $dataActors[actorId].meta[key];
              }
              //console.log('Key = ' + key +  ' :: ' +  animationIndex + " = " +
              //$dataActors[actorId].meta[key]);
              //console.log(key + " -> " + $dataActors[actorId].meta[key]);
            }
          }

          //set scale
          if (tempScaleX) {
            dragonBonesIntegration.ArmatureDatabaseActor[i].scale.x = 
              tempScaleX;
          }
          if (tempScaleY) {
            dragonBonesIntegration.ArmatureDatabaseActor[i].scale.y = 
              tempScaleY;
          }
          var actorData = dragonBonesIntegration.ArmatureDatabaseActor[i];
          this._actorSprites[i].addChild(actorData);
        }                    
      }
    }

    this._battleField.addChild(this._actorSprites[i]);
  }
};

//=============================================================================
// Sprite_Animation
// ----------------------------------------------------------------------------
// Code provided by SwiftIllusion
//=============================================================================

dragonBonesIntegration.Sprite_Animation_updatePosition =
  Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function() {
  dragonBonesIntegration.Sprite_Animation_updatePosition.call(this);
  this.updateDragonBonesPosition();
};

Sprite_Animation.prototype.updateDragonBonesPosition = function() {
  var position = this._animation.position;
  if (position === 3) return;
  var battler = this._target._battler;
  if (typeof battler != 'undefined') {
    var data = battler.isActor() ? battler.actor() : battler.enemy();
    if (position === 0) {
      this.y -= data.meta.dragonbone_height;
    } else if (position === 1) {
      this.y -= data.meta.dragonbone_height / 2;
    }
  } else {
    var battler = this._target.parent._battler;
    if (battler && battler.hasDragonBone) {
      var data = battler.isActor() ? battler.actor() : battler.enemy();
      if (position === 0) {
        this.y -= data.meta.dragonbone_height;
      } else if (position === 1) {
        this.y -= data.meta.dragonbone_height / 2;
      }
    }
  }
};

//=============================================================================
// Sprite_Battler
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() {
  dragonBonesIntegration.Sprite_Battler_update.call(this);
  if (this._battler) this.updateStateIconSpritePosition()
};

Sprite_Battler.prototype.updateStateIconSpritePosition = function() {
  if (this._dbStateSpritesUpdated !== undefined) return;
  this._dbStateSpritesUpdated = true;
  if (this._stateSprite) {
    this.removeChild(this._stateSprite);
    this.addChild(this._stateSprite);
  }
  if (this._stateIconSprite) {
    this.removeChild(this._stateIconSprite);
    this.addChild(this._stateIconSprite);
  }
};

//=============================================================================
// Spriteset_Actor
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

// SPRITE REPLACEMENT: ENEMY, ACTOR, WEAPON
//Hide default weapon sprite for Actor when there is a DragonBones armature
//assigned
dragonBonesIntegration.Sprite_Actor_prototype_setupWeaponAni = 
  Sprite_Actor.prototype.setupWeaponAnimation;
Sprite_Actor.prototype.setupWeaponAnimation = function() {
  if (this._actor.dragonboneIndex !== null &&
  this._actor.dragonboneIndex !== undefined) {
    //do nothing for weapon animation
  } else {
    dragonBonesIntegration.Sprite_Actor_prototype_setupWeaponAni.call(this);
  }
};

//=============================================================================
// YEP_X_ActSeqPack2
// ----------------------------------------------------------------------------
// Compatibility Update
//=============================================================================

if (Imported.YEP_X_ActSeqPack2) {

dragonBonesIntegration.BattleManager_actionMotionTarget = 
  BattleManager.actionMotionTarget;
BattleManager.actionMotionTarget = function(name, actionArgs) {
  //console.log("BattleManager.actionMotionTarget: DB")
  
  if (name.toUpperCase() === 'WAIT') return this.actionMotionWait(actionArgs);
  if (name.toUpperCase() === 'STANDBY') name = 'WAIT';

  //get affected battlers
  var movers = this.makeActionTargets(actionArgs[0]);

  //continue if 1 or more battler are targeted
  if (movers.length < 1) return true;

  //console.log("DB actionMotionTarget: " + movers[0].name() + " = " + name);

  var cmd = name.toLowerCase();
  var motion = 'wait';

  //check for weapons
  if (actionArgs[1] && actionArgs[1].toUpperCase() === 'NO WEAPON') {
    var showWeapon = false;
  } else {
    var showWeapon = true;
  }
  
  if (['wait', 'chant', 'guard', 'evade', 'skill', 'spell', 'item', 'escape',
  'victory', 'dying', 'abnormal', 'sleep', 'dead'].contains(cmd)) {
    motion = cmd;
  } else if (['walk', 'move'].contains(cmd)) {
    motion = 'walk';
  } else if (['damage', 'hit'].contains(cmd)) {
    motion = 'damage';
  } else if (['attack'].contains(cmd)) {
    movers.forEach(function(mover) {
      //console.log("Action Motion: Performing Attack");
      if (mover.isActor()) {
        mover.performAttack();
      } else {
        dragonBonesIntegration.PlayAnimationOnBattler(mover, "attack");
      }
    });
    return false;
  } else if (['thrust', 'swing', 'missile'].contains(cmd)) {
    motion = cmd;
    movers.forEach(function(mover) {
      if (mover.hasDragonBone === true) {
        //play animation through force motion for actor,  
        //play animation directly for enemy
        if (mover.isActor()) {
          mover.forceMotion(motion);
        } else {
          dragonBonesIntegration.PlayAnimationOnBattler(mover, motion);
        }
      } else {
        mover.forceMotion(motion);
        if (mover.isActor() && showWeapon) {
          var weapons = mover.weapons();
          var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
          var attackMotion = $dataSystem.attackMotions[wtypeId];
          if (attackMotion && [0, 1, 2].contains(attackMotion.type)) {
            mover.startWeaponAnimation(attackMotion.weaponImageId);
          }
        }
        if (Imported.YEP_X_AnimatedSVEnemies) {
          if (mover.isEnemy() && mover.hasSVBattler() && showWeapon) {
            var attackMotion = $dataSystem.attackMotions[wtypeId];
            mover.startWeaponAnimation(mover.weaponImageId());
          }
        }
      }
    });
    return false;
  }

  //all other animations
  movers.forEach(function(mover) {
    if (mover.hasDragonBone === true) {
      motion = cmd;
      if (mover.isActor()) {
        mover.forceMotion(motion);
      } else {
        dragonBonesIntegration.PlayAnimationOnBattler(mover, motion);
      }
    } else {
      mover.forceMotion(motion);
    }
  });
  return false;    
};

//play animation with the 'motion' command on actor
//this will overwrite the previous animation
var Sprite_Actor_prototype_forceMotion = Sprite_Actor.prototype.forceMotion;
Sprite_Actor.prototype.forceMotion = function(motionType) {
  //play dragonbone animation if there is a valid armature
  if (this._actor.hasDragonBone === true) {
    //console.log("DB forceMotion: ");
    if (dragonBonesIntegration.consoleDebug) {
      console.log("DB forceMotion: Play actor motion = " + motionType);
    }
    dragonBonesIntegration.PlayAnimationOnBattler(this._actor, motionType);
    //this.startMotion(motionType);
  } else {
    Sprite_Actor_prototype_forceMotion.call(this, motionType);
  }
};

}; // Imported.YEP_X_ActSeqPack2

// REPLACE ACTOR/ENEMIES ANIMATIONS
//Replace the default 18 sprite animations with DragonBones animation if
//assigned in the Note section
//if the previous animation is the same as the new one, then start motion will
//let the previous animation complete
dragonBonesIntegration.Sprite_Actor_prototype_startMotion = 
  Sprite_Actor.prototype.startMotion;
Sprite_Actor.prototype.startMotion = function(motionType) {
  //only play dragonbone animation if dragonboneIndex variable is valid
  if (this._actor.hasDragonBone === true) {
    if (this._actor.lastMotionType !== motionType) {
      dragonBonesIntegration.PlayAnimationOnBattler(this._actor, motionType);
      this._actor.lastMotionType = motionType;
    }
  } else {
    //console.log("Vanilla startMotion: " + this._actor._name + " motion = " +
    //motionType);
    dragonBonesIntegration.Sprite_Actor_prototype_startMotion.call(this,
      motionType);
  }
};

//=============================================================================
// Game_Enemy
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

//Replace Enemy default attack animation
Game_Enemy.prototype.performActionStart = function(action) {
  //Game_Battler.prototype.performActionStart.call(this, action);
  this.requestEffect('whiten');
  if (dragonBonesIntegration.consoleDebug) {
    console.log("DB performActionStart: " + this.battlerName() + " type = " +
      action.type);
  }
  //console.log("DragonBoneIndex = " + this.dragonboneIndex);

  var result = false;
  if (this.hasDragonBone === true  && action.isAttack()) {
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "swing");
  }
  if (result === false) {
    Game_Battler.prototype.performActionStart.call(this, action);
  }
};

//Replace Enemy default take damage animation
Game_Enemy.prototype.performDamage = function() {
  Game_Battler.prototype.performDamage.call(this);
  SoundManager.playEnemyDamage();
  
  var result = false;
  if (this.hasDragonBone === true) {
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "damage");
  }

  //if dragonbones animation fail to play then run default
  if (result === false) {
    this.requestEffect('blink');
  }
};

//Replace Enemy default death animation
dragonBonesIntegration.Game_Enemy_prototype_performCollapse =
  Game_Enemy.prototype.performCollapse;
Game_Enemy.prototype.performCollapse = function() {
  //console.log("DB collapse: Game_Enemy");
  var result = false;
  if (this.hasDragonBone === true) {
    //console.log("DB collapse: skeletal animation");
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "dead");
    SoundManager.playBossCollapse1();
  }

  if (result === false) {
    dragonBonesIntegration.Game_Enemy_prototype_performCollapse.call(this);
  }
};

//=============================================================================
// Game_Battler
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

Game_Battler.prototype.isReplacedByDragonBonesBattler = function() {
  if (!$gameParty.inBattle()) return false;
  if (this.isActor()) {
    var data = this.actor();
  } else if (this.isEnemy()) {
    var data = this.enemy();
  } else {
    return false;
  }
  if (data.meta.dragonbone_replace === false) return false;
  return this.hasDragonBone;
};

if (Imported.YEP_BattleEngineCore) {

dragonBonesIntegration.Game_Battler_spriteWidth =
  Game_Battler.prototype.spriteWidth;
Game_Battler.prototype.spriteWidth = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_width;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_width;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Battler_spriteWidth.call(this);
};

dragonBonesIntegration.Game_Battler_spriteHeight =
  Game_Battler.prototype.spriteHeight;
Game_Battler.prototype.spriteHeight = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_height;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_height;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Battler_spriteHeight.call(this);
};

}; // Imported.YEP_BattleEngineCore

//=============================================================================
// Game_Actor
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Game_Actor_battlerName =
  Game_Actor.prototype.battlerName;
Game_Actor.prototype.battlerName = function() {
  if (this.isReplacedByDragonBonesBattler()) return '';
  return dragonBonesIntegration.Game_Actor_battlerName.call(this);
};

dragonBonesIntegration.Game_Actor_spriteWidth =
  Game_Actor.prototype.spriteWidth;
Game_Actor.prototype.spriteWidth = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_width;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_width;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Actor_spriteWidth.call(this);
};

dragonBonesIntegration.Game_Actor_spriteHeight =
  Game_Actor.prototype.spriteHeight;
Game_Actor.prototype.spriteHeight = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_height;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_height;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Actor_spriteHeight.call(this);
};

//=============================================================================
// Game_Enemy
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Game_Enemy_battlerName = 
  Game_Enemy.prototype.battlerName;
Game_Enemy.prototype.battlerName = function() {
  if (this.isReplacedByDragonBonesBattler()) return '';
  return dragonBonesIntegration.Game_Enemy_battlerName.call(this);
};

//=============================================================================
// YEP_X_AnimatedSVEnemies Compatibility
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

if (Imported.YEP_X_AnimatedSVEnemies) {

dragonBonesIntegration.Game_Enemy_hasSVBattler =
  Game_Enemy.prototype.hasSVBattler;
Game_Enemy.prototype.hasSVBattler = function() {
  if (this._hasSvBattler === undefined) {
    this._hasSvBattler = 
      dragonBonesIntegration.Game_Enemy_hasSVBattler.call(this) ||
      this.hasDragonBone;
  }
  return this._hasSvBattler;
};

dragonBonesIntegration.Game_Enemy_spriteScaleX =
  Game_Enemy.prototype.spriteScaleX;
Game_Enemy.prototype.spriteScaleX = function() {
  if (this.hasDragonBone && this.hasSVBattler()) {
    return this.enemy().spriteScaleX;
  } else {
    return dragonBonesIntegration.Game_Enemy_spriteScaleX.call(this);
  }
};

}; // YEP_X_AnimatedSVEnemies

//=============================================================================
// End of Main Functions
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run DragonBones ';
text += 'Integration while your project files are lower than version 1.4.0.\n';
text += '\nPlease visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'https://forums.rpgmakerweb.com/index.php?threads/';
text += 'rpg-maker-mv-1-5-0-update.79677/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.1.0')
//=============================================================================
// End of File
//=============================================================================