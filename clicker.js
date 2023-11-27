
trigger = document.createEvent('HTMLEvents');
trigger.initEvent("click", true, true);
var car = setInterval(function()
            {
              bigCookie.dispatchEvent(trigger);
              for (var h in Game.shimmers)
              {
                if(Game.shimmers[h].type != "Wraith cookie")
                   {
                      Game.shimmers[h].pop();
                   }
              }
            },1);
var tc = setInterval(function()
                     {
                          if (Game.TickerEffect && Game.TickerEffect.type=='fortune') 
                          {
                                  Game.tickerL.click();
                          }
                     },500);
