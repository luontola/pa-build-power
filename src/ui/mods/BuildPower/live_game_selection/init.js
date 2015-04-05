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

    // TODO: get the unit specs by parsing the JSON
    //hookFunction(handlers, 'hover', buildPower.unitSpecs.update);

    model.selectionList.subscribe(buildPower.selectionUpdated);

    $('.div_unit_selection_cont').prepend(loadHtml('coui://ui/mods/BuildPower/live_game_selection/build_power.html'));
})();
