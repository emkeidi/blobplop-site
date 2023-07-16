import { j as createVNode, F as Fragment, k as spreadAttributes } from './astro.8a8e30e1.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"sass-quick-start-for-vs-code\">SASS Quick Start for VS Code</h2>\n<p>First you can use node to globally install sass on your machine</p>\n<p><code>npm install -g sass</code></p>\n<p>in the VS Code terminal for the project is where I then ran:</p>\n<p><code>sass index.scss index.css</code></p>\n<p>I'm not sure if this step is necessary after the initial command since I think this creates that funny map CSS file in the directory. My understanding is this does just that, maps the SCSS file to the CSS one, but sass needs this specific instruction to do so.</p>\n<p>There were other sass commands to have this continually update, but I came across this plugin that helps with live updating:</p>\n<p>Here is the <a href=\"https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass\">plugin</a>.</p>\n<h3 id=\"sass-benefits\">SASS Benefits</h3>\n<p>This seems to be the easiest way to customize bootstrap a bit -- you'll see an import for bootstrap at the bottom of the sass file, and you'll notice the index.css file is enormous. That's all of the bootstrap raw CSS.</p>\n<p>It's best to not edit that directly and instead override it with SASS variables!</p>\n<p>Here is a <a href=\"https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss\">list of bootstrap variables</a> that can be tweaked.</p>\n<p>This appears to be a comprehensive list of the current variables we can edit.</p>\n<p>Outside of bootstrap, SASS is a CSS preprocessor and has tons of other functionalities I cannot speak to really, but I know involves @mixins and loops and fancier css.</p>\n<p>Last thing, in the index.scss you can add regular CSS code and it will be compiled like regular with the Watch Sass plugin or running the sass command above. I've dedicated the top portion of the SCSS file to bootstrap variables, and under the 'Vanilla CSS' comment is great for any CSS tweaks</p>");

				const frontmatter = {"title":"SASS Quick Start","slug":"sass-start","draft":false,"description":"This is a simple guide to get SASS running on your VS Code project along with the Live Sass Compiler plugin.","date":"2022-10-15T00:00:00.000Z","author":"Matthew Davis","category":"Learning"};
				const file = "E:/code/astro/curved-chaos/src/content/blobs/sass-quickstart.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## SASS Quick Start for VS Code\r\n\r\nFirst you can use node to globally install sass on your machine\r\n\r\n`npm install -g sass`\r\n\r\nin the VS Code terminal for the project is where I then ran:\r\n\r\n`sass index.scss index.css`\r\n\r\nI'm not sure if this step is necessary after the initial command since I think this creates that funny map CSS file in the directory. My understanding is this does just that, maps the SCSS file to the CSS one, but sass needs this specific instruction to do so.\r\n\r\nThere were other sass commands to have this continually update, but I came across this plugin that helps with live updating:\r\n\r\nHere is the [plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).\r\n\r\n### SASS Benefits\r\n\r\nThis seems to be the easiest way to customize bootstrap a bit -- you'll see an import for bootstrap at the bottom of the sass file, and you'll notice the index.css file is enormous. That's all of the bootstrap raw CSS.\r\n\r\nIt's best to not edit that directly and instead override it with SASS variables!\r\n\r\nHere is a [list of bootstrap variables](https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss) that can be tweaked.\r\n\r\nThis appears to be a comprehensive list of the current variables we can edit.\r\n\r\nOutside of bootstrap, SASS is a CSS preprocessor and has tons of other functionalities I cannot speak to really, but I know involves @mixins and loops and fancier css.\r\n\r\nLast thing, in the index.scss you can add regular CSS code and it will be compiled like regular with the Watch Sass plugin or running the sass command above. I've dedicated the top portion of the SCSS file to bootstrap variables, and under the 'Vanilla CSS' comment is great for any CSS tweaks\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"sass-quick-start-for-vs-code","text":"SASS Quick Start for VS Code"},{"depth":3,"slug":"sass-benefits","text":"SASS Benefits"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
