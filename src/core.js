// Copyright © 2013 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

var buildPower = (function () {

    // Unit specs database

    var unitSpecs = {};

    function updateUnitSpecs(spec) {
        if (spec.tool_details) {
            unitSpecs[spec.spec_id] = {
                metal: spec.tool_details.metal,
                energy: spec.tool_details.energy
            };
        }
    }

    function fabricationRateOf(spec_id) {
        var spec = unitSpecs[spec_id];
        return spec ? spec.metal : 0;
    }

    function energyConsumptionOf(spec_id) {
        var spec = unitSpecs[spec_id];
        return spec ? spec.energy : 0;
    }


    // Published variables

    var fabricationRate = ko.observable(0);
    var energyConsumption = ko.observable(0);
    var efficiency = ko.computed(function () {
        var energy = energyConsumption();
        var metal = fabricationRate();
        if (energy == 0) {
            return 0;
        }
        return metal / energy * 1000.0;
    });

    function selectionUpdated(selectionList) {
        var metal = 0;
        var energy = 0;
        for (var i = 0; i < selectionList.length; i++) {
            var unit = selectionList[i];
            metal += unit.count * fabricationRateOf(unit.type);
            energy += unit.count * energyConsumptionOf(unit.type);
        }
        fabricationRate(metal);
        energyConsumption(energy);
    }

    return {
        unitSpecs: {
            update: updateUnitSpecs,
            fabricationRateOf: fabricationRateOf,
            energyConsumptionOf: energyConsumptionOf
        },
        selectionUpdated: selectionUpdated,
        metal: fabricationRate,
        energy: energyConsumption,
        efficiency: efficiency
    };
})();
