const questionsAndAnswers = [
    {
      question:
        "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
      answerOptions: [
        { answer: "4", isCorrect: false },
        { answer: "5", isCorrect: true },
        { answer: "6", isCorrect: false },
        { answer: "3", isCorrect: false }
      ]
    },
    {
      question:
        "Who is the first character in the series to be called 'King in the North'?",
      answerOptions: [
        { answer: "John Snow", isCorrect: false },
        { answer: "Rob Stark", isCorrect: true },
        { answer: "Edmure Tully", isCorrect: false },
        { answer: "Ned Stark", isCorrect: false }
      ]
    },
    {
      question: "Dead creatures revived by White Walkers are known as:",
      answerOptions: [
        { answer: "Zombies", isCorrect: false },
        { answer: "Claws", isCorrect: false },
        { answer: "Walkers", isCorrect: false },
        { answer: "Wights", isCorrect: true }
      ]
    },
    {
      question: "Which of these Westeros couples is a couple off screen as well?",
      answerOptions: [
        { answer: "Richard Madden and Oona Chaplin", isCorrect: false },
        { answer: "Emilia Clarke and Michiel Huisman", isCorrect: false },
        { answer: "Nikolaj Coster-Waldau and Lena Headey", isCorrect: false },
        { answer: "Kit Harrington and Rose Leslie", isCorrect: true }
      ]
    },
    {
      question: "What is the name of Arya's direwolf?",
      answerOptions: [
        { answer: "Nymeria", isCorrect: true },
        { answer: "Lady", isCorrect: false },
        { answer: "Ghost", isCorrect: false },
        { answer: "Gray Wind", isCorrect: false }
      ]
    },
    {
      question: "Which house has a rose as its sigil?",
      answerOptions: [
        { answer: "Lannister", isCorrect: false },
        { answer: "Tyrell", isCorrect: true },
        { answer: "Tully", isCorrect: false },
        { answer: "Greyjoy", isCorrect: false }
      ]
    },
    {
      question: "Who is executed via molten gold?",
      answerOptions: [
        { answer: "Khal Drogo", isCorrect: false },
        { answer: "Robert Baratheon", isCorrect: false },
        { answer: "Viserys Targaryen", isCorrect: true },
        { answer: "Tywin Lannister", isCorrect: false }
      ]
    },
    {
      question: "Who is Sansa Stark's first fiancé?",
      answerOptions: [
        { answer: "Tommen Baratheon", isCorrect: false },
        { answer: "Loras Tyrell", isCorrect: false },
        { answer: "Tyrion Lannister", isCorrect: false },
        { answer: "Joffrey Baratheon", isCorrect: true }
      ]
    },
    {
      question: "What is Jon Snow's real name?",
      answerOptions: [
        { answer: "Rhaegar", isCorrect: false },
        { answer: "Aerys", isCorrect: false },
        { answer: "Aegon", isCorrect: true },
        { answer: "Jon", isCorrect: false }
      ]
    },
    {
      question: "Who rules the Iron Islands when the series begins?",
      answerOptions: [
        { answer: "Theon Greyjoy", isCorrect: false },
        { answer: "Balon Greyjoy", isCorrect: true },
        { answer: "Robert Baratheon", isCorrect: false },
        { answer: "Viserys Targaryen", isCorrect: false }
      ]
    },
    {
      question:
        "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
      answerOptions: [
        { answer: "Valar Dohaeris or 'all men must serve'", isCorrect: true },
        { answer: "Valar Rohnas or 'all men must live'", isCorrect: false },
        { answer: "Valar GoGo or 'all men must dance'", isCorrect: false },
        { answer: "Valar Dohres or 'all men must fight'", isCorrect: false }
      ]
    },
    {
      question:
        "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
      answerOptions: [
        { answer: "Weirwood", isCorrect: false },
        { answer: "Wildfire", isCorrect: false },
        { answer: "Snowballs", isCorrect: false },
        { answer: "Valyrian Steel", isCorrect: true }
      ]
    },
    {
      question: "Arya's punishment for stealing from the Many-Face God is:",
      answerOptions: [
        { answer: "Death", isCorrect: false },
        { answer: "Memory loss", isCorrect: false },
        { answer: "Blindness", isCorrect: true },
        { answer: "Lock in the room", isCorrect: false }
      ]
    },
    {
      question:
        "What were the first words King Robert said to Ned Stark in episode one of season one?",
      answerOptions: [
        { answer: "You look old", isCorrect: false },
        { answer: "You've got fat", isCorrect: true },
        { answer: "Your hair looks terrible", isCorrect: false },
        { answer: "You've not changed", isCorrect: false }
      ]
    },
    {
      question:
        "Who said: 'Go drink until it feels like you did the right thing'?",
      answerOptions: [
        { answer: "Tyrion Lannister", isCorrect: false },
        { answer: "Varys", isCorrect: false },
        { answer: "Lady Arryn", isCorrect: false },
        { answer: "Bronn", isCorrect: true }
      ]
    },
    {
      question: "Grey Worm is the leader of which group?",
      answerOptions: [
        { answer: "The Unthanks", isCorrect: false },
        { answer: "The Undertones", isCorrect: false },
        { answer: "The Unsullied", isCorrect: true },
        { answer: "The Unjust", isCorrect: false }
      ]
    },
    {
      question: "Dany’s dragons or were called Drogon, Viserion and ___? ",
      answerOptions: [
        { answer: "Rhaegal", isCorrect: true },
        { answer: "Vhgar", isCorrect: false },
        { answer: "Dougal", isCorrect: false },
        { answer: "Balerion", isCorrect: false }
      ]
    },
    {
      question:
        "Where is the House of Black and White,the training temple of the Faceless Men?",
      answerOptions: [
        { answer: "Quarth", isCorrect: false },
        { answer: "Mereen", isCorrect: false },
        { answer: "Braavos", isCorrect: true },
        { answer: "Red Keep", isCorrect: false }
      ]
    },
    {
      question: "What is the name of Arya’s sword?",
      answerOptions: [
        { answer: "Ice", isCorrect: false },
        { answer: "Pointy", isCorrect: false },
        { answer: "Fang", isCorrect: false },
        { answer: "Needle", isCorrect: true }
      ]
    },
    {
      question: "Who said 'You're shit at dying, aren't you?'",
      answerOptions: [
        { answer: "King Robert", isCorrect: false },
        { answer: "Jaime Lannister", isCorrect: false },
        { answer: "The Hound", isCorrect: true },
        { answer: "Bronn", isCorrect: false }
      ]
    }
  ];
  
  export default questionsAndAnswers;
  