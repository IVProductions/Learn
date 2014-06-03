Learn.factory('learnFactory', function() {
    var categories = [
    {
            "id": 1,
            "name": "Bokstaver og tall",
            "imageURL": "img/alphabet/alphabet.jpg",
            "words": [
                {
                    "name": "0",
                    "imageURL": "img/alphabet/zero.jpg"
                },
                {
                    "name": "1",
                    "imageURL": "img/alphabet/1.jpg"
                },
                {
                    "name": "2",
                    "imageURL": "img/alphabet/2.jpg"
                },
                {
                    "name": "3",
                    "imageURL": "img/alphabet/3.jpg"
                },
                {
                    "name": "4",
                    "imageURL": "img/alphabet/4.jpg"
                },
                {
                    "name": "5",
                    "imageURL": "img/alphabet/5.jpg"
                },
                {
                    "name": "6",
                    "imageURL": "img/alphabet/6.jpg"
                },
                {
                    "name": "7",
                    "imageURL": "img/alphabet/7.jpg"
                },
                {
                    "name": "8",
                    "imageURL": "img/alphabet/8.jpg"
                },
                {
                    "name": "9",
                    "imageURL": "img/alphabet/9.jpg"
                },
                {
                    "name": "A",
                    "imageURL": "img/alphabet/A.jpg"
                },
                {
                    "name": "B",
                    "imageURL": "img/alphabet/B.jpg"
                },
                {
                    "name": "C",
                    "imageURL": "img/alphabet/C.jpg"
                },
                {
                    "name": "D",
                    "imageURL": "img/alphabet/D.jpg"
                },
                {
                    "name": "E",
                    "imageURL": "img/alphabet/E.jpg"
                },
                {
                    "name": "F",
                    "imageURL": "img/alphabet/F.jpg"
                },
                {
                    "name": "G",
                    "imageURL": "img/alphabet/G.jpg"
                },
                {
                    "name": "H",
                    "imageURL": "img/alphabet/H.jpg"
                },
                {
                    "name": "I",
                    "imageURL": "img/alphabet/I.jpg"
                },
                {
                    "name": "J",
                    "imageURL": "img/alphabet/J.jpg"
                },
                {
                    "name": "K",
                    "imageURL": "img/alphabet/K.jpg"
                },
                {
                    "name": "L",
                    "imageURL": "img/alphabet/L.jpg"
                },
                {
                    "name": "M",
                    "imageURL": "img/alphabet/M.jpg"
                },
                {
                    "name": "N",
                    "imageURL": "img/alphabet/N.jpg"
                },
                {
                    "name": "O",
                    "imageURL": "img/alphabet/O.jpg"
                },
                {
                    "name": "P",
                    "imageURL": "img/alphabet/P.jpg"
                },
                {
                    "name": "Q",
                    "imageURL": "img/alphabet/Q.jpg"
                },
                {
                    "name": "R",
                    "imageURL": "img/alphabet/R.jpg"
                },
                {
                    "name": "S",
                    "imageURL": "img/alphabet/S.jpg"
                },
                {
                    "name": "T",
                    "imageURL": "img/alphabet/T.jpg"
                },
                {
                    "name": "U",
                    "imageURL": "img/alphabet/U.jpg"
                },
                {
                    "name": "V",
                    "imageURL": "img/alphabet/V.jpg"
                },
                {
                    "name": "W",
                    "imageURL": "img/alphabet/W.jpg"
                },
                {
                    "name": "X",
                    "imageURL": "img/alphabet/X.jpg"
                },
                {
                    "name": "Y",
                    "imageURL": "img/alphabet/Y.jpg"
                },
                {
                    "name": "Z",
                    "imageURL": "img/alphabet/Z.jpg"
                },
                {
                    "name": "Æ",
                    "imageURL": "img/alphabet/E.jpg"
                },
                {
                    "name": "Ø",
                    "imageURL": "img/alphabet/O.jpg"
                },
                {
                    "name": "Å",
                    "imageURL": "img/alphabet/A.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Hvem",
            "imageURL": "img/persons/studentm.jpg",
            "words": [
                {
                    "name": "Anna Kjerstina",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Stina Marie",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Erik Andreas",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Even Johannes",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Emma",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Ingri Emilie",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Ingrid Christine",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Angelica Synnøve",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Håkon Ø",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Stian",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Håkon L.",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Kine",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Camilla",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Amalie",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Ingeborg",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Ranja",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Yrja",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Ranveig",
                    "imageURL": "img/persons/studentf.jpg"
                },
                {
                    "name": "Even",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Erik",
                    "imageURL": "img/persons/studentm.jpg"
                },
                {
                    "name": "Mona",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Hilde",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Lise",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Magnhild",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Kristin",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Randi",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Torunn",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Sigrun",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Ina",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Hilde F.",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Synnøve",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Berit",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Bertil",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Marthe",
                    "imageURL": "img/persons/teacherf.jpg"
                },
                {
                    "name": "Gjermund",
                    "imageURL": "img/people/father.jpg"
                },
                {
                    "name": "Ragnhild",
                    "imageURL": "img/people/mother.jpg"
                },
                {
                    "name": "Magne",
                    "imageURL": "img/people/uncle.jpg"
                },
                {
                    "name": "Eldrid",
                    "imageURL": "img/people/aunt.jpg"
                },
                {
                    "name": "Øystein",
                    "imageURL": "img/people/uncle.jpg"
                },
                {
                    "name": "Nora",
                    "imageURL": "img/people/aunt.jpg"
                },
                {
                    "name": "Simen",
                    "imageURL": "img/people/uncle.jpg"
                },
                {
                    "name": "May",
                    "imageURL": "img/people/aunt.jpg"
                },
                {
                    "name": "Ane",
                    "imageURL": "img/people/aunt.jpg"
                },
                {
                    "name": "Bjørg",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "Janike",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "Erik",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "Pål",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "Martin",
                   "imageURL": "img/persons/cousinm.jpg"
                },
                {
                    "name": "Ylva",
                   "imageURL": "img/persons/cousinf.jpg"
                },
                {
                    "name": "Fey Elise",
                   "imageURL": "img/persons/cousinf.jpg"
                },
                {
                    "name": "Lars",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Micke",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Marius",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Alex",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Silje",
                    "imageURL": "img/persons/woman.jpg"
                },
                {
                    "name": "Espen",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Lars Erik",
                    "imageURL": "img/persons/man.jpg"
                },
                {
                    "name": "Inga",
                    "imageURL": "img/persons/womanb.jpg"
                },
                {
                    "name": "Nicolay",
                    "imageURL": "img/persons/boy.jpg"
                },
                {
                    "name": "Thomas",
                    "imageURL": "img/persons/boy.jpg"
                },
                {
                    "name": "Martin",
                    "imageURL": "img/persons/boy.jpg"
                },
                {
                    "name": "Missy",
                    "imageURL": "img/animals/cat.jpg"
                },
                {
                    "name": "Max",
                    "imageURL": "img/animals/cat.jpg"
                },
                {
                    "name": "Langbein",
                    "imageURL": "img/persons/Goofy.jpg"
                },
                {
                    "name": "Snipp",
                    "imageURL": "img/persons/chipmunk.jpg"
                },
                {
                    "name": "Snapp",
                    "imageURL": "img/persons/chipmunk.jpg"
                },
                {
                    "name": "Donald",
                    "imageURL": "img/persons/donald.jpg"
                },
                {
                    "name": "Gruffalo",
                    "imageURL": "img/persons/Gruffalo.jpg"
                },
                /*
                {
                    "name": "Plonsters",
                    "imageURL": "img/persons/donald.jpg"
                },
                */
                {
                    "name": "de",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "deg",
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
                    "name": "han",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hans",
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
                    "name": "meg",
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
                },
                {
                    "name": "baby",
                    "imageURL": "img/people/baby.jpg"
                },
                {
                    "name": "barn",
                    "imageURL": "img/people/children.jpg"
                },
                {
                    "name": "barnets navn",
                    "imageURL": "img/people/name.jpg"
                },
                {
                    "name": "barnevaktens navn",
                    "imageURL": "img/people/babysitter.jpg"
                },
                {
                    "name": "bestefar",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "bestemor",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "bonde",
                    "imageURL": "img/people/farmer.jpg"
                },
                {
                    "name": "brannmann",
                    "imageURL": "img/people/fireman.jpg"
                },
                {
                    "name": "bror",
                    "imageURL": "img/people/brother.jpg"
                },
                {
                    "name": "cowboy",
                    "imageURL": "img/people/cowboy.jpg"
                },
                {
                    "name": "dame",
                    "imageURL": "img/people/woman.jpg"
                },
                {
                    "name": "doktor",
                    "imageURL": "img/people/doctor.jpg"
                },
                {
                    "name": "farfar",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "farmor",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "folk",
                    "imageURL":"img/people/people.jpg"
                },
                {
                    "name": "gutt",
                    "imageURL": "img/people/boy.jpg"
                },
                {
                    "name": "helsesøster",
                    "imageURL": "img/people/nurse.jpg"
                },
                {
                    "name": "jente",
                    "imageURL": "img/people/girl.jpg"
                },
                {
                    "name": "klovn",
                    "imageURL": "img/people/clown.jpg"
                },
                {
                    "name": "lærer",
                    "imageURL": "img/people/teacher.jpg"
                },
                {
                    "name": "mamma",
                    "imageURL": "img/people/mother.jpg"
                },
                {
                    "name": "mann",
                    "imageURL": "img/people/man_4.jpg"
                },
                {
                    "name": "mennesker",
                    "imageURL": "img/people/people.jpg"
                },
                {
                    "name": "morfar",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "mormor",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "navn på kjæledyr",
                    "imageURL": "img/people/dog.jpg"
                },
                {
                    "name": "oldefar",
                    "imageURL": "img/people/grandfather.jpg"
                },
                {
                    "name": "oldemor",
                    "imageURL": "img/people/grandmother.jpg"
                },
                {
                    "name": "onkel",
                    "imageURL": "img/people/uncle.jpg"
                },
                {
                    "name": "pappa",
                    "imageURL": "img/people/father.jpg"
                },
                {
                    "name": "politi",
                    "imageURL": "img/people/police_officer.jpg"
                },
                {
                    "name": "postbud",
                    "imageURL": "img/people/mail_carrier.jpg"
                },
                {
                    "name": "søster",
                    "imageURL": "img/people/sister.jpg"
                },
                {
                    "name": "tante",
                    "imageURL": "img/people/aunt.jpg"
                },
                {
                    "name": "venn",
                    "imageURL": "img/people/friend.jpg"
                },
                {
                    "name": "kjæreste",
                    "imageURL": "img/persons/girlfriend.jpg"
                },
                {
                    "name": "nabo",
                    "imageURL": "img/persons/neighbor.jpg"
                },
                {
                    "name": "nisse",
                    "imageURL": "img/persons/santa.jpg"
                },
                {
                    "name": "nissen",
                    "imageURL": "img/persons/santa.jpg"
                },
                {
                    "name": "person",
                    "imageURL": "img/persons/man1.jpg"
                },
                {
                    "name": "sykepleie",
                    "imageURL": "img/people/nurse.jpg"
                },
                {
                    "name": "vi",
                    "imageURL": "img/persons/us.jpg"
                },
                {
                    "name": "vi to",
                    "imageURL": "img/persons/us.jpg"
                },
                {
                    "name": "gudmor",
                    "imageURL": "img/people/mother.jpg"
                },
                {
                    "name": "gudfar",
                    "imageURL": "img/people/father.jpg"
                },
                {
                    "name": "venninne",
                    "imageURL": "img/people/friends.jpg"
                }
            ]
        },
        {
            "id": 3,
            "name": "Spørre ord",
            "imageURL": "img/question/question.jpg",
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
                    "name": "løsning",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "fortelle",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "har",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "Kjerstina",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "kanskje",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "om igjen",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "vet",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "vil",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "spørre",
                    "imageURL": "img/question/question.jpg"
                },
                {
                    "name": "når",
                    "imageURL": "img/question/question.jpg"
                }
            ]
        },
        {
            "id": 4,
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
                    "name": "med",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "treffe",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "må",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "neste",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "på",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "samarbeid",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sammen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "venstre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "takk",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "som",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },  
        {
            "id": 5,
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
                    "name": "bare",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "beklager",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "derfor",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fordi",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "god natt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "heter",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ikke lyst",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "har lyst",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kle av",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kle på",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "konsentrere",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "opptatt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "pause",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "prøve",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "samarbeide",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skal",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "synes",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tilbake",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "velge",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "vise",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "please",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ønsker",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "uheldig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ville",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 6,
            "name": "Hva",
            "imageURL": "img/categories/toys.jpg",
            "words": [
                {
                    "name": "Advent",
                    "imageURL": "img/what/advent.jpg"
                },
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
                    "name": "datamaskin",
                    "imageURL": "img/what/computer.jpg"
                },
                {
                    "name": "juice",
                    "imageURL": "img/food/orange_juice.jpg"
                },
                {
                    "name": "måne",
                    "imageURL": "img/outdoor/starry_night_sky.jpg"
                },
                {
                    "name": "årer",
                    "imageURL": "img/what/oars.jpg"
                },
                {
                    "name": "vinger",
                    "imageURL": "img/what/wing.jpg"
                },
                {
                    "name": "ved",
                    "imageURL": "img/what/wood.jpg"
                },
                {
                    "name": "tegn",
                    "imageURL": "img/what/sign_language.jpg"
                },
                {
                    "name": "tale",
                    "imageURL": "img/what/speech.jpg"
                },
                {
                    "name": "stress",
                    "imageURL": "img/what/stressed.jpg"
                },
                {
                    "name": "spann",
                    "imageURL": "img/house_items/bucket.jpg"
                },
                {
                    "name": "snøskuter",
                    "imageURL": "img/what/snowmobile.jpg"
                },
                {
                    "name": "skøyter",
                    "imageURL": "img/what/roller_skates.jpg"
                },
                {
                    "name": "skog",
                    "imageURL": "img/what/forest.jpg"
                },
                {
                    "name": "ski",
                    "imageURL": "img/what/ski.jpg"
                },
                {
                    "name": "sang",
                    "imageURL": "img/what/thump_song.jpg"
                },
                {
                    "name": "rettferdighet",
                    "imageURL": "img/what/fair.jpg"
                },
                {
                    "name": "robot",
                    "imageURL": "img/what/robot.jpg"
                },
                {
                    "name": "reise",
                    "imageURL": "img/what/travel.jpg"
                },
                {
                    "name": "regel",
                    "imageURL": "img/what/rule.jpg"
                },
                {
                    "name": "premie",
                    "imageURL": "img/what/gold_medal.jpg"
                },
                {
                    "name": "post",
                    "imageURL": "img/what/mail_carrier.jpg"
                },
                {
                    "name": "operasjon",
                    "imageURL": "img/what/operation.jpg"
                },
                {
                    "name": "nøkkel",
                    "imageURL": "img/what/key.jpg"
                },
                {
                    "name": "nål",
                    "imageURL": "img/what/needle.jpg"
                },
                {
                    "name": "møte",
                    "imageURL": "img/what/meeting.jpg"
                },
                {
                    "name": "myr",
                    "imageURL": "img/what/wetlands.jpg"
                },
                {
                    "name": "musikk",
                    "imageURL": "img/what/music.jpg"
                },
                {
                    "name": "monster",
                    "imageURL": "img/what/monster.jpg"
                },
                {
                    "name": "lån",
                    "imageURL": "img/what/loan.jpg"
                },
                {
                    "name": "kø",
                    "imageURL": "img/what/line.jpg"
                },
                {
                    "name": "kort",
                    "imageURL": "img/what/card.jpg"
                },
                {
                    "name": "kopi",
                    "imageURL": "img/what/copy.jpg"
                },
                {
                    "name": "konfirmasjon",
                    "imageURL": "img/what/confirmation.jpg"
                },
                {
                    "name": "Kaptein Sabeltann",
                    "imageURL": "img/what/pirate.jpg"
                },
                {
                    "name": "Jul",
                    "imageURL": "img/what/christmas.jpg"
                },
                {
                    "name": "julenisse",
                    "imageURL": "img/what/santa.jpg"
                },
                {
                    "name": "juletre",
                    "imageURL": "img/what/christmas_tree.jpg"
                },
                {
                    "name": "kakao",
                    "imageURL": "img/what/hot_chocolate.jpg"
                },
                {
                    "name": "jorden",
                    "imageURL": "img/what/earth.jpg"
                },
                {
                    "name": "jord",
                    "imageURL": "img/what/dirt.jpg"
                },
                {
                    "name": "jakt",
                    "imageURL": "img/what/hunter.jpg"
                },
                {
                    "name": "is",
                    "imageURL": "img/food/sundae.jpg"
                },
                {
                    "name": "ishockey",
                    "imageURL": "img/what/hockey.jpg"
                },
                {
                    "name": "ishockeykølle",
                    "imageURL": "img/what/hockey_stick.jpg"
                },
                {
                    "name": "hjelm",
                    "imageURL": "img/what/helmet.jpg"
                },
                {
                    "name": "Gruffalo",
                    "imageURL": "img/what/gruffalo.jpg"
                },
                {
                    "name": "grus",
                    "imageURL": "img/what/gravel.jpg"
                },
                {
                    "name": "grill",
                    "imageURL": "img/what/grill.jpg"
                },
                {
                    "name": "grein",
                    "imageURL": "img/what/branch.jpg"
                },
                {
                    "name": "gravemaskin",
                    "imageURL": "img/what/excavator.jpg"
                },
                {
                    "name": "gebiss",
                    "imageURL": "img/what/teeth.jpg"
                },
                {
                    "name": "gardin",
                    "imageURL": "img/what/curtains.jpg"
                },
                {
                    "name": "garn",
                    "imageURL": "img/what/yarn.jpg"
                },
                {
                    "name": "godter",
                    "imageURL": "img/food/candy.jpg"
                },
                {
                    "name": "dataspill",
                    "imageURL": "img/what/computer_game.jpg"
                },
                {
                    "name": "spiker",
                    "imageURL": "img/what/nail.jpg"
                },
                {
                    "name": "fred",
                    "imageURL": "img/what/peace.jpg"
                },
                {
                    "name": "fystikk",
                    "imageURL": "img/what/match.jpg"
                },
                {
                    "name": "frisør",
                    "imageURL": "img/what/haircut.jpg"
                },
                {
                    "name": "film",
                    "imageURL": "img/what/movie.jpg"
                },
                {
                    "name": "ferie",
                    "imageURL": "img/what/vacation.jpg"
                },
                {
                    "name": "dikt",
                    "imageURL": "img/what/poem.jpg"
                },
                {
                    "name": "dråpe",
                    "imageURL": "img/what/drops.jpg"
                },
                {
                    "name": "gave",
                    "imageURL": "img/toys/gift.jpg"
                },
                {
                    "name": "gitar",
                    "imageURL": "img/what/guitar.jpg"
                },
                {
                    "name": "fantasi",
                    "imageURL": "img/what/fantasy.jpg"
                },
                {
                    "name": "edderkopp",
                    "imageURL": "img/what/spider.jpg"
                },
                {
                    "name": "elv",
                    "imageURL": "img/what/stream.jpg"
                },
                {
                    "name": "engel",
                    "imageURL": "img/what/angel.jpg"
                },
                {
                    "name": "eventyr",
                    "imageURL": "img/toys/adventure.jpg"
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
                    "name": "fargeblyant",
                    "imageURL": "img/toys/colored_pencils.jpg"
                },
                {
                    "name": "fløyte",
                    "imageURL": "img/what/whistle.jpg"
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
                    "name": "gift",
                    "imageURL": "img/what/marry.jpg"
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
                },
                {
                    "name": "tusj",
                    "imageURL": "img/toys/bubbles.jpg"
                },
                {
                    "name": "badering",
                    "imageURL": "img/what/swim_ring.jpg"
                },
                {
                    "name": "batteri",
                    "imageURL": "img/what/battery.jpg"
                },
                {
                    "name": "bekk",
                    "imageURL": "img/what/stream.jpg"
                },
                {
                    "name": "Bestefar i Lomma",
                    "imageURL": "img/what/grandpa.jpg"
                },
                {
                    "name": "besøk",
                    "imageURL": "img/what/visit.jpg"
                },
                {
                    "name": "bilde",
                    "imageURL": "img/house_items/picture.jpg"
                },
                {
                    "name": "billett",
                    "imageURL": "img/what/ticket.jpg"
                },
                {
                    "name": "blad",
                    "imageURL": "img/what/magazine.jpg"
                },
                {
                    "name": "blod",
                    "imageURL": "img/sound_effects/blood.jpg"
                },
                {
                    "name": "blomst",
                    "imageURL": "img/outdoor/flower.jpg"
                },
                {
                    "name": "boks",
                    "imageURL": "img/house_items/box.jpg"
                },
                {
                    "name": "bolle",
                    "imageURL": "img/what/cin_bun.jpg"
                },
                {
                    "name": "bord",
                    "imageURL": "img/room/table.jpg"
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
                    "name": "brannmann",
                    "imageURL": "img/people/fireman.jpg"
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
                    "name": "bru",
                    "imageURL": "img/what/bridge.jpg"
                },
                {
                    "name": "bråk",
                    "imageURL": "img/what/noise.jpg"
                },
                {
                    "name": "bukse",
                    "imageURL": "img/clothing/jeans.jpg"
                },
                {
                    "name": "fødselsdag",
                    "imageURL": "img/what/birthday.jpg"
                },
                {
                    "name": "bæsj",
                    "imageURL": "img/what/poop.jpg"
                },
                {
                    "name": "bøtte",
                    "imageURL": "img/house_items/bucket.jpg"
                },
                {
                    "name": "bål",
                    "imageURL": "img/what/bonfire.jpg"
                },
                {
                    "name": "båt",
                    "imageURL": "img/vehicles/boat.jpg"
                },
                {
                    "name": "dag",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "dam",
                    "imageURL": "img/what/pond.jpg"
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
                    "name": "fest",
                    "imageURL": "img/what/party.jpg"
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
                    "name": "iPad",
                    "imageURL": "img/what/tablet.jpg"
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
                    "name": "Karsten",
                    "imageURL": "img/what/man.jpg"
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
                    "name": "Petra",
                    "imageURL": "img/what/woman.jpg"
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
                },
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
                    "imageURL": "img/room/rocking_chair.jpg"
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
                },
                {
                    "name": "badebasseng",
                    "imageURL": "img/outdoor/swimming_pool.jpg"
                },
                {
                    "name": "bakgård",
                    "imageURL": "img/outdoor/patio.jpg"
                },
                {
                    "name": "blomst",
                    "imageURL": "img/outdoor/flower.jpg"
                },
                {
                    "name": "fjell",
                    "imageURL": "img/outdoor/mountain.jpg"
                },
                {
                    "name": "flagg",
                    "imageURL": "img/outdoor/flag.jpg"
                },
                {
                    "name": "fortau",
                    "imageURL": "img/outdoor/sidewalk.jpg"
                },
                {
                    "name": "gress",
                    "imageURL": "img/outdoor/grass.jpg"
                },
                {
                    "name": "gressklipper",
                    "imageURL": "img/outdoor/mow.jpg"
                },
                {
                    "name": "himmel",
                    "imageURL": "img/outdoor/sky.jpg"
                },
                {
                    "name": "huske",
                    "imageURL": "img/outdoor/swing.jpg"
                },
                {
                    "name": "kjelke",
                    "imageURL": "img/outdoor/sled.jpg"
                },
                {
                    "name": "pinne",
                    "imageURL": "img/outdoor/stick.jpg"
                },
                {
                    "name": "regn",
                    "imageURL": "img/outdoor/freezing_rain.jpg"
                },
                {
                    "name": "sandkasse",
                    "imageURL": "img/outdoor/sandbox.jpg"
                },
                {
                    "name": "sklie",
                    "imageURL": "img/outdoor/slide.jpg"
                },
                {
                    "name": "skyer",
                    "imageURL": "img/outdoor/clouds.jpg"
                },
                {
                    "name": "snø",
                    "imageURL": "img/outdoor/snow.jpg"
                },
                {
                    "name": "snømann",
                    "imageURL": "img/outdoor/snowman.jpg"
                },
                {
                    "name": "spade",
                    "imageURL": "img/outdoor/shovel.jpg"
                },
                {
                    "name": "stein",
                    "imageURL": "img/outdoor/stones.jpg"
                },
                {
                    "name": "stige",
                    "imageURL": "img/outdoor/ladder.jpg"
                },
                {
                    "name": "stjerner",
                    "imageURL": "img/outdoor/stars.jpg"
                },
                {
                    "name": "tak",
                    "imageURL": "img/outdoor/roof.jpg"
                },
                {
                    "name": "trampoline",
                    "imageURL": "img/outdoor/trampoline.jpg"
                },
                {
                    "name": "tre",
                    "imageURL": "img/outdoor/tree.jpg"
                },
                {
                    "name": "vann",
                    "imageURL": "img/outdoor/water.jpg"
                },
                {
                    "name": "vannslange",
                    "imageURL": "img/outdoor/hose.jpg"
                },
                {
                    "name": "vei",
                    "imageURL": "img/outdoor/road.jpg"
                },
                {
                    "name": "vind",
                    "imageURL": "img/outdoor/wind.jpg"
                },
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
                },
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
                    "name": "buss",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "bil",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "fly",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "seile",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "tog",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "trikk",
                    "imageURL": "img/vehicles/tractor.jpg"
                },
                {
                    "name": "trehjulssykkel",
                    "imageURL": "img/vehicles/tricycle.jpg"
                }
            ]
        },
        {
            "id": 7,
            "name": "Verb",
            "imageURL": "img/categories/apple_juice.jpg",
            "words": [
                {
                    "name": "jobbe",
                    "imageURL": "img/verb/work.jpg"
                },
                {
                    "name": "bite",
                    "imageURL": "img/verb/bite.jpg"
                },
                {
                    "name": "blåse",
                    "imageURL": "img/verb/blow.jpg"
                },
                {
                    "name": "bråke",
                    "imageURL": "img/verb/loud.jpg"
                },
                {
                    "name": "bygge",
                    "imageURL": "img/verb/build_house.jpg"
                },
                {
                    "name": "bære",
                    "imageURL": "img/verb/carry.jpg"
                },
                {
                    "name": "danse",
                    "imageURL": "img/verb/dance.jpg"
                },
                {
                    "name": "dele",
                    "imageURL": "img/verb/share.jpg"
                },
                {
                    "name": "drikke",
                    "imageURL": "img/verb/drink.jpg"
                },
                {
                    "name": "dytte",
                    "imageURL": "img/verb/push.jpg"
                },
                {
                    "name": "elske",
                    "imageURL": "img/verb/love.jpg"
                },
                {
                    "name": "fange",
                    "imageURL": "img/verb/catch_fish.jpg"
                },
                {
                    "name": "falle",
                    "imageURL": "img/verb/fall_down.jpg"
                },
                {
                    "name": "finne",
                    "imageURL": "img/verb/find.jpg"
                },
                {
                    "name": "forte seg",
                    "imageURL": "img/verb/late_to_work.jpg"
                },
                {
                    "name": "få",
                    "imageURL": "img/verb/take.jpg"
                },
                {
                    "name": "gi",
                    "imageURL": "img/verb/give.jpg"
                },
                {
                    "name": "gjemme",
                    "imageURL": "img/verb/hide.jpg"
                },
                {
                    "name": "gjøre seg ferdig",
                    "imageURL": "img/verb/finished.jpg"
                },
                {
                    "name": "gli",
                    "imageURL": "img/verb/slide.jpg"
                },
                {
                    "name": "gråte",
                    "imageURL": "img/verb/cry.jpg"
                },
                {
                    "name": "gå",
                    "imageURL": "img/verb/walk.jpg"
                },
                {
                    "name": "ha",
                    "imageURL": "img/verb/hold.jpg"
                },
                {
                    "name": "hate",
                    "imageURL": "img/verb/hate.jpg"
                },
                {
                    "name": "helle",
                    "imageURL": "img/verb/pour.jpg"
                },
                {
                    "name": "hente",
                    "imageURL": "img/verb/pick_up_child.jpg"
                },
                {
                    "name": "hjelpe",
                    "imageURL": "img/verb/help.jpg"
                },
                {
                    "name": "holde",
                    "imageURL": "img/verb/have.jpg"
                },
                {
                    "name": "holde øye med",
                    "imageURL": "img/verb/look.jpg"
                },
                {
                    "name": "hoppe",
                    "imageURL": "img/verb/jump.jpg"
                },
                {
                    "name": "huske",
                    "imageURL": "img/verb/forget.jpg"
                },
                {
                    "name": "høre",
                    "imageURL": "img/verb/sounds.jpg"
                },
                {
                    "name": "høre etter",
                    "imageURL": "img/verb/sounds.jpg"
                },
                {
                    "name": "følge etter",
                    "imageURL": "img/verb/follow.jpg"
                },
                {
                    "name": "kaste",
                    "imageURL": "img/verb/throw_baseball.jpg"
                },
                {
                    "name": "kile",
                    "imageURL": "img/verb/tickle.jpg"
                },
                {
                    "name": "kjøpe",
                    "imageURL": "img/verb/buy.jpg"
                },
                {
                    "name": "kjøre",
                    "imageURL": "img/verb/drive.jpg"
                },
                {
                    "name": "klappe",
                    "imageURL": "img/verb/clap.jpg"
                },
                {
                    "name": "klatre",
                    "imageURL": "img/verb/greasy_pole_climb.jpg"
                },
                {
                    "name": "klemme",
                    "imageURL": "img/verb/hug.jpg"
                },
                {
                    "name": "kle på",
                    "imageURL": "img/verb/dress.jpg"
                },
                {
                    "name": "koste",
                    "imageURL": "img/verb/sweep.jpg"
                },
                {
                    "name": "kysse",
                    "imageURL": "img/verb/kiss.jpg"
                },
                {
                    "name": "lage mat",
                    "imageURL": "img/verb/cook.jpg"
                },
                {
                    "name": "late som",
                    "imageURL": "img/verb/pretend.jpg"
                },
                {
                    "name": "putte",
                    "imageURL": "img/verb/put_down.jpg"
                },
                {
                    "name": "legge",
                    "imageURL": "img/verb/put_away.jpg"
                },
                {
                    "name": "leke",
                    "imageURL": "img/verb/play.jpg"
                },
                {
                    "name": "lese",
                    "imageURL": "img/verb/read.jpg"
                },
                {
                    "name": "like",
                    "imageURL": "img/verb/like.jpg"
                },
                {
                    "name": "lukke",
                    "imageURL": "img/verb/close.jpg"
                },
                {
                    "name": "løpe",
                    "imageURL": "img/verb/run.jpg"
                },
                {
                    "name": "male",
                    "imageURL": "img/verb/paint.jpg"
                },
                {
                    "name": "mate",
                    "imageURL": "img/verb/feed.jpg"
                },
                {
                    "name": "miste",
                    "imageURL": "img/verb/drop.jpg"
                },
                {
                    "name": "reparere",
                    "imageURL": "img/verb/fix.jpg"
                },
                {
                    "name": "passe",
                    "imageURL": "img/verb/babysitter.jpg"
                },
                {
                    "name": "plaske",
                    "imageURL": "img/verb/splash.jpg"
                },
                {
                    "name": "prøve",
                    "imageURL": "img/verb/try.jpg"
                },
                {
                    "name": "puste",
                    "imageURL": "img/verb/breathe_out.jpg"
                },
                {
                    "name": "ri",
                    "imageURL": "img/verb/ride_horse.jpg"
                },
                {
                    "name": "riste",
                    "imageURL": "img/verb/shake.jpg"
                },
                {
                    "name": "rive av",
                    "imageURL": "img/verb/shred.jpg"
                },
                {
                    "name": "rydde",
                    "imageURL": "img/verb/clean.jpg"
                },
                {
                    "name": "røre",
                    "imageURL": "img/verb/stir_bowl.jpg"
                },
                {
                    "name": "se",
                    "imageURL": "img/verb/look1.jpg"
                },
                {
                    "name": "se på",
                    "imageURL": "img/verb/look1.jpg"
                },
                {
                    "name": "sette",
                    "imageURL": "img/verb/put_in_toaster.jpg"
                },
                {
                    "name": "si",
                    "imageURL": "img/verb/talk.jpg"
                },
                {
                    "name": "sitte",
                    "imageURL": "img/verb/sit.jpg"
                },
                {
                    "name": "skjære",
                    "imageURL": "img/verb/chop_apple.jpg"
                },
                {
                    "name": "skli",
                    "imageURL": "img/verb/slide1.jpg"
                },
                {
                    "name": "skrive",
                    "imageURL": "img/verb/research.jpg"
                },
                {
                    "name": "skynde",
                    "imageURL": "res/img/animals/cat.png"
                },
                {
                    "name": "skynde seg",
                    "imageURL": "img/verb/affection.jpg"
                },
                {
                    "name": "slikke",
                    "imageURL": "img/verb/lick.jpg"
                },
                {
                    "name": "slutte",
                    "imageURL": "img/verb/quit.jpg"
                },
                {
                    "name": "slå",
                    "imageURL": "img/verb/hit.jpg"
                },
                {
                    "name": "smake",
                    "imageURL": "img/verb/taste.jpg"
                },
                {
                    "name": "smile",
                    "imageURL": "img/verb/smile.jpg"
                },
                {
                    "name": "snakke",
                    "imageURL": "img/verb/talk1.jpg"
                },
                {
                    "name": "sove",
                    "imageURL": "img/verb/sleep.jpg"
                },
                {
                    "name": "sparke",
                    "imageURL": "img/verb/kick.jpg"
                },
                {
                    "name": "spille",
                    "imageURL": "img/verb/play_basketball.jpg"
                },
                {
                    "name": "spise",
                    "imageURL": "img/verb/eat_lunch.jpg"
                },
                {
                    "name": "stikke",
                    "imageURL": "img/verb/sew.jpg"
                },
                {
                    "name": "stoppe",
                    "imageURL": "img/verb/bus_station.jpg"
                },
                {
                    "name": "stå",
                    "imageURL": "img/verb/stand.jpg"
                },
                {
                    "name": "synge",
                    "imageURL": "img/verb/sing.jpg"
                },
                {
                    "name": "svømme",
                    "imageURL": "img/verb/swim.jpg"
                },
                {
                    "name": "søle",
                    "imageURL": "img/verb/spill.jpg"
                },
                {
                    "name": "ta",
                    "imageURL": "img/verb/take1.jpg"
                },
                {
                    "name": "tegne",
                    "imageURL": "img/verb/draw.jpg"
                },
                {
                    "name": "tenke",
                    "imageURL": "img/verb/think.jpg"
                },
                {
                    "name": "treffe",
                    "imageURL": "img/verb/meet.jpg"
                },
                {
                    "name": "dra",
                    "imageURL": "img/verb/move_away.jpg"
                },
                {
                    "name": "tørke",
                    "imageURL": "img/verb/dry_dishes.jpg"
                },
                {
                    "name": "vaske",
                    "imageURL": "img/verb/clean_bathtub.jpg"
                },
                {
                    "name": "vente",
                    "imageURL": "img/verb/wait.jpg"
                },
                {
                    "name": "slå seg",
                    "imageURL": "img/verb/hurt.jpg"
                },
                {
                    "name": "vise",
                    "imageURL": "img/verb/Show_me.jpg"
                },
                {
                    "name": "velte",
                    "imageURL": "img/verb/knock_down_blocks.jpg"
                },
                {
                    "name": "være glad i",
                    "imageURL": "img/verb/affection.jpg"
                },
                {
                    "name": "våkne",
                    "imageURL": "img/verb/Good_morning.jpg"
                },
                {
                    "name": "ødelegge",
                    "imageURL": "img/verb/destroy.jpg"
                },
                {
                    "name": "ønske",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "prøve",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "øve",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "ake",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "arbeide",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bade",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bake",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "banke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "begynne",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "beholde",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bestemme",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "betale",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bite",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "blinke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "blåse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bo",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "danse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "disse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "drømme",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "dusje",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "erte",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bli ertet",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "finne",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "fiske",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "forstår",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "fryse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "fungere",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "få",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "gjemme",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "gjemsel",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "gjøre",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "glemme",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "gymnastikk",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "handle",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "hyle",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "kile",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "kjefte",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "huske",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "hvile",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "kjenne",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "klippe",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "koke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "kose",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "lage",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "leke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "lete",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "lime",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "love",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "lyve",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "låne",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "mobbe",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "montere",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "mose",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "operere",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "passe",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "poste",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "dyrke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "prate",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "pusse nesen",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "pusse tenner",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "reparere",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "rote",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "rydde",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "sitte",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "skifte",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "skli",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "snakke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "snekre",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "det snør",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "spille",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "stresser",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "syk",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "synge",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "ta bilde",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "tegne",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "telle",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "tisse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "tulle",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "vaske",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "vaske opp",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "vente",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "virke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "øve",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "jukse",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "hjelpe",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "suge",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "bære",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "pakke",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "svømme",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "smake",
                    "imageURL": "img/verb/hope.jpg"
                },
                {
                    "name": "åpne",
                    "imageURL": "img/verb/remove.jpg"
                }
            ]
        },
        {
            "id": 8,
            "name": "Hvor",
            "imageURL": "img/places/city.jpg",
            "words": [
                {
                    "name": "bensinstasjon",
                    "imageURL": "img/places/gas_station.jpg"
                },
                {
                    "name": "bondegård",
                    "imageURL": "img/places/farm.jpg"
                },
                {
                    "name": "butikk",
                    "imageURL": "img/places/store.jpg"
                },
                {
                    "name": "byen",
                    "imageURL": "img/places/city.jpg"
                },
                {
                    "name": "campingplass",
                    "imageURL": "img/places/camping.jpg"
                },
                {
                    "name": "dyrehage",
                    "imageURL": "img/places/zoo.jpg"
                },
                {
                    "name": "fest",
                    "imageURL": "img/places/street_party.jpg"
                },
                {
                    "name": "hage",
                    "imageURL": "img/places/backyard_birds.jpg"
                },
                {
                    "name": "hjem",
                    "imageURL": "img/places/home.jpg"
                },
                {
                    "name": "hus",
                    "imageURL": "img/places/home1.jpg"
                },
                {
                    "name": "jobb",
                    "imageURL": "img/places/work.jpg"
                },
                {
                    "name": "kino",
                    "imageURL": "img/places/movie_theater.jpg"
                },
                {
                    "name": "kirke",
                    "imageURL": "img/places/church.jpg"
                },
                {
                    "name": "landet",
                    "imageURL": "img/places/summer_camp.jpg"
                },
                {
                    "name": "lekeplass",
                    "imageURL": "img/places/playground.jpg"
                },
                {
                    "name": "park",
                    "imageURL": "img/places/park.jpg"
                },
                {
                    "name": "sirkus",
                    "imageURL": "img/places/circus.jpg"
                },
                {
                    "name": "skogen",
                    "imageURL": "img/places/forest.jpg"
                },
                {
                    "name": "strand",
                    "imageURL": "img/places/beach.jpg"
                },
                {
                    "name": "svømmehall",
                    "imageURL": "img/places/swimming_race.jpg"
                },
                {
                    "name": "ut",
                    "imageURL": "img/places/outside.jpg"
                },
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
                    "name": "Australia",
                    "imageURL": "img/where/Australia.jpg"
                },
                {
                    "name": "barnehage",
                    "imageURL": "img/where/school.jpg"
                },
                {
                    "name": "bibliotek",
                    "imageURL": "img/where/reading_class.jpg"
                },
                {
                    "name": "hule",
                    "imageURL": "img/where/cave.jpg"
                },
                {
                    "name": "isbre",
                    "imageURL": "img/where/glacier.jpg"
                },
                {
                    "name": "kontor",
                    "imageURL": "img/where/work.jpg"
                },
                {
                    "name": "mellom",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skole",
                    "imageURL": "img/where/school.jpg"
                },
                {
                    "name": "stortinget",
                    "imageURL": "img/where/Parlament.jpg"
                },
                {
                    "name": "stue",
                    "imageURL": "img/where/living_room.jpg"
                },
                {
                    "name": "sykehus",
                    "imageURL": "img/where/hospital.jpg"
                },
                {
                    "name": "tur",
                    "imageURL": "img/where/hike.jpg"
                },
                {
                    "name": "bekk",
                    "imageURL": "img/where/stream.jpg"
                },
                {
                    "name": "besøk",
                    "imageURL": "img/where/visitor.jpg"
                },
                {
                    "name": "vekk",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 9,
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
                    "name": "froskegg",
                    "imageURL": "img/animals/tadpoles.jpg"
                },
                {
                    "name": "hakkespett",
                    "imageURL": "img/animals/woodpecker.jpg"
                },
                {
                    "name": "humle",
                    "imageURL": "img/animals/Bee_Barry.jpg"
                },
                {
                    "name": "muldvarp",
                    "imageURL": "img/animals/mole.jpg"
                },
                {
                    "name": "nesehorn",
                    "imageURL": "img/animals/rhinoceros.jpg"
                },
                {
                    "name": "pels",
                    "imageURL": "img/animals/fur.jpg"
                },
                {
                    "name": "leopard",
                    "imageURL": "img/animals/leopard.jpg"
                },
                {
                    "name": "snegle",
                    "imageURL": "img/animals/snail.jpg"
                },
                {
                    "name": "spurv",
                    "imageURL": "img/animals/sparrow.jpg"
                },
                {
                    "name": "veps",
                    "imageURL": "img/animals/wasp.jpg"
                }
            ]
        },
        {
            "id": 10,
            "name": "Følelser",
            "imageURL": "img/feelings/happy.jpg",
            "words": [
                {
                    "name": "føler",
                    "imageURL": "img/feelings/feel.jpg"
                },
                {
                    "name": "elsker",
                    "imageURL": "img/feelings/love.jpg"
                },
                {
                    "name": "sur",
                    "imageURL": "img/describe/grumpy.jpg"
                },
                {
                    "name": "glad i",
                    "imageURL": "img/feelings/love.jpg"
                },
                {
                    "name": "glad",
                    "imageURL": "img/feelings/happy.jpg"
                },
                {
                    "name": "lei",
                    "imageURL": "img/feelings/bored.jpg"
                },
                {
                    "name": "kjedelig",
                    "imageURL": "img/feelings/bored.jpg"
                },
                {
                    "name": "morsomt",
                    "imageURL": "img/feelings/funny.jpg"
                },
                {
                    "name": "hater",
                    "imageURL": "img/feelings/hate.jpg"
                },
                {
                    "name": "bekymret",
                    "imageURL": "img/feelings/worried.jpg"
                },
                {
                    "name": "lei seg",
                    "imageURL": "img/feelings/cry.jpg"
                },
                {
                    "name": "redd",
                    "imageURL": "img/feelings/scared.jpg"
                },
                {
                    "name": "angre",
                    "imageURL": "img/feelings/sorry.jpg"
                },
                {
                    "name": "godt",
                    "imageURL": "img/feelings/good.jpg"
                },
                {
                    "name": "like",
                    "imageURL": "img/feelings/like.jpg"
                },
                {
                    "name": "mot",
                    "imageURL": "img/feelings/brave.jpg"
                },
                {
                    "name": "nysgjerrig",
                    "imageURL": "img/feelings/curious.jpg"
                },
                {
                    "name": "overasket",
                    "imageURL": "img/feelings/surprised.jpg"
                },
                {
                    "name": "tålmodig",
                    "imageURL": "img/feelings/bored.jpg"
                },
                {
                    "name": "ære",
                    "imageURL": "img/feelings/salute.jpg"
                },
                {
                    "name": "ærlighet",
                    "imageURL": "img/feelings/truth.jpg"
                },
                {
                    "name": "ønske",
                    "imageURL": "img/feelings/hope.jpg"
                },
                {
                    "name": "respekt",
                    "imageURL": "img/feelings/respect.jpg"
                },
                {
                    "name": "rolig",
                    "imageURL": "img/feelings/calm.jpg"
                },
                {
                    "name": "savne",
                    "imageURL": "img/feelings/miss.jpg"
                },
                {
                    "name": "sint",
                    "imageURL": "img/feelings/angry.jpg"
                },
                {
                    "name": "skummelt",
                    "imageURL": "img/feelings/scary.jpg"
                },
                {
                    "name": "stresset",
                    "imageURL": "img/feelings/sad.jpg"
                },
                {
                    "name": "trist",
                    "imageURL": "img/feelings/cry.jpg"
                },
                {
                    "name": "trygt",
                    "imageURL": "img/feelings/safe.jpg"
                },
                {
                    "name": "problem",
                    "imageURL": "img/feelings/problem.jpg"
                },
                {
                    "name": "tørst",
                    "imageURL": "img/feelings/thirsty.jpg"
                },
                {
                    "name": "modig",
                    "imageURL": "img/feelings/brave.jpg"
                }
            ]
        },
        {
            "id": 11,
            "name": "Beskrivende ord",
            "imageURL": "img/categories/talk.jpg",
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
                },
                {
                    "name": "eksplosjon",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "farge",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "aldri",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "alene",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "alltid",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "alt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "alvorlig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ansvar",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "bedre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "best",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "bety",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dumt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dum",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "dyrt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "død",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fantastisk",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "farlig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fast",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "feber",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "feil",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "flint",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "flink",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "flott",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "forskjellig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "frisk",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "giftig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gift",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gøy",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hard",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "heldigvis",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hemmelighet",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hurra",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "hyl",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "høyre",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kjedelig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kulde",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "landskap",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "like",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "lille",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "lov",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "lur",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "merkelig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "min",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "blå",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ekkelt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "missforståelse",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "modig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "myk",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ned",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nesten",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nettop",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nok",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ny",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ond",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ondskapsfull",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "perfekt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "rar",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "rart",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ren",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "rot",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ryddig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sakte",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sant",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "siste",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skitten",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "skummel",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "slem",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sliten",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "slutt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "telt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tom",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tørster",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tålmodighet",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "varm",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "viktig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "virker",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "våt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ærlig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "ødelagt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "åpen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "åpning",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mett",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "sulten",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "fort",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "kort",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "trygt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "tørst",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "uheldig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "rettferdighet",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "nøye",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "presis",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "riktig",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "samme",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "jukse",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "langt",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 12,
            "name": "Mengde ord",
            "imageURL": "img/categories/talk.jpg",
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
<<<<<<< HEAD
                    "name": "fjær",
                    "imageURL": "img/house_items/"
                },
                {
                    "name": "flagg",
                    "imageURL": "img/outdoor/flag.jpg"
=======
                    "name": "en annen",
                    "imageURL": "img/categories/talk.jpg"
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
                    "name": "pinne",
                    "imageURL": "img/outdoor/stick.jpg"
=======
                    "name": "litt",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "mange",
                    "imageURL": "img/categories/talk.jpg"
>>>>>>> FETCH_HEAD
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
                },
                {
                    "name": "nøye",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
<<<<<<< HEAD
                    "name": "måne",
                    "imageURL": "img/outdoor/starry_night_sky.jpg"
                },
                {
                    "name": "spade",
                    "imageURL": "img/outdoor/shovel.jpg"
=======
                    "name": "presis",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "riktig",
                    "imageURL": "img/categories/talk.jpg"
>>>>>>> FETCH_HEAD
                },
                {
                    "name": "full",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "først",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "gjenta",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "halvparten",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "høy",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "igjen",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "klart",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "minst",
                    "imageURL": "img/categories/talk.jpg"
                },
                {
                    "name": "plutselig",
                    "imageURL": "img/categories/talk.jpg"
                }
            ]
        },
        {
            "id": 13,
            "name": "Ord om tid",
            "imageURL": "img/time/time.jpg",
            "words": [
                {
                    "name": "dag",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "etter",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "ettermiddag",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "etterpå",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "før",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "formiddag",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "i dag",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "i går",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "i kveld",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "i morgen",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "kveld",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "morgen",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "nå",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "natt",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "senere",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "tid",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "mandag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "tirsdag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "onsdag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "torsdag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "fredag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "lørdag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "søndag",
                    "imageURL": "img/time/day.jpg"
                },
                {
                    "name": "januar",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "februar",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "mars",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "april",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "mai",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "juni",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "juli",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "august",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "september",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "oktober",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "november",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "desember",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "etterpå",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "helg",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "høst",
                    "imageURL": "img/time/fall.jpg"
                },
                {
                    "name": "sommer",
                    "imageURL": "img/time/summer.jpg"
                },
                {
                    "name": "lang",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "minutt",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "time",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "sekund",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "måned",
                    "imageURL": "img/time/month.jpg"
                },
                {
                    "name": "natt",
                    "imageURL": "img/time/night.jpg"
                },
                {
                    "name": "nå",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "sist",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "snart",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "stund",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "time",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "uke",
                    "imageURL": "img/time/time.jpg"
                },
                {
                    "name": "vinter",
                    "imageURL": "img/time/winter.jpg"
                },
                {
                    "name": "vår",
                    "imageURL": "img/time/spring.jpg"
                },
                {
                    "name": "årstid",
                    "imageURL": "img/time/seasons.jpg"
                },
                {
                    "name": "klokken",
                    "imageURL": "img/time/time.jpg"
                }
            ]
        },
        {
            "id": 14,
            "name": "Mat og drikke",
            "imageURL": "img/food/fruit.jpg",
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
                    "name": "pepper",
                    "imageURL": "img/food/pepper.jpg"
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
                    "name": "fiskekaker",
                    "imageURL": "img/food/fish_sticks.jpg"
                },
                {
                    "name": "kveldsmat",
                    "imageURL": "img/food/lunch1.jpg"
                },
                {
                    "name": "middag",
                    "imageURL": "img/food/lunch.jpg"
                },
                {
                    "name": "lunch",
                    "imageURL": "img/food/lunch.jpg"
                },
                {
                    "name": "frokost",
                    "imageURL": "img/food/breakfast.jpg"
                },
                {
                    "name": "pære",
                    "imageURL": "img/food/pear.jpg"
                },
                {
                    "name": "rips",
                    "imageURL": "img/food/cranberries.jpg"
                },
                {
                    "name": "sopp",
                    "imageURL": "img/food/mushrooms.jpg"
                },
                {
                    "name": "sukker",
                    "imageURL": "img/food/sugar.jpg"
                },
                {
                    "name": "varm",
                    "imageURL": "img/food/warm_cider.jpg"
                },
                {
                    "name": "sulten",
                    "imageURL": "img/food/hungry.jpg"
                },
                /*
                {
                    "name": "flyndre",
                    "imageURL": "img/food/full.jpg"
                },
                */
                {
                    "name": "yoghurt",
                    "imageURL": "img/food/yogurt.jpg"
                }
            ]
        },
        {
            "id": 15,
            "name": "Kroppsdeler",
            "imageURL": "img/categories/bathe.jpg",
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
                    "name": "fortann",
                    "imageURL": "img/body/teethnew.jpg"
                },
                {
                    "name": "naken",
                    "imageURL": "img/body/body.jpg"
                },
                {
                    "name": "tann",
                    "imageURL": "img/body/tooth.jpg"
                },
                {
                    "name": "varm",
                    "imageURL": "img/body/hot.jpg"
                },
                {
                    "name": "åpne",
                    "imageURL": "img/body/dry_mouth.jpg"
                },
                {
                    "name": "tå",
                    "imageURL": "img/body/toenail.jpg"
                } 
            ]
        },
        {
            "id": 16,
            "name": "Mine tegn",
            "imageURL": "img/categories/jump.jpg",
            "words": [
                /*
                {
                    "name": "jobbe",
                    "imageURL": "img/verb/work.jpg"
                }
                */
            ]
        }
    ]
    return {categories:categories};
})