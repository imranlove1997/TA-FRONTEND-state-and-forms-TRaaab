function Step2(props) {
    if(props.currentStep !== 2) {
        return null;
    }
    return (
        <>
         <p className="full-width">
                            <label>Message</label>
                            <textarea></textarea>
                        </p>
        </>
    )
}

export default Step2;