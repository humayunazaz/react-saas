import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyInformationForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    businessPhone: Yup.string().required('Business Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      phone: '',
      businessPhone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4 my-5'>
      <div className='flex'>
        <div className='flex flex-col pr-2 flex-1'>
          <label htmlFor='firstName' className='font-bold mb-1'>
            First Name*
          </label>
          <TextField
            id='firstName'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            required
          />
        </div>
        <div className='flex flex-col pl-2 flex-1'>
          <label htmlFor='lastName' className='font-bold mb-1'>
            Last Name*
          </label>
          <TextField
            id='lastName'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            required
          />
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col pr-2 flex-1'>
          <label htmlFor='jobTitle' className='font-bold mb-1'>
            Job Title*
          </label>
          <TextField
            id='jobTitle'
            name='jobTitle'
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
            required
          />
        </div>
        <div className='flex flex-col pl-2 flex-1'>
          <label htmlFor='email' className='font-bold mb-1'>
            Email*
          </label>
          <TextField
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col pr-2 flex-1'>
          <label htmlFor='phone' className='font-bold mb-1'>
            Phone*
          </label>
          <TextField
            id='phone'
            name='phone'
            type='tel'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            required
          />
        </div>
        <div className='flex flex-col pl-2 flex-1'>
          <label htmlFor='businessPhone' className='font-bold mb-1'>
            Business Phone*
          </label>
          <TextField
            id='businessPhone'
            name='businessPhone'
            type='tel'
            value={formik.values.businessPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.businessPhone && Boolean(formik.errors.businessPhone)}
            helperText={formik.touched.businessPhone && formik.errors.businessPhone}
            required
          />
        </div>
      </div>
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
};

export default CompanyInformationForm;
