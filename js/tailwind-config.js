// Configure Tailwind to use the FOG-inspired aesthetic
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Muted, neutral palette inspired by Fear of God
                'base': '#f5f0ed', // A light, warm beige
                'content': '#333333', // Slightly darker soft black for text
                'subtle': '#a0a0a0', // Muted gray for secondary info
                'accent': '#b5927c', // A soft, desaturated terracotta/tan for accents
                'accent-hover': '#9e7a67', // A slightly darker version for hover states
            }
        }
    }
}
