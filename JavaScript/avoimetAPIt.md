# Avoimet rajapinnat
## Ohjelmointirajapinta eli Application programming interface, API
[Ohjelmointirajapinta](https://fi.wikipedia.org/wiki/Ohjelmointirajapinta) on määritelmä, jonka mukaan eri ohjelmat voivat tehdä pyyntöjä ja vaihtaa tietoja eli keskustella keskenään.
API on tavallaan tulkki kahden eri järjestelmän välillä. Esimerkiksi JavaScriptin [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
hakee laitteen sijaintitiedot käyttöjärjestelmästä ja kääntää ne JavaScript-sovellukseen sopivaan muotoon.
## Avoin rajapinta
[Avoin rajapinta](http://otsokivekas.fi/2014/06/avoin-rajapinta/) on tavallaan datavarasto, johon voidaan lukea internetin yli. Avoin rajapinta voi olla pelkkä datarajapinta,
jonka avulla voidaan vain lukea tietoa (esim. [OpenWeatherMap](https://openweathermap.org/current)) tai toiminnallinen rajapinta, jonka avulla tietoa voidaan myös tallentaa ja muokata (esim [Open311](http://dev.hel.fi/apis/open311/)).

* [Lista ulkomaisista avoimista rajapinnoista](https://www.programmableweb.com/category/all/apis)
* [Lista kotimaisista avoimista rajapinnoista](https://www.avoindata.fi/fi)

Avoimia rajapintoja on tarjolla runsaasti ja suurin osa niistä on nykyään hyvin dokumentoituja. Monet rajapinnoista vaativat jonkinlaisen rekisteröitymisen ennen kuin niitä voidaan käyttää. Lisäksi ne ovat testattavissa ennen käyttöönottoa.

Testaamista varten erittäin kätevä apuväline on [Postman](https://www.getpostman.com/). Sen avulla internetissä olevia rajapintoja voidaan testata kirjoittamatta riviäkään koodia.

## HTTP-protokolla
Suurin osa avoimista rajapinnoista on toteutettu HTTP-protokollaan perustuvalla REST-arkkitehtuurimallilla, jonka takia niistä käytetään usein termiä RESTful web palvelut (web service).
REST-arkkitehtuuri käyttää HTTP:n metodeja kertomaan järjestelmälle halutaanko esim. lukea, lisätä tai muokata dataa. Jotta avoimia rajapintoja / RESTful palveluita voidaan käyttää, on hyvä tietää HTTP-protokollasta perusasiat.

• Application layer protocol
• relies on the transport protocol called TCP/IP
• Stateless protocol
• Once an HTTP transaction is completed, the connection between the client and server is completely
broken: neither the client nor the server has any memory of the transaction
• Transaction = sequence of the client request and corresponding server response
• Obvious limitation when developing Web applications
• Techniques have been developed to combine individual transactions into a set of related transactions
that perform more complicated tasks

#### Tehtävä: asenna Postman ja testaa [OpenChargeMap](https://openchargemap.org/site/develop#api)-rajapintaa