export default function ErrorMessage({
    errorMessage,
}: Readonly<{
    errorMessage: string;
}>) {
    return <p className="text-red-500 text-xl text-center">{errorMessage}</p>;
}
