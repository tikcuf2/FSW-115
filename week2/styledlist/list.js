


var joke= [


    {
        "id": 28,
        "type": "programming",
        "setup": "To understand what recursion is...",
        "punchline": "You must first understand what recursion is"
    },
    {
        "id": 73,
        "type": "programming",
        "setup": "The punchline often arrives before the set-up.",
        "punchline": "Do you know the problem with UDP jokes?"
    },
    {
        "id": 377,
        "type": "programming",
        "setup": "Knock-knock.",
        "punchline": "A race condition. Who is there?"
    },
    {
        "id": 25,
        "type": "programming",
        "setup": "How many programmers does it take to change a lightbulb?",
        "punchline": "None that's a hardware problem"
    },
    {
        "id": 379,
        "type": "programming",
        "setup": "A programmer puts two glasses on his bedside table before going to sleep.",
        "punchline": "A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
    },
    {
        "id": 33,
        "type": "programming",
        "setup": "Which song would an exception sing?",
        "punchline": "Can't catch me - Avicii"
    },
    {
        "id": 56,
        "type": "programming",
        "setup": "How do you check if a webpage is HTML5?",
        "punchline": "Try it out on Internet Explorer"
    },
    {
        "id": 29,
        "type": "programming",
        "setup": "There are 10 types of people in this world...",
        "punchline": "Those who understand binary and those who don't"
    },
    {
        "id": 60,
        "type": "programming",
        "setup": "A user interface is like a joke.",
        "punchline": "If you have to explain it then it is not that good."
    },
    {
        "id": 380,
        "type": "programming",
        "setup": "There are 10 kinds of people in this world.",
        "punchline": "Those who understand binary, those who don't, and those who weren't expecting a base 3 joke."
    }
]

var jokes = document.getElementById("funny")

for (var i = 0; i < joke.length; i++) {
    jokes.innerHTML += "<li>" + joke[i] + "</li>"
}