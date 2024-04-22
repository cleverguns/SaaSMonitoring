import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function PasswordReset() {
    const INITIAL_RESET_OBJ = {
        email: ""
    };

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [resetObj, setResetObj] = useState(INITIAL_RESET_OBJ);

    const submitForm = (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (resetObj.email.trim() === "") {
            return setErrorMessage("Email is required!");
        } else {
            setLoading(true);
            // Call API to request password reset
            // Assuming API call is asynchronous, for demonstration purposes
            setTimeout(() => {
                setLoading(false);
                // Assuming success, redirect to success page or show success message
                console.log("Password reset request sent successfully!");
            }, 2000);
        }
    };

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("");
        setResetObj({ ...resetObj, [updateType]: value });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="py-24 px-10">
                    <h2 className="text-2xl font-semibold mb-2 text-center">Reset Password</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <InputText
                            defaultValue={resetObj.email}
                            updateType="email"
                            containerStyle="mt-4"
                            labelTitle="Email"
                            updateFormValue={updateFormValue}
                        />

                        <ErrorText styleClass="mt-2">{errorMessage}</ErrorText>

                        <button type="submit" className={"btn mt-4 w-full btn-primary" + (loading ? " loading" : "")}>Reset Password</button>

                        <div className="text-center mt-4">
                            Remembered your password? <Link to="/login" className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;
