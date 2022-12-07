import {
    LightningElement,
    api,
    track
} from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class GenericRecordEditForm extends NavigationMixin(LightningElement) {
    @api object;
    @api recordId;
    @api label;
    showRecordEdit() {
        const config = {
            type: "standard__recordPage",
            attributes: {
              recordId: this.recordId,
              objectApiName: this.object,
              actionName: "edit"
            }
          };
          this[NavigationMixin.Navigate](config);
    }
}