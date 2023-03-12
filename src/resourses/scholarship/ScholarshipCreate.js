import { Divider, Typography } from '@mui/material';
import {
  TextInput,
  NumberInput,
  Create,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  SelectField,
  SelectInput,
  SelectArrayInput,
  RadioButtonGroupInput,
  FormDataConsumer,
  DateInput,
} from 'react-admin';

const Section = ({ title }) => {
  return (
    <div style={{ padding: 10, width: '100%' }}>
      <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
      <Divider style={{ width: '100%' }} />
    </div>
  );
};

const ScholarshipCreate = () => (
  <Create>
    <SimpleForm>
      <Section title='Scholarship details' />
      <NumberInput source='amount_per_payment' />
      <NumberInput source='total_amount' />
      <TextInput source='payment_frequency' />
      <Section title='Student details' />
      <RadioButtonGroupInput
        source='student_detials'
        defaultValue={'existing'}
        label='Select whether to create a student or choose existing'
        choices={[
          { id: 'existing', name: 'Choose existing' },
          { id: 'new', name: 'Create new' },
        ]}
      />
      <FormDataConsumer>
        {({ formData, ...rest }) => {
          console.log({ formData });
          if (formData.student_detials == 'existing') {
            return (
              <ReferenceInput source='student' reference='students'>
                <AutocompleteInput optionText='full_name' />
              </ReferenceInput>
            );
          } else {
            return [
              <TextInput source='student_full_name' />,
              <TextInput source='student_contact' />,
              <TextInput source='student_email' />,
              <TextInput source='student_university' />,
              <TextInput source='student_course' />,
              <NumberInput source='student_duration_of_course_years' />,
              <DateInput source='student_start_date' />,
              <DateInput source='student_end_date' />,
            ];
          }
        }}
      </FormDataConsumer>
      <Section title='Sponsor details' />
      <RadioButtonGroupInput
        source='sponsor_detials'
        label='Select whether to create a sponsor or choose existing'
        defaultValue={'existing'}
        choices={[
          { id: 'existing', name: 'Choose existing' },
          { id: 'new', name: 'Create new' },
        ]}
      />
      <FormDataConsumer>
        {({ formData, ...rest }) => {
          console.log({ formData });
          if (formData.sponsor_detials == 'existing') {
            return (
              <ReferenceInput source='sponsor' reference='sponsors'>
                <AutocompleteInput optionText='full_name' />
              </ReferenceInput>
            );
          } else {
            return [
              <TextInput source='sponsor_full_name' />,
              <TextInput source='sponsor_contact' />,
              <TextInput source='sponsor_email' />,
            ];
          }
        }}
      </FormDataConsumer>
    </SimpleForm>
  </Create>
);

export default ScholarshipCreate;
