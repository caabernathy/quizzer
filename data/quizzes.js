module.exports = [
   {
    id: 10,
    name: "Math",
    subcategories: [
      {
        id: 101,
        name: "Algebra",
        questions: [
          {
            id: 1001,
            question: "4x = 3x + 5",
            prompt: "What is x?",
            answers: ["0", "5", "10", "7"],
            answer_index: 1,
          },
          {
            id: 1002,
            question: "4x = x + 9",
            prompt: "What is x?",
            answers: ["10", "2", "3", "11"],
            answer_index: 2,
          },
          {
            id: 1003,
            question: "5x = x + 4",
            prompt: "What is x?",
            answers: ["1", "2", "4", "3"],
            answer_index: 0,
          },
        ],
      },
      {
        id: 201,
        name: "Addition",
        questions: [
          {
            id: 2001,
            question: "1 + 1",
            prompt: "",
            answers: ["3", "10", "5", "2"],
            answer_index: 3,
          },
          {
            id: 2002,
            question: "5 + 3",
            prompt: "",
            answers: ["8", "7", "12", "20"],
            answer_index: 0,
          },
          {
            id: 2003,
            question: "13 + 6",
            prompt: "",
            answers: ["20", "17", "19", "20"],
            answer_index: 2,
          },
        ],
      },
      {
        id: 301,
        name: "Subtraction",
        questions: [
          {
            id: 3001,
            question: "6 - 2",
            prompt: "",
            answers: ["1", "0", "4", "3"],
            answer_index: 2,
          },
          {
            id: 3002,
            question: "25 - 9",
            prompt: "",
            answers: ["20", "16", "11", "14"],
            answer_index: 1,
          },
        ],
      },
    ]
  },
  {
    id: 20,
    name: "History",
    subcategories: [
      {
        id: 401,
        name: "Ancient History",
        questions: [
          {
            id: 4001,
            question: "What great event occurred in the year 776 B.C. in Europe?",
            prompt: "",
            answers: [
              "Spanish Civil War",
              "Second World War",
              "Assassination of Julius Caesar",
              "Olympic Games",
            ],
            answer_index: 3,
          },
          {
            id: 4002,
            question: "What is the name for the writing system of the ancient Egyptians?",
            prompt: "",
            answers: [
              "Hieroglyphics",
              "Cuneiform",
              "Kojiki",
              "Sanskrit",
            ],
            answer_index: 0,
          },
          {
            id: 4003,
            question: "The first King of Israel was Saul around 10,000 BC. Who were the next two?",
            prompt: "",
            answers: [
              "David then Caesar",
              "Solomon then Abraham",
              "Herod then Ahab",
              "David then Solomon",
            ],
            answer_index: 3,
          },
          {
            id: 4004,
            question: "What is the name of this kingdom that was later called Sultanate Sokoto?",
            prompt: "",
            answers: [
              "Yorubaland",
              "Fulah (Fulani)",
              "Asante (Ashanti)",
              "Oyo",
            ],
            answer_index: 1,
          },
        ],
      },
      {
        id: 502,
        name: "Modern History",
        questions: [
          {
            id: 5001,
            question: "Which country declared war on Britain and France on June 10, 1940?",
            prompt: "",
            answers: [
              "Germany",
              "Russia",
              "Italy",
              "Morocco",
            ],
            answer_index: 2,
          },
          {
            id: 5002,
            question: "Which Egyptian king did Gamel Abdel Nasser overthrow in a military coup in 1952?",
            prompt: "",
            answers: [
              "King Hassan",
              "King Mswati",
              "King Abdelaziz",
              "King Farouk",
            ],
            answer_index: 3,
          },
          {
            id: 5003,
            question: "Who was the first African woman to win a Nobel prize?",
            prompt: "",
            answers: [
              "Fatmata Conteth",
              "Wangari Maathai",
              "Anna Tiabaijuka",
              "Eileen Johnson Sirleaf",
            ],
            answer_index: 1,
          },
        ],
      },
    ]
  },
  {
    id: 30,
    name: "Biology",
    subcategories: [
      {
        id: 301,
        name: "Mammals",
        questions: [
          {
            id: 7001,
            question: "Which animal has the longest neck?",
            prompt: "",
            type: "image",
            answers: ["gorilla", "giraffe", "tiger", "elephant"],
            answer_index: 1,
          },
          {
            id: 7002,
            question: "Which of the following animals have incisors that continue to grow its entire life?",
            prompt: "",
            type: "image",
            answers: ["walrus", "elephant", "hamster", "lion"],
            answer_index: 2,
          },
        ],
      },
    ]
  },
];
