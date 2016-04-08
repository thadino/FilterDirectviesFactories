var app = angular.module('examApp', []);
app.controller('ExamController', ['$scope', function ($scope) {
 
        var studentsInfo = {};
        studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        studentsInfo.students = [];
        studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});

        $scope.courses = studentsInfo.allCourses;
        $scope.students = studentsInfo.students;

    }]);


/*
app.service("get", function ()
{
    this.getStudents = function ()
    {
        this.studentsInfo = {};
        this.studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        this.studentsInfo.students = [];
        this.studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        this.studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        this.studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        this.studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
        return studentsInfo.students;
    };
    this.getCourses = function ()
    {
              this.studentsInfo = {};
        this.studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        this.studentsInfo.students = [];
        this.studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        this.studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        this.studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        this.studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
        return studentsInfo.allCourses;  
    }
});



app.controller('myCtrl', function($scope, get) {
  $scope.getcourses = get.getCourses;
  $scope.getstudents = get.getStudents;
});
*/

app.controller('getfromapi', function($scope, $http) {
  $http.get("api path here")
  .then(function(response) {
      $scope.MyStudentList = response.data;
  });
});

app.filter('averagescore', function ()
{
    return function (x)
    {
        var total = 0;
        var numberofscores = 0;
        for (var i = 0; i < x.grades.length; i++)
        {
            if (parseInt(x.grades[i].grade) >= 0)
            {
                total += parseInt(x.grades[i].grade);
                numberofscores++;
            }
        }
        return total / numberofscores;
        // to get scores from average where they have a score use numberofscores instead of
        // x.grades.length (the reason i use length is because if you have no score 
        // its basically a zero in my mind and thus still counts).
    };
});


app.directive("studentGrades", function() {
    return {
        templateUrl : "studentgradetable.html"
    };
});
