function submitExam()
{
    score = 0;

    //Question 1

    q1 = document.querySelector('input[name="q1"]:checked');

    if(q1 && q1.value == "6")
    {
        document.getElementById("q1result").innerHTML="Correct";
        document.getElementById("q1result").className="correct";
        score++;
    }

    else
    {
        document.getElementById("q1result").innerHTML="Wrong";
        document.getElementById("q1result").className="wrong";
    }


    //Question 2

    c1 = document.getElementById("c1").checked;
    c2 = document.getElementById("c2").checked;
    c3 = document.getElementById("c3").checked;
    c4 = document.getElementById("c4").checked;

    if(c1 && !c2 && !c3 && c4)
    {
        document.getElementById("q2result").innerHTML="Correct";
        document.getElementById("q2result").className="correct";

        document.getElementById("cucurella").className="correct";
        document.getElementById("rob").className="correct";
        score++;
    }

    else
    {
        document.getElementById("q2result").innerHTML="Wrong";
        document.getElementById("q2result").className="wrong";

        document.getElementById("henry").className="wrong";
        document.getElementById("hazard").className="wrong";
    }

    document.getElementById("score").innerHTML = score;
}