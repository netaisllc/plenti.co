/* generated by Svelte v3.23.0 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from '/spa/web_modules/svelte/internal/index.js';

function create_fragment(ctx) {
	let nav;

	return {
		c() {
			nav = element("nav");

			nav.innerHTML = `<div class="container svelte-1hks6yg"><span id="brand" class="svelte-1hks6yg"><a href="/" class="svelte-1hks6yg"><img alt="planarian" src="/assets/planarian.svg" class="svelte-1hks6yg">Plenti</a></span> 
    <a class="nav-link svelte-1hks6yg" href="/docs">Docs</a> 
    <a class="nav-link svelte-1hks6yg" href="/themes">Themes</a> 
    <a class="nav-link button svelte-1hks6yg" href="/download">Download</a> 
    <a class="nav-link svelte-1hks6yg" href="https://github.com/plentico/plenti"><img src="/assets/social/github.svg" class="svelte-1hks6yg"></a> 
    <input type="checkbox" id="toggle" class="hidden svelte-1hks6yg"> 
    <label for="toggle" id="hamburger" class="svelte-1hks6yg"><span class="svelte-1hks6yg"></span> 
      <span class="svelte-1hks6yg"></span> 
      <span class="svelte-1hks6yg"></span> 
      <span class="svelte-1hks6yg"></span></label></div>`;

			attr(nav, "class", "svelte-1hks6yg");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;