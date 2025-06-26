import { useNavigate } from 'react-router-dom';

const templates = [
  {
    type: 'email',
    title: 'Email Follow-Up',
    desc: 'Send a welcome email after form submission',
  },
  {
    type: 'event',
    title: 'Event Reminder',
    desc: 'Remind attendees before an event',
  },
  {
    type: 'contact',
    title: 'Contact Form Integration',
    desc: 'Route form submissions to CRM',
  },
  {
    type: 'payment',
    title: 'Payment Confirmation',
    desc: 'Confirm payment and send digital product',
  },
];

export default function ChooseAutomation() {
  const navigate = useNavigate();
  // TODO: Save selected template to state/context
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Add Automation</h2>
      <div style={{ display: 'grid', gap: 18 }}>
        {templates.map(t => (
          <div key={t.type} style={{ border: '1px solid #dedede', borderRadius: 8, padding: 18 }}>
            <div style={{ fontWeight: 600 }}>{t.title}</div>
            <div style={{ color: '#555', margin: '8px 0' }}>{t.desc}</div>
            <button onClick={() => navigate('/automations/configure')}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}