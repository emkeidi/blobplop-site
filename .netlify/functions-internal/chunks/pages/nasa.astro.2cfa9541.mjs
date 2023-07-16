/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.8a8e30e1.mjs';
import { useState, useEffect } from 'react';
/* empty css                          */import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                         */
const logo = "/_astro/alien.34d2f15d.png";

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- TODO make me static!  -->${maybeRenderHead($$result)}<header class="header astro-3EF6KSR2">
  <div class="container astro-3EF6KSR2">
    <div class="logo astro-3EF6KSR2">
      <span class="logo astro-3EF6KSR2">
        <a href="/" class="astro-3EF6KSR2">
          <img${addAttribute(logo, "src")} alt="logo" class="astro-3EF6KSR2">
        </a>
      </span>
    </div>
    <nav class="astro-3EF6KSR2">
      <ul class="astro-3EF6KSR2">
        <li class="astro-3EF6KSR2"><a href="/" class="astro-3EF6KSR2">Home</a></li>
        <li class="astro-3EF6KSR2"><a href="/about" class="astro-3EF6KSR2">About</a></li>
        <li class="astro-3EF6KSR2"><a href="/blobs" class="astro-3EF6KSR2">Blobs</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}, "E:/code/astro/curved-chaos/src/components/Header.astro");

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer astro-SZ7XMLTE">
  <div class="container astro-SZ7XMLTE">
    <div class="astro-SZ7XMLTE">
      <h3 class="astro-SZ7XMLTE">BlobPlop</h3>
      <p class="astro-SZ7XMLTE">
        <a href="https://astro.build" class="astro-SZ7XMLTE">
          <img src="https://astro.badg.es/v1/built-with-astro.svg" alt="Built with Astro" width="150" height="27.5" class="astro-SZ7XMLTE">
        </a>
      </p>
      <p class="astro-SZ7XMLTE">
        <a href="https://www.flaticon.com/free-icons/alien" title="alien icons" class="astro-SZ7XMLTE">Alien logo created by Freepik - Flaticon</a>
      </p>
    </div>
    <div class="astro-SZ7XMLTE">
      <h3 class="astro-SZ7XMLTE">Links</h3>
      <ul class="astro-SZ7XMLTE">
        <li class="astro-SZ7XMLTE"><a href="/" class="astro-SZ7XMLTE">Home</a></li>
        <li class="astro-SZ7XMLTE"><a href="/about" class="astro-SZ7XMLTE">About</a></li>
        <li class="astro-SZ7XMLTE"><a href="/blobs" class="astro-SZ7XMLTE">Blobs</a></li>
      </ul>
    </div>
  </div>
