import {
  TextInput,
  NumberInput,
  DateInput,
  Create,
  SimpleForm,
  ReferenceInput,
} from 'react-admin';

export default function PaymentCreate() {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source='amount' />
        <DateInput source='payment_time' />
        <TextInput source='remarks' />
        <ReferenceInput source='scholarship' reference='scholarships' />
      </SimpleForm>
    </Create>
  );
}
