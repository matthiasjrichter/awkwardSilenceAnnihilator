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

];

let otherQuestions = [
    "If you could have a superpower, what woould it be?",
    "If you could have dinner with any historical figure, who would it be?",
    "If you could instantly master one skill, what would it be?",
    "What is the best piece of advice you've ever received?",
    "If you had to live in a different time period, which one would you choose?"
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
    if (Math.random() < 0.5 && remainingCategories.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingCategories.length);
        const selectedCategory = remainingCategories.splice(randomIndex, 1)[0];
        question = `What is your favorite ${selectedCategory}?`;
    } else if (remainingOtherQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingOtherQuestions.length);
        question = remainingOtherQuestions.splice(randomIndex, 1)[0];
    }

    document.getElementById("question").textContent = question;
}
