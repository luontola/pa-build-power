$(function () {

    function loadTemplate(element, url) {
        element.load(url, function () {
            ko.applyBindings(model, element.get(0));
        });
    }

    function beforeAdvice(obj, fnName, aspectFn) {
        var realFn = obj[fnName];
        obj[fnName] = function () {
            aspectFn.apply(obj, arguments);
            realFn.apply(obj, arguments);
        };
    }

    model.buildPower = buildPower;

    beforeAdvice(handlers, 'hover', buildPower.unitSpecs.update);

    $('.div_current_selection_cont').prepend('<div id="build_power"></div>');
    loadTemplate($('#build_power'), '../../mods/BuildPower/live_game/build_power.html');
});
