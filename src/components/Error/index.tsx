import { SmileyXEyes } from "phosphor-react";
import { ErrorContainer } from "./style";

export function Error() {
    return (
        <ErrorContainer>
            <SmileyXEyes size={52} />
            <h1>Algo de errado não está certo</h1>
            <span>Volte mais tarde</span>
        </ErrorContainer>
    )
}