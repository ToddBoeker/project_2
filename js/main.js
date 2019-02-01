$(function() {





    $('select').on('change',function () {
        var category = document.getElementById("dropdown").value;
        console.log(category);


        $.ajax({
            method: 'GET',
            url:'https://api.nytimes.com/svc/topstories/v2/'+ category +'.json?api-key=oHuxtAoB8C9GVH3I4h7czsAqteJtZjLt',
            // success:function(){
            //     $('user-name').append('<p>Your request is being placed</p>')
            //     //comments//
            //}
        })

        .done(function(data){ 
            console.log(data.results);

            console.log(data.results[3].multimedia[3].url);
            var x;
            for(x = 0; x < 12; x++) {
                console.log(data.results[x].multimedia.url);
            }
            var y;
            for (y= 0; y< 12; y++) {
                console.log(data.results[y].abstract);
            }

            $results.append(.ultimedima+.abstract ());
            
            
        })



        // .fail(function(err) {
        //     $('.user-name').append('There was an error with your request');
        // console.log(err);
        // })
        
        // .always(function(){
        //     $('.user-name').after('<h3>Thanks for using the API</h3>');
        //  })
    })
})