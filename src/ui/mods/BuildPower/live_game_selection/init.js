// Copyright © 2013-2015 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

(function () {

    model.buildPower = buildPower;

    bif.registerBIFReadyCallback(function () {
        _(bif.getUnitBlueprints()).forEach(function (blueprint) {
            //console.log(blueprint.id, blueprint);
            var constructionDemand = _(bif.getUnitBlueprintBuildArmIDs(blueprint.id))
                .map(bif.getToolBlueprint)
                .pluck('construction_demand')
                .reduce(function (result, construction_demand) {
                    result.energy += construction_demand.energy;
                    result.metal += construction_demand.metal;
                    return result;
                }, {energy: 0, metal: 0});
            //console.log(constructionDemand);
            buildPower.unitSpecs.update({
                path: blueprint.path,
                constructionDemand: constructionDemand
            })
        });
    });

    model.selectionList.subscribe(buildPower.selectionUpdated);

    $('.div_unit_selection_cont').prepend(loadHtml('coui://ui/mods/BuildPower/live_game_selection/build_power.html'));
})();
