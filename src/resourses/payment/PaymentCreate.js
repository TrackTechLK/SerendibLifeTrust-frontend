import {
  List,
  Datagrid,
  TextInput,
  NumberInput,
  DateInput,
  Create,
  SimpleForm,
} from 'react-admin';

export default function PaymentCreate() {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source='amount' />
        <DateInput source='payment_time' />
        <TextInput source='remarks' />
        <TextInput source='scholarship' />
      </SimpleForm>
    </Create>
  );
}
