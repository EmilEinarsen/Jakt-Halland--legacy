export const articleData = {
	articles: [
		{
			title: 'Jägarexamen',
			photoPath: '../img/shooter-1200x1000-min.jpg',
			photoBackgroundColor: '#2b2f28',
			body: [
				{
					title: 'Lugn Jägarexamen',
					price: '4 000 kr',
					lists: [
						{
							title: 'I paketet ingår:',
							className: 'bullet-list',
							items: [
								'Litteratur, inklusive ljudbok, skickas till dig i förväg.',
								'Övningsskjutning med hagel vid ett tillfälle, exklusive ammunition.',
								'Teoretiskt prov, exklusive Naturvårdsverkets provavgift.',
							],
						},
						{
							title: 'Avgiften är uppdelad i två fakturor:',
							className: '',
							items: [
								'1 000 kr (anmälningsavgift)',
								'3 000 kr (betalas 10 dagar innan kursen startar)',
							],
						},
					],
					main: `
						Vi träffas 10 kvällar varannan vecka mellan 18.00 - 21.00, där vi går igenom hela teoridelen tillsammans.
						Det ger er gott om tid att studera mellan mötena.
						`,
				},
				{
					title: 'Intensiv Jägarexamen',
					price: '8 800 kr',
					lists: [
						{
							title: 'I paketet ingår:',
							className: 'bullet-list',
							items: [
								'Litteratur, inklusive ljudbok, skickas till dig i förväg.',
								'Övningsskjutning med hagel.',
								'Övningsskjutning med hagel.',
								'Praktiskt prov, kula och hagel.',
								'Teoretiskt prov, inklusive Naturvårdsverkets provavgift.',
								'Hotellövernattning torsdag till söndag, med helpension i dubbelrum (enkelrumstillägg 500 kr per natt. restaurangen är öppen och möjlighet att äta lunch finns, ingår ej i paketet).',
							],
						},
						{
							title: 'Avgiften är uppdelad i två fakturor:',
							className: '',
							items: [
								'2 000 kr (anmälningsavgift)',
								'6 800 kr (betalas 10 dagar innan kursen startar)',
							],
						},
					],
					main: `
						Intensivkursen pågår under 3,5 dagar (torsdag till söndag). Under ett samlat pris kommer du lära dig allt som behövs för att ta jägarexamen.
						`,
				},
			],
			info: [
				{
					title: `Jägarexamen innehåll`,
					text: `
						LITERATUR 
						Vi kommer gå genom litteraturen. 
						Däremot kommer fokus  att ligga på skjutdelen hjälpa er med att sortera genom litteraturen. 
						Under kurstillfället kommer det att vara begränsat med teoritimmar. 
						För att lyckas är det viktigt att du läser på ordentligt, innan du kommer till kurstillfället.
						
						UPPSKJUTNING 
						Uppskjutning med kulgevär sker i två delar: 
						Praktiskt grundprov och högviltsprov. De består i sin tur av kulgevärshantering och precisionsskjutning. 
						Kulgevärshantering innebär att du ska kunna visa att du vet hur man hanterar ett kulgevär på ett säkert sätt. 
						Precisionsskjutning med kulgevär innebär att du ska kunna skjuta två väl sammanhållna träffbilder med fyra skott. 
						Träffbilderna ska skjutas från respektive skjutstol och jägarmässigt stöd från 80 meter. 
						Praktiskt högviltsprov ska skjutas vid stillastående och löpande mål (älgtavla) med sammanhållen träffbild av en serie (fyra skott). 
						Uppskjutning med hagelgevär sker i fyra delar: 
						Säker vapenhantering, avståndsbedömning, lerduveskytte och skjutning mot markmål.
						
						TEORIPROV
						Avläggning av samtliga prov sker inför en provledare för att jägarexamen ska vara godkänd.

					`
				},
				{
					title: `exempel intensiv schema`,
					schedule: [
						[
							{title: 'Torsdag:'},
							{time: '12.00 - 13.00', activity: 'Incheckning på hotellet.'},
							{time: '13.00 - 15.00', activity: 'Teoripass 1.'},
							{time: '15.30 - 18.00', activity: 'Teoripass 2.'},
							{time: '18.30 - Middag.', activity: ''},
						],
						[
							{title: 'Fredag:'},
							{time: '07.00 - 09.00', activity: 'Frukosten serveras.'},
							{time: '09.00 - 10.00', activity: 'Säker vapenhantering.'},
							{time: '10.00 - 12.00', activity: 'Teoripass 3.'},
							{time: '12.00 - 13.00', activity: 'Lunch.'},
							{time: '13.00 - 16.00', activity: 'Lerduveskytte.'},
							{time: '16.30 - 18.00', activity: 'Teoripass 4.'},
							{time: '18.30 - Middag.', activity: ''},
						],
						[
							{title: 'Lördag:'},
							{time: '07.00 - 08.00', activity: 'Frukosten serveras.'},
							{time: '09.00 - 10.00', activity: 'Teoretiska provet skrivs.'},
							{time: '10.00 - 12.00', activity: 'Uppskjutning kula/hagel.'},
							{time: '12.00 - 13.00', activity: 'Uppskjutning kula/hagel. Lättare lunch på skjutbanan.'},
							{time: '13.00 - 15.00', activity: 'Jaktstigen samt precision.'},
							{time: '16.00 - 18.00', activity: 'Vapengenomgång, styckning.'},
							{time: '19.00 - Middag.', activity: ''},
						],
						[
							{title: 'Söndag:'},
							{time: '07.00 - 08.00', activity: 'Frukosten serveras.'},
							{time: '09.00 - 12.00', activity: 'Uppskjutning kula/hagel.'},
							{time: '13.00 - 14.00', activity: 'Lunch. Diplomutdelning och jägarbevis'},
						],
					],
				},
			]
		},
		{
			title: 'Jaktledarutbildning',
			photoPath: '../img/hunter-1200x1000-min.jpg',
			photoBackgroundColor: '#44413f',
			body: [
				{
					price: '1 800 kr',
					lists: [
							{
							title: 'Utbildningen omfattar:',
							className: 'bullet-list',
							items: [
								'Jaktledarens ansvar och uppgift.',
								'Planering av jakt.',
								'Jaktlagstiftningen.',
								'Etik, moral och attityder.',
								'Säkerhetsarbete.',
								'Vapen och skytte.',
							],
						},
					],
					main: `
						Förkunskaper: Jägarexamen krävs.

						Utbildingen sker på en lördag. I priset ingår litteratur, lunch samt för- och eftermiddagskaffe.
						Utbildningens syfte är att ge deltagaren kunskaper om vad som ingår i jaktledarens roll och vad som krävs för att få ett fungerande jaktlag. 
						
						En jaktledaren ska även ha kunskap om vilka lagar och regler som gäller vid jakt. 
						Jaktledaren ska genom sitt uppträdande sätta den etiska och moraliska normen i jaktlaget, då det är han som är ytterst ansvarig om något skulle hända.
						Efter genomförd utbildning erhålls ett diplom.
					`,
				},
				{
					main: `Avgiften är uppdelad i två fakturor:
						<0 
						<-500 kr (anmälningsavgift).->
						<-1 300 kr (betalas 10 dagar innan kursen startar).->
						 0>
						Vår utbildningen är godkänd av Svea skog med flera. 
						Svea skog har utbildningskrav på alla jaktledare för utarrenderade jaktmarker.
						Utbildningen är framtagen under Jägarnas Riksförbund och kursledaren är en förordnad utbildare.
					`,	
					schedule: [
						[
							{title: 'Exempel schema'},
							{time: '08.00 - 09.00', activity: 'Samling med fika.'},
							{time: '09.00 - 12.00', activity: 'Teoripass 1.'},
							{time: '12.00 - 13.00', activity: 'Lunch.'},
							{time: '13.00 - 15.00', activity: 'Praktisk övning i skogen.'},
							{time: '15.00 - 16.00', activity: 'Teoripass 2.'},
							{time: '16.00 ➺', activity: 'Avslutning och diplomutdelning.'},
						],
					],
				}
			],
		},
		{
			title: 'Jakthelg i Halland',
			photoPath: '../img/forest_sun-1200x1440-min.jpg',
			photoBackgroundColor: '#ccc9a2',
			content: [
				{
					subtitle: 'Grisjakt',
					text: `
						6 500 kr
						Fredag - söndag
						Nattjakt fredag och lördag
						Stötjakt på söndag`,
					
					photoPath: '../img/pig-900x600-min.jpg',
					photoBackgroundColor: '#424042',
				},
				{
					subtitle: 'Bockjakt',
					text: `
						5 000 kr
						Fredag - söndag
						Passjakt fredag och lördag`,
					photoPath: '../img/deer-900x600-min.jpg',
					photoBackgroundColor: '#33250c',
				},
				{
					subtitle: `Rådjur & 
					Grisjakt`,
					text: `
						6 500 kr
						Fredag- söndag
						Passjakt fredag och lördag
						Stötjakt på söndag med hund`,
					photoPath: '../img/deer_small-900x600-min.jpg',
					photoBackgroundColor: '#1a250f',
				},
				{
					text: `Alla troféer tillfaller skytten, under förutsättning att man tar hand om djuret själv.

						Vid grisjakt får den skytt som fäller en gris ta med sig djuret hem, om han så önskar.

						I priset ingår övernattning på hotell i dubbelrum med helpension
						(enkelrumstillägg 500 kr/natt).

						Transport till och från jakten.
					`,
					photoPath: '../img/forest-900x600-min.jpg',
					photoBackgroundColor: '#1b222a',
				},
			],
		},
	],
	info: 
		`(Vid avbokning återbetalas ej anmälningsavgiften. Vid inställning av kursen återbetalas avgiften och ni som anmält er får 10% rabatt på nästa kurstillfälle.  Vid avbokning senare än 5 dagar innan kurstillfället återbetalas ej avgiften.)\n\n`,	
	location: '(Alla kurser hålls i laholmskommun)',
}