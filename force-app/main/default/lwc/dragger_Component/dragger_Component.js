import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/Accountcls.getAccountList';
export default class Dragger_Component extends LightningElement {
    @wire(getAccounts) accounts;
    handleDragStart(event){
        event.dataTransfer.setData("account_id", event.target.dataset.item);
        console.log("Drag Start");
    }
    falseVar = false;


    allowDrop(event){
        event.preventDefault();
    }

    drop(event){
        event.preventDefault();
        let divId = event.dataTransfer.getData("account_id");
        
        console.log("DIV ID is  "+divId);

        let draggedElement = this.template.querySelector('.card');
        console.log("draggedElement is !!!!!!!!"+ draggedElement);


        event.target.appendChild(draggedElement);
    }

    allowDrop(event){
        event.preventDefault();
    }

}
