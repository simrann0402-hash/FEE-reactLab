import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export function UpdateForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { students, updateRecord, isLoading } = useStudentStore();

    const [formData, setFormData] = useState({
        roll_number: "",
        name: "",
        section: "",
        marks: "",
    });

    // Pre-populate the form with existing student details on mount 
    useEffect(() => {
        const currentStudent = students.find((s) => String(s.id) === String(id));
        if (currentStudent) {
            setFormData({
                roll_number: currentStudent.roll_number,
                name: currentStudent.name,
                section: currentStudent.section,
                marks: currentStudent.marks,
            });
        }
    }, [id, students]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = { ...formData, marks: Number(formData.marks) }; // Ensure marks is a number

        await updateRecord(id, updatedData);
        navigate("/students");
    };

    return (
        <div
            className="hf fyc p3 bg71"
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",

            }}
        >
            <h2>Update Record</h2>
            <form
                onSubmit={handleSubmit}
                className="bg70 p4 br2"
                style={{ width: "275px" }}
            >
                <button
                    type="button"
                    className="bg31"
                    onClick={() => navigate("/students")}
                    style={{ marginLeft: "auto", display: "block" }}
                >
                    Cancel
                </button>
                <div className="from-group  ">
                    <label>Roll Number</label>
                    <input
                        type="text"
                        name="roll_number"
                        value={formData.roll_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Section</label>
                    <input
                        type="text"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Marks</label>
                    <input
                        type="number"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading} className="bg50 mt2">
                    {isLoading ? "Updating..." : "Update Record"}
                </button>
            </form>
        </div>
    );
}