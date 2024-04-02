import React from 'react';
import CompanyProfileForm from '../components/company-profile-form/CompanyProfileForm';
import CompanyAddressForm from '../components/company-profile-form/CompanyAddressForm';

const CompanyProfilePage = () => {
  return (
    <div className='companyProfileFormContainer p-8'>
      <div className='companyProfileForm mb-7'>
        <div className='companyProfileForm__header'>
          <h1 className='text-3xl font-bold'>Company Profile</h1>
        </div>
        <div className='companyProfileForm__form'>
          <CompanyProfileForm />
        </div>
      </div>
      <div className='companyAddressForm'>
        <div className='companyAddressForm__header mb-3'>
          <h1 className='text-3xl font-bold mb-4'>Company Address</h1>
          <p>
            Please provide your Company’s Headquarters address information. If your Company’s headquarters are not located in the USA please
            reach out to your Customer Success Manager
          </p>
        </div>
        <div className='companyAddressForm__form'>
          <CompanyAddressForm />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
