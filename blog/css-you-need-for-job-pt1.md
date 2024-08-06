---
layout: blog.vto
title: get job ready (CSS) pt1
tags:
    - CSS
    - HTML
    - tutorial

featuredQuote: One of the hardest things to accept as an aspiring web developer is that elements must go side-by-side. No matter how hard you try to fight it, elements cannot just be in a single vertical column layout centered horizontally. Your backend dev only days are over, you must now use flexbox yet again.
---
### Intro

This blog post is part of a series aimed to tell you everything you need to know to be
JOB READY for CSS. For context, in my senior year of college I was working part time for a company where I knew
very little CSS to start and it would be a large aspect of my work, and I was extremely intimidated. It is likely that you might feel really intimidated by CSS like I did too. So Let's fix that. 

### Center it, please
Yup, this is a cliché for sure but it's the truth. You need to know how to center elements, and it is actually way more confusing than it should be when you need to figure this one out. Here are a couple ways we can centre an element: 

#### 1. Width + Margins
Give the element a defined width and set the left and right margin values to 'auto':

```
.element{
    width: 900px;
    margin-left: auto;
    margin-right: auto;
}
```
#### 2. Flexbox
Give the element's parent container the display flex property, then use justify content property on the parent and set it to 'center'.

```
.container{
    display: flex;
    justify-content: center;
}
```
HTML:
```
<div class="container">
    <div class="element">I will be centered!</div>
</div>
```
### Side by side layouts

One of the hardest things to accept as an aspiring web developer is that elements must go side-by-side. No matter how hard you try to fight it, elements cannot just be in a single vertical column layout centered horizontally. Your backend dev only days are over, you must now use flexbox yet again. 

Take this layout for example: 

<div class="flex flex-row">
    <div class="w-1/3 h-36 bg-blue-400 rounded mr-2">
    </div>

    <div class="w-2/3 h-36 bg-red-500 rounded"></div>
</div>

You can see that they are side by side, and the first element is about 1/3 the space and the other takes up about 2/3 of the remaining space. This is achieved using flexbox, and it is quite simple. 

```
<div class="container">
    <div class="blue">
    </div>

    <div class="red">
    </div>
</div>
```
CSS:
```
.container{
    display: flex;
    column-gap: 3px;
}
.blue{
    width: 30%;
}
.red{
    width: 67%;
}
```

I recommend that you get acquainted with grid layouts, they do have great use cases, but honestly if you wanted to you could probably achieve any layout in flexbox. It's just that versatile. In my next post, I will show you some more advanced layouts patterns you want to learn to achieve using flexbox!