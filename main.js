function changeColor(){
    let hex_numbers = ["1","2","3","4","5","6","7"
    ,"a","b","c","d","e","f"];
    
    let hexcode = '';

    for(let i = 0; i < 6; i++){
        let random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode += hex_numbers[random_index];
    }

    document.getElementById("hex-code").innerHTML = hexcode;

    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;

}