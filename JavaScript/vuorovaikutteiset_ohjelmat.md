# Vuorovaikutteiset ohjelmat
Tässä moduulissa opitaan kirjoittamaan yksinkertaisia, vuorovaikutteisia
JavaScript-ohjelmia.

Vuorovaikutteisuudella tarkoitetaan mallia, jossa ohjelma
1. lukee käyttäjältä syötteitä
2. käsittelee syötteitä
3. tulostaa tuloksen.

Esimerkkinä tällaisesta on ohjelma, jossa käyttäjä antaa kaksi lukua ja ohjelma tulostaa
lukujen summan. Käyttäjä antaa kaksi syötettä: ensimmäisen ja toisen luvun (vaihe 1), ohjelma laskee niiden
summan (vaihe 2) ja ohjelma laskee tulostetun summan (vaihe 3).

## Tulostaminen

Aloitetaan yksinkertaisesta ohjelmasta, joka tuottaa käyttäjälle tulosteen.

JavaScript tarjoaa kaksi tulostusvaihtoehtoa:
1. Konsolin lokituloste
2. Ponnahtava varoitusikkuna.

Tutustutaan tässä kumpaankin tulostustapaan. Jatkossa rajoitutaan konsolin lokitulosteen käyttöön, koska se
on ohjelmoinnin opiskelun kannalta tarkoituksenmukaisempi: tulosteet saadaan kerralla näkyviin, eikä jokaisen
varoitusikkunan sisältöä tarvitse erikseen kuitata.

### Konsolin lokituloste
Konsolin lokituloste tuotetaan `console.log`-funktiolla.
Lokituloste näkyy selaimen kehittäjätilassa yleensä Console-välilehdellä.

```javascript
console.log("Hei, maailma!");
```

Tuloste konsoli-ikkunassa:

```monospace
Hyvää huomenta kaikille.
```

### Ponnahtava varoitusikkuna

Ponnahtava varoitusikkuna tuotetaan `alert`-funktiolla:
```javascript
alert("Hei tätäkin kautta!");
```

Selainikkunaan ilmestyvä varoitusikkuna:
![varoitusikkuna](img/varoitusikkuna.png)


### Merkkijonoliteraalit

Edellä tulostetut merkkijonot kuten `Hei, maailma` ovat esimerkkejä merkkijonoliteraaleista.
Literaalilla tarkoitetaan arvoa, joka kirjoitetaan ohjelmakoodin sellaisenaan eli ns. kovakoodataan.

Merkkijonoliteraalit kirjoitetaan aina lainausmerkkien sisään.

Esimerkkejä merkkijonoliteraaleista:
- `"Metropolia"`
- `"A2"`
- `"Tässä on pitkä palanen tekstiä."`

Lainausmerkeistä JavaScript-tulkki tunnistaa, että kyseessä on merkkijonoliteraali.
 Tällöin tulkki osaa
käsitellä sitä oikein, esimerkiksi pyydettäessä tulostaa sen sisällön sellaisenaan.

## Muuttujat
Ohjelman tarvitsemia arvoja voidaan tallentaa muuttujiin.
Muuttujaan tallennettavia arvoja voidaan lukea ohjelman aikana monta kertaa,
ja kertaalleen asetettavia arvoja voidaan muuttaa.

JavaScript-kielen muuttujat määritellään `var`-lauseella.
Muuttujat eivät ole tyypitettyjä, joten muuttujaa määriteltäessä
ei ole tarpeen kertoa, minkälainen arvo muuttujaan on tarkoitus tallentaa - 
onko kyseessä esimerkiksi kokonaisluku (kuten 17), liukuluku
 eli desimaaliluku (kuten 21.38) vai merkkijono
 (kuten "tietokone").

Esimerkiksi seuraava ohjelma määrittelee kaksi muuttujaa, joista ensimmäiseen
tallennetaan merkkijono ja toiseen kokonaisluku. Tämän jälkeen ohjelma
tulostaa muuttujien arvot, korvaa ne uusilla arvoilla ja tulostaa
muuttuneet arvot:


nimeltä luku, sijoittaa sen arvoksi
8, tulostaa sijoitetun arvon, kasvattaa arvoa kahdella ja lopuksi tulostaa kasvatetun
arvon:
```javascript
        var luku, nimi;
        luku = 153;
        nimi = "Anna";
        console.log(luku);
        console.log(nimi);
        luku = -17;
        nimi = "Pekka";
        console.log(luku);
        console.log(nimi);
```

Ohjelman tuottama tuloste:
```
153
Anna
-17
Pekka
```   
### Merkkijonojen yhdistäminen
Merkkijonojen yhdistäminen eli katenaatio toteutetaan `+`-operaatiolla.
Esimerkiksi seuraava lause rakentaa tulosteen kolmesta osamerkkijonosta:
```javascript
console.log("Hyvää" + " huomenta" + " kaikille.");
```

Tuloste:
```
Hyvää huomenta kaikille.
```

Vaihtoehtoisesti osajonot ja yhdistetty merkkijono voitaisiin 
tallentaa muuttujiin 
ja tulostaa sen muuttujan arvo, joka sisältää yhdistetyn merkkijonon:

```javascript
        var eka, toka, kolmas, kaikki;
        eka = "Hyvää ";
        toka = "huomenta ";
        kolmas = "kaikille.";
        kaikki = eka + toka + kolmas;
        console.log(kaikki);
```       

## Syötteen luku
Aiemmissa esimerkeissä ohjelmien tuottamat tulosteet olivat aina samanlaisia, eikä
käyttäjä voinut millään tavoin vaikuttaa niiden sisältöön.

Sellaiset ohjelmat ovat harvinaisia. Yleensä halutaan, että käyttäjä voi antaa
ohjelmalle syötteitä, jotka vaikuttavat ohjelman kulkuun.

Syöte luetaan `prompt()`-funktiolla. Funktion argumenttina annetaan merkkijono, joka esitetään dialogi-ikkunassa käyttäjälle.

Seuraava lause kysyy käyttäjältä tämän nimen:

```javascript
     prompt("Anna nimesi.");
```

Tuossa muodossa kysymys on kuitenkin varsin hyödytön, sillä
käyttäjän antamaa nimeä ei oteta talteen. Niinpä käyttäjältä luetut syötteet tallennetaan lähes poikkeuksetta muuttujiin,
jotta luettuja syötteitä voidaan käyttää myöhemmin ohjelmassa.

Seuraava esimerkkiohjelma kysyy käyttäjän nimen ja tervehtii tätä
henkilökohtaisesti:

```javascript
     var nimi;
     nimi = prompt("Anna nimesi.");
     console.log("Hauska tavata, " + nimi);
```


## Laskutoimitukset

