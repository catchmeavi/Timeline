declare module "@salesforce/apex/TimelineDiagnosticController.getTimelineConfigurations" {
  export default function getTimelineConfigurations(): Promise<any>;
}
declare module "@salesforce/apex/TimelineDiagnosticController.getChildConfigurations" {
  export default function getChildConfigurations(param: {configId: any}): Promise<any>;
}
declare module "@salesforce/apex/TimelineDiagnosticController.diagnoseChildConfiguration" {
  export default function diagnoseChildConfiguration(param: {recordId: any, childConfigId: any}): Promise<any>;
}
