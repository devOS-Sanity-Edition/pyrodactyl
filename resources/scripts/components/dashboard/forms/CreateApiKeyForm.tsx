import { Actions, useStoreActions } from 'easy-peasy';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';

import FlashMessageRender from '@/components/FlashMessageRender';
import ApiKeyModal from '@/components/dashboard/ApiKeyModal';
import Button from '@/components/elements/Button';
import FormikFieldWrapper from '@/components/elements/FormikFieldWrapper';
import Input from '@/components/elements/Input';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

import createApiKey from '@/api/account/createApiKey';
import { ApiKey } from '@/api/account/getApiKeys';
import { httpErrorToHuman } from '@/api/http';

import { ApplicationStore } from '@/state';

interface Values {
    description: string;
    allowedIps: string;
}

export default ({ onKeyCreated }: { onKeyCreated: (key: ApiKey) => void }) => {
    const [apiKey, setApiKey] = useState('');
    const { addError, clearFlashes } = useStoreActions((actions: Actions<ApplicationStore>) => actions.flashes);

    const submit = (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
        clearFlashes('account');
        createApiKey(values.description, values.allowedIps)
            .then(({ secretToken, ...key }) => {
                resetForm();
                setSubmitting(false);
                setApiKey(`${key.identifier}${secretToken}`);
                onKeyCreated(key);
            })
            .catch((error) => {
                console.error(error);

                addError({ key: 'account', message: httpErrorToHuman(error) });
                setSubmitting(false);
            });
    };

    return (
        <>
            {/* Flash Messages */}
            <FlashMessageRender byKey='account' />

            {/* Modal for API Key */}
            <ApiKeyModal visible={apiKey.length > 0} onModalDismissed={() => setApiKey('')} apiKey={apiKey} />

            {/* Form for creating API key */}
            <Formik
                onSubmit={submit}
                initialValues={{ description: '', allowedIps: '' }}
                validationSchema={object().shape({
                    allowedIps: string(),
                    description: string().required().min(4),
                })}
            >
                {({ isSubmitting }) => (
                    <Form className='space-y-6'>
                        {/* Show spinner overlay when submitting */}
                        <SpinnerOverlay visible={isSubmitting} />

                        {/* Description Field */}
                        <FormikFieldWrapper
                            label='Description'
                            name='description'
                            description='A description of this API key.'
                        >
                            <Field name='description' as={Input} />
                        </FormikFieldWrapper>

                        {/* Allowed IPs Field */}
                        <FormikFieldWrapper
                            label='Allowed IPs'
                            name='allowedIps'
                            description='Leave blank to allow any IP address to use this API key, otherwise provide each IP address on a new line.'
                        >
                            <Field name='allowedIps' as={Input} />
                        </FormikFieldWrapper>

                        {/* Submit Button below form fields */}
                        <div className='flex justify-end mt-6'>
                            <Button
                                type='submit'
                                className='bg-red-600 text-white hover:bg-red-700 px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Creating...' : 'Create API Key'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};
