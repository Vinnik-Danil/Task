import { LightningElement } from 'lwc';

export default class LWC_Task extends LightningElement {

    drag(event){
        event.dataTransfer.setData("divId", event.target.id);
    }

    allowDrop(event){
        event.preventDefault();
    }

    drop(event){
        event.preventDefault();
        let divId = event.dataTransfer.getData("divId");
        let draggedElement = this.template.querySelector('#' +divId);
        // let cOM = event.dataTransfer.getData("cOM");
        // let compl = this.template.querySelector('#'+cOM);
        
        // console.log(compl);

        if(draggedElement.classList.contains('completed')){
            draggedElement.classList.remove('completed'); 
        }else{
        draggedElement.classList.add('completed'); 
        }
        event.target.appendChild(draggedElement);
    }
}