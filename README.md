# introJS

A simple jQuery function which provide a tutorial kind of functionality for your web application.
It will extend your web application's capabilities and allow you to minimize the training part for your application.
First time visitors can get introduced to your site content/functionality.
A new digital sitemap.

# USAGE :::::::
- Step 1: Include the introJS in your application's head/body/footer as per your framework structure.
```html
<script src="intro.js"></script>
```

 <b>Note::</b> <u>jQuery is prerequisite. <b>Place it above the introJS</b></u>. <br> You can use jQuery version of your choice, for easy reference: 

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```
 - Step 2: Provide classes for your elements for which introduction is required.<br><i>Example - 
 ``` html
<div class="section1">Section 1</div>
 <div class="section2">Section 2</div>
 <div class="section3">Section 3</div>
 ```
- Step 3: Call JS function `initiateIntro(arrOfJson,nextBtnClassName,closeBtnClassName,enableScroll)` on document load.
 <br>
 Explaining -
        
   There are 4 parameters for the function, as below ::
   1. **arrOfJson** -  You need to provide a string of json array.<br> Example::<br>
       ``` json
       [{"class":"section1","msg":"section-1-text"},{"class":"section2","msg":"section-2-text"},{"class":"section3","msg":"section-3-text"}]
       ```
   1. **nextBtnClassName** -  This param is used to change the CSS of the next button using your predefined class/classes. If not applicable; pass an empty string as param.    

   1.  **closeBtnClassName** -  This param is used to change the CSS of the close/done button using your predefined class/classes. If not applicable; pass an empty string as param.

   1.  **enableScroll** - Binary param(true/false); when an element to be introduced is off the screen/introduction area it will scroll the page until the element is visible.

-   Step 4: After executing the function, you will see an introduction pane. 
    <img src="intro.PNG"/>
  <br>Easy Right :)
- CSS Class - `<i>above-highlight</i>` is used to highlight the element above the shadowed-overlay. So if you want you can add your custom css in your css file using that class which will be applied when the introduction is triggered for that element
