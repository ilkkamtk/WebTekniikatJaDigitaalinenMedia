# Taulukot
Taulukko on tietorakenne, joka koostuu joukosta alkioita.
Taulukon käytön ansiosta ei tarvitse keksiä suurta joukkoa muuttujanimiä, vaan
kaikkiin taulukossa olevia arvoja - eli taulukon alkioita - voidaan
käyttää yhden muuttujan kautta.

Esimerkiksi voitaisiin luoda seuraavanlaiset taulukot:
- seitsenalkioinen kokonaislukutaulukko, joka sisältää henkilön työtunnit viikon kunakin päivänä.
- neljäalkioinen merkkijonotaulukko, joka sisältää neljän pelaajan nimet.
- 500-alkioinen liukulukutaulukko, joka sisältää viisisataa arvottua satunnaislukua.

Esimerkiksi työtuntitaulukko voitaisiin visualisoida seuraavasti:
![taulukko](img/taulukko.png)

Taulukon alkioihin viitataan taulukkomuuttujan nimellä ja indeksillä.

Esimerkissä `työtunnit` on taulukkomuuttujan nimi, ja luvut 0 ja 4 ovat indeksejä.
Indeksit voivat vaihdella esimerkissä välillä 0..6.

Taulukon työtunnit viidenteen alkioon viitataan ilmauksella `työtunnit[4]`. Numerointi alkaa
nollasta, ja taulukon indeksi on aina yhtä pienempi kuin taulukon koko - eli alkioiden määrä taulukossa.

JavaScript-ohjelmointikieli ei edellytä, että kaikki taulukon alkiot ovat saman tyyppisiä. Niinpä
voitaisiin luoda esimerkiksi taulukko, jossa osa alkioista on kokonaislukuja ja
osa merkkijonoja. Tämä on kuitenkin harvoin tarkoituksenmukaista.

## Taulukkomuuttujan määritys ja taulukon luonti

Taulukon käyttöönotto koostuu taulukkomuuttujan määrityksestä ja taulukon luonnista.

Seuraava lause luo taulukkomuuttujan nimeltä luvut, jonka arvona on aluksi tyhjä taulukko.
```javascript
        var luvut = [];
```

Lisätään taulukkoon sen jälkeen kolme alkiota:
```javascript
        luvut[0] = 17;
        luvut[1] = 2;
        luvut[2] = 8;
```        
Vaihtoehtoisesti taulukko voitaisiin luoda kirjoittamalla sen
sisältö suoraan lauseeseen, jossa taulukkomuuttuja määritellään:
```javascript
        luvut = [17,2,8];
```    

Huomaa, että taulukon kokoa ei tarvitse tietää taulukkoa luotaessa.
Taulukkoon voidaan sen luonnin jälkeen lisätä haluttu määrä alkioita.

Taulukon koko määräytyy suurimman käytetyn indeksin mukaan. Koko on yhtä suurempi kuin suurin indeksi.
Taulukon `luvut` koko saadaan tarvittaessa lausekkeesta `luvut.length`.

## Taulukon läpikäynti

Taulukko voidaan läpikäydä helposti toistorakenteessa.
Seuraava ohjelma arpoo kymmenen nopanheiton tulosta.
Tulokset esitetään ensin heittojen yhteydessä alkuperäisessä järjestyksessä
 ja sen jälkeen käänteisessä järjestyksessä.

```javascript
        const HEITOT = 5;
        var i, tulos;
        var heitot = [];

        for (i = 0; i<HEITOT; i++) {
            tulos = Math.ceil(Math.random()*6);
            console.log('Heiton ' + (i+1) + ' tulos: ' + tulos);
            heitot[i] = tulos;
        }
        console.log('Takaperin:')
        for (i = HEITOT-1; i>=0; i--) {
            console.log('Heiton ' + (i+1) + ' tulos: ' + heitot[i]);
        }
```

Esimerkki tulosteesta:
```
Heiton 1 tulos: 6
Heiton 2 tulos: 3
Heiton 3 tulos: 4
Heiton 4 tulos: 3
Heiton 5 tulos: 2
Takaperin:
Heiton 5 tulos: 2
Heiton 4 tulos: 3
Heiton 3 tulos: 4
Heiton 2 tulos: 3
Heiton 1 tulos: 6
```

## Taulukon hajakäsittely

## Harva taulukko

## Taulukkometodeja


