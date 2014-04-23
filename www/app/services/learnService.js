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
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "boks",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "børste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bøtte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "brett",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "briller",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dopapir",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dyne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "eske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fat",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "flaske",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gåbil",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gaffel",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "glass",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hammer",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "håndkle",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kam",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kamera",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kasse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kjøkkenrull",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klokke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kniv",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kopp",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kost",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "krukke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "krus",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lampe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lommebok",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lys",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "medisin",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "nøkler",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "papir",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "penger",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "plante",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "pute",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "radio",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "saks",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "såpe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sekk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "serviett",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skål",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skje",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søppel",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søppelbøtte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "støvsuger",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tallerken",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tannbørste",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "telefon",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "teppe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "veske",
                    "imageURL": "res/img/animals/cat.png"
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
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "blå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bløt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "borte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bra",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bråkete",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "brun",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dårlig",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ekkelt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fin",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "forsiktig",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "først",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fort",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "frekk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "full",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gammel",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "glad",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "god",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "grønn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gul",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hard",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "høy",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hvit",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "kald",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "klissete",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lang",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "lei seg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "liten",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mørkt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ny",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ødelagt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oransje",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "pen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "rar",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "redd",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "rød",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sint",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sist",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sitter fast",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skitten",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skjønn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "slem",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "snill",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "søvnig",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stakkars",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stille",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "stor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sulten",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sur",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "svart",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "syk",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tom",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tørr",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tørst",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "trøtt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tung",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "våken",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "varm",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "våt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vondt",
                    "imageURL": "res/img/animals/cat.png"
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
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "deg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "deg selv",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dem",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "den",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "denne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dere",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "deres",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "det",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "dette",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "din",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "disse",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "du",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ham",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "han",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hans",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "henne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hennes",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hun",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hverandre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "jeg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "man",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "meg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "meg selv",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "min",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oss",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "seg",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "seg selv",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "sin",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vår",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vi",
                    "imageURL": "res/img/animals/cat.png"
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
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "hvem",
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "hvilken",
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "hvor",
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "hvordan",
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "hvorfor",
                    "imageURL": "img/categories/ask.jpg"
                },
                {
                    "name": "når",
                    "imageURL": "img/categories/ask.jpg"
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
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bak",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "bort",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "borte",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "der",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "for",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "foran",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "fra",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "frem",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "gjennom",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "her",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hit",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hjem",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hjemme",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hos",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "i stedet for",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "inn",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "inne",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "inni",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "med",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mot",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ned",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "nede",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "nedi",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "om",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "opp",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oppå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oppe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "oppi",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "over",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "på",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "til",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "tilbake",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "under",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ut",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ute",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "utenfor",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "utenpå",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ved siden av",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "vekk",
                    "imageURL": "res/img/animals/cat.png"
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
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "alt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "andre",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "den",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "det",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ei",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "en",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "en annen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "et",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hver",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "hvert",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ikke",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ingen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "ingenting",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "litt",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mange",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mer",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "mye",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "noe",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "noen",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "også",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "samme",
                    "imageURL": "res/img/animals/cat.png"
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