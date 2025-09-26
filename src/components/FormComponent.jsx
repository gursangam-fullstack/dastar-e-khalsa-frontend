import ParticipantDetails from './Common/ParticipantDetails';

const FormComponent = () => {
    return (
        <>
            {/* This can be replaced with <ParticipantDetails participant={data} /> as needed */}
            {/* <ParticipantDetails participant={data} /> */}

            <form>
                <h2 className="text-center text-lg font-bold underline pb-2">ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਾਰਮ(Registration Form)</h2>
                <div className="form-data grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label className="block mb-1 text-sm font-semibold">ਨਾਮ (NAME)</label>
                        <input type="text" className="block w-full p-1 border border-gray-300 rounded-lg" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold">ਉਮਰ (AGE)</label>
                        <input type="text" className="block w-full p-1 border border-gray-300 rounded-lg" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਪਿਤਾ ਦਾ ਨਾਮ (Father's Name)</label>
                        <input type="text" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਸਕੂਲ ਜਾਂ ਕਾਲਜ (School or College)</label>
                        <input type="text" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਪਤਾ (Address)</label>
                        <input type="text" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਸ਼ਹਿਰ (Hometown)</label>
                        <input type="text" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਈਮੇਲ (Email)</label>
                        <input type="email" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਵਟਸਐਪ ਨੰਬਰ (WhatsApp Number)</label>
                        <input type="text" className="p-1 border rounded-md w-full" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਲਿੰਗ (GENDER)</label>
                        <div className="flex gap-2">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="Male" /> Male
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="Female" /> Female
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਮੁਕਾਬਲਾ (COMPETITION)</label>
                        <div className="flex gap-2">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="competition" value="turban" /> Turban
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="competition" value="dumala" /> Dumala
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">ਗਰੁੱਪ (Group)</label>
                        <div className="flex gap-2">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="group" value="junior" /> Junior
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="group" value="senior" /> Senior
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="group" value="expert" /> Expert
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start">
                        <button
                            type="submit"
                            className="px-3 py-1 bg-custom-yellow text-white rounded-md md:max-w-[40%] md:w-[40%] max-w-[20%] w-[20%] font-semibold md:text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormComponent;
