##What Is WhatLine.js?
WhatLine.js is a simple and better way to detect and show message to online/offline users. this use `navigator.onLine` property in HTML5 and if user's browser cant support HTML5, we use XHR to test internet connection.

##How To Use?
Simply include `whatline.js` in your web page. (or include minified version)
There is two way to use WhatLine.js. You can use first way and past `online` or `offline` attribute in your element like this:

```html
<p offline>You havent intenet connection</p>
````
or:

```html
<p online>You have intenet connection</p>
````

Rememmber this point, when you use offline attribute, this element's display will be none! so you when see this message when you are offline! but for online attribute, this message show everytime when you are online.

And way 2! you can use javascript api to set callback for online/offline users with this code:

```javascript
offLine(function() {
	console.log('You Are Offline');
})
````
or:

```javascript
onLine(function() {
	console.log('You Are Online');
})
````

##License

    Copyright (C) 2013 Reza Farhadian (iRezaFarhadian@gmail.com)
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
    documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions 
    of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
    IN THE SOFTWARE.
