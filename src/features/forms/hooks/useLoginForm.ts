import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../schema';
import type { User } from '../../../types/user';

export const useLoginForm = () => {
    const navigate = useNavigate();
    const form = useForm<User>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
        username: '',
        password: '',
        },
    });

    const { reset } = form

    const onSubmit = (data: User) => {
        console.log('Form submitted:', data);
        // Handle login logic here, e.g., API call
        reset();
        navigate('/home');
    };

    return {
        ...form,
        onSubmit,
    };
}