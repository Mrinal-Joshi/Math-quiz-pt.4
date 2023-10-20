player1_name= localStorage.getItem("player1_name")
player2_name= localStorage.getItem("player2_name")

answer_turn = "player2"
question_turn = "player1"

player1_score= "0"
player2_score= "0"



function send() {
    number1 = document.getElementById("no.1").value
    number2 = document.getElementById("no.2").value
    actual_ans = parseInt(number1) * parseInt(number2)

    question_number = "<h4>" + number1 + "" + "X" + "" + number2 + "</h4>"
    input_box = " <br> Answer: <input type= 'text' id='input_check_box' >"
    check_btn = "<br><br> <button class= 'btn btn-info' onclick= 'check()'>Check</button>"
    row = question_number + input_box + check_btn

    document.getElementById("output").innerHTML = row

    document.getElementById("no.1").value = ""
    document.getElementById("no.2").value = ""
}


function check()
{
    get_answer= document.getElementById("input_box").value
    answer= get_answer.toLowerCase()

    if(get_answer == actual_ans)
    {
        if(answer_turn == "player1")
        {
            player1_score= player1_score + 1
            document.getElementById("player1_score").innerHTML= player1_score

        }
        else
        {
            player2_score= player2_score + 1
            document.getElementById("player2_score").innerHTML= player2_score
        }

    }

    if(question_turn == "player1")
    {
        question_turn= "player2"
        document.getElementById("question_turn").innerHTML= "question turn = " + player2_name
    }
    else
    {
        question_turn= "player1"
        document.getElementById("question_turn").innerHTML= "question turn = " + player1_name
    }

    if(answer_turn == "player1")
    {
        answer_turn= "player2"
        document.getElementById("answer_turn").innerHTML= "answer turn = " + player2_name
    }
    else
    {
        answer_turn= "player1"
        document.getElementById("answer_turn").innerHTML= "answer turn = " + player1_name
    }

    document.getElementById("output").innerHTML= ""
}