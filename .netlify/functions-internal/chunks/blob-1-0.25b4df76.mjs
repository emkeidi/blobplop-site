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

				const html = updateImageReferences("<h2 id=\"what-are-blobs\">What are Blobs?</h2>\n<p>If you're here, I take it you're ready for answers.</p>\n<h3 id=\"blobs-aremy-blog\">Blobs are...<em>my blog</em></h3>\n<p>That's it. That's where you've landed</p>\n<p>Thank you for stopping by! 🍵🧁 Tea and a cupcake? I also usually have olives 🫱🫒🫒🫒</p>\n<p>Click around to see a mixture of</p>\n<ul>\n<li><a href=\"https://blobplop.com/blobs\">Writing</a></li>\n<li><a href=\"https://blobplop.com\">Projects</a></li>\n</ul>");

				const frontmatter = {"title":"Blob 1.0","slug":"blobs-what-are-they","draft":false,"description":"Blobs are here. Blobs are new. Blobs are content you might like to chew on. Don't wait to engage. This blob is for you!","date":"2022-11-09T00:00:00.000Z","updated":"2023-07-16T00:00:00.000Z","author":"Matthew Davis","category":"General"};
				const file = "E:/code/astro/curved-chaos/src/content/blobs/blob-1-0.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## What are Blobs?\r\n\r\nIf you're here, I take it you're ready for answers.\r\n\r\n### Blobs are..._my blog_\r\n\r\nThat's it. That's where you've landed\r\n\r\nThank you for stopping by! 🍵🧁 Tea and a cupcake? I also usually have olives 🫱🫒🫒🫒\r\n\r\nClick around to see a mixture of\r\n\r\n- <a href='https://blobplop.com/blobs'>Writing</a>\r\n- <a href='https://blobplop.com'>Projects</a>\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-are-blobs","text":"What are Blobs?"},{"depth":3,"slug":"blobs-aremy-blog","text":"Blobs are...my blog"}];
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
