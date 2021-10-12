 p1name=localStorage.getItem("Player1");
 p2name=localStorage.getItem("Player2");
document.getElementById("p1_name").innerHTML=p1name+":";
document.getElementById("p2_name").innerHTML=p2name+":";
p_1score=0;
p_2score=0;
document.getElementById("p1_score").innerHTML=p_1score;
document.getElementById("p2_score").innerHTML=p_2score;
document.getElementById("p_question").innerHTML="<h4> Question turn - " + p1name +"</h4>";
document.getElementById("p_answer").innerHTML="<h4> Answer turn - " + p2name +"</h4>";
function send (){
    word=document.getElementById("word").value;
letter1=word.charAt(1);
len=Math.floor(word.length/2);
letter2=word.charAt(len);
minus=word.length-1;
letter3=word.charAt(minus);
rp1=word.replace(letter1,"_");
rp2=rp1.replace(letter2,"_");
rp3=rp2.replace(letter3,"_");
q_word="<h4 id='question'> Q. "+rp3+"</h4>";
ip_box="<br> Answer: <input id='ans' type='text'>";
check_button="<br><br> <button id='check' class='btn btn-success' onclick='check()'>Check</button>";
row= q_word + ip_box + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
q_turn="player1";
a_turn="player2";

function check() 
{
    get_word=document.getElementById("ans").value;
    if(get_word==word)
    {
        if(a_turn="player1"){
            p_1score=p_1score+1;
            document.getElementById("p1_score").innerHTML=p_1score;
        }
        else {
            p_2score=p_2score+1;
            document.getElementById("p2_score").innerHTML=p_2score ;
        }
        

    }
    if(q_turn=="player1"){
        q_turn="player2";
        document.getElementById("p_question").innerHTML=" Question turn - " + p2name;
    }
    else {
        q_turn="player1";
        document.getElementById("p_question").innerHTML=" Question turn - " + p1name;   
    }
    if(a_turn=="player1"){
        a_turn="player2";
        document.getElementById("p_answer").innerHTML=" Answer turn - " + p1name;
    }
    else {
        a_turn="player1";
        document.getElementById("p_answer").innerHTML=" Answer  turn - " + p2name;   
    }
    document.getElementById("output").innerHTML="";
}