declare module "@tonejs/piano" {
  export class Piano {
    constructor(options?: { 
      velocities?: number;
      release?: boolean;
      pedal?: boolean;
    });
    load(baseUrl?: string): Promise<void>;
    toDestination(): this;
    connect(destination: any): this;
    keyDown(options: { note: string; velocity?: number; time?: number }): void;
    keyUp(options: { note: string; time?: number }): void;
  }
}