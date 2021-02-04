# Toistorakenteet

Toisto- eli silmukkarakenteen avulla ohjelmanosan suoritus pystytään toistamaan useita kertoja.
Kertojen määrä voi olla ennalta tiedossa tai selvitä suorituksen aikana.

JavaScript-kielessä on kolme toistorakennetta
- alkuehdollinen while-toistorakenne, jossa toistoehdon voimassaolo testataan ennen kutakin toistokierrosta
- loppuehdollinen do/while-toistorakenne, jonka toistoehdon arvo teestataan kunkin toistokierroksen jälkeen
- for-toistorakenne, jossa toisto perustuu yleensä kierrosmuuttujan
käsittelyyn

Rakenteet ovat semanttisesti ekvivalentit. Mikä tahansa ohjelma voitaisiin kirjoittaa, vaikka käytössä olisi vain yksi edellä mainituista toistorakenteista.
Jotkin toistorakenteet soveltuvat kuitenkin tiettyihin tilanteisiin paremmin kuin toiset: ohjelmoija voi
valita sen, jolla ongelma kulloinkin ratkeaa helpoimmin.

## Alkuehdollinen toistorakenne (while)

Alkuehdollisessa while-toistorakenteessa ohjelmanosaa toistetaan niin kauan kuin
ohjelmoiman kirjoittama toistoehto pysyy voimassa.

Alla oleva ohjelma heittää kolikkoa sata kertaa. Ohjelma
tulostaa lopuksi, montako kruunaa ja klaavaa saatiin.

```javascript
        let kruunat = 0, klaavat = 0;
        while (kruunat + klaavat < 100) {
            const r = Math.random();
            if (r>0.5)
                kruunat++;
            else
                klaavat++;
        }
        console.log('Kruunat: ' + kruunat + ', klaavat: ' + klaavat)
```

Ohjelman tuloste on seuraavan
kaltainen:
```
Kruunat: 53, klaavat: 47
```
Koska kolikonheiton tulokset määräytyvät satunnaisesti, vaihtelevat
tuloksen luvut suorituskerrasta toiseen.

while-toistorakenteen avulla voidaan reagoida käyttäjän virheelliseen syötteeseen
ja vaatia käyttäjää antamaan syöte uudelleen, kunnes se on kelvollinen.
Esimerkiksi seuraava ohjelma tarkistaa, että käyttäjän syöttämä paino oli positiivinen.
Ohjelman suoritus pääsee etenemään vasta, kun käyttäjä antoi kelvollisen painon.

```javascript
        let paino = prompt('Anna paino (kg).');
        while (paino <= 0) {
            paino = prompt('Painon on oltava positiivinen. Anna paino uudelleen (kg).');
        }
        console.log('Syötit painon: ' + paino + ' kg.');
```

## Loppuehdollinen toistorakenne (do/while)

Loppuehdollisessa toistorakenteessa toistoehdon voimassaolo testataan
vasta rakenteesta poistuttaessa. Toistettava ohjelmanosa siis suoritetaan
aina vähintään yhden kerran.

Seuraava ohjelma heittelee noppaa ja tulostaa saadut silmäluvut
siihen saakka, kunnes nopasta tulee silmäluku
kuusi:

```javascript
        let tulos;
        do {
            tulos = Math.floor(Math.random()*6)+1;
            console.log(tulos);
        } while (tulos<6);
```
## Kierrosmuuttujaan perustuva for-toistorakenne

For toistorakenne on suunniteltu tilanteisiin, joissa toistokertojen määrä perustuu kierrosmuuttujaan.
Kierrosmuuttujalla tarkoitetaan muuttujaa, jonka roolina on pitää kirjaa toistokertojen määrästä:
määrä on aluksi nolla, ja sitä kasvatetaan yhdellä jokaisen toistokierroksen päätteeksi. Jossain vaiheessa
kierrosmuuttujan arvo kasvaa niin suureksi, että toistaminen päättyy. Sen määrittävä toistoehto
ohjelmoidaan osaksi for-lausetta.

Seuraava esimerkki tulostaa luvut yhdestä kymmeneen:
```javascript
        for (let i = 1; i<=10 ; i++) {
            console.log(i);
        }
```
Esimerkistä havaitaan, että for-sanaa seuraavien kaarisulkeiden välissä on kolme toisistaan puolipistein
erotettua osaa:
- alkutoimet (`i=1`)
- toistoehto (`i<=10`)
- lopputoimet (`i++`)

Toistorakenteen suoritus etenee seuraavassa järjestyksessä:
1. Alkutoimet tehdään kerran rakenteeseen tultaessa.
2. Toistoehdon arvo (true tai false) määritetään.
    - Jos arvo on `true`, suoritetaan toistettava lohko.
    - Jos arvo on `false`, poistutaan toistorakenteesta
3. Suoritetaan lopputoimet ja palataan kohtaan 2.

Esimerkiksi seuraava ohjelma kysyy käyttäjältä luvun ja tulostaa
kaikki parilliset kokonaisluvut nollasta alkaen käyttäjän antamaan lukuun
asti:
```javascript
        let luku;
        luku = prompt('Anna yläraja parillisille luvuille.');
        for (let i = 0; i<=luku ; i+=2) {
            console.log(i);
        }
```
## Sisäkkäiset toistorakenteet

