
import { AbstractControl, FormGroup } from  '@angular/forms';
export class CustomValidator{
    static ValidateName(control: AbstractControl){
        const values = control.value as string;
        if(values.includes('test')){
            return {
          
                invalidName:true
           
            }
        }
        return null;
    }

    static ValidateSpecialChar(char:string){
        return(control:AbstractControl)=>{
            
        const values = control.value as string;
        if(values.includes(char)){
            return {
          
                invalidSpecialChar:true
           
            }
        }
        return null;
    }
}



static validatedate(control:FormGroup){
    const checkinDate:any = new Date(control.get('checkinDate')?.value);
    const checkoutDate:any =new Date( control.get('checkoutDate')?.value);
    const diffTime=checkoutDate-checkinDate
    const diffDays =Math.ceil(diffTime/(1000*60*60*24))
    console.log(diffDays);
    console.log(diffTime);
    
    
    if(diffDays<=0){
       control.get('checkoutDate').setErrors({
                 invalidDate:true
            })
        return{
            invalidDate:true,
        };
    }
    return null;

}
}