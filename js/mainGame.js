const gameData = {
    "1": {
        "text": "You open your computer on Monday morning, what is the first thing you do?",
        "image" : "smaller_images/snackies.png",
"choices": {
            "Read the news": [2,["Super PAC","Candidate Committee"]],
            "The Daily Wordle": [2,["You moved to Canada instead", "Leadership PAC", "Just a Donor"]],
            "Check the calendar to see what I have going on today.": [2,["Separate Segregated Fund", "FEC Commissioner", "a RAD Analyst"]],
            "Check my emails": [2, ["Joint Fundraising Committee", "National Party Committee"]]
        }
    },
    "2": {
        "text": " You see the election is coming up soon, what's the first thing you'll do to prepare?",
        "image" : "smaller_images/where_to.png",
"choices": {
            "Ask my wife who she is voting for": [3, ["A committee with absolutely no activity", "Joint Fundraising Committee", "Candidate Committee"]],
            "You start researching candidates and their positions": [4,["You moved to Canada instead", "a RAD Analyst","FEC Commissioner", "National Party Committee"]],
            "Donate $10 to the candidate whose name you recognize in your district": [5,["Just a Donor", "Separate Segregated Fund", "Hybrid Committee"]],
            "You google how you can get involved": [6, ["Leadership PAC", "Super PAC"]]
        }
    },
    "3": {
        "text": "Your wife wants you to figure this out on your own for once. She said to go to FEC.gov and do your own research. Where is the first place you look?",
        "image" : "smaller_images/at_beach.png",
"choices": {
            "I go to the map page I need pictures.": [41,["Leadership PAC"]],
            "I search my wife's name to see if she is donating to someone already": [4169,["Joint Fundraising Committee", "Candidate Committee", "Just a Donor"]],
            "I dig into who is donating to candidates to see if I align with their views": [41,["FEC Commissioner", "National Party Committee"]],
            "I download the full bulk data and hope I can figure it out.": [41,[ "You moved to Canada instead", "a RAD Analyst"]],
        }
    },
    "4169": {
        "text": "Your wife does not have any itemized contributions at least. ",
        "image" : "smaller_images/having_beach_fun.png",
"choices": {
            "okay, I'll move on": [41,[]],
        }
    "41": {
        "text": "You notice millions of dollars are being spent in your area from out of state (or district). You start to think: ",
        "image" : "smaller_images/having_beach_fun.png",
"choices": {
            "I have to do something!": [7,["Leadership PAC", "Hybrid Committee"]],
            "but why?": [7,["Joint Fundraising Committee", "Candidate Committee", "Just a Donor", "a RAD Analyst"]],
            "Wow, so many people are interested in us very cool.": [7,["FEC Commissioner", "National Party Committee"]],
            "I'm getting a headache.": [7,["You moved to Canada instead", "A committee with absolutely no activity"]],
        }
    },
    "7": {
        "text": "Suddenly, BREAKING NEWS appears on your phone \
                 The favorite candidate for your district, Phil A. Buster, has been caught in a scandal \
                 They were caught eating pineapple on pizza \
                 This will not be tolerated in your district",
        "image" : "smaller_images/beach_disaster.png",
"choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "This election is now personal. \
                You must get involved. What's your plan?",
        "image" : "smaller_images/in_pantry.png",   
"choices": {
            "Donate $10 to the opposing candidate, Councilwoman Anita Vote": [9,["Super PAC"]],
            "Order a yard sign that says, For a Slice of Common Sense—Keep Pineapple Off the Pizza!": [9,["a RAD Analyst", "Separate Segregated Fund"]],
            "Rally your friends to support the opposing candidate, Councilwoman Anita Vote": [19, ["National Party Committee"]]
        }
    },
    "9": {
        "text": "A few days later you see Anita is falling behind in the polls. The Hawaiians are supporting Phil A. Buster from out of state!",
        "image" : "smaller_images/window_locked.png",
"choices": {
            "I need to talk to Big Pizza about supporting Anita": [19, ["Hybrid Committee", "a RAD Analyst", "Separate Segregated Fund"]],
            "What state is the opposite of Hawaii maybe they will help.": [48, ["National Party Committee", "You moved to Canada instead", "A committee with absolutely no activity"]],
            "We need to raise more money for Anita.": [55, ["Super PAC", "Joint Fundraising Committee"]]
        }
    },
    "48" :{
        "text": "I mean geographically that's Maine... \ 
            Are you sure you want to go to Maine? \
            We could just go talk to the Hawaiians...",
        "image" : "smaller_images/window_jump.png",
"choices": {
            "Ugh I guess that's kind of far away though...": [49, ["Super PAC", "Leadership PAC", "You moved to Canada instead"]],
            "I could go for a vacation in Hawaii!": [49,["FEC Commissioner", "a RAD Analyst", "Hybrid Committee"]],
            "Um I'm scared of planes": [49, ["Separate Segregated Fund"]]
        }
    },
    "55" :{
        "text" : "You and your friends start planning a fundraiser for Anita, \
                  a mysterious email appears in your inbox, \
                  IVE BEEN WATCHING YOU. MEET ME IN HONOLULU, \
                  YOUR PLANE TICKET IS ATTACHED.",
        "image" : "smaller_images/breaking_window.png",
"choices": {
                    "spooky. fine. if i must.": [49, ["a RAD Analyst"]],
                    "I needed this vacation, I'm in.": [49, ["You moved to Canada instead", "Leadership PAC"]],
                    "Wow, I've really made it. This is the recognition I deserve.": [49, ["Just a Donor", "Joint Fundraising Committee", "Candidate Committee"]]
                }
    },
    "49" :{    
        "text": "Stepping off the plane in Hawaii ,\
                you are met with a group of large individuals in black suits\
                How do you react?",
        "image" : "smaller_images/corn_space.png",
"choices": {
            "Wow this security detail is for me? nice.": [10,["Candidate Committee"]],
            "I need to run away ASAP": [10,["Just a Donor", "You move to Canada instead"]],
            "*Finger guns*": [10, ["A committee with absolutely no activity", "Joint Fundraising Committee", "Super PAC"]]
        }
    },
    "10": {
        "text": "The suited folks grab you and drag you into a limo. The president sits in front of you.",
        "image" : "smaller_images/space_travel.png",
"choices": {
            "uhhh hi?": [43, ["Hybrid Committee"]],
            "I'm scared": [43,["Separate Segregated Fund", "You moved to Canada instead"]],
            "...Boy do I have a bone to pick with you.": [43, ["FEC Commissioner"]]
        }
    },
    "43" : {
        "text": "The president shakes his head. \"this was the best option?\" he asks. He sighs and hands you a briefcase with $5,010 and exits the car.",
        "image" : "smaller_images/space_confusion.png",
"choices": {
            "I need to get this to Anita!": [11,["Super PAC", "A committee with absolutely no activity"]],
            "Is this legal? What's happening?": [39, ["FEC Commissioner", "a RAD Analyst", "You moved to Canada instead"]],
            "You call your political friends to make a plan": [39,["Leadership PAC"]]
        }
    },
    "11" : {
        "text": "This will go over your contribution limit for Anita.",
        "image" : "smaller_images/glowing_space_orb.png",
"choices":{
            "I know how I can still use it all.": [42, ["Separate Segregated Fund", "Hybrid Committee"]],
            "Crap.": [42, ["A committee with absolutely no activity"]],
            "Well. I still need to buy a plane ticket home.": [42, ["Candidate Committee"]],
        }
    },
    "42": {
        "text": "A glowing popcorn emerges and yells, \"Stop you fools! Ugh,\
                VeggieVille natives, so stupid. Let me take you back.\"",
        "image" : "smaller_images/glowing_popcorn.png",
"choices": {
            "Thanks...": [12,["Separate Segregated Fund"]],
            "THANK YOU! You saved us!":[12,["Just a Donor", "Joint Fundraising Committee", "Super PAC"]],
            "Thank you so much! How can I repay you?": [12,["A committee with absolutely no activity", "National Party Committee"]]
        }
    },
    "39" : {
        "text": "After reading the rocket manual, your team \
            has an idea for what buttons to press.",
        "image" : "smaller_images/spaceplan.png",
"choices": {
            "Full send! VeggieVille here we come": [40,["Super PAC", "Joint Fundraising Committee", "You moved to Canada instead"]],
            "We should double check...": [40, ["You moved to Canada instead", "National Party Committee"]],
            "Someone else press the button, I can't do it": [40, ["Separate Segregated Fund"] ],
            "Let's all press the button together!": [40, ["Hybrid Committee", "Joint Fundraising Committee"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing!\" As Link the FEC Commissioner reaches for the lever, \
        Oli the Onion yells \"Wait! I don't feel good about this. I'm really scared...\". \
        What do you do?",
        "image" : "smaller_images/pull_lever.png",
"choices": {
            "It was me. I was the one that yelled": [44, ["Just a Donor", "Joint Fundraising Committee", "National Party Committee"]],
            "Re-explain the plan. See? Nothing to be afraid of": [44,["A committee with absolutely no activity", "You moved to Canada instead"]],
            "Stand back and let someone else handle the situation": [44, ["Separate Segregated Fund", "a RAD Analyst"]],
            "Go over and comfort them.": [44,["Joint Fundraising Committee", "Hybrid Committee"]]
        }
    },
    "44": {
        "text": "At last, you all pull the lever and blast off! \
            The rocket halts, and the corn husk doors release. \
            You're back in VeggieVille!",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Time to hit up Club National Party Committee! I need to let loose": [13, ["Candidate Committee", "Super PAC"]],
            "Go to your favorite spot to unwind by yourself": [13, ["Separate Segregated Fund"]],
            "Call all of VeggieVille for a picnic and to tell everyone what happened": [13, ["Leadership PAC"]],
            "Throw up from the rocket-sickness": [13, ["Just a Donor"]]
        }
    },
    "12" : {
        "text": "The kernel does a magical twirl, and a pop! \
                You find yourself back in VeggieVille. What do you do now?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Wait...was that an alien?": [13,["Candidate Committee", "FEC Commissioner" ]],
            "Cry. That was a lot to go through": [13,["Hybrid Committee"]],
            "Celebrate with your friends!": [13,["a RAD Analyst", "Super PAC", "National Party Committee", "You moved to Canada instead"]],
            "Take a breather somewhere secluded": [13,["Just a Donor", "FEC Commissioner"]]
        }
    },
    "4":{
        "text": "So many books to choose from! What catches your eye first?",
        "image" : "smaller_images/which_book.png",
"choices" : {
            "A whimsical, heartwarming slice of life novel.": [15,["Hybrid Committee", "Just a Donor"]],
            "The Great Gourdsby, classic literature": [15,["You moved to Canada instead"]],
            "Sherlettuce Holmes, a thrilling mystery novel": [15,["FEC Commissioner", "National Party Committee"]],
            "A self help book": [15, ["A committee with absolutely no activity"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "image" : "smaller_images/bookstore_activities.png",
"choices" : {
            "Join a book club discussion on the hottest new book": [16,["Joint Fundraising Committee", "Just a Donor"]],
            "Book scavenger hunt around the store for a free prize":[16,["Super PAC", "FEC Commissioner"]],
            "A creative writing workshop and storytelling event":[16, ["A committee with absolutely no activity", "Candidate Committee", "National Party Committee"]]     
        }
    },
    "16":{
       "text": "As you leave the bookstore, an insurmountable gust of wind lifts you up. \
        Everyone is buffeted in a vortex up and up...",
        "image" : "smaller_images/vortex.png",
"choices":{
            "Goodbye everyone it was nice knowing you": [17,["Separate Segregated Fund","Joint Fundraising Committee", "a RAD Analyst"]],
            "Error 404 veggie brain is in a state of panic": [17, ["Hybrid Committee"]],
            "Everyone try holding hands!": [17,["You moved to Canada instead", "A committee with absolutely no activity", "National Party Committee"]],
            "Weeee!": [17,["Super PAC", "Just a Donor"]],
       } 
    },
    "17": {
        "text": "The whirlwind stops! You feel a sharp chilly breeze...\
                 because you're trapped in a human's fridge!",
        "image" : "smaller_images/in_fridge.png",
"choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "Get out ASAP before you get eaten!",
        "image" : "smaller_images/in_fridge.png",
"choices":{
            "Hide and wait for the refrigerator door to open": [18,["You moved to Canada instead", "Just a Donor"]],
            "Rally the veggie friends to push the door. Roll out!": [18,["Super PAC", "Candidate Committee"]],
            "Try to unplug the refrigerator from the inside": [18, ["A committee with absolutely no activity","FEC Commissioner"]],
            "Do what the others do": [18,["Separate Segregated Fund"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out \
                of the house! What's next?",
        "image" : "smaller_images/out_fridge.png",
"choices": {
            "Hop on the dog's back!": [19,["Super PAC"]],
            "Stealth your way to the front door": [19, ["a RAD Analyst", "FEC Commissioner"]],
            "Jump out the nearby window!": [9, ["A committee with absolutely no activity", "Candidate Committee"]]
        }
    },
    "19": {
        "text": "As you cross the door step, you're transported to CheeseLand, land of fondue rivers and \
            swiss cheese caves. What's your next move?",
        "image" : "smaller_images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20, ["A committee with absolutely no activity", "Joint Fundraising Committee"]],
            "Go inland in search of the Cheese Castle": [20,["FEC Commissioner", "You moved to Canada instead"]],
            "Ask others what they think the group should do": [20, ["Hybrid Committee", "Joint Fundraising Committee", "Just a Donor"]]
        }
    },
    "20":{
        "text": "Mid charcuterie board making, a gouda cheese wheel yells, \
                \"What are you doing? This is sacred cheese you're eating!\"",
        "image" : "smaller_images/mad_gouda.png",
"choices" : {
            "You want some?": [21,["A committee with absolutely no activity", "Separate Segregated Fund", "Super PAC", "Joint Fundraising Committee"]],
            "Apologize immediately and ask how to get to Cheese Castle":[21, ["Just a Donor", "FEC Commissioner"]]
        }
    },
    "21": {
        "text": "Gouda immediately takes you to the Cheese King, hoping your group \
                leaves as soon as possible. However, the king \
                must be entertained in order to be seen.",
        "image" : "smaller_images/cheese_castle.png",
"choices":{
            "Sing and dance the CheeseLand anthem": [22,["Hybrid Committee", "Just a Donor"]],
            "Offer some leftover charcuterie to the king": [22,["Super PAC", "Separate Segregated Fund"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["Candidate Committee", "A committee with absolutely no activity", "You moved to Canada instead"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, but you're not sure if he's laughing with you or at you...",
        "image" : "smaller_images/performance.png",
"choices": {
            "Keep going, the show must go on!": [51,["Candidate Committee", "Leadership PAC", "National Party Committee"]],
            "Guy's I'm not sure if this is working": [51, ["a RAD Analyst", "FEC Commissioner"]],
            "Try to ignore the king and power through": [51, ["Hybrid Committee", "You moved to Canada instead"]]
        }
    },
    "51": {
        "text": "He chuckles, \"I see you desire to return to VeggieLand. Tell me, \
        what do you miss the most about home?",
        "image" : "smaller_images/happy_king.png",
"choices": {
            "The warm sunlight and fresh air": [23,["Super PAC", "Separate Segregated Fund", "Hybrid Committee"]],
            "The hanging out with your veggie friends": [23,["FEC Commissioner", "Joint Fundraising Committee", "National Party Committee"]],
            "The smell of your grandma's cherry pies": [23,["Just a Donor"]],
            "Weekly frisbee games at the park": [23,["Candidate Committee", "You moved to Canada instead"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a guided all-expensed boat to back home.\" \
                    Where do you guys want to visit on the way back?",
        "image" : "smaller_images/boat.png",
"choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["a RAD Analyst", "A committee with absolutely no activity", "FEC Commissioner"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Separate Segregated Fund", "Hybrid Committee", "Joint Fundraising Committee", "Just a Donor", "National Party Committee"]],
            "Forget-Me-Not Island, largely unexplored territory": [26, ["Super PAC", "A committee with absolutely no activity", "You moved to Canada instead"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "image" : "smaller_images/mushroom.png",
"choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["a RAD Analyst", "National Party Committee"]],
            "Party on da MushrooSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["Candidate Committee", "National Party Committee"]],
            "Buy a little mushroom keepsake for you and your friends": [27, ["Hybrid Committee", "Joint Fundraising Committee"]],
            "I just wanna go back home tbh": [27, ["Separate Segregated Fund", "Leadership PAC"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "image" : "smaller_images/dandelion.png",
"choices": {
            "Make dandelion crowns with friends": [27,["Joint Fundraising Committee", "National Party Committee", "Candidate Committee"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Hybrid Committee", "A committee with absolutely no activity", "Just a Donor"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["a RAD Analyst", "Leadership PAC", "FEC Commissioner"]],
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "image" : "smaller_images/forgetmenot.png",
"choices": {
            "Explore to make the first-ever forget me not island map!": [27,["Leadership PAC", "FEC Commissioner"]],
            "Paint various views to share with VeggieVille": [27,["Hybrid Committee", "Joint Fundraising Committee"]],
            "I wanna go home": [27,["a RAD Analyst", "Separate Segregated Fund"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Super PAC", "Just a Donor", "National Party Committee", "National Party Committee"]]
        }
    },
    "27": {
        "text": "After your pit stop, you finally arrive home in VeggieLand. What are you doing first?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Party at Club National Party Committee. Dance the night away!": [13,["Super PAC"]],
            "Spend some alone time at your favorite cozy bench/spot.": [13,["Just a Donor"]],
            "Organize a community picnic to share your adventures": [13,["Hybrid Committee", "Joint Fundraising Committee"]],
            "Hangout with your friends at a restaurant": [13,["Just a Donor", "Leadership PAC", "National Party Committee"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you:",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Hybrid Committee", "Separate Segregated Fund", "National Party Committee"]],
            "Head to work, get that bag": [0,["a RAD Analyst", "FEC Commissioner"]],
            "Organize a community clean up day": [0,["Just a Donor", "Joint Fundraising Committee", "Leadership PAC"]],
            "Go on a veggie run": [0, ["Super PAC", "Candidate Committee"]]
        } 
    },
    "5":{
        "text": "What are you guys gonna do at the apartment?",
        "image" : "smaller_images/at_apartment.png",
"choices": {
            "Arts and crafts": [28,["National Party Committee", "Just a Donor"]],
            "Drink lots of beverages (wink wink)": [28,["Candidate Committee", "Separate Segregated Fund"]],
            "Play games! Loser has to post an embarassing pic on Vegstagram": [28,["a RAD Analyst", "Leadership PAC"]],
            "Gossip!!!": [28, ["Hybrid Committee"]]
        }
    },
    "28": {
        "text": "Leo the FEC Commissioner goes off to get some snacks for everyone, but shortly \
                after he leaves, you hear him scream!",
        "image" : "smaller_images/apartment.png",
"choices": {
            "SCREAM!!!": [45, ["Candidate Committee", "National Party Committee"]],
            "Leo you good?": [45,["Joint Fundraising Committee", "Leadership PAC"]],
            "Oh no! Is Leo ok?": [45, ["a RAD Analyst", "Just a Donor", "A committee with absolutely no activity"]]
        }
    },
    "45": {
        "text": "You don't hear a response from Leo. You should check in on him...",
        "image" : "smaller_images/no_response.png",
"choices": {
            "Mobilize everyone and proceed towards the scream": [29,["You moved to Canada instead", "Leadership PAC"]],
            "Stay in the middle of the pack": [29, ["Hybrid Committee", "Joint Fundraising Committee"]],
            "Linger in the back, you're scared": [29, ["a RAD Analyst", "Just a Donor", "National Party Committee"]]
        }
    },
    "29": {
        "text": "You follow the noise of the scream, and you’re now at your friends \
                room. What’s the first thing you investigate?",
        "image" : "smaller_images/room.png",
"choices" : {
            "Heck no I’m not investigating!": [30,["a RAD Analyst"]],
            "The open window and it’s billowing curtains… it’s suspicious": [30,["FEC Commissioner"]],
            "The closet. It looks slightly disheveled?": [30,["You moved to Canada instead"]],
            "Call the veggie police!": [30, ["National Party Committee", "Leadership PAC"]]
        }
    },
    "30": {
        "text": "As you investigate, the room turns dark! You feel an overwhelming \
                presence swoop you and your friends out of the window!",
        "image" : "smaller_images/beach_disaster.png",
"choices": {
                "Struggle against whatever it is and try to escape": [46, ["A committee with absolutely no activity"]],
                "Scream for help": [46, ["Leadership PAC"]],
                "Cry a little": [46, ["a RAD Analyst", "Just a Donor"]],
                "Am I gonna die?": [46, ["Separate Segregated Fund"]]
        }
    },
    "46": {
        "text": "As light enters back into your world, you realize you’re in a grocery bag!",
        "image" : "smaller_images/grocery_bag.png",
"choices" : {
            "Everyone jump! That'll break the bag right?": [31,["Leadership PAC", "A committee with absolutely no activity"]],
            "Use your plant abilities to poke holes into bag": [31,["Joint Fundraising Committee"]],
            "Photosynthesize extra fast, get big = break the bag": [31, ["You moved to Canada instead", "Super PAC"]]
        }
    },
    "31": {
        "text": "Success! You've broken free from the grocery bag. Where do you go now? \
                The human is reaching for you!",
        "image" : "smaller_images/grocery_bag_out.png",
"choices": {
            "Panic! There's too much going on": [32,["Just a Donor", "Separate Segregated Fund", "Hybrid Committee"]],
            "Juke the human so hard they have to leave out of embarrassment": [32,["Super PAC", "Candidate Committee"]],
            "JUST RUN!!!!": [32, ["Leadership PAC", "National Party Committee", "You moved to Canada instead"]]
        }
    },
    "32": {
        "text": "You've found a temporary hiding place under a shelf. Where to next?",
        "image" : "smaller_images/hiding.png",
"choices": {
            "Through the air vents": [49,["National Party Committee", "You moved to Canada instead", "a RAD Analyst"]],
            "Mad dash through the store until you find an exit": [49, ["Super PAC", "A committee with absolutely no activity"]]
        }
    },
    "6":{
        "text": "Arrived at Mount Evergetable. What do you do at the base camp?",
        "image" : "smaller_images/base_evergetable.png",
"choices": {
            "Survey the Terrain and Plan the Best Route": [33, ["a RAD Analyst", "You moved to Canada instead"]],
            "Energize the Team with a Motivational Speech": [33, ["Candidate Committee", "Joint Fundraising Committee", "Leadership PAC"]],
            "Take a moment to appreciate the view of mount evergetable": [33, ["National Party Committee"]]
        }
    },
    "33": {
        "text": "As you near the summit, night falls and you have the choice to rest or keep going",
        "image" : "smaller_images/nightfalls.png",
"choices": {
            "Seek Shelter in a Nearby Cave": [34,["FEC Commissioner", "Just a Donor", "a RAD Analyst"]],
            "Climb on!": [36,["Candidate Committee", "Leadership PAC"]]
        }
    },
    "34": {
        "text": "Inside the cave, you and your friends need to figure out how to \
                 pass the night.",
        "image" : "smaller_images/cave.png",
"choices" : {
            "Gather resources and make a makeshift camp": [37,["National Party Committee", "a RAD Analyst"]],
            "Collectively to decide what to do": [37, ["Leadership PAC"]],
            "Telling exciting stories and reflect on the trek so far": [37, ["Joint Fundraising Committee"]],
            "Map out next steps of the journey": [37, ["You moved to Canada instead"]],
        }
    },
    "36": {
        "text": "The veggie squad continues, but they decide to take a quick break.",
        "image" : "smaller_images/evergetable_climb.png",
"choices": {
            "Stargazing break!": [37,["Hybrid Committee"]],
            "Why are we stopping?": [37,["Super PAC"]],
            "Snack time! Food is fuel": [37, ["Joint Fundraising Committee"]],
            "Check in with everyone to see how they're doing": [37,["You moved to Canada instead", "Hybrid Committee", "Leadership PAC"]],
        }
    },
    "37": {
        "text": "The climb continues for days. And you finally reach the top! \
        Take a look around you, you're on top of the world! Suddenly, a gust \
        of wind blows you off the mountain and you swirl and tumble off...",
        "image" : "smaller_images/vortex.png",
"choices" :{
            "Continue": [38,[]],
        }
    },
    "38": {
        "text": "You've been blown onto Cheese Land. You see rivers of fondue, \
        swiss cheese caves, and rosemary fields. What's your move?",
        "image" : "smaller_images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20,["FEC Commissioner", "Super PAC"]],
            "Go inland in search of Cheese City": [20,["A committee with absolutely no activity", "Hybrid Committee", "National Party Committee"]],
            "Ask others what they think the group should do": [20,["You moved to Canada instead", "Joint Fundraising Committee", "Hybrid Committee"]],
            "Lead the pack using your knowledge of Cheese Land geography": [20,["Leadership PAC"]]
        }
    }


};
const personalities = { 
    "A committee with absolutely no activity": 0, // Did You Really Try?
    "You moved to Canada instead": 0, // The Foreigner
    "Leadership PAC": 0, // The Leader
    "Super PAC": 0, // The Adventurer
    "a RAD Analyst": 0, // The Analyst
    "Joint Fundraising Committee": 0, // The Connector
    "Just a Donor": 0, // The Caregiver
    "National Party Committee": 0, // The Visionary
    "Separate Segregated Fund": 0, // The Realist
    "Hybrid Committee": 0, // The Harmonizer
    "Candidate Committee": 0, // The Performer
    "FEC Commissioner": 0 // The Investigator
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Committee Type! Don't lose it, you might have filing obligations! (Right-click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out how this nerd thing!`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
