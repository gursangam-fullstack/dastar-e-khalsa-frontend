import { useState } from "react";
import axios from "../lib/axios";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticipantCard from "./ParticipantCard";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        fatherName: "",
        schoolOrCollege: "",
        address: "",
        hometown: "",
        email: "",
        whatsappNumber: "",
        gender: "",
        competition: "",
        group: "",
    });

    const [participantData, setParticipantData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // console.log(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await axios.post(
                "/participantdata",
                formData
            );
            console.log("res data", res.data);

            toast(res.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                type: res.data.success ? "success" : "error",
            });

            if (res.data.success === true) {
                setParticipantData(res.data.participant);
                setFormData({
                    fullName: "",
                    age: "",
                    fatherName: "",
                    schoolOrCollege: "",
                    address: "",
                    hometown: "",
                    email: "",
                    whatsappNumber: "",
                    gender: "",
                    competition: "",
                    group: "",
                });
            }
        } catch (error) {
            console.error(error);

            // Prefer server-provided message if present, then fallback to other known fields
            const serverMessage =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Something went wrong. Please try again.";

            toast(serverMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>

            {
                participantData
                    ?
                    <ParticipantCard data={participantData} />
                    :
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center text-lg font-bold underline pb-2">
                            ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਾਰਮ (Registration Form)
                        </h2>

                        <div className="form-data grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Name */}
                            <div>
                                <label className="block mb-1 text-sm font-semibold">
                                    ਨਾਮ (NAME)
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block mb-1 text-sm font-semibold">
                                    ਉਮਰ (AGE)
                                </label>
                                <input
                                    name="age"
                                    value={formData.age} // fixed typo here
                                    onChange={handleChange}
                                    type="text"
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Father's Name */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">
                                    ਪਿਤਾ ਦਾ ਨਾਮ (Father's Name)
                                </label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* School / College */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">
                                    ਸਕੂਲ ਜਾਂ ਕਾਲਜ (School or College)
                                </label>

                                <input
                                    type="text"
                                    name="schoolOrCollege"
                                    value={formData.schoolOrCollege}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਪਤਾ (Address)</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Hometown */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">
                                    ਸ਼ਹਿਰ (Hometown)
                                </label>
                                <input
                                    type="text"
                                    name="hometown"
                                    value={formData.hometown}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਈਮੇਲ (Email)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">
                                    ਵਟਸਐਪ ਨੰਬਰ (WhatsApp Number)
                                </label>

                                <input
                                    type="text"
                                    name="whatsappNumber"
                                    value={formData.whatsappNumber}
                                    onChange={handleChange}
                                    className="p-1 border rounded-md w-full"
                                />
                            </div>

                            {/* Gender */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਲਿੰਗ (GENDER)</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === "Male"}
                                            onChange={handleChange}
                                        />
                                        Male ( ਪੁਰਸ਼ )
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === "Female"}
                                            onChange={handleChange}
                                        />
                                        Female ( ਮਹਿਲਾ )
                                    </label>
                                </div>
                            </div>

                            {/* Competition */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">
                                    ਮੁਕਾਬਲਾ (COMPETITION)
                                </label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="competition"
                                            value="turban"
                                            checked={formData.competition === "turban"}
                                            onChange={handleChange}
                                        />
                                        Turban ( ਦਸਤਾਰ )
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="competition"
                                            value="dumala"
                                            checked={formData.competition === "dumala"}
                                            onChange={handleChange}
                                        />
                                        Dumala ( ਦੁਮਾਲਾ )
                                    </label>
                                </div>
                            </div>

                            {/* Group */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਗਰੁੱਪ (Group)</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="group"
                                            value="junior"
                                            checked={formData.group === "junior"}
                                            onChange={handleChange}
                                        />
                                        Junior  (ਜੂਨੀਅਰ)
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="group"
                                            value="senior"
                                            checked={formData.group === "senior"}
                                            onChange={handleChange}
                                        />
                                        Senior  (ਸੀਨੀਅਰ)
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="group"
                                            value="expert"
                                            checked={formData.group === "expert"}
                                            onChange={handleChange}
                                        />
                                        Expert  (ਮਾਹਰ)
                                    </label>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col justify-center items-start">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                    aria-disabled={isSubmitting}
                                    className="px-3 py-1  bg-custom-yellow text-white rounded-md md:max-w-[40%] md:w-[40%] max-w-[40%] w-[40%] font-semibold md:text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting && (
                                        <>
                                            <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                            <span className="sr-only">Submitting...</span>
                                        </>
                                    )}
                                    <span aria-live="polite">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                                </button>
                            </div>
                        </div>
                    </form>
            }


        </>
    );
};

export default FormComponent;
