
let rand = Math.floor(Math.random() * 11);
console.log(rand);

let arr = ["Why don't scientists trust atoms? Because they make up everything!",     // --> Joke Array, you can add your own jokes in this array.
    "What do you call a fish with no eyes? Fsh.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "How does a penguin build its house? Igloos it together!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I used to play piano by ear, but now I use my hands.",
    "I used to play piano by ear, but now I use my hands."
];

let a=document.querySelector("#joke");
a.innerHTML=arr[rand];

//  Code By - Datta Kale
