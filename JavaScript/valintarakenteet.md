#Valintarakenne

Valintarakenteen avulla ohjelmaan voidaan luoda vaihtoehtoisia suorituspolkuja.
Se, kumpi (tai mikä) polku valitaan, riippuu ohjelmoijan kirjoittaman ehdon voimassaolosta.

JavaScript-kielessä valintarakenne toteutetaan if-ehtolauseella. Esimerkiksi
seuraava ohjelma kysyy käyttäjältä tämän iän ja ilmoittaa,
jos käyttäjä on syötteen perusteella alaikäinen:

```javascript
        var ikä;
        ikä = prompt("Anna ikäsi.");
        if (ikä<18) {
            console.log("Olet alaikäinen.");
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

### Vaara: yhtäsuuruusehto vs. sijoituslause

## Loogiset operaattorit

## Kahden vaihtoehdon valintarakenne

## Monen vaihtoehdon valintarakenne

## Lueteltujen vaihtoehtojen valintarakenne (switch)

## Harjoitustehtävät