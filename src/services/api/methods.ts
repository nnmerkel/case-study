import Endpoints from './Endpoints';
import client from '.';

export const getPosts = () => {
	return client.get(Endpoints.hot);
};
