import "../Styles/styles.css"
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ch_blo, flowers } from "../../assets/export";
import { ContacInfoAr, ContacInfoEn } from "../../Utiliti/data";
import { useTranslation } from "react-i18next";
import UseMyEffect from "../UseMyEffect/UseMyEffect";

export const ContactForm = ({language,mood}) => {
    const {t,i18n } = useTranslation();

       useEffect(()=>{
       if (language)
        i18n.changeLanguage(language);
    
      },[language,i18n]);
    const [formData, setFormData] = useState({
        name: '', // أضفنا حقل الاسم
        email: '',
        message: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    // استبدل هذه القيم بقيمك الخاصة من EmailJS
    const SERVICE_ID = 'service_6xc6a01';
    const TEMPLATE_ID = 'template_eb9f9tn'; 
    const USER_ID = 'HZi5mGL_TMvVe-agp';
    const MY_EMAIL = 'mayajouney4@gmail.com'; // بريدك الشخصي هنا

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
        <div className={` ${mood ?'text-black':'text-white'} flex flex-col sm:flex-row sm:justify-between items-center gap-10  sm:mx-15 my-16 mb-30`}>
            <div className="border-4 border-lime-400 px-10 py-3 shadow-xl/50">
      
                 <h2 className="text-4xl sm:text-5xl/25 tracking-widest  text-lime-400">{t("Contact_US")}</h2>      
            
            <form className=" flex flex-col justify-center items-center sm:items-start gap-4  text-center my-15  w-full sm:text-2xl/13  text-l/15  " onSubmit={handleSubmit}>
                <div className="flex flex-col w-fit ">
                <label>{t("name")}</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-3 outline-hidden bg-gray-100 focus:border-green-400 border-lime-400 mt-1"
                    placeholder=" Your full name"
                    required
                />
                </div>
            
                <div className="flex flex-col  w-fit">
                <label>{t("email")}</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-3 outline-hidden bg-gray-100 focus:border-green-400 border-lime-400 mt-3"
                    placeholder="example@domain.com"
                    required
                />
                </div>
                
                <div className="flex flex-col  w-fit ">
                <label className="w-fit">{t("message")}</label>
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-3 outline-hidden bg-gray-100 focus:border-green-400 border-lime-400 w-50 sm:w-100 h-35 mt-3"
                    placeholder="  Your Message"
                    required
                />
                </div>
                {notification && (
                <div className={  ` text-red-400 ${notification.type}`}>
                {notification.message}
                </div>
                )}
                 <button className=" w-40  border-3 border-lime-400 cursor-pointer hover:bg-green-400 click:border-green-400" type="submit" disabled={isLoading}>
                {isLoading ?t("sending") : t("sendButton") }
                </button>
               
            </form>
        </div>
      
        <div className=" w-30 h-40   md:h-50 md:w-100 sm:h-100  ">
            <img  src={flowers} alt="" />
        </div>
        </div>
    );
    };


