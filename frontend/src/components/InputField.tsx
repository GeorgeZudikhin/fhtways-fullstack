interface InputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: any) => void;
}

export default function InputField({
    id,
    label,
    placeholder,
    value,
    onChange,
}: Readonly<InputFieldProps>) {
    return (
        <div className="flex items-center gap-4">
            <p className="font-bold m-0 text-4xl">{label}</p>
            <input
                id={id}
                className="w-full bg-white p-5 text-xl border border-gray-300 rounded-full"
                type="text"
                value={value}
                pattern="[A-Z]\d+(\.\d+)?"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}
