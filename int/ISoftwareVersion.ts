export interface ISoftwareVersion {
    softwareName : string;
    softwareVersion : string;
    getDownloadUrl() : string;
}