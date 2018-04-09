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

Edellä todettiin, että funktion argumenttien arvot kopioidaan parametrimuuttjien arvoiksi
funktiota kutsuttaessa. Tarkastellaan seuraavaksi tilannetta, jossa funktiolle välitetään parametrina taulukko.

Alkeismuuttujien tapauksessa parametrin arvona on muuttujan arvo (esimerkiksi 3). Taulukkomuuttujan arvona sen sijaan
ei ole taulukko itsessään vaan viittaus taulukkoon. Viittauksella tarkoitetaan sen muistiosoitetta,
johon taulukko on tallennettuna ajonaikaisessa ympäristössä.

Alla oleva kuvaa esittää muistiosoitteen ja sen sisällön välistä suhdetta:

![muistiosoite](img/muistiosoite.png)

Kun taulukko välitetään parametrina funktiota kutsuttaessa, kopioidaan sen muistiosoite. Itse taulukkoa ei kopioida parametrimuuttujan arvoksi.
Niinpä funktion kutsussa oleva taulukkomuuttuja ja funktion sisäinen parametrimuuttuja viittaavat yhteen ja samaan taulukkoon.
Tällaista parametrien välitystapaa kutsutaan viiteparametrien välittämiseksi (pass-by-reference). Ohjelmoijan on syytä olla tästä tietoinen, jottei taulukoiden
käsittely parametrina aiheuta yllätyksiä.

Tarkastellaan esimerkkinä alla olevaa ohjelmaa, jossa pääohjelma luo kolmialkioisen taulukon, välittää sen funktiolle parametrina ja tulostaa lopulta taulukon arvot.

```javascript
        function kasvata(taulukko) {
            for (var i = 0; i<taulukko.length; i++) {
                taulukko[i]++;
            }
            return;
        }

        var luvut = [5,6,7];
        kasvata(luvut);
        console.log(luvut[0] + ' ' + luvut[1] + ' ' + luvut[2]);
```
        
Ohjelma tulostaa:
```javascript
6 7 8
```

Mitä tapahtui?
1. Pääohjelma loi kolmealkioisen taulukon nimeltä `luvut`, johon tallennettiin luvut 5, 6 ja 7. Taulukko sijaitsee jossakin muistiosoitteessa X.
2. `kasvata()`-funktion kutsussa muistiosoite X kopioidaan parametrimuuttujan taulukko arvoksi.
3. Parametrimuuttujan `taulukko` kautta haetaan taulukko, ja kaikkia siinä olevia arvoja kasvatetaan yhdellä. Kyseessä on sama taulukko, joka luotiin pääohjelmassa.
4. Funktion suoritus loppuu. Taulukon sisältö haetaan pääohjelmassa taulukkomuuttujan `luvut` kautta ja taulukon arvot tulostetaan. 

Havaitaan, että kun pääohjelman parametrina välittämää taulukkoa muokataan funktiossa kasvata(), näkyy muutos myös kutsuvaan pääohjelmaan.

## Taulukko paluuarvona

Funktion paluuarvona voi palauttaa viittauksen taulukkoon. Tarkastellaan alla olevaa ohjelmaa, joka palauttaa arvotun 
lottonumerotaulukon:

```javascript
        function annaRivi(numerot, valittavat) {
            var rivi = [];
            var r;
            for (var  i = 1; i<=valittavat; i++) {
                var ok = false;

                while (!ok) {
                    ok = true;
                    r = Math.ceil(Math.random()*numerot);
                    for (var j = 0; j<i; j++) {
                        if (rivi[j] == r) {
                            ok = false;
                        }
                    }
                }
                rivi[i] = r;
            }
            return rivi;
        }

        var lottorivi = annaRivi(40,7);
        for (var i = 1; i<=lottorivi.length; i++) {
            console.log(lottorivi[i]);
        }
```
Huomaa, että lottonumerotaulukko luotiin funktion sisällä. Viittaus luotuun taulukkoon palautetaan funktion paluuarvona
(funktion sisäisen taulukkomuuttujan `rivi` arvo). Lottoriviin päästään käsiksi funktion ulkopuolelta taulukkomuuttujan `lottorivi`lautta; sen arvoksi on
sijoitettu funktion paluuarvona saatu viittaus taulukkoon.

## Rekursio
