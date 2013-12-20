var buildPower = (function () {

    var fabricationRate = ko.observable(30); // TODO: calculate real value
    var energyConsumption = ko.observable(1500); // TODO: calculate real value
    var efficiency = ko.computed(function () {
        return fabricationRate() / energyConsumption() * 1000.0;
    });

    // TODO: observe the min/max values of each unit type's consumption (and production), in order to calculate their fabrication rate and energy consumption

    return {
        metal: fabricationRate,
        energy: energyConsumption,
        efficiency: efficiency
    };
})();
