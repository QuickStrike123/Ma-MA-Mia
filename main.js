var menu_list_array = ["The Supreme" , "Dr.Phiils Pills" , "The Extrodinair" , "Death Eaters Of Doom" , "Spiral CastAway"];

function getmenu(){

    var Data;

    Data = "<ol class='menulist'>"

    menu_list_array.sort();

    for(var i = 0 ; i < menu_list_array.length;i++){

        Data = Data + '<li>' + menu_list_array[i] + '</li>'

    }

    Data = Data + "</ol>"

    document.getElementById("display_menu").innerHTML = Data;

}

function add_item(){

    var DataPizza;

    var item = document.getElementById("add_item").value;

    menu_list_array.push(item);

    menu_list_array.sort();

    DataPizza = "<section class= 'cards'>"

    for (var i = 0;i < menu_list_array.length ; i ++){

        DataPizza = DataPizza + '<div class="card">' + '<img src="pizzaImg.png"/>' + menu_list_array[i] + "</div>";
 
    }

    DataPizza = DataPizza + "</section>"

    document.getElementById("display_addedmenu").innerHTML = DataPizza;

}
