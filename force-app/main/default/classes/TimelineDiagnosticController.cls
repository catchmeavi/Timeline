public with sharing class TimelineDiagnosticController {
    @AuraEnabled(cacheable=true)
    public static List<Timeline_Configuration__c> getTimelineConfigurations(){
        return [select Id,Name,Object__c from Timeline_Configuration__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Timeline_Child_Object__c> getChildConfigurations(String configId){
        return [
            SELECT Date_Field__c,Fields_to_Display__c,Icon_Image_Url__c,
                Icon_Name__c,Id,Name,Object_Color__c,Object__c,Relationship_Name__c,
                Title_Field__c,LWC_Ui_Api_Not_Supported__c,Data_Provider_Type__c,
                Provider_Apex_Classname__c,Where_Clause__c,Overdue_Field__c
            FROM Timeline_Child_Object__c
            where Timeline_Configuration__c = :configId];

    }

    @AuraEnabled(cacheable=false)
    public static DiagnosticResponse diagnoseChildConfiguration(Id recordId,Id childConfigId){
        Timeline_Child_Object__c childConfig = 
                                                    [SELECT Date_Field__c,Fields_to_Display__c,Icon_Image_Url__c,
                                                            Icon_Name__c,Id,Name,Object_Color__c,Object__c,Relationship_Name__c,
                                                            Title_Field__c,LWC_Ui_Api_Not_Supported__c,Data_Provider_Type__c,
                                                            Provider_Apex_Classname__c,Reference_Field_Name__c,Where_Clause__c,Overdue_Field__c
                                                    FROM Timeline_Child_Object__c
                                                    where Id=:childConfigId];
        String soql = TimelineSOQLUtils.getSoqlForChildConfig(childConfig, recordId, null,true);                                            
        DiagnosticResponse response = new DiagnosticResponse();
        response.soqlQuery=soql;
        response.records=Database.query(soql);
        return response;
    }


    public class DiagnosticResponse{
        @AuraEnabled
        public String soqlQuery {get; set;}

        @AuraEnabled
        public List<SObject> records {get; set;}
    }
}