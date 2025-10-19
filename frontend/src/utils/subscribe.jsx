export default function SubscribeButton({styleprop, content}) {
  const PUBLIC_VAPID_KEY = import.meta.env.VITE_PUBLIC_VAPID_KEY;

  // Helper function to convert the VAPID key
  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const handleSubscribe = async () => {
  
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Push notifications are not supported in this browser.');
      return;
    }

    // 2. Request Permission
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      alert('You denied permission for notifications.');
      return;
    }

    // Get the service worker registration
    const registration = await navigator.serviceWorker.ready;
    
    // 3. Get Subscription
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true, 
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });

    
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/subs/subscribe`, {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(res.status === 400){ 
        alert('You are already subscribed!');
        return;
      }
      if(res.status === 201) alert('You are now subscribed to event reminders!');
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  };

const [loading, setLoading] = React.useState(false);

return (
    <button 
        onClick={async () => {
            setLoading(true);
            await handleSubscribe();
            setLoading(false);
        }} 
        className={styleprop}
        disabled={loading}
    >
        {loading ? "Subscribing..." : content}
    </button>
);
}