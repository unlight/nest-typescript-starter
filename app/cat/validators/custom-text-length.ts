import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomTextLength implements ValidatorConstraintInterface {

    /**
     * Perform validation, return true for valid case.
     */
    validate(text: string, args: ValidationArguments) {
        return typeof text === 'string' && !(text.length <= 1); // for async validations you must return a Promise<boolean> here
    }

    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return 'Text ($value) is too short!';
    }

}
