import React from "react";
import "../styles/PrivacyPolicy.css"; // Ensure this file exists for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy for GoodnewsAI</h1>
      <p><strong>Effective Date:</strong> [31/03/2025]</p>
      <p><strong>Last Updated:</strong> [31/03/2025]</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to GoodnewsAI, a WhatsApp chatbot designed to facilitate Bible-based conversations and provide scriptural guidance.
      </p>
      <p>
        We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with GoodnewsAI via WhatsApp.
      </p>
      <p>
        By using GoodnewsAI, you consent to the collection and use of your data as described below. If you do not agree, please discontinue using the chatbot.
      </p>

      <h2>2. Data Collection and Storage</h2>
      <h3>2.1 Personal Information</h3>
      <ul>
        <li><strong>Phone Number:</strong> Collected via WhatsApp to enable communication.</li>
        <li><strong>Name & Profile Picture:</strong> If shared by WhatsApp, these are not stored.</li>
      </ul>

      <h3>2.2 Chat Data</h3>
      <p>The content of your messages is processed in real-time to generate responses but is not stored permanently. However, logs indicating that a conversation occurred (without message content) may be retained for technical troubleshooting.</p>

      <h3>2.3 Subscription & Payment Information</h3>
      <ul>
        <li>If you subscribe to premium access, your payment is securely processed via Razorpay.</li>
        <li>We do not store credit/debit card details—all transactions are handled securely by Razorpay.</li>
      </ul>

      <h3>2.4 Data Retention</h3>
      <p>Phone numbers and subscription details are stored in Firebase for as long as your account remains active.</p>
      <p>If a user requests data deletion, all personally identifiable information is removed within 7 days.</p>

      <h2>3. User Consent & Control</h2>
      <h3>3.1 Providing Consent</h3>
      <p>By starting a chat with GoodnewsAI, you agree to the collection and processing of your data as described.</p>
      <p>Users are encouraged to review this Privacy Policy before using the chatbot.</p>

      <h3>3.2 Withdrawing Consent & Data Deletion</h3>
      <p>To stop using GoodnewsAI, simply block the chatbot on WhatsApp.</p>
      <p>To request data deletion, email us at <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a> with your phone number.</p>
      <p>We will process deletion requests within 7 business days.</p>

      <h2>4. How We Use Your Information</h2>
      <ul>
        <li>✅ Providing Bible-based responses to your queries.</li>
        <li>✅ Managing free and premium user access.</li>
        <li>✅ Processing payments (via Razorpay).</li>
        <li>✅ Improving chatbot performance for better user experience.</li>
      </ul>
      <p>We do not use your data for marketing or third-party advertising.</p>

      <h2>5. Data Sharing</h2>
      <p>We do not sell, rent, or share your personal data except in the following cases:</p>
      <ul>
        <li>✔️ <strong>Payment Processing:</strong> Razorpay receives relevant payment information to complete transactions.</li>
        <li>✔️ <strong>Legal Compliance:</strong> If required by law enforcement or regulatory authorities, we may share necessary information.</li>
        <li>✔️ <strong>Technical Support:</strong> Our team may access logs (without message content) to resolve issues.</li>
      </ul>

      <h2>6. Data Security</h2>
      <p>We do not store chat content permanently.</p>
      <p>User data is stored securely in Firebase, encrypted and protected with industry-standard security.</p>
      <p>Payment transactions are handled by Razorpay with PCI-DSS compliance for maximum security.</p>

      <h2>7. User Rights & Contact Information</h2>
      <p>You have the following rights regarding your data:</p>
      <ul>
        <li>✔️ <strong>Right to Access:</strong> You can request details of what personal data is stored.</li>
        <li>✔️ <strong>Right to Modify:</strong> As we do not store chat history, modification of past interactions is not applicable.</li>
        <li>✔️ <strong>Right to Deletion:</strong> You can request data deletion via <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a>.</li>
      </ul>
      <p><strong>📧 Support Email:</strong> <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a></p>
      <p><strong>🌐 Website:</strong> <a href="https://www.tevacraft.in/GoodnewsAI/privacy-policy">tevacraft.in/GoodnewsAI/privacy-policy</a></p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>This policy is reviewed every 6 months or when required by Meta’s guidelines.</p>
      <ul>
        <li>✔️ Users will be notified of major updates via WhatsApp or our website.</li>
        <li>✔️ Continued use of GoodnewsAI after an update implies acceptance of the new terms.</li>
      </ul>

      <h2>9. Compliance with Meta’s Policies</h2>
      <p>GoodnewsAI adheres to:</p>
      <ul>
        <li>✔️ <a href="https://www.facebook.com/policy.php" target="_blank">Meta’s Data Policy</a></li>
        <li>✔️ <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank">WhatsApp Business API Terms</a></li>
      </ul>
      <p>If you have concerns about data usage, contact us at <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;
