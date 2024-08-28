interface IRedditListing<T> {
	before: string;
	after: string;
	modhash: string;
	children: IRedditThing<T>[];
}

interface IRedditThing<T> {
	kind: string;
	data: T;
}

export interface IRedditPost {
	id: string;
	thumbnail: string;
	url: string;
	author: string;
	title: string;
	score: number;
	num_comments: number;
	created: number;
	created_utc: number;
}
