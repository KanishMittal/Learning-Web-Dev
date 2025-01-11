function nice(name) {
    console.log("Hey! "+ name + " you are nice")
    console.log("Hey! "+ name + " you are good")
    console.log("Hey! "+ name + " you have a great dressing sense")
}

function sum(a,b, c = 3){
    return a+b+c;
}

nice("Kanish");
nice("Prithul");

result = sum(2,3);
console.log("The sum is: ",result)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(23);
func1(765);