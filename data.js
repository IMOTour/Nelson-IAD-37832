var APP_DATA = {
  "scenes": [
    {
      "id": "0-road",
      "name": "Road",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3524933890062592,
        "pitch": -0.08650121768580377,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.2366742254982874,
          "pitch": -0.09311613517938966,
          "rotation": 0,
          "target": "1-patio"
        },
        {
          "yaw": -0.300125427580916,
          "pitch": -0.095560280259253,
          "rotation": 3.9269908169872414,
          "target": "2-patio-corner"
        },
        {
          "yaw": -2.1069484205910083,
          "pitch": -0.5595852601193112,
          "rotation": 3.141592653589793,
          "target": "7-top-storage2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13706452755450194,
          "pitch": 0.02344736710164952,
          "title": "Bus stop",
          "text": "5 minutes to city centre"
        }
      ]
    },
    {
      "id": "1-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9389057854952316,
        "pitch": 0.011533495691434581,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.8957345050469314,
          "pitch": -0.4397202624255687,
          "rotation": 3.141592653589793,
          "target": "7-top-storage2"
        },
        {
          "yaw": -2.5017465970725254,
          "pitch": 0.2987908942956814,
          "rotation": 0,
          "target": "0-road"
        },
        {
          "yaw": 2.6334594685538377,
          "pitch": -0.039534393093857645,
          "rotation": 3.141592653589793,
          "target": "2-patio-corner"
        },
        {
          "yaw": 1.7124318341913263,
          "pitch": 0.047851314867148886,
          "rotation": 0,
          "target": "3-shop-1"
        },
        {
          "yaw": 0.2941444337572747,
          "pitch": -0.04004980419152915,
          "rotation": 3.141592653589793,
          "target": "6-patio-storage"
        },
        {
          "yaw": 1.288997521477322,
          "pitch": 0.05474395477087057,
          "rotation": 0,
          "target": "5-shop-3"
        },
        {
          "yaw": -0.7893264260243242,
          "pitch": 0.09221749415532088,
          "rotation": 0,
          "target": "8-side-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-patio-corner",
      "name": "Patio-corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0683556428516106,
          "pitch": 0.18236248610402583,
          "rotation": 3.141592653589793,
          "target": "1-patio"
        },
        {
          "yaw": 0.47215702998159337,
          "pitch": -0.23122837366013016,
          "rotation": 3.141592653589793,
          "target": "7-top-storage2"
        },
        {
          "yaw": -0.12121535176287779,
          "pitch": 0.09254672511457507,
          "rotation": 3.141592653589793,
          "target": "0-road"
        },
        {
          "yaw": 2.0309016013552057,
          "pitch": 0.07871283242631222,
          "rotation": 1.5707963267948966,
          "target": "3-shop-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-shop-1",
      "name": "Shop-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2447555189421351,
          "pitch": -0.017557540532191496,
          "rotation": 1.5707963267948966,
          "target": "1-patio"
        },
        {
          "yaw": 1.2967555946337335,
          "pitch": 0.0269017876930171,
          "rotation": 0,
          "target": "4-shop-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9975057904726103,
          "pitch": 0.1911754120793674,
          "title": "Title",
          "text": "Side road access"
        }
      ]
    },
    {
      "id": "4-shop-2",
      "name": "Shop-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1073582508860937,
        "pitch": 0.16641186640509353,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 2.246605063971826,
          "pitch": -0.0013710012923180415,
          "rotation": 0,
          "target": "3-shop-1"
        },
        {
          "yaw": -2.1649355893382456,
          "pitch": 0.037463873378946744,
          "rotation": 0,
          "target": "5-shop-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-shop-3",
      "name": "Shop-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3386411903192297,
          "pitch": -0.02336124359767311,
          "rotation": 0,
          "target": "4-shop-2"
        },
        {
          "yaw": -0.7289783590113537,
          "pitch": -0.01112141112481524,
          "rotation": 0,
          "target": "3-shop-1"
        },
        {
          "yaw": 0.8805611332052763,
          "pitch": -0.06209044053743007,
          "rotation": 0,
          "target": "1-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio-storage",
      "name": "Patio-storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.397388920529547,
          "pitch": 0.2029376520691457,
          "rotation": 3.141592653589793,
          "target": "1-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6540680527115939,
          "pitch": -0.04032261694414885,
          "title": "Title",
          "text": "Chicken cup"
        },
        {
          "yaw": 2.4062541321499182,
          "pitch": -0.026603973780385815,
          "title": "Title",
          "text": "Storage"
        }
      ]
    },
    {
      "id": "7-top-storage2",
      "name": "Top-storage2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9637065246872005,
          "pitch": 0.12848773108426137,
          "rotation": 2.356194490192345,
          "target": "1-patio"
        },
        {
          "yaw": 2.086912807298688,
          "pitch": 0.0913997863776963,
          "rotation": 3.141592653589793,
          "target": "0-road"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-side-patio",
      "name": "Side patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21386379968026326,
          "pitch": 0.003537271881159043,
          "rotation": 3.141592653589793,
          "target": "1-patio"
        },
        {
          "yaw": -1.4507486948175359,
          "pitch": -0.16325915702119076,
          "rotation": 0,
          "target": "9-top-of-patio-storage"
        },
        {
          "yaw": -2.349168049337841,
          "pitch": -0.37036802129857094,
          "rotation": 1.5707963267948966,
          "target": "10-house2"
        },
        {
          "yaw": 2.6220506926947653,
          "pitch": 0.04667144861904404,
          "rotation": 7.0685834705770345,
          "target": "12-main-door"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2084982887824367,
          "pitch": -0.0014151356787159841,
          "title": "Title",
          "text": "Large storage/house"
        }
      ]
    },
    {
      "id": "9-top-of-patio-storage",
      "name": "Top of patio-storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1590907512296962,
          "pitch": 0.20747127167034307,
          "rotation": 3.141592653589793,
          "target": "2-patio-corner"
        },
        {
          "yaw": -1.488872867933381,
          "pitch": 0.05973898415993517,
          "rotation": 0,
          "target": "11-house2-inside"
        },
        {
          "yaw": -2.841230459730536,
          "pitch": 0.2512316453884136,
          "rotation": 3.9269908169872414,
          "target": "8-side-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-house2",
      "name": "House2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4377603283957647,
          "pitch": 0.01308400364438711,
          "rotation": 4.71238898038469,
          "target": "11-house2-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-house2-inside",
      "name": "House2-inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04053002407060191,
          "pitch": -0.01286197738878414,
          "rotation": 0.7853981633974483,
          "target": "9-top-of-patio-storage"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7283651452246929,
          "pitch": 0.012971602668981674,
          "title": "Title",
          "text": "Old kitchen"
        }
      ]
    },
    {
      "id": "12-main-door",
      "name": "Main door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7891078417485584,
        "pitch": 0.028973842769085323,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 0.18255243572584767,
          "pitch": -0.0852235033427533,
          "rotation": 0,
          "target": "10-house2"
        },
        {
          "yaw": 1.122963076649329,
          "pitch": 0.10034918650845448,
          "rotation": 0,
          "target": "1-patio"
        },
        {
          "yaw": -1.5406484419503457,
          "pitch": -0.07100936094185073,
          "rotation": 0,
          "target": "13-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4100804557262823,
        "pitch": 0.005766747845715514,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.4354028004946926,
          "pitch": -0.07007968491144823,
          "rotation": 1.5707963267948966,
          "target": "14-wc"
        },
        {
          "yaw": -2.128139412021813,
          "pitch": 0.0522201153669446,
          "rotation": 0,
          "target": "15-sitting"
        },
        {
          "yaw": 0.9715440571075096,
          "pitch": 0.049849224601510755,
          "rotation": 0,
          "target": "12-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1328961536971178,
        "pitch": 0.2519753430745695,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 2.90469498422906,
          "pitch": 0.046241024542466036,
          "rotation": 0,
          "target": "13-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sitting",
      "name": "Sitting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6769247471973348,
          "pitch": 0.03800541755252951,
          "rotation": 0,
          "target": "13-corridor"
        },
        {
          "yaw": 1.379383640518288,
          "pitch": 0.13900397041613743,
          "rotation": 3.141592653589793,
          "target": "26-sitting-stairs-corner"
        },
        {
          "yaw": -2.661784405888966,
          "pitch": 0.038721331575274576,
          "rotation": 4.71238898038469,
          "target": "16-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6962817414498783,
        "pitch": 0.16146893968019072,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 1.004929075275724,
          "pitch": 0.04781655732974599,
          "rotation": 0,
          "target": "15-sitting"
        },
        {
          "yaw": -2.964101667948464,
          "pitch": -0.09016694279029736,
          "rotation": 4.71238898038469,
          "target": "17-kitchen-corridor"
        },
        {
          "yaw": -1.9598141204158495,
          "pitch": 0.05013968047544637,
          "rotation": 5.497787143782138,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-kitchen-corridor",
      "name": "Kitchen corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7162610133718026,
          "pitch": -0.012460407574927501,
          "rotation": 0,
          "target": "16-corridor-2"
        },
        {
          "yaw": -2.1834930254298293,
          "pitch": 0.1370264333639284,
          "rotation": 0,
          "target": "18-wc"
        },
        {
          "yaw": -0.48341855636545006,
          "pitch": 0.03810562929426453,
          "rotation": 0,
          "target": "19-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9812391695583909,
          "pitch": -0.05483746209614537,
          "rotation": 0,
          "target": "17-kitchen-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6242410593224932,
          "pitch": -0.038163640352166794,
          "rotation": 17.27875959474387,
          "target": "17-kitchen-corridor"
        },
        {
          "yaw": -2.431596644318038,
          "pitch": 0.011847680225521628,
          "rotation": 0,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0514168372611579,
          "pitch": -0.01817357050752122,
          "rotation": 4.71238898038469,
          "target": "19-kitchen"
        },
        {
          "yaw": 2.0243827665319145,
          "pitch": -0.06601428413052446,
          "rotation": 1.5707963267948966,
          "target": "21-storage-attic-access"
        },
        {
          "yaw": -0.45745810426369005,
          "pitch": 0.003247552067280779,
          "rotation": 0,
          "target": "22-bed1"
        },
        {
          "yaw": -1.7120748531153787,
          "pitch": -0.009062442419933703,
          "rotation": 0,
          "target": "16-corridor-2"
        },
        {
          "yaw": 3.1106799375673884,
          "pitch": -0.0012070465777718198,
          "rotation": 1.5707963267948966,
          "target": "23-bed2"
        },
        {
          "yaw": 2.83564100329067,
          "pitch": -0.02918878549930959,
          "rotation": 4.71238898038469,
          "target": "25-bed3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-storage-attic-access",
      "name": "Storage-attic access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.360974384562958,
          "pitch": 0.13913142147236357,
          "rotation": 0,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bed1",
      "name": "Bed1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.07474516787501528,
        "pitch": 0.32516118150282836,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 1.319554160122287,
          "pitch": 0.16377030278296445,
          "rotation": 0,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bed2",
      "name": "Bed2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.062166378429886,
        "pitch": 0.2806934822630609,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.332655253569115,
          "pitch": -0.03934919912473589,
          "rotation": 0,
          "target": "24-bed2-side-room"
        },
        {
          "yaw": 2.9025716038207303,
          "pitch": 0.03777951317620776,
          "rotation": 0,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bed2-side-room",
      "name": "Bed2-side room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4508700214121806,
        "pitch": 0.08361784376295134,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -0.04235722644629014,
          "pitch": -0.050547754168668746,
          "rotation": 0,
          "target": "23-bed2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bed3",
      "name": "Bed3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0567678979582666,
        "pitch": 0.29488483139653,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.9072743814927549,
          "pitch": -0.07794959730646589,
          "rotation": 0,
          "target": "20-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-sitting-stairs-corner",
      "name": "Sitting-stairs corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8930399910846969,
        "pitch": 0.05187890832691089,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -2.2594078767355636,
          "pitch": 0.7360531993049602,
          "rotation": 7.853981633974483,
          "target": "27-downstairs"
        },
        {
          "yaw": -0.8640820519343642,
          "pitch": 0.17369664297653564,
          "rotation": 3.141592653589793,
          "target": "15-sitting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-downstairs",
      "name": "Downstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5973508864882895,
        "pitch": 0.04905788423783086,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 0.2803066678321251,
          "pitch": -0.2563259630100383,
          "rotation": 5.497787143782138,
          "target": "26-sitting-stairs-corner"
        },
        {
          "yaw": 1.1400428022735696,
          "pitch": -0.03423791491329453,
          "rotation": 4.71238898038469,
          "target": "28-rear-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-rear-entrance",
      "name": "Rear entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5787734523966233,
          "pitch": -0.05752665761761122,
          "rotation": 0.7853981633974483,
          "target": "27-downstairs"
        },
        {
          "yaw": -2.67113974130886,
          "pitch": -0.04069333257052321,
          "rotation": 0,
          "target": "29-old-winery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-old-winery",
      "name": "Old winery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8102731277002899,
        "pitch": 0.14450886887745185,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 1.747548514516759,
          "pitch": -0.01928222600311358,
          "rotation": 0.7853981633974483,
          "target": "30-inside-wine-press"
        },
        {
          "yaw": 0.17241824654173143,
          "pitch": 0.07208883508226727,
          "rotation": 9.42477796076938,
          "target": "31-old-wine-tanks"
        },
        {
          "yaw": 0.8043529465195256,
          "pitch": 0.371211006978605,
          "rotation": 0,
          "target": "32-wine-store"
        },
        {
          "yaw": -1.8182238382258795,
          "pitch": -0.30913133828720696,
          "rotation": 4.71238898038469,
          "target": "28-rear-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-inside-wine-press",
      "name": "Inside wine press",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2430008399872037,
        "pitch": 0.09516467389424221,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 1.282179640168085,
          "pitch": -0.11515212947271003,
          "rotation": 0,
          "target": "29-old-winery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-old-wine-tanks",
      "name": "Old wine tanks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2976360856065554,
        "pitch": 0.11533495691441686,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": -1.3004654214104399,
          "pitch": -0.20677535038530337,
          "rotation": 0,
          "target": "28-rear-entrance"
        },
        {
          "yaw": -1.6353105341969432,
          "pitch": -0.16165978198022302,
          "rotation": 4.71238898038469,
          "target": "30-inside-wine-press"
        },
        {
          "yaw": 2.1385508797222377,
          "pitch": 0.056265400177611724,
          "rotation": 0,
          "target": "32-wine-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-wine-store",
      "name": "Wine store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.915447253590143,
        "pitch": 0.25100357605054135,
        "fov": 1.5310715530388979
      },
      "linkHotspots": [
        {
          "yaw": 0.13493160233294432,
          "pitch": -0.2912957163395813,
          "rotation": 0,
          "target": "31-old-wine-tanks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.317178594409512,
          "pitch": 0.059367856796274765,
          "title": "Title",
          "text": "Road acces"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
