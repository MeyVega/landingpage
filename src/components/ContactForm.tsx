import { useState } from 'react'; 
import { supabase } from '../lib/supabase';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''  
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase
            .from('messages') 
            .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

        if (error) {
            console.error('Error sending message', error);
            setStatus(`Error: ${error.message}`);
        } else {
            console.log('Message sent successfully! ');
            setStatus('Mensaje enviado correctamente');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id='contact' className="py-16 bg-cosmos">
            <div className='container mx-auto px-4'>
                <h2 className='section-title'>Wanna Talk?</h2>
                <div className='max-w-2xl mx-auto'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                            <input type="text" id='name' name='name' className='input-style' 
                                   required value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Your email*</label>
                            <input type="email" id="email" name="email" required className="input-style" 
                                   value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message*</label>
                            <textarea id="message" name="message" required rows={4} className="input-style" 
                                      value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type='submit' className='bg-star text-space px-6 py-3 rounded-md hover:bg-nebula hover:text-white transition-colors w-full'>
                            Launch Message 🚀
                        </button>
                    </form>
                    {status && <p className="mt-4 text-center text-white">{status}</p>}
                    <p className="mt-6 text-gray-400 text-center">
                        Contact me with any questions or just to say a few nice words ... or mean ones. Up to you ....
                    </p>
                </div>
            </div>
        </section>
    );
}
