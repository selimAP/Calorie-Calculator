document.getElementById('calculate').onclick = function(){

    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let element = document.getElementById('gender');
    let name = element.options[element.selectedIndex].text;
    let genderWert = element.options[element.selectedIndex].value;
    let result;
    let endResult;

    let activityElement = document.getElementById('activity');
    let activityName = activityElement.options[activityElement.selectedIndex].text;
    let activityWert = activityElement.options[activityElement.selectedIndex].value;
    let activityActiv;
    let activityActivFemale;
    
    if(activityWert == 1){
    activityActiv = 0.7;
    activityActivFemale = 0.659;
   }
   else if(activityWert == 2){
    activityActiv = 0.88;
    activityActivFemale = 0.838;
   }
   else if(activityWert == 3){
    activityActiv = 0.968;
    activityActivFemale = 0.95;
   }
   else if(activityWert == 4){
    activityActiv = 1.23;
    activityActivFemale = 1.187;
   }
   else if(activityWert == 5){
    activityActiv = 1.405;
    activityActivFemale = 1.359;
   }
   else{
    alert("Fill the form!");
   }

    if(genderWert == 1){
        result = 10 * weight + 6.26 * height - 5 * age + 5;
        endResult = result * activityActiv;
    }
    else if(genderWert == 2){
        result = 10 * weight + 6.26 * height - 5 * age - 161;
        endResult = result * activityActivFemale;
    }
    else{

}

    if(genderWert == true){
        document.getElementById('result').innerHTML = "Extreme weight loss 1 kg/week: <br/>" + Math.round(endResult) + " Calories/day";
    }
    else{}


};

