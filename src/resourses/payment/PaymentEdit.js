import {
  TextInput,
  NumberInput,
  DateInput,
  Edit,
  SimpleForm,
} from 'react-admin';

export default function PaymentEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source='amount' />
        <DateInput source='payment_time' />
        <TextInput source='remarks' />
      </SimpleForm>
    </Edit>
  );
}
