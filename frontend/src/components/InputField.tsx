import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";
import { PathRequest } from "../api/find-path/findPath";

interface InputFieldProps {
    id: keyof PathRequest;
    label: string;
    control: Control<PathRequest>;
    placeholder: string;
    error: FieldError | undefined;
    options: string[];
}

export default function InputField({
    id,
    label,
    control,
    placeholder,
    error,
    options,
}: Readonly<InputFieldProps>) {
    return (
        <div className="w-48">
            <Controller
                name={id}
                control={control}
                rules={{
                    validate: (value) => validateNode(value, options),
                }}
                render={({ field: { value, onChange } }) => (
                    <Autocomplete
                        freeSolo
                        options={options}
                        value={value || ""}
                        onChange={(event, newValue) => {
                            onChange(newValue ?? "");
                            console.log(event);
                        }}
                        inputValue={value || ""}
                        onInputChange={(newInputValue) => {
                            onChange(newInputValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                placeholder={placeholder || ""}
                                error={!!error}
                                variant="outlined"
                            />
                        )}
                    />
                )}
            />
            <div className="h-1">
                {error && (
                    <p className="text-red-500 text-xs">{error.message}</p>
                )}
            </div>
        </div>
    );
}

function validateNode(node: string, options: string[]) {
    if (!node) {
        return "Please insert a value.";
    }
    if (!options.includes(node.toUpperCase())) {
        return "Please choose a valid room.";
    }
    return true;
}
