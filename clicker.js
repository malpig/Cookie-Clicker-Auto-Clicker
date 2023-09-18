if (ClickerCookie === undefined) var ClickerCookie = {};
ClickerCookie.name = 'Auto Clicker for Cookies';
ClickerCookie.version = '1.00';
ClickerCookie.GameVersion = '2.052';
ClickerCookie.launch = function ()
{
    ClickerCookie.isLoaded = 1;
    var autoBigCookie = setInterval(function ()
    {
        trigger = document.createEvent('HTMLEvents');
        trigger.initEvent("click", true, true);
        bigCookie.dispatchEvent(trigger);
    }, 25);
    var autoPassCookie = setInterval(function ()
    {
        for (var h in Game.shimmers)
        {
            if (Game.shimmers[h].type == "golden" || Game.shimmers[h].type == "reindeer")
            {
                Game.shimmers[h].pop();
            }
        }
    }, 25);
}

if (!ClickerCookie.isLoaded)
{
    ClickerCookie.launch();
    console.log(" Mod \"Clicker Cookie\" added.");
}
else
{
    console.log("Clicker Cookie Already Loaded");
}
