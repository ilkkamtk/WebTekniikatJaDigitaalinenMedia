# DOM - Document Object Model
Document Object Model eli dokumenttioliomalli on puumainen kuvaus HTML dokumentistä.
![DOM](https://www.w3schools.com/js/pic_htmltree.gif) 
*w3schools.com*

HTML DOM on standardi, joka määrittelee kuinka HTML elementtejä valitaan, muokataan, lisätään ja poistetaan. Kaikkia elementtejä käsitellään olioina ja jokaista elementtiä, attribuuttia ja elementin sisältöä (esim. tekstiä) kutsutaan nimellä 'node'.
```html
<html>
    <head>
        <title>Esimerkki</title>
    </head>
    <body>
        <p>Tässä on yksi kappale</p>
        <script>
        const kappale = document.querySelector('p'); // valitsee dokumentistä ensimmäisen p-elementin
        console.log(kappale.innerText); // tulostaa p-elementin sisällä oleva tekstin konsoliin
        </script>
    </body>
</html>
```  
Yllä olevassa esimerkissä valittu p-elementti tallennetaan elementtioliona (tai elementtinodena) nimellä 'kappale'. Tämän jälkeen 'kappale'-oliota voidaan käsitellä [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-rajapinnan ominaisuuksien ja metodien avulla.

## Parent/child
![DOM](https://www.w3schools.com/js/pic_htmltree.gif) 

Koska DOM kuvaa dokumentin puumaisena rakenteena, käytetään sen yhteydessä termejä vanhempi (tai äiti/isä), lapsi, ja sisarus. Englanniksi parent, child ja sibling. Esim. ylläolevassa kuvassa h1-elementti on body-elementin lapsi ja a-elementin sisarus. Vastaavasti body-elementti on sekä h1- ja a-elementtien vanhempi.

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-rajapinta
`document`-rajapinta edustaa web-sivua, sen sisällä ovat kaikki muut dokumentin objektit. Kun haluat valita dokumentista minkä tahansa HTML-elementin, sinun tulee aloittaa document-rajapinnasta. Esim. `document.getElementByID('logo')`

### Tärkeimmät metodit ja ominaisuudet
```javascript
document.querySelector('#logo')        // hakee dokumentista yhden elementin css-valitsimen avulla. Tässä tapauksessa tietyllä id:llä
document.querySelectorAll('.nappi')    // hakee dokumentista elementtejä css-valitsimen avulla.
document.getElementById('logo')        // hakee dokumentista elementin tietyllä id:llä

// komennot voidaan kohidstaa myös valittuun nodeen:
solmu.getElementsByTagName("p")     // hakee solmu-nodesta kaikki p-elementit
solmu.appendChild(lapsi)            // lisää solmu-nodeen lapsinoden
solmu.removeChild(lapsi)            // poistaa solmu-nodesta lapsinoden
```
Koska document-rajapinta perii [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)- ja [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)-rajapinnat, itse asiassa tärkeimmät ominaisuudet tulevat niistä sekä [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)-rajapinnasta:
```javascript
elem.innerHTML   // elem-noden sisältämä HTML-koodi
elem.innerText   // elem-noden sisältämä teksti
elem.nodeName    // elem-noden elementtityyppi
elem.nodeValue   // elem-noden arvo
elem.parentNode  // elem-noden parentnode
elem.childNodes  // elem-noden lapsinodet
elem.children    // elem-noden lapsielementit
elem.firstChild  // elem-noden ensimmäinen lapsinode 
elem.lastChild   // elem-noden viimeinen lapsinode
elem.attributes  // elem-noden attribuuttinodet
```
### Object collections
Dokumentista voidaan myös hakea elementtikokoelmia:
```javascript
document.forms      // hakee kaikki form-elementit
document.images     // hakee kaikki kuva-elementit
document.links      // hakee kaikki area- ja a-elementit, joilla on href-attribuutti
document.scripts    // hakee kaikki script-elementit
```

## Esimerkkejä

1. Valitse dokumentista elementti, jonka id on 'uutiset' ja tallenna elementtinode nimellä 'u'. Sen jälkeen valitse elementtinodesta 'u' kaikki p-elementit ja tallenna elementtilista nimellä 'p':
    ```javascript
    const u = document.getElementById('uutiset');
    const p = u.getElementsByTagName('p');
    
    // sama voidaan kirjoittaa myös ilman välimuuttujaa
    const p = document.getElementById('uutiset').getElementsByTagName("p");
 
    // tai yhdellä komennolla käyttäen CSS-valitsinta
    const p = document.querySelectorAll('#uutiset p');
    ```
1. Valitse listan `<ul>` toinen  nimike (item eli `<li>`):  
     ```html
        <ul>
           <li>Eka nimike</li>
           <li>Toka nimike</li>
           <li>Kolmas nimike</li>
        </ul>
    ```
    
    ```javascript
    const toka = document.getElementsByTagName('li')[1];  // getElementsByTagname palauttaa taulukon. Taulukon järjestysnumerot alkavat nollasta, joten 1 tarkoittaa toista <li>-elementtiä.
    const toka = document.querySelectorAll('li')[1];      // Sama querySelectorAll-metodilla
    
    // Käydään läpi kaikki <li>-elementit forEach-metodin avulla (lihavoidaan teksti)
    const bullets = document.querySelectorAll('ul li');
            bullets.forEach(bullet => {
              bullet.innerHTML = `<b>${bullet.innerHTML}</b>`;
            })
    ```

1. Elementtilista kaikista "tiedote"-luokkaan kuuluvista p-elementeistä:   
    ```javascript
    const x = document.querySelectorAll('p.tiedote');
    ```
1. Elementin sisällön muuttaminen:
   ```html
   <p id="pvm"><span class="sininen">Maanantai</span></p>
   
   <script>
   document.getElementById('pvm').innerHTML = '<span class="punainen">Tiistai</span>';
   </script>
   ```
1. Attribuutin arvon muuttaminen:
   ```html
   <img id="logo" src="metropolia.png"  alt="Joku kuva">
   
   <script>
   document.getElementById('logo').src = 'laurea.png';                 // käytetään attribuutin nimeä ominaisuutena
   document.getElementById('logo').setAttribute('src', 'laurea.png');  // tai setAttribute()-metodia
   </script>
   ```
1. HTML:n lisääminen sivulle:
    1. innerHTML-ominaisuuden avulla:
       ```html
       <div id="esimerkki"></div>
       
       <script>
       const div = document.querySelector('#esimerkki');          // haetaan elementti, jonka id on esimerkki
       const html =                                               // tehdään monirivinen merkkijono, huomaa backtick merkkijonon ympärillä (gravis)
               `<p>
                   Tässä on kappale tekstiä, jossa on kuva.
                   <img src="http://placekitten.com/321/241" alt="Kissa">
                </p>`;
       div.innerHTML = html;                                      // asetetaan merkkijono 'html' valitun elementin HTML-sisällöksi
       </script>
       ```
    1. Sama DOM-metodien avulla
       ```html
           <div id="esimerkki"></div>
           
           <script>
           const div = document.querySelector('#esimerkki');       // haetaan elementti, jonka id on esimerkki
    
           const i = document.createElement('img');                // tehdään img elementti
           i.src = 'http://placekitten.com/321/241';               // asetetaan src-attribuutti
           i.alt = 'Kissa';                                        // asetetaan alt-attribuutti
           
           const t = document.createTextNode('Tässä on kappale tekstiä, jossa on kuva.');  // tehdään tekstinoodi
    
           const p = document.createElement('p');                  // tehdään p-elementti
           p.appendChild(t);                                       // lisätään teksti p-elementtin
           p.appendChild(i);                                       // lisätään kuva p-elementtiin
    
           div.appendChild(p);                                     // lisätään p-elementti HTML-dokumentista valittuun elementtiin
                                                                   // tässä vaiheessa luotu HTML ilmestyy dokumenttin.
           </script>
        ```
### CSS:n käsittely
JavaScriptillä voidaan myös muokata elementtien ulkoasua. Vaihtoehtoina tällöin on joko vaihtaa style-attribuutin tai class-attribuuttien arvoja aivan kuten HTML-dokumenteissa on normaalistikin tapana.

Inline eli style attribuutin muokkaaminen:

```html
<p style="background-color: #ccc; padding: 1rem;" id="kappale">Jotain tekstiä</p>

<script>
document.querySelector('#kappale').style = "color: #eee; background-color: #222; padding: 3rem;";
</script>
```
Class attribuutin muokkaaminen:
```css
/* ulkoinen css-tiedosto */
.punainen {
    color: #f00;
}

.sininen {
    color: #00f;
}
```

```html
<p class="punainen" id="kappale">Jotain tekstiä</p>

<script>
// Vaihdetaan siniseksi
document.querySelector('#kappale').setAttribute('class', 'sininen');
// poistetaan sininen
document.querySelector('#kappale').classList.toggle('sininen');
// Korvataan sininen punaisella
document.querySelector('#kappale').classList.replace('sininen', 'punainen');
</script>
```
Lisää metodeja class-attribuuttien käsittelyyn, katso [classList-dokumentaatio](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).


# DOM-tehtävät

### Tehtävä A
Lataa [tämä zip](misc/DOM-tiedostot.zip) omalle koneellesi ja pura se hakemistoon, jossa
muidenkin tuntien tehtävät ovat.
   
### Tehtävä B, [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) (2p.)
1. Avaa tiedostot task-b.html ja js/main-b.js
1. Lisää JavaScriptillä HTML-sivun `<main>`-elementtiin toinen `<article>`-elementti muokkaamalla tiedostoa js/main-b.js:
   * Katso [Esimerkkejä](https://github.com/ilkkamtk/WebTekniikatJaDigitaalinenMedia/blob/master/JavaScript/DOM.md#esimerkkej%C3%A4) kohta 6i
   * Uusi `<article>`-elementti sisältää samat elementit kuin valmiina oleva `<article>`-elementti. Tee uudet elementit HTML merkkijonona (älä käytä valmiina olevan elementin `innerHTML`-ominaisuutta).
   * Valitse `<main>`-elementti käyttäen [DOM-metodeja](https://www.w3schools.com/js/js_htmldom_elements.asp)
   * Käytä [innerHTML](https://www.w3schools.com/js/js_htmldom_html.asp) -ominaisuutta lisätessäsi `<article>`-elementin `<main>`-elementtiin.
   * Huomaa, että sinun on käytettävä `+=`-operaattoria lisäyksessä
   * Jos haluat sisällyttää HTML:än useamman rivin pituisen merkkijonon, käytä `+`-operaattoria tai tee [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
   
### Tehtävä C, [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_nodes.asp) (4p.)
1. Avaa tiedostot task-c.html ja js/main-c.js
1. Lisää JavaScrptillä uusi `<article>`-elementti `<main>`-elementtiin:
   * Katso [Esimerkkejä](https://github.com/ilkkamtk/WebTekniikatJaDigitaalinenMedia/blob/master/JavaScript/DOM.md#esimerkkej%C3%A4) kohta 6ii
   * Uusi `<article>`-elementti sisältää samat elementit kuin valmiina oleva `<article>`-elementti. Tee nämä käyttäen DOM-metodia ja luotujen elementtien ominaisuuksia.
   * Valitse `<main>`-elementti käyttäen [DOM-metodeja](https://www.w3schools.com/js/js_htmldom_elements.asp)
   * Käytä DOM-metodeja lisätessäsi `<article>`-elementin `<main>`-elementtiin
   * Tekstinoden tekemisessä voit kokeilla eri vaihtoehtoja (`createTextNode`-metodi tai elementtiolion `innerHTML`-ominaisuudet).

### Tehtävä D, HTML sisällön lisääminen taulukosta [iteroimalla](https://www.w3schools.com/js/js_loop_for.asp) (5p.)
1. Avaa tiedostot task-d.html ja js/main-d.js
1. Lisää `<article>`-elementejä `<main>`-elementtiin iteroimalla picArray (käyttäen toistorakennetta tiedostossa main-d.js).
   * Uusien `<article>`-elementtien tulee sisältää samat elementit kuin tehtävissä B ja C
   * Valitse `<main>`-elementti DOM-metodeja käyttäen
   * Käytä `innerHTML`-ominaisuutta lisätäksesi `<article>`-elementit `<main>`-elementtiin.
      * Lisää otsikko `<h2>`-elementtiin ja `<img>`-elementin alt-attribuuttiin
      * Lisää seloste `<caption>`-elementtiin
      * Lisää tiedostopolku `<img>`-elementin src-attribuuttiin
      * Lisää kuvaus `<p>`-elementtiin
      
### Tehtävä E, HTML sisällön lisääminen taulukosta [iteroimalla](https://www.w3schools.com/js/js_loop_for.asp) (5p.)
1. Avaa tiedostot task-e.html ja js/main-e.js
1. Lisää `<article>`-elementejä `<main>`-elementtiin iteroimalla picArray (käyttäen toistorakennetta tiedostossa main-e.js).
   * Käytä tällä kertaa DOM-metodeja lisätäksesi `<article>`-elementit `<main>`-elementtiin.
   * Lopputulos pitäisi selaimessa näyttää samalta, kuin tehtävä D.
