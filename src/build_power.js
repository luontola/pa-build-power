$(function () {
    var fabricationRate = ko.observable(30); // TODO: calculate real value
    var energyConsumption = ko.observable(1500); // TODO: calculate real value
    var efficiency = ko.computed(function () {
        return fabricationRate() / energyConsumption() * 1000.0;
    });

    model.buildPower = {
        metal: fabricationRate,
        energy: energyConsumption,
        efficiency: efficiency
    };

    $('.div_current_selection_cont').prepend('<div id="build_power"></div>');
    var injection = $('#build_power');
    injection.load('../../mods/BuildPower/build_power.html', function () {
        ko.applyBindings(model, injection.get(0));
    });
});