Toisinaan on tarpeen tuottaa kahden tai useamman muuttujan arvoyhdistelmiä: esimerkiksi tulostettaessa lukujen yhdestä
viiteen kertotaulu on ensimmäisen tulon tekijän saatava vuoron perään kaikki kokonaislukuarvot yhdestä viiteen ja toisen tulon tekijän samoin.

Tämänkaltainen ongelma voidaan ratkaista kahden sisäkkäisen toistorakenteen avulla:

```javascript
        let tulo;
        for (let i = 1; i<=5; i++) {
            for (let j = 1; j<=5; j++) {
                tulo = i*j;
                console.log(i + ' kertaa ' + j + ' on ' + tulo + ".");
            }
        }
```
Huomaa kahden kierrosmuuttujan (`i` ja `j`) käyttö. Ulommassa toistorakenteessa kierrosmuuttuja `i` saa ensimmäisellä
kierroksella arvon yksi, minkä jälkeen sisemmän toistorakenteen kierrosmuuttuja käy läpi kaikki arvot yhdestä viiteen.
Sen jälkeen ulomman toistorakenteen kierrosmuuttuja kasvaa arvoon kaksi, ja sisempi toistorakenne käydään jälleen
läpi kokonaisuudessaan. Tätät jatketaan kunnes ulomman rakenteen kierrosmuuttuja kasvaa lopulta arvoon kuusi, jolloin sen toistoehto
on tullut epätodeksi.

Ohjelma tuottaa alla olevan tulosteen:
```
1 kertaa 1 on 1.
1 kertaa 2 on 2.
1 kertaa 3 on 3.
1 kertaa 4 on 4.
1 kertaa 5 on 5.
2 kertaa 1 on 2.
2 kertaa 2 on 4.
...
5 kertaa 5 on 25.
```

## Harjoitustehtävät

1. Kirjoita ohjelma, joka kysyy käyttäjältä kokonaisluvun. Ohjelma laskee ja tulostaa luvun kertoman. (2p)

    - Luvun kertomalla tarkoitetaan tuloa, joka saadaan, kun luku n kerrotaan kaikilla itseään pienemmillä positiivisilla kokonaisluvuilla 1, ..., n.
    - Esimerkiksi luvun 4 kertoma on `4*3*2*1=24`.
    - Lukujen 0 ja 1 kertoma on yksi.

2. Kirjoita ohjelma, joka kysyy käyttäjältä luvun ja tulostaa luvun neliöjuuren. Ohjelman on varauduttava siihen, että käyttäjä antaa negatiivisen luvun. Tällöin lukua pyydetään uudelleen niin kauan, kunnes saatu luku on ei-negatiivinen. (3p)

3. Kirjoita ohjelma, joka kysyy käyttäjältä aloitus- ja lopetusvuoden. Ohjelma tulostaa kaikki karkausvuodet käyttäjän antamalta väliltä. Tulostus tehdään numeroimattomaan luetteloon osaksi web-sivun sisältöä. (3p)
    - Esimerkkituloste:
    ```html
    <ul>
       <li>1992</li>
       <li>1996</li>
       <li>2000</li>
       <li>2004</li>
       <li>2008</li>
    </ul>
    ```

4. Kirjoita ohjelma, joka kysyy käyttäjältä arpakuutioiden lukumäärän. Ohjelma heittää kerran kaikkia arpakuutioita ja tulostaa silmälukujen summan. (3p)

5. Kirjoita ohjelma, joka kysyy käyttäjältä kokonaisluvun ja ilmoittaa, onko se alkuluku. (3p)

    - Alkulukuja ovat luvut, jotka ovat jaollisia vain ykkösellä ja itsellään.
    - Esimerkiksi luku 13 on alkuluku, koska se voidaan jakaa vain luvuilla 1 ja 13 siten, että jako menee tasan.
    - Toisaalta esimerkiksi luku 21 ei ole alkuluku, koska se voidaan jakaa tasan myös luvulla 3 tai luvulla 7.

6. Kirjoittamasi ohjelma kysyy aluksi käyttäjältä arpakuutioiden lukumäärän sekä käyttäjää kiinnostavan silmälukujen summan.
   Ohjelmasi tarkoituksena on nyt selvittää, millä todennäköisyydellä käyttäjän antama määrä arpakuutioita tuottaa käyttäjän antaman silmälukujen summan. Jos käyttäjä antaa esimerkiksi noppien määräksi 3 ja silmälukujen summaksi 15, ohjelma selvittää todennäköisyyden, jolla kolmen nopan silmälukujen summa on 15. (3p)
   
   - Ratkaise ongelma simuloimalla: Laita ohjelma heittelemään annettua määrää noppia toistorakenteessa (esim. 10000 kertaa) ja laske, kuinka suuri osuus toistoista tuotti käyttäjää kiinnostavan silmälukujen summan.
   
7. Kirjoita ohjelma, joka arpoo bingolapun numerot ja tulostaa ne pienimmästä suurimpaan.
Bingolapussa on 25 ruutua, joihin numerot arvotaan alla olevan säännön mukaisesti: (3p)
      
    - yleisesti n:s luku on jokin luvuista 4n-3, 4n-2, 4n-1 ja 4n. (kun n on välillä 1, 2, ..., 25, eli n on ruudun järjestysnumero)
        - Kaavasta seuraa että ensimmäinen luku on jokin luvuista 1, 2, 3 ja 4 ja toinen luku on jokin luvuista 5, 6, 7 ja 8.
      
      
      
