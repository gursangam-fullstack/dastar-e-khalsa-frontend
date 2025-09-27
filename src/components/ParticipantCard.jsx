import ParticipantPDF from "./ParticipantPDF";

const ParticipantCard = ({ data }) => {
    return (
        <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow-lg border border-gray-200">

            {/* Header Section with Token */}
            <div className="px-6 py-4 text-white rounded-t-lg" style={{ backgroundColor: 'rgb(165, 116, 0)' }}>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-3 tracking-wide">DASTAR-E-KHALSA</h1>

                    {/* Token Number - Main Highlight */}
                    <div className="bg-white rounded-lg px-4 py-2 inline-block" style={{ color: 'rgb(165, 116, 0)' }}>
                        <p className="text-xs font-medium">TOKEN NO.</p>
                        <p className="text-2xl font-bold tracking-wider">{data.tokenNumber}</p>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{data.fullName}</h2>
                    <p className="text-sm font-medium text-white px-3 py-1 rounded-full inline-block" style={{ backgroundColor: 'rgb(165, 116, 0)' }}>
                        {data.competition}
                    </p>
                </div>
            </div>

            {/* Details Section */}
            <div className="px-6 py-4 space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Age</p>
                        <p className="font-semibold text-gray-800">{data.age}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Group</p>
                        <p className="font-semibold text-gray-800">{data.group}</p>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span className="text-gray-600 font-medium">Father's Name:</span>
                        <span className="text-gray-800 font-semibold">{data.fatherName}</span>
                    </div>

                    {data.schoolOrCollege && (
                        <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="text-gray-600 font-medium">Institution:</span>
                            <span className="text-gray-800 font-semibold text-right">
                                {data.schoolOrCollege}
                            </span>
                        </div>
                    )}

                    <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span className="text-gray-600 font-medium">Hometown:</span>
                        <span className="text-gray-800 font-semibold">{data.hometown}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span className="text-gray-600 font-medium">Gender:</span>
                        <span className="text-gray-800 font-semibold">{data.gender}</span>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 p-3 rounded-lg mt-4">
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Contact Information</h3>
                    <div className="space-y-1 text-xs">
                        <p className="text-gray-600">
                            <span className="font-medium">Email:</span> {data.email}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">WhatsApp:</span> {data.whatsappNumber}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Address:</span> {data.address}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 px-6 py-3 text-center border-t rounded-b-lg">
                <p className="text-xs text-gray-500 font-medium">
                    ਮੁਕਾਬਲੇ ਲਈ ਇਹ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰ ਕੇ ਆਪਣੇ ਕੋਲ ਰੱਖੋ।
                </p>
                <div className="mt-1 flex justify-center">
                    <div className="w-8 h-1 rounded" style={{ backgroundColor: 'rgb(165, 116, 0)' }}></div>
                </div>
            </div>

            <ParticipantPDF data={data} />
        </div>
    );
};

export default ParticipantCard;