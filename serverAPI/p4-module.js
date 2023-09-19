const { parse } = require("path");
const { data } = require("./p4-data")

function getQuestions(){
    let questions = [];
    for(const obj of data){
        const { question } = obj;
        questions.push(question);
    }
    return questions;
}

function getAnswers(){
    let answers = [];
    for(const obj of data){
        const { answer } = obj;
        answers.push(answer);
    }
    return answers;
}

function getQuestionsAnswers(){
    return [...data];
}

function getQuestion(number = ""){
    let choiceQuestion = {
        question: "",
        number: "",
        error: ""
    }
    if(1 <= parseInt(number) && parseInt(number) <= data.length){
        choiceQuestion.question = data[number - 1].question;
        choiceQuestion.number = number;
    } else if(typeof(number) !== "number") {
        choiceQuestion.error = "Question number must be an integer"
    } else if(parseInt(number) < 1){
        choiceQuestion.error = "Question number must be >= 1"
    } else {
        choiceQuestion.error = `Question number must be less than number of questions (${data.length})`
    }
    return choiceQuestion;
}

function getAnswer(number = ""){
    let choiceAnswer = {
        answer: "",
        number: "",
        error: ""
    }
    if (1 <= parseInt(number) && parseInt(number) <= data.length) {
      choiceAnswer.answer = data[number - 1].answer;
      choiceAnswer.number = number;
    } else if (typeof number !== "number") {
      choiceAnswer.error = "Answer number must be an integer";
    } else if (parseInt(number) < 1) {
      choiceAnswer.error = "Answer number must be >= 1";
    } else {
      choiceAnswer.error = `Answer number must be less than number of questions (${data.length})`;
    }
    return choiceAnswer;
}

function getQuestionAnswer(number = ""){
    let choiceQuestionAnswer = {
        question: "",
        number: "",
        error: ""
    }
    if (1 <= parseInt(number) && parseInt(number) <= data.length) {
      choiceQuestionAnswer.question = data[number - 1].question;
      choiceQuestionAnswer.answer = data[number - 1].answer;
      choiceQuestionAnswer.number = number;
    } else if (typeof number !== "number") {
      choiceQuestionAnswer.error = "Question number must be an integer";
    } else if (parseInt(number) < 1) {
      choiceQuestionAnswer.error = "Question number must be >= 1";
    } else {
      choiceQuestionAnswer.error = `Question number must be less than number of questions (${data.length})`;
    }
     return choiceQuestionAnswer;
}


function addQuestionAnswer(info = {}) {
    let newResponse = {}
    const { question, answer } = info
    if(question != undefined && answer != undefined){
        let newQuestionAnswer = {}
        newQuestionAnswer.question = question
        newQuestionAnswer.answer = answer
        data.push(newQuestionAnswer)

        newResponse.error = ""
        newResponse.message = "Question added"
        newResponse.number = data.length
    } else if(question === undefined){
        newResponse.error = "Object question property required"
        newResponse.message = ""
        newResponse.number = -1
    } else {
        newResponse.error = "Object answer property required";
        newResponse.message = "";
        newResponse.number = -1;
    }
    return newResponse;
}


function updateQuestionAnswer(info = {}){
    const { number, question, answer } = info
    let message = {}
    if(number > 0 && number <= data.length && question != undefined && answer != undefined){
        let targetObject = data[number -1]
        targetObject.question = question
        targetObject.answer = answer

        message.error = ""
        message.message = `Question ${number} updated`
        message.number = number

    } else if(number === undefined && question === undefined && answer === undefined){
        message.error = "Object question property or answer property required"
        message.message = ""
        message.number = ""
    } else {
        message.error = "Object number property must be a valid integer"
        message.message = ""
        message.number = ""
    }
    return message
}


function deleteQuestionAnswer(info = {}){
    let message = {}
    if(parseInt(info) > 0 && parseInt(info) <= data.length){
        let targetObj = data[info - 1]
        let index = data.indexOf(targetObj)
        data.splice(index, 1)

        message.error = ""
        message.message = `Question ${info} deleted`
        message.number = parseInt(info)
    } else if(!Number.isInteger(parseInt(info))){
        message.error = "Question/answer number must be an integer"
        message.message = ""
        message.number = ""
    } else if(parseInt(info) <= 0){
        message.error = "Question/answer number must be >= 1"
        message.message = ""
        message.number = ""
    } else {
        message.error = `Question/answer number must be less than the number of questions (${data.length})`
        message.message = ""
        message.number = ""
    }
    return message 
}






module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer,
    updateQuestionAnswer,
    deleteQuestionAnswer
}







/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

// :):)


