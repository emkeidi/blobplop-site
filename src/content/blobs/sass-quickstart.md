---
title: SASS Quick Start
slug: sass-start
isDraft: false
description: This is a simple guide to get SASS running on your VS Code project along with the Live Sass Compiler plugin.
date: 2022-10-15
author: Matthew Davis
category: Learning
---

## SASS Quick Start for VS Code

first you can use node to globally install sass on your machine

`npm install -g sass`

in the VS Code terminal for the project is where I then ran:

`sass index.scss index.css`

I'm not sure if this step is necessary after the initial command since I think this creates that funny map CSS file in the directory. My understanding is this does just that, maps the SCSS file to the CSS one, but sass needs this specific instruction to do so.

There were other sass commands to have this continually update, but I came across this plugin that helps with live updating:

Here is the [plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).

### SASS Benefits

This seems to be the easiest way to customize bootstrap a bit -- you'll see an import for bootstrap at the bottom of the sass file, and you'll notice the index.css file is enormous. That's all of the bootstrap raw CSS.

It's best to not edit that directly and instead override it with SASS variables!

Here is a [list of bootstrap variables](https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss) that can be tweaked.

This appears to be a comprehensive list of the current variables we can edit.

Outside of bootstrap, SASS is a CSS preprocessor and has tons of other functionalities I cannot speak to really, but I know involves @mixins and loops and fancier css.

Last thing, in the index.scss you can add regular CSS code and it will be compiled like regular with the Watch Sass plugin or running the sass command above. I've dedicated the top portion of the SCSS file to bootstrap variables, and under the 'Vanilla CSS' comment is great for any CSS tweaks
