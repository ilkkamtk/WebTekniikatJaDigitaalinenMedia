# AJAX - Asynchronous JavaScript and XML
### A = Asynkronisuus
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
Miksi konsolissa olevat tekstit ovat eri järjestyksessä kuin edellisessä tehtävässä?

## J = JavaScript
AJAXissa JavaScriptiä käytetään ladatun datan näyttämiseen HTML-dokumentissa.

## X = XML, eXtensible Markup Language
XML on merkintäkieli, kuten HTML. Se on tarkoitettu datan tallennukseen ja siirtoon. Tyypillinen XML-dokumentti näyttää tältä:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<kuvat>
    <kuva>
      <nimi>Nukkuva kissa</nimi>
      <kuvaus>Tässä kuvassa kissa nukkuu.</kuvaus>
      <osoite>http://placekitten.com/321/241</osoite>
    </kuva>
    <kuva>
      <nimi>Makaava kissa</nimi>
      <kuvaus>Tässä kuvassa kissa makaa.</kuvaus>
      <osoite>http://placekitten.com/421/251</osoite>
    </kuva>
</kuvat>
```
2000-luvun puolivälin paikkeilla, kun XMLHttpRequest lisättiin JavaScriptiin, XML oli luonnollinen vaihtoehto käytettäväksi datan siirtoon.
XML-dokumenttien luominen palvelimella ja varsinkin niiden lukeminen / parsiminen asiakaspäässä JavaScriptillä on kohtuu hankalaa verrattuna nykyisiin tekniikoihin.
Esim. haetaan yllä olevasta XML-dokumentista toisen kuvan tiedot ja näytetään ne HTML-dokumentissa:
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'kuvat.xml', true);                // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (true)
    xhr.onreadystatechange = naytaKuva;                         // Kuunnellaan muutoksia latauksen tilassa, ja aina kun muutoksia tapahtuu ajetaan naytaKuva-funktio
    xhr.send(null);                                             // Lähetetään pyyntö     
    
    function naytaKuva() {                    
      if (xhr.readyState === 4 && xhr.status === 200) {         // Jos lataus on valmis ja osoite löytyi
        const xml = xhr.responseXML;
        const nimi = xml.firstChild.childNodes[1].childNodes[0].firstChild.nodeValue;  // xml > kuvat > kuva[1] > nimi > tekstinoodi >tekstiarvo
        const kuvaus = xml.firstChild.childNodes[1].childNodes[1].firstChild.nodeValue;  // xml > kuvat > kuva[1] > kuvaus > tekstinoodi > tekstiarvo
        const osoite = xml.firstChild.childNodes[1].childNodes[2].firstChild.nodeValue;// xml > kuvat > kuva[1] > osoite > tekstinoodi > tekstiarvo
        
        document.querySelector('img').src = osoite;
        document.querySelector('img').alt = nimi;
        document.querySelector('figcaption').innerText = kuvaus;
      }
     }
</script>
```

## JSON

### JSON vs XML

## Tyypillinen AJAX -sovellus

## XMLHttpRequest -olio
## Fetch API