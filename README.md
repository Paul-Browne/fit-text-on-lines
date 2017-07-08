# fit-text-on-lines.js

The maximum font size a line of text can be, whilst still fitting onto a specified amount of lines.

0.5kb minified and gzipped.

```html
<h1 class="js-fit-text-on-lines">
Some text that you want to exactly fit on a certain amount of lines
</h1>
```

###### if "js-fit-text-on-lines" is too long for you, just use "js-ftol"


then use the `min-height` css attribute to specify how many lines you want the text to fit onto, 2px = 2 lines

```css
h1 {
  min-height: "2px";
}
```

###### you must leave the "px"

[DEMO](http://jsbin.com/gibodob)

Tested in all major browsers, IE9, FF old, Chrome older, Safari 6, Android 4.4, iOS 6
