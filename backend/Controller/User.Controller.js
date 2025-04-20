export const registerUser = async (req, res) => {
 
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const userExists = await User.findone({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await User

}