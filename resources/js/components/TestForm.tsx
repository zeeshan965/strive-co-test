import React, {useEffect, useState} from 'react';
import {
    withFormik,
    FieldArray,
    Field,
    FormikState,
    FormikValues,
    FormikHandlers,
    ErrorMessage,
    FormikComputedProps
} from 'formik';
import {redirectToSuccessPage} from '../services/Router';
import {postData} from '../services/Form';
import {incrementformviewcount} from '../services/Stats';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    messages: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required("Name required"),
            color: Yup.string().required("Color required"),
        })
    )
})

const TestForm = (props: React.PropsWithChildren<FormikState<FormikValues> & FormikHandlers & FormikComputedProps<any>>) => {
    const {values, handleSubmit, isSubmitting, isValid} = props;
    if (typeof (values.messages) === "undefined") {
        values.messages = [{name: "", color: ""}];
    }
    const [testFormStatus, setTestFormStatus] = useState(false);

    useEffect(() => {
        // Imaginary call to increment the view count when this form first loads
        incrementformviewcount();
    });

    return (
        <form className="divide-y space-y prose prose-sm max-w-none" onSubmit={handleSubmit}>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <h3 className="">Data sets</h3>

                <FieldArray name="messages" render={arrayHelpers => (
                    <div>
                        {values.messages && values.messages.length > 0 ? (
                            values.messages.map((item: any, index: number) => (
                                <div key={index}>
                                    <div className="mb-4 flex">
                                        <div className={"w-full mr-4"}>
                                            <Field name={`messages[${index}].name`} type="text" placeholder="Name"
                                                   className="name pt-2 pb-2 pl-2 pr-2 mr-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                            <div className="invalid-feedback">
                                                <ErrorMessage name={`messages[${index}].name`}/>
                                            </div>
                                        </div>

                                        <div className={"w-full mr-4"}>
                                            <Field name={`messages.${index}.color`} type="color" placeholder="Color"
                                                   className="color pt-2 pb-2 pl-2 pr-2 mr-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                            <div className="invalid-feedback">
                                                <ErrorMessage name={`messages[${index}].color`}/>
                                            </div>
                                        </div>


                                        <button
                                            className="text-white bg-red-500 rounded p-2 px-4 hover:bg-red-600 font-bold"
                                            onClick={() => arrayHelpers.remove(index)}>Delete set
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : null}

                        {isSubmitting && isValid && values.messages && values.messages.length < 2 ? (
                            <div className="invalid-feedback">
                                At least 2 sets of [ name, color ] required.
                            </div>
                        ) : null}
                        <button className="bg-gray-100 rounded p-2 px-4 hover:bg-gray-200"
                                style={{fontWeight: 600}}
                                onClick={() => arrayHelpers.push({name: "", color: ""})}>Add another set
                        </button>
                    </div>
                )}
                />
            </div>

            <footer className="px-4 py-5 sm:p-6">
                <button className="text-white bg-teal-500 rounded p-2 px-4 hover:bg-teal-600 font-bold">
                    Submit sets
                </button>
            </footer>
        </form>
    );
}

export default withFormik(
    {
        validationSchema: schema,
        handleSubmit: (values, {props}) => {
            if (values.messages && values.messages.length < 2) return

            console.log(values)
            // Post data to the backend
            postData(values);

            // Imaginary redirection on success
            redirectToSuccessPage();
        }
    }
)(TestForm);
