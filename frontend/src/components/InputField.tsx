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
        <div className="flex items-center gap-4">
            <Controller
                name={id}
                control={control}
                rules={{ validate: validateNode }}
                render={({ field: { value, onChange } }) => (
                    <Autocomplete
                        freeSolo
                        options={options}
                        value={value || ""}
                        onChange={(newValue) => {
                            if (typeof newValue === "string") {
                                onChange(newValue);
                            }
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
                                helperText={error ? error.message : ""}
                                variant="outlined"
                            />
                        )}
                    />
                )}
            />
            {/* {error && <p className="text-red-500 text-sm">{error.message}</p>} */}
        </div>
    );
}

function validateNode(node: string) {
    if (!node) {
        return "Bitte geben Sie einen Wert ein.";
    }
    if (!/^(AUFZUG|TOILETTE|[A-Z]\d+(\.\d+)?)$/i.test(node)) {
        return "Ungültiges Eingabeformat! Bitte geben Sie die Zimmernummer im richtigen Format ein.";
    }
    return true;
}
