import { IconProps } from "phosphor-react";
import { TitleContainer } from "./style";


interface TitleProps {
    className?: string | undefined
    title?: string,
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function Title({ className, title, icon: Icon }: TitleProps) {
    return (
        <TitleContainer className={className}>
            <h2>{title}</h2>
            {Icon !== undefined && (<Icon size={32} />)}
        </TitleContainer>
    )
}