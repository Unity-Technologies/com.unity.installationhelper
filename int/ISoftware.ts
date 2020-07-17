import { IDownloadResult } from './IDownloadResult';
import { IInstallationResult } from './IInstallationResult';
import { ISoftwareVersion } from './ISoftwareVersion'

export interface ISoftware {

    /* this should fetch the set of versions from a dedicated endpoint
    like unity hub is doing e.g. saihai .. 
    or simply load them from the prepopulated lists "defaultReleases-XXX".json files
    provided. */
    getAvailableOnlineVersions(): Promise<ISoftwareVersion[]>;


    /* abstracts downloading binaries process */
    download(version: ISoftwareVersion): Promise<IDownloadResult>;

    /* abstracts installing binaries process */
    install(localPath: string): Promise<IInstallationResult>;

    /* abstracts uninstalling binaries process */
    uninstall(localPath: string): Promise<IInstallationResult>;
}