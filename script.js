window.addEventListener("load",function(){ 
    //var vraag = document.getElementById("vraag");
    
    console.log(quiz[1].antwoorden[2].antwoord);

    
})

var quiz  = [
    {
        vraag: "wie ontwierp de Eiffeltoren?",
        antwoorden:
        [   
            {antwoord: "Eiffel",waardering:true},
            {antwoord: "Berlage",waardering:false},
            {antwoord: "Edison",waardering:false},
            {antwoord: "James Watt",waardering:false}
        ]
    },
    {
        vraag: "in welke kleuren speelt blauw-wit?",
        antwoorden:
        [
            {antwoord: "blauw en wit",waardering:true},
            {antwoord: "groen en geel",waardering:false},
            {antwoord: "rood en wit",waardering:false},
            {antwoord: "rood en blauw",waardering:false}
        ]
    }
];