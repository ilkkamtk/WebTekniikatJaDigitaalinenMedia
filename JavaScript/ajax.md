# AJAX - Asynchronous JavaScript and XML
### Asynkronisuus
Koska JavaScriptin suoritusympäristö on yksisäikeinen, aikaa vieviä toimenpiteitä ei ole varaa jäädä odottamaan synkronisesti, eli siten, että ainut säie jää odottamaan kutsun suoritusta, jolloin ohjelma ei tee mitään muuta.
Tämän takia JavaScriptissä monet asiat, kuten AJAX-kutsut ja tiedoston käsittely tehdään asynkronisesti eli vastaus annetaan funktion paluuarvon sijasta takaisinkutsufunktion parametrinä.

#### Synkroninen AJAX-pyyntö
```html
<img>

<script>
    console.log('skripti alkaa');
    const xhr = new XMLHttpRequest();                       // XMLHttpRequest-olio, joka hoitaa kommunikaation clientin ja serverin välillä
    xhr.open('get', 'dataUrlExample.txt', false);           // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (false)
    xhr.send(null);                                         // Lähetetään pyyntö

    if (xhr.status === 200) {                               // Jos osoite löytyi, eli pyyntö on onnistunut,
      document.querySelector('img').src = xhr.responseText; // asetetaan <img>-elementin src attribuutin arvoksi ladattu sisältö, joka tässä tapauksessa on dataURL-muotoinen kuva
      console.log('synkroninen lataus valmis');
    }
    
    console.log('skripti päättyy');
</script>
``` 
##### Tehtävä: Kokeile yllä olevaa skriptiä. Aseta osoitteeksi [raw-linkistä löytyvä osoite](img/dataUrlExample.txt)
Koodin pitäisi kirjoittaa konsoliin:
```text
skripti alkaa
synkroninen lataus valmis
skripti päättyy
```

#### Asynkroninen AJAX-pyyntö
```html
<img>

<script>
    console.log('skripti alkaa');
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'dataUrlExample.txt', true);                // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (true)
    xhr.onreadystatechange = naytaKuva;                         // Kuunnellaan muutoksia latauksen tilassa, ja aina kun muutoksia tapahtuu ajetaan naytaKuva-funktio
    xhr.send(null);                                             // Lähetetään pyyntö     
    
    function naytaKuva() {                    
      if (xhr.readyState === 4 && xhr.status === 200) {         // Jos lataus on valmis ja osoite löytyi
        document.querySelector('img').src = xhr.responseText;   // asetetaan <img>-elementin src attribuutin arvoksi ladattu sisältö, joka tässä tapauksessa on dataURL-muotoinen kuva
        console.log('asynkroninen lataus valmis');
      }
     }
    
    console.log('skripti päättyy');
</script>
```
##### Tehtävä: Kokeile yllä olevaa skriptiä. Aseta taas osoitteeksi [raw-linkistä löytyvä osoite](img/dataUrlExample.txt)
Koodin pitäisi kirjoittaa konsoliin:
```text
skripti alkaa
skripti päättyy
asynkroninen lataus valmis
```
Miksi konsolissa olevat tekstit ovat eri järjestyksessa?
 
## Tyypillinen AJAX -sovellus
## JSON
## XML
### JSON vs XML
## XMLHttpRequest -olio
## Fetch API