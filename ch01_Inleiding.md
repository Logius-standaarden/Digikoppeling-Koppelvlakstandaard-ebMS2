# Inleiding

## Doel en doelgroep

Dit document beschrijft de functionele specificaties voor Digikoppeling ebMS
Deployment Profile, onderdeel van Digikoppeling.

Het document is bestemd voor architecten en ontwikkelaars die op basis van ebMS
gegeven willen uitwisselen via Digikoppeling. Zie onderstaande tabel bij welke
taken dit document ondersteunt. Alle Digikoppeling webservices die op ebMS
gebaseerd zijn, moeten conformeren aan de koppelvlakstandaard ebMS2. Deze wordt
tot in detail in dit document gespecificeerd. Het doel van dit document is
ontwikkelaars te informeren wat deze koppelvlakstandaard nu precies inhoudt en
waar zij zich aan moeten conformeren. Het gaat hierbij om zowel service
aanbieders als service afnemers.

| Afkorting | Rol  | Taak   | Doelgroep? |
 |---|--------------------------------- |---|------------|
| [MT]   | Management | Bevoegdheid om namens organisatie (strategische) besluiten te nemen.  | **Nee** |
| [PL]   | Projectleiding   | Verzorgen van de aansturing van projecten. | **Nee** |
| [A&D]  | Analyseren & ontwerpen (design) | Analyseren en ontwerpen van oplossings-richtingen. Het verbinden van Business aan de IT.   | **Ja**  |
| [OT&B] | Ontwikkelen, testen en beheer   | Ontwikkelt, bouwt en configureert de techniek conform specificaties. Zorgen voor beheer na ingebruikname. | **Ja**  |

## Opbouw Digikoppeling documentatie

Digikoppeling is beschreven in een set van documenten. Deze set is als volgt
opgebouwd:

<figure>
  <object data="https://logius-standaarden.github.io/publicatie/dk/actueel/media/DK_Specificatie_structuur.svg" type="image/svg+xml" id="infographic">Overzicht van de onderdelen van de Digikoppeling Standaard, de standaard is onderverdeeld in normatieve en ondersteunende onderdelen</object>
  <figcaption>Opbouw documentatie Digikoppeling</figcaption>
</figure>

<b>Legenda</b>


<table class="legendum">
    <thead>
        <tr>
            <th><strong>Kleur</strong></th>
            <th><strong>Soort Document</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="green">Groen</td>
            <td>Standaard documentatie</td>
        </tr>
        <tr>
            <td class="grey">Grijs</td>
            <td>Ondersteunende documentatie</td>
        </tr>
    </tbody>
</table>


<b>Beheer</b>

- De standaarddocumenten (groen/vierkant aangegeven) vallen onder het beheer zoals geformaliseerd in het document [[[?DK-Beheermodel]]].

- De ondersteunende documentatie wordt onderhouden door Logius als de beheerder van de standaard (en afgestemd met stakeholders/ gebruikers).

- Alle goedgekeurde documenten zijn te vinden op de website van Logius, [www.logius.nl](https://www.logius.nl/onze-dienstverlening/domeinen/gegevensuitwisseling/digikoppeling).

## Doel en scope van Digikoppeling 

Digikoppeling biedt de mogelijkheid om op een sterk gestandaardiseerde wijze
berichten uit te wisselen tussen service aanbieders en service afnemers. De
uitwisseling tussen partijen wordt in drie lagen opgedeeld:

- Inhoud: Op deze laag worden de afspraken gemaakt de inhoud van het uit te
 wisselen bericht, dus de structuur, semantiek en waardebereiken.
 Digikoppeling houdt zich **niet** met de inhoud bezig, ‘heeft geen boodschap
 aan de boodschap’.

- Logistiek: Op deze laag bevinden zich de afspraken betreffende
 transportprotocollen (HTTP), messaging (SOAP), beveiliging (authenticatie en
 encryptie) en betrouwbaarheid. **Dit is de Digikoppeling-laag.**

- Transport: deze laag verzorgt het daadwerkelijke transport van het bericht.

Digikoppeling richt zich dus uitsluitend op de logistieke laag. Deze afspraken
komen in de koppelvlakstandaards en andere voorzieningen.

### Leidende principes

De koppelvlakstandaarden dienen te leiden tot een maximum aan interoperabiliteit
met een minimum aan benodigde ontwikkelinspanning.

Daarom wordt gekozen voor bewezen interoperabele internationale standaarden.

Digikoppeling maakt berichtenuitwisseling mogelijk op basis van de REST API, ebXML/ebMS en
WUS-families van standaarden inclusief de daarbij behorende verwante
standaarden.

Aan te sluiten overheidsorganisaties hebben aangegeven op een uniforme manier
(één stekker) te willen aansluiten aan Digikoppeling. Organisaties die
beschikken over eigen middleware (ESB, broker) kunnen de aansluiting aan
Digikoppeling, de adapters, in het algemeen realiseren via voorzieningen in die
middleware.

De architectuur is beschreven in het document [[[DK-Architectuur]]].

## Koppelvlak & koppelvlakstandaard 

Een koppelvlak is een interface die volgens standaarden de gegevensuitwisseling
verzorgt. Het werken met vaste standaarden is essentieel voor een koppelvlak.
Hierdoor wordt implementatie vergemakkelijkt. Ook wordt het mogelijk diverse
soorten berichten door te sturen met een grote mate van interoperabiliteit,
omdat via de standaard afspraken over hun inhoud gemaakt is.

Een van de belangrijkste eisen die door de overheid gesteld worden bij de
inrichting van generieke voorzieningen is dat er niet veel maatwerk ontwikkeld
hoeft te worden, maar dat er van “off the shelf” commercieel of Open Source
geleverde software gebruik gemaakt kan worden. Voor Digikoppeling, dus voor de
logistieke laag, betreft dat het niet willen ontwikkelen van software voor de
adapters.

Dit doel kan bereikt (benaderd) worden doordat gekozen wordt voor internationale
(de jure of de facto) vastgelegde standaarden, die door “alle” leveranciers
interoperabel zijn geïmplementeerd. Een andere eis is dat met name afnemers
gebruik kunnen maken van één “stekker” (één logistiek koppelpunt).

### Specificatie van de koppelvlakstandaard 

De koppelvlakstandaard beschrijft de eisen waar de adapters aan moeten voldoen
om interoperabel met elkaar te kunnen communiceren. Digikoppeling gaat over
logistiek, dus over de envelop en niet over de inhoud. De hele set info die
tezamen nodig is voor een complete generieke Digikoppeling koppelvlakdefinitie
(Raamwerk Specificatie genoemd) bestaat uit:

- interfacedefinitie “on the wire”, (voorbeeld)listing van SOAP headers, en
 informatie over velden en hun specifieke inhoud.

## Opbouw van dit document

Hoofdstuk 1 bevat een aantal algemene inleidende onderwerpen.

Hoofdstuk 2 bevat de kern van de standaard met achtergrond en gebruik van de
ebMS Deployment Profile.

Hoofdstukken 3 tot en met 5 beschrijven de parameters van het ebMS2 profiel
zoals dat gekozen is voor Digikoppeling.

Begrippen en afkortingen worden toegelicht in het document [Digikoppeling
Architectuur]. Deze zit in de Digikoppeling standaarddocumentatie.

Dit document en andere documentatie is beschikbaar op
[www.logius.nl/digikoppeling](http://www.logius.nl/digikoppeling)

