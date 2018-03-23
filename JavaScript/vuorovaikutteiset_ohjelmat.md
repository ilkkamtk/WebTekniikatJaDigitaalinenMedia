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

Ponnahtava viesti-ikkuna tuotetaan `alert`-funktiolla:
```javascript
alert("Hei tätäkin kautta!");
```

Selainikkunaan ilmestyvä viesti-ikkuna näyttää tältä:
![viesti-ikkuna](img/viesti_ikkuna.png)


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
Esimerkiksi muuttuja nimeltä `nimi` määritellään seuraavasti:
```javascript
var nimi;
```
Tässä vaiheessa muuttuja on määritelty eli ohjelman näkökulmasta
olemassa: sille voidaan asettaa arvo, ja sen arvo voidaan lukea. 
Arvon voi asettaa ja lukea kuinka monta kertaa tahansa; muuttujan arvon
voi kuitenkin lukea vasta sen äjlkeen kun muuttuja on alustettu
eli sille on asetettu arvo ensimmäisen kerran.

Edellä mainittu muuttuja voidaan alustaa seuraavasti:
```javascript
nimi = "Milla";
```


Muuttuja voitaisiin myös määritellä ja alustaa samalla kertaa:
```javascript
var nimi = "Milla";
```

Muuttujat ovat löyhästi tyypitettyjä, joten muuttujaa määriteltäessä
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
### Muuttujien tyypit

Edellä käsiteltiin kahden tyyppisiä muuttujia: kokonaislukuja ja merkkijonoja.
JavaScript-kielessä on kuusi muuttujien alkeistyyppiä:
- totuusarvo- eli boolean-tyyppi, jonka arvona voi olla true tai false
- numeerinen tyyppi, joka voi sisältää kokonais- tai liukuluvun.
- merkkijono
- null, joka ilmaisee, että arvo on tyhjä.
- undefined, joka ilmaisee, että määriteltyä muuttujaa
ei vielä ole alustettu, jolloin sen tyyppi ei ole tiedossa.
- symboli, jonka avulla voidaan luoda yksikäsitteisiä tunnisteita.

Edellä lueteltujen alkeistyyppien lisäksi JavaScriptissä on olemassa oliotyyppi,
joka voi sisältää rakenteeltaan mielivaltaisen monimutkaisia olioita.

Muuttujan tyyppi voidaan testata `typeOf`´-operaatiolla:
```javascript
        var nimi = "Ahmed";
        console.log(typeof nimi);
 ```
 Ohjelma tulostaa merkkijonon "string".
 
### Tyypin muuttaminen

Numeerinen muuttuja voidaan muuttaa merkkijonoksi        
        
        
### Merkkijonojen yhdistäminen
Merkkijonojen
yhdistäminen eli katenaatio toteutetaan `+`-operaatiolla.
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
Selainikkunaan ilmestyy dialogi-ikkuna:
![dialogi-ikkuna](img/dialogi_ikkuna.png)

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

## Matemaattiset operaatiot

Numeerisiin muuttujiin voidaan kohdistaa matemaattisia operaatioita: niitä voidaan 
esimerkiksi laskea yhteen ja vähentää sekä pyöristää haluttuun tarkkuuteen.
Numeerisia arvoja voidaan myös tuottaa satunnaislukugeneraattorin avulla.

### Peruslaskutoimitukset

JavaScript-kielen peruslaskutoimitukset ovat:
- yhteenlasku (`+`)
- vähennyslasku (`-`)
- kertolasku (`*`)
- jakolasku (`/`)
- jakojäännös (`%`)

```javascript
        var luku = 3;
        luku = luku * 7;     // arvo on nyt 21
        luku = 1 + luku/2;   // arvo on nyt 11.5
        console.log(luku);
```
Seuraavilla operaatioilla voidaan muuttaa muuttujan arvoa yhdellä:

- lisäys yhdellä (`++`)
- vähennys yhdellä (`--`)

```javascript
        var luku = 3;
        luku++;     // arvo on nyt 4
        luku--;     // arvo on taas 3
        console.log(luku);
```


Arvoa voidaan myös muuttaa kerralla enemmän:
- lisäys vakiolla (`+=`)
- vähennys vakiolla (`-=`)
- kertominen vakiolla (`*=`)
- jakaminen vakiolla (`/=`)

```javascript
        var luku = 3;
        luku *= 2;    // arvo on nyt 6
        luku /= 3;    // arvo on nyt 2
        luku += 7;   // arvo on nyt 9
        luku -=8;    // arvo on nyt 1
        console.log(luku);
```


### Matemaattiset funktiot

Monet matemaattiset operaatiot - esimerkiksi kosinin laskeminen tai
neliöjuuren otto - toteutetaan `Math`-olion avulla käytettävien
matematiikkametodien avulla. Esimerkiksi seuraava ohjelma tulostaa 
luvun 3 neliöjuuren (`Math.sqrt`) sekä satunnaisluvun (`Math.random`) nollan ja yhden väliltä:

```javascript
        console.log(Math.sqrt(3));
        console.log(Math.random());
```

Math-olion tarjoamia metodeja ei tarvitse opetella ulkoa.
Kun kirjoitat koodia kehittimellä (esimerkiksi WebStorm) ja syötät
`Math`-sanan kirjoitettuasi pisteen, kehitin tarjoaa luettelon
tarjolla olevista metodeista ja vakioista. Luettelosta näet myös, mitä 
argumentteja kullekin metodeista on annettava; esimerkiksi
neliöjuurimetodi `sqrt` vaatii argumentiksi juurrettavan, kun taas satunnaisluvun
tuottava `random`-metodi ei tarvitse argumentteja,

Voit tutustua tarjolla oleviin metodeihin myös virallisen JavaScript-määrityksen kautta:
<http://www.ecma-international.org/ecma-262/6.0/> (luku 20.2.)
tai voit käyttää jotakin netin lukuisista JavaScript-lähteistä ja opetusmateriaaleista.



