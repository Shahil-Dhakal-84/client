import { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Button from "../components/Button";

export default function Dashboard() {
  const [commissionOn, setCommissionOn] = useState("");
  const [feeValues, setFeeValues] = useState({
    "fee-paid": "",
    "net-fee": "",
    "gross-fee": "",
  });
  const [percentage, setPercentage] = useState("");
  const [commission, setCommission] = useState("");

  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [intake, setIntake] = useState("");
  const [counsellor, setCounsellor] = useState("");
  const [year, setYear] = useState("");

  const handleFeeChange = (field, value) => {
    setFeeValues((prev) => ({ ...prev, [field]: value }));
  };

  const calculateCommission = () => {
    if (commissionOn && percentage) {
      const base = parseFloat(feeValues[commissionOn]) || 0;
      const percent = parseFloat(percentage) || 0;
      const result = ((base * percent) / 100).toFixed(2);
      setCommission(result);
    } else {
      setCommission("");
    }
  };

  return (
    // <div className="bg-[#F6F7FB] min-h-screen flex justify-center items-center font-sans">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-2 overflow-hidden">
        <h1 className="text-2xl font-semibold text-[rgb(1,33,105)] mb-4 text-center">
          Student Commission Form
        </h1>

<form
  className="h-[70vh] overflow-y-auto pr-2 custom-scrollbar space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    calculateCommission();
  }}
>

          <InputField label="Name of Student" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Full name" />

          <SelectField
            label="University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
            options={[
              { value: "", label: "-- Select University --", disabled: true },
              { value: "univA", label: "University A" },
              { value: "univB", label: "University B" },
            ]}
          />

          <SelectField
            label="Intake"
            value={intake}
            onChange={(e) => setIntake(e.target.value)}
            required
            options={[
              { value: "", label: "-- Select Intake --", disabled: true },
              { value: "January", label: "January" },
              { value: "May", label: "May" },
              { value: "September", label: "September" },
            ]}
          />

          <SelectField
            label="Counsellor"
            value={counsellor}
            onChange={(e) => setCounsellor(e.target.value)}
            required
            options={[
              { value: "", label: "-- Select Counsellor --", disabled: true },
              { value: "counsellorA", label: "Counsellor A" },
              { value: "counsellorB", label: "Counsellor B" },
            ]}
          />

          <InputField
            label="Intake Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            min="2025"
            max="2030"
            placeholder="e.g. 2025"
          />

          <InputField
            label="Fee Paid"
            type="number"
            value={feeValues["fee-paid"]}
            onChange={(e) => handleFeeChange("fee-paid", e.target.value)}
            placeholder="0"
          />

          <InputField
            label="Net Fee"
            type="number"
            value={feeValues["net-fee"]}
            onChange={(e) => handleFeeChange("net-fee", e.target.value)}
            placeholder="0"
          />

          <InputField
            label="Gross Fee"
            type="number"
            value={feeValues["gross-fee"]}
            onChange={(e) => handleFeeChange("gross-fee", e.target.value)}
            placeholder="0"
          />

          <InputField
            label="Commission Percentage (%)"
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="e.g. 10"
          />

          <SelectField
            label="Commission Based On"
            value={commissionOn}
            onChange={(e) => setCommissionOn(e.target.value)}
            options={[
              { value: "", label: "-- Select --", disabled: true },
              { value: "fee-paid", label: "Fee Paid" },
              { value: "net-fee", label: "Net Fee" },
              { value: "gross-fee", label: "Gross Fee" },
            ]}
          />

          <InputField
            label="Calculated Commission"
            value={commission}
            readOnly
            placeholder="--"
          />

          {/* ... other inputs ... */}

<div className="flex justify-center">
  <Button type="submit">Calculate Commission</Button>
</div>

        </form>
      </div>
    // </div>
  );
}
