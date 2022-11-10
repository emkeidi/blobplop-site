import { c as createVNode, F as Fragment } from '../entry.mjs';
import 'html-escaper';
import '@astrojs/netlify/netlify-functions.js';
/* empty css                        *//* empty css                        *//* empty css                          *//* empty css                          *//* empty css                           *//* empty css                          *//* empty css                          *//* empty css                         *//* empty css                                *//* empty css                                *//* empty css                         *//* empty css                        */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<h1 id=\"what-are-blobs\">What are Blobs?</h1>\n<p>This is answered a bit in the About page, but the main concept is that blobs are inspired by all of the content we engage with on the internet.</p>\n<p>Blobs can be writing, photos, videos, audio.</p>\n<p>Yes, in a way, this sounds like Tumblr or Instagram or pretty much any social media.</p>\n<p>Maybe that’s because it basically is. The only true difference here is that this is a site that I personally run, and I hope to produce blobs of valuable content - educational, if I may be so bold.</p>\n<p>There is so much to study in the world, and I have only looked at a small amount, and here I will attempt to lay out some of what I have studied in a way that might be useful to others.</p>\n<blockquote>\n<p>I might well fail, and that’s perfectly fine!</p>\n</blockquote>";

				const frontmatter = {"title":"Blob 1.0","slug":"blob-1-0","excerpt":"Blobs are here. Blobs are new. Blobs are the content you needed to chew on. Don't wait to engage. This blob is for you!","date":"2022-11-09T00:00:00.000Z","author":"Matt Davis"};
				const file = "E:/code/astro/curved-chaos/src/blobs/blob-1-0.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# What are Blobs? \r\n\r\nThis is answered a bit in the About page, but the main concept is that blobs are inspired by all of the content we engage with on the internet. \r\n\r\nBlobs can be writing, photos, videos, audio. \r\n\r\nYes, in a way, this sounds like Tumblr or Instagram or pretty much any social media. \r\n\r\nMaybe that's because it basically is. The only true difference here is that this is a site that I personally run, and I hope to produce blobs of valuable content - educational, if I may be so bold. \r\n\r\nThere is so much to study in the world, and I have only looked at a small amount, and here I will attempt to lay out some of what I have studied in a way that might be useful to others.\r\n\r\n> I might well fail, and that's perfectly fine!\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"what-are-blobs","text":"What are Blobs?"}];
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
