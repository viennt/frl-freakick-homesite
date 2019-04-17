export class ButtonState {
    public state: string;

    constructor() {
        this.ready();
    }

    public notReady(): void {
        this.state = 'not-ready';
    }

    public ready(): void {
        this.state = 'ready';
    }

    public loading(): void {
        this.state = 'loading';
    }

    public finish(): void {
        this.state = 'finish';
    }

    public isNotReady(): boolean {
        return this.state === 'not-ready';
    }

    public isReady(): boolean {
        return this.state === 'ready';
    }

    public isLoading(): boolean {
        return this.state === 'loading';
    }

    public isFinished(): boolean {
        return this.state === 'finish';
    }
}
