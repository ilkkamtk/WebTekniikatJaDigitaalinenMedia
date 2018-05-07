# CSS - Cascading Style Sheets

Tyylimäärittelyillä, englanniksi Cascading Style Sheets, CSS, tarkoitetaan keinoja, joilla voidaan vaikuttaa sivuston ulkoasuun. Suomeksi näistä käytetään usein myös nimitystä *tyyliehdotukset*, koska täyttä varmuutta siitä, voiko käytetty selain näyttää muotoilut oikein, ei voida saada. Käyttäjältä voi esimerkiksi puuttua määritelty fontti koneeltaan täysin, jolloin sen paikalla tulee käyttää jotain muuta.

Tyylejä voi käyttää hyvin monipuolisesti. Niillä voidaan vaikuttaa useisiin asioihin sivuston ulkoasusta, pelkkien fontti- ja värimääritysten lisäksi niillä voidaan toteuttaa muun muassa useampisarakkeisia sivustoja ja jopa valikkorakenteitakin.

HTML5-määrittely lähtee siitä, että kaikki sivuston ulkoasuun liittyvät asiat, kuten muun muassa

- fontti
- taustakuvat ja -värit
- taulukoiden ja kuvien reunukset

määriteltään tyylien avulla. Esimerkiksi taulukon reunaviivan määrittely pikselin levyiseksi "perinteiseen" tyyliin

`<table border="1">`

on syntaksin vastaista.

## Tyylien käyttäminen

Järkevintä on tallettaa tyylit omaan tyylitiedostoonsa. Näin ne voidaan ottaa yksinkertaisimmin käyttöön jokaisella sivulla. Tyylitiedosto ilmoitetaan `<head>`-osassa:

`<link rel="stylesheet" href="tyyli.css" type="text/css">`

Tässä siis liitetään *tyyli.css*-niminen tiedosto html-dokumenttiin. Tiedosto on ihan tavallinen tekstitiedosto, jossa sisällä tyylimäärittelyt

Tyyli voidaan myös upottaa koodiin taikka yksittäiseen elementtiin:

`<p style="color: green">Heippa!</p>`

Taikka sitten `<style>`-elementillä otsikko-osaan:

```css
<head>
    <style>
        body {font-family: Arial, Helvetica, Sans-serif;}
        p {color: green;}
    </style>
</head>
```
Tässä siis määritellään body-tagille fonttiperhe sekä kappale-tagin fontin väriksi green. Fonttiperheen idea on, että jos koneella on käytettävissä fonteista ensimmäinen, käytetään sitä. Jos taas ei ole, niin sitten seuraava. Viimeiseksi jätetään pelkästään sans-serif (ns. päätteetön fontti), joka voi sitten olla ihan mikä tahansa fontti, joka on selaimessa määritelty yleiseksi päätteettömäksi fontiksi.

## Lisää tietoa

CSS on erittäin laaja kokonaisuus. Hyvä paikka opiskella syvällisemmin, mihin CSS:llä pysytään, löytyy mm. osoitteesta

[https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)

