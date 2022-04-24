let myFavoriteCountry = { 
        "name": {
        "common": "Mauritius",
        "official": "Republic of Mauritius",
        "nativeName": {
            "eng": {
                "official": "Republic of Mauritius",
                "common": "Mauritius"
            },
            "fra": {
                "official": "République de Maurice",
                "common": "Maurice"
            },
            "mfe": {
                "official": "Republik Moris",
                "common": "Moris"
            }
        }
    },
    "tld": [
        ".mu"
    ],
    "cca2": "MU",
    "ccn3": "480",
    "cca3": "MUS",
    "cioc": "MRI",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "MUR": {
            "name": "Mauritian rupee",
            "symbol": "₨"
        }
    },
    "idd": {
        "root": "+2",
        "suffixes": [
            "30"
        ]
    },
    "capital": [
        "Port Louis"
    ],
    "altSpellings": [
        "MU",
        "Republic of Mauritius",
        "République de Maurice"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "languages": {
        "eng": "English",
        "fra": "French",
        "mfe": "Mauritian Creole"
    },
    "translations": {
        "ara": {
            "official": "جمهورية موريشيوس",
            "common": "موريشيوس"
        },
        "ces": {
            "official": "Mauricijská republika",
            "common": "Mauricius"
        },
        "cym": {
            "official": "Republic of Mauritius",
            "common": "Mauritius"
        },
        "deu": {
            "official": "Republik Mauritius",
            "common": "Mauritius"
        },
        "est": {
            "official": "Mauritiuse Vabariik",
            "common": "Mauritius"
        },
        "fin": {
            "official": "Mauritiuksen tasavalta",
            "common": "Mauritius"
        },
        "fra": {
            "official": "République de Maurice",
            "common": "Île Maurice"
        },
        "hrv": {
            "official": "Republika Mauricijus",
            "common": "Mauricijus"
        },
        "hun": {
            "official": "Mauritiusi Köztársaság",
            "common": "Mauritius"
        },
        "ita": {
            "official": "Repubblica di Mauritius",
            "common": "Mauritius"
        },
        "jpn": {
            "official": "モーリシャス共和国",
            "common": "モーリシャス"
        },
        "kor": {
            "official": "모리셔스 공화국",
            "common": "모리셔스"
        },
        "nld": {
            "official": "Republiek Mauritius",
            "common": "Mauritius"
        },
        "per": {
            "official": "جمهوری موریس",
            "common": "موریس"
        },
        "pol": {
            "official": "Republika Mauritiusu",
            "common": "Mauritius"
        },
        "por": {
            "official": "República das Maurícias",
            "common": "Maurício"
        },
        "rus": {
            "official": "Республика Маврикий",
            "common": "Маврикий"
        },
        "slk": {
            "official": "Maurícijská republika",
            "common": "Maurícius"
        },
        "spa": {
            "official": "República de Mauricio",
            "common": "Mauricio"
        },
        "swe": {
            "official": "Republiken Mauritius",
            "common": "Mauritius"
        },
        "urd": {
            "official": "جمہوریہ موریشس",
            "common": "موریشس"
        },
        "zho": {
            "official": "毛里求斯共和国",
            "common": "毛里求斯"
        }
    },
    "latlng": [
        -20.28333333,
        57.55
    ],
    "landlocked": false,
    "area": 2040,
    "demonyms": {
        "eng": {
            "f": "Mauritian",
            "m": "Mauritian"
        },
        "fra": {
            "f": "Mauricienne",
            "m": "Mauricien"
        }
    },
    "flag": "🇲🇺",
    "maps": {
        "googleMaps": "https://goo.gl/maps/PpKtZ4W3tir5iGrz7",
        "openStreetMaps": "https://www.openstreetmap.org/relation/535828"
    },
    "population": 1265740,
    "gini": {
        "2017": 36.8
    },
    "fifa": "MRI",
    "car": {
        "signs": [
            "MS"
        ],
        "side": "left"
    },
    "timezones": [
        "UTC+04:00"
    ],
    "continents": [
        "Africa"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/mu.png",
        "svg": "https://flagcdn.com/mu.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/mu.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/mu.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            -20.15,
            57.48
        ]
    }
}

let v1 = myFavoriteCountry.tld [0]
console.log(v1)

let v2 = myFavoriteCountry.name.nativeName.fra.official
console.log(v2)

let v3 = myFavoriteCountry.idd.suffixes[3]
console.log(v3)