</footer>`;
}, "E:/code/astro/curved-chaos/src/components/Footer.astro");

function SpaceImageCard({
  image
}) {
  if (image.media_type === "image") {
    return /* @__PURE__ */ jsx("div", {
      className: "col",
      children: /* @__PURE__ */ jsxs("div", {
        className: "card shadow text-bg-dark mb-3",
        children: [/* @__PURE__ */ jsx("img", {
          src: image.url,
          alt: image.title,
          className: "card-img-top"
        }), /* @__PURE__ */ jsxs("div", {
          className: "card-body",
          children: [/* @__PURE__ */ jsxs("details", {
            children: [/* @__PURE__ */ jsxs("summary", {
              children: [/* @__PURE__ */ jsx("em", {
                children: image.title
              }), ", ", image.date, image.copyright && /* @__PURE__ */ jsx("p", {
                children: image.copyright
              })]
            }), image.explanation ? /* @__PURE__ */ jsx("p", {
              className: "card-text",
              children: image.explanation
            }) : /* @__PURE__ */ jsx("p", {
              children: "No explanation detected 🔭🌚"
            })]
          }), /* @__PURE__ */ jsx("p", {
            children: /* @__PURE__ */ jsx("a", {
              href: image.hdurl,
              target: "_blank",
              rel: "noopener",
              children: "Link to original"
            })
          })]
        })]
      })
    });
  } else {
    return /* @__PURE__ */ jsx("div", {
      className: "col",
      children: /* @__PURE__ */ jsxs("div", {
        className: "card shadow text-bg-dark mb-3 g-3",
        children: [/* @__PURE__ */ jsx("iframe", {
          src: image.url,
          allow: "autoplay"
        }), /* @__PURE__ */ jsxs("div", {
          className: "card-body",
          children: [/* @__PURE__ */ jsxs("details", {
            children: [/* @__PURE__ */ jsxs("summary", {
              children: [/* @__PURE__ */ jsx("h5", {
                className: "card-title",
                children: image.title
              }), /* @__PURE__ */ jsxs("h6", {
                className: "card-subtitle mb-2",
                children: [image.date, image.copyright && /* @__PURE__ */ jsx("p", {
                  children: image.copyright
                })]
              })]
            }), image.explanation ? /* @__PURE__ */ jsx("p", {
              className: "card-text",
              children: image.explanation
            }) : /* @__PURE__ */ jsx("p", {
              children: "No explanation detected 🔭🌚"
            })]
          }), /* @__PURE__ */ jsx("p", {
            children: /* @__PURE__ */ jsx("a", {
              href: image.url,
              target: "_blank",
              rel: "noopener",
              children: "Link to original"
            })
          })]
        })]
      })
    });
  }
}
__astro_tag_component__(SpaceImageCard, "@astrojs/react");

const APODList = () => {
  const [httpError, setHttpError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [newImages, setNewImages] = useState(false);
  useEffect(() => {
    const fetchSpaceImages = async () => {
      const imagesResponse = await fetch("https://api.blobplop.com/api/v1/apod");
      if (!imagesResponse.ok) {
        throw new Error("something went wrong in space!");
      }
      const imagesResponseJson = await imagesResponse.json();
      setImages(imagesResponseJson);
      setIsLoadingImages(false);
    };
    fetchSpaceImages().catch((error) => {
      setIsLoadingImages(false);
      setHttpError(error.message);
    });
  }, [newImages]);
  if (httpError) {
    return /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("p", {
        children: httpError
      })
    });
  }
  for (let image of images) {
    if (image.copyright == null) {
      image.copyright = "";
    } else {
      image.copyright = `Credit: ${image.copyright}`;
    }
  }
  return /* @__PURE__ */ jsx("div", {
    className: "space-images-list",
    children: /* @__PURE__ */ jsxs("section", {
      className: "space-images container-fluid",
      id: "space-images",
      children: [/* @__PURE__ */ jsx("div", {
        className: "col text-center mb-3",
        children: /* @__PURE__ */ jsx("button", {
          className: "btn btn-primary m-2 p-2",
          onClick: () => setNewImages(!newImages),
          children: "New Images"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "row row-cols-1",
        children: images.map((image) => /* @__PURE__ */ jsx(SpaceImageCard, {
          image
        }, image.url))
      }), /* @__PURE__ */ jsx("div", {
        className: "col text-center",
        children: /* @__PURE__ */ jsx("button", {
          className: "btn btn-primary mb-4 p-2",
          onClick: () => setNewImages(!newImages),
          children: "New Images"
        })
      })]
    })
  });
};
__astro_tag_component__(APODList, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$SpaceLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpaceLayout;
  const { title = "BlobPlop" } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-3555XEKS">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/x-icon" href="/alien.png">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="astro-3555XEKS">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-3555XEKS" })}
		<main class="astro-3555XEKS">
			${renderSlot($$result, $$slots["default"])}
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-3555XEKS" })}
	</body></html>`;
}, "E:/code/astro/curved-chaos/src/layouts/SpaceLayout.astro");

const $$Astro = createAstro();
const prerender = false;
const $$Nasa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nasa;
  return renderTemplate`${renderComponent($$result, "SpaceLayout", $$SpaceLayout, { "class": "astro-CQBAHMO3" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-CQBAHMO3">
		<section class="astro-CQBAHMO3">
			<h1 class="title astro-CQBAHMO3">Blob: <span class="text-gradient astro-CQBAHMO3">Star Gazers</span></h1>
			<section class="intro astro-CQBAHMO3">
				<p class="astro-CQBAHMO3">
					APOD stands for Astronomy Picture of the Day, a NASA service that has been serving up
					intergalactic goodness since June 16, 1995. 🌠
				</p>
				<p class="astro-CQBAHMO3">
					This page fetches three images or videos from the NASA APOD API. You can click to request
					new images every 30 seconds.
				</p>
				<p class="astro-CQBAHMO3">
					Each image or video should have a link at the bottom of its description. Images refresh
					often, so be sure to open the links if you wish to hang onto any favorites! Credit is
					provided when detected.
				</p>
				<p class="astro-CQBAHMO3">
					Pro tip: If the content isn't updating when you press the button, please wait a few more
					seconds and try again. Also, click the titles to reveal an explanation.
				</p>
			</section>
		</section>
		<section class="images astro-CQBAHMO3">
			${renderComponent($$result2, "APODList", APODList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/code/astro/curved-chaos/src/components/APOD/APODList", "client:component-export": "APODList", "class": "astro-CQBAHMO3" })}
		</section>
	</main>
` })}`;
}, "E:/code/astro/curved-chaos/src/pages/nasa.astro");

const $$file = "E:/code/astro/curved-chaos/src/pages/nasa.astro";
const $$url = "/nasa";

const nasa = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nasa,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Footer as a, nasa as n };
