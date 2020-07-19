function login(){
    let input = document.querySelector("#input1");
    console.log(input);


    let input1 = document.querySelector("#input2");
    console.log(input1);

    let inputValue = input.value + " " + input1.value + " thank you for logging";
    console.log(inputValue);
    let head = document.querySelector("h1 span");
    console.log(head);
    head.innerHTML = inputValue;

}

