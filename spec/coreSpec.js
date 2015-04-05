// Copyright © 2013-2015 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

describe("Unit specs", function () {
    var unitSpecs = buildPower.unitSpecs;

    it("Values default to 0 before they are known", function () {
        expect(unitSpecs.fabricationRateOf("unit id")).toBe(0);
        expect(unitSpecs.energyConsumptionOf("unit id")).toBe(0);
    });

    it("Returns known values", function () {
        unitSpecs.update({
            path: "unit id",
            constructionDemand: {
                metal: 8,
                energy: 300
            }
        });
        expect(unitSpecs.fabricationRateOf("unit id")).toBe(8);
        expect(unitSpecs.energyConsumptionOf("unit id")).toBe(300);
    });
});

describe("Total build power", function () {

    it("Calculates production efficiency", function () {
        buildPower.metal(30);
        buildPower.energy(1500);

        expect(buildPower.efficiency()).toBe(0.02);
    });

    it("Production efficiency at zero energy", function () {
        buildPower.metal(0);
        buildPower.energy(0);
        expect(buildPower.efficiency()).toBe(0);

        buildPower.metal(1);
        buildPower.energy(0);
        expect(buildPower.efficiency()).toBe(Infinity);
    });

    it("Updates the build power counters based on selection", function () {
        buildPower.unitSpecs.update({
            path: "/pa/units/commanders/quad_base/quad_base.json",
            constructionDemand: {
                metal: 30,
                energy: 1500
            }
        });
        buildPower.unitSpecs.update({
            path: "/pa/units/land/fabrication_bot/fabrication_bot.json",
            constructionDemand: {
                metal: 10,
                energy: 1000
            }
        });

        // for sample data, inspect model.selectionList() in live_game_selection
        var selectionList = [{
            "type": "/pa/units/commanders/quad_base/quad_base.json",
            "count": 1,
            "icon": "img/build_bar/units/quad_base.png"
        }, {
            "type": "/pa/units/land/fabrication_bot/fabrication_bot.json",
            "count": 2,
            "icon": "img/build_bar/units/fabrication_bot.png"
        }];
        buildPower.selectionUpdated(selectionList);

        expect(buildPower.metal()).toBe(50);
        expect(buildPower.energy()).toBe(3500);
        expect(buildPower.efficiency()).toBeCloseTo(0.01429, 0.0001);
    })
});
