var app = angular.module('milli', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      controller: 'HomeController as Home'
    })
    .when('/quiz/:quizId', {
      templateUrl: '../views/quiz.html',
      controller: 'QuizController as Quiz',
    });

  $locationProvider.html5Mode(true);
})

app.controller('HomeController', function($http) {
  var alias = this;
  
  alias.quizzes = [];
  alias.questions = [{ question: "", options: [{}] }];

  alias.submitQuiz = function() {
    $http
      .post('http://localhost:8000/api/quizzes', {
        name: alias.name,
        questions: alias.questions,
      })
      .then(function(newQuiz) {
        alias.quizzes.push(newQuiz.data);

        alias.name = "";
        alias.questions = [{ question: "", options: [{}] }];
      });
  };

  alias.loadQuizzes = function() {
    $http
      .get('http://localhost:8000/api/quizzes')
      .then(function(quizzes) {
        alias.quizzes = quizzes.data;
      });
  };

  alias.addQuestion = function() {
    alias.questions.push({ question: "", options: [{}] });
  };

  alias.addOption = function(index) {
    alias.questions[index].options.push({});
  };

  alias.loadQuizzes();
});

app.controller('QuizController', function($http, $routeParams) {
  var alias = this;
  var quizId = $routeParams.quizId;

  alias.quiz = {};

  alias.loadQuiz = function() {
    $http
      .get('http://localhost:8000/api/quizzes/' + quizId)
      .then(function(quiz) {
        alias.quiz = quiz.data[0];
      });
  };

  alias.submitAnswers = function() {
    for (var i = 0; i < alias.quiz.questions.length; i++) {
      var choice = alias.quiz.questions[i].choice;

      for (var j = 0; j < alias.quiz.questions[i].options.length; j++) {
        if (alias.quiz.questions[i].options[j].option == choice &&
          alias.quiz.questions[i].options[j].answer) {
          console.log("You got question " + (i+1) + " right!");
        }
      }
    }
  }

  alias.loadQuiz();
});
