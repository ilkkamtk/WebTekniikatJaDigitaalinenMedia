# AJAX - Asynchronous JavaScript and XML
## Tyypillinen AJAX -sovellus
Koska Ajax-sovellus muokkaa WWW-sivuja dynaamisesti ilman, että käyttäjän tarvitsee navigoida sivulta toiselle, web-sovelluksen toiminta voidaan saada muistuttamaan tavallisia työpöytäohjelmia, kuten esim. Google Docs. Myös Facebook on hyvä esimerkki AJAX-sovelluksesta.

## XMLHttpRequest -olio
XMLHttpRequest -olio hoitaa taustalla kommunikoinnin palvelimen kanssa. Sen avulla voidaan päivittää osia sivusta ilman, että sivu ladattaisiin kokonaan uudestaan.

XHR-olion luominen:
```javascript
const xhr = new XMLHttpRequest();
```
Tärkeimmät metodit:
```javascript
open(metodi, osoite, async, user, pwd); // Määritetään yhteysasetukset
                                        // metodi = GET, POST
                                        // osoite = ladattavan datan osoite
                                        // async = true (asynkroninen) / false (synkroninen) *valinnainen
                                        // user = käyttäjänimi *valinnainen
                                        // pwd = salasana *valinnainen
                                                
send(data);                             // Lähetetään pyyntö palvelimelle
                                        // data = palvelimelle lähetettävä data, jos metodi on POST *valinnainen
                                        // data lähetetään hakulausekkeena (query string)
```

Datan lähettäminen tehdään käyttämällä [hakulauseketta](https://en.wikipedia.org/wiki/Query_string) (query string). Kun Ajax-haku tehdään GET-metodilla, sen paikka on osoitteessa: `haeDataa.php?nimi=Seppo&ika=12`. POST-metodia käytettäessä, sen paikka on send-metodissa: `xhr.send('nimi=seppo&ika=12')`.

Tärkeimmät ominaisuudet 
```javascript
onreadystatechange                      // määritetään funktio, jota kutsutaan kun readyState-ominaisuus vaihtuu

readyState                              // sisältää XMLHttpRequestin tilatiedot
                                        // 0: request not initialized 
                                        // 1: server connection established
                                        // 2: request received 
                                        // 3: processing request
                                        // 4: request finished and response is ready  (Tämä on ainoa, jota oikeasti käytetään)
                                                
responseText                            // palauttaa ladatun datan merkkijonona

responseXML                             // palauttaa ladatun datan XML-oliona

status                                  // palauttaa HTTP-tilakoodin. esim:
                                        // 200: "OK"
                                        // 403: "Forbidden"
                                        // 404: "Not Found"
```

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
##### Tehtävä: Kokeile yllä olevaa skriptiä. Aseta osoitteeksi https://raw.githubusercontent.com/ilkkamtk/WebTekniikatJaDigitaalinenMedia/master/JavaScript/img/dataUrlExample.txt
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
##### Tehtävä: Kokeile yllä olevaa skriptiä. Aseta taas osoitteeksi https://raw.githubusercontent.com/ilkkamtk/WebTekniikatJaDigitaalinenMedia/master/JavaScript/img/dataUrlExample.txt
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
      <nimi>Nukkuva kissa</nimi><kuvaus>Tässä kuvassa kissa nukkuu.</kuvaus><osoite>http://placekitten.com/321/241</osoite>
    </kuva>
    <kuva>
      <nimi>Makaava kissa</nimi><kuvaus>Tässä kuvassa kissa makaa.</kuvaus><osoite>http://placekitten.com/421/251</osoite>
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

## [JSON](http://json.org), JavaScript Object Notation
JSON eli JavaScript Object Notation on suosittu merkintäkieli, jota käytetään yleisesti selainten ja palvelinten välisessä tiedonsiirrossa ja erityisesti Ajax-sovelluksissa. Nykyään Ajax-sovelluksissa useimmiten käytetään XML:n sijasta JSONia. Vaikka JSONissa käytetään JavaScriptin tietorakenteita datan esittämiseen se on silti yhteensopiva muiden kielien kanssa. JSONin käyttö on sekä palvelin-, että selainohjelmoinnissa yleensä paljon yksinkertaisempaa kuin XML. Esim. edellinen XML esimerkki JSON-muodossa:
```json
[
  {
    "nimi": "Nukkuva kissa",
    "kuvaus": "Tässä kuvassa kissa nukkuu.",
    "osoite": "http://placekitten.com/321/241"
  },
  {
    "nimi": "Nukkuva kissa",
    "kuvaus": "Tässä kuvassa kissa makaa.",
    "osoite": "http://placekitten.com/421/251"
  }
]
```
Ylläolevasta esimerkissä on kuvattu taulukko (hakasulkeet []), joka sisältää kaksi oliota (aaltosulkeet {}). Aiempi esimerkki, jossa haetaan XML-dokumentista toisen kuvan tiedot ja näytetään ne HTML-dokumentissa tehdään JSON versiona näin:
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'kuvat.json', true);                        // Kerrotaan XMLHttpRequest-oliolle metodi ja osoite, johon pyyntö lähetetään sekä vaihdetaan toiminta synkroniseksi (true)
    xhr.onreadystatechange = naytaKuva;                         // Kuunnellaan muutoksia latauksen tilassa, ja aina kun muutoksia tapahtuu ajetaan naytaKuva-funktio
    xhr.send(null);                                             // Lähetetään pyyntö     
    
    function naytaKuva() {                    
      if (xhr.readyState === 4 && xhr.status === 200) {         // Jos lataus on valmis ja osoite löytyi
        const kuvat = JSON.parse(xhr.responseText);             // Muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi    
                                                                // (tässä tapauksessa tarkemmin sanottuna taulukoksi)
        const nimi = kuvat[1].nimi;     // 'Kuvat' taulukon toisen objektin 'nimi' ominaisuus
        const kuvaus = kuvat[1].kuvaus; // 'Kuvat' taulukon toisen objektin 'kuvaus' ominaisuus
        const osoite = kuvat[1].osoite; // 'Kuvat' taulukon toisen objektin 'osoite' ominaisuus
        
        document.querySelector('img').src = osoite;
        document.querySelector('img').alt = nimi;
        document.querySelector('figcaption').innerText = kuvaus;
      }
     }
