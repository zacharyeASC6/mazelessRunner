function instructions() {
    get("info").innerHTML =
        "You control the purple alien in this game." +
        "</br>" +
        "Use the arrow keys or WASD to move around." +
        '</br>' +
        "Your goal is to keep collecting the sun 🔆 for as long as you can in as little time as you can without dying." +
        "</br>" +
        "The game will get harder as you progress." +
        "</br>" +
        "You can pause with the P key if you want." +
        "</br>" +
        "Avoid these guys and everything that comes from them. 🌝 🐒 🦄 🐻 🐝"+
        "</br>" +
        "Collect these for cool effects. 🧊 🐲 🌞 🧿 💖 🔅"+
        "</br>"+
        "With the snowman and the dragon, press shift to fire projectiles in the direction you last went in."
    get("info").style.color = "aquamarine";
    get("info").style.fontFamily = "'Righteous', cursive";
    get("info").style.fontSize = "20px";
    get("info").style.display = "block";
}
function patchNotes() {
    get("info").innerHTML =
        "<b>Mazeless Runner Version 2.7 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<b>General</b>" +
        "<ul>" +
        "<li>Powerups. They're here.</li>" +
        "<ul>" +
        "<li>Freeze your enemies with Snowman!</li>" +
        "<li>Burn obstacles to a crisp with Dragon!</li>" +
        "<li>Power through all who oppose you with Helios!</li>" +
        "<li>Protect yourself from harm with Guard!</li>" +
        "<li>Increase your survivability with Extra Life!</li>" +
        "<li>Get a little extra score with the Mini-Sun!</li>" +
        "<li>Or try your luck with Random!</li>" +
        "</ul>" +
        "<li>The Discord link at the bottom no longer takes up the whole horizontal line it's on</li>" +
        "<li>It's ever so slightly bigger</li>"+
        "<li>Updated the how to play section to include powerups and the enemies you should avoid</li>"+
        "<li>Fixed an issue where the how to play button wouldn't work before clicking the view patch notes button</li>"+
        "</ul>"+
        "<b>Powerups</b>"+
        "<ul>"+
        "<li>Powerups start spawning when the monkey starts moving (3000 on Normal, 4500 on Easy, 1800 on Hard)</li>"+
        "<li>They have a 40% chance of spawning every time you pick up the sun</li>"+
        "<li>If a powerup is already on the field, it can be replaced with a different one if you pick up the sun (same 40% chance)</li>"+
        "<li>Each powerup stays on the field for 45 seconds before despawning</li>"+
        "<li>Each powerup has its own chance to spawn on top of the 40% for any powerup</li>"+
        "<li>When a powerup is active (you picked it up), no others will spawn until that powerup's duration has ended</li>"+
        "<li>Dragon (25%)</li>"+
        "<ul>"+
        "<li>Collect the dragon item 🐲 to become Dragon"+
        "<li>Press Shift to shoot fire in the direction you last traveled</li>"+
        "<li>The fire destroys the minimoons created by the moon</li>"+
        "<li>Doesn't destroy the monkey's bananas (this is intentional since they disappear on their own anyway)</li>"+
        "<li>Starts to spawn on its own after the shadow starts spawning mines (5000 on Normal, 6000 on Easy, 3000 on Hard)</li>"+
        "<li>Can be gained from Random earlier than that, but it won't do anything other than let you shoot fire at stuff</li>"+
        "<li>Lasts 12 seconds</li>"+
        "</ul>"+
        "<li>Snowman (25%)</li>"+
        "<ul>"+
        "<li>Collect the ice cube 🧊 to become Snowman</li>"+
        "<li>Press Shift to shoot ice in the direction you last traveled</li>"+
        "<li>If it comes into contact with an enemy, they are frozen for 5 seconds</li>"+
        "<li>Every enemy can be frozen, including the moon, but you'll have to hit the main moon to freeze it</li>"+
        "<li>Ice travels much faster than fire to more reliably freeze the unicorn</li>"+
        "<li>This one took the longest to make because of how JS handles intervals</li>"+
        "<li>Lasts 12 seconds</li>"+
        "</ul>"+
        "<li>Helios (5%)</li>"+
        "<ul>"+
        "<li>Collect the radiant sun (🌞 but with no face, this is what you turn into) to become Helios</li>"+
        "<li>You are impervious to all damage</li>"+
        "<li>Lasts 7 seconds</li>"+
        "</ul>"+
        "<li>Guard (30%)</li>"+
        "<ul>"+
        "<li>Collect the amulet 🧿 to become Guard</li>"+
        "<li>You take no damage from your next hit</li>"+
        "<li>Lasts 30 seconds, or until you get hit</li>"+
        "</ul>"+
        "<li>Instant-Effect Powerups</li>"+
        "<ul>"+
        "<li>Mini-Sun (50%): Collect the smaller sun 🔅 to gain half of the points you would gain from a normal sun (changes with difficulty)"+
        "<li>Extra Life (10%): Collect the heart 💖 to get an extra life</li>"+
        "<li>This also affects the bear's movement, slowing it down since its movement is dependent on your lives</li>"+
        "</ul>"+
        "<li>Random (25%)</li>"+
        "<ul>"+
        "<li>Gives you a random powerup out of all the ones shown above</li>"+
        "<li>All powerups have an equal chance of coming from Random (1/6)</li>"+
        "</ul>"+
        "</ul>"+
        "<b>Code Edits</b>"+
        "<ul>"+
        "<li>The bigger powerups (dragon, snowman) have their own file</li>"+
        "<li>The smaller powerups are all in one file</li>"+
        "<li>Created a class for the enemies so they're all objects now (made it easier to do some stuff with the powerups and it's much neater than what i had. also object-oriented programming is optimal)</li>"+
        "<li>Learned how to use methods and made one for when you lose a life</li>"+
        "<li>Organized vars.js file to be cleaner and moved a bunch of random vars there</li>"+
        "<li>The projectiles (fire and snowflake) are also part of a class</li>"+
        "<li>Moved the life color change check to the collision method because extra life made it finicky</li>"+
        "<li>Removed variables that didn't do anything</li>"+
        "<li>Shrank some code</li>"+
        "<li>Learned more of JavaScript's limits</li>"+
        "<li>Realized how far I've come since I started this project, and how much farther I can go</li>"+
        "</ul>"+
        "<b>Other</b>"+
        "<ul>"+
        "<li>Yeah, so they're done. I know the projectiles and some of the powerups make the board look weird, and I'm going to come out with an update to fix that later.</li>"+
        "<li>FINALLY got how methods work, and they're pretty cool</li>"+
        "<li>Snowman took a long while to get working, and I still think I missed something. Hopefully I didn't, but if I did, please let me know</li>"+
        "<li>Unicorn variables look ugly, I know, but that's a whole ordeal that I'm not sure I'm ready for yet</li>"+
        "<li>I'll make a more detailed how to play in the next update.</li>"+
        "<li>The board's changing soon.</li>"+
        "</ul>"+
        "<b>Thanks for playing!</b>"+
        "</br>" +
        "</br>";
    get("info").style.fontFamily = "Source Sans Pro";
    get("info").style.color = "aqua";
    get("info").style.fontSize = "16px";
    get("info").style.display = "block";
    get("earlierPatchNoteButton").style.display = "block";
}
function earlierPatchNotes() {
    get("info").innerHTML =
    "<b>Mazeless Runner Version 2.6.1 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<b>General</b>" +
        "<ul>" +
        "<li>LEADERBOARD UPDATE!</li>" +
        "<ul>" +
        "<li>Slick new gradients!</li>" +
        "<li>Wacky new colors!</li>" +
        "<li>Epic new difficulty switchers for the scores!</li>" +
        "<li>Amazing ordered scores... ok i'll stop.</li>" +
        "<li>The text on the leaderboard screen says Mazeless Leaderboard rather than Mazeless Score Log</li>" +
        "<li>The button for the leaderboard now says Leaderboard instead of Scorelog</li>" +
        "</ul>" +
        "<li>The background and the board change colors based on difficulty</li>" +
        "<li>The Changelog button now says View latest patch notes again, and it now only shows the patch notes of the latest patch like it says</li>"+
        "<li>There is now a button for viewing earlier patch notes at the bottom of the latest patch notes</li>"+
        "<li>Changed the easy mode text color to spring green instead of just green</li>"+
        "</ul>"+
        "<b>Code Edits</b>"+
        "<ul>"+
        "<li>Made a separate file for the info and the patch notes so it's not in the HTML part</li>"+
        "</ul>"+
        "<b>Other</b>"+
        "<ul>"+
        "<li>Alright, this time for sure. Powerups are absolutely coming in the next update. I will make no further changes before I implement powerups. How long that'll take, I don't know, but look out for it. I think I've figured out a way to do it, so yeah. I just have to think of powerup ideas and code them in. Let me know which ones you'd like to see. (temporary god mode and temporary shield are things i've been thinking of adding...)</li>"+
        "<li>It's been a while since I've touched this game, and that's mainly because busy. College apps, EE stuff, IA stuff, whole bunch of big assignments and things due. Right now, I'm technically still busy, but not as much.</li>"+
        "<li>Last year never happened</li>"+
        "</ul>"+
        "<b>Thanks for playing!</b>"+
        "</br>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.6 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<b>General</b>" +
        "<ul>" +
        "<li>The game has a Discord server now!</li>" +
        "<li>There are now different difficulties</li>" +
        "<ul>" +
        "<li>Easy Mode: You gain 300 points per sun pickup, the enemies activate at larger score thresholds (they activate later), the enemies are slower, and you have 5 lives.</li>" +
        "<li>Normal Mode: Same as the game was before this patch. Same score thresholds unless otherwise specified in the patch notes, same 250 points per pickup, same speed, same 3 lives.</li>" +
        "<li>Hard Mode: 200 points per pickup. Faster enemies that activate earlier. Only. One. Life.</li></ul>" +
        "<li>Changed the colors of the lives slightly</li>" +
        "<li>The score log saves your difficulty at which you got your score along with the score itself</li>" +
        "<li>All scores set before this patch now have the difficulty next to them (normal mode for all of them)</li>" +
        "</ul>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>Decreased normal mode unicorn speed from 35ms to 40ms</li>" +
        "<li>The monkey's bananas now have a lifetime. This time depends on the difficulty you're playing on.</li>" +
        "<li>Switched the score thresholds of the monkey and the moon (the monkey activates first)</li>" +
        "<li>Reverted the change to the monkey's first step counter</li>" +
        "<li>Details on all the changes to the enemies based on difficulty (listed as such - enemy stat: normal mode value -> value at specified difficulty)</li>" +
        "<b>Easy Mode</b><ul>" +
        "<li>Bee activation threshold: 1000 pts -> 1500 pts</li>" +
        "<li>Bee movement speed: 700ms -> 800ms</li>" +
        "<li>Unicorn score threshold: 2000 pts -> 3000 pts</li>" +
        "<li>Unicorn movement speed: 40ms -> 50ms</li>" +
        "<li>Monkey first score threshold: 3000 pts -> 4500 pts</li>" +
        "<li>Monkey first step count: 20 steps -> 30 steps</li>" +
        "<li>Monkey second score threshold: 7500 pts -> 9000 pts</li>" +
        "<li>Monkey second step count: 10 steps -> 15 steps</li>" +
        "<li>Monkey teleportation speed: 400ms -> 500ms</li>" +
        "<li>Banana lifetime: 30s -> 20s</li>" +
        "<li>Moon first score threshold: 5000 pts -> 6000 pts</li>" +
        "<li>Moon max mines spawned: 75 -> 60</li>" +
        "<li>Moon second score threshold: 10000 pts -> 15000 pts</li>" +
        "<li>Moon teleport speed: 600ms -> 700ms</li>" +
        "<li>Bear first form speed: 490ms -> 650ms</li>" +
        "<li>Bear final form speed: 245ms -> 325ms</li>" +
        "</ul>" +
        "<b>Hard Mode</b><ul>" +
        "<li>Bee activation threshold: 1000 pts -> 600 pts</li>" +
        "<li>Bee movement speed: 700ms -> 500ms</li>" +
        "<li>Unicorn score threshold: 2000 pts -> 1200 pts</li>" +
        "<li>Unicorn movement speed: 40ms -> 25ms</li>" +
        "<li>Monkey first score threshold: 3000 pts -> 1800 pts</li>" +
        "<li>Monkey first step count: 20 steps -> 10 steps</li>" +
        "<li>Monkey second score threshold: 7500 pts -> 4000 pts</li>" +
        "<li>Monkey second step count: 10 steps -> 5 steps</li>" +
        "<li>Monkey teleportation speed: 400ms -> 300ms</li>" +
        "<li>Banana lifetime: 30s -> 40s</li>" +
        "<li>Moon first score threshold: 5000 pts -> 3000 pts</li>" +
        "<li>Moon max mines spawned: 75 -> 90</li>" +
        "<li>Moon second score threshold: 10000 pts -> 6000 pts</li>" +
        "<li>Moon teleport speed: 600ms -> 400ms</li>" +
        "<li>Bear first form speed: It's active all the time, so no changes here.</li>" +
        "<li>Bear final form speed: 245ms -> 250ms to balance it with the fact that it's active all the time</li>" +
        "</ul>" +
        "</ul>" +
        "<b>Other</b>" +
        "<ul>" +
        "<li>I know I said powerups were coming in this update, but difficulties seemed easier to add, so I added that first. Powerups for SURE in the next update.</li>" +
        "<li>Hard mode is CRAZY hard and easy mode is SUPER easy. May tweak them a bit so they aren't so extreme.</li>" +
        "<li>When I learn Unity/C#, this is the first thing I'm making with it.</li>" +
        "<li>It's actually August, wow.</li>" +
        "<li>Discord server?</li>" +
        "</ul>" +
        "<b>Thanks for playing!</b>" +
        "</br>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.5.1 Patch Notes</b>" +
        "</br>" +
        "<ul>" +
        "<li>The image that comes up on pause is now a custom asset that I made</li>" +
        "<li>Fixed an issue where the moon would sometimes not spawn mines after starting up another game</li>" +
        "<li>Pressing enter on any screen that isn't the menu no longer resets the game and makes the enemies faster</li>" +
        "</ul>" +
        "<b>Thanks for playing!</b>" +
        "</br>" +
        "</br>" +
        "<b>Mazeles Runner Version 2.5 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<b>General</b>" +
        "<ul>" +
        "<li>Fixed an issue where the lives would pulse really fast after playing a few games</li>" +
        "<li>You can no longer submit a score of 0 or a score without a name (that was in the last patch)</li>" +
        "<li>The blank spaces are now black boxes instead of white</li>" +
        "</ul>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>The moon is now a full moon</li>" +
        "<li>Changed the croc to a unicorn (i thought it made more sense since they protect the light or whatever)</li>" +
        "<li>Removed the frog from the game</li>" +
        "<li>Fixed an issue when the shark would move unreasonably fast after playing a few games</li>" +
        "<li>Decreased shark first aggression state speed from 400ms to 490ms</li>" +
        "<li>Decreased shark second aggression state speed from 220ms to 245ms</li>" +
        "<li>The shark is now much slower than it usually was when you lose your first life, but it becomes twice as fast when you lose your second</li>" +
        "<li>Also the shark is now a bear</li>" +
        "<li>Decreased the moon's spawn rate from 500ms to 600ms</li>" +
        "<li>The moon spawns 25 more mines when you hit 3000 points</li>" +
        "</ul>" +
        "<b>Other</b>" +
        "<ul>" +
        "<li>Difficulty settings?</li>" +
        "<li>Powerups may be the next big update</li>" +
        "<li>I may change the score thresholds for the enemies to activate</li>" +
        "<li>You may be getting more lives in the future...</li>" +
        "<li>This was going to be a smaller update but I just kept adding more things and decided to make it a big one instead</li>" +
        "</ul>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.4.1 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<ul>" +
        "<li>Fixed an issue where you were unable to type in the username field and submit a name to the score log (i can't believe i missed that... i tested it with autofill so i never had to type. im sorry for this. i'll try my best to make sure something like this doesn't happen again.)</li>" +
        "</ul>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.4 Patch Notes</b>" +
        "</br>" +
        "</br>" +
        "<b>General</b>" +
        "<ul>" +
        "<li>Added a score log so you can see everyone else's scores compared to your own</li>" +
        "<li>Added a high score (shows your highest score after a few games of playing. doesn't save if you refresh the page)" +
        "<li>After you play a game and get a high score you're satisfied with, you can submit your score to the score log along with a username to show everyone your skill!</li>" +
        "<li>God mode has been disabled</li>" +
        "<li>Increased board size from 20x20 to 25x25</li>" +
        "<li>Changed starting position of the player from (7, 7) to (11, 11)" +
        "<li>The buttons now have more effects</li>" +
        "<li>Removed the timer (may add it back in the future idk yet)</li>" +
        "<li>The patch notes are now a changelog (only goes back to version 2.0 because that's when I started logging patchnotes)" +
        "<li>Also in an earlier patch, I changed the color and layout of the lives but I never mentioned it, so yeah I did that" +
        "</ul>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>All the enemies are faster now</li>" +
        "<ul><li>Increased bee speed from 750ms to 700ms</li>" +
        "<li>Increased croc speed from 40ms to 35ms</li>" +
        "<li>Increased shark first aggression state speed from 450ms to 400ms</li>" +
        "<li>Increased shark second aggression state speed from 270ms to 220ms</li>" +
        "<li>Increased moon spawn speed from 500ms to 470ms</li>" +
        "<li>Decreased first monkey step counter from 20 to 17 (it changes positions slightly faster now)</li>" +
        "<li>Increased monkey teleport speed from 450ms to 400ms</li>" +
        "<li>This may be a bit confusing because I'm saying that their speed increased from a higher number to a lower number. To clarify, the ms value is the wait time between each movement that they make, so decreasing this would reduce the time they had to wait to move, making them move faster.</li>" +
        "</ul>" +
        "<li>Changed the starting positions of the monkey and the bee</li>" +
        "</ul>" +
        "<b>Code Edits</b>" +
        "<ul>" +
        "<li>Added more switch cases</li>" +
        "<li>Made a file specifically for quality of life functions (shortening of common functions used in the code like getElementById and such)</li>" +
        "<li>The mines class is now its own file</li>" +
        "<li>Gave some functions their own files (create/display board, changes in gamestate, WASD toggle)" +
        "</ul>" +
        "<b>Other</b>" +
        "<ul>" +
        "<li>I've been considering removing the frog from the game. Initially, it was supposed to be the starting enemy to provide some sort of obstacle at the beginning of the game. Before I increased the size of the board, it was impossible to collide with the frog a bit later in the game, and after I've increased it, you can only hit it in the middle of the board. Also, I've heard some people say that they thought they were the frog when they started the game. So it only really exists to cause confusion for new players and it poses no obstacle at all. It'll probably be gone next patch.</li>" +
        "<li>Multiplayer isn't coming, or at least it isn't something I'm planning to add. Do you guys want multiplayer? It'll depend on feedback I get, so lemme know</li>" +
        "<li>Powerups maybe coming soon?</li>" +
        "<li>The game's slowing down. I can see that it is. Maybe it's my laptop, or it's because I always have a lot of tabs open when updating it, but even then... I'll try to fix it.</li>" +
        "<li>Stay safe.</li>" +
        "</ul>" +
        "<b>Thanks for playing!</b>" +
        "</br>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.3.1 Patch Notes</b>" +
        '</br>' +
        '</br>' +
        "<ul>" +
        "<li>Fixed a bug where no image appeared when you paused the game</li>" +
        "<li>Fixed a bug where you could pause on the game over screen</li>" +
        "</ul>" +
        "</br>" +
        "<b>Mazeless Runner Version 2.3 Patch Notes</b>" +
        '</br>' +
        '</br>' +
        "<b>General</b>" +
        "<ul>" +
        "<li>Added a menu screen (a bit barebones at the moment, but it's there)</li>" +
        "<li>Added a stopwatch for an additional element of challenge: score as much as you can in as little time as you can</li>" +
        "<li>Added a pause button (P)</li>" +
        "<li>Updated instructions to reflect these additions</li>" +
        "<li>Changed the position of the lives</li>" +
        "<li>The buttons have a transition effect when you hover over them now</li>" +
        "<li>WHOA GLOWY TITLE TEXT</li>" +
        "<li>After you lose and restart, your score and time for that game will be displayed on screen. It only shows your latest game, though.</li>" +
        "</ul>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>Changed the shark's movement pattern (you do NOT want to lose a life now)</li>" +
        "</ul>" +
        "<b>Organization/Code things</b>" +
        "<ul>" +
        "<li>Changed some lengthy if/elses to switch cases</li>" +
        "<li>The code looks a bit cleaner now - there are separate files for each character and the sun</li>" +
        "<li>Renamed the variables to match the newer enemies</li>" +
        "<li>Made the sun's code just a bit more efficient (i'm sure it could be better though)</li>" +
        "</ul>" +
        "<b>Known Issues</b>" +
        "<ul>" +
        "<li>Sometimes at the beginning of the game, when you run into an enemy and stay on it for a bit, the shark will enter its second aggression state and the lives will pulse more rapidly even though you'll still have 2 lives left. I don't know why that happens and I'm looking into it.</li>" +
        "<li>Not really an issue at the moment, but I'm thinking that the shark in its current state may be a bit too powerful due to the size of the map. I may consider making it bigger to nerf the shark a bit, but I'm not sure yet.</li>" +
        "</ul>" +
        "</br>" +
        "<b>Thanks for playing!</b>" +
        "</br>" +
        "</br>" +
        "<b>Mazeless Runner 2.2 Patch Notes</b>" +
        '</br>' +
        '</br>' +
        "<b>General</b>" +
        "<ul>" +
        "<li>Changed the visuals, as you can see</li>" +
        "<li>Added the option to toggle between WASD controls and arrow keys</li>" +
        "</ul>" +
        "</br>" +
        "<b>Things I've been thinking about adding</b>" +
        "<ul>" +
        "<li>A pause button and a proper title screen</li>" +
        "<li>Something that saves your high score</li>" +
        "<li>Making the monkey's bananas temporary obstacles (they disappear when something goes over them)</li>" +
        "<li>Powerups (shield, extra life, maybe the ability to destroy obstacles)</li>" +
        "</ul>" +
        "</br>" +
        "<b>Mazeless Runner 2.1 Patch Notes</b>" +
        '</br>' +
        '</br>' +
        "<b>General</b>" +
        "<ul>" +
        "<li>Added god mode for easier testing (i'm not telling you what button it is tho ._.)</li>" +
        "<li>Changed the lightning to an outlined sun (reference to god mode)</li>" +
        "<li>The cherry no longer spawns on enemies to make it unobtainable(mostly)</li>" +
        "<li>Made the lives change color when you lose lives to make it clear when a life has been lost</li>" +
        "<li>The score and lives are now visible when you lose w/o scrolling down</li>" +
        "<li>The arrow keys no longer scroll up and down on some screens</li>" +
        "</ul>" +
        "</br>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>Changed when the snake and the croc start to move (snake starts at 1000 pts, croc starts at 2000 pts)</li>" +
        "<li>New enemy: The Monkey!</li>" +
        "<ul>" +
        "<li>Starts moving at 5000 pts</li>" +
        "<li>Moves additional times based on the number of steps you take</li>" +
        "<li>When it moves, it makes a cross of banana at its location and moves somewhere else</li>" +
        "<li>Kind of an enhanced version of the moon for now</li>" +
        "</ul>" +
        "<li>Changed the shadow's speed spawning point threshold to 10000 pts</li>" +
        "</ul>" +
        "</br>" +
        "<b>Known Issues</b>" +
        "<ul>" +
        "<li>The sun will sometimes spawn on an enemy when it is redirected from another enemy that it would've spawned on otherwise. This is a rare occurrence.</li>" +
        "<li>The mines and some other things disappear when things go over them. You can see them again when you move, but I'm working on a fix where you can see them all the time.</li>" +
        "</ul>" +
        "</br>" +
        "<b>Mazeless Runner 2.0 Patch Notes</b>" +
        '</br>' +
        '</br>' +
        "<b>General</b>" +
        "<ul>" +
        "<li>Added color to the game</li>" +
        "<li>Changed the robot into a space invader</li>" +
        "<li>Centered and increased the size of the game board(The grid size is still the same)</li>" +
        "<li>Changed the cherry to lightning</li>" +
        "<li>The cherry no longer spawns on enemies to make it unobtainable</li>" +
        "<li>Added a game over screen to make it clearer when the game is over</li>" +
        "<li>Made the instructions clearer</li>" +
        "<li>Decreased score per pickup from 500 to 250</li>" +
        "</ul>" +
        "</br>" +
        "<b>Enemies</b>" +
        "<ul>" +
        "<li>Fixed the mines that the shadow drops so they apply the correct amount of damage</li>" +
        "<li>Fixed an issue that caused the snake to not register damage</li>" +
        "<li>The shadow now spawns 25 additional mines when the player's score is above 5000</li>" +
        "<li>Removed the skull</li>" +
        "<li>The shark now has a softlock mechanic(The softlock issue is now an intentional mechanic)</li>" +
        "<li>Increased croc speed from 1 tile/50ms to 1 tile/40ms</li>";
}