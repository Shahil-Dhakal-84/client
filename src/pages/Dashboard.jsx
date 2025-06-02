import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";

export default function Dashboard() {
  const [commissionOn, setCommissionOn] = useState("");
  const [feeValues, setFeeValues] = useState({
    "fee-paid": "",
    "net-fee": "",
    "gross-fee": "",
  });
  const [percentage, setPercentage] = useState("");
  const [commission, setCommission] = useState("");

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
    <div className="container">
      <h1 className="title">Student Commission Form</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          calculateCommission();
        }}
      >
        <InputField label="Name of Student" name="name" required placeholder="Enter full name" />

        <SelectField
          label="University"
          name="university"
          required
          options={[
            { value: "", label: "-- Select University --", disabled: true },
            { value: "univA", label: "University A" },
            { value: "univB", label: "University B" },
          ]}
        />

        <SelectField
          label="Intake"
          name="intake"
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
          name="counsellor"
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
          name="year"
          required
          min="2025"
          max="2030"
          placeholder="e.g. 2025"
        />

        <InputField
          label="Fee Paid"
          type="number"
          name="fee-paid"
          value={feeValues["fee-paid"]}
          onChange={(e) => handleFeeChange("fee-paid", e.target.value)}
          placeholder="0"
        />

        <InputField
          label="Net Fee"
          type="number"
          name="net-fee"
          value={feeValues["net-fee"]}
          onChange={(e) => handleFeeChange("net-fee", e.target.value)}
          placeholder="0"
        />

        <InputField
          label="Gross Fee"
          type="number"
          name="gross-fee"
          value={feeValues["gross-fee"]}
          onChange={(e) => handleFeeChange("gross-fee", e.target.value)}
          placeholder="0"
        />

        <InputField
          label="Commission Percentage (%)"
          type="number"
          name="percentage"
          step="0.01"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="e.g. 10"
        />

        <SelectField
          label="Commission Based On"
          name="commission-on"
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
          name="calculated-commission"
          value={commission}
          readOnly
          placeholder="--"
        />

        <Button type="submit">Calculate Commission</Button>
      </form>
    </div>
  );
}
