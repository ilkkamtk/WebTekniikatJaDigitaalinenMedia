# AJAX - Asynchronous JavaScript and XML
### Asynkronisuus
Koska JavaScriptin suoritusympäristö on yksisäikeinen, aikaa vieviä toimenpiteitä ei ole varaa jäädä odottamaan synkronisesti, eli siten että ainut säie jää odottamaan kutsun suoritusta, jolloin ohjelma ei tee mitään muuta.
Tämän takia JavaScriptissä monet asiat, kuten AJAX-kutsut ja tiedoston käsittely tehdään asynkronisesti eli vastaus annetaan funktion paluuarvon sijasta takaisinkutsufunktion parametrinä.
Esim:
```html
<p>
    Tänne ladataan tekstiä
</p>
<script>
const xhr = new XMLHttpRequest();
xhr.open('get', )
</script>

``` 
## Tyypillinen AJAX -sovellus
## JSON
## XML
### JSON vs XML
## XMLHttpRequest -olio
## Fetch API