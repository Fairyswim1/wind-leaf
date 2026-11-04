export const levels=[
  {
    "id": 1,
    "title": "첫 잎의 자리",
    "stems": [
      1,
      2
    ],
    "quotas": [
      2,
      2
    ],
    "sends": 0,
    "deck": [
      12,
      15,
      21,
      23
    ],
    "lesson": "십의 자리는 줄기, 일의 자리는 잎이에요.",
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "같은 잎 두 장",
    "stems": [
      1,
      2
    ],
    "quotas": [
      3,
      2
    ],
    "sends": 0,
    "deck": [
      12,
      12,
      21,
      16,
      25
    ],
    "lesson": "같은 값도 각각 한 장씩 놓아요.",
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      }
    ]
  },
  {
    "id": 3,
    "title": "기다리는 작은 잎",
    "stems": [
      1,
      2
    ],
    "quotas": [
      3,
      3
    ],
    "sends": 0,
    "deck": [
      18,
      21,
      22,
      11,
      14,
      26
    ],
    "lesson": "다른 줄기를 채우면 기다리던 작은 카드가 들어와요.",
    "solution": [
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      }
    ]
  },
  {
    "id": 4,
    "title": "바람의 틈",
    "stems": [
      1,
      2
    ],
    "quotas": [
      3,
      3
    ],
    "sends": 1,
    "deck": [
      11,
      16,
      27,
      11,
      26,
      22,
      10
    ],
    "lesson": "큰 잎을 먼저 놓으면 뒤의 작은 잎을 놓을 수 없어요.",
    "evidence": {
      "smallestGreedyWins": true,
      "largestGreedyWins": false,
      "sendsUsed": 0
    },
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      }
    ]
  },
  {
    "id": 5,
    "title": "먼저 보낼 잎",
    "stems": [
      1,
      2
    ],
    "quotas": [
      3,
      3
    ],
    "sends": 1,
    "deck": [
      25,
      23,
      18,
      11,
      13,
      20,
      15
    ],
    "lesson": "큰 잎을 먼저 놓으면 뒤의 작은 잎을 놓을 수 없어요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "send",
        "card": 2
      },
      {
        "kind": "place",
        "card": 2,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      }
    ]
  },
  {
    "id": 6,
    "title": "서로 다른 세 줄기",
    "stems": [
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3
    ],
    "sends": 1,
    "deck": [
      14,
      37,
      17,
      22,
      12,
      30,
      23,
      28,
      17,
      37
    ],
    "lesson": "다음 카드를 보고, 빈자리를 만들 줄기를 골라요.",
    "evidence": {
      "smallestGreedyWins": true,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "send",
        "card": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      }
    ]
  },
  {
    "id": 7,
    "title": "두 번의 기다림",
    "stems": [
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      25,
      36,
      32,
      32,
      26,
      23,
      14,
      12,
      13,
      14
    ],
    "lesson": "다음 카드를 보고, 빈자리를 만들 줄기를 골라요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 2,
        "row": 2
      },
      {
        "kind": "place",
        "card": 2,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 2,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "send",
        "card": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      }
    ]
  },
  {
    "id": 8,
    "title": "아껴 둔 빈자리",
    "stems": [
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      12,
      28,
      18,
      22,
      33,
      25,
      30,
      17,
      16,
      33
    ],
    "lesson": "다음 카드를 보고, 빈자리를 만들 줄기를 골라요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "send",
        "card": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 2,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      }
    ]
  },
  {
    "id": 9,
    "title": "겹쳐진 잎맥",
    "stems": [
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      32,
      24,
      16,
      21,
      22,
      13,
      33,
      36,
      12,
      12
    ],
    "lesson": "다음 카드를 보고, 빈자리를 만들 줄기를 골라요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "send",
        "card": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      }
    ]
  },
  {
    "id": 10,
    "title": "길을 여는 선택",
    "stems": [
      0,
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      13,
      12,
      3,
      26,
      26,
      35,
      34,
      35,
      17,
      7,
      2,
      4,
      26
    ],
    "lesson": "보내기 횟수를 아껴 모든 줄기의 자리를 채워요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "send",
        "card": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      }
    ]
  },
  {
    "id": 11,
    "title": "마지막 우편",
    "stems": [
      0,
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      8,
      5,
      4,
      32,
      32,
      18,
      15,
      36,
      27,
      5,
      21,
      15,
      27
    ],
    "lesson": "보내기 횟수를 아껴 모든 줄기의 자리를 채워요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "send",
        "card": 0
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 3
      },
      {
        "kind": "place",
        "card": 2,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      }
    ]
  },
  {
    "id": 12,
    "title": "바람의 도감",
    "stems": [
      0,
      1,
      2,
      3
    ],
    "quotas": [
      3,
      3,
      3,
      3
    ],
    "sends": 2,
    "deck": [
      23,
      1,
      24,
      31,
      25,
      7,
      6,
      36,
      6,
      14,
      30,
      17,
      18
    ],
    "lesson": "보내기 횟수를 아껴 모든 줄기의 자리를 채워요.",
    "evidence": {
      "smallestGreedyWins": false,
      "largestGreedyWins": false,
      "sendsUsed": 1
    },
    "solution": [
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 0,
        "row": 0
      },
      {
        "kind": "place",
        "card": 0,
        "row": 2
      },
      {
        "kind": "place",
        "card": 1,
        "row": 2
      },
      {
        "kind": "send",
        "card": 1
      },
      {
        "kind": "place",
        "card": 1,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 0
      },
      {
        "kind": "place",
        "card": 2,
        "row": 1
      },
      {
        "kind": "place",
        "card": 2,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 3
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      },
      {
        "kind": "place",
        "card": 0,
        "row": 1
      }
    ]
  }
];
