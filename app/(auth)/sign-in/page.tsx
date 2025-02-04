import AuthForm from "@/components/AuthForm"

// AuthForm is a reusable component that can handle different types of authentication forms (e.g., sign-in, sign-up, password reset).
// The type prop is used to configure the AuthForm component to display the correct form fields and behavior for the specified authentication type.
const SignIn = () => <AuthForm type ="sign-in" />

export default SignIn