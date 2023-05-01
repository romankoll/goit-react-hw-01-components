import css from './App.module.css';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div className={css.main}>
      <div className={css.content}>
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
