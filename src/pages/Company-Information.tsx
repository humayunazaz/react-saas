import React from 'react';
import CompanyInformationForm from '../components/company-information-form/company-information-form';

const CompanyInformationPage = () => {
  return (
    <div className='companyInformationFormContainer p-8'>
      <div className='companyInformationForm mb-7'>
        <div className='companyInformationForm__header'>
          <h1 className='text-3xl font-bold'>Company Information</h1>
        </div>
        <div className='companyInformationForm__form mb-4'>
          <CompanyInformationForm />
        </div>
        <div className='companyInformation__signer'>
          <h1 className='text-2xl font-bold'>Signer Information</h1>
          <div className='signerContent my-8'>
            <h4 className='text-large mb-3'>The following IRS guidance outlines the authorized signers for different entities:</h4>
            <ul className='mb-7'>
              <li className='mb-2'>
                <span className='font-bold'>Sole proprietorship — </span>The individual who owns the business.
              </li>
              <li className='mb-2'>
                <span className='font-bold'>Corporation (including a limited liability company (LLC) treated as a corporation) — </span>The
                president, vice president, or other principle officer duly authorized to sign.
              </li>
              <li className='mb-2'>
                <span className='font-bold'>Partnership (including an LLC treated as a partnership) or unincorporated organization — </span>
                Tax Matters Partner or Partner’s Representative.
              </li>
              <li className='mb-2'>
                <span className='font-bold'>Single-member LLC treated as a disregarded entity for federal income tax purposes — </span>The
                single owner of the LLC.
              </li>
            </ul>
            <p>
              Please confirm the primary contact and signing authority for your organization. Contact your Customer Success Manager if you
              have any questions or concerns.
            </p>
          </div>
          <div className='companyInformationForm__form mb-4'>
            <CompanyInformationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformationPage;
