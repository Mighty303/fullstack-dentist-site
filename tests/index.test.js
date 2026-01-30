import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactFormSmall from '../src/components/Contact/ContactFormSmall';
import ContactForm from '../src/components/Contact/ContactForm';
// import { sendEmail } from '@/app/utils/send-email';
import * as emailUtils from '@/app/utils/send-email';


const mockSubmit = jest.fn((first_name, last_name, email, phone, message) => {
    return Promise.resolve({ first_name, last_name, email, phone, message });
});

// Mock the sendEmail function before the tests run
jest.spyOn(emailUtils, 'sendEmail').mockResolvedValue({});

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({ first_name: 'John', last_name: 'Doe', client_email: 'johndoe@example.com', client_phone: '6041234567890'})
    }))

// Unit tests
it('should render ContactFormSmall', () => {
    render(<ContactFormSmall login={mockSubmit} />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
});

it('should render ContactForm', () => {
    render(<ContactForm login={mockSubmit} />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
});

it('should display error when other fields not entered on ContactForm', async() => {
    const user = userEvent.setup();
    render(<ContactForm login={mockSubmit} />);

    const firstName = screen.getByPlaceholderText('First Name');
    await user.type(firstName, 'test');
    
    const submitButton = screen.getByRole('button', {name: /Request Appointment/i});
    await user.click(submitButton);
    
    const lastNameError = await screen.findByTestId('lastNameErrorMessage', {}, {timeout: 100});
    const emailError = await screen.findByTestId('emailErrorMessage', {}, {timeout: 100});
    const phoneError = await screen.findByTestId('phoneErrorMessage', {}, {timeout: 100});
    expect(lastNameError).toHaveTextContent('This field is required');
    expect(emailError).toHaveTextContent('This field is required');
    expect(phoneError).toHaveTextContent('This field is required');

});

it('should display error when other fields not entered on ContactFormSmall', async() => {
    const user = userEvent.setup();
    render(<ContactFormSmall login={mockSubmit} />);

    const firstName = screen.getByPlaceholderText('First Name');
    await user.type(firstName, 'test');
    
    const submitButton = screen.getByRole('button', {name: /Request Appointment/i});
    await user.click(submitButton);
    
    const lastNameError = await screen.findByTestId('lastNameErrorMessage', {}, {timeout: 100});
    const emailError = await screen.findByTestId('emailErrorMessage', {}, {timeout: 100});
    const phoneError = await screen.findByTestId('phoneErrorMessage', {}, {timeout: 100});
    expect(lastNameError).toHaveTextContent('This field is required');
    expect(emailError).toHaveTextContent('This field is required');
    expect(phoneError).toHaveTextContent('This field is required');

});

// it('should display successful form submission on ContactForm', async() => {
//     const user = userEvent.setup();
//     render(<ContactForm login={mockSubmit} />);

//     const firstName = screen.getByPlaceholderText('First Name');
//     await user.type(firstName, 'John');

//     const lastName = screen.getByPlaceholderText('First Name');
//     await user.type(lastName, 'Doe');

//     const email = screen.getByPlaceholderText('Email');
//     await user.type(email, 'johndoe@example.com');

//     const phone = screen.getByPlaceholderText('+1 (604) 000-0000');
//     await user.type(phone, '6041234567890');
    
//     const submitButton = screen.getByRole('button', {name: /Request Appointment/i});
//     await user.click(submitButton);

//     expect(sendEmail).toHaveBeenCalled();
// });
