# Valintarakenne

Valintarakenteen avulla ohjelmaan voidaan luoda vaihtoehtoisia suorituspolkuja.
Se, kumpi (tai mikä) polku valitaan, riippuu ohjelmoijan kirjoittaman ehdon voimassaolosta.

JavaScript-kielessä valintarakenne toteutetaan if-ehtolauseella. Esimerkiksi
seuraava ohjelma kysyy käyttäjältä tämän iän ja ilmoittaa,
jos käyttäjä on syötteen perusteella alaikäinen:

```javascript
        let ika;
        ika = prompt('Anna ikäsi.');
        if (ika<18) {
            console.log('Olet alaikäinen.');
        }
```

Ehtolauseessa `if`-sanan perässä on kaarisulkeiden sisällä valintaehto eli looginen lauseke. Se on tässä
tapauksessa `ika<18`.

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

- yhtä suuri kuin (`==`)
- eri suuri kuin (`!=`)
- suurempi kuin (`>`)
- suurempi tai yhtä suuri kuin (`>=`)
- pienempi kuin (`<`)
- pienempi tai yhtä suuri kuin (`<=`)

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
        let luku;
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
        let luku;
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
        let ika;
        ika = prompt('Anna ikäsi');
        if (ika >= 65) {
            console.log('Olet eläkeikäinen');
        }
        else if (ika>=30) {
            console.log('Olet keski-ikäinen.');
        }
        else if (ika>=18) {
                console.log('Olet nuori aikuinen');
        }
```

Huomaa, että kussakin haarassa olevan loogisen lausekkeen arvo lasketaan vasta siinä vaiheessa, kun ylempien
haarojen ehdot on jo todettu epätosiksi. Jos käyttäjä syöttää iäkseen esimerkiksi 38 vuotta, ei `if`-haaran ehto (ikä vähintään 65 vuotta) toteudu ja siirrytään laskemaan ylemmän `else if` -haaran ehdon arvoa. Tässä vaiheessa riittää testata, onko
ikä vähintään 30 vuotta, koska tiedetään jo, että se ei ole 65 vuotta tai enemmän.

Ohjelmassa ei ole `else`-haaraa; jos käyttäjä syöttää iäkseen 17 vuotta tai vähemmän, ohjelma ei tulosta mitään.

Jos aina halutaan päätyä johonkin lopputulokseen, kirjoitetaan viimeinen haara `else`-haarana. Seuraava ohjelma ilmoittaa, onko käyttäjän syöttämä luku positiivinen, negatiivinen vai nolla:
```javascript
        let luku;
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

## Sisäkkäiset valintarakenteet

Valintarakenteita (kuten muitakin ohjausrakenteita) voidaan kirjoittaa
sisäkkäin ja toteuttaa näin toimintalogiikaltaan monimutkaisiakin
ohjelmia.

Tarkastellaan esimerkkinä alla olevaa särkylääkkeen annostusohjetta ja
kirjoitetaan sen pohjalta ohjelma, joka määrittää oikean lääkeannoksen.

Annostusohje on seuraavanlainen:
- 12 vuotta täyttäneen potilaan annos on 500 mikrogrammaa.
- 2-11-vuotiaan potilaan annos on 12,5 mikrogrammaa potilaan painokiloa kohden. Annos ei saa kuitenkaan ylittää aikuisen annosta,
- Lääkettä ei saa antaa alle kaksivuotiaalle potilaalle.

Lääkeannoksen määritys voidaan kirjoittaa JavaScript-ohjelmana näin:
```javascript
        let ika, paino, annos;
        ika = prompt('Anna potilaan ikä vuosina.');
        if (ika>=12) {
            annos = 500;
        }
        else if (ika>=2) {
            paino = prompt('Anna potilaan paino kilogrammoina.');
            annos = paino * 12.5;
            if (annos > 500) {
                annos = 500;
            }
        }
        else {
            annos = 0;
        }
        console.log('Annos on ' + annos + ' mikrogrammaa.');
```
Huomaa `else-if`-haaran sisällä olevaa uusi `if`-lause, joka suoritetaan vain, jos saavutaan kyseiseen haaraan.

## Lueteltujen vaihtoehtojen valintarakenne (switch)

Kaikki valintarakennetta käyttävät ohjelmat voidaan kirjoittaa `if`-valintarakenteen
avulla. JavaScript-kieli tarjoaa kuitenkin myös toisen, `switch`-valintarakenteen,
jossa haarautuminen tapahtuu jonkin lausekkeen arvovaihtoehtojen perusteella.

Esimerkiksi seuraava ohjelma kysyy käyttäjältä laivan hyttiluokan (A, B tai C) ja tulostaa
sitä vastaavan sanallisen kuvauksen:

