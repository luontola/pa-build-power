// Copyright © 2013 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

(function () {

    function hookFunction(obj, fnName, hookFn) {
        var realFn = obj[fnName];
        obj[fnName] = function () {
            realFn.apply(obj, arguments);
            hookFn.apply(obj, arguments);
        };
    }

    model.buildPower = buildPower;

    hookFunction(handlers, 'hover', buildPower.unitSpecs.update);

    hookFunction(handlers, 'selection', function () {
        buildPower.selectionUpdated(model.selectionList());
    });

    $('.div_unit_selection_cont').prepend(loadHtml('coui://ui/mods/BuildPower/live_game/build_power.html'));
})();
