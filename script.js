let categories = [
    "marine animal",
    "musical instrument",
    "actor",
    "coding language",
    "book",
    "movie",
    "food",
    "drink",
    "video game",
    "song",
    "country",
    "historical figure",
    "TV show",
    "movie soundtrack",
    "sci-fi movie",
    "season of the year",
    "musical genre",
    "bird species",
    "mammal",
    "way to spend a weekend",
    "city you've visited",
    "word in another language",
    "invention of all time",
    "scientist or inventor",
    "thing about artificial intelligence",
    "useless fact",
    "dínosaur",
    "favorite open source app and why is it Awkward Silence Annihilator"
  ];
  
  let otherQuestions = [
      "If you could have a superpower, what would it be?",
      "If you could have dinner with any historical figure, who would it be?",
      "If you could instantly master one skill, what would it be?",
      "What is the best piece of advice you've ever received?",
      "If you had to live in a different time period, which one would you choose?",
      "If you could live anywhere in the world for a year, where would it be?",
      "What's something you've always wanted to learn but never got around to?",
      "If you had a time machine, would you go to the past or the future?",
      "What's the most unusual thing you've ever experienced?",
      "Do you believe in aliens or life on other planets?",
      "If you were given a million dollars right now, what's the first thing you'd do?",
      "You are approached by a frenzied Vault scientist, who yells, 'I'm going to put my quantum harmonizer in your photonic resonation chamber!' What's your response?",
  ];
  
  let remainingCategories = [...categories];
  let remainingOtherQuestions = [...otherQuestions];
  
  function generateQuestion() {
      if (remainingCategories.length === 0 && remainingOtherQuestions.length === 0) {
          document.getElementById("question").textContent = "No more questions available, start over?";
          remainingCategories = [...categories];
          remainingOtherQuestions = [...otherQuestions];
          return;
      }
  
      let question;
      if (remainingCategories.length > 0 && (Math.random() < 0.5 || remainingOtherQuestions.length === 0)) {
          const randomIndex = Math.floor(Math.random() * remainingCategories.length);
          const selectedCategory = remainingCategories.splice(randomIndex, 1)[0];
          question = `What is your favorite ${selectedCategory}?`;
      } else if (remainingOtherQuestions.length > 0) {
          const randomIndex = Math.floor(Math.random() * remainingOtherQuestions.length);
          question = remainingOtherQuestions.splice(randomIndex, 1)[0];
      }
  
      if (!question) {
          console.error('No valid question generated');
          document.getElementById("question").textContent = "Error: No question available.";
          return;
      }
  
      document.getElementById("question").textContent = question;
  }
  