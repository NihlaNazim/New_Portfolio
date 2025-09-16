export default function ContactForm() {
    return (
        <form
        action="https://formsubmit.co/YOUR_EMAIL"
        method="POST"
        className="max-w-xl space-y-4"
        >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain/thanks" />
        <input
            className="w-full p-3 border rounded-xl bg-zinc-900 border-zinc-800"
            name="name" placeholder="Your name" required
        />
        <input
            className="w-full p-3 border rounded-xl bg-zinc-900 border-zinc-800"
            type="email" name="email" placeholder="Email" required
        />
        <textarea
            className="w-full p-3 border rounded-xl bg-zinc-900 border-zinc-800"
            name="message" rows={6} placeholder="Message" required
        />
        <button className="px-4 py-2 font-medium text-black bg-white rounded-2xl">Send</button>
        </form>
    );
}
