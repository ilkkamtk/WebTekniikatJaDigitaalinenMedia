# AJAX - Asynchronous JavaScript and XML
### Asynkronisuus
Koska JavaScriptin suoritusympäristö on yksisäikeinen, aikaa vieviä toimenpiteitä ei ole varaa jäädä odottamaan synkronisesti, eli siten että ainut säie jää odottamaan kutsun suoritusta, jolloin ohjelma ei tee mitään muuta.
Tämän takia JavaScriptissä monet asiat, kuten AJAX-kutsut ja tiedoston käsittely tehdään asynkronisesti eli vastaus annetaan funktion paluuarvon sijasta takaisinkutsufunktion parametrinä.
Esim:
```html
<img>

<script>
console.log('skripti alkaa');
const xhr = new XMLHttpRequest();
xhr.open('get', 'dataUrlExample.txt', false);
xhr.send(null);

if (xhr.status === 200) {
  document.querySelector('img').src = xhr.responseText;
  console.log('synkroninen lataus valmis');
}

console.log('skripti päättyy');
</script>
``` 

```html
<img>

<script>
console.log('skripti alkaa');
const xhr = new XMLHttpRequest();
xhr.open('get', 'dataUrlExample.txt');
xhr.onreadystatechange = function(evt) { 
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.querySelector('img').src = xhr.responseText;
    console.log('asynkroninen lataus valmis');
  }
 }
xhr.send(null);

if (xhr.status === 200) {
  document.querySelector('img').src = xhr.responseText;
}

console.log('skripti päättyy');
</script>
## Tyypillinen AJAX -sovellus
## JSON
## XML
### JSON vs XML
## XMLHttpRequest -olio
## Fetch API