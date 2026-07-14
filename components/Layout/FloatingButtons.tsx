export default function FloatingButtons() {
    return (
        <>
            <a
                href="https://wa.me/9196575 94144"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-[100] rounded-full bg-green-700 px-6 py-4 text-white shadow-2xl hover:bg-green-800"
            >
                💬 WhatsApp
            </a>

            <a
                href="tel:96575 94144"
                className="fixed bottom-24 right-6 z-[100] rounded-full bg-yellow-400 px-6 py-4 font-bold text-black shadow-2xl hover:bg-yellow-300"
            >
                📞 Call
            </a>
        </>
    );
}