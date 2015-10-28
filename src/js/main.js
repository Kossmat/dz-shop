var resetFilter = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.sidebar__clear-filter').on('click', _reset);
    };


    var _reset = function(e){

        e.preventDefault();

        var $this = $(this);

        var _check__item = $this.closest('. check__item');
        var _input = _checkItem.find('input');

        _input.each(function(){
            $(this).prop('checked', false);
        })

    };

    return {
        init: init
    };

})();