const generateFilledArray = amount => {
	const the_array = [];
	for (let i = 0; i < amount; i++) {
		the_array.push(i);
	}
	return the_array;
};

const theOfficeData = [
	{
		name: "Jim Halpert",
		username: "jhalpert",
		email: "jim@athleap.com",
		active: false
	},
	{
		name: "Pam Halpert",
		username: "phalpert",
		email: "phalpert79@gmail.com",
		active: false
	},
	{
		name: "Ed Truck",
		username: "edtruck",
		email: "etruck@dundermifflin.com",
		active: false
	},
	{
		name: "Michael Scott",
		username: "mscott",
		email: "admin@michaelscottfoundation.org",
		active: false
	},
	{
		name: "Dwight Schrute",
		username: "bearsbeats74",
		email: "dschrute@dundermifflin.com",
		active: true
	},
	{
		name: "Phyllis Vance",
		username: "pvance",
		email: "pvance@dundermifflin.com",
		active: true
	},
	{
		name: "Angela Schrute",
		username: "aschrute",
		email: "aschrute@dundermifflin.com",
		active: true
	}
];

export { generateFilledArray, theOfficeData };
