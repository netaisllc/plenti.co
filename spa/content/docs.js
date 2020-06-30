/* generated by Svelte v3.23.0 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.js';

import DocsNav from '/spa/content/../components/docs_nav.js';

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (23:4) {#if checked}
function create_if_block_2(ctx) {
	let div;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			attr(div, "class", "sidebar-overlay svelte-mqcoi3");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = listen(div, "click", /*uncheck*/ ctx[4]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (33:20) {#if paragraph.p}
function create_if_block_1(ctx) {
	let each_1_anchor;
	let each_value_5 = /*paragraph*/ ctx[9].p;
	let each_blocks = [];

	for (let i = 0; i < each_value_5.length; i += 1) {
		each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2) {
				each_value_5 = /*paragraph*/ ctx[9].p;
				let i;

				for (i = 0; i < each_value_5.length; i += 1) {
					const child_ctx = get_each_context_5(ctx, each_value_5, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_5(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_5.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (34:24) {#each paragraph.p as line}
function create_each_block_5(ctx) {
	let html_tag;
	let raw_value = /*line*/ ctx[21] + "";
	let t;

	return {
		c() {
			t = text(" ");
			html_tag = new HtmlTag(t);
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2 && raw_value !== (raw_value = /*line*/ ctx[21] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) html_tag.d();
			if (detaching) detach(t);
		}
	};
}

// (38:20) {#if paragraph.t}
function create_if_block(ctx) {
	let table;
	let thead;
	let tr;
	let t;
	let tbody;
	let each_value_4 = /*paragraph*/ ctx[9].t.head;
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_4.length; i += 1) {
		each_blocks_1[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	let each_value_2 = /*paragraph*/ ctx[9].t.data;
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c() {
			table = element("table");
			thead = element("thead");
			tr = element("tr");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t = space();
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},
		m(target, anchor) {
			insert(target, table, anchor);
			append(table, thead);
			append(thead, tr);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(tr, null);
			}

			append(table, t);
			append(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2) {
				each_value_4 = /*paragraph*/ ctx[9].t.head;
				let i;

				for (i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_4(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(tr, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_4.length;
			}

			if (dirty & /*sections*/ 2) {
				each_value_2 = /*paragraph*/ ctx[9].t.data;
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}
		},
		d(detaching) {
			if (detaching) detach(table);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (42:32) {#each paragraph.t.head as th}
function create_each_block_4(ctx) {
	let th;
	let raw_value = /*th*/ ctx[18] + "";

	return {
		c() {
			th = element("th");
		},
		m(target, anchor) {
			insert(target, th, anchor);
			th.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2 && raw_value !== (raw_value = /*th*/ ctx[18] + "")) th.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(th);
		}
	};
}

// (50:36) {#each tr as td}
function create_each_block_3(ctx) {
	let td;
	let raw_value = /*td*/ ctx[15] + "";

	return {
		c() {
			td = element("td");
		},
		m(target, anchor) {
			insert(target, td, anchor);
			td.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2 && raw_value !== (raw_value = /*td*/ ctx[15] + "")) td.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(td);
		}
	};
}

// (48:32) {#each paragraph.t.data as tr}
function create_each_block_2(ctx) {
	let tr;
	let t;
	let each_value_3 = /*tr*/ ctx[12];
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	return {
		c() {
			tr = element("tr");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
		},
		m(target, anchor) {
			insert(target, tr, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			append(tr, t);
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2) {
				each_value_3 = /*tr*/ ctx[12];
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, t);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}
		},
		d(detaching) {
			if (detaching) detach(tr);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (31:12) {#each section.body as paragraph}
function create_each_block_1(ctx) {
	let p;
	let t0;
	let t1;
	let if_block0 = /*paragraph*/ ctx[9].p && create_if_block_1(ctx);
	let if_block1 = /*paragraph*/ ctx[9].t && create_if_block(ctx);

	return {
		c() {
			p = element("p");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			attr(p, "class", "section-body svelte-mqcoi3");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			if (if_block0) if_block0.m(p, null);
			append(p, t0);
			if (if_block1) if_block1.m(p, null);
			append(p, t1);
		},
		p(ctx, dirty) {
			if (/*paragraph*/ ctx[9].p) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(p, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*paragraph*/ ctx[9].t) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(p, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d(detaching) {
			if (detaching) detach(p);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

// (29:8) {#each sections as section}
function create_each_block(ctx) {
	let strong;
	let t0_value = /*section*/ ctx[6].title + "";
	let t0;
	let t1;
	let each_1_anchor;
	let each_value_1 = /*section*/ ctx[6].body;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			strong = element("strong");
			t0 = text(t0_value);
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			attr(strong, "class", "title svelte-mqcoi3");
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t0);
			insert(target, t1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*sections*/ 2 && t0_value !== (t0_value = /*section*/ ctx[6].title + "")) set_data(t0, t0_value);

			if (dirty & /*sections*/ 2) {
				each_value_1 = /*section*/ ctx[6].body;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			if (detaching) detach(strong);
			if (detaching) detach(t1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let div2;
	let div0;
	let input;
	let t0;
	let label;
	let t4;
	let t5;
	let t6;
	let div1;
	let h1;
	let t7;
	let t8;
	let current;
	let mounted;
	let dispose;
	const docsnav = new DocsNav({ props: { allNodes: /*allNodes*/ ctx[2] } });
	let if_block = /*checked*/ ctx[3] && create_if_block_2(ctx);
	let each_value = /*sections*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			input = element("input");
			t0 = space();
			label = element("label");

			label.innerHTML = `<span class="svelte-mqcoi3"></span> 
            <span class="svelte-mqcoi3"></span> 
            <span class="svelte-mqcoi3"></span> 
            <span class="svelte-mqcoi3"></span>`;

			t4 = space();
			create_component(docsnav.$$.fragment);
			t5 = space();
			if (if_block) if_block.c();
			t6 = space();
			div1 = element("div");
			h1 = element("h1");
			t7 = text(/*title*/ ctx[0]);
			t8 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(input, "type", "checkbox");
			attr(input, "id", "nav-toggle");
			attr(input, "class", "hidden svelte-mqcoi3");
			attr(label, "for", "nav-toggle");
			attr(label, "id", "hamburger");
			attr(label, "class", "svelte-mqcoi3");
			attr(div1, "class", "docs");
			attr(div2, "class", "container svelte-mqcoi3");
			attr(div3, "class", "docs-container svelte-mqcoi3");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, div0);
			append(div0, input);
			input.checked = /*checked*/ ctx[3];
			append(div0, t0);
			append(div0, label);
			append(div0, t4);
			mount_component(docsnav, div0, null);
			append(div2, t5);
			if (if_block) if_block.m(div2, null);
			append(div2, t6);
			append(div2, div1);
			append(div1, h1);
			append(h1, t7);
			append(div1, t8);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(input, "change", /*input_change_handler*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*checked*/ 8) {
				input.checked = /*checked*/ ctx[3];
			}

			const docsnav_changes = {};
			if (dirty & /*allNodes*/ 4) docsnav_changes.allNodes = /*allNodes*/ ctx[2];
			docsnav.$set(docsnav_changes);

			if (/*checked*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(div2, t6);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (!current || dirty & /*title*/ 1) set_data(t7, /*title*/ ctx[0]);

			if (dirty & /*sections*/ 2) {
				each_value = /*sections*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i(local) {
			if (current) return;
			transition_in(docsnav.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(docsnav.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			destroy_component(docsnav);
			if (if_block) if_block.d();
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { sections } = $$props, { allNodes } = $$props;
	let checked = false;

	const uncheck = () => {
		$$invalidate(3, checked = false);
	};

	function input_change_handler() {
		checked = this.checked;
		$$invalidate(3, checked);
	}

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("sections" in $$props) $$invalidate(1, sections = $$props.sections);
		if ("allNodes" in $$props) $$invalidate(2, allNodes = $$props.allNodes);
	};

	return [title, sections, allNodes, checked, uncheck, input_change_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, sections: 1, allNodes: 2 });
	}
}

export default Component;