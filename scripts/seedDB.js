const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/seattle-brewery-searchDB"
);

// ADD WEBSITE DOOOOOOD
// ADD ELYSIAN REEE

const brewerySeed = [
    {
        name: "Rueben's Brewery",
        queryName: "ruebens",
        website: "http://www.reubensbrews.com/",
        address: "5010 14th Ave NW, Seattle, WA 98107",
        phoneNumber: "(206) 784-2859",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We're an award winning microbrewery focused on making small batches of top quality ales and lagers. We're family owned and focused on brewing unconstrained to make the best beer possible.",
        region: "ballard",
        latitude: "47.665499",
        longitude: "-122.3734178"
    },
    {
        name: "Stoup Brewery",
        queryName: "stoup",
        website: "http://www.stoupbrewing.com/",
        address: "1108 NW 52nd St, Seattle, WA 98107",
        phoneNumber: "(206) 457-5524",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Stoup's beers are beautifully balanced from start to finish, which makes sense given certified-Cicerone Robyn Schumacher's contributions to the team. Stoup's best bets are the award-winning robust porter, excellent year-round, and the sour Berliner Weisse with a shot of flavored syrup.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Populuxe Brewery",
        queryName: "populuxe",
        website: "https://www.populuxebrewing.com/",
        address: "826 NW 49th St, Seattle, WA 98107",
        phoneNumber: "(206) 706-3400",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Co-founders Peter Charbonnier and Amy Besunder started Populuxe Brewing in 2012. Peter had been a home brewer for many years and as his brewing equipment began to outgrow their garage, they began to seek out a commercial space.They found a slightly larger garage within two blocks of their longtime home in Ballard and after 8 months of rushing home after work to do demo and construction, filling out paperwork with various government agencies, piecing together furnishings and basically DYI'ing together a brewery, they opened the doors to their nanobrewery.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Obec Brewery",
        queryName: "obec",
        website: "https://www.obecbrewing.com/",
        address: "1144 NW 52nd Street, Seattle, WA 98107",
        phoneNumber: "(206) 659-0082",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Obec Brewing is a 10 barrel brewery and taproom located in the Ballard neighborhood of Seattle. Our personal brewing style is rooted in the history and tradition of beercraft - a lot of great beers have come before us, and we appreciate the tradition and artistry that created them.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Lagunitas Brewing Company",
        queryName: "lagunitas brewing company",
        website: "https://lagunitas.com/",
        address: "1550 NW 49th St, Seattle, WA 98107",
        phoneNumber: "(206) 784-2230",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Lagunitas description",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "NW Peaks Brewery (Ballard Location)",
        queryName: "nw peaks",
        website: "http://www.nwpeaksbrewery.com/",
        address: "4818 17th Ave NW, Seattle, WA 98107",
        phoneNumber: "(206) 453-3323",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Pint-size brewery & taproom crafting traditional & creative beers in unassuming surrounds.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "NW Peaks Brewery (Hillman City Location)",
        queryName: "nw peaks",
        website: "http://www.nwpeaksbrewery.com/",
        address: "5718 Rainier Ave S Seattle, WA 98118",
        phoneNumber: "(206) 453-3323",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Pint-size brewery & taproom crafting traditional & creative beers in unassuming surrounds.",
        region: "hillman city",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Lucky Envelope Brewing",
        queryName: "lucky envelope",
        website: "https://www.luckyenvelopebrewing.com/",
        address: "907 NW 50th St, Seattle, WA 98107",
        phoneNumber: "(206) 659-4075",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Lucky Envelope’s brewing philosophy is centered around “Culturally Inspired Beer” whose recipes draw from modern and historic brewing styles and techniques. In addition, Lucky Envelope also uses both traditional and non-traditional ingredients in our beers which range from traditional IPAs (ENIAC Mosaic IPA), to German-style lagers (Helles Lager), to seasonal favorites like our Two Pepper Pale Ale (Habanero & Shishito peppers) and Peanut Butter Cream Stout.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Maritime Pacific Brewing Company",
        queryName: "maritime pacific",
        website: "https://www.maritimebrewery.com/",
        address: "1111 NW Ballard Way, Seattle, WA 98107",
        phoneNumber: "(206) 782-6181",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Maritime Pacific Brewing Company Description",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Peddler Brewing Company",
        queryName: "peddler",
        website: "https://www.peddlerbrewing.com/",
        address: "1514 NW Leary Way, Seattle, WA 98107",
        phoneNumber: "(360) 362-0002",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Peddler Brewing Company is a microbrewery with a tasting room and large beer garden located in the Ballard neighborhood of Seattle, WA. At Peddler, we strive to be a gathering place for beer lovers and support bicycling as an awesome way to get around our beautiful city. Owners Haley and Dave Keller spend their time making and selling beer, advocating for cycling, and riding bikes, so in a word, they’re Peddlers.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Bad Jimmy's Brewing Company",
        queryName: "bad jimmys",
        website: "",
        address: "B, 4358 Leary Way NW, Seattle, WA 98107",
        phoneNumber: "(206) 789-1548",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Bad Jimmy's Brewing Co. is made up of 4 beer lovers who met in Seattle. Individually, our love for craft beer has been intense as long as we can remember.  Together we are committed to the love we share for the brand that we created. It is our mission to ensure that Bad Jimmy's Brewing Co. consistently offers the most innovative creations when it comes to craft beer. We love our beer. We want to share our love with you.  We know that the quality of our product is, and always will be a direct reflection of  the high standards we are committed to, and what we will be remembered by.  Our mission is to reinvent intensity as it exists in the craft beer world.  We will do this with creative combinations of the highest quality ingredients for which we see no substitute.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Hale's Brewery",
        queryName: "hales",
        website: "https://halesbrewery.com/",
        address: "4301 Leary Way NW, Seattle, WA 98107",
        phoneNumber: "(206) 782-0737",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "A favorite phrase around Hale’s is, “the main thing is to keep the main thing the main thing.” And, of course, THE “Main Thing” here is making great beer in the brewery and serving great food and drink in the pub. The original vision, in 1983, for Hale’s Ales was to produce world-class ales, by the use of traditional English methods, using locally sourced natural ingredients, and to deliver the finished ales to local beer lovers as absolutely fresh as possible. That vision and mission remains unchanged today.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Bellevue Brewing Company",
        queryName: "bellevue",
        website: "http://www.bellevuebrewing.com/",
        address: "1820 130th Ave NE, Bellevue, WA 98005",
        phoneNumber: "(425) 497-8686",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Founded in 2012, we’ve been skillfully crafting and serving some of most flavorful and balanced ales and lagers you’ll find anywhere. In our massive, family-friendly taproom, we also offer a delicious menu prepared onsite that is full of new American classics and specials created daily from scratch to pair with our delicious beer.",
        region: "bellevue",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Cloudburst Brewing",
        queryName: "cloudburst",
        website: "https://www.cloudburstbrew.com/",
        address: "2116 Western Ave, Seattle, WA 98121",
        phoneNumber: "(206) 602-6061",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Founded in 2012, we’ve been skillfully crafting and serving some of most flavorful and balanced ales and lagers you’ll find anywhere. In our massive, family-friendly taproom, we also offer a delicious menu prepared onsite that is full of new American classics and specials created daily from scratch to pair with our delicious beer.",
        region: "belltown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "The Pike Brewing Company (Belltown Location)",
        queryName: "the pike",
        website: "https://www.pikebrewing.com/",
        address: "1415 1st Ave, Seattle, WA 98101",
        phoneNumber: "(206) 622-6044",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "The Pike Brewing Company description",
        region: "belltown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Belltown Brewing",
    //     queryName: "belltown",
    //     website: "",
    //     address: "200 Bell St, Seattle, WA 98121",
    //     phoneNumber: "(206) 485-7233",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "At Belltown Brewing, we strive to cultivate a community of warmth and welcome in everything that we do - from hand-crafting our own beers on site, to curating a unique and diverse selection of guest taps, to providing excellent hospitality to all our clients. We offer daily familiar classics in a space where people gather to enjoy a meal and each other's company. We are your neighborhood brewhouse.",
    //     region: "belltown",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "The Hop and Hound",
        queryName: "the hop and hound",
        website: "http://www.thehopandhound.com/",
        address: "18116 101st Ave NE, Bothell, WA 98011",
        phoneNumber: "(425) 486-2337",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "After moving to Seattle from Buffalo NY and after 18 years in the Telecom industry selling products to T-Mobile, I've finally decided to do what I'm passionate about. Charlie (my coonhound) and I have been downtown Bothell resident's for about 10 years now and after looking at commercial properties around Main Street for about 5, we have finally found our home on 101st Ave NE. You might have seen Charlie chasing squirrels around the Bothell cemetery on nice days, but what most of my neighbors might not know is that I have a crazy passion about beer. Not only do I have a 3 tap kegerator in my man cave with a Nitro tap that buddies enjoy, I pride myself on pouring each beer the way that it's meant to be served- from the amount of pressure used for each keg to the glass that the beer is meant to be served in. Each keg that we have at the shop- all 14 of them- have their own regulator and individual pressure gage- the way that it should be.",
        region: "bothell",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Redhook Brewlab",
        queryName: "redhook",
        website: "http://redhook.com/breweries-pubs/capitol-hill",
        address: "Pike Motorworks Building, 714 E Pike St, Seattle, WA 98122",
        phoneNumber: "(206) 823-3026",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "In 1981, Redhook founders, Gordon Bowker and Paul Shipman, had a vision to bring Seattle a better beer than the light yellow fizzy stuff that was widely available at the time. Seizing upon the progressive energy of other pioneering Emerald City brands, the two established Seattle’s Redhook Ale Brewery.  From modest beginnings in an old transmission shop in the Ballard neighborhood, to a former trolley car barn in Fremont, Redhook has always embodied the spirit of Seattle. After 35 years, Seattle’s Original Craft Brewery is still brewing fresh, innovative craft beers for the new generations of beer lovers.",
        region: "capital hill",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "The Pike Brewing Company (Captial Hill Location)",
        queryName: "the pike",
        website: "https://www.pikebrewing.com/",
        address: "1315 E Jefferson St, Seattle, WA 98122",
        phoneNumber: "(206) 484-8324",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Machine House Brewery has been producing authentic cask-conditioned ales since 2013. Brewing in small batches at our historic location in Seattle’s Georgetown neighborhood,  we focus on high-quality beers of all styles within the British tradition. Our taproom serves as the premium location in Seattle for immaculately presented cask ales, served through beer engines and at cellar temperature.",
        region: "capital hill",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Outer Planet Craft Brewing",
        queryName: "outer planet craft",
        website: "https://www.outerplanetbrewing.com/",
        address: "1812 12th Ave #100, Seattle, WA 98122",
        phoneNumber: "(206) 763-7000",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We're a small microbrewery on 12th Ave in the heart of Capitol Hill. All of our carefully crafted beers are brewed on-site and rotate quickly, so stop in for a pint and see what's new!",
        region: "capital hill",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Optimism Brewing Company",
        queryName: "optimism",
        website: "https://optimismbrewing.com/",
        address: "1158 Broadway, Seattle, WA 98122",
        phoneNumber: "(206) 651-5429",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Optimism drives everything we do—how we work, engage with our customers and treat our employees. We want to promote optimism and celebrate optimists, because they are the ones who improve the world. We can’t cure cancer or fix homelessness, but we can make beer for those who are trying and use beer to do good. Plus optimists have more fun.",
        region: "capital hill",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "McMenamins Six Arms",
        queryName: "mcmenmins six",
        website: "https://www.mcmenamins.com/",
        address: "300 E Pike St, Seattle, WA 98122",
        phoneNumber: "(206) 223-1698",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "The oddly named Six Arms is not so oddly named when you consider our beer-label logo showing a Hindu idol with her six, sinuous arms aloft. Inside the bustling pub, enormous windows and an impressive three-dimensional sculpture of our multi-armed mascot make Six Arms a destination for Seattle's funky Capitol Hill neighborhood. Filled with a long wooden bar, booths, an upstairs section with wrought-iron café tables and mini booth, the pub also boasts McMenamins' largest collection of chandeliers. Pretty, aren't they? Nestled on Pike Street halfway between Capitol Hill and downtown shopping, the airy pub features daily specials, a menu of classic pub fare and handcrafted ales brewed right on site.",
        region: "capital hill",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Standard Brewing",
        queryName: "standard",
        website: "http://standardbrew.com/",
        address: "1635 E Olive Way, Seattle, WA 98102",
        phoneNumber: "(206) 535-1584",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We now serve our beers alongside a well curated selection of liquor and delicious sandwiches! As such, we are now 21+ and due to health department requirements, we do not allow pets.",
        region: "central ditrict",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Old Stove Brewing",
        queryName: "old stove",
        website: "https://www.oldstove.com/",
        address: "1901 Western Ave, Seattle, WA 98101",
        phoneNumber: "(206) 602-6120",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "If you’ve been to Seattle’s Pike Place Market, you’ve watched fish fly, you’ve fed a bronze pig named Rachel, you’ve shopped endless rows of crafts, flowers and food, you’ve gazed out at Elliott Bay. And you probably got a little thirsty. At Old Stove Brewery, we are serving Market-made craft beer and delicious fare. Come check out our new MarketFront location at 1901 Western Avenue in downtown Seattle!",
        region: "downtown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Gordon Biersch Brewery Restaurant",
    //     queryName: "gordon biersch restaurant",
    //     website: "",
    //     address: "1530 Post Alley, Seattle, WA 98101",
    //     phoneNumber: "(206) 405-4205",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "Inspired by the Reinheitsgebot of 1516, the Gordon Biersch experience rests upon the foundations of purity, simplicity and precision. Our philosophy is most recognizable in our selection of authentic German lagers, each crafted on-site using only malted barley, hops, yeast and pure, filtered water. This same dedication extends to our kitchen, where our chefs create fresh dishes that perfectly balance comfort and excitement.",
    //     region: "downtown",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "Fremont Brewing Company",
        queryName: "fremont company",
        website: "https://www.fremontbrewing.com/",
        address: "1050 N 34th St, Seattle, WA 98103", 
          phoneNumber: "(206) 420-2407",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Fremont Brewing was born of our love for our home and history as well as the desire to prove that beer made with the finest local ingredients – organic when possible – is not the wave of the future but the doorway to beer's history. Starting a brewery in the midst of the Great Recession is clearly an act of passion. We invite you to come along with us and enjoy that passion … Because Beer Matters.",
        region: "fremont",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Outlander Brewery",
        queryName: "outlander",
        website: "https://outlanderbrewing.com/",
        address: "225 N 36th St, Seattle, WA 98103",
        phoneNumber: "(206) 486-4088",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We are a very small-scale brewery and pub specializing in foreign and unique beers and eats.  Our brewery is a 3.5 barrel system which we use to create hand-crafted, more often than not, specialty ales.  Our brewery is based around experimentation, so our taps change frequently.  We usually do not brew the same beer twice, but will do so if enough people ask.",
        region: "fremont",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Georgetown Brewing Company",
        queryName: "georgetown",
        website: "https://georgetownbeer.com/",
        address: "5200 Denver Ave S, Seattle, WA 98108",
        phoneNumber: "(206) 766-8055",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Manny asked me to write up a history of the brewery for the website. In general, I find history pieces really boring. It’s always the same kind of thing about how the founders loved beer so much, they decided to quit their boring insurance jobs where they couldn’t drink beer for a living, and dedicate their lives to brewing well crafted beers. First of all, everyone loves beer. Even if you don’t, you know someone that does. Second, everyone hates their boring jobs and wishes they could drink beer for work. Third, no one sets out to intentionally make bad beer, even at Strangebrew in Port Townsend. Instead, I wrote a really impassioned think piece about growlers, how the growth of our growler program mirrored the history of the company. It was really clever. Or brave. Or meta. I thought it was good. And I’m pretty sure I didn’t mention cats once. But Manny wanted something more along the lines about how he and Roger met over their love of ultimate frisbee (aka, beer drinking) and wanted to start a business together because they hated working for The Man and they actually wanted to open up a cat food company. Just kidding, they wanted to start a brewery. Literally: they loved beer, quit an insurance job (that was Roger, Manny may or may not have been employed at the time) and wanted to make really good beer. You know, boring.",
        region: "georgetown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Lowercase Brewing",
        queryName: "lowercase",
        website: "http://www.lowercasebrewing.com/",
        address: "6235 Airport Way S, Seattle, WA 98108",
        phoneNumber: "(206) 258-4987",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Our beer is currently distributed throughout Seattle and Tacoma on draft and at our Georgetown Taproom. We currently do not package our products.",
        region: "georgetown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Counterbalance Brewing Company",
        queryName: "counterbalance company",
        website: "http://counterbalancebeer.com/",
        address: "503B S Michigan St, Seattle, WA 98108",
        phoneNumber: "(206) 453-3615",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Counterbalance Brewing Description",
        region: "georgetown",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Lantern Brewing",
        queryName: "lantern",
        website: "https://www.lanternbrewing.com/",
        address: "938 N 95th St, Seattle, WA 98103",
        phoneNumber: "(206) 729-5350",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Lantern Brewing Description",
        region: "greenwood",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Flying Bike Cooperative Brewery",
        queryName: "flying bike cooperative",
        website: "https://www.flyingbike.coop/",
        address: "938 N 95th St, Seattle, WA 98103",
        phoneNumber: "(206) 729-5350",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Flying Bike is a democratically run, member-owned and operated cooperative in Seattle’s Greenwood neighborhood. We strive to make Flying Bike Cooperative Brewery membership and activities welcoming and accessible to all members of our diverse community.",
        region: "greenwood",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Naked City Brewery & Taphouse",
    //     queryName: "naked city",
    //     website: "",
    //     address: "8564 Greenwood Ave N, Seattle, WA 98103",
    //     phoneNumber: "(206) 838-6299",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "Naked City Brewery & Taphouse strives to carry on the rich tradition of the American public house, where great food and delicious beer set the table for community life. The brewpubs in Greenwood and Camano Island host a variety of cultural events each month. ",
    //     region: "greenwood",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "Cairn Brewing",
        queryName: "cairn",
        website: "http://cairnbrewing.com/",
        address: "7204 NE 175th St bldg a, Kenmore, WA 98028",
        phoneNumber: "(425) 949-5295",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Cairn Brewing Description",
        region: "kenmore",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "192 Brewing Company",
    //     queryName: "192",
    //     website: "http://192brewing.com/",
    //     address: "7324 NE 175th St F, Kenmore, WA 98028",
    //     phoneNumber: "(425) 424-2337",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "In 2006, a friend suggested we try home brewing, since we enjoy beer so much. That weekend, a friend and I brewed our first batch: a Pilsner style from a home brew kit; you pour two cans together, boil, and voila! Beer. It turned out so well, we brewed again! A month later – this time, partial grain. The third batch we tried with a full grain system. Approximately a year later in 2007, we decided that our friends were drinking so much of our beer that we could sustain a microbrewery and applied for a license. Another year passes by and we were informed that we could not operate a brewery as is: in a garage attached to a house. We then set out to build the brewery; a 192 square foot (12×16) shed in DW’s backyard. Originally named Trouble Brewing and threatened with lawsuit, we set out to come up with a new name. A friend suggested naming the brewery after the buildings square footage: 192 Brewing. It stuck. In Fall ’09, we finally received our official brewer’s license from the federal government. Just 2 months later, we attended our very first festival: Strange Brewfest in Port Townsend. Later that Spring, we had the honor of being the Hometown Brewery Representative for the Father’s Day Beer Festival at St. Edward State Park; upon arrival we were welcomed by the Mayor himself. Our first year of production, we produced just about 10 barrels of beer. Every year since then, our production has about quadrupled, as we continue to add new recipes to our lineup.",
    //     region: "kenmore",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "Chainline Brewing Company",
        queryName: "chainline",
        website: "http://www.chainlinebrew.com/",
        address: "503 6th St S, Kirkland, WA 98033",
        phoneNumber: "(425) 242-0923",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Inspired by the active outdoor lifestyle of the Pacific Northwest and situated alongside Kirkland's brand new bicycle corridor, our goal is to provide the Seattle area with the finest locally-made Northwest style Ales and Lagers. Look for us in local restaurants and craft beer establishments around Seattle, or check us out in person.",
        region: "kirkland",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Burke-Gilman Brewing Company",
        queryName: "burke gilman",
        website: "http://www.burkegilmanbrewing.com/",
        address: "3626 NE 45th St #102, Seattle, WA 98105",
        phoneNumber: "(206) 268-0220",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We are located right on the Burke-Gilman trail, have off-street parking, and ample bike parking. Our taproom has plenty of indoor and outdoor seating. We don't have a kitchen, but you're welcome to bring in food from one of our great neighboring restaurants or even your own picnic basket. ",
        region: "laurelhurst",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Figurehead Brewing Company",
        queryName: "figurehead",
        website: "https://www.figureheadbrewingcompany.com/",
        address: "4001 21st Ave W unit b, Seattle, WA 98199",
        phoneNumber: "(206) 492-7981",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "At Figurehead Brewing Company we have a passion for brewing great beer and a love for sharing our beer with others.  Our goal is to create a welcoming, non-pretentious place where our neighbors can learn about and enjoy simple, honest, straightforward, quality beer. Our beers are focused on showcasing all the ingredients that go into beer, especially malt and yeast which sometimes get overshadowed by aggressive hopping.  Don’t get us wrong, we love hops and we always have a couple IPAs on tap, but we also have lots of English and Belgian inspired ales.  All of our beers are well balanced and highly drinkable because we want to be your neighborhood brewery and we want to see you on a regular basis. Stop by our taproom located next to Fishermen's Terminal, have a pint while you check out our 7 barrel brewhouse, or grab a seat in our outdoor beergarden with views of the boats.",
        region: "magnolia",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Urban Family Brewing Company",
        queryName: "urban family",
        website: "http://www.urbanfamilybrewing.com/",
        address: "4441 26th Ave W, Seattle, WA 98199",
        phoneNumber: "(206) 946-8533",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We’re a small craft brewery located in the Magnolia neighborhood of Seattle. We have an eclectic focus on creating beer and strive constantly for innovation. You may not see the same beer every time you visit but we try to utilize fresh ingredients, complex yeast strains, and interesting hop profiles. We were founded on the principles of creating something as a family. Working together to make beer that represents who we are, and what we love. We may not all be related, but family is what you make it.",
        region: "magnolia",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Elliott Bay Brewing Co. (Lake City Location)",
        queryName: "elliot bay public",
        website: "https://www.elliottbaybrewing.com/",
        address: "12537 Lake City Way NE, Seattle, WA 98125",
        phoneNumber: "(206) 365-2337",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Elliott Bay Brewing Co. is a family-owned company of high-quality neighborhood brewpubs in communities throughout the Seattle metro area.  Our two owners, Todd Carden and Brent Norton, met in 1994 while working for the iconic Maritime Pacific Brewing Company in Ballard. They forged a friendship and explored their common goal and dream of owning and operating their own brewpub. In November 1996 they signed their first lease and began construction of a brewpub in the historic “Junction” of West Seattle.  They opened the Elliott Bay Brewery and Pub for business on July 11, 1997.",
        region: "north seattle",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Elliott Bay Brewing Co. (Burien Location)",
        queryName: "elliot bay public",
        website: "https://www.elliottbaybrewing.com/",
        address: "255 SW 152nd St, Burien, WA 98166",
        phoneNumber: "(206) 365-2337",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Elliott Bay Brewing Co. is a family-owned company of high-quality neighborhood brewpubs in communities throughout the Seattle metro area.  Our two owners, Todd Carden and Brent Norton, met in 1994 while working for the iconic Maritime Pacific Brewing Company in Ballard. They forged a friendship and explored their common goal and dream of owning and operating their own brewpub. In November 1996 they signed their first lease and began construction of a brewpub in the historic “Junction” of West Seattle.  They opened the Elliott Bay Brewery and Pub for business on July 11, 1997.",
        region: "???",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Elliott Bay Brewing Co. (West Seattle Location)",
        queryName: "elliot bay public",
        website: "https://www.elliottbaybrewing.com/",
        address: "4720 California Ave SW Seattle, WA 98116",
        phoneNumber: "(206) 365-2337",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Elliott Bay Brewing Co. is a family-owned company of high-quality neighborhood brewpubs in communities throughout the Seattle metro area.  Our two owners, Todd Carden and Brent Norton, met in 1994 while working for the iconic Maritime Pacific Brewing Company in Ballard. They forged a friendship and explored their common goal and dream of owning and operating their own brewpub. In November 1996 they signed their first lease and began construction of a brewpub in the historic “Junction” of West Seattle.  They opened the Elliott Bay Brewery and Pub for business on July 11, 1997.",
        region: "west seattle",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Hellbent Brewing Company",
        queryName: "hellbent",
        website: "http://www.hellbentbrewingcompany.com/",
        address: "12537 Lake City Way NE, Seattle, WA 98125",
        phoneNumber: "(206) 361-3707",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Hellbent started with three of us - Jack Guinn, Chris Giles and Randy Embernate - longtime friends and restaurant industry veterans. For us, starting Hellbent was the natural (and the coolest) thing to do, growing directly out of our experience and our love of beer. For years we home-brewed and toiled over our business plan. Then, we met Brian Young - award winning brewer, co-owner and fast friend - who turned out to be the missing link. Within a couple months, we were on the hunt for the perfect location. We wanted our brewery in Lake City, where Chris and Jack already called home, to contribute to the growing beer scene here. When we stepped into the old CM Hopkins building for the first time, we knew we had found our venue. Starting right away, we gutted it and began the transformation, building with reclaimed wood, steel, good humor, and a fair amount of muscle. Finally, after years of fierce determination and hard work (including seven months of construction), we opened our doors in the thick of microbrew country. We didn’t do this alone. We are humbled by the support and kindness of our friends and family that helped us along the way. So, to our beer-loving brothers and sisters of the Pacific Northwest, cheers and welcome to Hellbent!",
        region: "north seattle",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Monka Brewing Company",
        queryName: "monka",
        website: "https://www.facebook.com/shorelinebeer/",
        address: "17211 15th Ave NE Shoreline, WA 98155",
        phoneNumber: "(xxx) xxx-xxxx",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Monka Brewing Description",
        region: "shoreline",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Hemlock State Brewing Co.",
    //     queryName: "hemlock state",
    //     website: "",
    //     address: "18305 Sunnyside Ave N, Shoreline, WA 98133",
    //     phoneNumber: "(206) 919-7934",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description: "Hemlock State Brewing Description",
    //     region: "shoreline",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "Pyramid Brewing Company",
        queryName: "pyramid",
        website: "https://www.pyramidbrew.com/",
        address: "1201 First Avenue South Seattle, WA 98134",
        phoneNumber: "(206) 682-3377",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "In 1984, our founders were inspired to discover a new way of crafting beer, bringing together adventure, friends and bold new flavors and innovation. Their pioneering spirit gave the PAC Northwest the groundbreaking, highly hopped Pyramid Pale Ale—a beer well ahead of its time—as well as many others that have withstood the test of time. Today, we share this spirit of with you. Adventures, no matter the size, are planned and celebrated over great beers. Where will you find your Pyramid? The time to explore is now.",
        region: "pioneer square",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Rooftop Brewing Company",
        queryName: "rooftop",
        website: "http://rooftopbrewco.com/",
        address: "1220 W Nickerson St, Seattle, WA 98119",
        phoneNumber: "(206) 457-8598",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Rooftop Brewing Description",
        region: "queen anne",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Holy Mountain Brewing Company",
        queryName: "holy mountain",
        website: "https://www.facebook.com/HolyMountainBrewing/",
        address: "1421 Elliott Ave W, Seattle, WA 98119",
        phoneNumber: "(xxx) xxx-xxxx",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Rooftop Brewing Description",
        region: "queen anne",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Ravenna Brewing Company",
        queryName: "ravenna",
        website: "http://www.ravennabrewing.com/",
        address: "5408 26th Ave NE, Seattle, WA 98105",
        phoneNumber: "(206) 743-8450",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Ravenna Brewing Description",
        region: "ravenna",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Mac & Jack's Brewing",
        queryName: "mac and jacks",
        website: "https://www.macandjacks.com/",
        address: "17825 NE 65th St, Redmond, WA 98052",
        phoneNumber: "(425) 558-9697",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Brewery with beers made of ingredients from the Northwest, growler fills, tours & a retail store",
        region: "redmond",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Postdoc Brewing Company",
        queryName: "postdoc",
        website: "http://postdocbrewing.com/",
        address: "17625 NE 65th St #100, Redmond, WA 98052",
        phoneNumber: "(425) 658-4963",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We make a range of beers at Postdoc Brewing. You can expect a perfect Pacific Northwest lineup at our core, and we fill in the corners with sour and barrel aged beers. Every beer is made with a focus on delivering the best possible experience to the customer. Our taproom offers a relaxed environment, with blended natural woods and lots of reclaimed pieces throughout to create a warm, inviting location to enjoy our latest beverages. We are also kid and dog friendly - so bring them too.",
        region: "redmond",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Black Raven Brewing Company",
        queryName: "black raven",
        website: "http://www.blackravenbrewing.com/",
        address: "14679 NE 95th St, Redmond, WA 98052",
        phoneNumber: "(425) 881-3020",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "As beer lovers ourselves, our mission is simple; brew beer that we want to drink. So whether you’re enjoying one of our award-winning, year-round beers or trying one of our many unique seasonal beers, you will be without a doubt, drinking delicious beer. Inspiration for our tasty beer comes from a mix of old-world styles and northwest flavor, creating new and original (did we mention delicious) beers for all of Washington to enjoy.",
        region: "redmond",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Four Generals Brewing",
        queryName: "four generals",
        website: "http://www.fourgenerals.com/",
        address: "229 Wells Ave S, Renton, WA 98057",
        phoneNumber: "(425) 282-4360",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Four Generals Brewing Description",
        region: "renton",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Ghostfish Brewery",
        queryName: "ghostfish",
        website: "https://ghostfishbrewing.com/",
        address: "2942 1st Ave. S., Seattle, WA 98134",
        phoneNumber: "(206) 397-3898",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Ghostfish Brewing Company is a brewery with a mission: to elevate gluten-free beer to the forefront of craft brewing innovation.  All three of our founders are either gluten-intolerant themselves or have loved ones who are, so we are acutely aware of how the craft brewing revolution has left gluten-intolerant drinkers behind.  We believe fate has brought us together to help rectify that!",
        region: "sodo",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Schooner Brewing",
        queryName: "schooner",
        website: "https://www.schoonerbrewingseattle.com/",
        address: "3901 1st Ave S, Seattle, WA 98134",
        phoneNumber: "(206) 432-9734",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Schooner EXACT Description",
        region: "sodo",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Two Beers Brewing Company",
        queryName: "twobeers",
        website: "https://www.twobeersbrewery.com/",
        address: "4700 Ohio Ave S, Seattle, WA 98134",
        phoneNumber: "(206) 762-0490",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Founded in 2007 by Joel VandenBrink in a 140 square foot storage unit, Two Beers Brewing Co. has been brewing and distributing beer to the Pacific Northwest for over a decade. Dedicated to crafting delicious, creative beers with quality Northwest ingredients, Two Beers Brewing is distributed throughout Washington, Oregon, Alaska and Idaho. Visit The Woods tasting room in SoDO (4660 Ohio Ave S. 98134) for a full line up of draft and package product from Two Beers Brewing, Seattle Cider Company, and Sound Craft Seltzer Co.",
        region: "sodo",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Seapine Brewing Company",
        queryName: "seapine",
        website: "http://www.seapinebrewing.com/",
        address: "2959 Utah Ave S, Seattle, WA 98134",
        phoneNumber: "(206) 682-7985",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Seapine Brewing Company was founded in Seattle’s Industrial District in the year 2011. Form our inception the goal has been to bring the highest quality ales and lagers to the Pacific Northwest. The recognition of responsibility to continue and further Seattle’s brewing history is Seapine’s ethos. Our background in brewing science and our years of experience guide us everyday on the quest for perfection in every pint.",
        region: "sodo",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Dexter Brewhouse",
    //     queryName: "dexter",
    //     website: "",
    //     address: "803 Dexter Ave N, Seattle, WA 98109",
    //     phoneNumber: "(206) 403-1228",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "South Lake Union's newest and oldest brewpub. We take pride in providing a warm comfortable place in a newly developed and always changing neighborhood. With Mollusk Brewing beer, a full bar, and a pub food menu, we believe in great food and better beer! We are your second home to grab a bite and a drink or bring your group of friends to watch a game. We can accommodate company happy hour for groups as large as 140 and semi private seating for groups up to 40. ",
    //     region: "south lake union",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "Perihelion Brewery",
        queryName: "perihelion",
        website: "http://www.perihelion.beer/",
        address: "2800 16th Ave S, Seattle, WA 98144",
        phoneNumber: "(206) 200-3935",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Les McAuliffe has been brewing award-winning beer since 1998.  His passion for Belgian ales is at the center of his beer making.  We are serving up 12 beers, ales, ciders and mead on tap as well as mouthwatering savory servings perfectly paired with beer. Perihelion Brewery opened February 2016 at the crest of Beacon Hill, close to light rail",
        region: "south seattle",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Flycaster Brewing Company",
        queryName: "flycaster",
        website: "https://flycasterbrewing.com/",
        address: "12815 NE 124th St I, Kirkland, WA 98034",
        phoneNumber: "(206) 963-6626",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Fly fishing and microbrew: two passions that meld together beautifully. Whether swinging a fly or freshening a microbrew in the river, each brings up a requirement for the other. Today, I have infused the lure of a cool river and patience for the big catch into FlyCaster Brewing Co., transferring my dedicated techniques from one passion to the other.",
        region: "kirkland",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Maelstrom Brewing Company",
        queryName: "maelstrom",
        website: "http://www.maelstrombrewing.com/",
        address: "11014 120th Ave NE, Kirkland, WA 98033",
        phoneNumber: "(xxx) xxx-xxxx",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Scott developed an appreciation for craft beer and shiny metal objects while studying mechanical engineering at the University of Washington. At some point in time, he inherited a starter homebrew kit. Over the next nineteen years, simple extract brewing gradually evolved batch by batch into an all-grain nano brewery. With no room left in the garage, the car was forced to sleep outside.  When even that wasn't enough, Scott attended brewer's training at the American Brewer's Guild, and started down the road of opening a craft brewery in Kirkland.",
        region: "kirkland",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Floating Bridge Brewing",
        queryName: "floating bridge",
        website: "http://www.floatingbridgebrewing.com/",
        address: "722 NE 45th St, Seattle, WA 98105",
        phoneNumber: "(206) 466-4784",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Many long-time Seattleites will recognize our building as the one-time home of the esteemed Rainbow Tavern. Come drink a beer where legendary musicians like Soundgarden, the Ramones, Bo Diddley, George Thorogood, Heart, Jimmy Page, and more once played.",
        region: "university district",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Big Time Brewery & Alehouse",
        queryName: "big time",
        website: "http://bigtimebrewery.com/",
        address: "4133 University Way NE, Seattle, WA 98105",
        phoneNumber: "(206) 545-4509",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Big Time Brewery opened its doors in December 8th, 1988 and we have been brewing and serving craft beer ever since. We are Seattle's original brew pub. A classic American Alehouse located in an old yellow brick building with high ceilings and lots of stained wood. The pub has an antique bar, numerous historical brewery photographs, and lots of old beer signs and trays.",
        region: "university district",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "West Seattle Brewing Company",
        queryName: "west seattle",
        website: "https://westseattlebrewing.com/",
        address: "4415 Fauntleroy Way SW. Seattle, WA 98126",
        phoneNumber: "(206) 708-6627",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "West Seattle Brewing Company Description",
        region: "west seattle",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Métier Brewing Company",
        queryName: "metier",
        website: "https://metierbrewing.com/",
        address: "14125 NE 189th St Suite B, Woodinville, WA 98072",
        phoneNumber: "(425) 415-8466",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Metier Brewing Company is a family and bike-friendly destination in the heart of Woodinville, featuring distinctive award-winning beers, local cider, and our own in-house nitro brewed coffee. MBC is all about building community and offering a welcoming gathering space for families, friends, and those who appreciate well-crafted beer. Our spacious beer hall, cozy taproom, and ample parking spaces make for a great event location!",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    // {
    //     name: "Dirty Bucket Brewing Company",
    //     queryName: "dirty bucket",
    //     website: "",
    //     address: "A, 19151 144th Ave NE, Woodinville, WA 98072",
    //     phoneNumber: "(425) 949-5224",
    //     photoUrl: "http://via.placeholder.com/600x400",
    //     description:
    //         "Dirty Bucket Brewing Company started as exactly that: a dirty bucket.  Brewing in the garage and pondering the idea of creating a place where we can share our beers and passion for creating them sparked what's now an establishment built on hard work, determination and vision. After we took that leap of faith towards brewing as a profession, we knew we needed a name.  Holding true to our 'home brewing' roots, the name Dirty Bucket Brewing Company was suggested.  The more we thought about it, the more we realized there was no other name that could better describe our passion or history.  For us, no other name would accurately frame the concept represented in the old phrase, 'we all start somewhere.' ",
    //     region: "woodinville",
    //     latitude: "11111.11111",
    //     longitude: "11111.11111"
    // },
    {
        name: "20 Corners Brewing",
        queryName: "20 corners",
        website: "http://www.20cornersbrewing.com/",
        address: "14148 NE 190th St A, Woodinville, WA 98072",
        phoneNumber: "(425) 305-6620",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Our goal is simple: Make better beer that’s inspired by our outdoor lifestyle. A good beer should be on hand not only at the brass rail of the local tavern, but also in board bags, backpacks, fishing vests, and coolers at the tailgate. We do our part to help protect the world in which we love to play by imbibing responsibly, supporting environmental non-profits, recapturing water from the brewing process, sourcing renewable energy, repurposing spent grain into animal feed, and building energy-efficient breweries. Please do yours.",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Triplehorn Brewing Company",
        queryName: "triplehorn",
        website: "https://triplehornbrewing.com/",
        address: "19510 144th Ave NE #6, Woodinville, WA 98072",
        phoneNumber: "(425) 242-7979",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We are a Craft Brewery, and as such, we are not subject to mass production of watered down cereal. We take pride in each and every ingredient we put into our beer. We care, we live, and we share the spoils of our desires. When we are successful, our friends are among us to reap the benefit. As we grow, we want to grow prudently, with honor.",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Bosk Brew Works",
        queryName: "bosk",
        website: "https://boskbrewworks.com/",
        address: "14350 NE 193rd Pl bldg c, Woodinville, WA 98072",
        phoneNumber: "(425) 419-4782",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Bosk Brew Works Description",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Locust Cider & Brewing Co. (Woodinville Location)",
        queryName: "locust cider woodinville",
        website: "https://www.locustcider.com/home/",
        address: "19151 144th Avenue NE Unit B/C Woodinville, WA 98072",
        phoneNumber: "(206) 494-5968",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Locust Cider Description",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Locust Cider & Brewing Co. (Ballard Location)",
        queryName: "locust cider woodinville",
        website: "https://www.locustcider.com/home/",
        address: "5309 22nd Ave NW Suite D Seattle, WA 98107",
        phoneNumber: "(206) 494-5968",
        photoUrl: "http://via.placeholder.com/600x400",
        description: "Locust Cider Description",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
    {
        name: "Sumerian Brewing Company",
        queryName: "sumerian",
        website: "http://www.sumerianbrewingco.com/",
        address: "15510 Redmond-Woodinville Rd NE E110, Woodinville, WA 98072",
        phoneNumber: "(425) 486-5330",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "Sumerian's were the first brewers in histroy, dating back over 6,000 years ago.  We use the name in honor of the incredible length of time this world changin beverage has been around.",
        region: "woodinville",
        latitude: "11111.11111",
        longitude: "11111.11111"
    }
];

db.Brewery.remove({})
    .then(() => db.Brewery.collection.insertMany(brewerySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
