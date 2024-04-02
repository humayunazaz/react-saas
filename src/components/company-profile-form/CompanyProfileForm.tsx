import React from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyProfileForm = () => {
  const validationSchema = Yup.object().shape({
    legalEntityName: Yup.string().required('Company Legal Entity Name is required'),
    doingBusinessAs: Yup.string().required('Doing business as is required'),
    primaryIndustry: Yup.string().required('Primary industry is required'),
    secondryIndustry: Yup.string().required('Secondary industry is required'),
    ein: Yup.number().required('Employer Identification Number (EIN) is required'),
    website: Yup.string().required('Company Website is required'),
    description: Yup.string().required('Company Description is required'),
    fte: Yup.number().required('Average monthly number of Full Time Employees (FTE) in 2019 is required'),
    startYear: Yup.number().required('Year the company started operations is required'),
    peoUsed: Yup.string().required('Please select whether your Company used a Professional Employer Organization (PEO)'),
    ercFiled: Yup.string().required('Please select whether your Organization previously filed for the Employee Retention Credit (ERC)'),
  });

  const formik = useFormik({
    initialValues: {
      legalEntityName: '',
      doingBusinessAs: '',
      primaryIndustry: '',
      secondryIndustry: '',
      ein: '',
      website: '',
      description: '',
      fte: '',
      startYear: '',
      peoUsed: '',
      ercFiled: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div className='my-4'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4'>
        <div className='flex'>
          <div className='flex flex-col flex-1 space-y-2 pr-2'>
            <label htmlFor='legalEntityName' className='font-bold'>
              Company Legal Entity Name*
            </label>
            <TextField
              id='legalEntityName'
              name='legalEntityName'
              value={formik.values.legalEntityName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.legalEntityName && Boolean(formik.errors.legalEntityName)}
              helperText={formik.touched.legalEntityName && formik.errors.legalEntityName}
              required
            />
          </div>
          <div className='flex flex-col flex-1 pl-2 space-y-2'>
            <label htmlFor='doingBusinessAs' className='font-bold'>
              Doing Business As (If Applicable)
            </label>
            <TextField
              id='doingBusinessAs'
              name='doingBusinessAs'
              value={formik.values.doingBusinessAs}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.doingBusinessAs && Boolean(formik.errors.doingBusinessAs)}
              helperText={formik.touched.doingBusinessAs && formik.errors.doingBusinessAs}
              required
            />
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='ein' className='font-bold'>
            Employer Identification Number (EIN)*
          </label>
          <TextField
            id='ein'
            name='ein'
            type='number'
            value={formik.values.ein}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ein && Boolean(formik.errors.ein)}
            helperText={formik.touched.ein && formik.errors.ein}
            required
          />
        </div>
        <div className='flex'>
          <div className='flex flex-col flex-1 pr-2 space-y-2'>
            <label htmlFor='primaryIndustry' className='font-bold'>
              What is your Company’s primary industry?*
            </label>
            <Select
              id='primaryIndustry'
              name='primaryIndustry'
              value={formik.values.primaryIndustry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.primaryIndustry && Boolean(formik.errors.primaryIndustry)}
              required
            >
              <MenuItem value=''>Select Primary Industry</MenuItem>
              <MenuItem value='manufacturing'>Manufacturing</MenuItem>
              <MenuItem value='technology'>Technology</MenuItem>
              <MenuItem value='healthcare'>Healthcare</MenuItem>
              {/* Add more industries as needed */}
            </Select>
            {formik.touched.primaryIndustry && formik.errors.primaryIndustry && (
              <div style={{ color: 'red' }}>{formik.errors.primaryIndustry}</div>
            )}
          </div>
          <div className='flex flex-col space-y-2 flex-1 pl-2'>
            <label htmlFor='secondryIndustry' className='font-bold'>
              What is your Company’s secondary industry?
            </label>
            <Select
              id='secondryIndustry'
              name='secondryIndustry'
              value={formik.values.secondryIndustry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.secondryIndustry && Boolean(formik.errors.secondryIndustry)}
              required
            >
              <MenuItem value=''>Select Primary Industry</MenuItem>
              <MenuItem value='manufacturing'>Manufacturing</MenuItem>
              <MenuItem value='technology'>Technology</MenuItem>
              <MenuItem value='healthcare'>Healthcare</MenuItem>
            </Select>
            {formik.touched.secondryIndustry && formik.errors.secondryIndustry && (
              <div style={{ color: 'red' }}>{formik.errors.secondryIndustry}</div>
            )}
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='website' className='font-bold'>
            Please provide your Company’s website*
          </label>
          <TextField
            id='website'
            name='website'
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
            required
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='description' className='font-bold'>
            Please provide your Company’s description
          </label>
          <TextField
            id='description'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            required
          />
        </div>
        <div className='flex'>
          <div className='flex flex-col flex-1 pr-2 space-y-2'>
            <label htmlFor='fte' className='font-bold'>
              Average monthly number of Full Time Employees (FTE) in 2019 *
            </label>
            <TextField
              id='fte'
              name='fte'
              type='number'
              value={formik.values.fte}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fte && Boolean(formik.errors.fte)}
              helperText={formik.touched.fte && formik.errors.fte}
              required
            />
          </div>
          <div className='flex flex-col space-y-2 flex-1 pl-2'>
            <label htmlFor='startYear' className='font-bold'>
              What year did the company start operations? *
            </label>
            <TextField
              id='startYear'
              name='startYear'
              type='number'
              value={formik.values.startYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.startYear && Boolean(formik.errors.startYear)}
              helperText={formik.touched.startYear && formik.errors.startYear}
              required
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='flex flex-col flex-1 pr-2 space-y-2'>
            <label className='font-bold'>
              Did your Company use a Professional Employer Organization (PEO) at any time from Q1 2020 through Q4 2021?*
            </label>
            <RadioGroup id='peoUsed' name='peoUsed' value={formik.values.peoUsed} onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <FormControlLabel value='yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='no' control={<Radio />} label='No' />
            </RadioGroup>
            {formik.touched.peoUsed && formik.errors.peoUsed && <div style={{ color: 'red' }}>{formik.errors.peoUsed}</div>}
          </div>
          <div className='flex flex-col space-y-2 flex-1 pl-2'>
            <label className='font-bold'>
              Has your Organization previously filed for the Employee Retention Credit (ERC) in the past?*
            </label>
            <RadioGroup
              id='ercFiled'
              name='ercFiled'
              value={formik.values.ercFiled}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel value='yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='no' control={<Radio />} label='No' />
            </RadioGroup>
            {formik.touched.ercFiled && formik.errors.ercFiled && <div style={{ color: 'red' }}>{formik.errors.ercFiled}</div>}
          </div>
        </div>
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CompanyProfileForm;
