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
            const $section = $('section');
            $section.empty();
            $section.append('<ul></ul>');
            const articles = data.results;
            let articleCounter = 0;
            articles.forEach(article => {
                if (article.multimedia.length !== 0 && articleCounter < 12) {
                    articleCounter++;
                    const articleUrl = article.url;
                    const articleAbstract = article.abstract;
                    $section.find('ul').append(`<li><a href=${articleUrl}></a></li>`);
                    $(`section ul li:nth-child(${articleCounter})`).css('backgroundImage', `url(${article.multimedia[4].url})`);
                }
            });
            
            
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