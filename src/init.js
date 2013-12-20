$(function () {

    function hookFunction(obj, fnName, hookFn) {
        var realFn = obj[fnName];
        obj[fnName] = function () {
            realFn.apply(obj, arguments);
            hookFn.apply(obj, arguments);
        };
    }

    function loadTemplate(element, url) {
        element.load(url, function () {
            ko.applyBindings(model, element.get(0));
        });
    }


    // Hook this mod into PA

    model.buildPower = buildPower;

    hookFunction(handlers, 'hover', buildPower.unitSpecs.update);

    hookFunction(handlers, 'selection', function () {
        buildPower.selectionUpdated(model.selectionList());
    });

    $('.div_current_selection_cont').prepend('<div id="build_power"></div>');
    loadTemplate($('#build_power'), '../../mods/BuildPower/live_game/build_power.html');
});
