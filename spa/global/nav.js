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

			nav.innerHTML = `<div class="container svelte-edz9n5"><span id="brand" class="svelte-edz9n5"><a href="/" class="svelte-edz9n5"><img alt="planarian" src="/assets/planarian.svg" class="svelte-edz9n5">Plenti</a></span> 
    <a class="nav-link svelte-edz9n5" href="/docs">Docs</a> 
    <a class="nav-link svelte-edz9n5" href="/themes">Themes</a> 
    <a class="nav-link button svelte-edz9n5" href="/download">Download</a></div>`;

			attr(nav, "class", "svelte-edz9n5");
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