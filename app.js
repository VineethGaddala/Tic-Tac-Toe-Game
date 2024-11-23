let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbutton = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")


reset.classList.remove("hide");

let btnClicks = 0;
let turnX = true;

const wincombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach( (box) => {
    box.addEventListener("click",() => {
        // console.log("box was clicked");
        btnClicks = btnClicks + 1;
        if(turnX){
            box.innerText = "X";
            box.style.color = "red";
            turnX = false;
        }
        else{
            box.innerText = "O";
            box.style.color = "green";
            turnX = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(let combo of wincombo){
        comboval1 = boxes[combo[0]].innerText;
        comboval2 = boxes[combo[1]].innerText;
        comboval3 = boxes[combo[2]].innerText;

        if(comboval1 != "" && comboval2 != "" && comboval3 != ""){
            if(comboval1 === comboval2 && comboval2 === comboval3){
                // console.log("winner!");
                msgcontainer.classList.remove("hide");
                msg.innerText = `Congratulations! Winner is ${comboval1}`;
                reset.classList.add("hide");
                boxes.forEach( box => {
                    box.disabled = true;
                });
            }
            else if(btnClicks === 9)
                {
                    if(comboval1 != comboval2 && comboval2 != comboval3){
                        msgcontainer.classList.remove("hide");
                        msg.innerText = "Draw!";
                        reset.classList.add("hide");
                        boxes.forEach( box => {
                            box.disabled = true;
                        });
                    }
                }
        }
        
        
    }
};

reset.addEventListener("click", () => {
    boxes.forEach( box => {
        box.innerText = "";
        box.disabled = false;
    })
    btnClicks = 0;
});

newbutton.addEventListener("click", () => {
    boxes.forEach( box => {
        box.innerText = "";
        box.disabled = false;
        msgcontainer.classList.add("hide");
        reset.classList.remove("hide");
    })
    btnClicks = 0;
});