/**
 * @jest-environment node
 */

const expand = require("../src/index");

describe("test main expander function", () => {

    test("test with biological process IDs", async () => {
        let query = new expand();
        let res = await query.query("BiologicalProcess", ["GO:0001112"]);
        expect(res).toHaveLength(2);
        expect(res[0]['curies'][0]).toBe("GO:0001113")
    });

    test("test with disease IDs", async () => {
        let query = new expand();
        let res = await query.query("Disease", ["MONDO:0016575"]);
        expect(res).toHaveLength(49);
    });

    test("test with phenotype IDs", async () => {
        let query = new expand();
        let res = await query.query("PhenotypicFeature", ["HP:0000791"]);
        expect(res).toHaveLength(1);
        expect(res[0]['db_ids']['HP'][0]).toBe("HP:0008651");
    });

    test("test with anatomy IDs", async () => {
        let query = new expand();
        let res = await query.query("AnatomicalEntity", ["UBERON:0034709"]);
        expect(res).toHaveLength(1);
        expect(res[0]['db_ids']['UBERON'][0]).toBe("UBERON:0034708");
    });

    // test("test with go mf IDs", async () => {
    //     let query = new expand();
    //     let res = await query.query("Molecular Acitity", ["GO:1901363"]);
    //     expect(res).toHaveLength(37);
    // });

    // test("test with go cc IDs", async () => {
    //     let query = new expand();
    //     let res = await query.query("Cellular Component", ["GO:0005937"]);
    //     expect(res).toHaveLength(5);
    // });
})