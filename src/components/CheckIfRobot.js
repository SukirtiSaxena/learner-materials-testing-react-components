function CheckIfRobot({checkIfRobot, onChangecheckIfRobot }) {

    return (
        <p>
        <label htmlFor="notRobot">What is 2+2?</label>
        <select name="notRobot" id="notRobot" value={checkIfRobot} onChange={onChangecheckIfRobot}>
            <option value="notFour">Not 4</option>
            <option value="four">4</option>
        </select>
        <span id="warning"></span>
    </p>
    )
}

export default CheckIfRobot