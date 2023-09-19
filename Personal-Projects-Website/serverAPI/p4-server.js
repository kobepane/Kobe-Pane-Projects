const { data } = require("./p4-data");
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer, addQuestionAnswer, updateQuestionAnswer, deleteQuestionAnswer } = require("./p4-module");
const fastify = require("fastify")();


fastify.get("/cit/question", (request, reply) => {
    const questionsObj = {
        error: "",
        statusCode: 200,
        questions: getQuestions(data)
    }
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(questionsObj)
})



fastify.get("/cit/answer", (request, reply) => {
  const answersObj = {
    error: "",
    statusCode: 200,
    answers: getAnswers(data),
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(answersObj);
});



fastify.get("/cit/questionanswer", (request, reply) => {
  const questionsAnswersObj = {
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers()
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionsAnswersObj);
});



fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params
  const questionObj = getQuestion(number)
  questionObj.statusCode = 200;
 
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionObj);
});



fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  const answerObj = getAnswer(number);
  answerObj.statusCode = 200;

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(answerObj);
});



fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const { number } = request.params;
  const questionAnswerObj = getQuestionAnswer(number);
  questionAnswerObj.statusCode = 200;

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionAnswerObj);
});

fastify.get("*", (request, reply) => {
    const unmatchedObj = {
        error: "Route not found",
        statusCode: 404
    }
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(unmatchedObj)
})



fastify.post("/cit/question", (request, reply) => {
    let test = addQuestionAnswer(request.body)
    let response = {}
    if(test.error === ""){
        response.error = ""
        response.statusCode = 201
        response.number = data.length
    } else {
        response.error = "An error occured"
        response.statusCode = 404
        response.number = ""
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
})



fastify.put("/cit/question", (request, reply) => {
    let test = updateQuestionAnswer(request.body)
    
    let response = {}
    if(test.error === ""){
        response.error = ""
        response.statusCode = 200
        response.number = test.number
    } else {
        response.error = "An error has occured"
        response.statusCode = 404
        response.number = ""
    }

    reply 
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
})



fastify.delete("/cit/question/:number", (request, reply) => {
    const { number } = request.params
    let test = deleteQuestionAnswer(number)
    let response = {}
    if(test.error === ""){
        response.error = ""
        response.statusCode = 200
        response.number = number
    } else {
        response.error = "An error occured"
        response.statusCode = 404
        response.number = ""
    }
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
})



const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});


// :):):)