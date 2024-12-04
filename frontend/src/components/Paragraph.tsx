import { ReactNode } from "react";

interface ParagraphProps {
    children: ReactNode;
}

export default function Paragraph({ children }: Readonly<ParagraphProps>) {
    return <p className="text-base">{children}</p>;
}
