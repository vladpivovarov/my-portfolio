var module = function() {

    var init = function() {
        _setUpListeners();
        //    Действия которые нужно выполнить сразу
    };

    var _setUpListeners = function() {
        //    Тут прослушка событий
        console.log("Прослушка событий работает")
    };

    return {
        init: init
    }
}();

module.init();