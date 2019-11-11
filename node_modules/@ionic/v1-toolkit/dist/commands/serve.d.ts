import { Command, CommandLineInputs, CommandLineOptions } from '@ionic/cli-framework';
export declare class ServeCommand extends Command {
    getMetadata(): Promise<{
        name: string;
        summary: string;
        inputs: never[];
        options: ({
            name: string;
            summary: string;
            default: string;
            type?: undefined;
            aliases?: undefined;
        } | {
            name: string;
            summary: string;
            type: BooleanConstructor;
            default: boolean;
            aliases?: undefined;
        } | {
            name: string;
            summary: string;
            type: BooleanConstructor;
            aliases: string[];
            default?: undefined;
        } | {
            name: string;
            summary: string;
            default?: undefined;
            type?: undefined;
            aliases?: undefined;
        })[];
    }>;
    run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void>;
}
