# HTML-kieli

HTML, eli Hypertext Markup Language on ns. merkkauskieli, jolla laaditaan HTML-sivuja. Ideana on kirjoittaa tekstin sekaan koodia, jolla voidaan merkitä erilaisia teksti- ym. elementtejä tekstiin, kuten esimerkiksi

- otsikoita
- tekstikappaleita
- kuvia
- linkkejä toisiin sivuihin
- erilaisia listoja

HTML talletaan normaaleina tekstitiedostoina, joten se ei vaadi kirjoittajalta mitään muita työkaluja kuin ihan tavallisen tekstieditorin. 

## Historiaa lyhyesti

HTML-kielen historian katsotaan alkaneen vuonna 1989, kun Tim Berners-Lee sekä Robert Caillau etsivät ratkaisua CERN:ssä vallitsevaan formaattien runsauteen. Eri formaateissa olevat dokumentit vaativat oman ohjelmansa, että niitä pystyisi lukemaan ja muokkaamaan. Lisäksi kehitettiin yksinkertainen verkkoprotokolla HTTP, jolla kyettiin välittämään näitä dokumentteja. Verkkoa ryhdyttiin kutsumaan World Wide Webiksi, WWW. Ks. lisätietoa esimerkiksi [Wikipediasta](https://fi.wikipedia.org/wiki/HTML).

## Erilaisia versioita

Vuosien varrella kieli on kehittynyt, uusin kielen versio on 5. (5.2 on viimeisin määritys tästä kielestä). Kutsumme tätä versiota tästä eteenpäin HTML5:ksi. Kaikki tämä dokumentaatio keskittyy HTML5:n ominaisuuksiin, vaikka tosiasiassa suurin osa tästä on hyvin alaspäin yhteensopivaa.

HTML:n standardoimista hallinnoi [World Wide Web Consortium](https://www.w3.org/) (W3C). Sivustolta löytyy muun muassa kielen täydellinen syntaksi, mutta aloittelijoille sivusto ei todellakaan ole se paikka, josta kielen opiskelun voi aloittaa. Siihen on muita parempia sivustoja.

Versioista mainittakoon seuraavat:

### 1. HTML 3.2 (tammikuu 1997)

HTML 3.2 oli ensimmäinen W3C:n kautta standardisoitu versio kielestä. 

### 2. HTML 4.01 (joulukuu 1999)

4.01-versiosta oli kolme erilaista muunnosta, joita jokaista saattoi käyttää:

1. Strict: Ainoastaan syntaksissa määritellyt elementit olivat sallittuja, 3.2-versiossa olleiden, mutta nyt hylättyjen elementtien käyttö oli kiellettyä. Yksi tällaisista "kielletyistä" elementeistä oli esimerkiksi &lt;`font`&gt;, jolla saattoi määrittää tekstin käyttämän fontin. Fonttien määrittely tuli jo tällöin tapahtua ns. tyylien (CSS) avulla, ei tagien. Suunta oli siis jo tällöin kohti ulkoasun ja rakenteen eriyttämistä.
1. Transitional: Myös vanhoja elementtejä sai käyttää.
1. Frameset: Ainoastaan kehyksiin (sivun jako itsenäisiin osiin) liittyvät elementit olivat sallittuja

### 3. HTML 5 (W3C:n suositus, lokakuu 2014)

HTML5 poikkeaa merkittävästi aiemmista HTML-kielen versioista: siinä lähdetään siitä, että sivuston rakenne ja sisältö luodaan HTML-kielen avulla ja kaikki ulkoasuun liittyvät seikat toteutetaan tyylimääritysten, Cascding Style Sheets (CSS) avulla. Näin saavutetaan parempi sivustokokonaisuuksien hallinta sekä ylläpidettävyys. 

Lisäksi HTML5 toi uutuutena ns. semanttiset elementit (mm. article, header, footer) kieleen lisäämään rakenteellisia mahdollisuuksia.

Vaikka versioiden 4.01 ja 5 välillä onkin noin paljon vuosia, kielen kehitys ei kuitenkaan ollut mitenkään passiivista, vaan välissä oli vaihe, jossa kehitettiin versioita, jotka nimettin XHTML:ksi

### 4. XHTML

XHTML, eli eXtensible HTML on kieli, joka on osa XML-kieliperhettä. Kielen ajatuksena oli laajentaa HTML-kielen rakennetta myös muihin ympäristöihin kuin www:hen. Esimerkiksi mobiililaitteisiin sen kuviteltiin sopivan paremmin. Kielen syntaksi oli hyvin tiukasti määritelty ja siinä oli lähdetty ajatuksesta että kaikki ulkoasuun liittyvä toteutetaan CSS:n avulla. Lisäksi kaikki tagit kirjoitettiin pienillä kirjaimilla ja jokainen tagi tuli päättää (esim. &lt;`br /`&gt;. 

XHTML:n viimeisin julkaistu standardi oli 1.1. Tämän jälkeen tuli ehdotuksia mm. 2.0-versiosta, mutta tämä kehityssuunta hylättiin ja siirryttiin HTML5:n kehitykseen. (Ks. lisää [https://en.wikipedia.org/wiki/XHTML](https://en.wikipedia.org/wiki/XHTML)