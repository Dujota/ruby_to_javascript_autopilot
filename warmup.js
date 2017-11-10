// 1

var apples = 14;

console.log(apples);

console.log("I have " + apples + " apples");


// 2

var materials = ['wood', 'metal', 'stone'];

var words = {
  'elephant': 'the worlds largest land animal.',
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'
};

console.log(words);
console.log(materials);

// 3
var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num === 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num +" must be less than 10.");
}


// 4
for (var i = 0; i < 10; i++) {
  console.log("doing the same thing over and over again " + i + " times" );
}


// 5
var base = 5
for (var i = 0; i < 20; i++) {
  console.log(base + i );
}

// 6
var total = 0;
for (var num = 0; num < 100; num++) {
  total += num;
}
console.log(total);

// 7
for (var i = 3; i <= 15; i++) {
  if (i > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("you are too short to ride this rollercoaster!");
  }}

  // 8
