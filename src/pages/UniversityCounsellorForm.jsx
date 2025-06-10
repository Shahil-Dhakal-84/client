import FormLayout from '../components/FormLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function UniversityCounsellorForm() {
    return(
        <>
            <FormLayout title={"University Registration"}>
                <div className=''>
                    <InputField label="University Name:" name="university-name" />
                    <Button type="submit" className="w-full mt-2">Submit</Button>
                </div>

                <div>
                    <InputField label="Counsellor Name:" name="counsellor-name" />
                    <Button type="submit" className="w-full mt-2">Submit</Button>
                </div>
            </FormLayout>
        </>
    );
}