# fit-text-on-lines.js

The maximum font size a line of text can be, whilst still fitting onto a specified amount of lines

```html
<h1 class="js-fit-text-on-lines" data-fit-text-on-lines="3">
Some text that you want to exactly fit on a certain amount of lines
</h1>
```

or use the `content` css attribute

```css
h1 {
  content: "2 lines";
}
```

###### the "lines" is just syntactic sugar, the script will just look for a number within the `content` attribute
