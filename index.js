import { v2Doc, v3Doc } from "./docs.js";
import { Parser } from "@asyncapi/parser";

const parser = new Parser()

const asyncapi = (await parser.parse(v2Doc)).document;
process(asyncapi)

/**
 * 
 * @param {import("@asyncapi/parser").AsyncAPIDocumentInterface | undefined} document 
 */
function process(document) {
    if (!document) return;

    console.log(document.allChannels())
}