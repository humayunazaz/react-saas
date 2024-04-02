import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyAddressForm = () => {
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Street Address is required'),
    suiteNumber: Yup.string(),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.string().required('Zip Code is required'),
  });

  const formik = useFormik({
    initialValues: {
      streetAddress: '',
      suiteNumber: '',
      state: '',
      city: '',
      zip: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4 my-4'>
      <div className='flex flex-col'>
        <label htmlFor='streetAddress' className='font-bold mb-2'>
          Street Address*
        </label>
        <TextField
          id='streetAddress'
          name='streetAddress'
          value={formik.values.streetAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
          helperText={formik.touched.streetAddress && formik.errors.streetAddress}
          required
        />
      </div>
      <div className='flex'>
        <div className='flex flex-col flex-1 pr-2'>
          <label htmlFor='suiteNumber' className='font-bold mb-2'>
            Suite Number
          </label>
          <TextField
            id='suiteNumber'
            name='suiteNumber'
            value={formik.values.suiteNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.suiteNumber && Boolean(formik.errors.suiteNumber)}
            helperText={formik.touched.suiteNumber && formik.errors.suiteNumber}
          />
        </div>
        <div className='flex flex-col flex-1 px-2'>
          <label htmlFor='state' className='font-bold mb-2'>
            State*
          </label>
          <TextField
            id='state'
            name='state'
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            required
          />
        </div>
        <div className='flex flex-col flex-1 pl-2'>
          <label htmlFor='city' className='font-bold mb-2'>
            City*
          </label>
          <TextField
            id='city'
            name='city'
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            required
          />
        </div>
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='zip' className='font-bold mb-2'>
          Zip*
        </label>
        <TextField
          id='zip'
          name='zip'
          value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.zip && Boolean(formik.errors.zip)}
          helperText={formik.touched.zip && formik.errors.zip}
          required
        />
      </div>
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
};

export default CompanyAddressForm;
