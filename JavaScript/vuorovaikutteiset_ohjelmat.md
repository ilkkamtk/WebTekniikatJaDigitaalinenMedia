# Vuorovaikutteiset ohjelmat
Tässä moduulissa opitaan kirjoittamaan yksinkertaisia, vuorovaikutteisia
JavaScript-ohjelmia.

Vuorovaikutteisuudella tarkoitetaan mallia, jossa ohjelma
1. lukee käyttäjältä syötteitä
2. käsittelee syötteitä
3. tulostaa tuloksen.

Tarkastellaan esimerkkinä ohjelmaa, jossa käyttäjä antaa kaksi lukua ja ohjelma tulostaa
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

Esimerkiksi seuraava ohjelma (TODO).

### Merkkijonojen yhdistäminen
Merkkijonojen yhdistäminen eli katenaatio toteutetaan `+`-operaatiolla.
Esimerkiksi seuraava lause rakentaa tulosteen kolmesta osamerkkijonosta:
```javascript
console.log("Hyvää" + " huomenta" + " kaikille.");
```

Tuloste:
```monospace
Hyvää huomenta kaikille.
```
## Syötteen luku
Aiemmissa esimerkeissä ohjelmien tuottamat tulosteet olivat aina samanlaisia, eikä
käyttäjä voinut millään tavoin vaikuttaa niiden sisältöön.

Sellaiset ohjelmat ovat harvinaisia. Yleensä halutaan, että käyttäjä voi antaa
ohjelmalle syötteitä, jotka vaikuttavat ohjelman kulkuun.

Käyttäjältä luetut syötteet tallennetaan lähes poikkeuksetta muuttujiin, jotta niitä voidaan käyttää myöhemmin ohjelmassa.

TODO.

## Laskutoimitukset

