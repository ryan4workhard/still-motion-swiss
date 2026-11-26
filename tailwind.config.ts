import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{paper:'#F8F8F6',ink:'#111111',line:'#E5E5E0'},fontFamily:{display:['Instrument Serif','Georgia','serif'],sans:['Inter','Arial','sans-serif']}}},plugins:[]} satisfies Config;
