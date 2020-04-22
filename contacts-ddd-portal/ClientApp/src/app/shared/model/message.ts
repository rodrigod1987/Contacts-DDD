export class Message {

  constructor(public readonly messageType: MessageType,
    public readonly text: string) {}

}

export enum MessageType {

  SUCCESS,
  WARNING,
  DANGER,
  INFO

}
