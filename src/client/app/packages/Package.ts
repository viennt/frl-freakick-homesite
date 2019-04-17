import { Message } from '../models/Message';

export class Package {
    protected static API_ENDPOINT: string;

    constructor(apiEndpoint: string) {
        Package.API_ENDPOINT = apiEndpoint;
    }

    public getMessage(): Message {
        return new Message(Package.API_ENDPOINT, this);
    }
}
