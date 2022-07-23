var json = [{
    "Name" : "Sibi", 
    "message"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "sibierd@gmail.com"
},
{
    "Name" : "Chakravarthy", 
    "message"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "sibierd@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.message);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { 
    console.log(obj.message); 
});

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);
  //console.log(json[key].message);
 
}
}
//for Of
let text = "";
for (let x of json[key].Name) {
 text += x; 
}
 console.log(text);


