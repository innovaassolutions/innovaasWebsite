"use client";

import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const bodyTextColor = '#d1d5db';
  const secondaryTextColor = '#bcbcbc';

  return (
    <footer style={{ background: '#181f2a', color: '#fff', marginTop: '3rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2.5rem 2rem 1.5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        {/* Useful Links */}
        <div>
          <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '1rem' }}>Useful Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/legal">Legal</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        {/* About us */}
        <div style={{ minWidth: '250px', maxWidth: '350px' }}>
          <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '1rem' }}>About us</h3>
          <p style={{ color: bodyTextColor, marginBottom: '1rem' }}>
            Innovaas aims to disrupt. Disrupt the status quo of industry, by bringing value adding solutions to our customers in an open system, designed to meet their unique requirements.
          </p>
          <p style={{ color: bodyTextColor }}>Data Democratization & Governance for Industry.</p>
        </div>
        {/* Connect with us */}
        <div>
          <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '1rem' }}>Connect with us</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <FaEnvelope style={{ color: '#F25C05' }} />
            <a href="mailto:info@innovaas.co" style={{ color: bodyTextColor }}>info@innovaas.co</a>
          </div>
        </div>
      </div>
      <div style={{ background: '#131722', color: secondaryTextColor, textAlign: 'center', padding: '0.75rem 0', fontSize: '1rem' }}>
        Copyright © Innovaas Solutions Pte. Ltd. 2024
      </div>
    </footer>
  );
} 