response = {
  "agencies":
    [{
    "code":       "SWISSRAILWAYS",
    "name":       "Swiss Railways (SBB/CFF/FFS)",
    "url":        "http://www.sbb.ch",
    "iconPath":   "/logos/trains/ch.png",
    "iconSize":   "27,23",
    "iconOffset": "0,0"
    }],
  "routes":
    [{
    "name":     "Train",
    "distance": 95.92,
    "duration": 56,
    "stops":
      [{
      "name": "Bern",
      "pos":  "46.94926,7.43883",
      "kind": "station"
      },{
      "name": "Zürich HB",
      "pos":  "47.37819,8.54019",
      "kind": "station"
      }],
    "segments":
      [{
      "kind":     "train",
      "subkind":     "train",
      "isMajor":  1,
      "distance": 95.92,
      "duration": 56,
      "sName":    "Bern",
      "sPos":     "46.94938,7.43927",
      "tName":    "Zürich HB",
      "tPos":     "47.37819,8.54019",
      "path":     "{wp}Gu{kl@wb@uVo|AqiDyoBhUibDeiDc`AsmDaxBqk@wwA...",
      "indicativePrice":{
        "price":45,
        "currency":"USD",
        "isFreeTransfer":0,
        "nativePrice":40,
        "nativeCurrency":"CHF"
      },
      "itineraries":
        [{
        "legs":
          [{
          "url": "http://fahrplan.sbb.ch/bin/query.exe/en...",
          "hops":
            [{
            "distance":  95.92,
            "duration":  56,
            "sName":     "Bern",
            "sPos":      "46.94938,7.43927",
            "tName":     "Zürich HB",
            "tPos":      "47.37819,8.54019",
            "frequency": 400,
            "indicativePrice":{
              "price":45,
              "currency":"USD",
              "isFreeTransfer":0,
              "nativePrice":40,
              "nativeCurrency":"CHF"
            },
            "lines":
              [{
              "name":      "",
              "vehicle":   "train",
              "agency":    "SWISSRAILWAYS",
              "frequency": 400,
              "duration":  57,
              }]
            }]
          }]
        }]
      }]
    }]
  }
