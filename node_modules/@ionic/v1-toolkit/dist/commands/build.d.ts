import { Command, CommandLineInputs, CommandLineOptions } from '@ionic/cli-framework';
export declare class BuildCommand extends Command {
    getMetadata(): Promise<{
        name: string;
        summary: string;
    }>;
    run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void>;
}
