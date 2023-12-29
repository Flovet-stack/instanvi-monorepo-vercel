import { CustomButton } from '../custom-button/CustomButton';
import './empty-list-view.scss';

/* eslint-disable-next-line */
export interface EmptyListViewProps {
  name: string;
  center?: true;
  action?: () => void;
}

export function EmptyListView({ name, center, action }: EmptyListViewProps) {
  return (
    <div className={`empty-list-view ${center && 'center'}`}>
      <i className="fa fa-list" aria-hidden="true"></i>
      <h2>You have no {name}</h2>
      <p>They will be listed here when you have some</p>
      {action && (
        <CustomButton
          theme="primary"
          text="send invites"
          onClick={() => {
            action();
          }}
        />
      )}
    </div>
  );
}

export default EmptyListView;
