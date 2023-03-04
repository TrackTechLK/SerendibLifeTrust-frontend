import {
  List,
  Datagrid,
  TextInput,
  NumberInput,
  DateInput,
  Create,
  SimpleForm,
} from 'react-admin';

const ScholarshipCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source='amount_per_payment' />
      <NumberInput source='total_amount' />
      <TextInput source='payment_frequency' />
      <NumberInput source='student' />
      <NumberInput source='sponsor' />
    </SimpleForm>
  </Create>
);

export default ScholarshipCreate;
