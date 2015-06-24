$(document).ready(function(){

    NProgress.configure({
        parent: '#nprogressBar',
        minimum : 0.1,
        trickleRate: 0.08,
        trickleSpeed: 90
    });
    $('#start').on('click', function(){
        $('#searchButton').hide();
        //$('#clearButton').show();
        NProgress.start();
    });
    $('#done').on('click', function(){
        NProgress.done();
        $('#searchButton').show();
        //$('#clearButton').hide();
    });

})
