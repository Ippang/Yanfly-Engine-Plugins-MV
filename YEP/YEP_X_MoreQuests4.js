//=============================================================================
// Yanfly Engine Plugins - Quest Journal System Extension - More Quests 4
// YEP_X_MoreQuests4.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MoreQuests4 = true;

var Yanfly = Yanfly || {};
Yanfly.MoreQuests4 = Yanfly.MoreQuests4 || {};
Yanfly.MoreQuests4.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 (Requires YEP_QuestJournal.js)
 * Add quests 3001 to 4000 to your game!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_QuestJournal. Make sure this plugin is located
 * under YEP_X_MoreQuests4 in the plugin list.
 *
 * By default, the YEP_QuestJournal plugin comes with 100 quest entries that
 * you can make and insert into your game. And depending on the RPG being made,
 * 100 quest entries just might not be enough. This plugin is a part of a
 * series of extension plugins made for the Yanfly Engine Plugins Quest Journal
 * System to allow for a higher quest quantity than just 100.
 *
 * YEP_X_MoreQuests1 will add quests 101 to 1000.
 * YEP_X_MoreQuests2 will add quests 1001 to 2000.
 * YEP_X_MoreQuests3 will add quests 2001 to 3000.
 * YEP_X_MoreQuests4 will add quests 3001 to 4000.
 * YEP_X_MoreQuests5 will add quests 4001 to 5000.
 * YEP_X_MoreQuests6 will add quests 5001 to 6000.
 * YEP_X_MoreQuests7 will add quests 6001 to 7000.
 * YEP_X_MoreQuests8 will add quests 7001 to 8000.
 * YEP_X_MoreQuests9 will add quests 8001 to 9000.
 * YEP_X_MoreQuests10 will add quests 9001 to 10000.
 *
 * These extension plugins also come with a new feature: automatic batch data.
 * For every set of 100 quests, you can set a default type, difficulty, from,
 * and location data for them. Quest entries that have |-=AUTO=-| in those
 * respective fields will draw data from the batch set's default data. How you
 * wish to use this will be up to you!
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
 * @param ---Quests 3001 to 3100---
 * @default
 *
 * @param Category: 3001 to 3100
 * @text Auto Batch Category
 * @parent ---Quests 3001 to 3100---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3001 to 3100
 * @text Auto Batch Difficulty
 * @parent ---Quests 3001 to 3100---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3001 to 3100
 * @text Auto Batch From
 * @parent ---Quests 3001 to 3100---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3001 to 3100
 * @text Auto Batch Location
 * @parent ---Quests 3001 to 3100---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3001
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3002
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3003
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3004
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3005
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3006
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3007
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3008
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3009
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3010
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3011
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3012
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3013
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3014
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3015
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3016
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3017
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3018
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3019
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3020
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3021
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3022
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3023
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3024
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3025
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3026
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3027
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3028
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3029
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3030
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3031
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3032
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3033
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3034
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3035
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3036
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3037
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3038
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3039
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3040
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3041
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3042
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3043
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3044
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3045
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3046
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3047
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3048
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3049
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3050
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3051
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3052
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3053
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3054
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3055
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3056
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3057
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3058
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3059
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3060
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3061
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3062
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3063
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3064
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3065
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3066
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3067
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3068
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3069
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3070
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3071
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3072
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3073
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3074
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3075
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3076
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3077
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3078
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3079
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3080
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3081
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3082
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3083
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3084
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3085
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3086
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3087
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3088
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3089
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3090
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3091
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3092
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3093
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3094
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3095
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3096
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3097
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3098
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3099
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3100
 * @parent ---Quests 3001 to 3100---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3101 to 3200---
 * @default
 *
 * @param Category: 3101 to 3200
 * @text Auto Batch Category
 * @parent ---Quests 3101 to 3200---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3101 to 3200
 * @text Auto Batch Difficulty
 * @parent ---Quests 3101 to 3200---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3101 to 3200
 * @text Auto Batch From
 * @parent ---Quests 3101 to 3200---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3101 to 3200
 * @text Auto Batch Location
 * @parent ---Quests 3101 to 3200---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3101
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3102
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3103
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3104
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3105
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3106
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3107
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3108
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3109
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3110
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3111
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3112
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3113
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3114
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3115
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3116
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3117
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3118
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3119
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3120
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3121
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3122
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3123
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3124
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3125
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3126
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3127
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3128
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3129
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3130
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3131
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3132
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3133
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3134
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3135
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3136
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3137
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3138
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3139
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3140
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3141
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3142
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3143
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3144
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3145
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3146
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3147
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3148
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3149
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3150
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3151
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3152
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3153
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3154
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3155
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3156
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3157
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3158
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3159
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3160
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3161
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3162
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3163
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3164
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3165
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3166
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3167
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3168
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3169
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3170
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3171
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3172
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3173
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3174
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3175
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3176
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3177
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3178
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3179
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3180
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3181
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3182
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3183
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3184
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3185
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3186
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3187
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3188
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3189
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3190
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3191
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3192
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3193
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3194
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3195
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3196
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3197
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3198
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3199
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3200
 * @parent ---Quests 3101 to 3200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3201 to 3300---
 * @default
 *
 * @param Category: 3201 to 3300
 * @text Auto Batch Category
 * @parent ---Quests 3201 to 3300---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3201 to 3300
 * @text Auto Batch Difficulty
 * @parent ---Quests 3201 to 3300---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3201 to 3300
 * @text Auto Batch From
 * @parent ---Quests 3201 to 3300---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3201 to 3300
 * @text Auto Batch Location
 * @parent ---Quests 3201 to 3300---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3201
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3202
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3203
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3204
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3205
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3206
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3207
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3208
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3209
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3210
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3211
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3212
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3213
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3214
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3215
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3216
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3217
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3218
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3219
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3220
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3221
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3222
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3223
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3224
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3225
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3226
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3227
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3228
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3229
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3230
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3231
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3232
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3233
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3234
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3235
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3236
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3237
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3238
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3239
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3240
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3241
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3242
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3243
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3244
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3245
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3246
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3247
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3248
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3249
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3250
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3251
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3252
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3253
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3254
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3255
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3256
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3257
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3258
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3259
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3260
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3261
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3262
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3263
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3264
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3265
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3266
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3267
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3268
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3269
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3270
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3271
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3272
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3273
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3274
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3275
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3276
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3277
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3278
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3279
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3280
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3281
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3282
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3283
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3284
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3285
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3286
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3287
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3288
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3289
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3290
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3291
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3292
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3293
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3294
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3295
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3296
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3297
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3298
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3299
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3300
 * @parent ---Quests 3201 to 3300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3301 to 3400---
 * @default
 *
 * @param Category: 3301 to 3400
 * @text Auto Batch Category
 * @parent ---Quests 3301 to 3400---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3301 to 3400
 * @text Auto Batch Difficulty
 * @parent ---Quests 3301 to 3400---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3301 to 3400
 * @text Auto Batch From
 * @parent ---Quests 3301 to 3400---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3301 to 3400
 * @text Auto Batch Location
 * @parent ---Quests 3301 to 3400---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3301
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3302
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3303
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3304
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3305
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3306
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3307
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3308
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3309
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3310
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3311
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3312
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3313
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3314
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3315
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3316
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3317
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3318
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3319
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3320
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3321
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3322
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3323
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3324
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3325
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3326
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3327
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3328
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3329
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3330
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3331
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3332
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3333
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3334
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3335
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3336
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3337
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3338
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3339
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3340
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3341
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3342
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3343
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3344
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3345
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3346
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3347
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3348
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3349
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3350
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3351
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3352
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3353
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3354
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3355
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3356
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3357
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3358
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3359
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3360
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3361
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3362
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3363
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3364
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3365
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3366
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3367
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3368
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3369
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3370
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3371
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3372
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3373
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3374
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3375
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3376
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3377
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3378
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3379
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3380
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3381
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3382
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3383
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3384
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3385
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3386
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3387
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3388
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3389
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3390
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3391
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3392
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3393
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3394
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3395
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3396
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3397
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3398
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3399
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3400
 * @parent ---Quests 3301 to 3400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3401 to 3500---
 * @default
 *
 * @param Category: 3401 to 3500
 * @text Auto Batch Category
 * @parent ---Quests 3401 to 3500---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3401 to 3500
 * @text Auto Batch Difficulty
 * @parent ---Quests 3401 to 3500---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3401 to 3500
 * @text Auto Batch From
 * @parent ---Quests 3401 to 3500---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3401 to 3500
 * @text Auto Batch Location
 * @parent ---Quests 3401 to 3500---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3401
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3402
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3403
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3404
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3405
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3406
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3407
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3408
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3409
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3410
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3411
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3412
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3413
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3414
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3415
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3416
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3417
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3418
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3419
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3420
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3421
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3422
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3423
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3424
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3425
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3426
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3427
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3428
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3429
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3430
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3431
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3432
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3433
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3434
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3435
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3436
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3437
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3438
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3439
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3440
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3441
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3442
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3443
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3444
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3445
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3446
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3447
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3448
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3449
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3450
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3451
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3452
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3453
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3454
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3455
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3456
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3457
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3458
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3459
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3460
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3461
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3462
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3463
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3464
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3465
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3466
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3467
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3468
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3469
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3470
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3471
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3472
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3473
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3474
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3475
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3476
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3477
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3478
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3479
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3480
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3481
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3482
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3483
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3484
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3485
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3486
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3487
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3488
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3489
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3490
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3491
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3492
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3493
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3494
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3495
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3496
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3497
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3498
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3499
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3500
 * @parent ---Quests 3401 to 3500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3501 to 3600---
 * @default
 *
 * @param Category: 3501 to 3600
 * @text Auto Batch Category
 * @parent ---Quests 3501 to 3600---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3501 to 3600
 * @text Auto Batch Difficulty
 * @parent ---Quests 3501 to 3600---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3501 to 3600
 * @text Auto Batch From
 * @parent ---Quests 3501 to 3600---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3501 to 3600
 * @text Auto Batch Location
 * @parent ---Quests 3501 to 3600---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3501
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3502
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3503
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3504
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3505
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3506
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3507
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3508
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3509
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3510
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3511
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3512
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3513
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3514
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3515
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3516
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3517
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3518
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3519
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3520
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3521
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3522
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3523
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3524
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3525
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3526
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3527
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3528
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3529
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3530
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3531
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3532
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3533
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3534
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3535
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3536
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3537
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3538
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3539
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3540
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3541
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3542
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3543
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3544
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3545
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3546
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3547
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3548
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3549
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3550
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3551
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3552
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3553
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3554
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3555
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3556
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3557
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3558
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3559
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3560
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3561
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3562
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3563
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3564
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3565
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3566
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3567
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3568
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3569
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3570
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3571
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3572
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3573
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3574
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3575
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3576
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3577
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3578
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3579
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3580
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3581
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3582
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3583
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3584
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3585
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3586
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3587
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3588
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3589
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3590
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3591
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3592
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3593
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3594
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3595
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3596
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3597
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3598
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3599
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3600
 * @parent ---Quests 3501 to 3600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3601 to 3700---
 * @default
 *
 * @param Category: 3601 to 3700
 * @text Auto Batch Category
 * @parent ---Quests 3601 to 3700---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3601 to 3700
 * @text Auto Batch Difficulty
 * @parent ---Quests 3601 to 3700---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3601 to 3700
 * @text Auto Batch From
 * @parent ---Quests 3601 to 3700---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3601 to 3700
 * @text Auto Batch Location
 * @parent ---Quests 3601 to 3700---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3601
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3602
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3603
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3604
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3605
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3606
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3607
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3608
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3609
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3610
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3611
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3612
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3613
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3614
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3615
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3616
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3617
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3618
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3619
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3620
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3621
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3622
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3623
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3624
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3625
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3626
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3627
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3628
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3629
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3630
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3631
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3632
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3633
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3634
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3635
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3636
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3637
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3638
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3639
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3640
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3641
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3642
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3643
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3644
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3645
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3646
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3647
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3648
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3649
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3650
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3651
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3652
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3653
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3654
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3655
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3656
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3657
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3658
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3659
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3660
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3661
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3662
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3663
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3664
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3665
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3666
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3667
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3668
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3669
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3670
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3671
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3672
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3673
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3674
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3675
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3676
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3677
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3678
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3679
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3680
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3681
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3682
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3683
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3684
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3685
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3686
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3687
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3688
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3689
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3690
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3691
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3692
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3693
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3694
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3695
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3696
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3697
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3698
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3699
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3700
 * @parent ---Quests 3601 to 3700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3701 to 3800---
 * @default
 *
 * @param Category: 3701 to 3800
 * @text Auto Batch Category
 * @parent ---Quests 3701 to 3800---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3701 to 3800
 * @text Auto Batch Difficulty
 * @parent ---Quests 3701 to 3800---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3701 to 3800
 * @text Auto Batch From
 * @parent ---Quests 3701 to 3800---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3701 to 3800
 * @text Auto Batch Location
 * @parent ---Quests 3701 to 3800---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3701
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3702
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3703
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3704
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3705
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3706
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3707
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3708
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3709
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3710
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3711
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3712
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3713
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3714
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3715
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3716
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3717
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3718
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3719
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3720
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3721
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3722
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3723
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3724
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3725
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3726
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3727
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3728
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3729
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3730
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3731
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3732
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3733
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3734
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3735
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3736
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3737
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3738
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3739
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3740
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3741
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3742
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3743
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3744
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3745
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3746
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3747
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3748
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3749
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3750
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3751
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3752
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3753
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3754
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3755
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3756
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3757
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3758
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3759
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3760
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3761
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3762
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3763
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3764
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3765
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3766
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3767
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3768
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3769
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3770
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3771
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3772
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3773
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3774
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3775
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3776
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3777
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3778
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3779
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3780
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3781
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3782
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3783
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3784
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3785
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3786
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3787
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3788
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3789
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3790
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3791
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3792
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3793
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3794
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3795
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3796
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3797
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3798
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3799
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3800
 * @parent ---Quests 3701 to 3800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3801 to 3900---
 * @default
 *
 * @param Category: 3801 to 3900
 * @text Auto Batch Category
 * @parent ---Quests 3801 to 3900---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3801 to 3900
 * @text Auto Batch Difficulty
 * @parent ---Quests 3801 to 3900---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3801 to 3900
 * @text Auto Batch From
 * @parent ---Quests 3801 to 3900---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3801 to 3900
 * @text Auto Batch Location
 * @parent ---Quests 3801 to 3900---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3801
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3802
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3803
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3804
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3805
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3806
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3807
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3808
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3809
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3810
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3811
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3812
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3813
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3814
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3815
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3816
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3817
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3818
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3819
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3820
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3821
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3822
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3823
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3824
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3825
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3826
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3827
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3828
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3829
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3830
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3831
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3832
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3833
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3834
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3835
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3836
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3837
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3838
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3839
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3840
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3841
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3842
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3843
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3844
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3845
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3846
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3847
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3848
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3849
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3850
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3851
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3852
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3853
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3854
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3855
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3856
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3857
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3858
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3859
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3860
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3861
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3862
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3863
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3864
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3865
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3866
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3867
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3868
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3869
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3870
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3871
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3872
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3873
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3874
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3875
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3876
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3877
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3878
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3879
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3880
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3881
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3882
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3883
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3884
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3885
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3886
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3887
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3888
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3889
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3890
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3891
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3892
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3893
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3894
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3895
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3896
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3897
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3898
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3899
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3900
 * @parent ---Quests 3801 to 3900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 3901 to 4000---
 * @default
 *
 * @param Category: 3901 to 4000
 * @text Auto Batch Category
 * @parent ---Quests 3901 to 4000---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 3901 to 4000
 * @text Auto Batch Difficulty
 * @parent ---Quests 3901 to 4000---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Difficult
 *
 * @param From: 3901 to 4000
 * @text Auto Batch From
 * @parent ---Quests 3901 to 4000---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Name
 *
 * @param Location: 3901 to 4000
 * @text Auto Batch Location
 * @parent ---Quests 3901 to 4000---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Area
 *
 * @param Quest 3901
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3902
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3903
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3904
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3905
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3906
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3907
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3908
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3909
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3910
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3911
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3912
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3913
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3914
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3915
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3916
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3917
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3918
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3919
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Quest 3920
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3921
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3922
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3923
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3924
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3925
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3926
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3927
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3928
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3929
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3930
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3931
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3932
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3933
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3934
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3935
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3936
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3937
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3938
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3939
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3940
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3941
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3942
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3943
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3944
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3945
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3946
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3947
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3948
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3949
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3950
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3951
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3952
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3953
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3954
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3955
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3956
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3957
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3958
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3959
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3960
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3961
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3962
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3963
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3964
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3965
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3966
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3967
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3968
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3969
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3970
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3971
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3972
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3973
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3974
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3975
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3976
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3977
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3978
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3979
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3980
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3981
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3982
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3983
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3984
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3985
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3986
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3987
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3988
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3989
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3990
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3991
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3992
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3993
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3994
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3995
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3996
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3997
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3998
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 3999
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 4000
 * @parent ---Quests 3901 to 4000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 */
