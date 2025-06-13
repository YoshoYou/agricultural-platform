import "../Styles/styles.css"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ch_blo } from "../../assets/export";

    export const ContactForm = ({language}) => {
    const [formData, setFormData] = useState({
        name: '', // أضفنا حقل الاسم
        email: '',
        message: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    // استبدل هذه القيم بقيمك الخاصة من EmailJS
    const SERVICE_ID = 'service_6xc6a01';
    const TEMPLATE_ID = 'template_1qs0jir'; 
    const USER_ID = 'HZi5mGL_TMvVe-agp';
    const MY_EMAIL = 'ayajouneyofficial@gmail.com'; // بريدك الشخصي هنا

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
            to_email: MY_EMAIL, // سيتم الإرسال إلى بريدك دائماً
            from_name: formData.name, // اسم المرسل
            from_email: formData.email, // بريد المرسل
            message: formData.message,
            date: new Date().toLocaleString()
            },
            USER_ID
        );
        
        setNotification({
            type: 'success',
            message: 'Your Message has been sent successfylly'
        });
        setFormData({ name: '', email: '', message: '' });
        
        } catch (error) {
        setNotification({
            type: 'error',
            message: 'Something Went Wrong, Check Your Internet Connection and Try again'
        });
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className=" md:m-16 m-5 sm:m-10 flex flex-col justigy-center items-center  relative overflow-hidden  ">
        <h2 className="text-4xl sm:text-7xl/25 tracking-widest  text-lime-400"> Contact US</h2>
      <form className=" flex flex-col justify-center items-center mt-20 ml-5 text-center  flex-2  gap-10 w-full sm:text-2xl/13 sm:p-5 text-l/15  " onSubmit={handleSubmit}>
            <div className="flex flex-col justify-start w-fit ">
            <label>Please enter your name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-3 border-lime-400 "
                placeholder=" Your full name"
                required
            />
            </div>
        
            <div className="flex flex-col justify-start w-fit">
            <label> Enter Your E-mail</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-3 border-lime-400 "
                placeholder="example@domain.com"
                required
            />
            </div>
            
            <div className="flex flex-col justify-start w-fit ">
            <label className="w-fit">Write Your Message Here</label>
            <img src="" className="absolute" alt="" />
            <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-3 border-lime-400 w-50 sm:w-100 h-35 "
                placeholder="  Your Message"
                required
            />
            </div>
            {notification && (
            <div className={  ` text-red-400 ${notification.type}`}>
            {notification.message}
            </div>
             )}
            <button className=" w-40 sm:w-full border-3 border-lime-400 cursor-pointer hover:bg-green-400 click:border-green-400" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending ....' : 'Send'}
            </button>
        </form>
        <div className="w-1\3 absolute  md:top-50 sm:top-55 top-35 -right-4  md:-right-10  -z-1 w-40 h-40  sm:w-70 sm:h-50 md:w-100 sm:h-100  ">
            <img className="rotate-[180deg]" src={ch_blo} alt="" />
        </div>
        </div>
    );
    };


