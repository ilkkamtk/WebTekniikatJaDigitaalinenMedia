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
        var kruunat = 0, klaavat = 0;
        while (kruunat + klaavat < 100) {
            r = Math.random();
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
        var paino = prompt('Anna paino (kg).');
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
        var tulos;
        do {
            tulos = Math.ceil(Math.random()*6);
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
        var i;
        for (i = 1; i<=10 ; i++) {
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
        var luku, i;
        luku = prompt('Anna yläraja parillisille luvuille.');
        for (i = 0; i<=luku ; i+=2) {
            console.log(i);
        }
```
## Sisäkkäiset toistorakenteet

## Harjoitustehtävät
