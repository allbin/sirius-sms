# sirius-sms

DEPRECATED IN FAVOR OF [@allbin/spirius-sms-client](https://github.com/allbin/spirius-sms-client)

## Example usage

```ts
import SMS from "sirius-sms";

const client = new SMS({
  user: "username",
  password: "password",
  from: "sender",
});

await client.send(["+46455123123", "+46455123124"], "Hello, World!");
```
