const optionList = [
    {name: "Cat", tags: ["feline", "has 4 paws", "domestic", "rather small", "of any color"]},
    {name: "Lion", tags: ["feline", "has 4 paws", "wild", "rather big", "yellow / orange", "males have mane"]},
    {name: "Tiger", tags: ["feline", "has 4 paws", "wild", "rather big", "has stripes"]},
    {name: "Panther", tags: ["feline", "has 4 paws", "wild", "rather big", "black"]},
    {name: "Cougar", tags: ["feline", "has 4 paws", "wild", "rather big", "yellow / orange"]},
    {name: "Ocelot", tags: ["feline", "has 4 paws", "wild", "rather big", "has spots"]},

    {name: "Dog", tags: ["canine", "has 4 paws", "domestic", "rather small", "of any color"]},
    {name: "Wolf", tags: ["canine", "has 4 paws", "wild", "of average size", "mostly gray"]},
    {name: "Coyote", tags: ["canine", "has 4 paws", "wild", "of average size", "light gray"]},
    {name: "Bush dog", tags: ["canine", "has 4 paws", "wild", "of average size", "brown"]},
    {name: "Fox", tags: ["canine", "has 4 paws", "wild", "of average size", "red / orange"]},
    {name: "Arctic fox", tags: ["canine", "has 4 paws", "wild", "of average size", "white"]},

    {name: "Brown bear", tags: ["ursine", "has 4 paws", "wild", "rather big", "brown"]},
    {name: "Polar bear", tags: ["ursine", "has 4 paws", "wild", "rather big", "white"]},
    {name: "Asian black bear", tags: ["ursine", "has 4 paws", "wild", "rather big", "brown", "asian"]},
    {name: "Sun bear", tags: ["ursine", "has 4 paws", "wild", "rather big", "brown", "sun"]},
    {name: "Sloth bear", tags: ["ursine", "has 4 paws", "wild", "rather big", "white", "indian"]},
    {name: "Giant panda", tags: ["ursine", "has 4 paws", "wild", "rather big", "white", "PANDA?!!"]},

    {name: "Gazelle", tags:         ["even-toed ungulates", "has 4 paws", "wild", "of average size", "reddish-brown", "has corns"]},
    {name: "Camel", tags:           ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "has humps"]},
    {name: "Hippopotamus", tags:    ["even-toed ungulates", "has 4 paws", "wild", "rather big", "gray / black", "FAT", "loves water"]},
    {name: "European bison", tags:  ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "european"]},
    {name: "American bison", tags:  ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "american"]},
    {name: "African buffalo", tags: ["even-toed ungulates", "has 4 paws", "wild", "rather big", "black / dark brown", "african"]},

    {name: "Rhinoceros",    tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "gray", "has 1 corn"]},
    {name: "Tapir",         tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "dark brown", "has proboscis"]},
    {name: "Zebra",         tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "black&white", "has stripes"]},
    {name: "Mule",          tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "of average size", "mix of donkey and horse", "can carry a lot"]},
    {name: "Donkey",        tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "of average size", "gray", "was in Shrek"]},
    {name: "Horse",         tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "rather big", "of any color", "medieval transport"]},

    // with superpowers
    {name: "Invisible Cat", tags: ["feline", "has 4 paws", "domestic", "rather small", "of any color", "invisible"]},
    {name: "Invisible Lion",tags: ["feline", "has 4 paws", "wild", "rather big", "yellow / orange", "males have mane", "invisible"]},
    {name: "Invisible Tiger", tags: ["feline", "has 4 paws", "wild", "rather big", "has stripes", "invisible"]},
    {name: "Invisible Panther", tags: ["feline", "has 4 paws", "wild", "rather big", "black", "invisible"]},
    {name: "Invisible Cougar", tags: ["feline", "has 4 paws", "wild", "rather big", "yellow / orange", "invisible"]},
    {name: "Invisible Ocelot", tags: ["feline", "has 4 paws", "wild", "rather big", "has spots", "invisible"]},

    {name: "Invisible Dog", tags: ["canine", "has 4 paws", "domestic", "rather small", "of any color", "invisible"]},
    {name: "Invisible Wolf", tags: ["canine", "has 4 paws", "wild", "of average size", "mostly gray", "invisible"]},
    {name: "Invisible Coyote", tags: ["canine", "has 4 paws", "wild", "of average size", "light gray", "invisible"]},
    {name: "Invisible Bush dog", tags: ["canine", "has 4 paws", "wild", "of average size", "brown", "invisible"]},
    {name: "Invisible Fox", tags: ["canine", "has 4 paws", "wild", "of average size", "red / orange", "invisible"]},
    {name: "Invisible Arctic fox", tags: ["canine", "has 4 paws", "wild", "of average size", "white", "invisible"]},

    {name: "Invisible Brown bear", tags:          ["ursine", "has 4 paws", "wild", "rather big",  "brown", "invisible"]},
    {name: "Invisible Polar bear", tags:          ["ursine", "has 4 paws", "wild", "rather big",  "white", "invisible"]},
    {name: "Invisible Asian black bear", tags:    ["ursine", "has 4 paws", "wild", "rather big",  "brown", "asian", "invisible"]},
    {name: "Invisible Sun bear", tags:            ["ursine", "has 4 paws", "wild", "rather big",  "brown", "sun", "invisible"]},
    {name: "Invisible Sloth bear", tags:          ["ursine", "has 4 paws", "wild", "rather big",  "white", "indian", "invisible"]},
    {name: "Invisible Giant panda", tags:         ["ursine", "has 4 paws", "wild", "rather big",  "white", "PANDA?!!", "invisible"]},

    {name: "Invisible Gazelle", tags:         ["even-toed ungulates", "has 4 paws", "wild", "of average size", "reddish-brown", "has corns", "invisible"]},
    {name: "Invisible Camel", tags:           ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "has humps", "invisible"]},
    {name: "Invisible Hippopotamus", tags:    ["even-toed ungulates", "has 4 paws", "wild", "rather big", "gray / black", "FAT", "loves water", "invisible"]},
    {name: "Invisible European bison", tags:  ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "european", "invisible"]},
    {name: "Invisible American bison", tags:  ["even-toed ungulates", "has 4 paws", "wild", "rather big", "brown", "american", "invisible"]},
    {name: "Invisible African buffalo", tags: ["even-toed ungulates", "has 4 paws", "wild", "rather big", "black / dark brown", "african", "invisible"]},

    {name: "Invisible Rhinoceros",    tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "gray", "has 1 corn", "invisible"]},
    {name: "Invisible Tapir",         tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "dark brown", "has proboscis", "invisible"]},
    {name: "Invisible Zebra",         tags: ["odd-toed ungulates", "has 4 paws", "wild", "rather big", "black&white", "has stripes", "invisible"]},
    {name: "Invisible Mule",          tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "of average size", "mix of donkey and horse", "can carry a lot", "invisible"]},
    {name: "Invisible Donkey",        tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "of average size", "gray", "was in Shrek", "invisible"]},
    {name: "Invisible Horse",         tags: ["odd-toed ungulates", "has 4 paws", "domesticated", "rather big", "of any color", "medieval transport", "invisible"]},

];

const tags = [...new Set(optionList.map(option => option.tags).reduce((prev, cur) => prev.concat(cur), [])).values()];

export {optionList, tags}