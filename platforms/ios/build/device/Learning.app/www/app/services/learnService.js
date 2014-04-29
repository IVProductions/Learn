Learn.factory('learnFactory', function() {
    var categories = [
        {
            "id": 0,
            "name": "Lydeffekter",
            "imageURL": "img/categories/sounds.jpg",
            "words": [
                {
                    "name": "au",
                    "imageURL": "img/sound_effects/blood.jpg"
                },
                {
                    "name": "bææ",
                    "imageURL": "img/sound_effects/ewe.jpg"
                },
                {
                    "name": "drrr",
                    "imageURL": "img/sound_effects/ring_school_bell.jpg"
                },
                {
                    "name": "gakk gakk",
                    "imageURL": "img/sound_effects/quack.jpg"
                },
                {
                    "name": "grr",
                    "imageURL": "img/sound_effects/English_bulldog.jpg"
                },
                {
                    "name": "kykeliky",
                    "imageURL": "img/sound_effects/chicken.jpg"
                },
                {
                    "name": "mjau",
                    "imageURL": "img/sound_effects/meow.jpg"
                },
                {
                    "name": "mø",
                    "imageURL": "img/sound_effects/moo.jpg"
                },
                {
                    "name": "nam-nam",
                    "imageURL": "img/sound_effects/lick.jpg"
                },
                {
                    "name": "oi",
                    "imageURL": "img/sound_effects/surprised.jpg"
                },
                {
                    "name": "tøff-tøff",
                    "imageURL": "img/sound_effects/train.jpg"
                },
                {
                    "name": "voff voff",
                    "imageURL": "img/sound_effects/woof.jpg"
                }
            ]
        },
        {
            "id": 1,
            "name": "Dyr",
            "imageURL": "img/categories/farm_animals.jpg",
            "words": [
                {
                    "name": "mark",
                    "imageURL": "img/animals/wiggle.jpg"
                },
                {
                    "name": "and",
                    "imageURL": "img/animals/duck.jpg"
                },
                {
                    "name": "apekatt",
                    "imageURL": "img/animals/baby_monkey.jpg"
                },
                {
                    "name": "bjørn",
                    "imageURL": "img/animals/brown_bear.jpg"
                },
                {
                    "name": "dyr",
                    "imageURL": "img/animals/animal.jpg"
                },
                {
                    "name": "ekorn",
                    "imageURL": "img/animals/squirrel.jpg"
                },
                {
                    "name": "elefant",
                    "imageURL": "img/animals/elephant.jpg"
                },
                {
                    "name": "elg",
                    "imageURL": "img/animals/moose.jpg"
                },
                {
                    "name": "esel",
                    "imageURL": "img/animals/donkey.jpg"
                },
                {
                    "name": "fisk",
                    "imageURL": "img/animals/clownfish.jpg"
                },
                {
                    "name": "flue",
                    "imageURL": "img/animals/flies.jpg"
                },
                {
                    "name": "frosk",
                    "imageURL": "img/animals/frog.jpg"
                },
                {
                    "name": "fugl",
                    "imageURL": "img/animals/bird.jpg"
                },
                {
                    "name": "gås",
                    "imageURL": "img/animals/goose.jpg"
                },
                {
                    "name": "gris",
                    "imageURL": "img/animals/pig.jpg"
                },
                {
                    "name": "hane",
                    "imageURL": "img/animals/rooster.jpg"
                },
                {
                    "name": "hest",
                    "imageURL": "img/animals/horse.jpg"
                },
                {
                    "name": "høne",
                    "imageURL": "img/animals/chicken.jpg"
                },
                {
                    "name": "hund",
                    "imageURL": "img/animals/beagle.jpg"
                },
                {
                    "name": "kanin",
                    "imageURL": "img/animals/rabbit.jpg"
                },
                {
                    "name": "katt",
                    "imageURL": "img/animals/cat.jpg"
                },
                {
                    "name": "kattunge",
                    "imageURL": "img/animals/kitten.jpg"
                },
                {
                    "name": "krokodille",
                    "imageURL": "img/animals/crocodile.jpg"
                },
                {
                    "name": "ku",
                    "imageURL": "img/animals/cow.jpg"
                },
                {
                    "name": "kylling",
                    "imageURL": "img/animals/chick.jpg"
                },
                {
                    "name": "lam",
                    "imageURL": "img/animals/lamb.jpg"
                },
                {
                    "name": "lekebamse",
                    "imageURL": "img/animals/Blush_Bear.jpg"
                },
                {
                    "name": "løve",
                    "imageURL": "img/animals/lion.jpg"
                },
                {
                    "name": "maur",
                    "imageURL": "img/animals/black_ant.jpg"
                },
                {
                    "name": "mus",
                    "imageURL": "img/animals/mouse.jpg"
                },
                {
                    "name": "mygg",
                    "imageURL": "img/animals/mosquito.jpg"
                },
                {
                    "name": "pingvin",
                    "imageURL": "img/animals/penguin.jpg"
                },
                {
                    "name": "ponni",
                    "imageURL": "img/animals/pony.jpg"
                },
                {
                    "name": "reinsdyr",
                    "imageURL": "img/animals/reindeer.jpg"
                },
                {
                    "name": "sau",
                    "imageURL": "img/animals/ewe.jpg"
                },
                {
                    "name": "sebra",
                    "imageURL": "img/animals/zebra.jpg"
                },
                {
                    "name": "sjiraff",
                    "imageURL": "img/animals/giraffe.jpg"
                },
                {
                    "name": "skilpadde",
                    "imageURL": "img/animals/sea_turtle.jpg"
                },
                {
                    "name": "sommerfugl",
                    "imageURL": "img/animals/butterfly.jpg"
                },
                {
                    "name": "tiger",
                    "imageURL": "img/animals/tiger.jpg"
                },
                {
                    "name": "ugle",
                    "imageURL": "img/animals/owl.jpg"
                },
                {
                    "name": "ulv",
                    "imageURL": "img/animals/wolf.jpg"
                },
                {
                    "name": "valp",
                    "imageURL": "img/animals/puppy.jpg"
                },
                {
                    "name": "veps",
                    "imageURL": "img/animals/wasp.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Kjøretøy",
            "imageURL": "img/categories/vehicles.jpg",
            "words": [
                {
                    "name": "akebrett",
                    "imageURL": "img/vehicles/sledding.jpg"
                },
                {
                    "name": "barnevogn",
                    "imageURL": "img/vehicles/baby_doll_stroller.jpg"
                },
                {
                    "name": "bil",
                    "imageURL": "img/vehicles/car.jpg"
                },
                {
                    "name": "brannbil",
                    "imageURL": "img/vehicles/fire_truck.jpg"
                },
                {
                    "name": "buss",
                    "imageURL": "img/vehicles/bus.jpg"
                },
                {
                    "name": "båt",
                    "imageURL": "img/vehicles/boat.jpg"
                },
                {
                    "name": "fly",
                    "imageURL": "img/vehicles/Blue_Angel_plane.jpg"
                },
                {
                    "name": "helikopter",
                    "imageURL": "img/vehicles/helicopter.jpg"
                },
                {
                    "name": "lastebil",
                    "imageURL": "img/vehicles/truck.jpg"
                },
                {
                    "name": "motorsykkel",
                    "imageURL": "img/vehicles/motorbike.jpg"
                },
                {
                    "name": "sykkel",
                    "imageURL": "img/vehicles/bicycle.jpg"
                },
                {
                    "name": "tog",
                    "imageURL": "img/vehicles/bullet_train.jpg"
                },
                {
                    "name": "traktor",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "trehjulssykkel",
                    "imageURL": "img/vehicles/tricycle.jpg"
                }
            ]
        },
        {
            "id": 3,
            "name": "Leker",
            "imageURL": "img/categories/toys.jpg",
            "words": [
                {
                    "name": "ball",
                    "imageURL": "img/toys/ball.jpg"
                },
                {
                    "name": "ballong",
                    "imageURL": "img/toys/balloon.jpg"
                },
                {
                    "name": "blyant",
                    "imageURL": "img/toys/pencil.jpg"
                },
                {
                    "name": "bok",
                    "imageURL": "img/toys/book.jpg"
                },
                {
                    "name": "klosser",
                    "imageURL": "img/toys/blocks.jpg"
                },
                {
                    "name": "dukke",
                    "imageURL": "img/toys/doll_baby.jpg"
                },
                {
                    "name": "lego",
                    "imageURL": "img/toys/Legos.jpg"
                },
                {
                    "name": "eventyr",
                    "imageURL": "img/toys/adventure.jpg"
                },
                {
                    "name": "fargeblyant",
                    "imageURL": "img/toys/colored_pencils.jpg"
                },
                {
                    "name": "presang",
                    "imageURL": "img/toys/gift.jpg"
                },
                {
                    "name": "kritt",
                    "imageURL": "img/toys/chalkboard.jpg"
                },
                {
                    "name": "leke",
                    "imageURL": "img/toys/toy.jpg"
                },
                {
                    "name": "lim",
                    "imageURL": "img/toys/glue.jpg"
                },
                {
                    "name": "penn",
                    "imageURL": "img/toys/pen.jpg"
                },
                {
                    "name": "plastilina",
                    "imageURL": "img/toys/plastilina.jpg"
                },
                {
                    "name": "puslespill",
                    "imageURL": "img/toys/puzzle.jpg"
                },
                {
                    "name": "spill",
                    "imageURL": "img/toys/game.jpg"
                },
                {
                    "name": "såpebobler",
                    "imageURL": "img/toys/bubbles.jpg"
                }
            ]
        },
        {
            "id": 4,
            "name": "Mat og drikke",
            "imageURL": "img/categories/apple_juice.jpg",
            "words": [
                {
                    "name": "brødskive",
                    "imageURL": "img/food/bread.jpg"
                },
                {
                    "name": "agurk",
                    "imageURL": "img/food/cucumber.jpg"
                },
                {
                    "name": "appelsin",
                    "imageURL": "img/food/orange.jpg"
                },
                {
                    "name": "banan",
                    "imageURL": "img/food/banana.jpg"
                },
                {
                    "name": "boller",
                    "imageURL": "img/food/cinnamon_bun.jpg"
                },
                {
                    "name": "bønner",
                    "imageURL": "img/food/baked_beans.jpg"
                },
                {
                    "name": "brød",
                    "imageURL": "img/food/bread1.jpg"
                },
                {
                    "name": "brus",
                    "imageURL": "img/food/orange_soda.jpg"
                },
                {
                    "name": "cola",
                    "imageURL": "img/food/Coke.jpg"
                },
                {
                    "name": "corn flakes",
                    "imageURL": "img/food/corn_flakes_cereal.jpg"
                },
                {
                    "name": "dessert",
                    "imageURL": "img/food/dessert.jpg"
                },
                {
                    "name": "drikke",
                    "imageURL": "img/food/drink1.jpg"
                },
                {
                    "name": "druer",
                    "imageURL": "img/food/grapes.jpg"
                },
                {
                    "name": "egg",
                    "imageURL": "img/food/egg.jpg"
                },
                {
                    "name": "eple",
                    "imageURL": "img/food/apple.jpg"
                },
                {
                    "name": "erter",
                    "imageURL": "img/food/peas.jpg"
                },
                {
                    "name": "fisk",
                    "imageURL": "img/food/salmon.jpg"
                },
                {
                    "name": "frokostblanding",
                    "imageURL": "img/food/cereal.jpg"
                },
                {
                    "name": "frukt",
                    "imageURL": "img/food/fruit.jpg"
                },
                {
                    "name": "godteri",
                    "imageURL": "img/food/candy.jpg"
                },
                {
                    "name": "grøt",
                    "imageURL": "img/food/porridge.jpg"
                },
                {
                    "name": "gulrot",
                    "imageURL": "img/food/carrot.jpg"
                },
                {
                    "name": "hamburger",
                    "imageURL": "img/food/hamburger.jpg"
                },
                {
                    "name": "is",
                    "imageURL": "img/food/sundae.jpg"
                },
                {
                    "name": "jordbær",
                    "imageURL": "img/food/strawberry.jpg"
                },
                {
                    "name": "juice",
                    "imageURL": "img/food/orange_juice.jpg"
                },
                {
                    "name": "kaffe",
                    "imageURL": "img/food/coffee.jpg"
                },
                {
                    "name": "kake",
                    "imageURL": "img/food/cake_candles.jpg"
                },
                {
                    "name": "kjeks",
                    "imageURL": "img/food/cookies.jpg"
                },
                {
                    "name": "kjøtt",
                    "imageURL": "img/food/meat.jpg"
                },
                {
                    "name": "kjøttkaker",
                    "imageURL": "img/food/meatballs.jpg"
                },
                {
                    "name": "knekkebrød",
                    "imageURL": "img/food/toaster_pastry.jpg"
                },
                {
                    "name": "kylling",
                    "imageURL": "img/food/chicken_drumstick.jpg"
                },
                {
                    "name": "leverpostei",
                    "imageURL": "img/food/liverwurst.jpg"
                },
                {
                    "name": "mat",
                    "imageURL": "img/food/food.jpg"
                },
                {
                    "name": "matpakke",
                    "imageURL": "img/food/lunch_box.jpg"
                },
                {
                    "name": "melk",
                    "imageURL": "img/food/milk.jpg"
                },
                {
                    "name": "melon",
                    "imageURL": "img/food/watermelon.jpg"
                },
                {
                    "name": "nøtter",
                    "imageURL": "img/food/nuts.jpg"
                },
                {
                    "name": "Nugatti",
                    "imageURL": "img/food/Nutella.jpg"
                },
                {
                    "name": "ost",
                    "imageURL": "img/food/Swiss_cheese.jpg"
                },
                {
                    "name": "pannekake",
                    "imageURL": "img/food/pancakes.jpg"
                },
                {
                    "name": "pasta",
                    "imageURL": "img/food/penne_pasta.jpg"
                },
                {
                    "name": "pizza",
                    "imageURL": "img/food/pizza.jpg"
                },
                {
                    "name": "pølser",
                    "imageURL": "img/food/hot_dog.jpg"
                },
                {
                    "name": "pommes frites",
                    "imageURL": "img/food/french_fries.jpg"
                },
                {
                    "name": "popcorn",
                    "imageURL": "img/food/popcorn.jpg"
                },
                {
                    "name": "poteter",
                    "imageURL": "img/food/potatoes.jpg"
                },
                {
                    "name": "potetgull",
                    "imageURL": "img/food/chips.jpg"
                },
                {
                    "name": "ris",
                    "imageURL": "img/food/rice.jpg"
                },
                {
                    "name": "ristet brød",
                    "imageURL": "img/food/put_in_toaster.jpg"
                },
                {
                    "name": "rosiner",
                    "imageURL": "img/food/raisins.jpg"
                },
                {
                    "name": "saft",
                    "imageURL": "img/food/drink.jpg"
                },
                {
                    "name": "salami",
                    "imageURL": "img/food/salami.jpg"
                },
                {
                    "name": "salt",
                    "imageURL": "img/food/salt.jpg"
                },
                {
                    "name": "saus",
                    "imageURL": "img/food/hot_sauce.jpg"
                },
                {
                    "name": "sjokolade",
                    "imageURL": "img/food/chocolate_bar.jpg"
                },
                {
                    "name": "smør",
                    "imageURL": "img/food/margarine.jpg"
                },
                {
                    "name": "spagetti",
                    "imageURL": "img/food/spaghetti_with_sauce.jpg"
                },
                {
                    "name": "sukkertøy",
                    "imageURL": "img/food/lollipops.jpg"
                },
                {
                    "name": "suppe",
                    "imageURL": "img/food/soup.jpg"
                },
                {
                    "name": "syltetøy",
                    "imageURL": "img/food/strawberry_jam.jpg"
                },
                {
                    "name": "te",
                    "imageURL": "img/food/tea.jpg"
                },
                {
                    "name": "tran",
                    "imageURL": "img/food/vegetable_oil.jpg"
                },
                {
                    "name": "tyggegummi",
                    "imageURL": "img/food/gum.jpg"
                },
                {
                    "name": "vafler",
                    "imageURL": "img/food/waffles.jpg"
                },
                {
                    "name": "vann",
                    "imageURL": "img/food/full.jpg"
                },
                {
                    "name": "yoghurt",
                    "imageURL": "img/food/yogurt.jpg"
                }
            ]
        },
        {
            "id": 5,
            "name": "Klær og tilbehør",
            "imageURL": "img/categories/clothes.jpg",
            "words": [
                {
                    "name": "belte",
                    "imageURL": "img/clothing/belt.jpg"
                },
                {
                    "name": "bleier",
                    "imageURL": "img/clothing/diaper.jpg"
                },
                {
                    "name": "bukse",
                    "imageURL": "img/clothing/jeans.jpg"
                },
                {
                    "name": "dress",
                    "imageURL": "img/clothing/suit.jpg"
                },
                {
                    "name": "genser",
                    "imageURL": "img/clothing/sweater.jpg"
                },
                {
                    "name": "glidelås",
                    "imageURL": "img/clothing/zipper.jpg"
                },
                {
                    "name": "halskjede",
                    "imageURL": "img/clothing/necklace.jpg"
                },
                {
                    "name": "hansker",
                    "imageURL": "img/clothing/gloves.jpg"
                },
                {
                    "name": "jakke",
                    "imageURL": "img/clothing/jacket.jpg"
                },
                {
                    "name": "joggesko",
                    "imageURL": "img/clothing/running_shoes.jpg"
                },
                {
                    "name": "kjole",
                    "imageURL": "img/clothing/dress.jpg"
                },
                {
                    "name": "knapper",
                    "imageURL": "img/clothing/buttons.jpg"
                },
                {
                    "name": "lue",
                    "imageURL": "img/clothing/earflap_hat.jpg"
                },
                {
                    "name": "pysjamas",
                    "imageURL": "img/clothing/nightgown.jpg"
                },
                {
                    "name": "regntøy",
                    "imageURL": "img/clothing/raincoat.jpg"
                },
                {
                    "name": "sandaler",
                    "imageURL": "img/clothing/sandals.jpg"
                },
                {
                    "name": "shorts",
                    "imageURL": "img/clothing/shorts.jpg"
                },
                {
                    "name": "skjerf",
                    "imageURL": "img/clothing/scarf.jpg"
                },
                {
                    "name": "skjorte",
                    "imageURL": "img/clothing/shirt.jpg"
                },
                {
                    "name": "sko",
                    "imageURL": "img/clothing/tied_shoes.jpg"
                },
                {
                    "name": "smekke",
                    "imageURL": "img/clothing/bib.jpg"
                },
                {
                    "name": "smokk",
                    "imageURL": "img/clothing/pacifier.jpg"
                },
                {
                    "name": "sokker",
                    "imageURL": "img/clothing/socks.jpg"
                },
                {
                    "name": "støvler",
                    "imageURL": "img/clothing/rain_boots.jpg"
                },
                {
                    "name": "strømpebukse",
                    "imageURL": "img/clothing/pantyhose.jpg"
                },
                {
                    "name": "strømper",
                    "imageURL": "img/clothing/stockings.jpg"
                },
                {
                    "name": "t-skjorte",
                    "imageURL": "img/clothing/T-shirt.jpg"
                },
                {
                    "name": "tøfler",
                    "imageURL": "img/clothing/slippers.jpg"
                },
                {
                    "name": "underbukse",
                    "imageURL": "img/clothing/underwear.jpg"
                },
                {
                    "name": "votter",
                    "imageURL": "img/clothing/mittens.jpg"
                }
            ]
        },
        {
            "id": 6,
            "name": "Kroppsdeler",
            "imageURL": "img/categories/human_body.jpg",
            "words": [
                {
                    "name": "ankel",
                    "imageURL": "img/body/ankle.jpg"
                },
                {
                    "name": "ansikt",
                    "imageURL": "img/body/face.jpg"
                },
                {
                    "name": "arm",
                    "imageURL": "img/body/arm.jpg"
                },
                {
                    "name": "bein",
                    "imageURL": "img/body/leg.jpg"
                },
                {
                    "name": "finger",
                    "imageURL": "img/body/finger.jpg"
                },
                {
                    "name": "fot",
                    "imageURL": "img/body/foot.jpg"
                },
                {
                    "name": "hake",
                    "imageURL": "img/body/chin.jpg"
                },
                {
                    "name": "hånd",
                    "imageURL": "img/body/hand.jpg"
                },
                {
                    "name": "hår",
                    "imageURL": "img/body/hair.jpg"
                },
                {
                    "name": "hode",
                    "imageURL": "img/body/head.jpg"
                },
                {
                    "name": "kinn",
                    "imageURL": "img/body/cheeks.jpg"
                },
                {
                    "name": "kne",
                    "imageURL": "img/body/knee.jpg"
                },
                {
                    "name": "lepper",
                    "imageURL": "img/body/lips.jpg"
                },
                {
                    "name": "mage",
                    "imageURL": "img/body/stomach.jpg"
                },
                {
                    "name": "munn",
                    "imageURL": "img/body/mouth.jpg"
                },
                {
                    "name": "navle",
                    "imageURL": "img/body/belly_button.jpg"
                },
                {
                    "name": "nese",
                    "imageURL": "img/body/nose.jpg"
                },
                {
                    "name": "øre",
                    "imageURL": "img/body/ear.jpg"
                },
                {
                    "name": "øye",
                    "imageURL": "img/body/eye.jpg"
                },
                {
                    "name": "pupp",
                    "imageURL": "img/body/breast.jpg"
                },
                {
                    "name": "rumpe",
                    "imageURL": "img/body/butt.jpg"
                },
                {
                    "name": "rygg",
                    "imageURL": "img/body/back.jpg"
                },
                {
                    "name": "skulder",
                    "imageURL": "img/body/shoulder.jpg"
                },
                {
                    "name": "tenner",
                    "imageURL": "img/body/teeth.jpg"
                },
                {
                    "name": "tiss",
                    "imageURL": "img/body/penis.jpg"
                },
                {
                    "name": "tunge",
                    "imageURL": "img/body/tongue.jpg"
                },
                {
                    "name": "tå",
                    "imageURL": "img/body/toenail.jpg"
                }
            ]
        },
        {
            "id": 7,
            "name": "Små gjenstander i huset",
            "imageURL": "img/categories/lamp.jpg",
            "words": [
                {
                    "name": "bilde",
                    "imageURL": "img/house_items/picture.jpg"
                },
                {
                    "name": "boks",
                    "imageURL": "img/house_items/box.jpg"
                },
                {
                    "name": "børste",
                    "imageURL": "img/house_items/hairbrush.jpg"
                },
                {
                    "name": "bøtte",
                    "imageURL": "img/house_items/bucket.jpg"
                },
                {
                    "name": "brett",
                    "imageURL": "img/house_items/sheet.jpg"
                },
                {
                    "name": "briller",
                    "imageURL": "img/house_items/glasses.jpg"
                },
                {
                    "name": "dopapir",
                    "imageURL": "img/house_items/toilet_paper.jpg"
                },
                {
                    "name": "dyne",
                    "imageURL": "img/house_items/blanket.jpg"
                },
                {
                    "name": "eske",
                    "imageURL": "img/house_items/container.jpg"
                },
                {
                    "name": "fat",
                    "imageURL": "img/house_items/paper_plate.jpg"
                },
                {
                    "name": "flaske",
                    "imageURL": "img/house_items/bottled_water.jpg"
                },
                {
                    "name": "gåbil",
                    "imageURL": "img/house_items/walker.jpg"
                },
                {
                    "name": "gaffel",
                    "imageURL": "img/house_items/fork.jpg"
                },
                {
                    "name": "glass",
                    "imageURL": "img/house_items/glass.jpg"
                },
                {
                    "name": "hammer",
                    "imageURL": "img/house_items/hammer.jpg"
                },
                {
                    "name": "håndkle",
                    "imageURL": "img/house_items/towel.jpg"
                },
                {
                    "name": "kam",
                    "imageURL": "img/house_items/comb.jpg"
                },
                {
                    "name": "kamera",
                    "imageURL": "img/house_items/camera.jpg"
                },
                {
                    "name": "kasse",
                    "imageURL": "img/house_items/case.jpg"
                },
                {
                    "name": "kjøkkenrull",
                    "imageURL": "img/house_items/paper_towels.jpg"
                },
                {
                    "name": "klokke",
                    "imageURL": "img/house_items/time.jpg"
                },
                {
                    "name": "kniv",
                    "imageURL": "img/house_items/knife.jpg"
                },
                {
                    "name": "kopp",
                    "imageURL": "img/house_items/cup.jpg"
                },
                {
                    "name": "kost",
                    "imageURL": "img/house_items/sweep.jpg"
                },
                {
                    "name": "krukke",
                    "imageURL": "img/house_items/urn.jpg"
                },
                {
                    "name": "krus",
                    "imageURL": "img/house_items/mug.jpg"
                },
                {
                    "name": "lampe",
                    "imageURL": "img/house_items/lamp.jpg"
                },
                {
                    "name": "lommebok",
                    "imageURL": "img/house_items/wallet.jpg"
                },
                {
                    "name": "lys",
                    "imageURL": "img/house_items/turn_on.jpg"
                },
                {
                    "name": "medisin",
                    "imageURL": "img/house_items/medicine.jpg"
                },
                {
                    "name": "nøkler",
                    "imageURL": "img/house_items/set_of_keys.jpg"
                },
                {
                    "name": "papir",
                    "imageURL": "img/house_items/paper.jpg"
                },
                {
                    "name": "penger",
                    "imageURL": "img/house_items/money.jpg"
                },
                {
                    "name": "plante",
                    "imageURL": "img/house_items/plant.jpg"
                },
                {
                    "name": "pute",
                    "imageURL": "img/house_items/pillow.jpg"
                },
                {
                    "name": "radio",
                    "imageURL": "img/house_items/radio.jpg"
                },
                {
                    "name": "saks",
                    "imageURL": "img/house_items/scissors.jpg"
                },
                {
                    "name": "såpe",
                    "imageURL": "img/house_items/soap_bar.jpg"
                },
                {
                    "name": "sekk",
                    "imageURL": "img/house_items/backpack.jpg"
                },
                {
                    "name": "serviett",
                    "imageURL": "img/house_items/napkin.jpg"
                },
                {
                    "name": "skål",
                    "imageURL": "img/house_items/bowl.jpg"
                },
                {
                    "name": "skje",
                    "imageURL": "img/house_items/spoon.jpg"
                },
                {
                    "name": "søppel",
                    "imageURL": "img/house_items/trash_bag.jpg"
                },
                {
                    "name": "søppelbøtte",
                    "imageURL": "img/house_items/trash_can.jpg"
                },
                {
                    "name": "støvsuger",
                    "imageURL": "img/house_items/vacuum_cleaner.jpg"
                },
                {
                    "name": "tallerken",
                    "imageURL": "img/house_items/Styrofoam_plate.jpg"
                },
                {
                    "name": "tannbørste",
                    "imageURL": "img/house_items/toothbrush.jpg"
                },
                {
                    "name": "telefon",
                    "imageURL": "img/house_items/cordless_phone.jpg"
                },
                {
                    "name": "teppe",
                    "imageURL": "img/house_items/red_carpet.jpg"
                },
                {
                    "name": "veske",
                    "imageURL": "img/house_items/purse.jpg"
                }
            ]
        },
        {
            "id": 8,
            "name": "Rom og møbler",
            "imageURL": "img/categories/furniture.jpg",
            "words": [
                {
                    "name": "bad",
                    "imageURL": "img/room/public_bathroom.jpg"
                },
                {
                    "name": "badekar",
                    "imageURL": "img/room/bathroom.jpg"
                },
                {
                    "name": "balkong",
                    "imageURL": "img/room/balcony.jpg"
                },
                {
                    "name": "barneseng",
                    "imageURL": "img/room/crib.jpg"
                },
                {
                    "name": "barnestol",
                    "imageURL": "img/room/high_chair.jpg"
                },
                {
                    "name": "bord",
                    "imageURL": "img/room/table.jpg"
                },
                {
                    "name": "do",
                    "imageURL": "img/room/use_toilet.jpg"
                },
                {
                    "name": "dør",
                    "imageURL": "img/room/open_door.jpg"
                },
                {
                    "name": "dusj",
                    "imageURL": "img/room/shower.jpg"
                },
                {
                    "name": "garasje",
                    "imageURL": "img/room/garage.jpg"
                },
                {
                    "name": "gyngestol",
                    "imageURL": "img/room/rocking_chari.jpg"
                },
                {
                    "name": "kjeller",
                    "imageURL": "img/room/basement.jpg"
                },
                {
                    "name": "kjøkken",
                    "imageURL": "img/room/kitchen.jpg"
                },
                {
                    "name": "kjøleskap",
                    "imageURL": "img/room/refrigerator.jpg"
                },
                {
                    "name": "komfyr",
                    "imageURL": "img/room/heat.jpg"
                },
                {
                    "name": "lekegrind",
                    "imageURL": "img/room/sand_fence.jpg"
                },
                {
                    "name": "ovn",
                    "imageURL": "img/room/oven.jpg"
                },
                {
                    "name": "PC",
                    "imageURL": "img/room/computer.jpg"
                },
                {
                    "name": "potte",
                    "imageURL": "img/room/pot.jpg"
                },
                {
                    "name": "rom",
                    "imageURL": "img/room/empty_room.jpg"
                },
                {
                    "name": "seng",
                    "imageURL": "img/room/bed.jpg"
                },
                {
                    "name": "skap",
                    "imageURL": "img/room/closet.jpg"
                },
                {
                    "name": "skuff",
                    "imageURL": "img/room/drawer.jpg"
                },
                {
                    "name": "sofa",
                    "imageURL": "img/room/chair.jpg"
                },
                {
                    "name": "soverom",
                    "imageURL": "img/room/bedroom.jpg"
                },
                {
                    "name": "stol",
                    "imageURL": "img/room/chair.jpg" 
                },
                {
                    "name": "stue",
                    "imageURL": "img/room/living_room.jpg"
                },
                {
                    "name": "terrasse",
                    "imageURL": "img/room/balcony.jpg"
                },
                {
                    "name": "tørketrommel",
                    "imageURL": "img/room/dryer.jpg"
                },
                {
                    "name": "trapper",
                    "imageURL": "img/room/step_up.jpg"
                },
                {
                    "name": "TV",
                    "imageURL": "img/room/flat_screen_television.jpg"
                },
                {
                    "name": "vask",
                    "imageURL": "img/room/bathroom_sink.jpg"
                },
                {
                    "name": "vaskemaskin",
                    "imageURL": "img/room/wash_clothes.jpg"
                },
                {
                    "name": "vindu",
                    "imageURL": "img/room/window.jpg"
                }
            ]
        },
        {
            "id": 9,
            "name": "Ting utendørs",
            "imageURL": "img/categories/outdoors.jpg",
            "words": [
                {
                    "name": "badebasseng",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bakgård",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "blomst",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fjell",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "flagg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fortau",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gress",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gressklipper",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "himmel",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "huske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kjelke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "måne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "pinne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "regn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sandkasse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sklie",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skyer",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "snø",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "snømann",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sol",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "spade",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "steiner",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stige",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stjerner",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tak",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "trampoline",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vann",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vannslange",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vei",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vind",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 10,
            "name": "Steder å dra til",
            "imageURL": "img/categories/playground.jpg",
            "words": [
                {
                    "name": "bensinstasjon",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bondegård",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "butikk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "byen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "campingplass",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dyrehage",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fest",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hage",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hjem",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hus",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "jobb",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kino",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kirke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "landet",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lekeplass",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "park",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sirkus",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skogen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "strand",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "strand",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "svømmehall",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ut",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 11,
            "name": "Mennesker",
            "imageURL": "img/categories/doctor.jpg",
            "words": [
                {
                    "name": "baby",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "barn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "barnets navn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "barnevaktens navn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bestefar",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bestemor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bonde",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "brannmann",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bror",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "cowboy",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dame",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "doktor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "farfar",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "farmor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "folk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gutt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "helsesøster",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "jente",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klovn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lærer",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mamma",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mann",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mennesker",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "morfar",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mormor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "navn på kjæledyr",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oldefar",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oldemor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "onkel",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "pappa",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "politi",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "postbud",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søster",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tante",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "venn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "venninne",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 12,
            "name": "Leker og rutiner",
            "imageURL": "img/categories/bathe.jpg",
            "words": [
                {
                    "name": "bade",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "frokost",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gå på do",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "god natt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ha det",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hallo",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "handle",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hei",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hysj",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ikke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ja",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "jo",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klappe kake",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kveldsmat",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lunsj",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "middag",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "nei",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ringe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "snurre rundt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sovetid",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sååå stor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "takk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vær så snill",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vent",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vil",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 13,
            "name": "Verb",
            "imageURL": "img/categories/jump.jpg",
            "words": [
                {
                    "name": "jobbe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bite",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "blåse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bråke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bygge",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bære",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "danse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dele",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "drikke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dytte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "elske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fange",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "falle",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "finne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "forte seg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "få",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gi",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gjemme",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gjøre seg ferdig",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gli",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gråte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ha",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hate",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "helle",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hente",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hjelpe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "holde",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "holde øye med",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hoppe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "huske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "høre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "høre etter",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "følge etter",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kaste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kile",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kjøpe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kjøre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klappe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klatre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klemme",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kle på",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "koste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kysse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lage mat",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "late som",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "putte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "legge",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "leke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lese",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "like",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lukke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "løpe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "male",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mate",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "miste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "reparere",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "passe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "plaske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "prøve",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "puste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ri",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "riste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "rive av",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "rydde",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "røre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "se",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "se på",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sette",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "si",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sitte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skjære",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skli",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skrive",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skynde",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skynde seg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "slikke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "slutte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "slå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "smake",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "smile",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "snakke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sove",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sparke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "spille",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "spise",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stikke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stoppe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skli",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "synge",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "svømme",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søle",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ta",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tegne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tenke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "treffe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dra",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tørke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vaske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vente",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "slå seg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vise",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "velte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "være glad i",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "våkne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ødelegge",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ønske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "åpne",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 14,
            "name": "Beskrivende ord",
            "imageURL": "img/categories/describe.jpg",
            "words": [
                {
                    "name": "bedre",
                    "imageURL": "img/describe/better.jpg"
                },
                {
                    "name": "blå",
                    "imageURL": "img/describe/blue.jpg"
                },
                {
                    "name": "bløt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "borte",
                    "imageURL": "img/describe/good.jpg"
                },
                {
                    "name": "bra",
                    "imageURL": "img/describe/good.jpg"
                },
                {
                    "name": "bråkete",
                    "imageURL": "img/describe/noise.jpg"
                },
                {
                    "name": "brun",
                    "imageURL": "img/describe/brown.jpg"
                },
                {
                    "name": "dårlig",
                    "imageURL": "img/describe/bad.jpg"
                },
                {
                    "name": "ekkelt",
                    "imageURL": "img/describe/spoiled.jpg"
                },
                {
                    "name": "fin",
                    "imageURL": "img/describe/beautiful.jpg"
                },
                {
                    "name": "forsiktig",
                    "imageURL": "img/describe/protect.jpg"
                },
                {
                    "name": "først",
                    "imageURL": "img/describe/first.jpg"
                },
                {
                    "name": "fort",
                    "imageURL": "img/describe/fast.jpg"
                },
                {
                    "name": "frekk",
                    "imageURL": "img/describe/rude.jpg"
                },
                {
                    "name": "full",
                    "imageURL": "img/describe/full.jpg"
                },
                {
                    "name": "gammel",
                    "imageURL": "img/describe/old.jpg"
                },
                {
                    "name": "glad",
                    "imageURL": "img/describe/excited.jpg"
                },
                {
                    "name": "god",
                    "imageURL": "img/describe/tastes_good.jpg"
                },
                {
                    "name": "grønn",
                    "imageURL": "img/describe/green.jpg"
                },
                {
                    "name": "gul",
                    "imageURL": "img/describe/yellow.jpg"
                },
                {
                    "name": "hard",
                    "imageURL": "img/describe/hard.jpg"
                },
                {
                    "name": "høy",
                    "imageURL": "img/describe/tall.jpg"
                },
                {
                    "name": "hvit",
                    "imageURL": "img/describe/white.jpg"
                },
                {
                    "name": "kald",
                    "imageURL": "img/describe/cold.jpg"
                },
                {
                    "name": "klissete",
                    "imageURL": "img/describe/sticky.jpg"
                },
                {
                    "name": "lang",
                    "imageURL": "img/describe/long.jpg"
                },
                {
                    "name": "lei seg",
                    "imageURL": "img/describe/cry.jpg"
                },
                {
                    "name": "liten",
                    "imageURL": "img/describe/small.jpg"
                },
                {
                    "name": "mørkt",
                    "imageURL": "img/describe/dark.jpg"
                },
                {
                    "name": "ny",
                    "imageURL": "img/describe/new.jpg"
                },
                {
                    "name": "ødelagt",
                    "imageURL": "img/describe/broken.jpg"
                },
                {
                    "name": "oransje",
                    "imageURL": "img/describe/orange.jpg"
                },
                {
                    "name": "pen",
                    "imageURL": "img/describe/beautiful.jpg"
                },
                {
                    "name": "rar",
                    "imageURL": "img/describe/crazy.jpg"
                },
                {
                    "name": "redd",
                    "imageURL": "img/describe/scared.jpg"
                },
                {
                    "name": "rød",
                    "imageURL": "img/describe/red.jpg"
                },
                {
                    "name": "sen",
                    "imageURL": "img/describe/late.jpg"
                },
                {
                    "name": "sint",
                    "imageURL": "img/describe/angry.jpg"
                },
                {
                    "name": "sist",
                    "imageURL": "img/describe/last.jpg"
                },
                {
                    "name": "sitter fast",
                    "imageURL": "img/describe/door_stuck.jpg"
                },
                {
                    "name": "skitten",
                    "imageURL": "img/describe/dirty.jpg"
                },
                {
                    "name": "skjønn",
                    "imageURL": "img/describe/beautiful.jpg"
                },
                {
                    "name": "slem",
                    "imageURL": "img/describe/naughty.jpg"
                },
                {
                    "name": "snill",
                    "imageURL": "img/describe/care.jpg"
                },
                {
                    "name": "søt",
                    "imageURL": "img/describe/sweet.jpg"
                },
                {
                    "name": "søvnig",
                    "imageURL": "img/describe/tired.jpg"
                },
                {
                    "name": "stakkars",
                    "imageURL": "img/describe/hurt.jpg"
                },
                {
                    "name": "stille",
                    "imageURL": "img/describe/quiet.jpg"
                },
                {
                    "name": "stor",
                    "imageURL": "img/describe/big.jpg"
                },
                {
                    "name": "sulten",
                    "imageURL": "img/describe/hungry.jpg"
                },
                {
                    "name": "sur",
                    "imageURL": "img/describe/grumpy.jpg"
                },
                {
                    "name": "svart",
                    "imageURL": "img/describe/black.jpg"
                },
                {
                    "name": "syk",
                    "imageURL": "img/describe/fever.jpg"
                },
                {
                    "name": "tom",
                    "imageURL": "img/describe/empty.jpg"
                },
                {
                    "name": "tørr",
                    "imageURL": "img/describe/dry_hair.jpg"
                },
                {
                    "name": "tørst",
                    "imageURL": "img/describe/thirsty.jpg"
                },
                {
                    "name": "trøtt",
                    "imageURL": "img/describe/tired.jpg"
                },
                {
                    "name": "tung",
                    "imageURL": "img/describe/hard2.jpg"
                },
                {
                    "name": "våken",
                    "imageURL": "img/describe/awake.jpg"
                },
                {
                    "name": "varm",
                    "imageURL": "img/describe/warm.jpg"
                },
                {
                    "name": "våt",
                    "imageURL": "img/describe/wet_hands.jpg"
                },
                {
                    "name": "vondt",
                    "imageURL": "img/describe/hurt2.jpg"
                }
            ]
        },
        {
            "id": 15,
            "name": "Ord om tid",
            "imageURL": "img/categories/today.jpg",
            "words": [
                {
                    "name": "dag",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "etter",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ettermiddag",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "etterpå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "før",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "formiddag",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i dag",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i går",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i kveld",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i morgen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kveld",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "morgen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "nå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "natt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "senere",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tid",
                    "imageURL": "res/img/animals/cat.png"
                }
            ]
        },
        {
            "id": 16,
            "name": "Pronomen",
            "imageURL": "img/categories/pronouns.jpg",
            "words": [
                {
                    "name": "de",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "deg",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "deg selv",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dem",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "den",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "denne",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dere",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "deres",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "det",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dette",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "din",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "disse",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "du",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ham",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "han",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hans",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "henne",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hennes",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hun",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hverandre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "jeg",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "man",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "meg",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "meg selv",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "min",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "oss",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "seg",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "seg selv",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sin",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "vår",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "vi",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 17,
            "name": "Spørreord",
            "imageURL": "img/categories/ask.jpg",
            "words": [
                {
                    "name": "hva",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "hvem",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "hvilken",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "hvor",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "hvordan",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "hvorfor",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "når",
                    "imageURL": "img/question/question.jpg"
                }
            ]
        },
        {
            "id": 18,
            "name": "Preposisjoner og stedsangivelser",
            "imageURL": "img/categories/behind.jpg",
            "words": [
                {
                    "name": "av",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "bak",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "bort",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "borte",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "der",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "for",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "foran",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fra",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "frem",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gjennom",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "her",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hit",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hjem",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hjemme",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hos",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "i",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "i stedet for",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "inn",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "inne",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "inni",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "med",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mot",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ned",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nede",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nedi",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "om",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "opp",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "oppå",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "oppe",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "oppi",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "over",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "på",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "til",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tilbake",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "under",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ut",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ute",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "utenfor",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "utenpå",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ved siden av",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "vekk",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 19,
            "name": "Mengdeord",
            "imageURL": "img/categories/few.jpg",
            "words": [
                {
                    "name": "alle",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "alt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "andre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "den",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "det",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ei",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "en",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "en annen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "et",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hver",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hvert",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ikke",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ingen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ingenting",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "litt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mange",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mer",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mye",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "noe",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "noen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "også",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "samme",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 20,
            "name": "Hjelpeverb",
            "imageURL": "img/categories/talk.jpg",
            "words": [
                {
                    "name": "bli",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "bør",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "burde",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "er",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "få",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gjør",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gjorde",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gjøre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ha",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hadde",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "har",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kan",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kunne",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "la",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "må",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "måtte",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skal",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skulle",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "være",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "var",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "vil",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ville",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 21,
            "name": "Bindeord",
            "imageURL": "img/categories/talk.jpg",
            "words": [
                {
                    "name": "at",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "eller",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "for",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fordi",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hvis",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "men",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "og",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "så",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "som",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        }
    ]
    return {categories:categories};
})