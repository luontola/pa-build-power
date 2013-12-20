$(function () {

    function loadTemplate(element, url) {
        element.load(url, function () {
            ko.applyBindings(model, element.get(0));
        });
    }

    model.buildPower = buildPower;

    $('.div_current_selection_cont').prepend('<div id="build_power"></div>');
    loadTemplate($('#build_power'), '../../mods/BuildPower/live_game/build_power.html');
});
