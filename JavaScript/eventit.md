# Tapahtumankäsittely
Koska JavaScriptiä käytetään interaktiivisuuden lisäämiseen verkkosivuilla, tarvitaan jokin keino miten voidaan vastata käyttäjän tekemiin tai järjestelmässä tapahtuviin toimintoihin ja tapahtumiin.
Tätä keinoa kutsutaan tapahtumankäsittelyksi, englanniksi event handling.

Esimerkiksi, jos käyttäjä napsauttaa painiketta, siihen voidaan vastata näyttämällä tietoruutu:
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');
nappi.addEventListener('click', function(){
  alert('Klikattu');
})
</script>
``` 
## perinteinen
````javascript
document.getElementById('#nappi').onclick = someFunction;
````
## moderni
```javascript
document.getElementById('#nappi').addEventListener('click', someFunction);
```
## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)