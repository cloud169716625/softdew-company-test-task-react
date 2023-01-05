/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import SelectCountryDropdown from '../../../components/SelectCountryDropdown';
import { useApi } from '../../../utils/hooks';
import { showAlert } from '../../../utils/notifications';
import { useUrlQuery } from '../../../utils/router';
import { MODAL_SCREENS } from './constants';

const KEY = '6LdxyZAeAAAAAJJHHG8tKKGp7GeGVHR6hFLl1FfW';
const handleAnalytics = () => {
  window.dotq = window.dotq || [];
  window.dotq.push({
    projectId: '10000',
    properties: { pixelId: '10174444', qstrings: { et: 'custom', ec: 'Registration' } },
  });
};

const SubscribeForm = ({ onChangeScreen }) => {
  const recaptchaRef = useRef();
  const query = useUrlQuery();
  const [form, setForm] = useState({
    email: '',
    selectedCountry: null,
    withNano: null,
  });
  const {
    data,
    error,
    isLoading,
    refetch: submitData,
  } = useApi('post', '/v2/waiting_list', { type: 'ledger' });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (error) {
      const { message } = error;
      showAlert({ message, type: 'warning' });
    } else if (data) {
      const { alreadyAdded, status, message } = data;
      if (alreadyAdded) {
        showAlert({ message: 'Email was already added', type: 'danger' });
      } else if (status >= 400) {
        showAlert({ message, type: 'warning' });
      } else {
        onChangeScreen(MODAL_SCREENS[1]);
        localStorage.setItem('loginState', JSON.stringify(data))
      }
    }
  }, [data, error]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    submitData({
      email: form.email,
      countryId: form.selectedCountry.id,
      firstName: 'Suns',
      sourceReferralCode: query.get('ref') || null,
      withNano: form.withNano,
      utm_source: query.get('utm_source') || null,
      utm_medium: query.get('utm_medium') || null,
      utm_campaign: query.get('utm_campaign') || null,
      utm_content: query.get('utm_content') || null,
      recaptchaValue,
    });
    handleAnalytics();
  };
  return (
    <div className="form">
      <p className="header upper-case text-h1">Join the waitlist</p>
      <div>
        <p className="text-f5">
          Refer your friends and be first in line for a free physical card and early access. The
          more people you refer, the more you move up in line.
        </p>
        <p className="text-f5">Join the waitlist to get your exclusive referral link.</p>
        <p className="text-f5">
          <i>
            To receive your reward, you need to enter the email address you’ll use for creating your
            card account.
          </i>
        </p>
      </div>
      <form onSubmit={handleSubmitForm} id="confirm-phone-form" style={{ marginTop: '2.563rem' }}>
        <div className="form-group mb-4">
          <input
            name="email"
            type="email"
            className="form-control-input"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <label className="floating-label">Enter your email</label>
        </div>
        <div className="select-group">
          {form.selectedCountry && (
            <label style={{ fontSize: '0.75rem', color: '#c3c3c3' }}>
              Enter your country of residence
            </label>
          )}
          <SelectCountryDropdown
            name="selectedCountry"
            value={form.selectedCountry}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <p>Are you VetCoin MetaVerse Member?</p>
          <div className="d-flex flex-row align-items-center justify-content-start">

            <label className="w-50 d-flex flex-row align-items-center">
              <input
                onChange={() => handleChange({ target: { value: true, name: 'withNano' } })}
                checked={form.withNano === true}
                className="me-2 form-check-input"
                type="radio"
              />
              <span>Yes</span>
            </label>
            <label className="w-50 d-flex flex-row align-items-center">
              <input
                onChange={() => handleChange({ target: { value: false, name: 'withNano' } })}
                checked={form.withNano === false}
                className="me-2 form-check-input"
                type="radio"
              />
              <span>No</span>
            </label>
          </div>
          <div className="mt-4">
            <ReCAPTCHA ref={recaptchaRef} sitekey={KEY} theme="dark" />
          </div>
        </div>
        <button type="submit" className="w-100 btn btn-primary btn-wide">
          {isLoading ? <div className="spinner-border spinner-border-sm" role="status" /> : 'Join'}
        </button>
      </form>
    </div>
  );
};
export default SubscribeForm;

SubscribeForm.propTypes = {
  onChangeScreen: PropTypes.func.isRequired,
};
