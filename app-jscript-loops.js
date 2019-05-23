
var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}


//getting the keys from the key:value pair;
for (var foo in person) {
    console.log(foo); 
}

//getting the values from the pair;
for (var foo in person) {
    console.log(person[foo]); 
}


var objects = [
  {color:'blue', flavor: 'blueberry'},
  {color:'red', flavor: 'strawberry'},
  {color:'yellow', flavor: 'blueberry'}
]




var students = [
  
  { 
    name: 'Jane', 
    track: 'photography', 
    achievements: 5, 
    points: 372 
  },
 
  { 
    name: 'Henry', 
    track: 'development', 
    achievements: 6,
     points: 373 
   },

  { 
    name: 'Kurt', 
    track: 'photography', 
    achievements: 7, 
    points: 374 
  },

  { 
    name: 'Otto', 
    track: 'photography', 
    achievements: 8, 
    points: 375 
  },

  { 
    name: 'Ray', 
    track: 'development', 
    achievements: 9, 
    points: 376 
  }
  
]

var message = "";
var student;
var search;

function getStudentReport( student ) {
  var report = '<h4>: ' + student.name + '</h2>';
  report += student.track + "<br>";
  report += student.achievements + "<br>";
  report += student.points;
  return report;

}
var student;

while (true) {
  search = prompt("Who are you looking for? Type quit to exit");
  if (search === null || search.toLowerCase() === 'quit'){
    break;
  } // below is the else

  for (var i=0; i<students.length; i+=1 ) {
    student = students[i]; 
    if ( student.name === search){
      message = getStudentReport ( student );
      print(message);

    }
}}

// for (i=0; i<students.length; i++) {
//   student = students[i];


//   if (query === student.name) {
//     message += "<h4>Name: " + student.name + "</h4>";
//     message += student.track + "<br>";
//     message += student.achievements + "<br>";
//     message += student.points + "</p>";

//     print(message);
//   }


  // } else if ( query === 'quit') {

  //   //break;

  // } else {
    
  //   foomessage = "Sorry! Your query term does not exist in the data. <br>";

  //   print(foomessage);
  //  // break;


  // // message  += "<button value='Try again' onClick='window.location.reload();'>";

// }

  // message += "<h4>Name: " + student.name + "</h4>";
  // message += "<p>" + student.track + "</p>";
  // message += "<p>" + student.achievements + "</p>";
  // message += "<p>" + student.points + "</p>";
 
  // name = students[i].name;
  // track = students[i].track;
  // achievements = students[i].achievements;
  // points = students[i].points
  // // var bigHolder = holder += holder;
  // // document.getElementById("output").innerHTML = bigHolder;
  // document.write ('<h4> student</h4>')
  // document.write(name + '<br>');
  // document.write(track + '<br>');
  // document.write(achievements + '<br>');
  // document.write(points + '<br><br>');

//}

// print(message);











