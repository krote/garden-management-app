/** @type {import('tailwindcss').Config} */
module_exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'garden': {
                    50: '#fofdf4',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}