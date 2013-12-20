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

    var fabricationRate = ko.observable(30); // TODO: calculate real value
    var energyConsumption = ko.observable(1500); // TODO: calculate real value
    var efficiency = ko.computed(function () {
        return fabricationRate() / energyConsumption() * 1000.0;
    });

    return {
        unitSpecs: {
            update: updateUnitSpecs,
            fabricationRateOf: fabricationRateOf,
            energyConsumptionOf: energyConsumptionOf
        },
        metal: fabricationRate,
        energy: energyConsumption,
        efficiency: efficiency
    };
})();
