import React, { useState, useEffect } from 'react';
import CryptoStorageHelper from './cryptoStorageHelper';

interface RequestActionTimerProps {
  expirationTime: number;
  onTimerEnd: (isExpired: boolean) => void;
  keyName: string;
}

export const RequestActionTimer: React.FC<RequestActionTimerProps> = ({
  expirationTime,
  onTimerEnd,
  keyName,
}) => {
  const storedTime = CryptoStorageHelper.decryptAndRetrieve(keyName);

  const initialTime: number =
    storedTime && typeof storedTime === 'number' ? storedTime : expirationTime;

  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialTime);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          CryptoStorageHelper.encryptAndSave(keyName, newSeconds);
          onTimerEnd(false);
          return newSeconds;
        });
      }, 1000);
    } else {
      onTimerEnd(true);
      localStorage.removeItem(keyName);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
