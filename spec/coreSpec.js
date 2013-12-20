describe("Unit specs", function () {
    var unitSpecs = buildPower.unitSpecs;

    function assertMetalEnergy(metal, energy, spec) {
        unitSpecs.update(spec);
        expect(unitSpecs.fabricationRateOf(spec.spec_id)).toBe(metal);
        expect(unitSpecs.energyConsumptionOf(spec.spec_id)).toBe(energy);
    }


    it("Values default to 0 before they are known", function () {
        expect(unitSpecs.fabricationRateOf("unseen unit id")).toBe(0);
        expect(unitSpecs.energyConsumptionOf("unseen unit id")).toBe(0);
    });

    it("Handles gracefully updates when unit spec is empty (happens when not hovering over a unit)", function () {
        unitSpecs.update({});
    });

    // This sample data was produced by adding the following line
    // to handlers.hover in live_game.js:
    //      console.log(JSON.stringify(payload));

    it("Commander", function () {
        assertMetalEnergy(30, 1500, {"name": "Quadruped Class Commander", "entity": 80675, "orders": [82361], "spec_id": "/pa/units/commanders/quad_base/quad_base.json", "health": {"max": 12500, "current": 12500}, "metal_cost": 1500, "metal_fraction": 3, "production": {"energy": 1000, "metal": 10}, "consumption": {"energy": 0, "metal": 0}, "screen": {"x": 0.5, "y": 0.5}, "army": {"primary_color": {"b": 0.585973, "r": 0.585973, "g": 0.585973, "a": 1}, "secondary_color": {"b": 0.0209511, "r": 0.65237, "g": 0.0277553, "a": 1}}, "tool_details": {"build_target_id": "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json", "energy": 1500, "metal": 30, "build_target_reclaiming": false, "build_target_is_dead": false, "weapon_target": false, "build_target": true, "build_target_name": "Anti-Nuke Launcher", "build_target_health": 0.66116}});
    });

    it("Fabrication Bot", function () {
        assertMetalEnergy(10, 1000, {"name": "Fabrication Bot", "entity": 81103, "orders": [], "spec_id": "/pa/units/land/fabrication_bot/fabrication_bot.json", "health": {"max": 150, "current": 150}, "metal_cost": 180, "metal_fraction": 3, "production": {"energy": 0, "metal": 0}, "consumption": {"energy": 0, "metal": 0}, "screen": {"x": 0.535981, "y": 0.477908}, "army": {"primary_color": {"b": 0.585973, "r": 0.585973, "g": 0.585973, "a": 1}, "secondary_color": {"b": 0.0209511, "r": 0.65237, "g": 0.0277553, "a": 1}}, "tool_details": {"energy": 1000, "metal": 10, "weapon_target": false, "build_target": false}});
    });

    it("Bot Factory", function () {
        assertMetalEnergy(12, 675, {"name": "Bot Factory", "entity": 80832, "orders": [81072], "spec_id": "/pa/units/land/bot_factory/bot_factory.json", "health": {"max": 2000, "current": 2000}, "metal_cost": 600, "metal_fraction": 3, "production": {"energy": 0, "metal": 0}, "consumption": {"energy": 0, "metal": 0}, "screen": {"x": 0.598476, "y": 0.373347}, "army": {"primary_color": {"b": 0.585973, "r": 0.585973, "g": 0.585973, "a": 1}, "secondary_color": {"b": 0.0209511, "r": 0.65237, "g": 0.0277553, "a": 1}}, "tool_details": {"build_target_id": "/pa/units/land/assault_bot/assault_bot.json", "energy": 675, "metal": 12, "build_target_reclaiming": false, "build_target_is_dead": false, "weapon_target": false, "build_target": true, "build_target_name": "Dox", "build_target_health": 0.242134}});
    });

    it("Energy Plant", function () {
        assertMetalEnergy(0, 0, {"name": "Energy Plant", "entity": 81661, "orders": [], "spec_id": "/pa/units/land/energy_plant/energy_plant.json", "health": {"max": 1000, "current": 1000}, "metal_cost": 450, "metal_fraction": 3, "production": {"energy": 600, "metal": 0}, "consumption": {"energy": 0, "metal": 0}, "screen": {"x": 0.914691, "y": 0.291948}, "army": {"primary_color": {"b": 0.585973, "r": 0.585973, "g": 0.585973, "a": 1}, "secondary_color": {"b": 0.0209511, "r": 0.65237, "g": 0.0277553, "a": 1}}});
    })
});
