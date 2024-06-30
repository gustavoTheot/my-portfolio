import { ParagraphContainer } from "./styles";

interface ParagraphProps {
    text: string
}

export function Paragraph({ text }: ParagraphProps) {
    return (
        <ParagraphContainer>
            <p>
                {text}
            </p>
        </ParagraphContainer>
    )
}