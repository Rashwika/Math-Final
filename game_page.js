answer_turn = "p1";
question_turn = "p2";
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function send() {
   no1 = document.getElementById("no1").value ;
   no2 = document.getElementById("no2").value ;
   actual_answer = parseInt(no1)*parseInt(no2);

        question_tag = '<h4 id="word_display"> Q: ' + no1+" X "+no2 + '</h4>';
        input_tag = 'Answer: <input id="user_input" type = "number" placeholder = "Enter Your Answer"> <br> <br>';
        button_tag = '<button onclick = "check_ans()" class = "btn btn-info">Check </button>';
        row = question_tag + input_tag + button_tag;
        document.getElementById("output").innerHTML = row;
        document.getElementById("no1").value = "";
        document.getElementById("no2").value = "";
}

function check_ans() {
    ans_word = document.getElementById("user_input").value;
    if (ans_word == actual_answer) {
        if (answer_turn == "p1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else if (answer_turn == "p2") {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    } else {
        window.alert("Wrong Answer The correct answer is " + actual_answer);
    }
    if (question_turn == "p1") {
        question_turn = "p2";
        answer_turn = "p1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name;
    } else if (question_turn == "p2") {
        question_turn = "p1";
        answer_turn = "p2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;
    }

    document.getElementById("output").innerHTML = "";
}