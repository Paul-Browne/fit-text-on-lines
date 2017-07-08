# fit-text-on-lines.js

The maximum font size a line of text can be, whilst still fitting onto a specified amount of lines

```html
<h1 class="js-fit-text-on-lines">
Some text that you want to exactly fit on a certain amount of lines
</h1>
```

###### if "js-fit-text-on-lines" is too long for you, just use "js-ftol"


then use the `min-height` css attribute to specify how many lines you want the text to fit onto 

```css
h1 {
  min-height: "2px";
}
```

###### you must leave the "px"
