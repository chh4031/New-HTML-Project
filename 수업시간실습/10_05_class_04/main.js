document.getElementById("btn1").addEventListener("click", btn_click1);

function btn_click1(){
    // do something
    const n = Number(document.querySelector("#input_n").value); //querySelector 하면 여러가지가 들어가짐, ID도 쓸 수 있음.
    const k = pasereInt(document.querySelector("#input_k").value); //해당값이 문자여서 잘 안되는 경우도 있다.


    let sum = 0;
    for(let i=1;i<=n;i++){
        if(i%k===0) sum += i;
    }

    alert(`sum = ${sum}`);
};