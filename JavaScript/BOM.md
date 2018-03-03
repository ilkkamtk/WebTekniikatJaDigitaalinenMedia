# BOM - Browser Object Model
Browser Object Model on kokoelma ominaisuuksia joilla käistellään mm. selainikkunaa ja ikkunoiden väistä kommunikointia. BOM ei ole standardi, joten eri selainten välillä on pieniä eroja. 
## [window -olio](https://developer.mozilla.org/en-US/docs/Web/API/Window)
Window -olio tarkoittaa selainikkunaa ja se on tuettu kaikissa selaimissa. Kaikki globaalit JavaScript-oliot, -funktiot ja -muuttujat ovat automaattisesti window -olion jäseniä. Esim:
```javascript
window.document.querySelector('.button')
```
on sama kuin
```javascript
document.querySelector('.button')
```
Eli suurin osa komennoista voidaan kirjoittaa ilman window -sanaa.
### alert
### confirm
### prompt
### tapahtumien ajastaminen
## [document -olio](https://developer.mozilla.org/fi/docs/Web/API/Document)
Kuuluu sekä BOMiin sekä DOM -standardiin
## [history -olio](https://developer.mozilla.org/fi/docs/Web/API/History)
History -olio sisältää selainikkunan historian.
## navigator -olio
## location -olio
## screen -olio
## evästeet