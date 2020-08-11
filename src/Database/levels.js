const levels = [
    {}, //not used level ("level 0")
    {
        "level": "1",
        "levelTimeInSec": 4,
        numbers: [
            /*{
                "leftNr": "4",
                "rightNr": "5",
                "arithmetic": "+"
            },*/
            {
                "leftNr": "9",
                "rightNr": "3",
                "arithmetic": "+"
            }

        ]

    },
    {
        "level": "2",
        "levelTimeInSec": 4,
        numbers: [
            {
                "leftNr": "4",
                "rightNr": "5",
                "arithmetic": "-"
            },
            {
                "leftNr": "9",
                "rightNr": "3",
                "arithmetic": "-"
            }

        ]

    },
    {
        "level": "3",
        "levelTimeInSec": 4,
        numbers: [
            {
                "leftNr": "4",
                "rightNr": "5",
                "arithmetic": "*"
            },
            {
                "leftNr": "9",
                "rightNr": "3",
                "arithmetic": "/"
            }

        ]

    }
]
export default levels;