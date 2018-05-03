# AJAX - Asynchronous JavaScript and XML
### Asynkronisuus
Koska JavaScriptin suoritusympäristö on yksisäikeinen, aikaa vieviä toimenpiteitä ei ole varaa jäädä odottamaan synkronisesti, eli siten että ainut säie jää odottamaan kutsun suoritusta, jolloin ohjelma ei tee mitään muuta.
Tämän takia JavaScriptissä monet asiat, kuten AJAX-kutsut ja tiedoston käsittely tehdään asynkronisesti eli vastaus annetaan funktion paluuarvon sijasta takaisinkutsufunktion parametrinä.
Esim:
```html
<img>

<script>
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://raw.githubusercontent.com/ilkkamtk/WebTekniikatJaDigitaalinenMedia/master/JavaScript/img/dataUrlExample.txt?token=ACOtjEk98YJVWboOLX83HyTWSg1b5eK1ks5a8-INwA%3D%3D', false);
request.send(null);

if (xhr.status === 200) {
  document.querySelector('img').src = xhr.responseText;
}

console.log('synkroninen valmis');
</script>

``` 
## Tyypillinen AJAX -sovellus
## JSON
## XML
### JSON vs XML
## XMLHttpRequest -olio
## Fetch API