/* ----------------------------------------------------------------------------
 * Quest Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~Quest:
 *
 * @param Title
 * @desc Title of the quest.
 * Text codes allowed.
 * @default \i[87]Untitled Quest
 *
 * @param Type
 * @parent Title
 * @type combo
 * @option |-=AUTO=-|
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc What type of quest is this?
 * Select |-=AUTO=-| for quest batch category default.
 * @default |-=AUTO=-|
 *
 * @param Difficulty
 * @parent Title
 * @desc Difficulty level for this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param From
 * @parent Title
 * @desc Insert the name of the NPC who issued this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param Location
 * @parent Title
 * @desc Insert the name of the NPC who issued this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param Description
 * @parent Title
 * @type note[]
 * @desc Type out the description used for this quest.
 * Text codes allowed.
 * @default ["\"This is the \\\\c[4]default\\\\c[0] quest description.\"","\"This is the \\\\c[4]default\\\\c[0] quest description.\\n\\nYou can insert multiple description entries in case you\\never want to update the quest description midway while the\\nquest is in progress.\""]
 *
 * @param Objectives List
 * @type note[]
 * @desc The objectives to be completed for this quest.
 * Text codes allowed.
 * @default ["\"\\\\c[4]First\\\\c[0] objective to be cleared.\"","\"\\\\c[4]Second\\\\c[0] objective, but it's hidden.\"","\"To make other objectives appear,\\nenable them through the \\\\c[4]'Visible\\nObjectives'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param Visible Objectives
 * @parent Objectives List
 * @type number[]
 * @min 1
 * @desc The objectives that are visible from the start.
 * @default ["1"]
 *
 * @param Rewards List
 * @type note[]
 * @desc The reward list for this quest.
 * Text codes allowed.
 * @default ["\"\\\\i[176]Potion x5\"","\"\\\\i[178]Ether x3\"","\"To make other rewards appear,\\nenable them through the \\\\c[4]'Visible\\nRewards'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 * 
 * @param Visible Rewards
 * @parent Rewards List
 * @type number[]
 * @min 1
 * @desc The rewards that are visible from the start.
 * @default ["1"]
 *
 * @param Subtext
 * @type note[]
 * @desc Subtext to be displayed with the quest.
 * @default ["\"\"","\"This is a subtext. It is used as\\nextra text that you may want to\\nplace on your quest journal that\\ndiffers from the description.\""]
 */
