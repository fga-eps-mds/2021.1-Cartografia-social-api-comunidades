export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.microsservice = {
      queueName: process.env.RABBIT_QUEUE_NAME,
      host: process.env.RABBIT_HOST,
    };
    this.envConfig.mongo = {
      url: process.env.MONGO_URL,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
