# MTGDB installatiehandleiding

## Inhoud
* Inleiding
* Functionaliteiten
* Screenshot
* Gebruikte technieken en frameworks
* Installatie stappenplan
* Inloggegevens
* NPM commando's

## Inleiding

De MTGDB app is een tool waarmee Magic the Gathering spelers hun collectie kunnen bijhouden en decks kunnen bouwen. De collectie bestaat uit kaarten die de gebruiker ook echt bezit. Bij het maken van decks hoeft de gebruiker zich echter niet te beperken tot kaarten die hij/zij bezit; het handige is juist dat de gebruiker kan experimenteren. Pas als de perfecte balans is gevonden gaat de gebruiker op jacht om de benodigde kaarten te bemachtigen.

## Functionaliteiten:
* Gebruikers kunnen een account maken
* De gebruiker beschikt over één collectie
* De gebruiker kan een ongelimiteerd aantal decks aanmaken
* Het Card Database venster geeft de gebruiker toegang tot alle Magic kaarten die ooit zijn uitgebracht. Vanuit dit venster kan de gebruiker kaarten toevoegen aan zijn/haar collectie of aan een van zijn/haar decks
* In zowel de collectie als in de decks kan het aantal exemplaren van een kaart worden verhoogd of verlaagd. Ook kan de kaart worden verwijderd
* Elke kaartrepresentatie in Card Database, collection en deck kan worden uitvergroot door op de donkerblauwe zoom knop te klikken
* Gebruikers krijgen op de Account pagina een fictieve Magic kaart te zien. Deze is in eerste instantie nog blanco. Via de edit-knop komt de gebruiker bij een formulier waar hij/zij extra gegevens kan invullen. Gebruikersnaam, creature type en bio verschijnen vervolgens op de fictieve Magic kaart.


## Screenshot
![Relative](/src/assets/mtgdb_screenshot.png)

## Gebruikte technieken en frameworks
Voor het maken van de MTGDB app heb ik gebruikgemaakt van de volgende technieken en frameworks:
* pagina opbouw: html
* opmaak: css
* logica: javascript
* app architectuur: react

## Installatie stappenplan
API configureren met het project ID van de student:
1. Ga naar https://novi-backend-api-wgsgz.ondigitalocean.app/
2. Ga naar de 'API Configureren' sectie en vul dit project id in: b8985a1c-c1b7-4c00-9777-666019e0877d
3. Klik op 'Choose file' en kies het 'mtgdb-config03.json' bestand uit de root van de mtgdb projectmap
4. Klik op 'Upload API configuratie'

API configureren met je eigen project ID:
1. Ga naar https://novi-backend-api-wgsgz.ondigitalocean.app/
2. Ga naar de 'API Configureren' sectie en vul je project id in
3. Klik op 'Choose file' en kies het 'mtgdb-config03.json' bestand uit de root van de mtgdb projectmap
4. Klik op 'Upload API configuratie'
5. Open het 'NoviIdProvider.jsx' bestand in je IDE (mtgdb/src/context/NoviIdProvider.jsx) en vervang de noviId door je eigen ID

Het mtgdb project openen en runnen
1. Installeer Node.js (versie 18 of hoger) in je IDE
2. Open het mtgdb project in je IDE
3. Installeer alle dependencies door het volgende commando in de console van je IDE uit te voeren: npm install
4. Start de development server op door het volgende commando in de console van je IDE uit te voeren: npm run dev
5. Open de link die verschijnt in de console. Dit is als het goed is: http://localhost:5173. Dit project werkt alleen op poort 5173. Als je naar een andere poort wordt gestuurd zul je poort 5173 vrij moeten maken en opnieuw het npm run dev commando moeten uitvoeren.

## Inloggegevens
Het onderstaande account geeft een beeld van de MTGDB app bij real-word gebruik:
* email: mtgdbtester@novifrontend.nl
* wachtwoord: Zwarte2Lotus6

## NPM commando’s
Voor dit project zijn twee basis npm commando's nodig:
* npm install: om dependencies te installeren
* npm run dev: om de development server te starten
