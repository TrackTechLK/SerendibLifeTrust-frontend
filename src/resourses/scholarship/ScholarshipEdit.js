import {
  TextInput,
  NumberInput,
  Edit,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';

const ScholarshipEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source='amount_per_payment' />
      <NumberInput source='total_amount' />
      <TextInput source='payment_frequency' />
      <ReferenceInput source='student' reference='students'>
        <AutocompleteInput optionText='full_name' />
      </ReferenceInput>
      <ReferenceInput source='sponsor' reference='sponsors'>
        <AutocompleteInput optionText='full_name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default ScholarshipEdit;
