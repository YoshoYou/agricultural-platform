import "../Styles/styles.css"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

    export const ContactForm = () => {
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
            message: 'تم إرسال رسالتك بنجاح!'
        });
        setFormData({ name: '', email: '', message: '' });
        
        } catch (error) {
        setNotification({
            type: 'error',
            message: 'حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً'
        });
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className=" contact-form">
        <h2 className="text-black-500">اتصل بنا</h2>
        
        {notification && (
            <div className={alert  `${notification.type}`}>
            {notification.message}
            </div>
        )}
      
      <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>اسمك:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك"
                required
            />
            </div>
        
            <div className="form-group">
            <label>بريدك الإلكتروني:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                required
            />
            </div>
            
            <div className="form-group">
            <label>رسالتك:</label>
            <textarea className="border-4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="أدخل رسالتك هنا..."
                required
                minLength="10"
            />
            </div>
            
            <button type="submit" disabled={isLoading}>
            {isLoading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
            </button>
        </form>
        </div>
    );
    };


