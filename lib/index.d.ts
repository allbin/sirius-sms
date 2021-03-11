interface SiriusSMSOptions {
    user: string;
    password: string;
    from: string;
}
interface SiriusSMSClient {
    send: (recipients: string[], message: string, from?: string) => Promise<void>;
}
declare const SiriusSMS: (opts: SiriusSMSOptions) => SiriusSMSClient;
export default SiriusSMS;
