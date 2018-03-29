# Valintarakenne

Valintarakenteen avulla ohjelmaan voidaan luoda vaihtoehtoisia suorituspolkuja.
Se, kumpi (tai mikä) polku valitaan, riippuu ohjelmoijan kirjoittaman ehdon voimassaolosta.

JavaScript-kielessä valintarakenne toteutetaan if-ehtolauseella. Esimerkiksi
seuraava ohjelma kysyy käyttäjältä tämän iän ja ilmoittaa,
jos käyttäjä on syötteen perusteella alaikäinen:

```javascript
        var ikä;
        ikä = prompt('Anna ikäsi.');
        if (ikä<18) {
            console.log('Olet alaikäinen.');
        }
```

Ehtolauseessa `if`-sanan perässä on kaarisulkeiden sisällä valintaehto eli looginen lauseke. Se on tässä
tapauksessa `ikä<18`.

Loogisen lausekkeen arvo on aina tosi tai epätosi - eli `true` tai `false`.

Valintaehto kirjoitetaan siten, että se on arvoltaan tosi täsmälleen silloin,
kun ehdollinen ohjelmanosa halutaan suorittaa.

Ehdollinen ohjelmanosa eli lohko rajataan aaltosulkein ja vakiintuneen käytännön
mukaisesti sisennetään. Esimerkissä ehdolliseen ohjelmanosaan kuuluu
yksi lause, joka on `console.log()`-metodin kutsu.
Jos lohkoon kuuluvia lauseita on vain yksi, aaltosulkeita ei välttämättä tarvita.

Jos valintaehto on epätosi, ehdollista osaa ei suoriteta. Esimerkiksi syötteellä 18 ohjelman
suoritus hyppää ehdollisen ohjelmanosan yli.

## Vertailuoperaattorit

Valintalauseessa oleva ehdon ilmaisemiseksi tarvitaan yleensä vertailuoperaattoreita. JavaScript-kielessä on käytössä seuraavat vertailuoperattorit:

- yhtä suuri kuin `--`
- eri suuri kuin `!=`
- suurempi kuin `>`
- suurempi tai yhtä suuri kuin `>=`
- pienempi kuin `<`
- pienempi tai yhtä suuri kuin `<=`

### Vaara: yhtäsuuruusehto vs. sijoituslause

Huomaa sijoitusoperaattorin (=) ja yhtäsuuruusvertailuoperaattorin (==) ero. Seuraava esimerkki on virheellistä koodia:
```javascript
        if (eka = toka) {
                console.log('Samat luvut.')
        }
```

Sijoituslause ehtolauseen ehdossa johtaa yleensä väärään toimintaan.
Teknisesti sijoituslauseen arvoksi tulee sijoituslauseessa muuttujaan sijoitettava arvo.
Ehdossa oleva numeerinen arvo muunnetaan automaattisesti totuusarvoksi siten, että nollasta poikkeava luku on true ja nolla on false.


## Loogiset operaattorit

Loogisia lausekkeita voidaan liittää loogisten operaattoreiden avulla. Käytössä on negaatio sekä ja- ja tai-konjunktiot:
- negaatio (`!`) muuttaa lausekekkeen totuusarvon vastakkaiseksi
- ja `&&` edellyttää että kummatkin puolet ovat tosia
- tai `||` edellyttää, että jompikumpi tai molemmat puolet ovat tosia.

Esimerkiksi seuraava ohjelma ilmoittaa, jos käyttäjän antama kokonaisluku on sekä parillinen että yli 10:

```javascript
        var luku;
        luku = prompt('Anna kokonaisluku');
        if (luku%2==1 && luku>10) {
            console.log('Annoit parillisen luvun, joka on suurempi kuin 10');
        }
```

## Kahden vaihtoehdon valintarakenne

Kahden toisensa poissulkevan vaihtoehdon valintarakenteessa eli `if-else`-rakenteessa annetaan myös vaihtoehtoinen lohko, joka suoritetaan, jos ehto on epätosi.

Kaksi vaihtoehtoista lohkoa ovat toisensa poissulkevia; jompikumpi suoritetaan aina.

Seuraava esimerkki ilmoittaa, onko käyttäjän antama kokonaisluku parillinen vai pariton:

```javascript
        var luku;
        luku = prompt('Anna kokonaisluku');
        if (luku%2==0) {
            console.log('Annoit parillisen luvun');
        }
        else {
            console.log('Annoit parittoman luvun.');
        }
```

## Monen vaihtoehdon valintarakenne

Monen toisensa poissulkevan vaihtoehdon valintarakenteeseen liitetään tarpeellinen määrä
`else if`-haaroja. Suorituksen aikana siirrytään alkuperäiseen `if`-haaraan - tai sen valintahdon ollessa epätosi -  ensimmäiseen `else-if`-haaraan, jonka valintaehto täyttyy. Seuraava ohjelma kommentoi täysi-ikäisen käyttäjän ikää:

```javascript
        var ikä;
        ikä = prompt('Anna ikäsi');
        if (ikä >= 65) {
            console.log('Olet eläkeikäinen');
        }
        else if (ikä>=30) {
            console.log('Olet keski-ikäinen.');
        }
        else if (ikä>=18) {
                console.log('Olet nuori aikuinen');
        }
```

Huomaa, että kussakin haarassa olevan loogisen lausekkeen arvo lasketaan vasta siinä vaiheessa, kun ylempien
haarojen ehdot on jo todettu epätosiksi. Jos käyttäjä syöttää iäkseen esimerkiksi 38 vuotta, ei `if`-haaran ehto (ikä vähintään 65 vuotta) toteudu ja siirrytään laskemaan ylemmän `else if` -haaran ehdon arvoa. Tässä vaiheessa riittää testata, onko
ikä vähintään 30 vuotta, koska tiedetään jo, että se ei ole 65 vuotta tai enemmän.

Ohjelmassa ei ole `else`-haaraa; jos käyttäjä syöttää iäkseen 17 vuotta tai vähemmän, ohjelma ei tulosta mitään.

Jos aina halutaan päätyä johonkin lopputulokseen, kirjoitetaan viimeinen haara `else`-haarana. Seuraava ohjelma ilmoittaa, onko käyttäjän syöttämä luku positiivinen, negatiivinen vai nolla:
```javascript
        var luku;
        ikä = prompt('Anna luku');
        if (luku>0) {
            console.log('Luku on positiivinen.');
        }
        else if (luku<0) {
            console.log('Luku on negatiivinen.');
        }
        else {
                console.log('Luku on nolla.');
        }
```

## Lueteltujen vaihtoehtojen valintarakenne (switch)



## Harjoitustehtävät
