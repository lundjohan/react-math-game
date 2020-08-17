const levels = [
    {
        "level": "1",
        "levelTimeInSec": 50,
        numbers: {
            "leftNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "+",
            "rightNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        "level": "2",
        "levelTimeInSec": 50,
        numbers: {
            "leftNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "-",
            "rightNrs": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        "level": "3",
        "levelTimeInSec": 50,
        numbers: {
            "leftNrs": [2, 3, 4, 5, 6, 7, 8, 9],
            "arithmetic": "*",
            "rightNrs": [2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    //NB. Division works different than the others. Here leftNr[x] is multiplied with rightNr[x]and the result will be returned as leftNr
    {
        "level": "4",
        "levelTimeInSec": 50,
        numbers: {
            "leftNrs": [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20],
            "arithmetic": "/",
            "rightNrs": [2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
]
export default levels;