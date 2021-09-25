player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1 + ":" + player1score;
document.getElementById("player2_name").innerHTML = player2 + ":" + player2score;
function send() {
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    correct = parseInt(number_1) * parseInt(number_2);
    tag1 = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    tag2 = "<br>Ansewer: <input type='text' placeholder='ansewer' id='ansewer'><br>";
    tag3 = "<br><br><button onclick='check()' class='btn btn-info'>check</button>";
    full = tag1 + tag2 + tag3;
    document.getElementById("output").innerHTML = full;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
quesion_turn = "player1";
ansewer_turn = "player2";

function check() {
    get_ansewer = document.getElementById("ansewer").value;
    if(get_ansewer == correct){
        if (ansewer_turn == "player1") {
        player1score = player1score + 1;
        document.getElementById("player1_name").innerHTML = player1 + ":" + player1score;
        ansewer_turn = "player2"
        }
        else{
        player2score = player2score + 1;
        document.getElementById("player2_name").innerHTML = player2 + ":" + player2score;
        ansewer_turn = "player1"
    }
    }
    if(quesion_turn == "player1"){
        quesion_turn = "player2";
        document.getElementById("player_question").innerHTML = player2;
    }

    else{
        quesion_turn = "player1";
        document.getElementById("player_question").innerHTML = player1; 
    }
    document.getElementById("output").innerHTML = "";
}