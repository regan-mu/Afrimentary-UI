import uniqid from "uniqid";

const ReferrerField = ({agents, data, handleChange}) => {
    return (
            <section className="form__field form__field-select">
                <label htmlFor="referee">Referred By</label>
                <select name="referred_by" id="referee" value={data.referred_by} onChange={handleChange}>
                    <option value="self">None</option>
                    {agents.map(agent =>  {agent
                        return <option key={uniqid()} value={agent?.public_id}>{`${agent?.first_name} ${agent?.last_name}`} </option>})
                    }
                </select>
            </section>
    )
}
const EducationField = ({data, handleChange}) => {
    return (
        <section className="form__field form__field-select">
            <label htmlFor="education">Education Level</label>
            <select name="education" id="education" required value={data.education} onChange={handleChange}>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
            </select>
        </section>
    )
}
const GenderField = ({data, handleChange}) => {
    return (
        <section className="form__field form__field-select">
            <label htmlFor="education">Gender</label>
            <select name="gender" id="gender" required value={data.gender} onChange={handleChange}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
            </select>
        </section>
    )
}
export default ReferrerField;
export {EducationField, GenderField};