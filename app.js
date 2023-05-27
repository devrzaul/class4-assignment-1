// Create a function that will return children, teenagers, young people, old people from the age
 let names = prompt('Type your name') ;
 let ages = Number.parseInt(prompt('your age')) ;
 

 function agecal(name = 'Rezaul', age = '18') {
      
    if (age >= 0 && age <= 12) {
        return `Hi ${name} your age is ${age} Right now you are a Children`;
      } else if (age >= 13 && age <= 17) {
        return `Hi ${name} your age is ${age} Right now you are a Teenager`;
      } else if (age >= 18 && age <= 35) {
        return `Hi ${name} your age is ${age} Right now you are a Young Men`;
      } else if (age >= 36) {
        return `Hi ${name} your age is ${age} Right now you are a Old People`;
      } else {
        return "Invalid Age";
      }
    
 }

console.log(agecal(names,ages));




