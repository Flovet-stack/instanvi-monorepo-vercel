import React, { useState, useEffect } from 'react';

import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';

interface PasswordResetTimerProps {
  expirationTime: number;
  onTimerEnd: (isExpired: boolean) => void;
}

const LOCAL_STORAGE_TIMER = 'passwordResetTimer';

const PasswordResetTimer: React.FC<PasswordResetTimerProps> = ({
  expirationTime,
  onTimerEnd,
}) => {
  const storedTime =
    CryptoStorageHelper.decryptAndRetrieve(LOCAL_STORAGE_TIMER);

  const initialTime: number =
    storedTime && typeof storedTime === 'number' ? storedTime : expirationTime;

  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialTime);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          CryptoStorageHelper.encryptAndSave(LOCAL_STORAGE_TIMER, newSeconds);
          onTimerEnd(false);
          return newSeconds;
        });
      }, 1000);
    } else {
      onTimerEnd(true);
      localStorage.removeItem(LOCAL_STORAGE_TIMER);
    }

    return () => clearInterval(interval);
  }, [secondsRemaining, onTimerEnd]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  return (
    <div>
      <p>
        Send new request in{' '}
        <span className="color-primary">{formatTime(secondsRemaining)}</span>{' '}
        minutes.
      </p>
    </div>
  );
};

export default PasswordResetTimer;
