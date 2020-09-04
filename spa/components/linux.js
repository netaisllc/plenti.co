/* generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element,
	text
} from '/spa/web_modules/svelte/internal/index.js';

function create_fragment(ctx) {
	let svg;
	let metadata;
	let rdf_RDF;
	let cc_Work;
	let dc_format;
	let t;
	let dc_type;
	let dc_title;
	let g;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			metadata = svg_element("metadata");
			rdf_RDF = svg_element("rdf:RDF");
			cc_Work = svg_element("cc:Work");
			dc_format = svg_element("dc:format");
			t = text("image/svg+xml");
			dc_type = svg_element("dc:type");
			dc_title = svg_element("dc:title");
			g = svg_element("g");
			path = svg_element("path");
			attr(dc_type, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
			attr(cc_Work, "rdf:about", "");
			attr(path, "id", "XMLID_92_");
			attr(path, "d", "m274.66 244.89c-8.944-3.663-12.77-8.524-12.4-15.777 0.381-8.466-4.422-14.667-6.703-17.117 1.378-5.264 5.405-23.474 4e-3 -39.291-5.804-16.93-23.524-42.787-41.808-68.204-7.485-10.438-7.839-21.784-8.248-34.922-0.392-12.531-0.834-26.735-7.822-42.525-7.598-17.193-22.844-27.052-41.831-27.052-11.295 0-22.889 3.53-31.811 9.684-18.27 12.609-15.855 40.1-14.257 58.291 0.219 2.491 0.425 4.844 0.545 6.853 1.064 17.816 0.096 27.206-1.17 30.06-0.819 1.865-4.851 7.173-9.118 12.793-4.413 5.812-9.416 12.4-13.517 18.539-4.893 7.387-8.843 18.678-12.663 29.597-2.795 7.99-5.435 15.537-8.005 20.047-4.871 8.676-3.659 16.766-2.647 20.505-1.844 1.281-4.508 3.803-6.757 8.557-2.718 5.8-8.233 8.917-19.701 11.122-5.27 1.078-8.904 3.294-10.804 6.586-2.765 4.791-1.259 10.811 0.115 14.925 2.03 6.048 0.765 9.876-1.535 16.826-0.53 1.604-1.131 3.42-1.74 5.423-0.959 3.161-0.613 6.035 1.026 8.542 4.331 6.621 16.969 8.956 29.979 10.492 7.768 0.922 16.27 4.029 24.493 7.035 8.057 2.944 16.388 5.989 23.961 6.913 1.151 0.145 2.291 0.218 3.39 0.218 11.434 0 16.6-7.587 18.238-10.704 4.107-0.838 18.272-3.522 32.871-3.882 14.576-0.416 28.679 2.462 32.674 3.357 1.256 2.404 4.567 7.895 9.845 10.724 2.901 1.586 6.938 2.495 11.073 2.495h1e-3c4.416 0 12.817-1.044 19.466-8.039 6.632-7.028 23.202-16 35.302-22.551 2.7-1.462 5.226-2.83 7.441-4.065 6.797-3.768 10.506-9.152 10.175-14.771-0.276-4.667-3.365-8.761-8.062-10.684zm-150.47-1.353c-0.846-5.96-8.513-11.871-17.392-18.715-7.26-5.597-15.489-11.94-17.756-17.312-4.685-11.082-0.992-30.568 5.447-40.602 3.182-5.024 5.781-12.643 8.295-20.011 2.714-7.956 5.521-16.182 8.66-19.783 4.971-5.622 9.565-16.561 10.379-25.182 4.655 4.444 11.876 10.083 18.547 10.083 1.027 0 2.024-0.134 2.977-0.403 4.564-1.318 11.277-5.197 17.769-8.947 5.597-3.234 12.499-7.222 15.096-7.585 4.453 6.394 30.328 63.655 32.972 82.044 2.092 14.55-0.118 26.578-1.229 31.289-0.894-0.122-1.96-0.221-3.08-0.221-7.207 0-9.115 3.934-9.612 6.283-1.278 6.103-1.413 25.618-1.427 30.003-2.606 3.311-15.785 18.903-34.706 21.706-7.707 1.12-14.904 1.688-21.39 1.688-5.544 0-9.082-0.428-10.551-0.651l-9.508-10.879c3.749-1.851 7.497-5.757 6.509-12.805zm12.065-179.39c-0.297 0.128-0.589 0.265-0.876 0.411-0.029-0.644-0.096-1.297-0.199-1.952-1.038-5.975-5-10.312-9.419-10.312-0.327 0-0.656 0.025-1.017 0.08-2.629 0.438-4.691 2.413-5.821 5.213 0.991-6.144 4.472-10.693 8.602-10.693 4.85 0 8.947 6.536 8.947 14.272 0 0.975-0.071 1.945-0.217 2.981zm37.686 4.607c0.444-1.414 0.684-2.944 0.684-4.532 0-7.014-4.45-12.509-10.131-12.509-5.552 0-10.069 5.611-10.069 12.509 0 0.47 0.023 0.941 0.067 1.411-0.294-0.113-0.581-0.223-0.861-0.329-0.639-1.935-0.962-3.954-0.962-6.015 0-8.387 5.36-15.211 11.95-15.211 6.589 0 11.95 6.824 11.95 15.211 0 3.489-0.963 6.819-2.628 9.465zm-4.859 16.324c-0.095 0.424-0.297 0.612-2.531 1.774-1.128 0.587-2.532 1.318-4.289 2.388l-1.174 0.711c-4.718 2.86-15.765 9.559-18.764 9.952-2.037 0.274-3.297-0.516-6.13-2.441-0.639-0.435-1.319-0.897-2.044-1.362-5.107-3.351-8.392-7.042-8.763-8.485 1.665-1.287 5.792-4.508 7.905-6.415 4.289-3.988 8.605-6.668 10.741-6.668 0.113 0 0.215 8e-3 0.321 0.028 2.51 0.443 8.701 2.914 13.223 4.718 2.09 0.834 3.895 1.554 5.165 2.01 4.001 1.374 6.087 3.132 6.34 3.79zm35.947 186.37c2.257-10.181 4.857-24.031 4.436-32.196-0.097-1.855-0.261-3.874-0.42-5.826-0.297-3.65-0.738-9.075-0.283-10.684 0.09-0.042 0.19-0.078 0.301-0.109 0.019 4.668 1.033 13.979 8.479 17.226 2.219 0.968 4.755 1.458 7.537 1.458 7.459 0 15.735-3.659 19.125-7.049 1.996-1.996 3.675-4.438 4.851-6.372 0.257 0.753 0.415 1.737 0.332 3.005-0.443 6.885 2.903 16.019 9.271 19.385l0.927 0.487c2.268 1.19 8.292 4.353 8.389 5.853-1e-3 1e-3 -0.051 0.177-0.387 0.489-1.509 1.379-6.82 4.091-11.956 6.714-9.111 4.652-19.438 9.925-24.076 14.803-6.53 6.872-13.916 11.488-18.376 11.488-0.537 0-1.026-0.068-1.461-0.206-4.844-1.51-8.831-8.499-6.689-18.466zm-165.11-25.973c-0.494-2.312-0.884-4.137-0.465-5.905 0.304-1.31 6.771-2.714 9.533-3.313 3.883-0.843 7.899-1.714 10.525-3.308 3.551-2.151 5.474-6.118 7.17-9.618 1.228-2.531 2.496-5.148 4.005-6.007 0.085-0.05 0.215-0.108 0.463-0.108 2.827 0 8.759 5.943 12.177 11.262 0.867 1.341 2.473 4.028 4.331 7.139 5.557 9.298 13.166 22.033 17.14 26.301 3.581 3.837 9.378 11.214 7.952 17.541-1.044 4.909-6.602 8.901-7.913 9.784-0.476 0.108-1.065 0.163-1.758 0.163-7.606 0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241-5.674-0.919-13.444-2.176-14.732-3.312-1.044-1.171 0.167-4.978 1.235-8.337 0.769-2.414 1.563-4.91 1.998-7.523 0.617-4.168-0.109-7.561-0.691-10.287z");
			attr(path, "fill", "#3c3c3c");
			attr(g, "id", "XMLID_91_");
			attr(g, "fill", "#3c3c3c");
			attr(svg, "enable-background", "new 0 0 304.998 304.998");
			attr(svg, "version", "1.1");
			attr(svg, "viewBox", "0 0 305 305");
			attr(svg, "xml:space", "preserve");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "xmlns:cc", "http://creativecommons.org/ns#");
			attr(svg, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
			attr(svg, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, metadata);
			append(metadata, rdf_RDF);
			append(rdf_RDF, cc_Work);
			append(cc_Work, dc_format);
			append(dc_format, t);
			append(cc_Work, dc_type);
			append(cc_Work, dc_title);
			append(svg, g);
			append(g, path);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
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