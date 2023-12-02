var numberofbuttons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofbuttons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var b= this.innerHTML;
         makesound(b);

});

}
document.addEventListener("keypress", function(event){
    makesound(event.key);
});

function makesound(key){
    switch(key){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();   
            break;

            case "d":
                var t= new Audio("sounds/tom-4.mp3");
                t.play();
                break;

                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                    
                    case "k":
                        var k = new Audio("sounds/crash.mp3");
                        k.play();
                        break;

                        case "l":
                            var l = new Audio("sounds/kick-bass.mp3");
                            l.play();
                            break;
    }
}

