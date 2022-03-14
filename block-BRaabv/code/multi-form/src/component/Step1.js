function Step1(props) {
    if(props.currentStep !== 1) {
        return null;
    }
    return (
        <>
        <p>
                            <label>First Name</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label>Last Name</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label>Date Of Birth</label>
                            <input type="date" />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email" />
                        </p>
                        <p className="full-width">
                            <label>Address</label>
                            <textarea></textarea>
                        </p>
                        </>
    )
}

export default Step1;