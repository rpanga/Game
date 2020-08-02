function ageindays(){
    var birthyera= prompt('what is ypur birth year');
   var days=(2020-birthyera)*365;
    var h1= document.createElement('h1');
    var textans = document.createTextNode('Your are' + days + 'days old')
    h1.setAttribute("id", "ageindays");
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageindays').remove();
}

function generate(){

    var image = document.createElement('img');
    var div = document.getElementById('catgen');
    image.setAttribute('id','cat')
    image.src ="image/animated-cat-image-0072.gif";
    div.appendChild(image);

}
 
function resetcat(){
    document.getElementById('cat').remove();
}






function rpsgame(yourchoice) {

    //console.log(yourchoice)
    var humanchoice, botchoice;
    
    humanchoice= yourchoice.id;
    console.log(humanchoice);
    
    botchoice= botrandomchoice(botrandom());
    console.log(botchoice);
    
    var finalresult= result(humanchoice,botchoice);
    console.log(finalresult);
    
    message= finalmessage(finalresult)
    console.log(message);

    rpsfrontend(humanchoice,botchoice,message)



}

function botrandom(){

    return Math.floor(Math.random()*3)
}

function botrandomchoice(number){

    return ['rock','paper','scissor'][number];
}

function result(yourchoice, computerchoice){

    var choice={
        'rock': {'rock': 0.5 , 'paper': 0 , 'scissor': 1 },
        'paper': {'rock': 1 , 'paper': 0.5 , 'scissor': 0 },
        'scissor': {'rock': 0 , 'paper': 1 , 'scissor': 0.5 },
    }

    var yourresult= choice[yourchoice][computerchoice];
    var computerresult= choice[computerchoice][yourchoice];

    return [yourresult,computerresult];
}

function finalmessage([yourresult,computerresult]){

    if(yourresult === 0){
       return{'message': 'You loose!', 'color':'red'};
    }
    else if(yourresult === 1){
        return{'message': 'You won..!!', 'color':'green'};
    }
    else{
        return{'message': 'Tie..', 'color':'yellow'};
    }
}


function rpsfrontend(humanimgchoice,botimgchoice,finalimgresult)
{

    var imgdatabase={
        'rock':document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();



    var humandiv= document.createElement('div');
    humandiv.setAttribute('id','human');

    var botdiv= document.createElement('div');
    botdiv.setAttribute('id','bot');

    var messagediv= document.createElement('div');
    messagediv.setAttribute('id','fmessage');

    humandiv.innerHTML= "<img src='" + imgdatabase[humanimgchoice] + "'  height=200 width=200 style='box-shadow: 0px 10px 50px rgpa(37,58,233,1);'>"
    botdiv.innerHTML= "<img src='" + imgdatabase[botimgchoice] + "'  height=200 width=200 style='box-shadow: 0px 10px 50px rgpa(37,58,233,1);'>"
    messagediv.innerHTML= "<h1 style='color:" + finalimgresult['color'] + "; font-stlye: 60px; padding: 30px; '>" + finalimgresult['message'] + "</h1>"

    document.getElementById('flex-box-rps1').appendChild(humandiv);
    document.getElementById('flex-box-rps1').appendChild(messagediv);
    document.getElementById('flex-box-rps1').appendChild(botdiv);
    
}


function resetrps(){
    
    document.getElementById('human').remove();
    document.getElementById('fmessage').remove();
    document.getElementById('bot').remove();

    var img= document.createElement('img');
    var img2=document.createElement('img');
    var img3= document.createElement('img');

    



    img.src='image/—Pngtree—rock_1149776.png';
    img2.src='image/—Pngtree—white notepad_2770214.png';
    img3.src='image/29126-6-cartoon-scissor.png';

    img.style.width=200
    img2.style.width=200
    img3.style.width=200



    img.setAttribute('id','rock');
    img2.setAttribute('id','paper');
    img3.setAttribute('id','scissor');

    
    

    document.getElementById('flex-box-rps1').appendChild(img);
    document.getElementById('flex-box-rps1').appendChild(img2);
    document.getElementById('flex-box-rps1').appendChild(img3);
    
    document.getElementById('rock').onclick=function() {rpsgame(this)};
    document.getElementById('paper').onclick=function() {rpsgame(this)};
    document.getElementById('scissor').onclick=function() {rpsgame(this)};
    
}