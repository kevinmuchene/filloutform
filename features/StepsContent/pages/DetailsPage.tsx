import { useForm, useFormContext } from "react-hook-form";

export default function DetailsPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="rounded-xl border-2 border-blue-500/40 bg-white p-6 shadow-lg">
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          placeholder="10"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2
                 text-gray-900 placeholder-gray-400 shadow-sm
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                 disabled:cursor-not-allowed disabled:bg-gray-100"
        />
      </div>
    </div>
  );
}
