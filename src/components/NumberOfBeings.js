function NumberOfBeings({ numberOfBeings, onChangeNumberOfBeings }) {

    return (
        <p>
            <label htmlFor="NumberOfBeings">Number Of Beings : </label>
            <input type="text"
                id="NumberOfBeings"
                name="NumberOfBeings"
                size="50"
                placeholder="Number Of Beings.."
                value={numberOfBeings}
                onChange={onChangeNumberOfBeings}
            />
            <span id="warning"></span>
        </p>
    )
}

export default NumberOfBeings