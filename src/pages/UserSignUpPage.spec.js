import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserSignUpPage } from './UserSignUpPage';

beforeEach(cleanup);

describe('UserSignUpPage', () => {
    describe('Layout', () => {

        it('has header of Sign Up', () => {
            const { container } = render(<UserSignUpPage />)
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        });

        it('has input for display name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const displayNameInput = queryByPlaceholderText('Your Display Name');
            expect(displayNameInput).toBeInTheDocument();
        });

        it('has input for user name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const userNameInput = queryByPlaceholderText('Your UserName');
            expect(userNameInput).toBeInTheDocument();
        });

        it('has input for password', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your Password');
            expect(passwordInput).toBeInTheDocument();
        });

        it('has password type for password input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your Password');
            expect(passwordInput.type).toBe('password');
        });

        it('has input for password repeat', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeatInput = queryByPlaceholderText('Repeat Your Password');
            expect(passwordRepeatInput).toBeInTheDocument();
        });

        it('has password type for password repeat input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeatInput = queryByPlaceholderText('Your Password');
            expect(passwordRepeatInput.type).toBe('password');
        });

        it('has submit button', () => {
            const { container } = render(<UserSignUpPage />);
            const button = container.querySelector("button");
            expect(button).toBeInTheDocument();
        });

    });

    describe('Interactions', () => {
        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            };
        };

        it('set the displayName value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const displayNameInput = queryByPlaceholderText('Your Display Name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));

            expect(displayNameInput).toHaveValue('my-display-name');
        });

        it('set the userName value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const userNameInput = queryByPlaceholderText('Your UserName');

            fireEvent.change(userNameInput, changeEvent('my-user-name'));

            expect(userNameInput).toHaveValue('my-user-name');
        });

        it('set the password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your Password');

            fireEvent.change(passwordInput, changeEvent('P4assword'));

            expect(passwordInput).toHaveValue('P4assword');
        });

        it('set the repeat password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordRepeatInput = queryByPlaceholderText('Repeat Your Password');

            fireEvent.change(passwordRepeatInput, changeEvent('P4assword'));

            expect(passwordRepeatInput).toHaveValue('P4assword');
        });

    })

})