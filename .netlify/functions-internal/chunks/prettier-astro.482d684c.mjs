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

				const html = updateImageReferences("<h2 id=\"how-to-get-prettier-to-work-with-astro\">How to Get Prettier to Work With Astro</h2>\n<p>To get this plugin to work you currently need the following npm package:</p>\n<p><code>npm i --save-dev prettier-plugin-astro prettier</code></p>\n<p>This is the official solution from the Astro team as of whenever this date says.</p>\n<p>It's always worth checking around if you have any trouble with this command.</p>");

				const frontmatter = {"title":"Prettier With Astro","slug":"prettier-with-astro","draft":false,"description":"This is the command you need to run to install the prettier plugin for astro.","date":"2022-11-05T00:00:00.000Z","author":"Matthew Davis","category":"Learning"};
				const file = "E:/code/astro/curved-chaos/src/content/blobs/prettier-astro.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## How to Get Prettier to Work With Astro\r\n\r\nTo get this plugin to work you currently need the following npm package:\r\n\r\n`npm i --save-dev prettier-plugin-astro prettier`\r\n\r\nThis is the official solution from the Astro team as of whenever this date says.\r\n\r\nIt's always worth checking around if you have any trouble with this command.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"how-to-get-prettier-to-work-with-astro","text":"How to Get Prettier to Work With Astro"}];
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
