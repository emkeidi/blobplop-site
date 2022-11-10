import { c as createVNode, F as Fragment } from '../entry.mjs';
import 'html-escaper';
import '@astrojs/netlify/netlify-functions.js';
/* empty css                        *//* empty css                        *//* empty css                          *//* empty css                          *//* empty css                           *//* empty css                          *//* empty css                          *//* empty css                         *//* empty css                                *//* empty css                                *//* empty css                         *//* empty css                        */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<h1 id=\"how-to-get-prettier-to-work-with-astro\">How to Get Prettier to Work With Astro</h1>\n<p>To get this plugin to work you currently need the following npm package:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">npm i --save-dev prettier-plugin-astro prettier</span></span></code></pre>\n<p>This is the official solution from the Astro team.</p>\n<p>I have it saved here as a developer dependency. If and when this changes I will update this post.</p>";

				const frontmatter = {"title":"Prettier With Astro","slug":"prettier-astro","excerpt":"This is the command you need to run to install the prettier plugin for astro.","date":"2022-11-05T00:00:00.000Z","author":"Matt Davis"};
				const file = "E:/code/astro/curved-chaos/src/blobs/prettier-astro.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# How to Get Prettier to Work With Astro\r\n\r\nTo get this plugin to work you currently need the following npm package:\r\n\r\n```\r\nnpm i --save-dev prettier-plugin-astro prettier\r\n```\r\n\r\nThis is the official solution from the Astro team.\r\n\r\nI have it saved here as a developer dependency. If and when this changes I will update this post. \r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"how-to-get-prettier-to-work-with-astro","text":"How to Get Prettier to Work With Astro"}];
				}
				function getHeaders() {
					console.warn('getHeaders() have been deprecated. Use getHeadings() function instead.');
					return getHeadings();
				}				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					content.astro = {};
					Object.defineProperty(content.astro, 'headings', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')
						}
					});
					Object.defineProperty(content.astro, 'html', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')
						}
					});
					Object.defineProperty(content.astro, 'source', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')
						}
					});
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeaders, getHeadings, rawContent, url };
