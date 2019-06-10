# fit-text-on-lines.js

Adjusts a text's font size to the maximum it can be, whilst still fitting onto a specified amount of lines.

~500 bytes minified.

```html
<h1 class="ftol hero">
Some text that you want to exactly fit on a certain amount of lines
</h1>
```

then use the `min-height` css attribute to specify how many lines you want the text to fit onto, `1px = 1 line`, `2px = 2 lines`, etc.

```css
.hero {
  min-height: 2px;
}
```
###### you must leave the "px"
###### minimun 2 words for oneline, 3 words for 2 lines etc...
###### line-height required, either on element, or inherited eg. from html or body

[DEMO](https://paulbrowne.xyz/fit-text-on-lines)

Tested in all major browsers, IE9, FF old, Chrome older, Safari 6, Android 4.4, iOS 6
