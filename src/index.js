export { default as define } from "./define";

/**
 * Template tag used to produce objects in the Preact format
 *
 * @name html
 * @param {TemplateStringsArray} strings
 * @param {any[]} ...values
 * @returns {TemplateResult}
 */
export { html, Component } from "htm/preact";

/**
 * Attach a shadow dom in the element. More at [Osagai docs](https://osagai.js.org/docs/api-reference/dom/#attachShadow)
 *
 * @name attachShadow
 *
 */
export { attachShadow } from "osagai/dom";

/**
 * Add a callback to be performed when the element is connected in the document. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onConnected)
 *
 * @name onConnected
 * @param {OsagaiElement} element Instance of the osagai element.
 * @param {Function} callback Function that will be perfomed when the element is connected.
 *
 */

/**
 * Add a callback to be performed when the element is disconnected from the document. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onDisconnected)
 *
 * @name onDisconnected
 * @param {OsagaiElement} element Instance of the osagai element.
 * @param {Function} callback Function that will be perfomed when the element is disconnected.
 *
 */
/**
 * Add a callback to be performed when one of the attribute from the observedAttributeslist is added, changed or removed. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onAttributeChanged)
 *
 * @name onAttributeChanged
 * @param {OsagaiElement} element Instance of the osagai element.
 * @param {Function} callback Function that will be runned with an object with the information of the attribute changed. (name, current, old)
 *
 */
export * from "osagai/lifecycles";
