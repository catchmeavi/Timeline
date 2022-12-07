declare module "@salesforce/apex/RecordTimelineDataProvider.getTimelineItemData" {
  export default function getTimelineItemData(param: {confIdOrName: any, recordId: any, dateFilter: any}): Promise<any>;
}
declare module "@salesforce/apex/RecordTimelineDataProvider.getEmailDetails" {
  export default function getEmailDetails(param: {taskId: any}): Promise<any>;
}
declare module "@salesforce/apex/RecordTimelineDataProvider.getTimelineItemChildData" {
  export default function getTimelineItemChildData(param: {objectApiName: any, fieldsToExtract: any, recordId: any}): Promise<any>;
}
