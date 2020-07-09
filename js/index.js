$(document).ready(function () {


    //all the code goes here
    //animating developer text
    var count = 0;

    //calling the function to perform animation on developer text
    developer_animation();

    //defining the function
    function developer_animation() {

        //this is the code for animation
        setTimeout(function () {

            //during the first run count == 10 and title == "Developer"
            count++;
            if (count == 1) {
                title = "A";
            } else if (count == 2) {
                title = "An";
            } else if (count == 3) {
                title = "Ano";
            } else if (count == 4) {
                title = "Anon";
            } else if (count == 5) {
                title = "Anony";
            } else if (count == 6) {
                title = "Anonym";
            } else if (count == 7) {
                title = "Anonymo";
            } else if (count == 8) {
                title = "Anonymou";
            } else if (count == 9) {
                title = "Anonymous";
            }

            //one last time when count == 9
            if (count != 10) {
                // it helps you put a text on an html element
                $('.title').text(`I'm ${title}`);

                developer_animation();
            } else if (count == 10) {


                count = 0;
                setTimeout(function () {

                    //this will be performed after 1 sec
                    developer_animation();


                }, 1000);
            }


        }, 100);
    }


})