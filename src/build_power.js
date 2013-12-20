$(function () {

    function loadTemplate(element, url) {
        element.load(url, function () {
            ko.applyBindings(model, element.get(0));
        });
    }

    var fabricationRate = ko.observable(30); // TODO: calculate real value
    var energyConsumption = ko.observable(1500); // TODO: calculate real value
    var efficiency = ko.computed(function () {
        return fabricationRate() / energyConsumption() * 1000.0;
    });

    // TODO: observe the min/max values of each unit type's consumption (and production), in order to calculate their fabrication rate and energy consumption

    model.buildPower = {
        metal: fabricationRate,
        energy: energyConsumption,
        efficiency: efficiency
    };

    $('.div_current_selection_cont').prepend('<div id="build_power"></div>');
    loadTemplate($('#build_power'), '../../mods/BuildPower/build_power.html');
});
