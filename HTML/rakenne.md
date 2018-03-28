# HTML5, rakenne

HTML-dokumentti rakentuu seuraavista osista:

1. Dokumenttityyppi, joka kertoo käytetyn HTML-kielen version
1. `<html>`-tagista, jonka sisään tulee kaksi osaa
    1. `<head>`: tänne tulevat kaikki otsikko- ja määrittelytiedot: Sivun otsikkorivi, käytetty merkistö, linkki CSS-tiedostoihin jne.
    1. `<body>`: tänne taas kirjoitetaan sivun varsinainen sisältö

Jokainen osa tulee päättää lopputagilla, joka on sama kuin tagi itse, mutta alkaa kauttaviivalla ( / ), esimerkiksi `</body>`.

Eli siis tällainen on jokaisen HTML-sivun runko:

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>

    </body>
</html>
```


## HTML-sivun luominen WebStormilla

Kun projekti on luotu, siihen voi lisätä tiedostoja. Aloitetaan Files-valikosta, josta valitaan New | HTML-file:

![Uusi tiedosto](pics/uusitiedosto.png)

Valinnan jälkeen annetaan tiedostolle nimi ja valitaan, mitä HTML-kielen versiota käytetään. Kuvassa on valittu HTML5:

![Uusi tiedosto](pics/index.png)

Tämä kannattaa tehdä näin sen takia, että WebStorm helpottaa käyttäjän työtä lisäämällä dokumenttiin automaattisesti edellä mainitut tagit:

![Aloitustagit](pics/html5.png)

Nyt olemmekin valmiit aloittamaan. 