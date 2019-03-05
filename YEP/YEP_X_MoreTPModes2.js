//=============================================================================
// Yanfly Engine Plugins - Enhanced TP Extension - More TP Modes 2
// YEP_X_MoreTPModes2.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MoreTPModes2 = true;

var Yanfly = Yanfly || {};
Yanfly.ETP = Yanfly.ETP || {};
Yanfly.ETP.version = 1.01

//=============================================================================
 /*:
 * @plugindesc v1.01 (Requires YEP_EnhancedTP.js) Adds TP Modes 41 to 60
 * to your game!
 * @author Yanfly Engine Plugins
 *
 * @param ---Mode 41 Settings---
 * @default
 *
 * @param Mode 41 Name
 * @parent ---Mode 41 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 41 Icon
 * @parent ---Mode 41 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 41 Help Line 1
 * @parent ---Mode 41 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 41 Help Line 2
 * @parent ---Mode 41 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 41 Max TP
 * @parent ---Mode 41 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 41 Preserve
 * @parent ---Mode 41 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 41 Initial TP
 * @parent ---Mode 41 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 41 Regen TP
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 41 Take HP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 41 Deal HP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 41 Heal HP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 41 Ally HP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 41 Take MP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 41 Deal MP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 41 Heal MP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 41 Ally MP DMG
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 41 Deal State
 * @parent ---Mode 41 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 41 Gain State
 * @parent ---Mode 41 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 41 Kill Ally
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 41 Kill Enemy
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 41 Win Battle
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 41 Flee Battle
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 41 Lose Battle
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 41 Crisis HP
 * @parent ---Mode 41 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 41 Crisis MP
 * @parent ---Mode 41 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 41 Only Member
 * @parent ---Mode 41 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 41 Evasion
 * @parent ---Mode 41 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 42 Settings---
 * @default
 *
 * @param Mode 42 Name
 * @parent ---Mode 42 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 42 Icon
 * @parent ---Mode 42 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 42 Help Line 1
 * @parent ---Mode 42 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 42 Help Line 2
 * @parent ---Mode 42 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 42 Max TP
 * @parent ---Mode 42 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 42 Preserve
 * @parent ---Mode 42 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 42 Initial TP
 * @parent ---Mode 42 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 42 Regen TP
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 42 Take HP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 42 Deal HP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 42 Heal HP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 42 Ally HP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 42 Take MP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 42 Deal MP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 42 Heal MP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 42 Ally MP DMG
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 42 Deal State
 * @parent ---Mode 42 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 42 Gain State
 * @parent ---Mode 42 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 42 Kill Ally
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 42 Kill Enemy
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 42 Win Battle
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 42 Flee Battle
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 42 Lose Battle
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 42 Crisis HP
 * @parent ---Mode 42 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 42 Crisis MP
 * @parent ---Mode 42 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 42 Only Member
 * @parent ---Mode 42 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 42 Evasion
 * @parent ---Mode 42 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 43 Settings---
 * @default
 *
 * @param Mode 43 Name
 * @parent ---Mode 43 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 43 Icon
 * @parent ---Mode 43 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 43 Help Line 1
 * @parent ---Mode 43 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 43 Help Line 2
 * @parent ---Mode 43 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 43 Max TP
 * @parent ---Mode 43 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 43 Preserve
 * @parent ---Mode 43 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 43 Initial TP
 * @parent ---Mode 43 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 43 Regen TP
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 43 Take HP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 43 Deal HP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 43 Heal HP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 43 Ally HP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 43 Take MP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 43 Deal MP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 43 Heal MP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 43 Ally MP DMG
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 43 Deal State
 * @parent ---Mode 43 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 43 Gain State
 * @parent ---Mode 43 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 43 Kill Ally
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 43 Kill Enemy
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 43 Win Battle
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 43 Flee Battle
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 43 Lose Battle
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 43 Crisis HP
 * @parent ---Mode 43 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 43 Crisis MP
 * @parent ---Mode 43 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 43 Only Member
 * @parent ---Mode 43 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 43 Evasion
 * @parent ---Mode 43 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 44 Settings---
 * @default
 *
 * @param Mode 44 Name
 * @parent ---Mode 44 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 44 Icon
 * @parent ---Mode 44 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 44 Help Line 1
 * @parent ---Mode 44 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 44 Help Line 2
 * @parent ---Mode 44 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 44 Max TP
 * @parent ---Mode 44 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 44 Preserve
 * @parent ---Mode 44 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 44 Initial TP
 * @parent ---Mode 44 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 44 Regen TP
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 44 Take HP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 44 Deal HP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 44 Heal HP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 44 Ally HP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 44 Take MP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 44 Deal MP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 44 Heal MP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 44 Ally MP DMG
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 44 Deal State
 * @parent ---Mode 44 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 44 Gain State
 * @parent ---Mode 44 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 44 Kill Ally
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 44 Kill Enemy
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 44 Win Battle
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 44 Flee Battle
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 44 Lose Battle
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 44 Crisis HP
 * @parent ---Mode 44 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 44 Crisis MP
 * @parent ---Mode 44 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 44 Only Member
 * @parent ---Mode 44 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 44 Evasion
 * @parent ---Mode 44 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 45 Settings---
 * @default
 *
 * @param Mode 45 Name
 * @parent ---Mode 45 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 45 Icon
 * @parent ---Mode 45 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 45 Help Line 1
 * @parent ---Mode 45 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 45 Help Line 2
 * @parent ---Mode 45 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 45 Max TP
 * @parent ---Mode 45 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 45 Preserve
 * @parent ---Mode 45 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 45 Initial TP
 * @parent ---Mode 45 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 45 Regen TP
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 45 Take HP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 45 Deal HP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 45 Heal HP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 45 Ally HP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 45 Take MP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 45 Deal MP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 45 Heal MP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 45 Ally MP DMG
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 45 Deal State
 * @parent ---Mode 45 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 45 Gain State
 * @parent ---Mode 45 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 45 Kill Ally
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 45 Kill Enemy
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 45 Win Battle
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 45 Flee Battle
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 45 Lose Battle
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 45 Crisis HP
 * @parent ---Mode 45 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 45 Crisis MP
 * @parent ---Mode 45 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 45 Only Member
 * @parent ---Mode 45 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 45 Evasion
 * @parent ---Mode 45 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 46 Settings---
 * @default
 *
 * @param Mode 46 Name
 * @parent ---Mode 46 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 46 Icon
 * @parent ---Mode 46 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 46 Help Line 1
 * @parent ---Mode 46 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 46 Help Line 2
 * @parent ---Mode 46 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 46 Max TP
 * @parent ---Mode 46 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 46 Preserve
 * @parent ---Mode 46 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 46 Initial TP
 * @parent ---Mode 46 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 46 Regen TP
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 46 Take HP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 46 Deal HP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 46 Heal HP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 46 Ally HP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 46 Take MP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 46 Deal MP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 46 Heal MP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 46 Ally MP DMG
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 46 Deal State
 * @parent ---Mode 46 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 46 Gain State
 * @parent ---Mode 46 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 46 Kill Ally
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 46 Kill Enemy
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 46 Win Battle
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 46 Flee Battle
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 46 Lose Battle
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 46 Crisis HP
 * @parent ---Mode 46 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 46 Crisis MP
 * @parent ---Mode 46 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 46 Only Member
 * @parent ---Mode 46 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 46 Evasion
 * @parent ---Mode 46 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 47 Settings---
 * @default
 *
 * @param Mode 47 Name
 * @parent ---Mode 47 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 47 Icon
 * @parent ---Mode 47 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 47 Help Line 1
 * @parent ---Mode 47 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 47 Help Line 2
 * @parent ---Mode 47 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 47 Max TP
 * @parent ---Mode 47 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 47 Preserve
 * @parent ---Mode 47 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 47 Initial TP
 * @parent ---Mode 47 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 47 Regen TP
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 47 Take HP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 47 Deal HP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 47 Heal HP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 47 Ally HP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 47 Take MP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 47 Deal MP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 47 Heal MP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 47 Ally MP DMG
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 47 Deal State
 * @parent ---Mode 47 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 47 Gain State
 * @parent ---Mode 47 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 47 Kill Ally
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 47 Kill Enemy
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 47 Win Battle
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 47 Flee Battle
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 47 Lose Battle
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 47 Crisis HP
 * @parent ---Mode 47 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 47 Crisis MP
 * @parent ---Mode 47 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 47 Only Member
 * @parent ---Mode 47 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 47 Evasion
 * @parent ---Mode 47 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 48 Settings---
 * @default
 *
 * @param Mode 48 Name
 * @parent ---Mode 48 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 48 Icon
 * @parent ---Mode 48 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 48 Help Line 1
 * @parent ---Mode 48 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 48 Help Line 2
 * @parent ---Mode 48 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 48 Max TP
 * @parent ---Mode 48 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 48 Preserve
 * @parent ---Mode 48 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 48 Initial TP
 * @parent ---Mode 48 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 48 Regen TP
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 48 Take HP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 48 Deal HP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 48 Heal HP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 48 Ally HP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 48 Take MP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 48 Deal MP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 48 Heal MP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 48 Ally MP DMG
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 48 Deal State
 * @parent ---Mode 48 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 48 Gain State
 * @parent ---Mode 48 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 48 Kill Ally
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 48 Kill Enemy
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 48 Win Battle
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 48 Flee Battle
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 48 Lose Battle
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 48 Crisis HP
 * @parent ---Mode 48 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 48 Crisis MP
 * @parent ---Mode 48 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 48 Only Member
 * @parent ---Mode 48 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 48 Evasion
 * @parent ---Mode 48 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 49 Settings---
 * @default
 *
 * @param Mode 49 Name
 * @parent ---Mode 49 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 49 Icon
 * @parent ---Mode 49 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 49 Help Line 1
 * @parent ---Mode 49 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 49 Help Line 2
 * @parent ---Mode 49 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 49 Max TP
 * @parent ---Mode 49 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 49 Preserve
 * @parent ---Mode 49 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 49 Initial TP
 * @parent ---Mode 49 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 49 Regen TP
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 49 Take HP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 49 Deal HP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 49 Heal HP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 49 Ally HP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 49 Take MP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 49 Deal MP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 49 Heal MP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 49 Ally MP DMG
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 49 Deal State
 * @parent ---Mode 49 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 49 Gain State
 * @parent ---Mode 49 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 49 Kill Ally
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 49 Kill Enemy
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 49 Win Battle
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 49 Flee Battle
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 49 Lose Battle
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 49 Crisis HP
 * @parent ---Mode 49 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 49 Crisis MP
 * @parent ---Mode 49 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 49 Only Member
 * @parent ---Mode 49 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 49 Evasion
 * @parent ---Mode 49 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 50 Settings---
 * @default
 *
 * @param Mode 50 Name
 * @parent ---Mode 50 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 50 Icon
 * @parent ---Mode 50 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 50 Help Line 1
 * @parent ---Mode 50 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 50 Help Line 2
 * @parent ---Mode 50 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 50 Max TP
 * @parent ---Mode 50 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 50 Preserve
 * @parent ---Mode 50 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 50 Initial TP
 * @parent ---Mode 50 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 50 Regen TP
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 50 Take HP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 50 Deal HP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 50 Heal HP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 50 Ally HP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 50 Take MP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 50 Deal MP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 50 Heal MP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 50 Ally MP DMG
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 50 Deal State
 * @parent ---Mode 50 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 50 Gain State
 * @parent ---Mode 50 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 50 Kill Ally
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 50 Kill Enemy
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 50 Win Battle
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 50 Flee Battle
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 50 Lose Battle
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 50 Crisis HP
 * @parent ---Mode 50 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 50 Crisis MP
 * @parent ---Mode 50 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 50 Only Member
 * @parent ---Mode 50 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 50 Evasion
 * @parent ---Mode 50 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 51 Settings---
 * @default
 *
 * @param Mode 51 Name
 * @parent ---Mode 51 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 51 Icon
 * @parent ---Mode 51 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 51 Help Line 1
 * @parent ---Mode 51 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 51 Help Line 2
 * @parent ---Mode 51 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 51 Max TP
 * @parent ---Mode 51 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 51 Preserve
 * @parent ---Mode 51 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 51 Initial TP
 * @parent ---Mode 51 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 51 Regen TP
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 51 Take HP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 51 Deal HP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 51 Heal HP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 51 Ally HP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 51 Take MP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 51 Deal MP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 51 Heal MP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 51 Ally MP DMG
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 51 Deal State
 * @parent ---Mode 51 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 51 Gain State
 * @parent ---Mode 51 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 51 Kill Ally
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 51 Kill Enemy
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 51 Win Battle
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 51 Flee Battle
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 51 Lose Battle
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 51 Crisis HP
 * @parent ---Mode 51 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 51 Crisis MP
 * @parent ---Mode 51 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 51 Only Member
 * @parent ---Mode 51 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 51 Evasion
 * @parent ---Mode 51 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 52 Settings---
 * @default
 *
 * @param Mode 52 Name
 * @parent ---Mode 52 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 52 Icon
 * @parent ---Mode 52 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 52 Help Line 1
 * @parent ---Mode 52 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 52 Help Line 2
 * @parent ---Mode 52 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 52 Max TP
 * @parent ---Mode 52 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 52 Preserve
 * @parent ---Mode 52 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 52 Initial TP
 * @parent ---Mode 52 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 52 Regen TP
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 52 Take HP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 52 Deal HP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 52 Heal HP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 52 Ally HP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 52 Take MP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 52 Deal MP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 52 Heal MP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 52 Ally MP DMG
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 52 Deal State
 * @parent ---Mode 52 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 52 Gain State
 * @parent ---Mode 52 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 52 Kill Ally
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 52 Kill Enemy
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 52 Win Battle
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 52 Flee Battle
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 52 Lose Battle
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 52 Crisis HP
 * @parent ---Mode 52 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 52 Crisis MP
 * @parent ---Mode 52 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 52 Only Member
 * @parent ---Mode 52 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 52 Evasion
 * @parent ---Mode 52 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 53 Settings---
 * @default
 *
 * @param Mode 53 Name
 * @parent ---Mode 53 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 53 Icon
 * @parent ---Mode 53 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 53 Help Line 1
 * @parent ---Mode 53 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 53 Help Line 2
 * @parent ---Mode 53 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 53 Max TP
 * @parent ---Mode 53 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 53 Preserve
 * @parent ---Mode 53 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 53 Initial TP
 * @parent ---Mode 53 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 53 Regen TP
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 53 Take HP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 53 Deal HP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 53 Heal HP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 53 Ally HP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 53 Take MP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 53 Deal MP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 53 Heal MP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 53 Ally MP DMG
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 53 Deal State
 * @parent ---Mode 53 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 53 Gain State
 * @parent ---Mode 53 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 53 Kill Ally
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 53 Kill Enemy
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 53 Win Battle
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 53 Flee Battle
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 53 Lose Battle
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 53 Crisis HP
 * @parent ---Mode 53 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 53 Crisis MP
 * @parent ---Mode 53 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 53 Only Member
 * @parent ---Mode 53 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 53 Evasion
 * @parent ---Mode 53 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 54 Settings---
 * @default
 *
 * @param Mode 54 Name
 * @parent ---Mode 54 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 54 Icon
 * @parent ---Mode 54 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 54 Help Line 1
 * @parent ---Mode 54 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 54 Help Line 2
 * @parent ---Mode 54 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 54 Max TP
 * @parent ---Mode 54 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 54 Preserve
 * @parent ---Mode 54 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 54 Initial TP
 * @parent ---Mode 54 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 54 Regen TP
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 54 Take HP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 54 Deal HP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 54 Heal HP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 54 Ally HP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 54 Take MP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 54 Deal MP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 54 Heal MP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 54 Ally MP DMG
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 54 Deal State
 * @parent ---Mode 54 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 54 Gain State
 * @parent ---Mode 54 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 54 Kill Ally
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 54 Kill Enemy
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 54 Win Battle
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 54 Flee Battle
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 54 Lose Battle
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 54 Crisis HP
 * @parent ---Mode 54 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 54 Crisis MP
 * @parent ---Mode 54 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 54 Only Member
 * @parent ---Mode 54 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 54 Evasion
 * @parent ---Mode 54 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 55 Settings---
 * @default
 *
 * @param Mode 55 Name
 * @parent ---Mode 55 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 55 Icon
 * @parent ---Mode 55 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 55 Help Line 1
 * @parent ---Mode 55 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 55 Help Line 2
 * @parent ---Mode 55 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 55 Max TP
 * @parent ---Mode 55 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 55 Preserve
 * @parent ---Mode 55 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 55 Initial TP
 * @parent ---Mode 55 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 55 Regen TP
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 55 Take HP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 55 Deal HP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 55 Heal HP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 55 Ally HP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 55 Take MP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 55 Deal MP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 55 Heal MP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 55 Ally MP DMG
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 55 Deal State
 * @parent ---Mode 55 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 55 Gain State
 * @parent ---Mode 55 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 55 Kill Ally
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 55 Kill Enemy
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 55 Win Battle
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 55 Flee Battle
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 55 Lose Battle
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 55 Crisis HP
 * @parent ---Mode 55 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 55 Crisis MP
 * @parent ---Mode 55 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 55 Only Member
 * @parent ---Mode 55 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 55 Evasion
 * @parent ---Mode 55 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 56 Settings---
 * @default
 *
 * @param Mode 56 Name
 * @parent ---Mode 56 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 56 Icon
 * @parent ---Mode 56 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 56 Help Line 1
 * @parent ---Mode 56 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 56 Help Line 2
 * @parent ---Mode 56 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 56 Max TP
 * @parent ---Mode 56 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 56 Preserve
 * @parent ---Mode 56 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 56 Initial TP
 * @parent ---Mode 56 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 56 Regen TP
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 56 Take HP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 56 Deal HP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 56 Heal HP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 56 Ally HP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 56 Take MP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 56 Deal MP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 56 Heal MP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 56 Ally MP DMG
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 56 Deal State
 * @parent ---Mode 56 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 56 Gain State
 * @parent ---Mode 56 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 56 Kill Ally
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 56 Kill Enemy
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 56 Win Battle
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 56 Flee Battle
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 56 Lose Battle
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 56 Crisis HP
 * @parent ---Mode 56 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 56 Crisis MP
 * @parent ---Mode 56 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 56 Only Member
 * @parent ---Mode 56 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 56 Evasion
 * @parent ---Mode 56 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 57 Settings---
 * @default
 *
 * @param Mode 57 Name
 * @parent ---Mode 57 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 57 Icon
 * @parent ---Mode 57 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 57 Help Line 1
 * @parent ---Mode 57 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 57 Help Line 2
 * @parent ---Mode 57 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 57 Max TP
 * @parent ---Mode 57 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 57 Preserve
 * @parent ---Mode 57 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 57 Initial TP
 * @parent ---Mode 57 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 57 Regen TP
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 57 Take HP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 57 Deal HP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 57 Heal HP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 57 Ally HP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 57 Take MP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 57 Deal MP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 57 Heal MP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 57 Ally MP DMG
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 57 Deal State
 * @parent ---Mode 57 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 57 Gain State
 * @parent ---Mode 57 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 57 Kill Ally
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 57 Kill Enemy
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 57 Win Battle
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 57 Flee Battle
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 57 Lose Battle
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 57 Crisis HP
 * @parent ---Mode 57 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 57 Crisis MP
 * @parent ---Mode 57 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 57 Only Member
 * @parent ---Mode 57 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 57 Evasion
 * @parent ---Mode 57 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 58 Settings---
 * @default
 *
 * @param Mode 58 Name
 * @parent ---Mode 58 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 58 Icon
 * @parent ---Mode 58 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 58 Help Line 1
 * @parent ---Mode 58 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 58 Help Line 2
 * @parent ---Mode 58 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 58 Max TP
 * @parent ---Mode 58 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 58 Preserve
 * @parent ---Mode 58 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 58 Initial TP
 * @parent ---Mode 58 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 58 Regen TP
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 58 Take HP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 58 Deal HP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 58 Heal HP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 58 Ally HP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 58 Take MP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 58 Deal MP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 58 Heal MP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 58 Ally MP DMG
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 58 Deal State
 * @parent ---Mode 58 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 58 Gain State
 * @parent ---Mode 58 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 58 Kill Ally
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 58 Kill Enemy
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 58 Win Battle
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 58 Flee Battle
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 58 Lose Battle
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 58 Crisis HP
 * @parent ---Mode 58 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 58 Crisis MP
 * @parent ---Mode 58 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 58 Only Member
 * @parent ---Mode 58 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 58 Evasion
 * @parent ---Mode 58 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 59 Settings---
 * @default
 *
 * @param Mode 59 Name
 * @parent ---Mode 59 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 59 Icon
 * @parent ---Mode 59 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 59 Help Line 1
 * @parent ---Mode 59 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 59 Help Line 2
 * @parent ---Mode 59 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 59 Max TP
 * @parent ---Mode 59 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 59 Preserve
 * @parent ---Mode 59 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 59 Initial TP
 * @parent ---Mode 59 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 59 Regen TP
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 59 Take HP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 59 Deal HP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 59 Heal HP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 59 Ally HP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 59 Take MP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 59 Deal MP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 59 Heal MP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 59 Ally MP DMG
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 59 Deal State
 * @parent ---Mode 59 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 59 Gain State
 * @parent ---Mode 59 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 59 Kill Ally
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 59 Kill Enemy
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 59 Win Battle
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 59 Flee Battle
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 59 Lose Battle
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 59 Crisis HP
 * @parent ---Mode 59 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 59 Crisis MP
 * @parent ---Mode 59 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 59 Only Member
 * @parent ---Mode 59 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 59 Evasion
 * @parent ---Mode 59 Settings---
 * @desc Formula for how much TP is gained when user evades an attack.
 * @default 0
 *
 * @param ---Mode 60 Settings---
 * @default
 *
 * @param Mode 60 Name
 * @parent ---Mode 60 Settings---
 * @desc The name used for this TP mode.
 * @default Undefined
 *
 * @param Mode 60 Icon
 * @parent ---Mode 60 Settings---
 * @desc The icon used for this TP mode.
 * @default 0
 *
 * @param Mode 60 Help Line 1
 * @parent ---Mode 60 Settings---
 * @desc The 1st help description line used for this TP mode.
 * @default -
 *
 * @param Mode 60 Help Line 2
 * @parent ---Mode 60 Settings---
 * @desc The 2nd help description line used for this TP mode.
 * @default -
 *
 * @param Mode 60 Max TP
 * @parent ---Mode 60 Settings---
 * @desc The formula used to determine the max TP for this mode.
 * @default 100
 *
 * @param Mode 60 Preserve
 * @parent ---Mode 60 Settings---
 * @desc true - Carry TP from one battle to the next.
 * false - Reset the initial TP count each battle.
 * @default true
 *
 * @param Mode 60 Initial TP
 * @parent ---Mode 60 Settings---
 * @desc Formula for much TP is gained at the start of battle.
 * @default 0
 *
 * @param Mode 60 Regen TP
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained upon regeneration.
 * @default 100 * user.trg
 *
 * @param Mode 60 Take HP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained taking HP damage.
 * @default 0
 *
 * @param Mode 60 Deal HP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained dealing HP damage.
 * @default 0
 *
 * @param Mode 60 Heal HP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained healing HP damage.
 * @default 0
 *
 * @param Mode 60 Ally HP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained for ally HP damage.
 * @default 0
 *
 * @param Mode 60 Take MP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained taking MP damage.
 * @default 0
 *
 * @param Mode 60 Deal MP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained dealing MP damage.
 * @default 0
 *
 * @param Mode 60 Heal MP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained healing MP damage.
 * @default 0
 *
 * @param Mode 60 Ally MP DMG
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained for ally MP damage.
 * @default 0
 *
 * @param Mode 60 Deal State
 * @parent ---Mode 60 Settings---
 * @desc Formula TP gained when user inflicts a state on a foe.
 * @default 0
 *
 * @param Mode 60 Gain State
 * @parent ---Mode 60 Settings---
 * @desc Formula TP gained when user gains a state from a foe.
 * @default 0
 *
 * @param Mode 60 Kill Ally
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained when an ally is killed.
 * @default 0
 *
 * @param Mode 60 Kill Enemy
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained when a foe is killed.
 * @default 0
 *
 * @param Mode 60 Win Battle
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained when a battle is won.
 * @default 0
 *
 * @param Mode 60 Flee Battle
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained when a battle is fled.
 * @default 0
 *
 * @param Mode 60 Lose Battle
 * @parent ---Mode 60 Settings---
 * @desc Formula for how much TP is gained when a battle is lost.
 * @default 0
 *
 * @param Mode 60 Crisis HP
 * @parent ---Mode 60 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of HP.
 * @default 0
 *
 * @param Mode 60 Crisis MP
 * @parent ---Mode 60 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * with crisis amounts of MP.
 * @default 0
 *
 * @param Mode 60 Only Member
 * @parent ---Mode 60 Settings---
 * @desc Formula for TP gained during the TP regeneration timing
 * as the only ally alive.
 * @default 0
 *
 * @param Mode 60 Evasion
 * @parent ---Mode 60 Settings---
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
 * For those who think that 40 TP Modes isn't enough, this will expand the
 * amount of TP Modes for your game by another 20 for a total of 60 TP Modes!
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

Yanfly.Parameters = PluginManager.parameters('YEP_X_MoreTPModes2');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ETPMax = 60;
for (Yanfly.i = 41; Yanfly.i < Yanfly.Param.ETPMax + 1; ++Yanfly.i) {
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