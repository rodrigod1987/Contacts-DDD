import { HandleError } from "./handle-error";
import { MessageService } from '../services/message.service';

describe('HandleError', () => {
  it('should create an instance', () => {
    expect(new HandleError(new MessageService())).toBeTruthy();
  });
});
