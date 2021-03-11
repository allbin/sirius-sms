import SMS from './index';

const user = process.env.SMS_USER || 'user';
const password = process.env.SMS_PASSWORD || 'password';
const from = process.env.SMS_FROM || 'sender';

const argv = process.argv;
const usage = (): void => {
  console.error(`usage: ${argv[0]} ${argv[1]} <recipient> <message>`);
  process.exit(1);
};

if (argv.length < 4) {
  usage();
}

const sms = SMS({ user, password, from });

void (async function () {
  try {
    await sms.send([argv[2]], argv[3]);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
