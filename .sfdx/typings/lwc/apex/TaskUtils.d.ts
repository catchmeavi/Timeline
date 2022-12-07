declare module "@salesforce/apex/TaskUtils.getCurrentUsername" {
  export default function getCurrentUsername(): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.getTaskSubjectOptions" {
  export default function getTaskSubjectOptions(): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.getObjectName" {
  export default function getObjectName(param: {objectName: any, recordId: any, nameField: any}): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.searchInObject" {
  export default function searchInObject(param: {objectName: any, searchText: any, searchDelegateClass: any}): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.saveTask" {
  export default function saveTask(param: {subject: any, dueDate: any, whatId: any, whoId: any, status: any, comments: any, subType: any}): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.saveTaskFromObject" {
  export default function saveTaskFromObject(param: {tsk: any}): Promise<any>;
}
declare module "@salesforce/apex/TaskUtils.saveEvent" {
  export default function saveEvent(param: {subject: any, startDate: any, endDate: any, whatId: any, whoId: any, allDayEvent: any, location: any}): Promise<any>;
}
