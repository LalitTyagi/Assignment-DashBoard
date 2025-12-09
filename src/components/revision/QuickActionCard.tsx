import type { FC } from 'react';
import type { QuickActionCardProps } from './types';
import { BUTTON_THEME, SECTION_THEME } from './helper';

const QuickActionCard: FC<QuickActionCardProps> = ({
    title,
    color,
    iconSrc,
    onClick,
}) => {
    const sectionTheme = SECTION_THEME[color];
    const buttonTheme = BUTTON_THEME[color];

    return (
        <section
            aria-label={title}
            style={sectionTheme.style}
            className="relative flex flex-col items-center w-[230px] h-[255px] rounded-3xl bg-[#050016]"
        >
            {/* Icon */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-9 flex h-[110px] w-[110px] -translate-x-1/2 items-center justify-center"
            >
                <img src={iconSrc} alt="" className="h-[106px] w-[106px] object-contain" />
            </div>

            {/* Button using color theme */}
            <button
                type="button"
                onClick={onClick}
                style={{
                    width: 180,
                    height: 41,
                    padding: "10px",
                    borderWidth: 1,
                    borderStyle: "solid",
                    ...buttonTheme.style, // only unique properties
                }}
                className="flex items-center justify-center absolute left-1/2 bottom-7 -translate-x-1/2 text-[11px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue focus-visible:ring-offset-2 focus-visible:ring-offset-bgDeep rounded-2xl"
            >
                {title}
            </button>

        </section>
    );
};

export default QuickActionCard;
