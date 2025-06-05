import FormLayout from '../components/FormLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function UniversityCounsellorForm() {
    return(
        <>
            <FormLayout title={"University Registration"}>
                <InputField label="University Name:" name="university-name" required />
                <Button type="submit" className="w-full mt-2">Submit</Button>
            </FormLayout>

            <FormLayout title={"Counsellor Registration"}>
                <InputField label="Counsellor Name:" name="counsellor-name" required />
                <Button type="submit" className="w-full mt-2">Submit</Button>
            </FormLayout>
        </>
    );
}