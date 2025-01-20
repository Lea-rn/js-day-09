///// object ::

// const michaelInfo = {   //// key(propretie) : value
//     firstName : "Michael" ,
//     lastName : "jackson" ,
//     age : 25 ,
//     job : "singer"  ,
//     hobbies : ["singing" , "dancing" , "acting"]
// }

//////////////////////////////////////////////////////////////////////////////
///// dot notation : obj.key

// console.log(michaelInfo.job)
// console.log(michaelInfo.hobbies[2])
///////////////////////////////////////////////////////////////////////////////
////// bracket notation : obj["key"] ;

// console.log(michaelInfo["hobbies"][0])
// console.log(michaelInfo["age"])
// const x = "Name"
// console.log(michaelInfo["last"+x])

///////////////////////////////////////////////////////////////////

// const michaelInfo = {

//   firstName: "Michael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   hobbies: ["singing", "dancing", "acting"],
// };

// const intrestedIn = prompt(
//   "what do you want to know about Michael ? choose between firstName , lastName ,age , job and hobbies"
// );

// console.log(michaelInfo[intrestedIn])
/////////////////////////////////////////////////////////////////////
// const michaelInfo = {
//   firstName: "Michael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   hobbies: ["singing", "dancing", "acting"],

// };

//// how to add data (key : value) in object !!!

////// add with dot notation :
//// obj.new-key = "new-value" ;
// michaelInfo.location = "america" ;
// console.log(michaelInfo)
// console.log(michaelInfo.location)

//// add with bracket notation :
/// obj["new-key"] = "new-value"
// michaelInfo["twitter"] = "@twitter"

// console.log(michaelInfo)

//////////////////////////////////////////////////////////////////////////////

// const michaelInfo = {
//   firstName: "Michael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   hobbies: ["singing", "dancing", "acting"],
// };

//// edit (modification) :::
/// syntax : obj.old-key = "new-value"
//   michaelInfo.lastName = "ay haja"
//   console.log(michaelInfo)

//////  key word : this esc6 ::

// const Jhonas = {
//     essmou : "jhonas" ,
//     lakabou : "shmedtman" ,
//     bearthYear : 2000 ,
//     calcAge : function (){
//         return 2025 - this.bearthYear
//     } ,
//     job  : "developper"
// }

// console.log(Jhonas.calcAge())
// console.log(Peter.calcAge())

///// challange :

// const Peter = {
//   essmou: "peter",
//   lakabou: "karlos",
//   bearthYear: 1994,
//   calcAge: function () {
//     return 2025 - this.bearthYear;
//   },
//   job: "disigner",
//   hobbies: ["football", "movies", "walking"],
//   friends: ["michael", "barkley", "max"],
// };

///// -peter- is a -31- years old -disigner- and has a/no driver license .
// console.log(
//   `${Peter.essmou} is a ${Peter.calcAge()} years old ${Peter.job} and has ${
//     Peter.calcAge() >= 18 ? "a" : "no"
//   } driver license`
// );

///// -peter- is a -31- years old -disigner- and has a/no driver license .
