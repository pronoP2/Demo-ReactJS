import { simpleRestClient } from 'admin-reactJS';

const restClient = simpleRestClient('http://localhost:3000');
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));
