import { motion } from "framer-motion";
import { Mail } from "lucide-react"; // Fixed import path
import { SITE } from "../../data/site";

export default function ContactForm() {
    return (
        <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <div className="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl">
            <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white">Let's Work Together</h3>
            <p className="text-gray-300">
                Have a project in mind? Let's discuss how we can bring it to life.
            </p>
            </div>

            {/* Contact form */}
            <form
            action="https://formsubmit.co/YOUR_EMAIL"
            method="POST"
            className="space-y-6"
            >
            {/* Hidden inputs for formsubmit configuration */}
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
            <input type="hidden" name="_subject" value="New contact form submission" />
            <input type="hidden" name="_captcha" value="false" />

            <motion.input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full p-4 text-white placeholder-gray-400 transition-all border border-gray-700 bg-gray-800/50 rounded-xl focus:border-purple-500 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
            />

            <motion.input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full p-4 text-white placeholder-gray-400 transition-all border border-gray-700 bg-gray-800/50 rounded-xl focus:border-purple-500 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 text-white placeholder-gray-400 transition-all border border-gray-700 resize-none bg-gray-800/50 rounded-xl focus:border-purple-500 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
            />

            <motion.button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold text-white transition-all bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                <Mail size={18} />
                Send Message
            </motion.button>
            </form>

            {/* Direct email option */}
            <div className="pt-8 mt-8 text-center border-t border-gray-800">
            <p className="mb-4 text-gray-400">Or reach out directly:</p>
            <motion.a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
            >
                <Mail size={18} />
                {SITE.email}
            </motion.a>
            </div>
        </div>
        </motion.div>
    );
}