```javascript
        let luokka = prompt("Anna hyttiluokan tunnus (A/B/C).");
        switch (luokka) {
            case 'A':
                console.log('Ikkunallinen yläkansihytti.');
                break;
            case 'B':
                console.log('Ikkunaton yläkansihytti.');
                break;
            case 'C':
                console.log('Ikkunaton hytti autokannen alla.');
                break;
            default:
                console.log("Virheellinen hyttiluokka.");
        }
```

`switch`-sanan perässä oleva lauseke (tässä `luokka`) toimii valitsimena, jonka arvo määrää, mihin suoritushaaraan
päädytään.

Kukin suoritushaara aloitetaan `case`-sanalla, jota seuraa valitsimen arvo ja kaksoispiste. Tämän jälkeen
kirjoitetaan haarassa suoritettavat lauseet, joita ei tarvitse koota aaltosulkeiden sisään. Haara päättyy `break`-lauseeseen.

Viimeisenä olevaan `default`-haaraan päädytään aina, jos käyttäjän valitsimen arvo ei vastaa
yhdessäkään `case`-haarassa olevaa arvoa.

Jokainen haara (viimeistä `default`-haaraa lukuun ottamatta) päättyy `break`-lauseeseen.
Lause saa `switch`-valintarakenteen suorituksen lakkaamaan välittömästi.
Ilman `break`-lausetta suoritus jatkuisi välittömästi alapuolella olevan
 `case`-haaraan lauseista vaikka valitsimen arvo ei täsmäisikään.
 Jos siis A-hyttiä vastaavan haaran lopussa oleva `break`-lause poistettaisiin,
 ohjelma tulostaisi A-hytistä kaksi kuvausta: `Ikkunallinen yläkansihytti` ja
 `Ikkunaton yläkansihytti`.
 
## Harjoitustehtävät

1. Kirjoita ohjelma, joka kysyy kalastajalta kuhan pituuden senttimetreinä. Jos kuha on alamittainen, ohjelma käskee laskea kuhan takaisin järveen ilmoittaen samalla käyttäjälle, montako senttiä alimmasta sallitusta pyyntimitasta puuttuu. (3p)

   -  Kuha on alamittainen, jos sen pituus on alle 37 cm.

2. Harry Potter -nuortenkirjoissa lajitteluhattu määrää Tylypahkan noitien ja velhojen koulun uuden oppilaan johonkin neljästä tuvasta, jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi.
Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimen ja arpoo tälle tuvan. Jos käyttäjä syöttää nimeksi esim. Anna, ohjelma ilmoittaa esimerkiksi "Anna, olet Korpinkynsi." (3p)

    - Tehtävässä on käytettävä monen vaihtoehdon valintarakennetta (if, else if, ..., else tai switch).

3. Kirjoita ohjelma, joka kysyy käyttäjän sukupuolen ja hemoglobiiniarvon (g/l). Ohjelma ilmoittaa, onko hemoglobiiniarvo alhainen, normaali vai korkea. (3p)

    - Naisen normaali hemoglobiiniarvo on välillä 117-175 g/l.
    - Miehen normaali hemoglobiiniarvo on välillä 134-195 g/l.

4. Kirjoita ohjelma, joka kysyy käyttäjältä lompakossa olevan rahamäärän ja bussilipun hinnan. Jos rahat riittävät bussilippuun, ohjelma vähentää lompakosta bussilipun hinnan ja toivottaa hyvää matkaa. Lopuksi (riittivätpä rahat tai ei) ohjelma ilmoittaa lompakkoon jäävän rahamäärän. (3p)

    - Tallenna lompakossa olevaa rahamäärä omaan muuttujaansa. Muuttujan arvoa tulee vähentää silloin, jos bussilippu ostetaan. Muussa tapauksessa muuttujan arvoa ei saa muuttaa.

5. Kirjoita ohjelma, joka tulostaa tekstin "Lasketaanko neliöjuuri?" varmistusikkunassa. Jos käyttäjä valitsee OK, ohjelma kysyy luvun ja laskee sekä tulostaa sen neliöjuuren. Jos käyttäjä valitsee Cancel, ohjelma tulostaa tekstin "Neliöjuurta ei lasketa." (4p)

    - Varmistusikkuna saadaan näkyviin funktiolla window.confirm(). Funktio palauttaa totuusarvon true, jos käyttäjä valitsee OK. Jos käyttäjä valitsee Cancel, funktio palauttaa totuusarvon false.
   -  Neliöjuurta ei voi laskea negatiivisesta luvusta. Jos käyttäjän antama luku on negatiivinen, ohjelma tulostaa "Negatiivisen luvun neliöjuuri ei ole määritelty". 
    
6. Kirjoita ohjelma, joka kysyy vuosiluvun ja ilmoittaa, onko annettu vuosi karkausvuosi. (4p)

    - Vuosi on karkausvuosi, jos se on jaollinen neljällä. Sadalla jaolliset vuodet ovat karkausvuosia vain jos ne ovat jaollisia myös neljälläsadalla.
    
