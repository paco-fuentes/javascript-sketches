// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const album = records[id];
//   const myProp = { [prop]: album[prop] };
//   console.log(myProp);
    
  const { [prop]: empty, ...rest } = album;
//   console.table(rest);

  const myProcRec = { ...records, [id]: rest };
  console.table(records);
  console.table(myProcRec);
  return myProcRec;
}

// const test1 = updateRecords(recordCollection, 5439, "artist", "ABBA") //, artist should be the string ABBA
// const test2 = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me") //, tracks should have the string Take a Chance on Me as the last and only element.
const test3 = updateRecords(recordCollection, 2548, "artist", ""); //, artist should not be set
// const test4 = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love") //, tracks should have the string Addicted to Love as the last element.
// const test5 = updateRecords(recordCollection, 2468, "tracks", "Free") //, tracks should have the string 1999 as the first element.
// const test6 = updateRecords(recordCollection, 2548, "tracks", "") //, tracks should not be set
// const test7 = updateRecords(recordCollection, 1245, "albumTitle", "Riptide") //, albumTitle should be the string Riptid7

console.log(test3);
