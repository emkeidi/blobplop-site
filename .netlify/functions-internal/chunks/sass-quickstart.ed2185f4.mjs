import { c as createVNode, F as Fragment } from '../entry.mjs';
import 'html-escaper';
import '@astrojs/netlify/netlify-functions.js';
/* empty css                        *//* empty css                        *//* empty css                          *//* empty css                          *//* empty css                           *//* empty css                          *//* empty css                          *//* empty css                         *//* empty css                                *//* empty css                                *//* empty css                         *//* empty css                        */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<h1 id=\"sass-quick-start-for-vs-code\">SASS Quick Start for VS Code</h1>\n<p>first you can use node to globally install sass on your machine</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">npm install -g sass</span></span></code></pre>\n<p>in the VS Code terminal for the project is where I then ran:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">sass index.scss index.css</span></span></code></pre>\n<p>I’m not sure if this step is necessary after the initial command since I think this creates that funny map CSS file in the directory. My understanding is this does just that, maps the SCSS file to the CSS one, but sass needs this specific instruction to do so.</p>\n<p>There were other sass commands to have this continually update, but I came across this plugin that helps with live updating:</p>\n<p><a href=\"https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass\">https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass</a></p>\n<p><strong>SASS Benefits</strong></p>\n<p>This seems to be the easiest way to customize bootstrap a bit — you’ll see an import for bootstrap at the bottom of the sass file, and you’ll notice the index.css file is enormous. That’s all of the bootstrap raw CSS.</p>\n<p>It’s best to not edit that directly and instead override it with SASS variables!</p>\n<p><a href=\"https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss\">https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss</a></p>\n<p>This appears to be a comprehensive list of the current variables we can edit.</p>\n<p>Outside of bootstrap, SASS is a CSS preprocessor and has tons of other functionalities I cannot speak to really, but I know involves @mixins and loops and fancier css.</p>\n<p>Last thing, in the index.scss you can add regular CSS code and it will be compiled like regular with the Watch Sass plugin or running the sass command above. I’ve dedicated the top portion of the SCSS file to bootstrap variables, and under the ‘Vanilla CSS’ comment is great for any CSS tweaks</p>";

				const frontmatter = {"title":"SASS Quick Start","slug":"sass-quick-start","excerpt":"This is a simple guide to get SASS running on your VS Code project along with the Live Sass Compiler plugin.","date":"2022-10-15T00:00:00.000Z","author":"Matt Davis"};
				const file = "E:/code/astro/curved-chaos/src/blobs/sass-quickstart.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# SASS Quick Start for VS Code\r\n\r\nfirst you can use node to globally install sass on your machine\r\n\r\n```\r\nnpm install -g sass\r\n```\r\n\r\nin the VS Code terminal for the project is where I then ran:\r\n\r\n```\r\nsass index.scss index.css\r\n```\r\n\r\nI'm not sure if this step is necessary after the initial command since I think this creates that funny map CSS file in the directory. My understanding is this does just that, maps the SCSS file to the CSS one, but sass needs this specific instruction to do so.\r\n\r\nThere were other sass commands to have this continually update, but I came across this plugin that helps with live updating:\r\n\r\n<https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass>\r\n\r\n**SASS Benefits**\r\n\r\nThis seems to be the easiest way to customize bootstrap a bit -- you'll see an import for bootstrap at the bottom of the sass file, and you'll notice the index.css file is enormous. That's all of the bootstrap raw CSS.\r\n\r\nIt's best to not edit that directly and instead override it with SASS variables!\r\n\r\n<https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss>\r\n\r\nThis appears to be a comprehensive list of the current variables we can edit.\r\n\r\nOutside of bootstrap, SASS is a CSS preprocessor and has tons of other functionalities I cannot speak to really, but I know involves @mixins and loops and fancier css.\r\n\r\nLast thing, in the index.scss you can add regular CSS code and it will be compiled like regular with the Watch Sass plugin or running the sass command above. I've dedicated the top portion of the SCSS file to bootstrap variables, and under the 'Vanilla CSS' comment is great for any CSS tweaks\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sass-quick-start-for-vs-code","text":"SASS Quick Start for VS Code"}];
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
