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

export interface IRedditPost extends IRedditThing {
	id: string;
	thumbnail: string;
	author: string;
	title: string;
	score: number;
	num_comments: number;
	created: string;
}
