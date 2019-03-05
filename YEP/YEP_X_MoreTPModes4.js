//=============================================================================
// Yanfly Engine Plugins - Enhanced TP Extension - More TP Modes 4
// YEP_X_MoreTPModes4.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MoreTPModes4 = true;

var Yanfly = Yanfly || {};
Yanfly.ETP = Yanfly.ETP || {};
Yanfly.ETP.version = 1.01

//=============================================================================
 /*:
 * @plugindesc v1.01 (Requires YEP_EnhancedTP.js) Adds TP Modes 81 to 100
 * to your game!
 * @author Yanfly Engine Plugins
 *
 * @param ---Mode 81 Settings---
 * @default
 *
 * @param Mode 81 Name
 * @parent ---Mode 81 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 81 Icon
 * @parent ---Mode 81 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 81 Help Line 1
 * @parent ---Mode 81 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 81 Help Line 2
 * @parent ---Mode 81 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 81 Max TP
 * @parent ---Mode 81 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 81 Preserve
 * @parent ---Mode 81 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 81 Initial TP
 * @parent ---Mode 81 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 81 Regen TP
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 81 Take HP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 81 Deal HP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 81 Heal HP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 81 Ally HP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 81 Take MP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 81 Deal MP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 81 Heal MP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 81 Ally MP DMG
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 81 Deal State
 * @parent ---Mode 81 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 81 Gain State
 * @parent ---Mode 81 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 81 Kill Ally
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 81 Kill Enemy
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 81 Win Battle
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 81 Flee Battle
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 81 Lose Battle
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 81 Crisis HP
 * @parent ---Mode 81 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 81 Crisis MP
 * @parent ---Mode 81 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 81 Only Member
 * @parent ---Mode 81 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 81 Evasion
 * @parent ---Mode 81 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 82 Settings---
 * @default
 *
 * @param Mode 82 Name
 * @parent ---Mode 82 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 82 Icon
 * @parent ---Mode 82 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 82 Help Line 1
 * @parent ---Mode 82 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 82 Help Line 2
 * @parent ---Mode 82 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 82 Max TP
 * @parent ---Mode 82 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 82 Preserve
 * @parent ---Mode 82 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 82 Initial TP
 * @parent ---Mode 82 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 82 Regen TP
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 82 Take HP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 82 Deal HP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 82 Heal HP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 82 Ally HP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 82 Take MP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 82 Deal MP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 82 Heal MP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 82 Ally MP DMG
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 82 Deal State
 * @parent ---Mode 82 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 82 Gain State
 * @parent ---Mode 82 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 82 Kill Ally
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 82 Kill Enemy
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 82 Win Battle
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 82 Flee Battle
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 82 Lose Battle
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 82 Crisis HP
 * @parent ---Mode 82 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 82 Crisis MP
 * @parent ---Mode 82 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 82 Only Member
 * @parent ---Mode 82 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 82 Evasion
 * @parent ---Mode 82 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 83 Settings---
 * @default
 *
 * @param Mode 83 Name
 * @parent ---Mode 83 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 83 Icon
 * @parent ---Mode 83 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 83 Help Line 1
 * @parent ---Mode 83 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 83 Help Line 2
 * @parent ---Mode 83 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 83 Max TP
 * @parent ---Mode 83 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 83 Preserve
 * @parent ---Mode 83 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 83 Initial TP
 * @parent ---Mode 83 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 83 Regen TP
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 83 Take HP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 83 Deal HP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 83 Heal HP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 83 Ally HP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 83 Take MP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 83 Deal MP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 83 Heal MP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 83 Ally MP DMG
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 83 Deal State
 * @parent ---Mode 83 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 83 Gain State
 * @parent ---Mode 83 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 83 Kill Ally
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 83 Kill Enemy
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 83 Win Battle
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 83 Flee Battle
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 83 Lose Battle
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 83 Crisis HP
 * @parent ---Mode 83 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 83 Crisis MP
 * @parent ---Mode 83 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 83 Only Member
 * @parent ---Mode 83 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 83 Evasion
 * @parent ---Mode 83 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 84 Settings---
 * @default
 *
 * @param Mode 84 Name
 * @parent ---Mode 84 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 84 Icon
 * @parent ---Mode 84 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 84 Help Line 1
 * @parent ---Mode 84 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 84 Help Line 2
 * @parent ---Mode 84 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 84 Max TP
 * @parent ---Mode 84 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 84 Preserve
 * @parent ---Mode 84 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 84 Initial TP
 * @parent ---Mode 84 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 84 Regen TP
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 84 Take HP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 84 Deal HP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 84 Heal HP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 84 Ally HP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 84 Take MP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 84 Deal MP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 84 Heal MP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 84 Ally MP DMG
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 84 Deal State
 * @parent ---Mode 84 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 84 Gain State
 * @parent ---Mode 84 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 84 Kill Ally
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 84 Kill Enemy
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 84 Win Battle
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 84 Flee Battle
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 84 Lose Battle
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 84 Crisis HP
 * @parent ---Mode 84 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 84 Crisis MP
 * @parent ---Mode 84 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 84 Only Member
 * @parent ---Mode 84 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 84 Evasion
 * @parent ---Mode 84 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 85 Settings---
 * @default
 *
 * @param Mode 85 Name
 * @parent ---Mode 85 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 85 Icon
 * @parent ---Mode 85 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 85 Help Line 1
 * @parent ---Mode 85 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 85 Help Line 2
 * @parent ---Mode 85 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 85 Max TP
 * @parent ---Mode 85 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 85 Preserve
 * @parent ---Mode 85 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 85 Initial TP
 * @parent ---Mode 85 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 85 Regen TP
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 85 Take HP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 85 Deal HP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 85 Heal HP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 85 Ally HP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 85 Take MP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 85 Deal MP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 85 Heal MP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 85 Ally MP DMG
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 85 Deal State
 * @parent ---Mode 85 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 85 Gain State
 * @parent ---Mode 85 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 85 Kill Ally
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 85 Kill Enemy
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 85 Win Battle
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 85 Flee Battle
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 85 Lose Battle
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 85 Crisis HP
 * @parent ---Mode 85 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 85 Crisis MP
 * @parent ---Mode 85 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 85 Only Member
 * @parent ---Mode 85 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 85 Evasion
 * @parent ---Mode 85 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 86 Settings---
 * @default
 *
 * @param Mode 86 Name
 * @parent ---Mode 86 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 86 Icon
 * @parent ---Mode 86 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 86 Help Line 1
 * @parent ---Mode 86 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 86 Help Line 2
 * @parent ---Mode 86 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 86 Max TP
 * @parent ---Mode 86 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 86 Preserve
 * @parent ---Mode 86 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 86 Initial TP
 * @parent ---Mode 86 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 86 Regen TP
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 86 Take HP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 86 Deal HP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 86 Heal HP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 86 Ally HP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 86 Take MP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 86 Deal MP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 86 Heal MP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 86 Ally MP DMG
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 86 Deal State
 * @parent ---Mode 86 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 86 Gain State
 * @parent ---Mode 86 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 86 Kill Ally
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 86 Kill Enemy
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 86 Win Battle
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 86 Flee Battle
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 86 Lose Battle
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 86 Crisis HP
 * @parent ---Mode 86 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 86 Crisis MP
 * @parent ---Mode 86 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 86 Only Member
 * @parent ---Mode 86 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 86 Evasion
 * @parent ---Mode 86 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 87 Settings---
 * @default
 *
 * @param Mode 87 Name
 * @parent ---Mode 87 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 87 Icon
 * @parent ---Mode 87 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 87 Help Line 1
 * @parent ---Mode 87 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 87 Help Line 2
 * @parent ---Mode 87 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 87 Max TP
 * @parent ---Mode 87 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 87 Preserve
 * @parent ---Mode 87 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 87 Initial TP
 * @parent ---Mode 87 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 87 Regen TP
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 87 Take HP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 87 Deal HP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 87 Heal HP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 87 Ally HP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 87 Take MP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 87 Deal MP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 87 Heal MP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 87 Ally MP DMG
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 87 Deal State
 * @parent ---Mode 87 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 87 Gain State
 * @parent ---Mode 87 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 87 Kill Ally
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 87 Kill Enemy
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 87 Win Battle
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 87 Flee Battle
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 87 Lose Battle
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 87 Crisis HP
 * @parent ---Mode 87 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 87 Crisis MP
 * @parent ---Mode 87 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 87 Only Member
 * @parent ---Mode 87 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 87 Evasion
 * @parent ---Mode 87 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 88 Settings---
 * @default
 *
 * @param Mode 88 Name
 * @parent ---Mode 88 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 88 Icon
 * @parent ---Mode 88 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 88 Help Line 1
 * @parent ---Mode 88 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 88 Help Line 2
 * @parent ---Mode 88 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 88 Max TP
 * @parent ---Mode 88 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 88 Preserve
 * @parent ---Mode 88 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 88 Initial TP
 * @parent ---Mode 88 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 88 Regen TP
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 88 Take HP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 88 Deal HP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 88 Heal HP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 88 Ally HP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 88 Take MP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 88 Deal MP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 88 Heal MP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 88 Ally MP DMG
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 88 Deal State
 * @parent ---Mode 88 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 88 Gain State
 * @parent ---Mode 88 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 88 Kill Ally
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 88 Kill Enemy
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 88 Win Battle
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 88 Flee Battle
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 88 Lose Battle
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 88 Crisis HP
 * @parent ---Mode 88 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 88 Crisis MP
 * @parent ---Mode 88 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 88 Only Member
 * @parent ---Mode 88 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 88 Evasion
 * @parent ---Mode 88 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 89 Settings---
 * @default
 *
 * @param Mode 89 Name
 * @parent ---Mode 89 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 89 Icon
 * @parent ---Mode 89 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 89 Help Line 1
 * @parent ---Mode 89 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 89 Help Line 2
 * @parent ---Mode 89 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 89 Max TP
 * @parent ---Mode 89 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 89 Preserve
 * @parent ---Mode 89 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 89 Initial TP
 * @parent ---Mode 89 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 89 Regen TP
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 89 Take HP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 89 Deal HP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 89 Heal HP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 89 Ally HP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 89 Take MP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 89 Deal MP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 89 Heal MP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 89 Ally MP DMG
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 89 Deal State
 * @parent ---Mode 89 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 89 Gain State
 * @parent ---Mode 89 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 89 Kill Ally
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 89 Kill Enemy
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 89 Win Battle
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 89 Flee Battle
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 89 Lose Battle
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 89 Crisis HP
 * @parent ---Mode 89 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 89 Crisis MP
 * @parent ---Mode 89 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 89 Only Member
 * @parent ---Mode 89 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 89 Evasion
 * @parent ---Mode 89 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 90 Settings---
 * @default
 *
 * @param Mode 90 Name
 * @parent ---Mode 90 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 90 Icon
 * @parent ---Mode 90 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 90 Help Line 1
 * @parent ---Mode 90 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 90 Help Line 2
 * @parent ---Mode 90 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 90 Max TP
 * @parent ---Mode 90 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 90 Preserve
 * @parent ---Mode 90 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 90 Initial TP
 * @parent ---Mode 90 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 90 Regen TP
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 90 Take HP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 90 Deal HP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 90 Heal HP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 90 Ally HP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 90 Take MP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 90 Deal MP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 90 Heal MP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 90 Ally MP DMG
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 90 Deal State
 * @parent ---Mode 90 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 90 Gain State
 * @parent ---Mode 90 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 90 Kill Ally
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 90 Kill Enemy
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 90 Win Battle
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 90 Flee Battle
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 90 Lose Battle
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 90 Crisis HP
 * @parent ---Mode 90 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 90 Crisis MP
 * @parent ---Mode 90 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 90 Only Member
 * @parent ---Mode 90 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 90 Evasion
 * @parent ---Mode 90 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 91 Settings---
 * @default
 *
 * @param Mode 91 Name
 * @parent ---Mode 91 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 91 Icon
 * @parent ---Mode 91 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 91 Help Line 1
 * @parent ---Mode 91 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 91 Help Line 2
 * @parent ---Mode 91 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 91 Max TP
 * @parent ---Mode 91 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 91 Preserve
 * @parent ---Mode 91 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 91 Initial TP
 * @parent ---Mode 91 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 91 Regen TP
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 91 Take HP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 91 Deal HP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 91 Heal HP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 91 Ally HP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 91 Take MP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 91 Deal MP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 91 Heal MP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 91 Ally MP DMG
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 91 Deal State
 * @parent ---Mode 91 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 91 Gain State
 * @parent ---Mode 91 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 91 Kill Ally
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 91 Kill Enemy
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 91 Win Battle
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 91 Flee Battle
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 91 Lose Battle
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 91 Crisis HP
 * @parent ---Mode 91 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 91 Crisis MP
 * @parent ---Mode 91 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 91 Only Member
 * @parent ---Mode 91 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 91 Evasion
 * @parent ---Mode 91 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 92 Settings---
 * @default
 *
 * @param Mode 92 Name
 * @parent ---Mode 92 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 92 Icon
 * @parent ---Mode 92 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 92 Help Line 1
 * @parent ---Mode 92 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 92 Help Line 2
 * @parent ---Mode 92 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 92 Max TP
 * @parent ---Mode 92 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 92 Preserve
 * @parent ---Mode 92 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 92 Initial TP
 * @parent ---Mode 92 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 92 Regen TP
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 92 Take HP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 92 Deal HP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 92 Heal HP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 92 Ally HP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 92 Take MP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 92 Deal MP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 92 Heal MP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 92 Ally MP DMG
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 92 Deal State
 * @parent ---Mode 92 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 92 Gain State
 * @parent ---Mode 92 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 92 Kill Ally
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 92 Kill Enemy
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 92 Win Battle
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 92 Flee Battle
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 92 Lose Battle
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 92 Crisis HP
 * @parent ---Mode 92 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 92 Crisis MP
 * @parent ---Mode 92 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 92 Only Member
 * @parent ---Mode 92 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 92 Evasion
 * @parent ---Mode 92 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 93 Settings---
 * @default
 *
 * @param Mode 93 Name
 * @parent ---Mode 93 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 93 Icon
 * @parent ---Mode 93 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 93 Help Line 1
 * @parent ---Mode 93 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 93 Help Line 2
 * @parent ---Mode 93 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 93 Max TP
 * @parent ---Mode 93 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 93 Preserve
 * @parent ---Mode 93 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 93 Initial TP
 * @parent ---Mode 93 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 93 Regen TP
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 93 Take HP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 93 Deal HP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 93 Heal HP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 93 Ally HP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 93 Take MP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 93 Deal MP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 93 Heal MP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 93 Ally MP DMG
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 93 Deal State
 * @parent ---Mode 93 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 93 Gain State
 * @parent ---Mode 93 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 93 Kill Ally
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 93 Kill Enemy
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 93 Win Battle
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 93 Flee Battle
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 93 Lose Battle
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 93 Crisis HP
 * @parent ---Mode 93 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 93 Crisis MP
 * @parent ---Mode 93 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 93 Only Member
 * @parent ---Mode 93 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 93 Evasion
 * @parent ---Mode 93 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 94 Settings---
 * @default
 *
 * @param Mode 94 Name
 * @parent ---Mode 94 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 94 Icon
 * @parent ---Mode 94 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 94 Help Line 1
 * @parent ---Mode 94 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 94 Help Line 2
 * @parent ---Mode 94 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 94 Max TP
 * @parent ---Mode 94 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 94 Preserve
 * @parent ---Mode 94 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 94 Initial TP
 * @parent ---Mode 94 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 94 Regen TP
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 94 Take HP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 94 Deal HP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 94 Heal HP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 94 Ally HP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 94 Take MP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 94 Deal MP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 94 Heal MP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 94 Ally MP DMG
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 94 Deal State
 * @parent ---Mode 94 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 94 Gain State
 * @parent ---Mode 94 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 94 Kill Ally
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 94 Kill Enemy
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 94 Win Battle
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 94 Flee Battle
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 94 Lose Battle
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 94 Crisis HP
 * @parent ---Mode 94 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 94 Crisis MP
 * @parent ---Mode 94 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 94 Only Member
 * @parent ---Mode 94 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 94 Evasion
 * @parent ---Mode 94 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 95 Settings---
 * @default
 *
 * @param Mode 95 Name
 * @parent ---Mode 95 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 95 Icon
 * @parent ---Mode 95 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 95 Help Line 1
 * @parent ---Mode 95 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 95 Help Line 2
 * @parent ---Mode 95 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 95 Max TP
 * @parent ---Mode 95 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 95 Preserve
 * @parent ---Mode 95 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 95 Initial TP
 * @parent ---Mode 95 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 95 Regen TP
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 95 Take HP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 95 Deal HP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 95 Heal HP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 95 Ally HP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 95 Take MP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 95 Deal MP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 95 Heal MP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 95 Ally MP DMG
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 95 Deal State
 * @parent ---Mode 95 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 95 Gain State
 * @parent ---Mode 95 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 95 Kill Ally
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 95 Kill Enemy
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 95 Win Battle
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 95 Flee Battle
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 95 Lose Battle
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 95 Crisis HP
 * @parent ---Mode 95 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 95 Crisis MP
 * @parent ---Mode 95 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 95 Only Member
 * @parent ---Mode 95 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 95 Evasion
 * @parent ---Mode 95 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 96 Settings---
 * @default
 *
 * @param Mode 96 Name
 * @parent ---Mode 96 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 96 Icon
 * @parent ---Mode 96 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 96 Help Line 1
 * @parent ---Mode 96 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 96 Help Line 2
 * @parent ---Mode 96 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 96 Max TP
 * @parent ---Mode 96 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 96 Preserve
 * @parent ---Mode 96 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 96 Initial TP
 * @parent ---Mode 96 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 96 Regen TP
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 96 Take HP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 96 Deal HP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 96 Heal HP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 96 Ally HP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 96 Take MP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 96 Deal MP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 96 Heal MP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 96 Ally MP DMG
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 96 Deal State
 * @parent ---Mode 96 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 96 Gain State
 * @parent ---Mode 96 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 96 Kill Ally
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 96 Kill Enemy
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 96 Win Battle
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 96 Flee Battle
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 96 Lose Battle
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 96 Crisis HP
 * @parent ---Mode 96 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 96 Crisis MP
 * @parent ---Mode 96 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 96 Only Member
 * @parent ---Mode 96 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 96 Evasion
 * @parent ---Mode 96 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 97 Settings---
 * @default
 *
 * @param Mode 97 Name
 * @parent ---Mode 97 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 97 Icon
 * @parent ---Mode 97 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 97 Help Line 1
 * @parent ---Mode 97 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 97 Help Line 2
 * @parent ---Mode 97 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 97 Max TP
 * @parent ---Mode 97 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 97 Preserve
 * @parent ---Mode 97 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 97 Initial TP
 * @parent ---Mode 97 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 97 Regen TP
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 97 Take HP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 97 Deal HP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 97 Heal HP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 97 Ally HP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 97 Take MP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 97 Deal MP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 97 Heal MP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 97 Ally MP DMG
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 97 Deal State
 * @parent ---Mode 97 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 97 Gain State
 * @parent ---Mode 97 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 97 Kill Ally
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 97 Kill Enemy
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 97 Win Battle
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 97 Flee Battle
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 97 Lose Battle
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 97 Crisis HP
 * @parent ---Mode 97 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 97 Crisis MP
 * @parent ---Mode 97 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 97 Only Member
 * @parent ---Mode 97 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 97 Evasion
 * @parent ---Mode 97 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 98 Settings---
 * @default
 *
 * @param Mode 98 Name
 * @parent ---Mode 98 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 98 Icon
 * @parent ---Mode 98 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 98 Help Line 1
 * @parent ---Mode 98 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 98 Help Line 2
 * @parent ---Mode 98 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 98 Max TP
 * @parent ---Mode 98 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 98 Preserve
 * @parent ---Mode 98 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 98 Initial TP
 * @parent ---Mode 98 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 98 Regen TP
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 98 Take HP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 98 Deal HP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 98 Heal HP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 98 Ally HP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 98 Take MP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 98 Deal MP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 98 Heal MP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 98 Ally MP DMG
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 98 Deal State
 * @parent ---Mode 98 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 98 Gain State
 * @parent ---Mode 98 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 98 Kill Ally
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 98 Kill Enemy
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 98 Win Battle
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 98 Flee Battle
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 98 Lose Battle
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 98 Crisis HP
 * @parent ---Mode 98 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 98 Crisis MP
 * @parent ---Mode 98 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 98 Only Member
 * @parent ---Mode 98 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 98 Evasion
 * @parent ---Mode 98 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 99 Settings---
 * @default
 *
 * @param Mode 99 Name
 * @parent ---Mode 99 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 99 Icon
 * @parent ---Mode 99 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 99 Help Line 1
 * @parent ---Mode 99 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 99 Help Line 2
 * @parent ---Mode 99 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 99 Max TP
 * @parent ---Mode 99 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 99 Preserve
 * @parent ---Mode 99 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 99 Initial TP
 * @parent ---Mode 99 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 99 Regen TP
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 99 Take HP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 99 Deal HP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 99 Heal HP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 99 Ally HP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 99 Take MP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 99 Deal MP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 99 Heal MP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 99 Ally MP DMG
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 99 Deal State
 * @parent ---Mode 99 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 99 Gain State
 * @parent ---Mode 99 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 99 Kill Ally
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 99 Kill Enemy
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 99 Win Battle
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 99 Flee Battle
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 99 Lose Battle
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 99 Crisis HP
 * @parent ---Mode 99 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 99 Crisis MP
 * @parent ---Mode 99 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 99 Only Member
 * @parent ---Mode 99 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 99 Evasion
 * @parent ---Mode 99 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 100 Settings---
 * @default
 *
 * @param Mode 100 Name
 * @parent ---Mode 100 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 100 Icon
 * @parent ---Mode 100 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 100 Help Line 1
 * @parent ---Mode 100 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 100 Help Line 2
 * @parent ---Mode 100 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 100 Max TP
 * @parent ---Mode 100 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 100 Preserve
 * @parent ---Mode 100 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 100 Initial TP
 * @parent ---Mode 100 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 100 Regen TP
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 100 Take HP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 100 Deal HP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 100 Heal HP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 100 Ally HP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 100 Take MP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 100 Deal MP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 100 Heal MP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 100 Ally MP DMG
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 100 Deal State
 * @parent ---Mode 100 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 100 Gain State
 * @parent ---Mode 100 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 100 Kill Ally
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 100 Kill Enemy
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 100 Win Battle
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 100 Flee Battle
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 100 Lose Battle
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 100 Crisis HP
 * @parent ---Mode 100 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 100 Crisis MP
 * @parent ---Mode 100 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 100 Only Member
 * @parent ---Mode 100 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 100 Evasion
 * @parent ---Mode 100 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_EnhancedTP.
 * Make sure this plugin is located under YEP_EnhancedTP in the plugin list.
 *
 * If you have other YEP_X_MoreTPModes plugins, place them in sequential order.
 *
 * For those who think that 80 TP Modes isn't enough, this will expand the
 * amount of TP Modes for your game by another 20 for a total of 100 TP Modes!
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

if (Imported.YEP_EnhancedTP) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_MoreTPModes4');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ETPMax = 100;
for (Yanfly.i = 81; Yanfly.i < Yanfly.Param.ETPMax + 1; ++Yanfly.i) {
  $dataTpModes[Yanfly.i] = {
    id: Yanfly.i,
    name: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Name']),
    iconIndex: Number(Yanfly.Parameters['Mode ' + Yanfly.i + ' Icon']),
    description: 
      String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Help Line 1']) + '\n' +
      String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Help Line 2']),
    maxTp: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Max TP']),
    preserve: eval(String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Preserve'])),
    initialTp: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Initial TP']),
    regenTp: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Regen TP']),
    takeHpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Take HP DMG']),
    dealHpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Deal HP DMG']),
    healHpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Heal HP DMG']),
    allyHpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Ally HP DMG']),
    takeMpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Take MP DMG']),
    dealMpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Deal MP DMG']),
    healMpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Heal MP DMG']),
    allyMpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Ally MP DMG']),
    allyMpDmg: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Ally MP DMG']),
    dealState: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Deal State']),
    gainState: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Gain State']),
    killAlly: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Kill Ally']),
    killEnemy: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Kill Enemy']),
    winBattle: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Win Battle']),
    fleeBattle: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Flee Battle']),
    loseBattle: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Lose Battle']),
    crisisHp: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Crisis HP']),
    crisisMp: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Crisis MP']),
    onlyMember: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Only Member']),
    evasion: String(Yanfly.Parameters['Mode ' + Yanfly.i + ' Evasion'])
  }
};

//=============================================================================
// End of File
//=============================================================================
};