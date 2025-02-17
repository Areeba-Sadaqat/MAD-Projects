let objArr=[
  { name :'Ali',
   age:12,
   gender:'male'
  },

 { name :'Sara',
   age:20,
   gender:'female'
  },

  { name :'Sana',
    age:25,
    gender:'female'
   }   
];
//console.log("First object in the array using the []notation: ")
//console.log(objArr[0]);

let names = objArr.map(obj => obj.name);
console.log(names); 
