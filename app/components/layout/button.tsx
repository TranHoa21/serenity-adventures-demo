import React, { memo, ReactNode, MouseEvent } from 'react';
import '@/app/styles/layout/header.scss'
interface ButtonProps {
    text: string;
    textColor?: string;
    bgColor?: string;
    IcAfter?: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
    px?: string;
}

const Button: React.FC<ButtonProps> = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth, px }) => {
    return (
        <button
            type='button'
            className='btn'
            onClick={onClick}
        >
            <span>{text}</span>
            <span>{IcAfter && <IcAfter />}</span>
        </button>
    );
}

export default memo(Button);
