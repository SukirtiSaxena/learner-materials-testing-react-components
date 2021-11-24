function Reason({ reason, onChangeReason }) {

    return (
        <p>
            <label htmlFor="reason">Reason for sparing</label>
            <textarea
                id="reason"
                name="reason"
                row="4"
                cols="50"
                placeholder="Why..??"
                value={reason}
                onChange={onChangeReason}
            />
            <span id="warning"></span>
        </p>
    )
}

export default Reason