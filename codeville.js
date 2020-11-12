//------------Voting Station Calculation---------

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

  const chooseStations = function (stations) {
  // Your code in here ...
  let goodStations = [];

  for (let station of stations) {
    const name = station[0];
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20) {
      if (type === "school" || type === "community centre") {
        goodStations.push(name);
      }
    }
  }
  return goodStations;
}

//------X Marks the Perfect Shot----

/* const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = (moves) => {
  let point = [0, 0];

  for (let direction of moves) {
    if (direction === 'west') point[0]--;
    else if (direction === 'east') point[0]++;
    else if (direction === 'north') point[1]++;
    else point[1]--;
  }
  return point;
} */


//-------Age Calculator----------

const ageCalculator = function (name, yearOfBirth, currentYear) {
  return name + ' is' + ' ' + (currentYear - yearOfBirth) + ' years old.';
};
console.log(ageCalculator('Anna', 1991, 2020));

//-------How Many Hundreds------


/* const howManyHundreds = function (num) {
  let devided = num / 100;
  return Math.floor(devided) ;
}
console.log(howManyHundreds(123456)); */


//-----------Area Calculators-----------

/* function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
};



function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
};




function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * radius * radius;
  }
}; */


//