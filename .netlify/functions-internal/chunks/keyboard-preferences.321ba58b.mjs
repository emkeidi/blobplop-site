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

				const html = updateImageReferences("<p>When was the last time you thought about your keyboard?</p>\n<p>Was it recently, or never? It feels like most people I know fall into one of those two camps. Until the past few years, I hadn't really thought much about what I thwacking away on.</p>\n<p>A few friends who are more into mechanical keyboards slowly won me over to the <em>dark side</em> in a non-pushy way. I appreciated this. I found out about communities dedicated to the elusive perfect key-cap.</p>\n<h2 id=\"time-for-typing\">Time for Typing</h2>\n<p>Sure, I spent some time looking up all I cared to know about the different types of switches. I guess, at the end of the day, the crowd-pleasing brown switch seemed like the fit for me. After a few months of testing out mechanical life on a Redragon Draconic model I knew that I needed to keep exploring. This keyboard is great for saving desk space and, the backlight shines through the keys making it a perfect choice for gaming. The keys are satisfying.</p>\n<img src=\"https://m.media-amazon.com/images/I/61VHJfO7aDL.jpg\" width=\"75%\" alt=\"Keyboard in a different color\">\n<p>The brown switches have been a <em>life changer</em>. The market is teeming with hundreds of switch and key-cap options at any given moment. A few youtube videos showed me everything I needed to know. Assembling a keyboard isn't where my head is at quite yet. Low caps seem more alluring than ever after a trial run of the more traditional height. All of this leads me to the keyboard that I use today:</p>\n<h3 id=\"nuphy-air-75\">NuPhy Air 75</h3>\n<img src=\"https://cdn.shopify.com/s/files/1/0268/7297/1373/products/air75_twilight_2_1800x1800.jpg?v=1654843818\" width=\"75%\" alt=\"Keyboard in a different color\">\n<p>You might have seen it around by now if you have paid any attention to what I'm calling the \"upscale casual keyboard market\".</p>\n<p>While I feel like I was supposed to look further, and like I was never supposed to opt for low-profile key-caps, what can I say, this product was very appealing. My hope is that the lower caps will equal easier typing for long periods of time since that is most of what my job entails now.</p>");

				const frontmatter = {"title":"Keyboard Preferences","slug":"keyboard-preferences","draft":false,"description":"What do you like to type on each day? Have you given it no thought or way too much? Join the casual keyboard movement.","date":"2023-02-01T00:00:00.000Z","author":"Matthew Davis","category":"Random"};
				const file = "E:/code/astro/curved-chaos/src/content/blobs/keyboard-preferences.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWhen was the last time you thought about your keyboard?\r\n\r\nWas it recently, or never? It feels like most people I know fall into one of those two camps. Until the past few years, I hadn't really thought much about what I thwacking away on.\r\n\r\nA few friends who are more into mechanical keyboards slowly won me over to the _dark side_ in a non-pushy way. I appreciated this. I found out about communities dedicated to the elusive perfect key-cap.\r\n\r\n## Time for Typing\r\n\r\nSure, I spent some time looking up all I cared to know about the different types of switches. I guess, at the end of the day, the crowd-pleasing brown switch seemed like the fit for me. After a few months of testing out mechanical life on a Redragon Draconic model I knew that I needed to keep exploring. This keyboard is great for saving desk space and, the backlight shines through the keys making it a perfect choice for gaming. The keys are satisfying.\r\n\r\n<img src=\"https://m.media-amazon.com/images/I/61VHJfO7aDL.jpg\" width=\"75%\"  alt=\"Keyboard in a different color\">\r\n\r\nThe brown switches have been a _life changer_. The market is teeming with hundreds of switch and key-cap options at any given moment. A few youtube videos showed me everything I needed to know. Assembling a keyboard isn't where my head is at quite yet. Low caps seem more alluring than ever after a trial run of the more traditional height. All of this leads me to the keyboard that I use today:\r\n\r\n### NuPhy Air 75\r\n\r\n<img src=\"https://cdn.shopify.com/s/files/1/0268/7297/1373/products/air75_twilight_2_1800x1800.jpg?v=1654843818\" width=\"75%\"  alt=\"Keyboard in a different color\">\r\n\r\nYou might have seen it around by now if you have paid any attention to what I'm calling the \"upscale casual keyboard market\".\r\n\r\nWhile I feel like I was supposed to look further, and like I was never supposed to opt for low-profile key-caps, what can I say, this product was very appealing. My hope is that the lower caps will equal easier typing for long periods of time since that is most of what my job entails now.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"time-for-typing","text":"Time for Typing"},{"depth":3,"slug":"nuphy-air-75","text":"NuPhy Air 75"}];
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
