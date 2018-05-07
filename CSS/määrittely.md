# Tyylien määritteleminen

Tyylien määritteleminen on varsin yksinkertaista: määrittelyt ovat tiettyyn elementtiin kohdistuvia ominaisuus-arvo-pareja. Lisäksi arvot ovat periytyviä: 

```css
    body {font-family: Arial, Helvetica, Sans-serif;
          background-color: yellow;
          color: red;}
    h1 {color: blue;
        background-color: white;}
    p {font-style: italic;}    
```

Eli:

1. body-tagille on määritelty fonttiperhe. Se on siten voimassa myös h1- ja p-tageissakin, koska ne voivat sijaita ainoastaan body-tagin alla. Ei siis tarvitse määritellä näitä erikseen.
1. h1-tagissa on erikseen määritelty fontin väri (color) sekä taustan väri. Ne siis ohittavat body:ssä tehdyt määritykset
1. p-tagin fonttityyliksi on määritelty *italic*. Muuten sen ominaisuudet periytyvät body-tagilta.

## Tagille määritellyt "vaihtoehtoiset" tyylit

Useinmiten tiettyjä muotoiluja tarvitaan vain osassa elementtejä. Tällöin voidaan määritellä sitä varten omia tyylejä:

```css
    p.warning {font-style: bold;
       background-color: red;}    
```

Nyt voidaan jossakin kappaleessa toteuttaa varoitusteksti näin:

`<p class="warning">Varoitus! Ole erittäin varovainen!</p>`

Yllä kuvattu tyyli voi esiintyä ainoastaan `<p>`-tagissa. Jos sille on tarvetta muualla, voidaan jättää tagi määrittelemättä:

```css
    .warning {font-style: bold;
       background-color: red;}    
```

Nyt *warning*-luokkaa voi käyttää minkä tahansa tagin kanssa.

## Mittayksiköistä

Elementtien kokoa voidaan ilmaista ns. absoluuttisilla taikka suhteellisilla mittayksiköillä. Absoluuttiset ovat seuraavat:

| Yksikkö | Selitys   | 
|:------ |:-------|
| cm    | senttimetrit |
| mm      | millimetrit    |
| in | tuumat, 1 tuuma = 96px = 2,54 cm   |
| px    | pikseli, tuuman 96. osa   |
| pt   | pisteet (1/72 tuuma, kirjapainoalan mittayksikkö    |
| pc      | pica, 1 pc = 12 pt    |

Suhteelliset taas seuraavia:

| Yksikkö | Selitys   | 
|:------ |:-------|
| em    | suhteessa elementin fonttikokoon. Esim. 2em on kaksinkertainen |
| ex     | verrattuna fontin korkeuteen. Harvoin käytetty  |
| ch| suhteutettuna merkin "0" leveyteen|
| rem  |  suhteellinen juurielementin (body) fonttikokoon  |
| vw | 1% viewportin (selainikkunan) leveydestä. 15% vw tarkoittaa 15% ikkunan leveydestä |
| vh     | 1% viewportin korkeudesta    |
| vmin    | 1% pienempi viewportin korkeudesta taikka leveydestä   |
| vmax     | 1% suurempi viewportin korkeudesta taikka leveydestä   |
| %    | montako prosenttia suhteessa isäntäelementin kokoon.   |