</script>
```


## [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
Fetch on uudempi lupauksiin (promise) perustuva tapa tehdä Ajax-sovelluksia. XMLHTTPRequest-olioon verrattuna Fetch on tehokkaampi, joustavampi ja isommissa sovelluksissa yksinkertaisempi, koska sen kanssa ei jouduta niin sanottuun takaisinkutsuhelvettiin ja virheiden käsittely on helpompaa. Sama kuvanhakuesimerkki kuin aikaisemmin, nyt fetchillä toteutettuna:
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>
    
    fetch('kuvat.json')             // Käynnistetään haku. Vakiometodi on GET.
    .then(function(vastaus){        // Sitten kun haku on valmis,
      return vastaus.json();        // muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
    }).then(function(json){         // Sitten otetaan ladattu data vastaan ja
      naytaKuva(json);              // kutsutaan naytaKuva-funktiota ja lähetetään ladattu data siihen parametrinä.
    }).catch(function(error){       // Jos tapahtuu virhe,
      console.log(error);           // kirjoitetaan virhe konsoliin.
    });                
    
    function naytaKuva(kuvat) {                    
        const nimi = kuvat[1].nimi;     // 'Kuvat' taulukon toisen objektin 'nimi' ominaisuus
        const kuvaus = kuvat[1].kuvaus; // 'Kuvat' taulukon toisen objektin 'kuvaus' ominaisuus
        const osoite = kuvat[1].osoite; // 'Kuvat' taulukon toisen objektin 'osoite' ominaisuus
        
        document.querySelector('img').src = osoite;
        document.querySelector('img').alt = nimi;
        document.querySelector('figcaption').innerText = kuvaus;
     }
</script>
```
JavaScriptin ES8-versiossa esiteltiin [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntaksi, jonka avulla Promisen käyttöä ja varsinkin virheenhallintaa yksinkertaistettiin. Async/await syntaksin avulla funktioita, jotka palauttavat Promisen, käsitellään lähes samoin, kuin mitä tahansa muutakin funktiota. Erona on se, että funktio, joka palauttaa Promisen, pitää kirjoittaa toisen, asynkronisen (async) funktion sisälle. Lisäksi kutsun eteen kirjoitetaan await. Tässä yllä oleva esimerkki käyttäen async/await syntaksia.
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>   
    async function naytaKuvat() {  
        try{
           const vastaus = await fetch('kuvat.json');              // Käynnistetään haku.
           if (!vastaus.ok) throw new Error('jokin meni pieleen'); // Jos tapahtuu virhe, heitetään ilmoitus
           const kuvat = await vastaus.json();                     // muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
           const nimi = kuvat[1].nimi;     // 'Kuvat' taulukon toisen objektin 'nimi' ominaisuus
           const kuvaus = kuvat[1].kuvaus; // 'Kuvat' taulukon toisen objektin 'kuvaus' ominaisuus
           const osoite = kuvat[1].osoite; // 'Kuvat' taulukon toisen objektin 'osoite' ominaisuus
           
           document.querySelector('img').src = osoite;
           document.querySelector('img').alt = nimi;
           document.querySelector('figcaption').innerText = kuvaus;
        } catch (error) {                                          // Otetaan heitetty virheilmoitus kiinni
          console.log(error)
        }                  
     }
   
   naytaKuvat();
</script>
```

## Harjoitustehtävä
Tee sovellus, joka hakee käyttäjän syöttämän tv-sarjan tiedot ja näyttää ne web-sivulla. 
   * Käytettävä API: [TVMaze API](http://www.tvmaze.com/api#show-search)
   * Vaatimukset: 
      * Vaihe 1: Tulostetaan haun tulos konsoliin (3p)
      * Vaihe 2: Tulostetaan web-sivulle haun tuloksesta yhden sarjan tiedot (4p)
         * vaadittavat tiedot: Nimi, linkki kotisivulle (officialSite), medium-kuva sekä yhteenveto (summary)
      * Vaihe 3: Tulostetaan web-sivulle haun tuloksesta kaikkien sarjojen samat tiedot kuin edellä (7p)
         * lisäksi tulostetaan genret, joihin sarja kuuluu
      * Vaihe 4: Tyylikäs ulkoasu CSS:llä ja validi HTML (6p)
   * Tee ensin validi HTML-sivu, jossa on hakukenttä. Eli `<input id="hakuteksti" type="text">` sekä `<button id="hakunappi">Hae</button>`
   * Lisää hakunappiin click-tapahtuma, joka käynnistää haun.
   * Hakua varten tarvitsee hakea 'hakuteksti'-kentän arvo (value), joka sitten lähetetään fetch:in avulla APIin.
   * Haun tuloksessa on todennäköisesti useampi TV-sarja, joten tee for-silmukka, jonka sisällä tulostat tietojen näyttämiseen tarvittavan HTML:n
   * Joidenkin sarjojen tiedoista voi puuttua esim. kuva. Tällöin kyseisen kentän arvo on _null_. Tämä aiheuttaa virheilmoituksen ja skriptin suoritus keskeytyy. Kokeile tehdä skriptistä sellainen, että se sietää em. virheitä. Voit esim. if-lauseella tarkastaa onko jonkin muuttujan arvo null, tai voit kokeilla [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
      * Tätä voit kokeilla esim. hakusanalla 'dome'. Se palauttaa APIsta 9 tv-sarjaa, mutta yhdestä niistä puuttuu kuva.
