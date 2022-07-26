function calculate(){

    var math = Number(document.getElementById("math1").value)
    var science = Number(document.getElementById("science").value)
    var hindi = Number(document.getElementById("hindi").value)
    var english = Number(document.getElementById("english").value)

    var totolsum = math+science+hindi+english;
    
    var cal = (totolsum/400) *100;
    console.log(math)
    document.getElementById("percentagetag").innerHTML = "percentage :"
    document.getElementById("gradetag").innerHTML = "Grade :"
    document.getElementById("percentage").innerHTML = cal +"%";

    if (cal<=100 && cal>=90){
        document.getElementById("grade").innerHTML = "A+"
        document.getElementById("message").innerHTML = "Excellent Work ....."
    }
    else if(cal<=89 && cal>=70){
        document.getElementById("grade").innerHTML = "B+"
        document.getElementById("message").innerHTML = "Good Work..."
    }
    else if(cal<=69 && cal>=50){
        document.getElementById("grade").innerHTML = "C+"
        document.getElementById("message").innerHTML = "Improvement Needed"
    }

    
}