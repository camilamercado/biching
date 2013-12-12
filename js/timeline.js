

histories.on('child_added', function(hist){

            document.querySelector(".entryCount").value=count;

			console.log(hist.val())
			//console.log(hist.val().narrate)

			var tmpl = '<div class="timeline0">\
                <div class="timeImg3">\
                    <div class="tl_upper3"></div>\
                    <div class="tl_base3"></div>\
                </div>\
                <div class="stamp3">\
                    <div class="date3"></div>\
                    <div class="hour3"></div>\
                    <div class="name3"></div>\
                </div>\
                <div class="story3"></div>\
            </div>'

            tmpl = $(tmpl);
            
            var count = hist.val().count;

            tmpl.find('.tl_upper3').css('background-image', hist.val().upper);
            tmpl.find('.tl_base3').css('background-image', hist.val().base);
            
            tmpl.find('.date3').text(hist.val().date);
            tmpl.find('.hour3').text(hist.val().hour);
            tmpl.find('.name3').text(hist.val().name);
            

            tmpl.find('.story3').text(hist.val().narrate);

            // tmpl.find(".timeline0").each(function(index){
            //    $(".timeline0").addClass( 'count_'+ hist.val().count );
            // })
            
            var amt = $("#left3 .date3").length;
            console.log(amt);
            
            // if (amt === 0){
            //     document.querySelector(".entryCount").innerHTML=amt + 1;
            // } else {
            //     document.querySelector(".entryCount").innerHTML=amt + 1;
            // }

            document.querySelector(".entryCount").innerHTML=amt+1;


            tmpl.find(".timeline0").text($( ".timeline0" ).attr( "class",'count_'+ amt ));


            // $("#timeline0").attr('class','count_'+ count);

            $('#left3').append(
            	tmpl
            );

            // var amt = $("#left3 .date3").length;
            // console.log(amt);
            // document.querySelector(".entryCount").innerHTML=amt;

            //Right timeline

            var pagetmpl = '<div class="page">\
                            <div class="timeStamp3">\
                                <div class="dateR3" value=""></div>\
                                <div class="hourR3" value=""></div>\
                            </div>\
                            <div class="hexVal3">\
                                <div class="hexName3"></div>\
                                <div class="circle3">\
                                    <div class="hexNum3"></div>\
                                </div>\
                                <div class="hexTrait3"></div>\
                            </div>\
                            <div class="narrative3" value=""></div>\
                        </div>'

            pagetmpl = $(pagetmpl);

            // var countR = hist.val().count;
            // console.log(count);
            
            pagetmpl.find('.dateR3').text(hist.val().date);
            pagetmpl.find('.dateR3').text(hist.val().date);
           
            pagetmpl.find('.hourR3').text(hist.val().hour);
            pagetmpl.find('.hexName3').text(hist.val().name);
            pagetmpl.find('.hexNum3').text(hist.val().number);
            pagetmpl.find('.hexTrait3').text(hist.val().trait);

            pagetmpl.find('.narrative3').text(hist.val().narrate);
            

           // $(".page").attr('class','page_'+ count);


            var bruta = amt - 1;
            console.log(bruta);
            tmpl.find(".page").text($( ".page" ).attr( "class",'page_' + amt ));

            $('#right3').append(
                pagetmpl
            );

        
        // $('#timeline0').each(
        //     function() {
        //         var classes = this.classList;
        //         for (var i=0, len=classes.length; i<len; i++){
        //             if ($('#page').hasClass(classes[i])){

        //                 console.log(classes);
                        
        //                 function show() {

        //                     document.querySelector(currentPage).style.display="block";

        //                 }
                    
        //             }
        //         }
        //     })

        
        $( ".timeline0" ).hover(function() {
          
          
          $( ".page").show();
          $( ".page_3").hide();
          $( ".page_2").hide();
          $( ".page_1").hide();
        
        });

         $( ".count_1" ).hover(function() {
          
          $( ".page_1").show();
          $( ".page").hide();
          $( ".page_2").hide();
          $( ".page_3").hide();
        
        });


        $( ".count_2" ).hover(function() {
          
          $( ".page_2").show();
          $( ".page").hide();
          $( ".page_3").hide();
          $( ".page_1").hide();
        
        });

        $( ".count_3" ).hover(function() {
          
          $( ".page_3").show();
          $( ".page").hide();
          $( ".page_2").hide();
          $( ".page_1").hide();
        
        });





        // if (timeline0 === countL) {

        //     function show() {

        //         document.querySelector('#page').style.display="block";
            
        //     }

        // }

        // else {

        //     document.querySelector('#page').style.display="none";

        // }           


});
