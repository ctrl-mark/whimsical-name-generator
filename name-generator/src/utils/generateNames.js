const getRandIndexes = (data) => {
    const randIndexes = [];
  
    const arrayLengths = [data.prefixes.length, data.vowels.length, 
      data.consonants.length, data.suffixes.length
    ];
  
    // For each 
    arrayLengths.forEach((arrayLength) => {
      randIndexes.push(Math.floor(Math.random() * arrayLength));
    })
  
    return randIndexes;
  }

export const generateNames = (data) => {
  const names = []; 
  for (let i = 0; i < 12; i++){
    const indexes = getRandIndexes(data);
    const prefix = data.prefixes[indexes[0]];
    const suffix = data.suffixes[indexes[3]];

    const name = prefix.concat(suffix);

    names.push(name); 
  }

  console.log('From generatenames');
  console.log(names);
  return names; 
}