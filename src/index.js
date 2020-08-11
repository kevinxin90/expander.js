const meta_kg = require("@biothings-explorer/smartapi-kg");
const call_apis = require("@biothings-explorer/call-apis");
const debug = require("debug")("expander");

module.exports = class {
    constructor() {
        this.kg = new meta_kg();
    }

    /**
     * Load Meta-KG async
     */
    async loadMetaKG() {
        await this.kg.constructMetaKG();
        debug(`Meta KG loaded! No. of kgs operations: ${this.kg.ops.length}`);
    }

    /**
     * Get a list of smart-api edges based on semantic type
     * @param {string} semantic_type - Type of bioentities to expand
     */
    getEdges(semantic_type) {
        return this.kg.filter({
            input_type: semantic_type,
            output_type: semantic_type,
            predicate: "has_subclass"
        })
    }

    /**
     * Add inputs to smartapi edges
     * @param {array} inputs - an array of input ids
     * @param {array} edges - an array of smartapi edges
     */
    pairInputsWithEdges(inputs, edges) {
        if (typeof inputs === String) {
            inputs = [inputs];
        }
        return edges.map(edge => {
            edge.input = inputs;
            return edge
        })
    }

    /**
     * 
     * @param {string} semantic_type - semantic type of the inputs
     * @param {array} inputs - an array of curies as input
     */
    async query(semantic_type, inputs) {
        if (this.kg.ops.length === 0) {
            await this.loadMetaKG();
        }
        let smartapi_edges = this.getEdges(semantic_type);
        const bte_edges = this.pairInputsWithEdges(inputs, smartapi_edges);
        let caller = new call_apis(bte_edges);
        await caller.query();
        let res = caller.result.map(item => item.$output_id_mapping.resolved)
        return res;
    }
}