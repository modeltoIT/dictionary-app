/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                loraRegular: ['Lora Regular', 'serif'],
                loraBold: ['Lora Bold', 'serif'],
                loraBoldItalic: ['Lora Bold Italic', 'serif'],
                interRegular: ['Inter Regular', 'sans-serif'],
                interBold: ['Inter Bold', 'sans-serif'],
                inconsolataRegular: ['Inconsolata Regular', 'mono'],
                inconsolataBold: ['Inconsolata Bold', 'mono'],
            },
            fontSize: {
                bs: ['14px', '17px'],
                bm: ['18px', '24px'],
                hs: ['20px', '24px'],
                hm: ['24px', '29px'],
                hl: ['64px', '77px'],
            },
            colors: {
                black1: '#050505',
                black2: '#1F1F1F',
                black3: '#2D2D2D',
                black4: '#3A3A3A',
                black5: '#757575',
                gray1: '#F4F4F4',
                gray2: '#E9E9E9',
                white: '#FFFFFF',
                purple: '#A445ED',
                purpleSelection: '#e4c7fa',
                purpleDark: '#8F19E8',
                red: '#FF5252',
            },
            padding: {
                '0.75': '3px',
                '13': '51.5px',
                '15': '58px',
            },
            gap: {
                '4.5': '18px',
                '6.5': '26px',
            },
            screens: {
                'laptop': '850px',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}