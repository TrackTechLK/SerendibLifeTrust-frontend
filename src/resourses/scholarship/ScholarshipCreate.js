import {
  TextInput,
  NumberInput,
  Create,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

const ScholarshipCreate = () => (
  <Create>
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
  </Create>
);

export default ScholarshipCreate;
