import {
  List,
  Datagrid,
  TextInput,
  NumberInput,
  DateInput,
  Edit,
  SimpleForm,
} from 'react-admin';

const ScholarshipEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source='amount_per_payment' />
      <NumberInput source='total_amount' />
      <TextInput source='payment_frequency' />
      <NumberInput source='student' />
      <NumberInput source='sponsor' />
    </SimpleForm>
  </Edit>
);

export default ScholarshipEdit;
