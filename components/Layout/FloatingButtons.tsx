export default function FloatingButtons() {
    return (
        <>
            <a
                href="https://wa.me/918793398909"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-[100] rounded-full bg-green-700 px-6 py-4 text-white shadow-2xl hover:bg-green-800"
            >
                💬 WhatsApp
            </a>

            <a
                href="tel:8793398909"
                className="fixed bottom-24 right-6 z-[100] rounded-full bg-yellow-400 px-6 py-4 font-bold text-black shadow-2xl hover:bg-yellow-300"
            >
                📞 Call
            </a>
        </>
    );
}