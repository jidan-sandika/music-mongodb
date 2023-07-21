// open terminal, type mongosh and enter
// "use music" and enter for creating new database music

//method for creating new collection called songs and insert some data
db.songs.insertMany([
	{
		title: "Don't Start Now",
		artist: 'Dua Lipa',
		album: 'Future Nostalgia',
	},
	{
		title: 'Blinding Lights',
		artist: 'The Weeknd',
		album: 'After Hours',
	},
	{
		title: 'Watermelon Sugar',
		artist: 'Harry Styles',
		album: 'Fine Line',
	},
	{
		title: 'Bad Guy',
		artist: 'Billie Eilish',
		album: 'When We All Fall Asleep, Where Do We Go?',
	},
	{
		title: 'Dance Monkey',
		artist: 'Tones and I',
		album: 'The Kids Are Coming',
	},
	{
		title: 'Someone You Loved',
		artist: 'Lewis Capaldi',
		album: 'Divinely Uninspired to a Hellish Extent',
	},
	{
		title: 'Shape of You',
		artist: 'Ed Sheeran',
		album: '÷ (Divide)',
	},
	{
		title: '7 Rings',
		artist: 'Ariana Grande',
		album: 'Thank U, Next',
	},
	{
		title: 'Memories',
		artist: 'Maroon 5',
		album: 'Memories',
	},
	{
		title: 'Havana',
		artist: 'Camila Cabello',
		album: 'Camila',
	},
]);

//method for creating new collection called artists and insert some data
db.artists.insertMany([
	{
		name: 'Dua Lipa',
		dateOfBirth: '22 Agustus 1995',
		genre: ['Pop', 'Dance'],
	},
	{
		name: 'The Weeknd',
		dateOfBirth: '16 Februari 1990',
		genre: ['R&B', 'Pop'],
	},
	{
		name: 'Harry Styles',
		dateOfBirth: '1 Februari 1994',
		genre: ['Pop', 'Rock'],
	},
	{
		name: 'Billie Eilish',
		dateOfBirth: '18 Desember 2001',
		genre: ['Pop', 'Alternative'],
	},
	{
		name: 'Tones and I',
		dateOfBirth: '15 Agustus 2000',
		genre: ['Pop', 'Indie'],
	},
	{
		name: 'Lewis Capaldi',
		dateOfBirth: '7 Oktober 1996',
		genre: ['Pop', 'Indie'],
	},
	{
		name: 'Ed Sheeran',
		dateOfBirth: '17 Februari 1991',
		genre: ['Pop', 'R&B', 'Acoustic'],
	},
	{
		name: 'Ariana Grande',
		dateOfBirth: '26 Juni 1993',
		genre: ['Pop', 'R&B'],
	},
	{
		name: 'Maroon 5',
		dateOfBirth: '20 September 1979',
		genre: ['Pop', 'Rock', 'Funk'],
	},
	{
		name: 'Camila Cabello',
		dateOfBirth: '3 Maret 1997',
		genre: ['Pop', 'Latin'],
	},
]);

//method for creating new collection called popularSongs and insert some data
db.popularSongs.insertMany([
	{
		title: "Don't Start Now",
		plays: 5000000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Blinding Lights',
		plays: 4800000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Watermelon Sugar',
		plays: 4500000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Bad Guy',
		plays: 4200000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Dance Monkey',
		plays: 4000000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Someone You Loved',
		plays: 3800000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Shape of You',
		plays: 5500000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: '7 Rings',
		plays: 4200000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Memories',
		plays: 4600000,
		period: '2023-01-01 to 2023-07-01',
	},
	{
		title: 'Havana',
		plays: 3900000,
		period: '2023-01-01 to 2023-07-01',
	},
]);
// type show collections and enter to see our collections that created
// to see the data inside each collection "db.collections.find()"