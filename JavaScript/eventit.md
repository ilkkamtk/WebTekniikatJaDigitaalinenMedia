# Tapahtumankäsittely
## perinteinen
````javascript
document.getElementById('#nappi').onclick = someFunction;
````
## moderni
```javascript
document.getElementById('#nappi').addEventListener('click', someFunction);
```
## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)