//=============================================================================

if (Imported.YEP_QuestJournal) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_MoreQuests4');
Yanfly.Param = Yanfly.Param || {};

DataManager.questDatabaseCreate = function() {
  $dataQuests = $dataQuests || [null];
  var index1 = [3001, 3101, 3201, 3301, 3401, 3501, 3601, 3701, 3801, 3901];
  var index2 = [3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000];
  var length = index1.length;
  for (var n = 0; n < length; ++n) {
    var a = index1[n];
    var b = index2[n];
    var str = a + ' to ' + b;

    for (var i = a; i <= b; ++i) {
      var questData = JSON.parse(Yanfly.Parameters['Quest ' + i] || 'null');
      if (!questData) continue;
      if (questData['Type'] === '|-=AUTO=-|') {
        questData['Type'] = Yanfly.Parameters['Category: ' + str];
      }
      if (questData['Difficulty'] === '|-=AUTO=-|') {
        questData['Difficulty'] = Yanfly.Parameters['Difficulty: ' + str];
      }
      if (questData['From'] === '|-=AUTO=-|') {
        questData['From'] = Yanfly.Parameters['From: ' + str];
      }
      if (questData['Location'] === '|-=AUTO=-|') {
        questData['Location'] = Yanfly.Parameters['Location: ' + str];
      }
      this.questDatabaseAdd(i, questData);
    }
  }
};

DataManager.questDatabaseCreate();

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_X_MoreQuests4 without YEP_QuestJournal. Please visit Yanfly.moe ';
text += 'and install YEP_QuestJournal in your game project before you can use ';
text += 'this plugin.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.YEP_QuestJournal