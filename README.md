# sirius-sms

## Example usage
```ts
import SMS from 'sirius-sms';

const client = new SMS({
  user: 'username',
  password: 'password',
  from: 'sender'
});

await client.send(['+46455123123', '+46455123124'], 'Hello, World!');
```
