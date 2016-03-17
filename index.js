// assumes 0,0 is at hoop center
const zones = [
	{ name: 'restricted area', contains: ({ d }) =>
		d <= 4,
	},
	{ name: 'low post', contains: ({ x, y, d }) =>
		d > 4 &&
		y <= 6.875 &&
		Math.abs(x) <= 8,
	},
	{ name: 'high post', contains: ({ x, y, d }) =>
		y > 6.875 &&
		y < 13.75 &&
		Math.abs(x) <= 8,
	},
	{ name: 'midrange (lower right)', contains: ({ x, y, d }) =>
		x >= -22 &&
		x < -8 &&
		y < 8.75,
	},
	{ name: 'midrange (lower left)', contains: ({ x, y, d }) =>
		x > 8 &&
		x <= 22 &&
		y < 8.75,
	},
	{ name: 'midrange (upper right)', contains: ({ x, y, d }) =>
		x >= -22 &&
		x < -8 &&
		y >= 8.75 &&
		d <= 23.75,
	},
	{ name: 'midrange (upper left)', contains: ({ x, y, d }) =>
		x > 8 &&
		x <= 22 &&
		y >= 8.75 &&
		d <= 23.75,
	},
	{ name: 'midrange (upper middle)', contains: ({ x, y, d }) =>
		Math.abs(x) <= 8 &&
		y > 13.75 &&
		d <= 23.75,
	},
	{ name: 'three (right corner)', contains: ({ x, y }) =>
		x < -22 &&
		y < 8.75,
	},
	{ name: 'three (left corner)', contains: ({ x, y}) =>
		x > 22 &&
		y < 8.75,
	},
	{ name: 'three (right)', contains: ({ x, y, d }) =>
		d > 23.75 &&
		d < 28 &&
		x < -8 &&
		y > 8.75,
	},
	{ name: 'three (middle)', contains: ({ x, y, d }) =>
		d > 23.75 &&
		d < 28 &&
		Math.abs(x) <= 8 &&
		y > 8.75,
	},
	{ name: 'three (left)', contains: ({ x, y, d }) =>
		d > 23.75 &&
		d < 28 &&
		x > 8 &&
		y > 8.75,
	},
	{ name: 'three (deep)', contains: () => ({ d }) =>
		d >= 28
	},
]

function dist(x, y, d) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)).toFixed(2)
}

function getZoneNames() {
	return zones.map(zone => zone.name)
}

function getZoneFromShot({x, y}) {
	const d = dist(x, y)
	const zone = zones.filter(z => z.contains({x, y, d}))[0]
	return zone ? zone.name : null
}

export { getZoneNames, getZoneFromShot }
