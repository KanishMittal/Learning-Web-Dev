console.log("I am a tutorial on loops")

let a = 1;

for(let i = 0; i<100; i++){
    console.log(a+i);
}

let obj = {
    name: "Kanish Mittal",
    role: "Owner",
    company: "Mittal PVT LTD"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const c of "Kanish") {
    console.log(c)
}

let i = 1;
while(i<6){
    console.log(i++)
}

let x = 1
do {
    console.log(x)
    x++;
} while (x<1);