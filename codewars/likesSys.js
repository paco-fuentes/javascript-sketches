const likes = (names) => {
  const likesCount = names.length;
  switch (likesCount) {
    case 0:
      return `no one likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${likesCount - 2} others like this`;
      break;
  }
};

// // otras soluciones:
// function likes(names) {
//   names = names || [];
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//       break;
//     case 1:
//       return names[0] + " likes this";
//       break;
//     case 2:
//       return names[0] + " and " + names[1] + " like this";
//       break;
//     case 3:
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//       break;
//     default:
//       return (
//         names[0] +
//         ", " +
//         names[1] +
//         " and " +
//         (names.length - 2) +
//         " others like this"
//       );
//   }
// }

// function likes(names) {
//   return {
//     0: "no one likes this",
//     1: `${names[0]} likes this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)];
// }

const test1 = likes([]); // 'no one likes this'
const test2 = likes(["Peter"]); // 'Peter likes this'
const test3 = likes(["Jacob", "Alex"]); //'Jacob and Alex like this'
const test4 = likes(["Max", "John", "Mark"]); // 'Max, John and Mark like this'
const test5 = likes(["Alex", "Jacob", "Mark", "Max"]); // 'Alex, Jacob and 2 others like this'
console.log(
  " --- Likes System --- \n",
  test1 + "\n",
  test2 + "\n",
  test3 + "\n",
  test4 + "\n",
  test5 + "\n"
);

// // alternativa extendida:
// function likes(peopleNames) {
//     var feels = new FeelingsParty('like', 'this');
//     for(var name in peopleNames) feels.addFeeler(new Person(peopleNames[name]));
//     return feels.shareTheseFeelings();
//   }

//   function Person(name) {
//    this.name = name;
//   }

//   Person.prototype.getName = function() {
//     return this.name;
//   }

//   function FeelingsParty(emotion, target) {
//    this.emotionalContext = emotion;
//    this.emotionalSubject = target;
//    this.peopleFeelingThisWay = [];
//    this.numPeopleFeelingThisWay = 0;
//   }

//   FeelingsParty.prototype.getEmotionalContext = function() {
//    return this.type;
//   }

//   FeelingsParty.prototype.addFeeler = function(person) {
//       this.numPeopleFeelingThisWay++;
//       this.peopleFeelingThisWay.push(person);
//   }

//   FeelingsParty.prototype.shareTheseFeelings = function() {
//       this.findTheRightWords();
//       if(this.numPeopleFeelingThisWay == 0) return 'no one ' + this.emotionalContext + ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 1) return '' + this.peopleFeelingThisWay[0].getName() + ' ' + this.emotionalContext + ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 2) return '' + this.peopleFeelingThisWay[0].getName() + ' and ' + this.peopleFeelingThisWay[1].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 3) return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + this.peopleFeelingThisWay[2].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//       return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + (this.numPeopleFeelingThisWay - 2) + ' others ' + this.emotionalContext + ' ' + this.emotionalSubject;
//   }

//   FeelingsParty.prototype.findTheRightWords = function() {
//       if(this.numPeopleFeelingThisWay == 0 || this.numPeopleFeelingThisWay == 1) this.emotionalContext += 's';
//   }
