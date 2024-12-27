# Tech book club landing page solution

Tech book club landing page made with tailwind css.

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Notes for the author](#notes-for-the-author)
  - [Useful resources](#useful-resources)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind] - CSS framework

### What I learned

All in all I did this project as a practice using tailwind, I think it came out pretty good !

#### Notes for the author

If you want to import a variable font and add it to the tailwind configuration, via font face it is done like this:

```css
@layer base {
  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf")
      format("truetype");
  }

  @font-face {
    font-family: "Martian-mono";
    src: url("./assets/fonts/martian-mono/MartianMono-VariableFont_wdth,wght.ttf")
      format("truetype");
  }
}
```

Add to configuration (extend):

```js
extend: {
    fontFamily: {
        body: ["Inter", "sans"],
        heading: ["Martian-mono", "mono"]
    }
},
```

As for adding font bolds individually, I'm not quite sure how to do it properly.

### Useful resources

- [Official Tailwind Docs](https://tailwindcss.com/docs/installation)
- [Tailwind cheatsheet](https://www.creative-tim.com/twcomponents/cheatsheet) - Css properties in form of tailwind classes.
