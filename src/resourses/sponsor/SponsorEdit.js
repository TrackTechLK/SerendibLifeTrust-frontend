import { TextInput, Edit, SimpleForm } from 'react-admin';

const SponsorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='full_name' />
      <TextInput source='contact' />
      <TextInput source='email' />
    </SimpleForm>
  </Edit>
);

export default SponsorEdit;
