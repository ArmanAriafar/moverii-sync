module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        fontFamily: {
            sans: "Poppins",
        },
        extend: {
            colors: {
                cyan: {
                    100: "#E1F9FC",
                },
                gray: {
                    100: "#ECECF6",
                    200: "#E5E7EB",
                    300: "#959499",
                    400: "#454545",
                    900: "#212121",
                },
                Teal: {
                    500: "#1ABC9C",
                },
                primary: {
                    500: "#FF9F1C",
                },
            },
        },
    },
    plugins: [],
};
