    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./img/publicTransportation.jpg",
           "./img/plantBasedMeal.jpg",
           "./img/solarPanels.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    

   //Creating a variable as a shortcut for printing
    const p = console.log;
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

        //Get the references to interactive HTML elements

        const ctrlBtns = document.querySelectorAll('.controls button i');
        const cntnr = document.querySelector('.container');
        p(ctrlBtns,cntnr);

        //Create array that will store the data

        let pages = [
            {
                heading:"Taking Public Transportation",
                bodyText: "Proin eget turpis rhoncus, ullamcorper neque ac, tristique mauris. Proin ex ipsum, volutpat vel imperdiet sit amet, consequat quis ligula. Pellentesque mollis lacus sed commodo elementum. In nec euismod dui, efficitur pellentesque nisi. Integer suscipit pulvinar convallis. Integer at nisl augue. Fusce ut metus tincidunt, cursus ligula vitae, interdum enim.",
                img: "./img/publicTransportation.jpg",
                alt: "Taking the Bus"
            },
            {
                heading:"A Plant Based Diet",
                bodyText: "Donec rhoncus et dolor a vestibulum. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean nec dignissim diam. Cras vestibulum convallis semper. Integer egestas ultrices augue, quis fermentum felis interdum sed. Quisque aliquet justo massa, id volutpat nibh volutpat et. Nulla facilisi. Maecenas non porttitor ipsum. Proin pretium placerat justo vel venenatis. Aliquam vel consequat nunc, non pulvinar felis.",
                img: "./img/plantBasedMeal.jpg",
                alt: "A Variety of Veggies"
            },
            {
                heading:"Adopt Alternative Energy Sources",
                bodyText: "Etiam tempor tellus eu urna ornare, vel sagittis ex tristique. Aliquam eget ornare erat, et sodales dui. Maecenas aliquam, nibh nec aliquet dictum, diam elit auctor ante, egestas tristique ipsum libero eget nisl. Nulla pharetra arcu ut metus egestas convallis. Vivamus viverra ex magna, eget lobortis urna rutrum eget. Proin sit amet sem lacus. Ut faucibus lobortis eros, in volutpat lectus dictum vitae. Mauris non congue diam. Nullam egestas quam magna, a vulputate lorem pretium sed. Integer tempor semper fringilla. Praesent in eros vel nisi rutrum ultricies dictum eget magna. Aliquam vitae nisi sit amet orci sodales pretium et non enim. Donec mattis porttitor nisi id rutrum. Quisque at lectus fringilla, mollis ante eget, pretium odio. Aliquam nec nisi vitae justo blandit aliquam.",
               img: "./img/solarPanels.jpg",
                alt: "Installing Solar Panels"
            }
        ];


        //Create function that handles click event
        function clickBtn(ev){

            //Brightspace ref: week 6
            let clickedButton = ev.target;

            let btnsArray=[
                ctrlBtns[0],
                ctrlBtns[1],
                ctrlBtns[2],
            ];

            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
            let index = btnsArray.indexOf(clickedButton);
            p(index);

            // /MDN ref:https://developer.mozilla.org/en-US/docs/Web/API/Element
            p(clickedButton.id);
            //handle moving id-active to the currently clicked button
                //remove currently present id 'active'
                for(let i=0; i < ctrlBtns.length ; i++){
                    if(ctrlBtns[i].id){
                        //MDN ref:https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                        ctrlBtns[i].removeAttribute('id')
                    }
                }
                //assign id="active" to currently clicked button
                clickedButton.id="active";
            //Load corresponding data into the container div
            cntnr.innerHTML = `<h2>${pages[index].heading}</h2> 
                                <img src="${pages[index].img}" alt="${pages[index].alt}">
                                <p>${pages[index].bodyText}</p>
            `;

        }


        //Register buttons for click event
        for (let i = 0; i<ctrlBtns.length; i++){
            ctrlBtns[i].addEventListener('click', clickBtn);
        }
    
 
