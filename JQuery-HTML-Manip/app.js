$(document).ready(function () {
    
    
    $("body").append('<button class="alert-msg">nice msg</button>');
  
    
    // click on 'nice msg' button alerts 'some nice message'
    $(".alert-msg").click(function () {
        alert('Some Nice Message');
    })
    // click submit button alerts value of input element text
    $( "#submit-btn" ).click(function() {
        alert( $('#field' ).val())
    })
    
    //adds class='hover' to div element...changing background color 
    $( "div" ).hover( function () {
        $(this).addClass( 'hover' )
    })
    
    //removes class='hover' to div element...changing background color to default 
    $( "div" ).mouseout( function () {
        $( this ).removeClass( 'hover')
    })

    //changes color of p element to random color on click
    $( "p" ).click( function () {
        $ ( "p" ).css('color' , getRandomColor)
    })
    //generates random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    // adds button with class 'insert-name' and an empty div
    $( "body ").append("<button class='insert-name'>My Name</button>")
    $( "body ").append("<div class='my-name'></div>")

    //adds span containing my name to div of class 'insert-name'
    $( " .insert-name ").click( function () {
        $( ".my-name").append( "<span>Sam</span>")
    })

    let friendsArray = [ 'Katie', 'Chase', 'Trey', 'Ryan', 'Devonte', 'Bob', 'Frank', 'Joe', 'Rita', 'Stop' ]
    let i = 0;
    
    $( ".list-friends-btn" ).click( function() {
        if (i < friendsArray.length)  {
            let listItem = $('<li></li>');
            let listName = friendsArray[i];
            $(listItem).append(listName);
            $( "ul" ).append(listItem);
        } else if (i > friendsArray.length) {
            $( ".list-friends-btn" ).off
            i=0;
        }
        i++;
    });
   



    
});