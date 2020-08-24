const parent = [
	{name: "bunga", "title": "Bunga"},
	{name: "hewan", "title": "Hewan"}
];

const child = [
	{name: "mawar", "title": "Mawar", parent_ref: "bunga"},
	{name: "melati", "title": "Melati", parent_ref: "bunga"},
	{name: "kucing", "title": "Kucing", parent_ref: "hewan"},
	{name: "anjing", "title": "Anjing", parent_ref: "hewan"}
];

const genre = [
	{id: 1, "title": "Mawar Biru", child_ref: "mawar"},
	{id: 2, "title": "Mawar Merah", child_ref: "mawar"},
	{id: 3, "title": "Melati Biru", child_ref: "melati"},
	{id: 4, "title": "Melati Merah", child_ref: "melati"},
	{id: 6, "title": "Kucing Biru", child_ref: "kucing"},
	{id: 7, "title": "Kucing Merah", child_ref: "kucing"},
	{id: 11, "title": "Anjing Biru", child_ref: "anjing"},
	{id: 12, "title": "Anjing Merah", child_ref: "anjing"}
];

export {parent, child, genre};