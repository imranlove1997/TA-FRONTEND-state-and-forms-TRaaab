function Step3(props) {
    if(props.currentStep !== 3) {
        return null;
    }
    return (
        <>
         <p className="full-width">
                            <label>Checkbox</label>
                            <textarea></textarea>
                        </p>
        </>
    )
}

export default Step3;