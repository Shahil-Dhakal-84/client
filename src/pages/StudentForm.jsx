import FormLayout from '../components/FormLayout';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import Button from '../components/Button';

export default function StudentForm() {
  const universityOptions = [{ value: 'uni1', label: 'University 1' }];
  const counsellorOptions = [{ value: 'c1', label: 'Counsellor 1' }];
  const intakeOptions = [
    { value: 'January', label: 'January' },
    { value: 'May', label: 'May' },
    { value: 'September', label: 'September' },
  ];

  return (
    <FormLayout title={"AREC Commission Calculation"}>
      <InputField label="Name of student:" name="name" required />

      <SelectField label="University:" name="university" options={universityOptions} required />
      <SelectField label="Intake:" name="intake" options={intakeOptions} required />
      <SelectField label="Counsellor:" name="counsellor" options={counsellorOptions} required />

      <InputField label="Intake Year:" name="year" type="number" min="2025" max="2030" required />
      <InputField label="Fee Paid:" name="fee-paid" type="number" />
      <InputField label="Net Fee:" name="net-fee" type="number" />
      <InputField label="Gross Fee:" name="gross-fee" type="number" />
      <InputField label="Commission Percentage (%):" name="comission-percentage" type="number" step="0.01" />
      <SelectField label="Commission On:" name="comission-on" options={[{ value: 'fee-paid', label: 'Fee Paid' }]} />

      <Button type="submit" className="w-full mt-2">Submit</Button>
    </FormLayout>
  );
}
