import { render } from "htm/preact";
import { SHADOW_DOM } from "osagai/dom";

function htmRenderer(element, template) {
  render(template, element[SHADOW_DOM] || element);
}

export default htmRenderer;
