import { LightningElement } from 'lwc';

export default class InputObjectSpread extends LightningElement {

    cliente = {
        firstName:'',
        lastName:'',
        email:'',
        website:'',
        company:'',
        AnualRevennue:''

    };
        
    handleInputChange(event){
            var nameinput = event.target.name;
            var value = event.detail.value;

            this.cliente = {
                ...this.nameinput,[nameinput]:value

                
            };
        }
    }

