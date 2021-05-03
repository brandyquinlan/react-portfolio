import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


init('user_mpuxkhWQwVtKX6aap11OQ');

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [contactNumber, setContactNumber] = useState('000000');
    
    const message = watch('message') || '';
    const messageCharsLeft = 1500 - message.length;

    const notify = () => { 
        toast('Email has been sent') 
    }

    const generateContactNumber = () => {
        const numStr = '000000' + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const onSubmit = (data) => {
        console.log(data);
        generateContactNumber();
        sendForm('default_service', 'template_84g1azl', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    // render() {
    return (
        <section id='contact'>
            <div className='column1'>
                <h1>Contact Me</h1>
                <br></br>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input type='hidden' name='contact_number' value={contactNumber}></input>
                    </div>
                    <div className='form-group'>
                    <label for="name ">Name</label>
                        <input
                            type='text'
                            name='user_name'
                            id='name'
                            maxLength='30'
                            // aria-invalid={errors.user_name ?'true' :'false'}
                            {...register('user_name', { required: true })}
                            placeholder='Name'></input>
                        {/* {errors.user_name && errors.user_name.type === 'required' && (
                            <div role='alert'>Name is required</div>
                        )} */}
                    </div>
                    <div className='form-group'>
                    <label for="email ">Email</label>
                        <input
                            type='email'
                            name='user_email'
                            id='email'
                            {...register('user_email', { required: true })}
                            placeholder='ex. jdoe@email.com'></input>
                    </div>
                    <div className='form-group'>
                    <label for="message ">Message</label>
                        <textarea
                            name='message'
                            id='message'
                            maxLength='1500'
                            {...register}
                            placeholder='Message'></textarea>
                        {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}
                    </div>
                    <button type='submit' className='btn' value='Send' onClick={notify}>Submit</button>
                </form>
            </div>
            <div className='column2'>
                <h1>Brandy Quinlan</h1>
                <p>
                <br></br>phone
                    <br></br><span>(913)488-0917</span>
                <br></br><br></br>email
                <br></br>
                    <a href='mailto://brandyquinlan@gmail.com' rel='noreferrer' target='_blank'>brandyquinlan@gmail.com</a>
                <br></br><br></br>LinkedIn
                <br></br>
                    <a href='http://www.linkedin.com/in/brandyquinlan' rel='noreferrer' target='_blank'>www.linkedin.com/in/brandyquinlan</a>
                <br></br><br></br>GitHub
                <br></br>
                    <a href='https://github.com/brandyquinlan' rel='noreferrer' target='_blank'>https://github.com/brandyquinlan</a>
                </p>
            </div>
        </section>
    )
}

export default Contact
