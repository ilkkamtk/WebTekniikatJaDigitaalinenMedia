# Funktiot

Funktio on ohjelman osa, joka tekee rajatun toimenpidekokonaisuuden.
Taustalla on modulaarisuusajatus: koska samaa asiaa ei kannata toteuttaa moneen kertaan, kannattaa
yleiskäyttöiset osat ohjelmasta kirjoittaa funktioina, joita voidaan käyttää ohjelman sisällä
useaan otteeseen.

Jo ohjelmoitua funktiota voi ajatella tällöin ”mustana laatikkona”. Sen voi ottaa aina tarvittaessa käyttöön - onhan se jo kertaalleen ohjelmoitu ja testattu huolellisesti.

Funktiot kutsuvat (eli käyttävät) toisiaan oman suorituksensa aikana.
Myös web-sivulle upotettu painike (button) voi käynnistää funktion.

Tarkastellaan aluksi esimerkkiä parametrittomasta ja paluuarvottomasta funktiosta.
Tällainen funktio tekee aina kutsuttaessa saman asian: sen toiminnallisuutta ei voi säädellä
funktion ulkopuolelta eikä funktio palauta mitään tietoja sitä kutsuvalle ohjelmanosalle.

Seuraavassa määriteltävä funktio tulostaa kiinteän tervehdystekstin:

```javascript
        function tervehdi() {
            console.log('Hyvää päivää!');
            return;
        }
```     

Funktio päättyy return-lauseeseen. Lausetta käytetään myös paluuarvon palauttamiseen, mutta tässä tapauksessa paluuarvoa ei ole.

Edellä kirjoitettua funktiota ei suoriteta sen perusteella, että se on kirjoitettu ohjelmaan, vaan funktiota on erikseen
kutsuttava sen ulkopuolelta.

Lisätään funktion määrityksen alapuolelle pääohjelma, joka sisältää funktion kutsun:

```javascript
        tervehdi()
```

Nyt funktio suoritetaan, ja ohjelma tulostaa tervehdystekstin.

Funktion käyttö parantaa modulaarisuutta: jos tervehtimisen tapaa tarvitsee
myöhemmin ohjelmassa muuttaa, riittää muutos tehdä yhteen paikkaan: funktion määritykseen.


## Parametrit

Laajennetaan edellä esiteltyä tervehtimisfunktiota siten, että ohjelmoija voi määrittää
tervehdystekstin ja tervehtimiskertojen lukumäärän. Tätä kutsutaan funktion parametrisoinniksi:
tässä tapauksessa määritetään kaksi parametrimuuttujaa (`teksti` ja `kerrat`),
jotka kertovat, miten funktion on tarkoitus täsmälleen toimia:

```javascript
        function tervehdi(teksti, kerrat) {
            var i;
            for (i = 1; i<=kerrat; i++) {
                console.log(teksti + ' ' + i + '. kerran!');
            }
            return;
        }
```

Parametrimuuttujat saavat arvonsa funktion kutsun yhteydessä. Funktion kutsussa annettavia arvoja kutsutaan
funktion argumenteiksi.

Kun funktiota kutsutaan ja suoritus siirtyy funktioon, kutsussa olevat argumenttien arvot
kopioidaan funktion määrityksessä olevien parametrimuuttujien arvoiksi.

Kirjoitetaan funktion määrityksen alapuolelle funktion kutsu:
```javascript
        tervehdi(4, 'Moikka!');
```
Ohjelma tuottaa seuraavan tulosteen:
```javascript
Moikka 1. kerran!
Moikka 2. kerran!
Moikka 3. kerran!
Moikka 4. kerran!
```
Funktion kutsun yhteydessä ensimmäisen argumentin arvo (`Moikka!`-merkkijono) kopioitiin ensimmäisen parametrimuuttujan
`teksti` arvoksi. Vastaavasti toisen argumentin arvo `4` kopioidaan toisen parametrimuuttujan `kerrat` arvoksi.

Näin kirjoitettu funktio on aiempaa yleiskäyttöisempi. Sitä voidaan käyttää erilaisten tervehdysten tuottamiseksi eri osissa pääohjelmaa.


## Paluuarvo

## Muuttujien näkyvyys
Funktioiden käyttöönoton myötä on tarpeen pohtia funktioiden näkyvyyttä.

Tähän asti on käytetty vain globaaleja muuttujia. Globaali muuttuja
Määritellään funktioiden ulkopuolella var-lauseella. Se näkyy kaikkialle.

Funktion sisällä var-lauseella määriteltävät muuttujat ovat paikallisia muuttujia.
Paikallinen muuttuja näkyy vain siinä funktiossa, jossa se on määritetty.

Jos globaalilla ja paikallisella muuttujalla on sama nimi, paikallinen muuttuja peittää globaalin muuttujan funktiossa, jossa se on määritelty.
Tällöin käytössä on kaksi eri muuttujaa, joilla on sama nimi mutta erilainen näkyvyys.


## Taulukko parametrina

## Taulukko paluuarvona

## Rekursio
