import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('business-rules-engine-utils', 'dm.csv.upload');

export type DmCsvUploadResult = {
  path: string;
};

export default class DmCsvUpload extends SfCommand<DmCsvUploadResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      description: messages.getMessage('flags.name.description'),
      char: 'n',
      required: false,
    }),
  };

  public async run(): Promise<DmCsvUploadResult> {
    const { flags } = await this.parse(DmCsvUpload);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /Users/andrewvisser/Development/salesforce-plugins/business-rules-engine-utils/src/commands/dm/csv/upload.ts`);
    return {
      path: '/Users/andrewvisser/Development/salesforce-plugins/business-rules-engine-utils/src/commands/dm/csv/upload.ts',
    };
  }
}
