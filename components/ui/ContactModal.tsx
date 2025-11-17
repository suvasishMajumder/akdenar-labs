"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  serviceTitle?: string | undefined;
  packageInfo?: {
    packageName?: string;
    price?: string;
  } | null;
};

export default function ContactModal({ open, onClose, serviceTitle, packageInfo }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - wire this up to your form handler/back-end as needed
    console.log('Contact submit', { name, email, message, serviceTitle, packageInfo });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Contact Us{serviceTitle ? ` — ${serviceTitle}` : ''}</h3>
            <p className="text-sm text-gray-600 mt-1">Fill this quick form and we'll get back to you shortly.</p>
          </div>
          <button aria-label="Close" onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {packageInfo && (
            <div className="p-3 rounded-md bg-gray-50 border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Selected Package</div>
                  <div className="font-medium">{packageInfo.packageName}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Price</div>
                  <div className="font-semibold">{packageInfo.price}</div>
                </div>
              </div>

            </div>
          )}
          <div>
            <label className="text-sm block text-gray-700">Name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9]" />
          </div>

          <div>
            <label className="text-sm block text-gray-700">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9]" />
          </div>

          <div>
            <label className="text-sm block text-gray-700">Message</label>
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9]" />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-[#7F56D9] text-white">Send</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
