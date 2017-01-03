var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "CLOZE_Introduction.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "Form", {html: 'This is the <input name="practice1" type="text" size="10" class="obligatory" />(<i>first/second/third</i>) practice item.'}],
    ["practice", "Form", {html: 'This is <input name="practice2.1" type="text" size="10" class="obligatory" />(<i>another/last</i>) <input name="practice2.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}], 
    ["practice", "Form", {html: 'This is the <input name="practice3.1" type="text" size="10" class="obligatory" />(<i>final/last/third</i>) <input name="practice3.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}],
    
    ["sep", "Separator", { }], 
    
  //Experimental Items//
  //Uncountable Substance//
    //water//
    ["ms1-ns", "Form", {html: 'Do you see <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>water/waters</i>) on the floor over there?'}], 
    ["ms1-ds", "Form", {html: 'Look at <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>water/waters</i>) in the river. It is so beautiful!'}], 
    //coffee//
    ["ms2-ns", "Form", {html: 'I like to have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>coffee/coffees</i>) every morning before I go to work.'}], 
    ["ms2-ds", "Form", {html: 'Can you grab <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>coffee/coffees</i>) from the shelf for me?'}], 
    //toothpaste//
    ["ms3-ns", "Form", {html: 'Did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>toothpaste/toothpastes</i>) on your toothbrush before b rushing your teeth?'}], 
    ["ms3-ds", "Form", {html: 'I thought I put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>toothpaste/toothpastes</i>) on the counter when I was finished.'}], 
    //salt//
    ["ms4-ns", "Form", {html: 'Jeffery often orders <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>salt/salts</i>) on his fries when he is at restaurants.'}], 
    ["ms4-ds", "Form", {html: 'Where did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>salt/salts</i>)? I cannot find it.'}], 
    //sugar//
    ["ms5-ns", "Form", {html: 'I dislike it when they put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sugar/sugars</i>) in my coffee without asking me.'}], 
    ["ms5-ds", "Form", {html: 'We will need <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sugar/sugars</i>) to bake these cookies.'}], 
    //mustard//
    ["ms6-ns", "Form", {html: 'Chelsea would like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mustard/mustards</i>) for her sandwich, please.'}], 
    ["ms6-ds", "Form", {html: 'John said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mustard/mustards</i>) was in the refrigerator.'}], 
  //Uncountable Object//
    //furniture//
    ["mo1-ns", "Form", {html: 'This room is just full of beautiful <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>furniture/furnitures</i>).'}], 
    ["mo1-ds", "Form", {html: 'I was at the storage unit looking for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>furniture/furnitures</i>) for the spare bedroom.'}], 
    //luggage//
    ["mo2-ns", "Form", {html: 'The airline said that our <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>luggage/luggages</i>) was somewhere over the Pacific Ocean.'}], 
    ["mo2-ds", "Form", {html: 'They also said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>luggage/luggages</i>) had been put on the wrong flight.'}], 
    //mail//
    ["mo3-ns", "Form", {html: 'Since today is a holiday, we will probably not get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mail/mails</i>).'}], 
    ["mo3-ds", "Form", {html: 'We should have the Post Office hold <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mail/mails</i>) while we are gone for a week.'}], 
    //homework//
    ["mo4-ns", "Form", {html: 'I cannot believe your teacher assigned <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>homework/homeworks</i>) for this holiday break.'}], 
    ["mo4-ds", "Form", {html: 'Do not forget that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>homework/homeworks</i>) that was assigned on Monday is due on Friday.'}], 
    //traffic//
    ["mo5-ns", "Form", {html: 'I leave for work an hour early because there is always <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>traffic/traffics</i>) on Main Street.'}], 
    ["mo5-ds", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>traffic/traffics</i>) on Liberty Street always causes congestion for over 10 blocks.'}], 
    //jewelry//
    ["mo6-ns", "Form", {html: 'Do you like to wear <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>jewelry/jewelries</i>) often?'}], 
    ["mo6-ds", "Form", {html: 'She said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>jewelry/jewelries</i>) at this particular store was stunning and inexpensive.'}], 
  //Countable//
    //boy//
    ["c1-np", "Form", {html: 'Why do <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) always cause so much trouble?'}], 
    ["c1-i",  "Form", {html: 'I saw <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) playing on the swing at the park.'}], 
    ["c1-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) at the park would like to come over for lunch?'}], 
    ["c1-dp", "Form", {html: 'He said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) were playing in the yard next door.'}], 
    //door//
    ["c2-np", "Form", {html: 'The store had <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) of all different shapes and sizes.'}], 
    ["c2-i",  "Form", {html: 'I think we need to buy <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) fro the back of the house.'}], 
    ["c2-ds", "Form", {html: 'Would you like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) To be blue or red?'}], 
    ["c2-dp", "Form", {html: 'Personally, I think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) on the left look better.'}], 
    //window//
    ["c3-np", "Form", {html: 'We should get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) for the garden shed.'}], 
    ["c3-i",  "Form", {html: 'I agree. I think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) would look very nice on the front.'}], 
    ["c3-ds", "Form", {html: 'Do you think that is a good place for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) that we bought?.'}], 
    ["c3-dp", "Form", {html: 'Well, I really think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) should go on the sides of the shed.'}],  
    //dog//
    ["c4-np", "Form", {html: 'There is someone down the street selling <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>).'}], 
    ["c4-i",  "Form", {html: 'I do not know if our kids are ready for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) or not.'}], 
    ["c4-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) we saw yesterday would behave?'}], 
    ["c4-dp", "Form", {html: 'I would like to think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) would behave if we trained them properly.'}], 
    //book//
    ["c5-np", "Form", {html: 'We should buy and donate <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) to the children in need.'}], 
    ["c5-i",  "Form", {html: 'Do you have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) that you would recommend to a young child?'}], 
    ["c5-ds", "Form", {html: 'Where did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) that you were telling me about?'}], 
    ["c5-dp", "Form", {html: 'I cannot remember <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) the teacher told us to buy for the class.'}], 
    //tree//
    ["c6-np", "Form", {html: 'I think streets with <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) are very beautiful.'}], 
    ["c6-i",  "Form", {html: 'I wonder if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) would look nice in our back yard.'}], 
    ["c6-ds", "Form", {html: 'She thinks that we should put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) from the garden right there.'}], 
    ["c6-dp", "Form", {html: 'Tanner said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) in the park looked very nice today.'}], 
  //Countable [-prototypical]//
    //rock//
    ["cnp1-np", "Form", {html: 'I wonder if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) would make the path more solid.'}], 
    ["cnp1-i",  "Form", {html: 'Should we put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) a rock in the front yard?'}], 
    ["cnp1-ds", "Form", {html: 'I think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) from the store should be used as decoration in the garden.'}], 
    ["cnp1-dp", "Form", {html: 'Where should <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) from the park be put?'}], 
    //noodle//
    ["cnp2-np", "Form", {html: 'Do you think we should have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) for dinner?'}], 
    ["cnp2-i",  "Form", {html: 'Tim said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) was on the floor the other day.'}], 
    ["cnp2-ds", "Form", {html: 'Danielle said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) which was on the floor had been there for three days.'}], 
    ["cnp2-dp", "Form", {html: 'I was wondering if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) at dinner tasted a little strange.'}], 
    //crayon//
    ["cnp3-np", "Form", {html: 'There are <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) in the box. They are of all different colors.'}], 
    ["cnp3-i",  "Form", {html: 'We were worried that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) had been lost in between the seats of the car.'}], 
    ["cnp3-ds", "Form", {html: 'He wants to use <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) that is on the table next to you.'}], 
    ["cnp3-dp", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) that we use for our holiday games are in the drawer in the kitchen.'}], 
    //stick//
    ["cnp4-np", "Form", {html: 'She picked up <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) and put them into the fire.'}], 
    ["cnp4-i",  "Form", {html: 'The squirrel was playing with <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>).'}], 
    ["cnp4-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) broke because we were fighting over it?'}], 
    ["cnp4-dp", "Form", {html: 'Debbie asked if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) could be put in a pile by the street.'}], 
  //Flexible//
    //chocolate//
    ["f1-ns", "Form", {html: 'The recipe requires that we use <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) for the desserts.'}], 
    ["f1-np", "Form", {html: 'There are <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) on the table which can be eaten for a sweet treat.'}], 
    ["f1-i",  "Form", {html: 'Steven recommended <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) that was made in France. Yummy!'}], 
    ["f1-ds", "Form", {html: 'She wonders if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) that we have will be enough for the recipe.'}], 
    ["f1-dp", "Form", {html: 'The king said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) were a gift as an appreciation of his gratitude.'}], 
    //stone//
    ["f2-ns", "Form", {html: 'They spent a lot of money on <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) for the new park.'}], 
    ["f2-np", "Form", {html: 'Skye forgot <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) for her art project.'}], 
    ["f2-i",  "Form", {html: 'Chad said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) would be a nice addition to the gnome garden.'}], 
    ["f2-dp", "Form", {html: 'The gnomes thought that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) were too much for the design.'}], 
    //string//
    ["f3-ns", "Form", {html: 'He had said that he needed <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) to finish the blanket he was making.'}], 
    ["f3-np", "Form", {html: 'There were <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) on the floor before I cleaned the house.'}], 
    ["f3-i",  "Form", {html: 'Would it be better if we added <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) to the end of this?'}], 
    ["f3-ds", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) that I bought yesterday seems to have disappeared.'}], 
    ["f3-dp", "Form", {html: 'Tanner said that he took <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) that we cut for our own project. Argh!'}], 
    //cake//
    ["f4-ns", "Form", {html: 'Her favorite flavor of <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) is vanilla.  I think that is boring!'}], 
    ["f4-np", "Form", {html: 'He siad that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) are often ordered 3 weeks in advance!'}], 
    ["f4-i",  "Form", {html: 'The office said that we need <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) for the party on Friday.'}], 
    ["f4-ds", "Form", {html: 'Chad liked <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) that we got him very much.'}], 
    ["f4-dp", "Form", {html: 'Jeff said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) from the store yesterday were a little dry.'}], 
    //paper//
    ["f5-ns", "Form", {html: 'The printer says that it needs <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>).'}], 
    ["f5-np", "Form", {html: 'They were <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) for the doc tor. I was supposed to sign them!'}], 
    ["f5-i",  "Form", {html: 'Skye needs <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) to finish her research project.'}], 
    ["f5-ds", "Form", {html: 'They ordered <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) that comes weekly but they have yet to receive it.'}], 
    ["f5-dp", "Form", {html: 'The company said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) had been destroyed in a fire.'}], 
    
];