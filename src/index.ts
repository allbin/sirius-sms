import querystring from 'query-string';
import axios from 'axios';

interface SiriusSMSOptions {
  user: string;
  password: string;
  from: string;
}

interface SiriusSMSClient {
  send: (recipients: string[], message: string, from?: string) => Promise<void>;
}

const SiriusSMS = (opts: SiriusSMSOptions): SiriusSMSClient => {
  const defaults = {
    User: opts.user,
    Pass: opts.password,
    From: opts.from,
    FromType: opts.from.startsWith('+') ? 'I' : 'A',
    CharSet: 'UTF-8',
  };

  return {
    send: (recipients, message, from) => {
      const params = {
        ...defaults,
        From: from ? from : defaults.From,
        Msg: message,
        To: recipients.join(';'),
      };

      const qstr = querystring.stringify(params);
      return axios.get(
        `https://get.spiricom.spirius.com:55001/cgi-bin/sendsms?${qstr}`,
      );
    },
  };
};

export default SiriusSMS;
