const levels = [
    {}, //not used level ("level 0")
    {
        "level": "1",
        "levelTimeInSec": 4,
        numbers: {
            "leftNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "+",
            "rightNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        "level": "2",
        "levelTimeInSec": 20,
        numbers: {
            "leftNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "-",
            "rightNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        "level": "3",
        "levelTimeInSec": 20,
        numbers: {
            "leftNrs": [2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "*",
            "rightNrs": [2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        "level": "4",
        "levelTimeInSec": 20,
        numbers: {
            "leftNrs": [2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "/",
            "rightNrs": [2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
]
export default levels;