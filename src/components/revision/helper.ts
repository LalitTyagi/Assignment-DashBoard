import type { ButtonTheme, Filter, QuickActionCardProps, SectionTheme } from "./types";

export const FILTERS: Filter[] = [
  { id: 'all',       label: 'All' },
  { id: 'relearn',   label: 'Relearn' },
  { id: 'byte',      label: 'Byte' },
  { id: 'detailed',  label: 'Detailed' },
  { id: 'peer',      label: 'Peer' },
];

// Styles taken directly from your Figma values
export const BUTTON_THEME: Record<QuickActionCardProps['color'], ButtonTheme> = {
    green: {
        style: {
            background: "#003027",
            borderImageSource:
                "linear-gradient(48.36deg, #56B01E 12.67%, rgba(0,0,0,0) 33.36%), " +
                "linear-gradient(48.36deg, rgba(0,0,0,0) 33.36%, #1DBF59 90.7%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #7AD0078A inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
            borderStyle: "solid",
        },
    },
    blue: {
        style: {
            background: "#001A60",
            borderImageSource:
                "linear-gradient(67deg, #124AFF 35.1%, rgba(0,0,0,0) 90.04%), " +
                "linear-gradient(76.38deg, rgba(0,0,0,0) 33.36%, #126DFF 98.1%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #136EFF99 inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
            borderStyle: "solid",
        },
    },
    purple: {
        style: {
            background: "#2C0057",
            borderImageSource:
                "linear-gradient(43.31deg, #7600F4 12.28%, #46008C 92.93%), " +
                "linear-gradient(223.31deg, #7600F4 7.07%, #46008C 87.72%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #7600F4E5 inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
            borderStyle: "solid",
        },
    },
};

export const SECTION_THEME: Record<QuickActionCardProps['color'], SectionTheme> = {
    green: {
        style: {
            borderWidth: 1,
            borderStyle: "solid",
            borderImageSource:
                "linear-gradient(48.36deg, #56B01E 12.67%, rgba(0,0,0,0) 33.36%), " +
                "linear-gradient(48.36deg, rgba(0,0,0,0) 33.36%, #1DBF59 90.7%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #7AD0078A inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
        },
    },
    blue: {
        style: {
            borderWidth: 1,
            borderStyle: "solid",
            borderImageSource:
                "linear-gradient(67deg, #124AFF 35.1%, rgba(0,0,0,0) 90.04%), " +
                "linear-gradient(76.38deg, rgba(0,0,0,0) 33.36%, #126DFF 98.1%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #136EFF99 inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
        },
    },
    purple: {
        style: {
            borderWidth: 1,
            borderStyle: "solid",
            borderImageSource:
                "linear-gradient(43.31deg, #7600F4 12.28%, #46008C 92.93%), " +
                "linear-gradient(223.31deg, #7600F4 7.07%, #46008C 87.72%)",
            borderImageSlice: 1,
            boxShadow: "0px 4px 12px 0px #7600F4E5 inset",
            backdropFilter: "blur(20px)",
            borderColor: 'transparent',  
        },
    },
};

export const REVISION_THEME: Record<
  string,
  {
    panel: string; // extra classes for the big panel
    card: string;  // extra classes for each topic card
    pillBorder: string;
    playGlow: string;
    progressGradient: string;
  }
> = {
  // Social Science – cyan / teal
  'social-science': {
    panel:
      'border-[rgba(0,246,255,0.65)] shadow-[0_0_40px_rgba(0,246,255,0.35)]',
    card:
      'border-[rgba(0,246,255,0.85)] shadow-[0_0_26px_rgba(0,246,255,0.35)]',
    pillBorder: 'border-[rgba(0,246,255,0.8)] bg-[#041c26]',
    playGlow: 'bg-cyan-500/10 shadow-[0_0_20px_rgba(0,246,255,0.7)]',
    progressGradient:
      'linear-gradient(90deg, #00f6ff 0%, #54fff1 50%, #b0ffff 100%)',
  },

  // Maths – purple
  maths: {
    panel:
      'border-[rgba(162,112,255,0.75)] shadow-[0_0_40px_rgba(162,112,255,0.35)]',
    card:
      'border-[rgba(162,112,255,0.95)] shadow-[0_0_26px_rgba(162,112,255,0.35)]',
    pillBorder: 'border-[rgba(162,112,255,0.9)] bg-[#170634]',
    playGlow: 'bg-[#8b5cf6]/20 shadow-[0_0_20px_rgba(162,112,255,0.8)]',
    progressGradient:
      'linear-gradient(90deg, #a855f7 0%, #c4b5fd 50%, #e9d5ff 100%)',
  },

  // Physics – pink / magenta
  physics: {
    panel:
      'border-[rgba(255,65,160,0.75)] shadow-[0_0_40px_rgba(255,65,160,0.35)]',
    card:
      'border-[rgba(255,65,160,0.95)] shadow-[0_0_26px_rgba(255,65,160,0.35)]',
    pillBorder: 'border-[rgba(255,65,160,0.9)] bg-[#24021a]',
    playGlow: 'bg-[#ec4899]/20 shadow-[0_0_20px_rgba(255,65,160,0.8)]',
    progressGradient:
      'linear-gradient(90deg, #fb379e 0%, #fd93cf 50%, #ffe0f2 100%)',
  },

  // fallback (use Social’s theme)
  default: {
    panel:
      'border-[rgba(0,246,255,0.65)] shadow-[0_0_40px_rgba(0,246,255,0.35)]',
    card:
      'border-[rgba(0,246,255,0.85)] shadow-[0_0_26px_rgba(0,246,255,0.35)]',
    pillBorder: 'border-[rgba(0,246,255,0.8)] bg-[#041c26]',
    playGlow: 'bg-cyan-500/10 shadow-[0_0_20px_rgba(0,246,255,0.7)]',
    progressGradient:
      'linear-gradient(90deg, #00f6ff 0%, #54fff1 50%, #b0ffff 100%)',
  },
};